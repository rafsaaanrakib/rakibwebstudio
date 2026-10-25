import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — Rakib Ahmed",
  description:
    "Rakib Ahmed, founder of Rakib Web Studio: websites, SEO, ads, content, social and video as one growth system.",
};

const experience = [
  {
    role: "Digital Marketing & Facebook Ads Manager, SEO Specialist, Website Manager",
    org: "ZANA (WearZana.com)",
    time: "Nov 2025 — Present",
    copy: "Run all digital marketing for ZANA's e-commerce brand: Facebook ad campaigns, SEO strategy, and day-to-day site management for wearzana.com — improving traffic, rankings, and uptime.",
  },
  {
    role: "Web Developer",
    org: "ZANA (WearZana.com)",
    time: "Aug 2025 — Nov 2025",
    copy: "Built the entire e-commerce website from scratch — UI, product pages, cart, checkout, and backend — with a focus on speed and user experience.",
  },
  {
    role: "Founder",
    org: "Rewiso",
    time: "2026 — Present",
    copy: "Designed and launched my own product: a free spending journal app that helps people see which purchases they regret, and why. I test growth ideas on my own product before recommending them to clients.",
  },
  {
    role: "Digital Marketing Consultant",
    org: "Fish & Family",
    time: "2026",
    copy: "Set up this fresh seafood delivery business's full online presence from scratch — Facebook Page, WhatsApp Business and Google Business Profile — and produce product videos that drive orders.",
  },
  {
    role: "Community Manager",
    org: "Base Parody",
    time: "Jan 2023 — Nov 2024",
    copy: "Managed community and engagement for a UK-based project over nearly two years.",
  },
  {
    role: "Website Designer",
    org: "PeerlessHouse",
    time: "Jan 2023 — Jun 2023",
    copy: "Custom WordPress build for an affiliate marketing startup — responsive design, affiliate link management, and SEO that pushed rankings up.",
  },
  {
    role: "Social Media Manager",
    org: "Cake Buffet",
    time: "Jan 2022 — Sep 2023",
    copy: "Managed social media presence and content for a food brand.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="grid items-start gap-10 sm:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-3xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rakib-portrait.jpg"
              alt="Rakib Ahmed, founder of Rakib Web Studio"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">About</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-porcelain sm:text-5xl">
              I build the whole growth system, not just one piece of it.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-mist">
              I&apos;m Rakib, based in Chattogram, Bangladesh — and working
              with clients around the world. At ZANA, I built their entire
              e-commerce store from scratch, then took over the SEO, the
              Facebook ads, and the site&apos;s day-to-day growth. That
              end-to-end view is what Rakib Web Studio brings to every
              project: your strategy, website, content, social and video
              working together instead of as separate hires.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mist">
              I studied Digital Marketing at Creative IT Institute, build my
              own product (Rewiso) on the side, and use AI tools throughout
              my workflow to move faster for clients without cutting corners.
            </p>
            <Link href="/contact" className="mt-7 inline-block bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-porcelain">
              Work with me
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-20">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
          <h2 className="font-serif text-2xl font-semibold text-porcelain">Experience</h2>
          <span className="text-xs uppercase tracking-[0.16em] text-mist/50">Selected timeline</span>
        </div>
        <div className="mt-8 space-y-8">
          {experience.map((e) => (
            <div key={`${e.org}-${e.time}`} className="grid gap-3 border-b border-line pb-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <p className="text-xs uppercase tracking-wide text-mist/60">{e.time}</p>
              <div>
                <p className="text-sm text-mint">{e.org}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-porcelain">{e.role}</h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-mist">{e.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-16">
        <h2 className="font-serif text-2xl font-semibold text-porcelain">Education &amp; skills</h2>
        <ul className="mt-6 grid gap-3 text-sm text-mist sm:grid-cols-3">
          <li className="border-l-2 border-accent pl-4">Digital Marketing — Creative IT Institute (2022–2023)</li>
          <li className="border-l-2 border-accent pl-4">Blockchain Technology — Udemy</li>
          <li className="border-l-2 border-accent pl-4">Computer Programming — Udemy</li>
        </ul>
        <p className="mt-6 max-w-prose text-sm leading-relaxed text-mist">
          Top skills: prompt engineering, generative AI workflows, GitHub
          Copilot — used daily to ship faster and test more ideas for
          clients. Certifications include Introduction to Generative AI and
          Introduction to Prompt Engineering with GitHub Copilot.
        </p>
      </Reveal>
    </div>
  );
}
