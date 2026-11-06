import { Check, MapPin } from "lucide-react";
import { home, images, seo, services } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Button, Eyebrow, Photo, SectionHeading } from "@/components/ui";
import { CTAStrip, FinancialBanner, ServiceCard } from "@/components/sections";

export const metadata = pageMetadata({ title: seo.homeTitle, description: seo.description, path: "/", absoluteTitle: true });

export default function HomePage() {
  const { hero, intro, audiences, servicesIntro, whyChooseUs, approach } = home;
  // The highlighted word in the heading gets a red underline.
  const headingParts = hero.highlight ? hero.heading.split(hero.highlight) : [hero.heading];

  return (
    <>
      {/* ================= 1. HERO ================= */}
      <section className="relative isolate overflow-hidden bg-night text-white">
        <Photo src={images.heroCity} width={2000} className="absolute inset-0 -z-20 scale-105" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/95 via-night/80 to-night/30" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night/70 via-transparent to-transparent" aria-hidden="true" />
        <div className="dot-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

        <div className="container pb-40 pt-20 sm:pt-24 lg:pb-48 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-semibold backdrop-blur">
                  <MapPin className="h-4 w-4 text-brand-red" aria-hidden="true" />
                  {hero.eyebrow}
                </span>
              </div>
              <h1
                className="mt-7 animate-fade-up text-[2.6rem] font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.1rem]"
                style={{ animationDelay: "100ms" }}
              >
                {headingParts[0]}
                {hero.highlight && headingParts.length > 1 && (
                  <span className="relative inline-block text-white">
                    {hero.highlight}
                    <svg
                      className="absolute -bottom-2 left-0 h-3 w-full text-brand-red"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M2 9C50 3 150 1 198 7" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
                {headingParts.slice(1).join(hero.highlight)}
              </h1>
              <p
                className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-white/80 sm:text-xl"
                style={{ animationDelay: "200ms" }}
              >
                {hero.subtext}
              </p>
              <div className="mt-10 flex animate-fade-up flex-wrap gap-4" style={{ animationDelay: "300ms" }}>
                <Button href={hero.primaryCta.href} arrow>
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="ghost">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>

            {/* Fact tiles */}
            <div className="animate-fade-up lg:col-span-5" style={{ animationDelay: "350ms" }}>
              <ul className="grid grid-cols-2 gap-4">
                {hero.facts.map((f, i) => (
                  <li
                    key={f.label}
                    className={`rounded-3xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md ${
                      i % 2 === 1 ? "lg:translate-y-8" : ""
                    }`}
                  >
                    <p className="text-3xl font-extrabold sm:text-4xl">
                      {f.value}
                      {i === 0 && <span className="text-brand-red">.</span>}
                    </p>
                    <div className="mt-3 h-[3px] w-8 rounded bg-white/30" aria-hidden="true" />
                    <p className="mt-3 text-sm font-medium leading-snug text-white/75">{f.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. WHO WE SERVE (overlapping) ================= */}
      <section aria-labelledby="serve-heading" className="relative z-10 -mt-28 lg:-mt-32">
        <div className="container">
          <div className="rounded-[2rem] bg-surface p-6 shadow-lift ring-1 ring-line/5 sm:p-10">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <Eyebrow>{audiences.eyebrow}</Eyebrow>
                <h2 id="serve-heading" className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
                  {audiences.heading}
                </h2>
              </div>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.items.map((a, i) => (
                <Reveal as="li" key={a.title} delay={i * 80}>
                  <div className="group h-full rounded-2xl bg-mist p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:shadow-card">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-heading shadow-sm transition-colors group-hover:bg-navy group-hover:text-white">
                      <Icon name={a.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold text-heading">{a.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink">
                      {a.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 3. WHO WE ARE ================= */}
      <section className="py-24 lg:py-32" aria-labelledby="intro-heading">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-40 w-40 rounded-3xl bg-navy-50 sm:-left-6 sm:-top-6" aria-hidden="true" />
            <div className="dot-grid-navy absolute -bottom-8 -right-4 h-40 w-48" aria-hidden="true" />
            <Photo
              src={images.aboutMain}
              alt="Consultant presenting to a team around a meeting table"
              width={1100}
              className="relative aspect-[4/5] w-[82%] rounded-3xl shadow-lift"
            />
            <Photo
              src={images.aboutSmall}
              alt="Team discussing a project in a modern office"
              width={700}
              className="absolute bottom-[-2rem] right-0 aspect-square w-[48%] rounded-3xl border-8 border-canvas shadow-lift"
            />
            <div className="absolute left-6 top-1/2 rounded-2xl bg-navy px-5 py-4 text-white shadow-lift sm:left-[-1.5rem]">
              <p className="text-2xl font-extrabold">{intro.badge.value}</p>
              <p className="text-xs font-medium text-white/70">{intro.badge.label}</p>
            </div>
          </Reveal>

          <div>
            <Eyebrow>{intro.eyebrow}</Eyebrow>
            <h2 id="intro-heading" className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-heading sm:text-[2.6rem]">
              {intro.heading}
            </h2>
            {intro.paragraphs.map((p, i) => (
              <p key={i} className={`mt-6 text-lg leading-relaxed ${i === 0 ? "text-heading" : "text-ink"}`}>
                {p}
              </p>
            ))}
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {intro.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 font-semibold text-heading">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-50 text-heading">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/about" variant="navy" arrow>
                More about us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. SERVICES ================= */}
      <section className="relative overflow-hidden bg-mist py-24 lg:py-28" aria-labelledby="services-heading">
        <div className="container relative">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div id="services-heading">
              <SectionHeading eyebrow={servicesIntro.eyebrow} heading={servicesIntro.heading} text={servicesIntro.text} />
            </div>
            <Button href="/services" variant="outline" arrow>
              All services
            </Button>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
            <Reveal delay={services.length * 80} className="h-full">
              <div className="relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl bg-navy p-8 text-white">
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full border-[30px] border-white/[0.06]" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-block h-1.5 w-12 rounded bg-brand-red" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-extrabold leading-snug">Not sure where to start?</h3>
                  <p className="mt-4 leading-relaxed text-white/75">
                    Tell us about your organisation and we&apos;ll recommend the right combination of services.
                  </p>
                </div>
                <div className="relative mt-8">
                  <Button href="/request-quotation" arrow>
                    Request a Quote
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= 5. WHY CHOOSE US ================= */}
      <section className="relative py-24 lg:py-32" aria-labelledby="why-heading">
        <div className="container grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="relative">
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl bg-navy-50" aria-hidden="true" />
              <Photo
                src={images.whyUs}
                alt="Consultant leading a planning session at a whiteboard"
                width={1000}
                className="relative aspect-[4/5] rounded-3xl"
              />
              <div className="absolute -left-4 bottom-10 max-w-[15rem] rounded-2xl bg-surface p-5 text-heading shadow-lift sm:-left-8">
                <p className="text-sm font-bold text-ink">Evidence-based</p>
                <p className="mt-1 text-[15px] font-semibold leading-snug">Research, data and analysis behind every recommendation.</p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div id="why-heading">
              <SectionHeading
                eyebrow={whyChooseUs.eyebrow}
                heading={whyChooseUs.heading}
                text="We combine professional expertise, analytical approaches and technology to deliver practical solutions that last."
              />
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2">
              {whyChooseUs.items.map((w, i) => (
                <Reveal as="li" key={w.title} delay={i * 90}>
                  <div className="group h-full rounded-3xl bg-surface p-7 shadow-card ring-1 ring-line/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-heading transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                      <Icon name={w.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 text-xl font-extrabold text-heading">{w.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink">{w.description}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 6. APPROACH ================= */}
      <section className="bg-mist py-24 lg:py-32" aria-labelledby="approach-heading">
        <div className="container">
          <div id="approach-heading">
            <SectionHeading
              eyebrow={approach.eyebrow}
              heading={approach.heading}
              text="Every engagement follows the same four steps, so you always know where your project stands."
              center
            />
          </div>
          <div className="relative mt-16">
            <div
              className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t-2 border-dashed border-line/15 lg:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {approach.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 110}>
                  <div className="group text-center">
                    <span className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-surface text-2xl font-extrabold text-heading shadow-card ring-1 ring-line/10 transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-7 text-xl font-extrabold text-heading">{s.title}</h3>
                    <p className="mx-auto mt-3 max-w-[16rem] leading-relaxed text-ink">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ================= 8. CROSS-LINK + CTA ================= */}
      <FinancialBanner />
      <CTAStrip />
    </>
  );
}
