import { ArrowUpRight, BookOpen, Calendar, Clock, FileText } from "lucide-react";
import { images, resources, type ResourceItem } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/ui";
import { CTAStrip } from "@/components/sections";

export const metadata = pageMetadata({
  title: "Resources: Articles & Publications",
  description:
    "Articles, guides and publications on business and NGO registration, project management, research and M&E for organisations in Cambodia.",
  path: "/resources",
});

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

function ResourceCard({ item, kind, index }: { item: ResourceItem; kind: "article" | "publication"; index: number }) {
  const KindIcon = kind === "article" ? BookOpen : FileText;
  const body = (
    <>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-heading">
          <KindIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {item.category}
        </span>
        {!item.href && <span className="text-xs font-medium text-ink/60">Coming soon</span>}
      </div>
      <h3 className="mt-5 text-xl font-extrabold leading-snug text-heading group-hover:text-brand-red">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink">{item.summary}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line/10 pt-4 text-sm text-ink/80">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <time dateTime={item.date}>{fmt(item.date)}</time>
        </span>
        {item.readTime && (
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {item.readTime}
          </span>
        )}
        {item.href && <ArrowUpRight className="ml-auto h-4 w-4 text-brand-red" aria-hidden="true" />}
      </div>
    </>
  );
  const cls =
    "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface p-6 sm:p-8 shadow-card ring-1 ring-line/[0.06] before:absolute before:inset-x-0 before:top-0 before:h-1 before:origin-left before:scale-x-0 before:bg-brand-red before:transition-transform before:duration-500 hover:before:scale-x-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift";
  return (
    <Reveal as="li" delay={index * 70}>
      {item.href ? (
        <a href={item.href} className={cls} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {body}
        </a>
      ) : (
        <article className={cls}>{body}</article>
      )}
    </Reveal>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        heading={resources.hero.heading}
        text={resources.hero.text}
        image={images.resources}
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <nav aria-label="Resource sections" className="sticky top-[68px] sm:top-20 z-20 border-b border-line/10 bg-surface/95 backdrop-blur">
        <div className="container flex gap-2 py-3">
          <a href="#articles" className="rounded-full px-4 py-2 text-sm font-semibold text-heading hover:bg-mist hover:text-brand-red">
            Articles
          </a>
          <a href="#publications" className="rounded-full px-4 py-2 text-sm font-semibold text-heading hover:bg-mist hover:text-brand-red">
            Publications
          </a>
        </div>
      </nav>

      <section id="articles" className="scroll-mt-36 py-14 sm:py-20 lg:py-24">
        <div className="container">
          <SectionHeading eyebrow="Articles" heading="Latest insights" text="Practical articles and guides from our consultants." />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.articles.map((a, i) => (
              <ResourceCard key={a.title} item={a} kind="article" index={i} />
            ))}
          </ul>
        </div>
      </section>

      <section id="publications" className="scroll-mt-36 bg-mist py-14 sm:py-20 lg:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Publications"
            heading="Tools, templates and reports"
            text="Downloadable resources to help strengthen your organisation."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.publications.map((p, i) => (
              <ResourceCard key={p.title} item={p} kind="publication" index={i} />
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-mist">
        <CTAStrip
          heading="Need tailored advice?"
          text="Our consultants can help you apply these insights to your organisation."
        />
      </div>
    </>
  );
}
