import { ExternalLink, Eye, Quote, Target } from "lucide-react";
import { about, divisions, home, images } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { Eyebrow, PageHero, Photo } from "@/components/ui";
import { CTAStrip } from "@/components/sections";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Fidinda Management Solutions offers integrated business and organisational consultancy in Phnom Penh, Cambodia — part of the Fidinda Solutions group.",
  path: "/about",
});

export default function AboutPage() {
  const [lead, ...rest] = about.whoWeAre.paragraphs;

  return (
    <>
      <PageHero
        heading={about.hero.heading}
        text={about.hero.text}
        image={images.aboutMain}
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Who we are */}
      <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="who-heading">
        <div className="container grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal className="relative lg:sticky lg:top-32">
              <div className="absolute -left-4 -top-4 h-32 w-32 rounded-3xl bg-navy-50" aria-hidden="true" />
              <Photo
                src={images.aboutSmall}
                alt="Fidinda consultants in a team meeting"
                width={1200}
                className="relative aspect-[3/2] rounded-3xl shadow-lift"
              />
              <div className="absolute -bottom-6 right-6 rounded-2xl bg-navy px-6 py-5 text-white shadow-lift">
                <p className="text-2xl font-extrabold sm:text-3xl">
                  2023<span className="text-brand-red">.</span>
                </p>
                <p className="text-sm text-white/70">Established in Phnom Penh</p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Who we are</Eyebrow>
            <h2 id="who-heading" className="mt-3 text-[1.75rem] font-extrabold leading-[1.18] tracking-tight text-heading sm:mt-4 sm:text-[2.6rem] sm:leading-[1.15]">
              {about.whoWeAre.heading}
            </h2>
            <Reveal>
              <p className="mt-6 border-l-4 border-brand-red pl-5 text-lg font-semibold leading-relaxed text-heading sm:mt-8 sm:pl-6 sm:text-2xl">
                {lead}
              </p>
            </Reveal>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink">
              {rest.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {home.hero.facts.map((f) => (
                <li key={f.label} className="rounded-2xl bg-mist p-5 text-center">
                  <p className="text-2xl font-extrabold text-heading">{f.value}</p>
                  <p className="mt-1 text-xs font-medium leading-snug text-ink">{f.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission — alternating photo / text rows */}
      <section id="mission-vision" className="scroll-mt-24 py-16 sm:py-24 lg:py-28" aria-label="Vision and mission">
        <div className="container space-y-16 sm:space-y-20 lg:space-y-28">
          {[
            { title: "Our Vision", text: about.missionVision.vision, image: images.vision, alt: "Businesswoman looking through binoculars toward a stairway leading to an open door", Icon: Eye },
            { title: "Our Mission", text: about.missionVision.mission, image: images.mission, alt: "Cambodian team discussing a strategy on a laptop in a Phnom Penh office", Icon: Target },
          ].map(({ title, text, image, alt, Icon }, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
                <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
                  <div
                    className={`absolute -bottom-5 h-full w-full rounded-3xl bg-navy-50 ${flip ? "-left-5" : "-right-5"}`}
                    aria-hidden="true"
                  />
                  <Photo src={image} alt={alt} width={1200} className="relative aspect-[16/10] rounded-3xl shadow-lift" />
                  <span
                    className={`absolute -top-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface text-heading shadow-lift ring-1 ring-line/[0.06] ${
                      flip ? "-right-3 sm:-right-5" : "-left-3 sm:-left-5"
                    }`}
                  >
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                </Reveal>
                <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
                  <span className="block h-1 w-10 rounded bg-brand-red" aria-hidden="true" />
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:mt-5 sm:text-5xl">{title}</h2>
                  <p className="mt-4 max-w-lg text-lg font-medium leading-relaxed text-heading sm:mt-6 sm:text-2xl sm:leading-relaxed">
                    {text}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Part of a wider service ecosystem */}
      <section className="bg-mist py-16 sm:py-24 lg:py-28" aria-labelledby="eco-heading">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>{about.ecosystem.eyebrow}</Eyebrow>
            <h2 id="eco-heading" className="mt-3 text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-heading sm:mt-4 sm:text-5xl sm:leading-[1.1]">
              {about.ecosystem.heading}
            </h2>
            {about.ecosystem.paragraphs.map((p, i) => (
              <p key={i} className="mt-6 text-lg leading-relaxed text-ink">
                {p}
              </p>
            ))}
          </div>

          <Reveal>
            <div className="rounded-3xl bg-surface p-6 shadow-lift ring-1 ring-line/5 sm:p-8">
              <div className="rounded-2xl bg-gradient-to-r from-navy to-navy-500 px-6 py-5 text-center text-lg font-extrabold text-white">
                {about.ecosystem.groupName}
              </div>
              <ul className="relative ml-2 space-y-3 border-l border-line/15 pl-4 pt-5 sm:ml-5 sm:space-y-3.5 sm:pl-8 sm:pt-6">
                {divisions.map((d) => {
                  const row = (
                    <>
                      <span className="text-[15px] font-bold text-heading sm:text-base">{d.name}</span>
                      {d.current ? (
                        <span className="shrink-0 rounded-full bg-brand-red px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white">
                          You are here
                        </span>
                      ) : (
                        <ExternalLink className="h-4 w-4 shrink-0 text-ink/60 transition-colors group-hover:text-brand-red" aria-hidden="true" />
                      )}
                    </>
                  );
                  return (
                    <li key={d.name} className="relative">
                      <span className="absolute -left-4 top-1/2 h-px w-4 bg-line/15 sm:-left-8 sm:w-8" aria-hidden="true" />
                      {d.current ? (
                        <div
                          aria-current="true"
                          className="flex items-center justify-between gap-3 rounded-xl border border-brand-red/50 bg-brand-redSoft px-4 py-3.5 sm:px-5 sm:py-4"
                        >
                          {row}
                        </div>
                      ) : (
                        <a
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 rounded-xl border border-line/10 bg-surface px-4 py-3.5 sm:px-5 sm:py-4 transition-all hover:-translate-y-0.5 hover:border-brand-red/40 hover:shadow-card"
                        >
                          {row}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 sm:py-24 lg:py-28" aria-labelledby="commit-heading">
        <div className="container">
          <Reveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-surface p-6 shadow-lift ring-1 ring-line/5 sm:rounded-[2rem] sm:p-14">
              <Quote className="absolute right-8 top-8 h-24 w-24 text-heading/[0.05]" aria-hidden="true" />
              <Eyebrow>Our commitment</Eyebrow>
              <h2 id="commit-heading" className="sr-only">
                {about.commitment.heading}
              </h2>
              <p className="relative mt-5 text-lg font-medium leading-relaxed text-heading sm:mt-6 sm:text-2xl sm:leading-relaxed">
                {about.commitment.text}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-[3px] w-12 rounded bg-brand-red" aria-hidden="true" />
                <p className="font-bold text-heading">Fidinda Solutions</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
