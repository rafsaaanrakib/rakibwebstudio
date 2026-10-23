import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SubscribeForm from "@/components/SubscribeForm";
import { posts, getPost } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
  };
}

// Body paragraphs support lightweight links: [label](/internal) or
// [label](https://external). Everything else renders as plain text.
function renderRichText(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const [, label, href] = m;
    const cls =
      "font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 transition hover:decoration-signal";
    return href.startsWith("/") ? (
      <Link key={i} href={href} className={cls}>
        {label}
      </Link>
    ) : (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    );
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <Link href="/blog" className="text-sm font-semibold text-accent hover:text-porcelain">
          ← All articles
        </Link>
        <p className="mt-8 text-xs uppercase tracking-[0.16em] text-mist/70">
          {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · Rakib Ahmed
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-porcelain sm:text-[2.6rem]">
          {post.title}
        </h1>
        <p className="mt-5 font-serif text-lg leading-relaxed text-porcelain/85">{post.excerpt}</p>

        <div className="mt-10 space-y-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-[1.85] text-mist">
              {renderRichText(paragraph)}
            </p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-panel p-7">
          <h2 className="font-serif text-xl font-semibold text-porcelain">
            Want this applied to your business?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Start with the free website audit, or tell me about your project
            and I will reply within one business day.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/tools" className="bg-accent px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-porcelain">
              Free website audit
            </Link>
            <Link href="/contact" className="border border-line px-5 py-2.5 text-sm font-semibold text-porcelain transition hover:border-accent hover:text-accent">
              Talk to Rakib
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-panel p-7">
          <h2 className="font-serif text-xl font-semibold text-porcelain">
            Get the next post by email
          </h2>
          <p className="mb-5 mt-2 text-sm leading-relaxed text-mist">
            One email whenever a new post goes live — and the free 5 Leaks
            checklist in your first one.
          </p>
          <SubscribeForm source="blog-post" />
        </div>
      </Reveal>
    </div>
  );
}
