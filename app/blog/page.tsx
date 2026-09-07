import Link from "next/link";
import Reveal from "@/components/Reveal";
import { posts } from "./posts";

export default function Blog() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium text-forest">Blog</p>
        <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-5xl">
          Notes on websites, SEO, and growth
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/70 sm:text-lg">
          Practical lessons from building, marketing, and improving digital
          systems for real businesses.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full rounded-sm border border-line bg-white/60 p-7 shadow-[0_10px_24px_rgba(22,35,61,0.04)] transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-marigold hover:shadow-[0_16px_30px_rgba(232,163,61,0.12)] sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-wide text-ink/50">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                </p>
                <span className="text-marigold transition-transform group-hover:translate-x-1">-&gt;</span>
              </div>
              <h2 className="mt-8 font-serif text-2xl font-semibold text-ink">
                {post.title}
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink/70">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-block text-sm text-forest underline decoration-marigold decoration-2 underline-offset-4">
                Read more
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
