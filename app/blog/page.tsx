import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog — Notes on Growing a Business Online",
  description:
    "Practical notes on websites that sell, SEO in plain English, and short-form video — from real client work at Rakib Web Studio.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Blog</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">
          Notes on websites, SEO and growth that actually moves the needle.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-mist sm:text-lg">
          Ideas from real client work, delivered without the noise.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {sorted.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link href={`/blog/${post.slug}`} className="group block h-full rounded-2xl border border-line bg-panel p-7 hover:border-accent/60">
              <p className="text-xs uppercase tracking-[0.16em] text-mist/70">
                {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-porcelain group-hover:text-accent">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
              <p className="mt-5 text-sm font-semibold text-accent">Read article →</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
