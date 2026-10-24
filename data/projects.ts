export type Project = {
  slug: string;
  name: string;
  tag: string;
  copy: string;
  result: string;
  // Outcome-first summary (gap fix, 2026-10-24): a buyer should see what
  // changed before reading the story. Facts only — drawn from the case
  // study itself, never invented metrics.
  outcome: string;
  outcomePoints: string[];
  detail: string;
  deliverables: string[];
  link?: string;
  // Optional muted loop (mp4/webm under /public/videos). The case-study
  // template renders it at the top when present.
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "wearzana",
    name: "WearZana.com",
    tag: "E-commerce · Web Development, SEO, Ads",
    copy: "Built the full fashion e-commerce store from scratch — now run SEO and Facebook ads for ongoing growth.",
    result: "Fully functional store built from scratch; improved site speed and ongoing sales growth.",
    outcome: "From zero to a selling store — then growth on top.",
    outcomePoints: ["Store built from scratch", "SEO running", "Meta ads running"],
    detail:
      "Designed and built the entire e-commerce site — responsive UI, product pages, cart and checkout, backend functionality. Now run SEO (keyword research, on-page optimization, technical structure) and Facebook ad campaigns, tracking performance through Analytics and Search Console to keep improving conversions. This is the growth system in action: one partner for the build, the search visibility and the ads.",
    deliverables: ["Responsive e-commerce build", "SEO and technical structure", "Facebook ads and measurement"],
    link: "https://wearzana.com",
  },
  {
    slug: "rewiso",
    name: "Rewiso",
    tag: "Product · App Design & Launch",
    copy: "A free spending journal app I founded and launched — helping people see which purchases they regret, and why.",
    result: "Designed and launched an installable app for iPhone and Android, now growing on Instagram and X.",
    outcome: "An idea, designed, built and launched as a real product.",
    outcomePoints: ["Live on iPhone & Android", "Growing on Instagram + X", "Founder-built product"],
    detail:
      "Rewiso is my own product: a spending journal with 5-second purchase logging, next-day Glad / Meh / Regret check-ins, trigger insights, a 24-hour wait list, monthly trends and CSV export. Building and marketing my own product keeps my growth advice honest — I test on Rewiso what I recommend to clients.",
    deliverables: ["Product design and build", "Launch and growth on Instagram and X", "Landing page at rewiso.vercel.app"],
    link: "https://rewiso.vercel.app",
  },
  {
    slug: "fish-and-family",
    name: "Fish & Family",
    tag: "Local Brand · Full Online Setup, Video",
    copy: "Set up the full online presence from scratch for a fresh seafood delivery business — then produce the product videos that build trust and drive orders.",
    result: "Facebook Page, WhatsApp Business and Google Business Profile created and optimized from zero, with ongoing product video content.",
    outcome: "A business that didn't exist online — now set up to take orders.",
    outcomePoints: ["Facebook Page from zero", "WhatsApp Business live", "Google profile live"],
    detail:
      "As digital marketing consultant, I created and optimized Fish & Family's Facebook Page, WhatsApp Business account and Google Business Profile from scratch, and I shoot and script product videos that show freshness and build the trust a food delivery business lives on.",
    deliverables: ["Facebook Page setup and optimization", "WhatsApp Business and Google Business Profile", "Product video shooting and scripting"],
  },
  {
    slug: "peerlesshouse",
    name: "PeerlessHouse",
    tag: "Affiliate Marketing · WordPress",
    copy: "Custom WordPress build with affiliate integration, SEO optimization, and analytics.",
    result: "Custom-built site with top search rankings and efficient affiliate management.",
    outcome: "A custom affiliate site, built to rank and easy to run.",
    outcomePoints: ["Custom WordPress build", "SEO structure in place", "Analytics connected"],
    detail:
      "Built a custom WordPress site for this affiliate marketing startup — brand-matched design, responsive across devices, a robust affiliate link/banner system, full SEO optimization, an easy-to-use content management setup, and analytics integration for data-driven decisions.",
    deliverables: ["Custom WordPress design", "Affiliate link management", "SEO and analytics setup"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
