import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { images, services } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero, Photo } from "@/components/ui";
import { CTAStrip, FinancialBanner } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Our Services",
  description:
    "Registration & licensing, contract & project management, software & cloud, research & M&E, and training & capacity building in Phnom Penh, Cambodia.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        heading="Integrated consultancy for every stage of growth"
        text="Five specialised service areas that work together to help your organisation set up correctly, run efficiently and prove its results."
        image={images.services}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <ul className="mt-10 flex flex-wrap gap-3">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur transition-colors hover:border-brand-red hover:bg-brand-red"
              >
                <Icon name={s.icon} className="h-4 w-4" />
                {s.navTitle}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="py-24 lg:py-28">
        <div className="container space-y-20 lg:space-y-28">
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article id={s.slug} key={s.slug} className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
                  <div
                    className={`absolute -bottom-5 h-full w-full rounded-3xl bg-navy-50 ${flip ? "-left-5" : "-right-5"}`}
                    aria-hidden="true"
                  />
                  <Photo src={s.image} alt={s.title} width={1100} className="relative aspect-[5/4] rounded-3xl shadow-lift" />
                  <span
                    className={`absolute -top-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-surface text-heading shadow-lift ring-1 ring-line/[0.06] ${
                      flip ? "-right-3 sm:-right-6" : "-left-3 sm:-left-6"
                    }`}
                  >
                    <Icon name={s.icon} className="h-9 w-9" />
                  </span>
                </Reveal>

                <div className={flip ? "lg:order-1" : ""}>
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-ink">
                    Service {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold leading-tight text-heading sm:text-4xl">{s.title}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-ink">{s.intro}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.offerings.map((o) => (
                      <li key={o.title} className="flex items-start gap-3 font-semibold text-heading">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-50 text-heading">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {o.title}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-navy py-3.5 pl-7 pr-3.5 text-[15px] font-bold text-white transition-colors hover:bg-brand-red"
                  >
                    Explore {s.navTitle}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="bg-mist pt-6">
        <FinancialBanner />
        <CTAStrip />
      </div>
    </>
  );
}
