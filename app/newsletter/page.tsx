import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SubscribeForm from "@/components/SubscribeForm";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  alternates: { canonical: "/newsletter" },
  title: "Newsletter — Growth, in your inbox",
  description:
    "One email whenever a new Rakib Web Studio post goes live: the systems that turn visitors into customers. Free forever.",
};

const rows = [
  {
    n: "01",
    title: "The post, in your inbox",
    text: "Every new blog post arrives by email the day it publishes — conversion, SEO and growth systems in plain language, written for business owners, not marketers.",
  },
  {
    n: "02",
    title: "The 5 Leaks checklist, free",
    text: "Subscribe and the first email brings the one-page checklist: check your own website in ten minutes and find where it's quietly losing customers.",
  },
  {
    n: "03",
    title: "Nothing else",
    text: "No weekly spam, no selling your address, no sequence of ten emails warming you up for a pitch. One post goes live, one email goes out. That's the whole deal.",
  },
];

export default function NewsletterPage() {
  const recent = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mist">
          The Newsletter
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">
          Growth, in
          <br />
          your inbox<span className="text-signal">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
          Most websites don&apos;t have a traffic problem — they have a bucket problem.
          This newsletter is the fix, one post at a time: how to turn the visitors you
          already get into customers. Join free and get the{" "}
          <Link href="/checklist" className="font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 hover:decoration-signal">
            5 Leaks checklist
          </Link>{" "}
          in your first email.
        </p>

        <div className="mt-10 max-w-2xl">
          <SubscribeForm source="newsletter-page" />
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-20 border-t border-line">
          {rows.map((r) => (
            <div key={r.n} className="grid gap-3 border-b border-line py-8 sm:grid-cols-[64px_280px_1fr] sm:gap-6">
              <p className="font-mono text-sm text-signal">{r.n}</p>
              <h2 className="font-display text-lg font-bold uppercase tracking-tight text-porcelain">
                {r.title}
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-mist">{r.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mist">
            Recent posts — this is what lands in your inbox
          </p>
          <div className="mt-6 border-t border-line">
            {recent.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group grid gap-2 border-b border-line py-6 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist/70">
                  {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-porcelain group-hover:underline group-hover:decoration-signal group-hover:underline-offset-4">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mist">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-mist">
            Prefer reading on the site? The{" "}
            <Link href="/blog" className="font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 hover:decoration-signal">
              blog
            </Link>{" "}
            is always free — the newsletter just makes sure you never miss a post.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
