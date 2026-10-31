import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calculator, Plus } from "lucide-react";
import { divisions, home, images, values, type Service } from "@/data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { Button, Photo, SectionHeading } from "./ui";

/* ---------------- Service card with photo ---------------- */
export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Reveal delay={index * 80} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-card ring-1 ring-line/[0.06] transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
      >
        <div className="relative h-52 overflow-hidden">
          <Photo
            src={service.image}
            width={800}
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" aria-hidden="true" />
          <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-1 flex-col px-7 pb-7">
          <span className="-mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red text-white shadow-[0_12px_24px_-10px_rgba(225,4,28,0.8)] transition-colors duration-300 group-hover:bg-navy">
            <Icon name={service.icon} className="h-7 w-7" />
          </span>
          <h3 className="mt-5 text-xl font-extrabold leading-snug text-heading">{service.title}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-ink">{service.tagline}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-heading transition-colors group-hover:text-brand-red">
            Learn more
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-50 transition-colors group-hover:bg-brand-red group-hover:text-white">
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------- Four Fs ---------------- */
export function ValuesSection() {
  return (
    <section id="values" className="relative scroll-mt-24 overflow-hidden bg-mist py-24 lg:py-28" aria-labelledby="values-heading">
      <div className="dot-grid-navy absolute -left-10 top-10 h-48 w-48 opacity-60" aria-hidden="true" />
      <div className="dot-grid-navy absolute -right-10 bottom-10 h-48 w-48 opacity-60" aria-hidden="true" />
      <div className="container relative">
        <div id="values-heading">
          <SectionHeading
            eyebrow={values.eyebrow}
            heading={values.heading}
            text="The principles that guide every relationship and every project across Fidinda Solutions."
            center
          />
        </div>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-surface p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:bg-navy hover:shadow-lift">
                <span
                  className="pointer-events-none absolute -bottom-10 -right-4 select-none text-[170px] font-extrabold leading-none text-heading/[0.04] transition-colors duration-500 group-hover:text-white/[0.06]"
                  aria-hidden="true"
                >
                  F
                </span>
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-2xl font-extrabold text-white transition-colors duration-500 group-hover:bg-brand-red">
                    F
                  </span>
                  <Icon name={v.icon} className="h-6 w-6 text-brand-red transition-colors duration-500 group-hover:text-white" />
                </div>
                <h3 className="mt-7 text-2xl font-extrabold text-heading transition-colors duration-500 group-hover:text-white">
                  <span className="text-brand-red">F</span>
                  {v.title.slice(1)}
                </h3>
                <div className="mt-3 h-[3px] w-10 rounded bg-brand-red transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                <p className="relative mt-5 text-[15px] leading-relaxed text-ink transition-colors duration-500 group-hover:text-white/80">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Cross-link to Financial Solutions ---------------- */
export function FinancialBanner() {
  const b = home.financialBanner;
  return (
    <section className="py-14" aria-label="Fidinda Financial Solutions">
      <div className="container">
        <Reveal>
          <a
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-line/10 bg-surface p-7 shadow-card transition-all duration-300 hover:shadow-lift sm:flex-row sm:items-center sm:p-9"
          >
            <span className="absolute inset-y-0 left-0 w-1.5 bg-brand-red" aria-hidden="true" />
            <div className="flex items-center gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-white transition-colors group-hover:bg-brand-red">
                <Calculator className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">Sister division</p>
                <p className="mt-1 text-xl font-extrabold text-heading sm:text-2xl">{b.text}</p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-bold text-white transition-colors group-hover:bg-brand-red">
              {b.linkLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Call to action with photo ---------------- */
export function CTAStrip({
  heading = home.cta.heading,
  text = home.cta.text,
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="pb-24 pt-4">
      <div className="container">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-7 py-14 text-white sm:px-14 lg:py-20">
            <Photo src={images.cta} width={1600} className="absolute inset-0 -z-20" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/95 to-navy/70" aria-hidden="true" />
            <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border-[40px] border-brand-red/25" aria-hidden="true" />
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-block h-1.5 w-14 rounded bg-brand-red" aria-hidden="true" />
                <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">{heading}</h2>
                <p className="mt-5 text-lg leading-relaxed text-white/80">{text}</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-4">
                <Button href={home.cta.button.href} arrow>
                  {home.cta.button.label}
                </Button>
                <Button href="/contact" variant="ghost">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ accordion ---------------- */
export function FAQList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <details
          key={f.q}
          className="faq group rounded-2xl border border-line/10 bg-surface px-6 shadow-sm transition-shadow open:shadow-card"
          open={i === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-bold text-heading">
            {f.q}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-50 text-heading transition-all duration-300 group-open:rotate-45 group-open:bg-brand-red group-open:text-white">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="pb-6 pr-10 leading-relaxed text-ink">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------------- Fidinda divisions ---------------- */
export function DivisionCards() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {divisions.map((d, i) => {
        const inner = (
          <>
            <div className="flex items-center justify-between">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-extrabold ${
                  d.current ? "bg-brand-red text-white" : "bg-navy text-white group-hover:bg-brand-red"
                } transition-colors`}
              >
                {d.name.split(" ")[1]?.[0] ?? "F"}
              </span>
              {d.current ? (
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  You are here
                </span>
              ) : (
                <ArrowUpRight className="h-5 w-5 text-heading/40 transition-colors group-hover:text-brand-red" aria-hidden="true" />
              )}
            </div>
            <h3 className={`mt-6 text-lg font-extrabold ${d.current ? "text-white" : "text-heading"}`}>{d.name}</h3>
            <p className={`mt-2 flex-1 text-sm leading-relaxed ${d.current ? "text-white/80" : "text-ink"}`}>
              {d.description}
            </p>
          </>
        );
        const cls = `group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 ${
          d.current
            ? "bg-navy shadow-lift ring-2 ring-brand-red ring-offset-4 ring-offset-mist"
            : "bg-surface shadow-card hover:-translate-y-1.5 hover:shadow-lift"
        }`;
        return (
          <Reveal as="li" key={d.name} delay={i * 80}>
            {d.current ? (
              <div className={cls} aria-current="true">
                {inner}
              </div>
            ) : (
              <a href={d.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            )}
          </Reveal>
        );
      })}
    </ul>
  );
}
