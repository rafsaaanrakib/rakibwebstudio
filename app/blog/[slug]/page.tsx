import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium text-forest">Blog / Article</p>
        <p className="mt-8 text-xs uppercase tracking-wide text-ink/50">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 space-y-6 border-t border-line pt-10">
        {post.body.map((para, i) => (
          <p key={i} className="max-w-prose text-base leading-relaxed text-ink/80 sm:text-lg">
            {para}
          </p>
        ))}
      </Reveal>
    </article>
  );
}
