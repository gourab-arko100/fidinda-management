import { site } from "@/data/content";

type Kind = "facebook" | "instagram" | "tiktok";

export function SocialGlyph({ kind, className = "h-4 w-4" }: { kind: Kind; className?: string }) {
  if (kind === "facebook")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
      </svg>
    );
  if (kind === "instagram")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z" />
    </svg>
  );
}

/**
 * variant:
 *  - "outline": outlined circles on dark backgrounds (footer)
 *  - "solid":   filled translucent circles on dark backgrounds
 *  - "light":   for white backgrounds
 *  - "mini":    small icons for the top bar
 */
export default function SocialIcons({ variant = "outline" }: { variant?: "outline" | "solid" | "light" | "mini" }) {
  const styles = {
    outline: "h-11 w-11 border border-white/40 text-white hover:border-brand-red hover:bg-brand-red",
    solid: "h-11 w-11 bg-white/10 text-white hover:bg-brand-red",
    light: "h-11 w-11 border border-line/15 text-heading hover:border-brand-red hover:bg-brand-red hover:text-white",
    mini: "h-7 w-7 text-white/80 hover:text-white hover:bg-white/10",
  }[variant];
  return (
    <ul className={`flex ${variant === "mini" ? "gap-1" : "gap-3"}`}>
      {site.socials.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.name} (opens in a new tab)`}
            className={`flex items-center justify-center rounded-full transition-all duration-200 ${styles}`}
          >
            <SocialGlyph kind={s.icon} className={variant === "mini" ? "h-3.5 w-3.5" : "h-4 w-4"} />
          </a>
        </li>
      ))}
    </ul>
  );
}
