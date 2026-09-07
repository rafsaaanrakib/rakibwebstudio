export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "building-wearzana-from-scratch",
    title: "What I learned building an e-commerce store from zero",
    date: "2026-01-15",
    excerpt:
      "Notes from building WearZana.com end to end — design, cart, checkout, and the small decisions that affect real sales.",
    body: [
      "When I started building WearZana.com, the brief was simple: a fashion e-commerce store that actually converts. The hard part is everything underneath that sentence — product pages that load fast, a cart that doesn't lose items, a checkout that doesn't scare people off halfway through.",
      "The biggest lesson: speed is a trust signal before a single word of copy is read. A slow product page reads as a small, untrustworthy shop, even if the products are great. I spent as much time on image optimization and loading performance as I did on layout.",
      "The second lesson: SEO and web development aren't separate jobs. Because I built and now run the SEO for the same site, I could structure URLs, headings, and page speed with search visibility in mind from day one instead of retrofitting it later.",
      "If you're a local business building your first real online store, the takeaway is this: treat your website as a system, not a one-time project. It needs someone watching analytics, fixing friction points, and improving the parts that quietly cost you customers every week.",
    ],
  },
  {
    slug: "seo-checklist-local-business",
    title: "A simple SEO checklist for local businesses",
    date: "2026-02-02",
    excerpt:
      "The handful of SEO basics I check first for any local business — before touching anything advanced.",
    body: [
      "Most local businesses don't need advanced SEO tactics first — they need the basics done properly. Here's what I check before anything else.",
      "Google Business Profile: claimed, fully filled out, with real photos and accurate hours. This alone drives more local visibility than most paid ads.",
      "On-page basics: unique title tags and meta descriptions for every page, a clear heading structure, and keywords that match how customers actually search — not internal jargon.",
      "Technical health: site speed, mobile responsiveness, and no broken links. I run every new client through Google Search Console in the first week to catch what's silently hurting rankings.",
      "Content that matches intent: a blog post about 'best practices' means nothing if customers are searching for 'same day delivery near me.' Match your content to real search intent, not what feels impressive to write.",
      "Getting these right consistently outperforms chasing every new SEO trend before the fundamentals are solid.",
    ],
  },
];
