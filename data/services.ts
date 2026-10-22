export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  copy: string;
  details: string;
  growthRole: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Websites & E-commerce",
    copy: "Fast, clean websites and e-commerce stores built to convert, not just to look nice.",
    details:
      "Your website is where growth either happens or leaks away. I build fast, responsive sites and stores around the actions you want customers to take — buy, book, enquire — with checkout, payments and analytics set up properly from day one.",
    growthRole: "The foundation: a fast, trustworthy home that turns traffic into customers.",
    deliverables: ["Responsive page design", "E-commerce and CMS builds", "Performance and conversion setup"],
  },
  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    copy: "On-page and technical SEO so the right people find you before they find your competitor.",
    details:
      "A practical search strategy that improves your visibility, fixes technical friction, and compounds over time — in your market, whether that is one city or five countries.",
    growthRole: "The compounding channel: free, intent-driven traffic that grows month after month.",
    deliverables: ["Keyword and competitor research", "On-page and technical optimization", "Search Console reporting"],
  },
  {
    slug: "video-editing-motion",
    title: "Video Editing & Motion",
    shortTitle: "Video & Motion",
    copy: "Reels, ads and product videos edited for retention, with motion graphics, captions and AI voiceover.",
    details:
      "Short-form video is where your customers spend their attention. I edit Reels, TikTok and product videos for watch time and action: a hook in the first three seconds, clean cuts, motion graphics, burned-in captions and a voiceover when the story needs one.",
    growthRole: "The attention engine: video that gets watched, shared and remembered.",
    deliverables: ["Reels, TikTok and Shorts editing", "Motion graphics and animated titles", "Captions and AI voiceover", "Ad creative cuts and product videos"],
  },
  {
    slug: "content-strategy",
    title: "Content Strategy",
    shortTitle: "Content Strategy",
    copy: "Content calendars and messaging that build trust before someone even talks to you.",
    details:
      "Useful, focused content that answers real customer questions and gives your brand something worth returning to — planned as a system, not posted at random.",
    growthRole: "The trust builder: content that warms people up before they ever enquire.",
    deliverables: ["Content pillars and calendar", "Search-led topic planning", "Messaging and editorial direction"],
  },
  {
    slug: "meta-advertising",
    title: "Meta Advertising",
    shortTitle: "Meta Advertising",
    copy: "Facebook & Instagram ad campaigns built for ROI, not just impressions.",
    details:
      "Campaigns designed around the full path from first impression to qualified enquiry or purchase, with creative tested like it matters — because it does.",
    growthRole: "The accelerator: paid reach pointed at people ready to buy.",
    deliverables: ["Campaign and audience setup", "Creative and offer testing", "Performance optimization"],
  },
  {
    slug: "conversion-optimization",
    title: "Conversion Optimization",
    shortTitle: "Conversion Optimization",
    copy: "Turn more of your existing traffic into enquiries, bookings, and sales.",
    details:
      "Remove the small points of friction that make interested visitors hesitate, leave, or forget to come back — and measure every change.",
    growthRole: "The multiplier: more revenue from the traffic you already have.",
    deliverables: ["Landing page reviews", "Trust and CTA improvements", "Analytics-led recommendations"],
  },
  {
    slug: "analytics-tracking",
    title: "Analytics & Tracking",
    shortTitle: "Analytics & Tracking",
    copy: "Know which pages, campaigns, and customer actions are driving real business results.",
    details:
      "A cleaner measurement system so marketing decisions are based on evidence instead of guesswork.",
    growthRole: "The compass: clear numbers behind every growth decision.",
    deliverables: ["GA4 and Search Console setup", "Conversion event planning", "Simple reporting dashboards"],
  },
  {
    slug: "social-media-growth",
    title: "Social Media Growth",
    shortTitle: "Social Media Growth",
    copy: "A consistent social presence that keeps your brand visible, credible, and easy to remember.",
    details:
      "A repeatable approach to content and community that supports your website instead of living separately from it.",
    growthRole: "The presence: staying visible and credible where your customers scroll.",
    deliverables: ["Platform and content strategy", "Monthly content direction", "Engagement and profile optimization"],
  },
  {
    slug: "website-care-growth",
    title: "Website Care & Growth",
    shortTitle: "Care & Growth",
    copy: "Ongoing improvements that keep your website healthy, useful, and ready for the next opportunity.",
    details:
      "Continuous attention after launch, from updates and fixes to new experiments shaped by customer behavior.",
    growthRole: "The momentum: small improvements, compounded every month.",
    deliverables: ["Updates and maintenance", "Monthly performance review", "Prioritized growth roadmap"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
