# Fidinda Management Solutions — Website

Next.js (App Router) + TypeScript + Tailwind CSS website for **Fidinda Management Solutions**, the business and organisational consultancy division of Fidinda Solutions, Phnom Penh, Cambodia.

## Before you start

1. **Logo** – `public/logo.png` (transparent, navy text) is used on light backgrounds; `public/logo-dark.png` (white text, red tagline) is used in dark theme and on the Contact card; `public/logo-footer.png` sits in the white tile in the footer. The favicon is `src/app/icon.png`.
2. **Photos** – the site uses free Unsplash photos (set in `images` and each service's `image` in `src/data/content.ts`). To use your own, put files in `public/images/` and change the value to e.g. `"/images/team.jpg"`.
3. **Social preview image** – optionally replace `public/og-image.png` (1200 × 630 px).
4. **Edit text** – all wording, phone numbers, links, services, FAQs and resources live in **`src/data/content.ts`**. Things to fill in there:
   - `FINANCIAL_SITE_URL` (top of the file) – set to the Fidinda Financial Solutions URL
   - `site.whatsappNumber` / `site.telegramUrl` – floating chat button targets

## Dark theme

A sun/moon button in the header switches themes. First visit follows the visitor's device setting; their choice is then remembered. Theme colours are CSS variables at the top of `src/app/globals.css` (`:root` = light, `html.dark` = dark) and are used through the `canvas`, `surface`, `mist`, `heading`, `ink` and `line` colours in `tailwind.config.ts`. Brand navy and red never change.

**Colour balance:** brand red `#E1041C` is kept for buttons, the active menu item and thin accent lines. Brand navy `#1C095A` is used for headings, the logo, the footer and small highlights. Large dark areas (hero overlays, the top bar and the call-to-action banner) use `night` `#15122B`, a deeper and calmer shade of the same navy. Icon tiles use the soft `navy-50` tint instead of solid colour.

## Run locally

Requires Node.js 18.18+ (Node 20 or 22 recommended).

```bash
npm install
cp .env.example .env.local      # Windows: copy .env.example .env.local
# fill in TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local
npm run dev
```

Open http://localhost:3000. For a production check: `npm run build && npm start`.

## Telegram setup (all form submissions)

Every form on the site — Contact, Request a Quote, and any form you add later — is sent to Telegram through `src/app/api/submit/route.ts`.

1. In Telegram, message **@BotFather** → `/newbot` → copy the token into `TELEGRAM_BOT_TOKEN`.
2. Send any message to your bot (or add the bot to a group and send a message there).
3. Open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `chat.id` into `TELEGRAM_CHAT_ID` (group IDs start with `-100`). To notify several chats, separate IDs with commas.
4. Run `npm run telegram:test` — it checks the token and sends a test message to each chat (needs Node 20.6+).
5. Restart `npm run dev` and submit a form to see a real message.

What the route does: validates fields, blocks spam bots (hidden honeypot field + rate limit), adds the page the form was sent from, splits very long messages to fit Telegram's limit, and delivers to every chat ID.

**Adding a new form:** POST JSON to `/api/submit` with `type` (e.g. `"newsletter"`), an optional `formName`, and your fields. Any field you send is forwarded automatically.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. On https://vercel.com → **Add New… → Project** → import the repo (framework: Next.js, defaults are fine).
3. Under **Environment Variables**, add `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` and `NEXT_PUBLIC_SITE_URL` (e.g. `https://fidinda-management.vercel.app` or your custom domain).
4. Click **Deploy**. After adding a custom domain, update `NEXT_PUBLIC_SITE_URL` and redeploy.

## Old URL redirects

`next.config.ts` contains commented redirects for the old fidindasolutions.com service URLs. Uncomment the ones you need.

## Structure

```
src/
  app/                 # pages, API route, sitemap.ts, robots.ts, not-found.tsx
    services/[slug]/   # the five service pages (generated from content.ts)
    api/submit/        # Telegram form handler
  components/          # Header, Footer, forms, sections, floating chat button
  data/content.ts      # ALL editable site text
  lib/seo.ts           # per-page metadata helper
public/                # logo.png, og-image.png
```
