import Link from "next/link";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WaitlistForm from "@/components/WaitlistForm";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const trustItems = [
  { name: "ZANA / WearZana.com" },
  { name: "PeerlessHouse" },
  { name: "CryptoWithRakib" },
  { name: "Dream Mart BD" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-y border-line bg-white/60">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-wide text-ink/50">
              Built and grown
            </p>
            <TrustStrip items={trustItems} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              What I do
            </h2>
            <Link
              href="/services"
              className="shrink-0 text-sm text-forest underline decoration-marigold decoration-2 underline-offset-4"
            >
              Explore services
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <h3 className="font-serif text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/70">
                {s.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                Selected work
              </h2>
              <Link
                href="/work"
                className="text-sm text-forest underline decoration-marigold decoration-2 underline-offset-4"
              >
                View all
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {projects.slice(0, 3).map((w, i) => (
                <Reveal key={w.slug} delay={i * 0.05}>
                <div className="h-full rounded-sm border border-line bg-porcelain p-6">
                  <p className="text-xs uppercase tracking-wide text-forest">
                    {w.tag}
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-ink">
                    {w.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {w.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <Reveal>
          <div className="grid gap-8 rounded-sm border border-forest/20 bg-forest p-8 shadow-[0_18px_40px_rgba(27,75,67,0.12)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-12">
            <div>
              <p className="text-xs uppercase tracking-wide text-marigold">
                The practical newsletter
              </p>
              <h2 className="mt-3 max-w-xl font-serif text-2xl font-semibold text-porcelain sm:text-3xl">
                Notes on websites, SEO, and growth that actually moves the needle.
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-porcelain/70">
                Occasional ideas from real client work, delivered without the noise.
              </p>
            </div>
            <div className="sm:min-w-[20rem]">
              <WaitlistForm
                buttonLabel="Subscribe"
                successMessage="You&apos;re subscribed — thanks for joining."
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="rounded-sm border border-line bg-white/70 p-10 sm:p-14">
            <p className="text-xs uppercase tracking-wide text-forest">
              Free guide
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-2xl font-semibold text-ink sm:text-3xl">
              Website to Customers
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink/70">
              A simple system for turning website visitors into paying
              clients. Join the waitlist to get it first.
            </p>
            <Link
              href="/ebook"
              className="mt-6 inline-block bg-ink px-6 py-3 text-sm font-medium text-porcelain transition-colors hover:bg-forest"
            >
              Join the waitlist
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
