"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { services, site } from "@/data/content";
import SocialIcons from "./SocialIcons";
import ThemeToggle from "./ThemeToggle";

const mainNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mobileSvc, setMobileSvc] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSvcOpen(false);
        setOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setSvcOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Top bar */}
      <div className="bg-night text-white">
        <div className="container flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2.5 text-xs font-medium sm:justify-between sm:text-[13px]">
          <p className="flex flex-wrap items-center justify-center gap-x-2">
            <Phone className="h-3.5 w-3.5 text-brand-red" aria-hidden="true" />
            <span className="font-medium">Call Us</span>
            <a href={`tel:${site.phones[0].tel}`} className="hover:text-brand-red hover:underline">
              {site.phones[0].display} ({site.phones[0].label})
            </a>
            <span aria-hidden="true" className="text-white/40">
              |
            </span>
            <a href={`tel:${site.phones[1].tel}`} className="hover:text-brand-red hover:underline">
              {site.phones[1].display} ({site.phones[1].label})
            </a>
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            <a href={`mailto:${site.email}`} className="text-white/80 hover:text-white">
              {site.email}
            </a>
            <span className="h-4 w-px bg-white/20" aria-hidden="true" />
            <SocialIcons variant="mini" />
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b bg-surface/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "border-line/10 shadow-card" : "border-transparent"
        }`}
      >
        <div className="container flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} — home`}>
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={620}
              height={127}
              priority
              sizes="240px"
              className="h-10 w-auto object-contain dark:hidden sm:h-12"
            />
            <Image
              src="/logo-dark.png"
              alt={`${site.name} logo`}
              width={620}
              height={127}
              priority
              sizes="240px"
              className="hidden h-10 w-auto object-contain dark:block sm:h-12"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) =>
                item.dropdown ? (
                  <li
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setSvcOpen(true)}
                    onMouseLeave={() => setSvcOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={svcOpen}
                        aria-controls="services-menu"
                        aria-label="Show services menu"
                        onClick={() => setSvcOpen((v) => !v)}
                        className="-ml-2 rounded p-1 text-heading hover:text-brand-red"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div
                      id="services-menu"
                      className={`absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 transition-all duration-200 ${
                        svcOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden rounded-2xl border border-line/10 bg-surface p-2 shadow-lift">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-mist hover:text-brand-red ${
                                pathname === `/services/${s.slug}` ? "bg-mist text-brand-red" : "text-heading"
                              }`}
                            >
                              {s.navTitle}
                            </Link>
                          </li>
                        ))}
                        <li className="mt-1 border-t border-line/10 pt-1">
                          <Link
                            href="/services"
                            className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-red hover:bg-mist"
                          >
                            View all services →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="/request-quotation"
              className="hidden rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgba(225,4,28,0.45)] transition-all hover:-translate-y-0.5 hover:bg-brand-redDark sm:inline-flex"
            >
              Request a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-heading hover:bg-mist lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full h-[calc(100dvh-80px)] overflow-y-auto border-t border-line/10 bg-surface transition-all duration-300 lg:hidden ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <nav aria-label="Mobile" className="container py-6">
            <ul className="space-y-1">
              {mainNav.map((item) =>
                item.dropdown ? (
                  <li key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link href={item.href} className="mobile-link flex-1">
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileSvc}
                        aria-label="Toggle services list"
                        onClick={() => setMobileSvc((v) => !v)}
                        className="rounded-full p-3 text-heading hover:bg-mist"
                      >
                        <ChevronDown className={`h-5 w-5 transition-transform ${mobileSvc ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {mobileSvc && (
                      <ul className="mb-2 ml-4 border-l-2 border-brand-red/30 pl-4">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="block py-2.5 text-[15px] text-heading/80 hover:text-brand-red"
                            >
                              {s.navTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className={`mobile-link ${isActive(item.href) ? "text-brand-red" : ""}`}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link
              href="/request-quotation"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3.5 font-semibold text-white"
            >
              Request a Quote
            </Link>
            <ThemeToggle withLabel className="mt-4 w-full border border-line/15" />
            <div className="mt-6 space-y-2 text-sm text-heading/80">
              {site.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="block hover:text-brand-red">
                  {p.display} ({p.label})
                </a>
              ))}
              <a href={`mailto:${site.email}`} className="block hover:text-brand-red">
                {site.email}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
