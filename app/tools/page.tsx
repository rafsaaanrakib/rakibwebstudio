import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import AuditChecklist from "@/components/AuditChecklist";
import PriceEstimator from "@/components/PriceEstimator";
import HookGenerator from "@/components/HookGenerator";

export const metadata: Metadata = {
  title: "Free Tools — Audit, Price Estimator & Reel Hooks",
  description:
    "Free tools from Rakib Web Studio: an instant website audit self-check, a project price estimator in USD, and a Reel hook generator. No email wall for the first result.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Free tools</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">
          Useful before we ever talk.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-mist sm:text-lg">
          Three tools I use in real client work, free to use right now. No
          email wall for the first result — if they help, imagine the full
          version.
        </p>
      </Reveal>

      <div className="mt-14 space-y-10">
        <Reveal>
          <AuditChecklist />
        </Reveal>
        <Reveal>
          <PriceEstimator />
        </Reveal>
        <Reveal>
          <HookGenerator />
        </Reveal>
      </div>
    </div>
  );
}
