export type Service = {
  title: string;
  copy: string;
  details: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "Web Development",
    copy: "Fast, clean websites and e-commerce stores built to convert, not just to look nice.",
    details: "A clear, responsive digital home for your brand, built around the actions you want customers to take.",
    deliverables: ["Responsive page design", "E-commerce and CMS builds", "Performance and conversion setup"],
  },
  {
    title: "SEO",
    copy: "On-page and technical SEO so the right people find you before they find your competitor.",
    details: "A practical search strategy that improves your visibility, fixes technical friction, and compounds over time.",
    deliverables: ["Keyword and competitor research", "On-page and technical optimization", "Search Console reporting"],
  },
  {
    title: "Content Strategy",
    copy: "Content calendars and messaging that build trust before someone even talks to you.",
    details: "Useful, focused content that answers real customer questions and gives your brand something worth returning to.",
    deliverables: ["Content pillars and calendar", "Search-led topic planning", "Messaging and editorial direction"],
  },
  {
    title: "Meta Advertising",
    copy: "Facebook & Instagram ad campaigns built for ROI, not just impressions.",
    details: "Campaigns designed around the full path from first impression to qualified enquiry or purchase.",
    deliverables: ["Campaign and audience setup", "Creative and offer testing", "Performance optimization"],
  },
  {
    title: "Conversion Optimization",
    copy: "Turn more of your existing traffic into enquiries, bookings, and sales.",
    details: "Remove the small points of friction that make interested visitors hesitate, leave, or forget to come back.",
    deliverables: ["Landing page reviews", "Trust and CTA improvements", "Analytics-led recommendations"],
  },
  {
    title: "Analytics & Tracking",
    copy: "Know which pages, campaigns, and customer actions are driving real business results.",
    details: "A cleaner measurement system so marketing decisions are based on evidence instead of guesswork.",
    deliverables: ["GA4 and Search Console setup", "Conversion event planning", "Simple reporting dashboards"],
  },
  {
    title: "Social Media Growth",
    copy: "A consistent social presence that keeps your brand visible, credible, and easy to remember.",
    details: "A repeatable approach to content and community that supports your website instead of living separately from it.",
    deliverables: ["Platform and content strategy", "Monthly content direction", "Engagement and profile optimization"],
  },
  {
    title: "Website Care & Growth",
    copy: "Ongoing improvements that keep your website healthy, useful, and ready for the next opportunity.",
    details: "Continuous attention after launch, from updates and fixes to new experiments shaped by customer behavior.",
    deliverables: ["Updates and maintenance", "Monthly performance review", "Prioritized growth roadmap"],
  },
];
