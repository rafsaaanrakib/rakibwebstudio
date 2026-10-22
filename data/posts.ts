// Blog posts live here. To publish a new post, add one entry to this array —
// the blog index and the post page are generated automatically at build time.
// Body is an array of paragraphs (plain text).
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "why-website-not-turning-visitors-into-customers",
    title: "Why your website isn't turning visitors into customers (and the system that fixes it)",
    date: "2026-10-22",
    excerpt: "Traffic isn't your problem \u2014 conversion is. The five leaks draining sales from most business websites, and the simple system that fixes them in order.",
    body: [
      "Your website gets visitors. Some days, decent traffic. And yet the phone stays quiet, the inbox stays empty, and the checkout collects dust.",
      "If that sounds familiar, here is the uncomfortable truth most web designers won't tell you: traffic is rarely the real problem. The problem is what happens in the first sixty seconds after a visitor lands \u2014 because a website doesn't lose customers all at once. It leaks them, quietly, in five predictable places.",
      "Leak one: the first five seconds say nothing. A visitor arrives with one question \u2014 \"can this business solve my problem?\" \u2014 and if your homepage answers with your company name, a stock photo and \"Welcome to our website,\" they're gone. Not because your offer is bad, but because they couldn't tell what it was. Clarity beats cleverness every single time: who you help, what you do, and what happens next, readable in five seconds.",
      "Leak two: the site talks about you, not about them. \"We are a leading provider with 10 years of experience\" is about you. Your visitor cares about their problem, their deadline, their money. Every heading on your site should pass one test \u2014 does this sentence help the visitor see their problem solved? If not, it's decoration, and decoration doesn't sell.",
      "Leak three: there is no single next step. Five buttons, three phone numbers, a chat widget, a newsletter popup and a \"learn more\" \u2014 that's not helpful, that's a crowd shouting directions. A converting page has one obvious next action, repeated calmly: book the call, get the quote, buy the thing. Confused visitors don't choose the wrong option. They choose to leave.",
      "Leak four: no proof near the decision. People don't buy from websites; they buy from businesses they trust. Reviews, real photos, case studies, names, results \u2014 placed where the decision happens, not buried on an \"about\" page nobody visits. When I rebuilt the WearZana store, the lesson was exactly this: a slow, thin product page reads as a small, untrustworthy shop before a single word is read. Trust is a design feature, not a marketing extra.",
      "Leak five: the 97% are allowed to vanish. Most visitors will never buy on the first visit \u2014 that's normal, not failure. What's failure is giving them no reason and no way to stay connected: no lead magnet, no WhatsApp follow-up, no email capture, no retargeting. A website without a capture system is a bucket with the bottom missing. You don't need more water. You need to fix the bucket.",
      "So what does the fix look like? Not a redesign \u2014 a system, in this order.",
      "Step one is clarity before design: one sentence that says who you help and what changes for them, placed where a five-second visitor can't miss it. Step two is building pages that convert: one goal per page, proof near every decision, and speed treated as a trust signal. Step three is attracting the right visitors \u2014 SEO and content aimed at people already searching for what you sell, in the words they actually use. Step four is capture and follow-up: every visitor who isn't ready to buy gets an easy way to stay in your world until they are.",
      "This order matters. Most businesses do it backwards \u2014 they buy more traffic (step three) for a website that leaks (steps one, two and four undone), then conclude that \"online marketing doesn't work.\" It works. It just works in sequence.",
      "If you want to check your own site against the five leaks, the free website audit on this site walks you through the same list I start every client project with \u2014 no email wall for the first result. And if you want the complete system, it's the one I wrote down in my book, Website to Customers: the clarity framework, the conversion pages, the traffic chapters, and a 30-day action plan that puts it in order for you.",
      "But start with the leaks. Find one, fix it this week, and watch what your existing traffic was worth all along.",
    ],
  },
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
      "If you're building your first real online store, the takeaway is this: treat your website as a system, not a one-time project. It needs someone watching analytics, fixing friction points, and improving the parts that quietly cost you customers every week.",
      "Want a second pair of eyes on your store? The free website audit on this site is the same checklist I start every project with.",
    ],
  },
  {
    slug: "seo-checklist-growing-business",
    title: "A simple SEO checklist for growing businesses",
    date: "2026-02-02",
    excerpt:
      "The handful of SEO basics I check first for any business — in any market — before touching anything advanced.",
    body: [
      "Most businesses don't need advanced SEO tactics first — they need the basics done properly. Here's what I check before anything else.",
      "Google Business Profile: claimed, fully filled out, with real photos and accurate hours. For any business serving a location, this alone drives more visibility than most paid ads.",
      "On-page basics: unique title tags and meta descriptions for every page, a clear heading structure, and keywords that match how customers actually search — not internal jargon.",
      "Technical health: site speed, mobile responsiveness, and no broken links. I run every new client through Google Search Console in the first week to catch what's silently hurting rankings.",
      "Content that matches intent: a blog post about 'best practices' means nothing if customers are searching for what you actually sell, in the words they actually use. Match your content to real search intent, not what feels impressive to write.",
      "Getting these right consistently outperforms chasing every new SEO trend before the fundamentals are solid.",
      "Start with the free audit tool on this site — it walks you through the same basics for your own website.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
