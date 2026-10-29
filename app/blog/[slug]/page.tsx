import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ReadingProgress from "@/components/ReadingProgress";
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
// Paragraphs starting with "## " render as section headings and feed the
// "In this post" contents list.
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

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const contents = post.body
    .filter((p) => p.startsWith("## "))
    .map((p) => {
      const label = p.replace(/^##\s+/, "");
      return { id: slugify(label), label };
    });

  const words = post.body.join(" ").split(/\s+/).length + post.excerpt.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));

  const index = posts.findIndex((p) => p.slug === post.slug);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const next = index >= 0 ? posts[index + 1] : undefined;

  return (
    <>
      <ReadingProgress />
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Reveal>
          <Link href="/blog" className="text-sm font-semibold text-accent hover:text-porcelain">
            ← All articles
          </Link>
          <p className="mt-8 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs uppercase tracking-[0.16em] text-mist/70">
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span>{minutes} min read</span>
            <span>Rakib Ahmed</span>
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 font-serif text-lg leading-relaxed text-porcelain/85">{post.excerpt}</p>

          {contents.length > 0 && (
            <nav className="mt-10 border border-line p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-porcelain">
                In this post
              </p>
              <ol className="mt-4 space-y-2.5">
                {contents.map((c, i) => (
                  <li key={c.id} className="font-mono text-sm">
                    <span className="mr-3 text-signal">{String(i + 1).padStart(2, "0")}</span>
                    <a href={`#${c.id}`} className="text-porcelain underline decoration-line underline-offset-4 hover:decoration-signal">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="mt-10 space-y-6">
            {post.body.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                const label = paragraph.replace(/^##\s+/, "");
                return (
                  <h2
                    key={i}
                    id={slugify(label)}
                    className="scroll-mt-24 pt-6 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-porcelain"
                  >
                    {label}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-base leading-[1.85] text-mist">
                  {renderRichText(paragraph)}
                </p>
              );
            })}
          </div>

          <div className="mt-14 border border-line bg-panel p-7">
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

          <div className="mt-6 border border-line bg-panel p-7">
            <h2 className="font-serif text-xl font-semibold text-porcelain">
              Get the next post by email
            </h2>
            <p className="mb-5 mt-2 text-sm leading-relaxed text-mist">
              One email whenever a new post goes live — and the free 5 Leaks
              checklist in your first one.
            </p>
            <SubscribeForm source="blog-post" />
          </div>

          <section className="mt-16 border-t border-line pt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
              Keep reading
            </p>
            <ol className="mt-2">
              {related.map((r, i) => (
                <li key={r.slug} className="grid grid-cols-[44px_1fr] gap-4 border-b border-line py-5">
                  <span className="pt-1 font-mono text-sm text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <Link href={`/blog/${r.slug}`} className="font-display text-lg font-bold leading-snug text-porcelain hover:text-signal">
                      {r.title}
                    </Link>
                    <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-mist">
                      {r.excerpt}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <nav className="mt-12 flex items-start justify-between gap-6 border-y border-line py-6">
            <Link href="/blog" className="font-display text-base font-bold text-porcelain hover:text-signal">
              <span className="mb-2 block font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-mist">
                ← All posts
              </span>
              Back to the blog
            </Link>
            {next && (
              <Link href={`/blog/${next.slug}`} className="text-right font-display text-base font-bold text-porcelain hover:text-signal">
                <span className="mb-2 block font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-mist">
                  Next post →
                </span>
                {next.title}
              </Link>
            )}
          </nav>
        </Reveal>
      </div>
    </>
  );
}
