import Link from "next/link";
import { notFound as copy, services } from "@/data/content";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-red/20 blur-3xl" aria-hidden="true" />
      <div className="container relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-[7rem] font-extrabold leading-none sm:text-[10rem]">
          4<span className="text-brand-red">0</span>4
        </p>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{copy.heading}</h1>
        <p className="mt-4 max-w-md text-lg text-white/80">{copy.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
        <div className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Popular pages</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white/85 hover:border-brand-red hover:bg-brand-red hover:text-white"
                >
                  {s.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
