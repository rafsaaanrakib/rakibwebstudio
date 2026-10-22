import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: project.copy,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <Link href="/work" className="text-sm font-semibold text-accent hover:text-porcelain">
          ← All work
        </Link>
        <p className="mt-8 text-xs uppercase tracking-[0.16em] text-mint">{project.tag}</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">{project.name}</h1>
        <p className="mt-5 max-w-prose font-serif text-xl leading-relaxed text-porcelain/90">{project.result}</p>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-mist">{project.detail}</p>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-porcelain">Delivered</h2>
        <ul className="mt-5 space-y-2.5">
          {project.deliverables.map((d) => (
            <li key={d} className="flex gap-3 rounded-lg border border-line bg-panel px-4 py-3 text-sm text-mist">
              <span className="text-accent">+</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-porcelain"
            >
              Visit {project.name}
            </a>
          )}
          <Link href="/contact" className="border border-line px-6 py-3 text-sm font-semibold text-porcelain transition hover:border-accent hover:text-accent">
            Get results like this
          </Link>
        </div>
      </Reveal>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="font-serif text-xl font-semibold text-porcelain">More work</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {others.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="rounded-xl border border-line bg-panel p-5 hover:border-accent/60">
              <p className="text-xs uppercase tracking-[0.14em] text-mint">{p.tag}</p>
              <p className="mt-2 font-serif text-lg font-semibold text-porcelain">{p.name}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">{p.copy}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
