import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { img } from "@/data/content";

/**
 * Photo rendered as a background image on a navy base, so the layout still
 * looks right if a photo is slow or unavailable.
 */
export function Photo({
  src,
  alt,
  width = 1200,
  className = "",
  style,
  children,
}: {
  src: string;
  alt?: string;
  width?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      role={alt ? "img" : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
      className={`bg-night bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url("${img(src, width)}")`, ...style }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.2em] ${
        light ? "text-white/85" : "text-ink"
      }`}
    >
      <span className={`h-[2px] w-8 ${light ? "bg-brand-red" : "bg-brand-red"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  text,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  heading: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-[2.6rem] ${
          light ? "text-white" : "text-heading"
        }`}
      >
        {heading}
      </h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-ink"}`}>{text}</p>}
    </div>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost" | "navy";
  className?: string;
  arrow?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", arrow = false }: BtnProps) {
  const styles = {
    primary: "bg-brand-red text-white shadow-[0_10px_24px_-12px_rgba(225,4,28,0.45)] hover:bg-brand-redDark",
    navy: "bg-navy text-white hover:bg-brand-red",
    outline: "border-2 border-line/15 text-heading hover:border-line hover:bg-navy hover:text-white",
    light: "bg-surface text-heading hover:bg-brand-red hover:text-white",
    ghost: "border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy",
  }[variant];
  const isExternal = href.startsWith("http");
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-offset-4 ${styles} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm font-medium text-white/70">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="transition-colors hover:text-white">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">
                {it.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-white/40">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  heading,
  text,
  image,
  crumbs,
  children,
  aside,
}: {
  eyebrow?: string;
  heading: string;
  text?: string;
  image?: string;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
  /** Optional panel shown on the right on large screens (below the text on mobile). */
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      {image && <Photo src={image} width={1800} className="absolute inset-0 -z-20" />}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-night/95 via-night/80 to-night/40"
        aria-hidden="true"
      />
      <div className="dot-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <div
        className={`container relative py-20 sm:py-24 lg:py-28 ${
          aside ? "grid items-center gap-12 lg:grid-cols-12 lg:gap-16" : ""
        }`}
      >
        <div className={`animate-fade-up ${aside ? "lg:col-span-7" : "max-w-3xl"}`}>
          {crumbs ? <Breadcrumbs items={crumbs} /> : eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {heading}
          </h1>
          {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{text}</p>}
          {children}
        </div>
        {aside && (
          <div className="animate-fade-up lg:col-span-5" style={{ animationDelay: "150ms" }}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
