export type Project = {
  slug: string;
  name: string;
  tag: string;
  copy: string;
  result: string;
  detail: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "wearzana",
    name: "WearZana.com",
    tag: "E-commerce · Web Development, SEO, Ads",
    copy: "Built the full fashion e-commerce store from scratch — now run SEO and Facebook ads for ongoing growth.",
    result: "Fully functional store built from scratch; improved site speed and ongoing sales growth.",
    detail: "Designed and built the entire e-commerce site — responsive UI, product pages, cart and checkout, backend functionality. Now run SEO (keyword research, on-page optimization, technical structure) and Facebook ad campaigns, tracking performance through Analytics and Search Console to keep improving conversions.",
    deliverables: ["Responsive e-commerce build", "SEO and technical structure", "Facebook ads and measurement"],
  },
  {
    slug: "peerlesshouse",
    name: "PeerlessHouse",
    tag: "Affiliate Marketing · WordPress",
    copy: "Custom WordPress build with affiliate integration, SEO optimization, and analytics.",
    result: "Custom-built site with top search rankings and efficient affiliate management.",
    detail: "Built a custom WordPress site for this affiliate marketing startup — brand-matched design, responsive across devices, a robust affiliate link/banner system, full SEO optimization, an easy-to-use content management setup, and analytics integration for data-driven decisions.",
    deliverables: ["Custom WordPress design", "Affiliate link management", "SEO and analytics setup"],
  },
  {
    slug: "cryptowithrakib",
    name: "CryptoWithRakib",
    tag: "Publishing · WordPress, SEO",
    copy: "A crypto blog built for a niche audience, grown through SEO and social integration.",
    result: "Grew into a recurring resource site for crypto enthusiasts.",
    detail: "Designed and developed a cryptocurrency blogging platform on WordPress — a user-friendly, visually engaging interface, SEO best practices for visibility, and social sharing integration, turning it into a hub for articles, market analysis, and industry trends.",
    deliverables: ["Publishing-focused WordPress build", "SEO-ready content structure", "Social sharing integration"],
  },
  {
    slug: "dream-mart-bd",
    name: "Dream Mart BD",
    tag: "Local E-commerce · SEO",
    copy: "SEO improvements that helped a Chattogram e-commerce brand become more visible in search.",
    result: "Increased organic visibility and improved product page rankings.",
    detail: "Search Engine Optimization Specialist for this Chattogram-based e-commerce brand — keyword research, on-page SEO, and technical improvements that grew organic traffic.",
    deliverables: ["Keyword research", "Product page optimization", "Technical SEO improvements"],
  },
];
