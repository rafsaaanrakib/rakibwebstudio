import Reveal from "@/components/Reveal";

const experience = [
  {
    role: "Digital Marketing & Facebook Ads Manager, SEO Specialist, Website Manager",
    org: "ZANA",
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
    role: "Community Manager",
    org: "Base Parody",
    time: "Jan 2023 — Nov 2024",
    copy: "Managed community and engagement for a UK-based project over nearly two years.",
  },
  {
    role: "Website Designer",
    org: "CryptoWithRakib",
    time: "May 2023 — Sep 2023",
    copy: "Designed and built a WordPress crypto blog, implementing SEO and social sharing to grow it into a recurring resource site.",
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
    copy: "Managed social media presence and content for a Dhaka-based brand.",
  },
  {
    role: "SEO Specialist",
    org: "Dream Mart BD",
    time: "Jan 2020 — Jan 2021",
    copy: "Early SEO work for a local e-commerce brand in Chattogram.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium text-forest">About</p>
        <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-5xl">
          I build the whole system, not just one piece of it.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/70 sm:text-lg">
          I&apos;m Rakib, based in Chattogram, Bangladesh. At ZANA, I built
          their entire e-commerce store from scratch, then took over the
          SEO, the Facebook ads, and the site&apos;s day-to-day growth. That
          end-to-end view is what I bring to every project: your website,
          your content, and your visibility working together instead of as
          separate hires. I studied Digital Marketing at Creative IT
          Institute, and I use AI tools throughout my workflow to move
          faster for clients without cutting corners.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-20">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
          <h2 className="font-serif text-2xl font-semibold text-ink">
          Experience
          </h2>
          <span className="text-xs uppercase tracking-[0.16em] text-ink/40">Selected timeline</span>
        </div>
        <div className="mt-8 space-y-8">
          {experience.map((e) => (
            <div key={`${e.org}-${e.time}`} className="grid gap-3 border-b border-line pb-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <p className="text-xs uppercase tracking-wide text-ink/50">{e.time}</p>
              <div>
                <p className="text-sm text-forest">{e.org}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{e.role}</h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/70">{e.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-20">
        <h2 className="font-serif text-2xl font-semibold text-ink">
          Education
        </h2>
        <ul className="mt-6 grid gap-3 text-sm text-ink/70 sm:grid-cols-3">
          <li className="border-l-2 border-marigold pl-4">Digital Marketing — Creative IT Institute (2022–2023)</li>
          <li className="border-l-2 border-marigold pl-4">Blockchain Technology — Udemy</li>
          <li className="border-l-2 border-marigold pl-4">Computer Programming — Udemy</li>
        </ul>
      </Reveal>
    </div>
  );
}
