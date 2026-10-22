"use client";

import { useMemo, useState } from "react";

const templates = [
  "Stop doing {topic} like this — do this instead",
  "3 mistakes killing your {topic} (number 2 is the worst)",
  "Nobody talks about this side of {topic}",
  "Watch me fix {topic} in 30 seconds",
  "If I had to start {topic} from zero, I'd do exactly this",
  "The {topic} trick {audience} don't want you to know",
  "POV: you finally fixed your {topic}",
  "Before you spend money on {topic}, watch this",
  "{topic} in 2026: what's actually working now",
  "I tried {topic} for 30 days — here's the result",
];

export default function HookGenerator() {
  const [topic, setTopic] = useState("online store sales");
  const [audience, setAudience] = useState("small business owners");
  const [seed, setSeed] = useState(0);

  const hooks = useMemo(() => {
    const shuffled = [...templates].sort(
      (a, b) => ((a.charCodeAt(0) + seed * 7) % 5) - ((b.charCodeAt(0) + seed * 7) % 5)
    );
    return shuffled.slice(0, 5).map((t) =>
      t
        .replaceAll("{topic}", topic.trim() || "your marketing")
        .replaceAll("{audience}", audience.trim() || "your competitors")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, audience, seed]);

  return (
    <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <h3 className="font-serif text-2xl font-semibold text-porcelain">
        Reel Hook Generator
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        The first three seconds decide whether a Reel gets watched. Put in
        your topic and get proven hook formulas, filled in and ready to film.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="hook-topic" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Your topic
          </label>
          <input
            id="hook-topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
            placeholder="e.g. skincare routine"
          />
        </div>
        <div>
          <label htmlFor="hook-audience" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Your audience
          </label>
          <input
            id="hook-audience"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
            placeholder="e.g. busy mums"
          />
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {hooks.map((h) => (
          <li
            key={h}
            className="rounded-lg border border-line bg-night px-4 py-3 text-sm font-medium text-porcelain"
          >
            “{h}”
          </li>
        ))}
      </ul>

      <button
        onClick={() => setSeed((s) => s + 1)}
        className="mt-5 border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-night"
      >
        Generate more hooks
      </button>
    </div>
  );
}
