import Link from "next/link";
import Reveal from "@/components/Reveal";

// The three ways to work together (gap fix, 2026-10-24). Competitor
// pattern (Huemor, WebFX): buyers pick a route, not a discipline — and
// every route carries a starting-from figure. The figures are the same
// planning anchors the site's estimator already publishes (business
// website from $800; growth add-ons from $300/mo; care from $100/mo) —
// the exact quote is always confirmed on a short call first.
const routes = [
  {
    n: "01",
    name: "Launch",
    price: "Websites from $800",
    fit: "For a business with no website — or one that isn't turning visitors into customers.",
    includes:
      "Strategy, website or store build, conversion structure, tracking and SEO foundations. One fixed scope, agreed before work starts.",
  },
  {
    n: "02",
    name: "Grow",
    price: "From $300 / month",
    fit: "For a business with a website that needs more traffic, more enquiries, more sales.",
    includes:
      "SEO, content, Meta ads and video run as one monthly system — measured against revenue, reported in plain language.",
  },
  {
    n: "03",
    name: "Scale",
    price: "From $100 / month",
    fit: "For a business that wants its website kept fast, safe and improving every month.",
    includes:
      "Care, updates, backups and security — plus monthly optimisation and experiments that compound what Grow builds.",
  },
];

export default function Routes() {
  return (
    <div>
      {routes.map((r, i) => (
        <Reveal key={r.name} delay={Math.min(i * 0.04, 0.12)}>
          <div className="grid gap-3 border-b border-line py-8 sm:grid-cols-[64px_1fr_1.1fr] sm:gap-6">
            <span className="font-mono text-xs text-mist">{r.n}</span>
            <div>
              <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-porcelain sm:text-4xl">
                {r.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-porcelain">
                {r.price}
              </p>
              <div className="mt-4 flex flex-wrap gap-5">
                <Link
                  href="/contact"
                  className="font-display text-sm font-bold uppercase tracking-wide text-porcelain underline decoration-line underline-offset-8 hover:decoration-porcelain"
                >
                  Start here →
                </Link>
                <Link
                  href="/tools"
                  className="font-display text-sm font-bold uppercase tracking-wide text-mist underline decoration-line underline-offset-8 hover:text-porcelain hover:decoration-porcelain"
                >
                  Estimate it first
                </Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium leading-relaxed text-porcelain sm:text-base">{r.fit}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{r.includes}</p>
            </div>
          </div>
        </Reveal>
      ))}
      <Reveal>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-mist/70">
          Starting-from planning figures — the same anchors the estimator
          uses. Your exact quote is confirmed on a short call, before any
          work starts. No surprises.
        </p>
      </Reveal>
    </div>
  );
}
