import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Info, MapPin, Phone } from "lucide-react";
import { getService, services, site } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Button, Eyebrow, PageHero, Photo, SectionHeading } from "@/components/ui";
import { CTAStrip, FAQList } from "@/components/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.seoTitle, description: s.seoDescription, path: `/services/${s.slug}` });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const highlights = service.heroHighlights ?? service.offerings.slice(0, 5).map((o) => o.title);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    areaServed: "Cambodia",
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  };

  return (
    <>
      <PageHero
        heading={service.title}
        text={service.tagline}
        image={service.image}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.navTitle }]}
        aside={
          <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-md sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-navy">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Popular in Cambodia</p>
            </div>
            <ul className="mt-6 space-y-3.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[15px] font-semibold leading-snug">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 border-t border-white/15 pt-5 text-sm text-white/70">
              <MapPin className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
              Phnom Penh based · Khmer &amp; English support
            </p>
          </div>
        }
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/request-quotation" arrow>
            Request a Quote
          </Button>
          <Button href="/contact" variant="ghost">
            Talk to us
          </Button>
        </div>
      </PageHero>

      {/* Built for Cambodia */}
      {service.local && (
        <section aria-labelledby="local-heading" className="border-b border-line/10 bg-surface">
          <div className="container py-10">
            <h2 id="local-heading" className="text-center text-xs font-bold uppercase tracking-[0.2em] text-ink lg:text-left">
              {service.local.heading}
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {service.local.points.map((pt) => (
                <li key={pt.title} className="flex items-start gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-heading">
                    <Icon name={pt.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-extrabold text-heading">{pt.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">{pt.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Overview + offerings */}
      <section className="py-24 lg:py-28">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-heading sm:text-4xl">What we offer</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink">{service.intro}</p>
              {service.extra && (
                <p className="mt-6 rounded-2xl border-l-4 border-brand-red bg-mist p-6 font-medium leading-relaxed text-heading">
                  {service.extra}
                </p>
              )}
              {service.note && (
                <a
                  href={service.note.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 flex items-start gap-4 rounded-2xl bg-navy p-6 text-white transition-colors hover:bg-navy-600"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Info className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold">{service.note.text}</span>
                    <span className="mt-1 inline-flex items-center gap-1 text-white/80 group-hover:text-white">
                      {service.note.linkLabel}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              )}
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line/10 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-redSoft text-brand-red">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="text-sm">
                  <p className="font-bold text-heading">Speak to a consultant</p>
                  <p className="mt-0.5 text-ink">
                    {site.phones.map((p, i) => (
                      <span key={p.tel}>
                        {i > 0 && " · "}
                        <a href={`tel:${p.tel}`} className="font-semibold text-heading hover:text-brand-red">
                          {p.display}
                        </a>{" "}
                        ({p.label})
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {service.offerings.map((o, i) => (
              <Reveal as="li" key={o.title} delay={i * 60}>
                <div className="group h-full rounded-3xl bg-surface p-7 shadow-card ring-1 ring-line/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-heading transition-colors group-hover:bg-navy group-hover:text-white">
                      <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-3xl font-extrabold text-heading/10">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-heading">{o.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink">{o.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Service catalogue */}
      {service.catalogue && (
        <section className="border-t border-line/10 py-24 lg:py-28" aria-labelledby="catalogue-heading">
          <div className="container">
            <div id="catalogue-heading">
              <SectionHeading
                eyebrow={service.catalogue.eyebrow}
                heading={service.catalogue.heading}
                text={service.catalogue.text}
                center
              />
            </div>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {service.catalogue.groups.map((g, i) => (
                <Reveal as="li" key={g.title} delay={(i % 4) * 70}>
                  <div className="group flex h-full flex-col rounded-3xl bg-surface p-7 shadow-card ring-1 ring-line/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-heading transition-colors group-hover:bg-navy group-hover:text-white">
                      <Icon name={g.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold text-heading">{g.title}</h3>
                    <p className="mt-1.5 text-sm text-ink">{g.description}</p>
                    <ul className="mt-5 space-y-2.5 border-t border-line/10 pt-5">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-[14px] leading-snug text-heading">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" strokeWidth={2.5} aria-hidden="true" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <Button href="/request-quotation" arrow>
                Get a quote for your project
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="bg-mist py-24 lg:py-28" aria-labelledby="benefits-heading">
        <div className="container">
          <div id="benefits-heading">
            <SectionHeading eyebrow="Benefits" heading="Why it matters for your organisation" center />
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 80}>
                <div className="group h-full rounded-3xl bg-surface p-7 shadow-card ring-1 ring-line/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-heading transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon name={b.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold text-heading">{b.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-28" aria-labelledby="process-heading">
        <div className="container">
          <div id="process-heading">
            <SectionHeading eyebrow="Our process" heading="How we work with you" center />
          </div>
          <div className="relative mt-16">
            <div
              className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t-2 border-dashed border-line/15 lg:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 110}>
                  <div className="group text-center">
                    <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-surface text-2xl font-extrabold text-heading shadow-card ring-1 ring-line/10 transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-6 text-xl font-extrabold text-heading">{p.title}</h3>
                    <p className="mx-auto mt-3 max-w-[16rem] leading-relaxed text-ink">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-24 lg:py-28" aria-labelledby="faq-heading">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" id="faq-heading">
            <SectionHeading eyebrow="FAQ" heading="Frequently asked questions" />
            <p className="mt-5 text-lg text-ink">
              Have another question?{" "}
              <Link href="/contact" className="font-bold text-brand-red underline-offset-4 hover:underline">
                Contact our team
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQList faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20" aria-labelledby="other-heading">
        <div className="container">
          <h2 id="other-heading" className="text-2xl font-extrabold text-heading sm:text-3xl">
            Explore other services
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/services/${o.slug}`}
                  className="group block h-full overflow-hidden rounded-3xl bg-surface shadow-card ring-1 ring-line/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Photo src={o.image} width={600} className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-night/25" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-3 p-5">
                    <span className="-mt-12 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white shadow-lg">
                      <Icon name={o.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex-1 text-[15px] font-bold leading-snug text-heading">{o.navTitle}</span>
                    <ArrowRight className="h-4 w-4 text-heading/40 transition-colors group-hover:text-brand-red" aria-hidden="true" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTAStrip
        heading="Ready to get started?"
        text="Request a quotation and we'll respond with a tailored proposal for your organisation."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]) }} />
    </>
  );
}
