import Reveal from "@/components/Reveal";
import SubscribeForm from "@/components/SubscribeForm";

// The 5 Leaks checklist capture block (gap fix, 2026-10-24). One
// signature free asset, placed at decision points — service pages, work
// pages, tools — not just the footer and blog posts. Subscribing sends
// the checklist via the welcome email and adds one email per new post.
export default function ChecklistCTA({ source = "site" }: { source?: string }) {
  return (
    <Reveal>
      <div className="border border-line bg-panel p-7 sm:p-9">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
          Free — The 5 Leaks Checklist
        </p>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-porcelain sm:text-3xl">
          Find where your website is losing customers.
        </h2>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-mist sm:text-base">
          The ten-minute self-audit I run on every project — the five leaks,
          what each one costs you, and the order to fix them. Free when you
          join the newsletter; one email per new post after that.
        </p>
        <div className="mt-6 max-w-xl">
          <SubscribeForm source={source} />
        </div>
      </div>
    </Reveal>
  );
}
