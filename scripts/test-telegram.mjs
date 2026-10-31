// Sends a test message to every chat in TELEGRAM_CHAT_ID.
// Run with:  npm run telegram:test   (reads .env.local, needs Node 20.6+)

const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
const chatIds = (process.env.TELEGRAM_CHAT_ID || "")
  .split(",")
  .map((c) => c.trim())
  .filter(Boolean);

if (!token || chatIds.length === 0) {
  console.error("❌ TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set in .env.local");
  process.exit(1);
}

const me = await fetch(`https://api.telegram.org/bot${token}/getMe`).then((r) => r.json());
if (!me.ok) {
  console.error("❌ The bot token is not valid:", me.description);
  process.exit(1);
}
console.log(`✅ Bot found: @${me.result.username}`);

let failed = 0;
for (const chatId of chatIds) {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      parse_mode: "HTML",
      text: "✅ <b>Test message</b>\n<i>Fidinda Management Solutions</i>\n\nWebsite forms will be delivered to this chat.",
    }),
  }).then((r) => r.json());

  if (res.ok) console.log(`✅ Sent to chat ${chatId}`);
  else {
    failed++;
    console.error(`❌ Chat ${chatId}: ${res.description}`);
    console.error("   Tip: send any message to the bot first (or add it to the group), then check the chat ID.");
  }
}
process.exit(failed ? 1 : 0);
