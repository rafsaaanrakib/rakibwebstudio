export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  copy: string;
  details: string;
  growthRole: string;
  deliverables: string[];
  included: string[];
  startingPrice: string;
  timeline: string;
  faq: ServiceFaq[];
  relatedProject: string;
  relatedPost: string;
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
    included: [
      "Strategy first — the site is planned around the action your customer should take",
      "Responsive design that works on phone, tablet and desktop",
      "Conversion structure — clear next step on every page",
      "Checkout and payments set up properly, where you sell online",
      "SEO foundations and analytics connected from day one",
      "Tracking set up so every enquiry and sale is measurable",
    ],
    startingPrice: "from $800",
    timeline: "Timeline confirmed in your fixed quote — it depends on scope and pages.",
    faq: [
      {
        q: "Who owns the website?",
        a: "You do. The site, the content, the domain and all logins are yours, once paid in full.",
      },
      {
        q: "What platform is my website built on?",
        a: "WordPress or custom-built — the platform is chosen for your business, and you own the site and all logins.",
      },
      {
        q: "How long does a website take to build?",
        a: "It depends on scope and pages. Your fixed quote confirms the timeline before any work starts — no open-ended builds.",
      },
      {
        q: "Can I edit the site myself afterwards?",
        a: "Yes — where the site is built on WordPress or a CMS, you can edit text, images and products yourself, and I show you how before handover.",
      },
      {
        q: "What happens after launch?",
        a: "Care, updates and monthly improvements are available on the Care plan, from $100/month. Or take the site and run it yourself — it is yours either way.",
      },
    ],
    relatedProject: "wearzana",
    relatedPost: "how-much-should-business-website-cost-2026",
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
    included: [
      "Keyword and competitor research for your market",
      "On-page optimization — titles, structure, internal links",
      "Technical fixes that stop Google tripping over your site",
      "Content direction tied to what buyers actually search for",
      "Search Console reporting in plain language, every month",
    ],
    startingPrice: "Fixed quote after a short call",
    timeline: "Monthly work — the first month's plan is agreed before we start. SEO compounds; real movement takes time.",
    faq: [
      {
        q: "How long before SEO works?",
        a: "Real movement usually takes months, not days — the honest answer is 3–6 months for real movement and 6–12 for strong results. Anyone promising page one in a week is selling something else.",
      },
      {
        q: "What do I get every month?",
        a: "The agreed work from your plan — research, on-page and technical fixes, content direction — plus a plain-language Search Console report showing what moved and what happens next.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No — nobody honest can. What I guarantee is the work, the reporting, and that you will always know what was done and why.",
      },
      {
        q: "Who owns the content and the accounts?",
        a: "You do. Your site, your Search Console, your content — all under your accounts, once paid in full.",
      },
    ],
    relatedProject: "faisal-iqbal",
    relatedPost: "how-long-does-seo-actually-take",
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
    included: [
      "Hook in the first three seconds, built around your offer",
      "Clean cuts, colour grading and pacing for retention",
      "Motion graphics and animated titles in your brand style",
      "Burned-in captions so the video works with sound off",
      "AI voiceover where the story needs one",
      "Versions cut for Reels, TikTok and ads",
    ],
    startingPrice: "Fixed quote after a short call",
    timeline: "Timeline confirmed in your fixed quote — it depends on footage, length and revisions.",
    faq: [
      {
        q: "What footage do you need from me?",
        a: "Whatever you have — phone footage works. Tell me the offer and the audience, and I cut the story around it.",
      },
      {
        q: "Do the videos include captions?",
        a: "Yes — burned-in captions are standard, because most people watch with the sound off.",
      },
      {
        q: "Who owns the finished videos?",
        a: "You do — the finished files and the project files are yours, once paid in full.",
      },
      {
        q: "Can you make ad versions too?",
        a: "Yes — the same edit can be cut into ad versions for Meta and TikTok, with the hook and call to action adjusted for paid traffic.",
      },
    ],
    relatedProject: "fish-and-family",
    relatedPost: "30-day-content-system",
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
    included: [
      "Content pillars built around what your buyers actually ask",
      "A monthly calendar — topics, formats and where each piece goes",
      "Search-led topic planning, so content brings in traffic too",
      "Messaging and editorial direction in your voice",
      "A simple system you or your team can keep running",
    ],
    startingPrice: "Fixed quote after a short call",
    timeline: "Monthly work — the first month's calendar is agreed before we start.",
    faq: [
      {
        q: "What do I get every month?",
        a: "The agreed calendar — topics, formats and direction — planned around your buyers' questions and what they search for.",
      },
      {
        q: "Do you write the posts too?",
        a: "That depends on the scope we agree. Strategy and direction are always included; writing and production can be added — ask for it in your fixed quote.",
      },
      {
        q: "Who owns the content?",
        a: "You do — every calendar, topic plan and piece of content is yours, once paid in full.",
      },
      {
        q: "How is this different from random posting?",
        a: "Every piece answers a real buyer question or a real search — so the content builds trust and traffic instead of just filling a feed.",
      },
    ],
    relatedProject: "peerlesshouse",
    relatedPost: "website-vs-instagram-own-your-home-online",
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
    included: [
      "Campaign and audience setup around your offer",
      "Creative and offer testing — what actually moves buyers",
      "Full-path tracking, from first impression to enquiry or sale",
      "Performance optimization based on results, not guesses",
      "Plain-language reporting on what each dollar did",
    ],
    startingPrice: "Fixed quote after a short call",
    timeline: "Monthly work — the first campaign plan is agreed before we start. Ad spend is separate from the service fee.",
    faq: [
      {
        q: "Is ad spend included in your fee?",
        a: "No — ad spend goes to Meta, and the service fee covers the setup, creative testing and optimization. Your fixed quote separates the two.",
      },
      {
        q: "How much should I spend on ads?",
        a: "It depends on your offer and market. We agree a test budget before launch — enough to learn what works — and scale only what returns.",
      },
      {
        q: "Who owns the ad accounts and creative?",
        a: "You do — your ad account, your audiences, your creative, once paid in full.",
      },
      {
        q: "How do I know if the ads are working?",
        a: "Tracking is set up from the first impression to the enquiry or sale, and you get plain-language reporting on what each dollar did.",
      },
    ],
    relatedProject: "wearzana",
    relatedPost: "seo-vs-facebook-ads-where-to-spend-first",
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
    included: [
      "A full review of your pages against the 5 leaks",
      "Trust and call-to-action improvements where they matter most",
      "Friction fixes — the small things that make visitors hesitate",
      "Analytics-led recommendations, ranked by likely impact",
      "Measurement on every change, so you know what worked",
    ],
    startingPrice: "Fixed quote after a short call",
    timeline: "Timeline confirmed in your fixed quote — it depends on how many pages we review and fix.",
    faq: [
      {
        q: "What is a conversion review?",
        a: "I go through your pages the way a first-time visitor does, find where they hesitate or leave, and list the fixes in priority order.",
      },
      {
        q: "Do you guarantee more sales?",
        a: "No — nobody honest can. What you get is the measured work: every change is tracked, so you see what moved and what did not.",
      },
      {
        q: "Who owns the changes?",
        a: "You do — every fix is made on your site, in your accounts, once paid in full.",
      },
      {
        q: "Is this a one-off or monthly?",
        a: "Either. A one-off review gives you the ranked fix list; monthly work keeps testing and improving from there.",
      },
    ],
    relatedProject: "wearzana",
    relatedPost: "website-traffic-no-sales-7-leaks",
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
    included: [
      "GA4 and Search Console set up properly, under your accounts",
      "Conversion events planned around what matters — enquiries, sales, bookings",
      "A simple reporting view you can actually read",
      "Plain-language explanation of what the numbers mean",
      "Recommendations on what to fix, based on the evidence",
    ],
    startingPrice: "Fixed quote after a short call",
    timeline: "Timeline confirmed in your fixed quote — setup is a short project; reporting is monthly.",
    faq: [
      {
        q: "Who owns the analytics accounts?",
        a: "You do — GA4 and Search Console are set up under your accounts, with your logins.",
      },
      {
        q: "What will I actually be able to see?",
        a: "Which pages, campaigns and actions bring enquiries and sales — in a simple view, explained in plain language.",
      },
      {
        q: "Do you keep reporting after setup?",
        a: "Yes, if you want it — monthly reporting is available, or take the setup and read it yourself.",
      },
      {
        q: "What if my tracking is already broken?",
        a: "That is the usual starting point. The setup includes finding and fixing what is misfiring before we trust the numbers.",
      },
    ],
    relatedProject: "rewiso",
    relatedPost: "why-website-not-turning-visitors-into-customers",
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
    included: [
      "Platform and content strategy — where to be, and why",
      "Monthly content direction tied to your offer",
      "Profile optimization so a visitor understands you in five seconds",
      "Engagement direction — what to answer, and how",
      "Content that points back to your website, not away from it",
    ],
    startingPrice: "Fixed quote after a short call",
    timeline: "Monthly work — the first month's direction is agreed before we start.",
    faq: [
      {
        q: "Which platforms should I be on?",
        a: "Wherever your buyers actually are — not everywhere. The strategy starts with that choice, not with posting.",
      },
      {
        q: "Do you post for me?",
        a: "That depends on the scope we agree. Direction and planning are always included; posting and production can be added — ask for it in your fixed quote.",
      },
      {
        q: "Who owns the accounts and content?",
        a: "You do — your profiles, your content, your followers, once paid in full.",
      },
      {
        q: "How does social help my website?",
        a: "Every piece of content points back to your site — the place you own — instead of renting attention on someone else's platform.",
      },
    ],
    relatedProject: "fish-and-family",
    relatedPost: "website-vs-instagram-own-your-home-online",
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
    included: [
      "Updates, backups and security — your site kept safe",
      "Monthly performance review in plain language",
      "Small improvements and fixes, prioritized by impact",
      "Experiments shaped by what your visitors actually do",
      "A growth roadmap that compounds month after month",
    ],
    startingPrice: "from $100 / month",
    timeline: "Monthly — starts after a short call; the first month's plan is agreed before we start.",
    faq: [
      {
        q: "What does Care actually cover?",
        a: "Updates, backups and security, a monthly performance review, and small improvements prioritized by impact — the work that keeps a site fast, safe and improving.",
      },
      {
        q: "Is this the same as Grow?",
        a: "No. Grow ($300/month) is SEO, content, ads and video run as one monthly system. Care ($100/month) keeps the website itself healthy and improving.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Payment terms are confirmed in your fixed quote. The site, the content and all logins stay yours either way.",
      },
      {
        q: "Who owns the site while I'm on Care?",
        a: "You do — the site, the content and all logins are yours, once paid in full.",
      },
    ],
    relatedProject: "wearzana",
    relatedPost: "seo-checklist-growing-business",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
