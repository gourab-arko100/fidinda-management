import { NextResponse } from "next/server";
import { contactPage, quoteForm } from "@/data/content";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Escape text for Telegram HTML parse mode. */
const esc = (v: unknown) =>
  String(v ?? "")
    .slice(0, 3000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

// Very small in-memory rate limit (per server instance).
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  return list.length > 8;
}

function timestamp() {
  return new Date().toLocaleString("en-GB", { timeZone: "Asia/Phnom_Penh", dateStyle: "medium", timeStyle: "short" });
}

function buildQuote(b: Record<string, unknown>): string | { error: string } {
  const fullName = str(b.fullName);
  const organisation = str(b.organisation);
  const email = str(b.email);
  const phone = str(b.phone);
  const organisationType = str(b.organisationType);
  const timeline = str(b.timeline);
  const language = str(b.language) || "English";
  const message = str(b.message);
  const services = Array.isArray(b.services)
    ? b.services.filter((s): s is string => typeof s === "string" && quoteForm.services.includes(s))
    : [];

  if (fullName.length < 2 || organisation.length < 2 || !EMAIL_RE.test(email) || phone.length < 6)
    return { error: "Missing or invalid contact details." };
  if (!quoteForm.organisationTypes.includes(organisationType)) return { error: "Invalid organisation type." };
  if (!quoteForm.timelines.includes(timeline)) return { error: "Invalid timeline." };
  if (services.length === 0) return { error: "Select at least one service." };
  if (message.length < 10) return { error: "Message is too short." };

  return [
    "📋 <b>New Quotation Request</b>",
    "<i>Fidinda Management Solutions</i>",
    "",
    `👤 <b>Name:</b> ${esc(fullName)}`,
    `🏢 <b>Organisation:</b> ${esc(organisation)}`,
    `🏷️ <b>Type:</b> ${esc(organisationType)}`,
    `📧 <b>Email:</b> ${esc(email)}`,
    `📱 <b>Phone/WhatsApp:</b> ${esc(phone)}`,
    `🗣️ <b>Preferred language:</b> ${esc(language)}`,
    `⏱️ <b>Timeline:</b> ${esc(timeline)}`,
    "",
    "🛠️ <b>Services needed:</b>",
    ...services.map((s) => `  • ${esc(s)}`),
    "",
    "📝 <b>Project details:</b>",
    esc(message),
    "",
    `🕒 ${esc(timestamp())} (Phnom Penh)`,
  ].join("\n");
}

function buildContact(b: Record<string, unknown>): string | { error: string } {
  const cf = contactPage.form;
  const name = str(b.name);
  const email = str(b.email);
  const phone = str(b.phone);
  const organisation = str(b.organisation);
  const message = str(b.message);
  const pick = (v: unknown, list: string[]) => (list.includes(str(v)) ? str(v) : "");
  const organisationType = pick(b.organisationType, cf.organisationTypes);
  const topic = pick(b.topic, cf.topics);
  const language = pick(b.language, cf.languages);
  const contactMethod = pick(b.contactMethod, cf.contactMethods);
  const services = Array.isArray(b.services)
    ? b.services.filter((s): s is string => typeof s === "string" && cf.services.includes(s))
    : [];

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10) return { error: "Missing or invalid fields." };
  if (b.consent !== true) return { error: "Consent is required." };

  const lines = [
    "✉️ <b>New Contact Enquiry</b>",
    "<i>Fidinda Management Solutions</i>",
    "",
    "👤 <b>About</b>",
    `Name: ${esc(name)}`,
    `Email: ${esc(email)}`,
    phone && `Phone/WhatsApp: ${esc(phone)}`,
    organisation && `Organisation: ${esc(organisation)}`,
    organisationType && `Type: ${esc(organisationType)}`,
    "",
    services.length ? "🛠️ <b>Services needed</b>" : "",
    ...services.map((s) => `  • ${esc(s)}`),
    "📌 <b>Enquiry</b>",
    topic && `Topic: ${esc(topic)}`,
    language && `Preferred language: ${esc(language)}`,
    contactMethod && `Best way to reach: ${esc(contactMethod)}`,
    "",
    "💬 <b>Message</b>",
    esc(message),
    "",
    `🕒 ${esc(timestamp())} (Phnom Penh)`,
  ].filter((l): l is string => typeof l === "string");

  // collapse repeated blank lines
  return lines.filter((l, i) => !(l === "" && lines[i - 1] === "")).join("\n");
}

/** Fallback for any other form: forwards every field it receives, so new forms never get lost. */
function buildGeneric(b: Record<string, unknown>): string | { error: string } {
  const skip = new Set(["type", "website", "formName"]);
  const label = (k: string) => k.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^./, (c) => c.toUpperCase());
  const lines: string[] = [];
  for (const [k, v] of Object.entries(b)) {
    if (skip.has(k)) continue;
    let val = "";
    if (Array.isArray(v)) val = v.filter((x) => typeof x === "string" || typeof x === "number").join(", ");
    else if (typeof v === "boolean") val = v ? "Yes" : "No";
    else if (typeof v === "string" || typeof v === "number") val = String(v).trim();
    if (val) lines.push(`<b>${esc(label(k))}:</b> ${esc(val)}`);
  }
  if (lines.length === 0) return { error: "Empty form." };
  const name = str(b.formName) || str(b.type) || "Website form";
  return [`📨 <b>New ${esc(name)} submission</b>`, "<i>Fidinda Management Solutions</i>", "", ...lines, "", `🕒 ${esc(timestamp())} (Phnom Penh)`].join("\n");
}

/** Telegram allows max 4096 characters per message — split long submissions on line breaks. */
function chunk(text: string, max = 3900): string[] {
  const parts: string[] = [];
  let cur = "";
  for (const line of text.split("\n")) {
    if ((cur + "\n" + line).length > max && cur) {
      parts.push(cur);
      cur = line.length > max ? line.slice(0, max) : line;
    } else cur = cur ? cur + "\n" + line : line;
  }
  if (cur) parts.push(cur);
  return parts;
}

async function sendTelegram(token: string, chatId: string, text: string) {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) throw new Error(`Telegram error for chat ${chatId}: ${JSON.stringify(data)}`);
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden "website" field — pretend success.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const built =
    body.type === "quote" ? buildQuote(body) : body.type === "contact" ? buildContact(body) : buildGeneric(body);
  if (typeof built !== "string") return NextResponse.json({ ok: false, error: built.error }, { status: 400 });

  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  // One or more chat IDs, comma-separated (e.g. "123456789,-1001234567890").
  const chatIds = (process.env.TELEGRAM_CHAT_ID || "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);
  if (!token || chatIds.length === 0) {
    console.error("[submit] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set.");
    return NextResponse.json({ ok: false, error: "Server is not configured." }, { status: 500 });
  }

  // Add which page the form was sent from.
  let source = "";
  try {
    const ref = req.headers.get("referer");
    if (ref) source = new URL(ref).pathname;
  } catch {
    /* ignore bad referer */
  }
  const text = source ? `${built}\n📍 Sent from: ${esc(source)}` : built;

  const results = await Promise.allSettled(
    chatIds.map(async (id) => {
      for (const part of chunk(text)) await sendTelegram(token, id, part);
    })
  );
  const failed = results.filter((r) => r.status === "rejected") as PromiseRejectedResult[];
  failed.forEach((f) => console.error("[submit]", f.reason));

  // Success if at least one chat received it.
  if (failed.length === chatIds.length) {
    return NextResponse.json({ ok: false, error: "Could not deliver message." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
