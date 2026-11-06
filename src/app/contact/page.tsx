import Image from "next/image";
import { Check, Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { contactPage, images, site } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import { Eyebrow, PageHero } from "@/components/ui";
import SocialIcons from "@/components/SocialIcons";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Fidinda Management Solutions in Phnom Penh, Cambodia. Call +855-12877547 (Khmer) or +855-17457244 (English), or email support@fidindasolutions.com.",
  path: "/contact",
});

export default function ContactPage() {
  const { form, sidebar } = contactPage;
  const wa = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      <PageHero
        heading={contactPage.hero.heading}
        text={contactPage.hero.text}
        image={images.contact}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-mist pb-16 sm:pb-24">
        <div className="container grid items-start gap-8 lg:grid-cols-12">
          {/* ---------- Form card (overlaps the hero) ---------- */}
          <div className="relative z-10 -mt-8 rounded-3xl bg-surface p-5 shadow-lift ring-1 ring-line/5 sm:-mt-20 sm:p-10 lg:col-span-7">
            <Eyebrow>{form.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">{form.heading}</h2>
            <p className="mb-9 mt-3 max-w-lg text-[15px] leading-relaxed text-ink">{form.text}</p>
            <ContactForm />
          </div>

          {/* ---------- Sidebar ---------- */}
          <aside className="space-y-6 lg:col-span-5 lg:pt-10">
            {/* Navy contact card */}
            <div className="relative overflow-hidden rounded-3xl bg-navy p-6 sm:p-7 text-white shadow-lift sm:p-8">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[28px] border-brand-red/20" aria-hidden="true" />
              <Image src="/logo-dark.png" alt={`${site.name} logo`} width={620} height={127} sizes="220px" className="relative h-10 w-auto" />
              <p className="relative mt-3 text-sm text-white/70">{sidebar.tagline}</p>

              <ul className="relative mt-7 space-y-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  <div className="space-y-1.5">
                    {site.phones.map((p) => (
                      <p key={p.tel}>
                        <a href={`tel:${p.tel}`} className="font-bold underline decoration-white/30 underline-offset-4 hover:decoration-brand-red">
                          {p.display}
                        </a>{" "}
                        <span className="text-sm text-white/60">({p.label})</span>
                      </p>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="break-all font-bold underline decoration-white/30 underline-offset-4 hover:decoration-brand-red">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  <span className="font-bold">{site.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  <a
                    href={site.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline decoration-white/30 underline-offset-4 hover:decoration-brand-red"
                  >
                    {site.website.label}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/75">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  {contactPage.hours}
                </li>
              </ul>

              <div className="relative mt-7 border-t border-white/15 pt-7">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1 2.7 11.5 11.5 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={site.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2AABEE] px-4 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M21.9 4.3 18.8 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.9 13 2.3 11.6c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.6.2 1.4 1.1z" />
                    </svg>
                    Telegram
                  </a>
                </div>
                <div className="mt-6">
                  <SocialIcons variant="outline" />
                </div>
              </div>
            </div>

            {/* Services at a glance */}
            <div className="rounded-3xl bg-surface p-6 sm:p-7 shadow-card ring-1 ring-line/10 sm:p-8">
              <h2 className="text-lg font-extrabold text-heading">{sidebar.glanceTitle}</h2>
              <ul className="mt-5 space-y-3.5">
                {sidebar.glance.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-[15px] text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                      <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden="true" />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important information */}
            <div className="rounded-3xl bg-navy-50 p-6 sm:p-8">
              <h2 className="text-lg font-extrabold text-heading">{sidebar.infoTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">{sidebar.info}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
