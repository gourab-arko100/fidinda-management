import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import { images, quoteForm, site } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata = pageMetadata({
  title: "Request for Quotation",
  description:
    "Request a quotation for business or NGO registration, project management, software and cloud, research, M&E or training services in Phnom Penh, Cambodia.",
  path: "/request-quotation",
});

export default function RequestQuotationPage() {
  return (
    <>
      <PageHero
        heading={quoteForm.hero.heading}
        text={quoteForm.hero.text}
        image={images.quote}
        crumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
      />

      <section className="bg-mist pb-20 lg:pb-24">
        <div className="container grid gap-8 lg:grid-cols-12">
          <div className="relative z-10 -mt-12 rounded-3xl bg-surface p-6 shadow-lift ring-1 ring-line/5 sm:p-10 lg:col-span-8">
            <h2 className="text-2xl font-extrabold text-heading">Quotation request form</h2>
            <p className="mb-8 mt-2 text-sm text-ink/80">
              Fields marked <span className="text-brand-red">*</span> are required.
            </p>
            <QuoteForm />
          </div>

          <aside className="space-y-6 lg:col-span-4 lg:pt-16">
            <div className="rounded-3xl bg-navy p-8 text-white">
              <h2 className="text-xl font-extrabold">What happens next?</h2>
              <ol className="mt-6 space-y-5">
                {[
                  "We review your request and may contact you for more details.",
                  "We prepare a tailored proposal and quotation.",
                  "Once agreed, we get started on your project.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-white/85">{t}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-surface p-8 shadow-card">
              <h2 className="text-lg font-extrabold text-heading">Prefer to talk?</h2>
              <ul className="mt-5 space-y-4 text-sm">
                {site.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="flex items-center gap-3 text-heading hover:text-brand-red">
                      <Phone className="h-4 w-4 text-brand-red" aria-hidden="true" />
                      {p.display} ({p.label})
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-heading hover:text-brand-red">
                    <Mail className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                    {site.email}
                  </a>
                </li>
              </ul>
              <div className="mt-6 space-y-3 border-t border-line/10 pt-6 text-sm text-ink">
                <p className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-heading" aria-hidden="true" /> Response within 1–2 working days
                </p>
                <p className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-heading" aria-hidden="true" /> Your details are kept confidential
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
