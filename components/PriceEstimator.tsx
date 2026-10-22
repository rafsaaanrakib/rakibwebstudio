"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// Indicative starting-from ranges. These are the estimator's own planning
// figures — not a quote. The final quote is always confirmed on a call.
const projectTypes = [
  { id: "landing", label: "Landing page", low: 300, high: 700 },
  { id: "business", label: "Business website", low: 800, high: 2000 },
  { id: "ecommerce", label: "E-commerce store", low: 1500, high: 4000 },
  { id: "custom", label: "Custom web app / portal", low: 3000, high: 8000 },
] as const;

const monthlyAddons = [
  { id: "seo", label: "SEO (monthly)", low: 300, high: 900 },
  { id: "content", label: "Content & social (monthly)", low: 250, high: 800 },
  { id: "video", label: "Video editing & Reels (monthly)", low: 300, high: 1000 },
  { id: "ads", label: "Meta ads management (monthly)", low: 300, high: 900 },
  { id: "care", label: "Website care & growth (monthly)", low: 100, high: 400 },
] as const;

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export default function PriceEstimator() {
  const [typeId, setTypeId] = useState<string>("business");
  const [pages, setPages] = useState(6);
  const [addons, setAddons] = useState<Record<string, boolean>>({ seo: true });

  const estimate = useMemo(() => {
    const base = projectTypes.find((t) => t.id === typeId) ?? projectTypes[1];
    const extraPages = Math.max(0, pages - 5);
    const low = base.low + extraPages * 60;
    const high = base.high + extraPages * 140;
    const monthly = monthlyAddons
      .filter((a) => addons[a.id])
      .reduce(
        (acc, a) => ({ low: acc.low + a.low, high: acc.high + a.high }),
        { low: 0, high: 0 }
      );
    return { low, high, monthly };
  }, [typeId, pages, addons]);

  return (
    <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <h3 className="font-serif text-2xl font-semibold text-porcelain">
        Project Price Estimator
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        Move the options and get an instant ballpark in USD. This is an
        estimate for planning — the final quote is confirmed after a short
        call, once the real scope is clear.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="est-type" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Project type
          </label>
          <select
            id="est-type"
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
          >
            {projectTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>

          <label htmlFor="est-pages" className="mt-6 block text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Pages: {pages}
          </label>
          <input
            id="est-pages"
            type="range"
            min={1}
            max={30}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </div>

        <fieldset>
          <legend className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Monthly growth add-ons
          </legend>
          <div className="mt-2 space-y-2.5">
            {monthlyAddons.map((a) => (
              <label key={a.id} className="flex cursor-pointer items-center gap-3 text-sm text-mist">
                <input
                  type="checkbox"
                  checked={!!addons[a.id]}
                  onChange={(e) =>
                    setAddons((prev) => ({ ...prev, [a.id]: e.target.checked }))
                  }
                  className="h-4 w-4 accent-[#38BDF8]"
                />
                {a.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-7 rounded-xl bg-night p-5">
        <p className="text-xs uppercase tracking-[0.14em] text-mist">
          Estimated project range (one-time)
        </p>
        <p className="mt-1 font-serif text-3xl font-semibold text-porcelain">
          ${fmt(estimate.low)} – ${fmt(estimate.high)}
        </p>
        {estimate.monthly.low > 0 && (
          <p className="mt-3 text-sm text-mist">
            With selected add-ons:{" "}
            <span className="font-semibold text-porcelain">
              ${fmt(estimate.monthly.low)} – ${fmt(estimate.monthly.high)} / month
            </span>
          </p>
        )}
        <Link
          href="/contact"
          className="mt-4 inline-block bg-accent px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-porcelain"
        >
          Get my exact quote
        </Link>
      </div>
    </div>
  );
}
