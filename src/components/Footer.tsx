import Image from "next/image";
import Link from "next/link";
import { footerColumns, services, site } from "@/data/content";
import SocialIcons from "./SocialIcons";

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-4">
      {links.map((l) => (
        <li key={l.label}>
          {l.href.startsWith("http") ? (
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link">
              {l.label}
            </a>
          ) : (
            <Link href={l.href} className="footer-link">
              {l.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const serviceLinks = [
    ...services.map((s) => ({ label: s.navTitle, href: `/services/${s.slug}` })),
    { label: "All Services", href: "/services" },
  ];

  return (
    <footer className="bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container pb-10 pt-16 lg:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-flex rounded-xl bg-white px-4 py-3.5 shadow-sm">
              <Image src="/logo-footer.png" alt={`${site.name} logo`} width={616} height={122} sizes="200px" className="h-8 w-auto" />
            </div>

            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/80">{site.footerBlurb}</p>

            <ul className="mt-7 space-y-3.5 text-[15px]">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="font-bold text-white transition-colors hover:text-brand-red">
                    Call ({p.label})&nbsp; {p.display}
                  </a>
                </li>
              ))}
              <li>
                <span className="block font-bold text-white">Email</span>
                <a href={`mailto:${site.email}`} className="font-bold text-white transition-colors hover:text-brand-red">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.website.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white transition-colors hover:text-brand-red"
                >
                  {site.website.label}
                </a>
              </li>
              <li className="text-white/75">{site.location}</li>
            </ul>

            <p className="mt-9 text-xs font-bold uppercase tracking-[0.22em] text-white/80">Follow us</p>
            <div className="mt-4">
              <SocialIcons variant="outline" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-title">Services</h3>
            <LinkList links={serviceLinks} />
          </div>

          {/* For Clients */}
          <div>
            <h3 className="footer-title">{footerColumns.forClients.title}</h3>
            <LinkList links={footerColumns.forClients.links} />
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-title">{footerColumns.company.title}</h3>
            <LinkList links={footerColumns.company.links} />
          </div>

          {/* Divisions */}
          <div>
            <h3 className="footer-title">{footerColumns.divisions.title}</h3>
            <LinkList links={footerColumns.divisions.links} />
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-7">
          <p className="text-sm text-white/80">{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
