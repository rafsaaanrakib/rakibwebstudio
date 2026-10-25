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
    slug: "how-much-should-business-website-cost-2026",
    title: "How much should a business website actually cost in 2026?",
    date: "2026-10-25",
    excerpt: "There is no single price for a business website — and any quote that gives you one before asking what the site has to do is guessing. Here is what actually moves the price, what a cheap quote usually leaves out, and how to compare quotes fairly.",
    body: [
      "Ask ten agencies how much a business website costs and you will get ten different numbers, and every one of them will sound confident. Here is the honest answer: there is no single price, because a website is not one product. A one-page landing page, a full online store with checkout and payments, and a site that is actively grown month after month are three different purchases that happen to share a name. Any quote that gives you a number before asking what the site has to do, who it has to convince, and what happens after launch is not a quote. It is a guess.",
      "What moves the price is scope, and scope is mostly decisions, not design. How many pages, and who writes the words on them? Is it a brochure site or a store — and if it is a store, does checkout need payments, shipping, discounts and abandoned-cart follow-up? Does it need booking, a quote form, or a customer login? Is it built to be found — keyword pages, technical SEO, speed on a phone — or just built to exist? Does it need content, photography, video, or a second language for another market? Each yes adds real work, and honest quotes price that work. Vague quotes hide it and charge you for it later.",
      "That is also why the cheapest quote is rarely the cheapest website. A low price usually leaves something out, and what gets left out is almost always the unglamorous part: the clarity work on what the page should say, the conversion structure of one goal per page, the speed work, the SEO foundations, the analytics that tell you what is working, and anyone to call after launch. You do not save that money. You pay it later — in a rebuild, in months of a site that looks fine and sells nothing, or in traffic bought for a page that leaks. I wrote about those leaks in [Your website gets traffic but no sales? 7 leaks to check first](/blog/website-traffic-no-sales-7-leaks), and the system behind them in [Why your website isn't turning visitors into customers](/blog/why-website-not-turning-visitors-into-customers). A site that cannot convert is expensive at any price.",
      "It helps to think in three kinds of purchase, because that is how I price the work here. A launch: a conversion-focused website or landing page, fixed scope, for a new brand that needs to start selling. Growth: the website plus SEO and content every month, for a store or service business that wants steady enquiries. Scale: growth plus video, Reels and ads creative every month, for a brand ready to push. Websites here start from $800 — the starting figure already published on this site — and exact quotes are confirmed on a call, once the scope is actually known. If a quote will not tell you what is included, it is not comparable to one that will, no matter how good the number looks.",
      "So when you compare quotes, compare the scope line by line, not the headline number. Who writes the content, or is that on you? Do you own the site, the domain and the content outright? How many revisions are included, and what happens when you want to change something in three months? Is speed, mobile performance, SEO setup and analytics included, or are they extras? Is there anyone improving the site after launch, or does the relationship end the day it goes live? Two quotes can differ by thousands and still be fairly priced — if one includes the work the other quietly omits. The expensive quote is the one you have to buy twice.",
      "A few warning signs are worth naming plainly. A fixed price offered before anyone has asked about your business, your customers or your goals. A template sold to you as a custom build. A promise of search rankings with no explanation of what will actually be done. An “SEO included” line with no pages, no keywords and no reporting behind it. And a price so low it could only work if the builder disappears after launch — because that is usually exactly what happens. None of this means you should pay the most. It means you should pay for a scope you can read and a builder who will still be there.",
      "One last thing about order, because it matters more than the total: spend on clarity and conversion before you spend on traffic. A clear page with one next step and proof near the decision makes every dollar after it work harder — the same order I set out in [SEO vs Facebook ads: where should a small business spend first?](/blog/seo-vs-facebook-ads-where-to-spend-first). A beautiful site that nobody can find is a brochure. A found site that nobody trusts is a leak. A clear, fast, converting site, then traffic aimed at it, is a system. That is what you are really buying, whatever the invoice calls it.",
      "If you are staring at quotes right now and cannot tell which one is fair, start with the free [website audit](/tools). It checks your current site against the leaks above and tells you what actually needs fixing, before you spend anything. And if you want the full system — clarity, converting pages, traffic, then follow-up, in that order — it is the one in my book, [Website to Customers](/ebook). Do not buy the cheapest website. Buy the one whose scope you understand, from someone who will still be there after launch.",
    ],
  },,
  {
    slug: "free-website-tools-launch",
    title: "3 free tools I use in client work — now in one place",
    date: "2026-10-25",
    excerpt: "An instant website audit, a project price estimator, and a Reel hook generator. Free to use, no email wall for the first result — the same tools I start real client projects with.",
    body: [
      "Today I am putting the tools I actually use in client work in one place, free for anyone to use: [the free tools page](/tools).",
      "Tool one is the instant website audit. Eight questions, the same first-pass checklist I run on real projects: speed on a phone, SEO titles, your Google profile, one-tap contact, analytics, five-second clarity, content rhythm, and reviews and pricing signals. You get a score out of eight, and if you want it, an emailed report of exactly what you missed.",
      "Tool two is the project price estimator. Answer a few questions about what you need, and it gives you a USD estimate in the same ranges the studio quotes from — websites from $800. No sales call required to get a number.",
      "Tool three is the Reel hook generator. Short-form video lives or dies on the first line, so this one gives you hooks you can actually use, instead of staring at a blank caption box.",
      "Why free? Two reasons. First, useful tools are the fairest way to prove a studio knows its work — you can test the thinking before you ever talk to me. Second, most small businesses do not need a sales pitch. They need to know, in ten minutes, what is wrong with their website and what it would cost to fix it. These tools answer that.",
      "No email wall for the first result. The audit report by email is optional — it is there if you want the fix list in your inbox, and it joins you to the newsletter, where the next blog post lands whenever it publishes.",
      "Try the audit first, and tell me your score. If it is lower than you expected, that is normal — most sites I check land in the middle, and the fixes are usually smaller than people fear. Start with [the free tools](/tools), then run [the 5 Leaks checklist](/checklist) if you want the deeper version.",
      "And if you build something with these tools, or one of them saves you a bad decision, I would genuinely like to hear about it — [leave a review](/reviews) or just reply to the newsletter. That is how the next tool gets built: from what people actually use.",
    ],
  },
  {
    slug: "seo-vs-facebook-ads-where-to-spend-first",
    title: "SEO vs Facebook ads: where should a small business spend first?",
    date: "2026-10-25",
    excerpt: "SEO compounds and ads stop the day you stop paying — so which one deserves your first dollar? The honest answer depends on one thing: how fast you need customers, and whether your website is ready for the traffic either one brings.",
    body: [
      "SEO compounds. Facebook ads stop the day you stop paying. So which one deserves your first dollar?",
      "I get asked this by almost every small business I talk to, and the honest answer is annoying: it depends. But it depends on something specific — not on your industry, not on what your competitors are doing, and not on which guru you watched last. It depends on how fast you need customers, and whether your website is ready for traffic at all.",
      "What each one actually buys you",
      "SEO buys you visitors who were already looking for what you sell. Someone types a problem into Google, finds your page, and arrives with intent. That traffic is free once it exists, it compounds month after month, and it keeps working while you sleep. The price is time. Real SEO takes three to six months before it pays for itself, and the first two months often look like nothing is happening.",
      "Facebook ads buy you speed. You can put an offer in front of the right people today, test a message this week, and know by Friday whether it works. The price is rent. The moment you stop paying, the traffic stops — and if your targeting or creative is off, you can spend a lot of money learning that lesson.",
      "Neither one is \"better\". They are different tools, and using the wrong one first is where most small budgets get wasted.",
      "The question to ask before you spend anything",
      "Before SEO or ads, ask this: if I sent 100 perfect visitors to my website tomorrow, would any of them buy?",
      "If the answer is no — the headline is unclear, there is no single next step, there is no proof near the decision — then neither channel will save you. Ads will just buy you expensive proof that the page leaks, and SEO will take months to send traffic to a page that cannot convert. Fix the page first. I wrote about the exact leaks to check in [Your website gets traffic but no sales? 7 leaks to check first](/blog/website-traffic-no-sales-7-leaks), and the system behind them in [Why your website isn't turning visitors into customers](/blog/why-website-not-turning-visitors-into-customers).",
      "A converting page changes the whole maths. Suddenly ads are a test, not a gamble, and SEO is an investment, not a hope.",
      "Spend on ads first if…",
      "You need customers in the next 30 days. You have a product or service people can buy or book now, not in six months. And you have a budget you can afford to spend on testing — because the first ads are rarely the best ads. You are paying to learn what message, offer and audience actually convert, fast.",
      "Ads are also the right first spend when you are not sure what people want. A week of ads tells you more about your offer than a month of guessing. Take what converts, then build SEO around those exact words and pages.",
      "Spend on SEO first if…",
      "You can wait three to six months, and you want your cost per customer to fall over time instead of staying flat. You sell something people search for — a service, a product, a problem with a name — and you plan to be in business long enough for compounding to matter.",
      "SEO is also the right first spend when your budget is small but steady. A few hundred dollars a month, spent consistently on pages that answer real searches, beats a one-off ad blast that vanishes. It is slow, boring, and it is how most of my clients' cheapest customers eventually arrive.",
      "The order that works for most small businesses",
      "For most small businesses, the order is this:",
      "1. Fix the page. One clear sentence, one next step, proof near the decision.",
      "2. Run a small, short ads test. Not to scale — to learn. What offer, what words, what audience actually converts?",
      "3. Put your steady money into SEO, aimed at the searches behind the winning message. Build pages for the people who are already looking.",
      "4. Use ads again, on purpose, for launches, slow months, and retargeting the people who visited but did not buy.",
      "Ads for speed and learning, SEO for compounding. In that order, each one makes the other cheaper.",
      "The two mistakes I see most",
      "The first mistake is buying traffic for a leaking website, then concluding that \"online marketing doesn't work\". It works. It just works in sequence — clarity and conversion before traffic, always.",
      "The second mistake is the opposite: waiting six months for SEO while the business needs customers now, then running out of money before the compounding starts. If you need sales this month, say so, and spend accordingly. There is no shame in ads. There is only waste in ads with nowhere to land.",
      "So, where should you spend first?",
      "If you need customers now and your page converts: ads, small and fast, to learn. If you can wait and want the cheapest customers in a year: SEO, steady and patient. If your page does not convert yet: neither. Fix that first — it is free, it takes an afternoon, and it makes everything after it work.",
      "Start with the free [website audit](/tools). It checks the page before you spend a dollar on sending anyone to it. And if you want the full system — clarity, converting pages, traffic, then follow-up, in that order — it is the one in my book, [Website to Customers](/ebook).",
      "Traffic is not the goal. Customers are. Spend in the order that gets you those, soonest and cheapest, in that order.",
    ],
  },
  {
    slug: "website-traffic-no-sales-7-leaks",
    title: "Your website gets traffic but no sales? 7 leaks to check first",
    date: "2026-10-24",
    excerpt: "Traffic is not the problem. If people visit your website and leave without enquiring or buying, something on the page is leaking them. Here are the seven leaks I check first \u2014 and the order to fix them.",
    body: [
      "Traffic is not the same thing as customers. I have seen websites with thousands of monthly visitors and almost no enquiries, and websites with a few hundred visitors that keep their owners busy. The difference is rarely the amount of traffic. It is what happens after someone arrives.",
      "Think of your website as a bucket. Advertising and SEO pour water in. But if the bucket has holes, it does not matter how fast you pour \u2014 it never fills. Most websites I audit do not have a traffic problem. They have a leak problem. And the good news is that leaks are fixable, usually in days, not months.",
      "Here are the seven leaks I check first, in the order I check them.",
      "1. It loads too slowly on a phone. Most of your visitors are on a phone, on a connection nowhere near as fast as your office wifi. If your homepage takes more than a few seconds to become usable, a large share of visitors leave before they ever see what you sell. Check it honestly: open your own site on mobile data, not wifi, and count the seconds until you can read the headline and tap something. Compress images, remove plugins and animations you don't need, and test again. Speed isn't a technical nicety \u2014 it's the front door.",
      "2. A stranger can't tell what you do in five seconds. The most common leak, and the most expensive. A visitor lands, sees a clever headline and eight menu options, and five seconds later still can't answer: what do you sell, who is it for, what should I do next? Fix it with one plain sentence at the top of the page. If a twelve-year-old can't explain your homepage back to you, rewrite it. Clarity is the whole system, and this is where it starts \u2014 I wrote about it in more detail in [Why your website isn't turning visitors into customers](/blog/why-website-not-turning-visitors-into-customers).",
      "3. There is no single obvious next step. Many sites offer five actions at once: call, email, form, follow, read the blog. A confused visitor does none of them. Every page needs one primary action \u2014 one button, one form, one tap-to-call number. Cut the form to what you actually need to start a conversation: name, contact, what they need.",
      "4. There is nothing that makes you believable. A stranger has no reason to trust you yet, and most sites give them no proof: no reviews, no real work, no prices, no answers to common questions. You don't need a hundred testimonials \u2014 a few honest ones, real work with real outcomes, FAQs, and a starting figure, like websites from $800, do the job. Trust is built from specifics, not adjectives.",
      "5. You are flying blind \u2014 nothing is measured. Without analytics you can't tell which pages lose people or whether your last change helped. Setting it up takes under an hour and changes every decision after it.",
      "6. There is no system that brings people back. Most visitors won't buy on the first visit \u2014 that's normal. The leak is having no way to stay in touch: no email capture, no useful content. Offer something genuinely useful, like my [5 Leaks checklist](/checklist), and then actually send useful things, not just promotions.",
      "7. The finish line has friction. The visitor is convinced \u2014 then checkout demands an account first, the form errors, or the phone number is an image instead of a tap-to-call link. Test your own finish line on your phone once a month. Every point of friction there costs you the customers who were already convinced \u2014 the most expensive ones to lose.",
      "The order to fix them: message clarity and the obvious next step first (free, one afternoon) \u2192 speed and trust signals \u2192 remove finish-line friction \u2192 measurement \u2192 the follow-up system. Each fix makes the next one more valuable.",
      "Where to start today: run the free [instant website audit](/tools) \u2014 it checks the big ones in two minutes and emails you exactly what you missed. Fix the first two leaks, and watch what changes before you spend another dollar on traffic.",
      "Traffic fills the bucket. Fixing leaks keeps it full.",
    ],
  },
  {
    slug: "why-i-rebuilt-my-website",
    title: "I rebuilt my website from zero \u2014 and moved to rakibwebstudio.com",
    date: "2026-10-23",
    excerpt: "The old site sold \"SEO services\" \u2014 the studio sells growth. Why I rebuilt everything, moved to rakibwebstudio.com, and what the first day looked like.",
    body: [
      "Yesterday I deleted my old website and replaced it with this one. New design, new system, new address: rakibwebstudio.com.",
      "The old site wasn't broken. It was worse than broken \u2014 it was saying the wrong thing. It described a freelancer who sells \"SEO services\" and \"web development.\" But that's never really been the work. The work is growth: the website, the search visibility, the ads, the content, the social, the video \u2014 everything a business needs to turn strangers into customers, run as one system. If my own website couldn't say that clearly, why would a client trust me to say it for them?",
      "So the rebuild started with words, not design. One promise, readable in five seconds: everything your business needs to grow. Interestingly, that's the exact first leak I wrote about in [my breakdown of why websites don't turn visitors into customers](/blog/why-website-not-turning-visitors-into-customers) \u2014 unclear in the first five seconds. My old site had it. Now it doesn't.",
      "The design took longer than the words. The first versions I reviewed looked like every other agency site \u2014 bright colours, busy gradients, boxes everywhere. It looked cheap, and I kept sending it back. What finally worked was restraint: near-black, warm bone text, big editorial type, hairline rules instead of cards \u2014 and one piece of playfulness I refused to cut: an [interactive globe on the homepage](/) that you can grab and spin, dotted with real geography and markers from Chattogram to New York, London, Dubai and Sydney. Based in Bangladesh, working worldwide. The globe is the positioning, drawn.",
      "Under the hood it changed too. The site now runs on Cloudflare with its code on GitHub, so every improvement deploys automatically \u2014 yesterday alone I shipped a dozen fixes and features the same day they were found. The [book I wrote on turning visitors into customers](/ebook) has its own page. The [free tools](/tools) \u2014 a website audit, a price estimator, a Reel hook generator \u2014 are live for anyone to use, no email wall.",
      "And the first day? 36 people visited. The most-viewed page after the homepage was the book. One visitor even arrived through Meta AI \u2014 an AI assistant had read the site and sent them over, on day one. Small numbers, honestly reported. But the direction is the whole point: a website that says one clear thing, in one clear place, gets found \u2014 by people, and now by the machines people ask.",
      "If your website still describes what you used to do instead of what you actually do, you don't have a traffic problem. You have a clarity problem \u2014 and it's the cheapest one to fix. Start with the free audit on this site; it's the same checklist I ran on my own rebuild.",
    ],
  },
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
      "Leak four: no proof near the decision. People don't buy from websites; they buy from businesses they trust. Reviews, real photos, case studies, names, results \u2014 placed where the decision happens, not buried on an \"about\" page nobody visits. When I rebuilt [the WearZana store](/work/wearzana), the lesson was exactly this: a [slow, thin product page](https://web.dev/articles/vitals) reads as a small, untrustworthy shop before a single word is read. Trust is a design feature, not a marketing extra.",
      "Leak five: the 97% are allowed to vanish. Most visitors will never buy on the first visit \u2014 that's normal, not failure. What's failure is giving them no reason and no way to stay connected: no lead magnet, no WhatsApp follow-up, no email capture, no retargeting. A website without a capture system is a bucket with the bottom missing. You don't need more water. You need to fix the bucket.",
      "So what does the fix look like? Not a redesign \u2014 a system, in this order.",
      "Step one is clarity before design: one sentence that says who you help and what changes for them, placed where a five-second visitor can't miss it. Step two is building [pages that convert](/services/conversion-optimization): one goal per page, proof near every decision, and speed treated as a trust signal. Step three is attracting the right visitors \u2014 [SEO](/services/seo) and content aimed at people already searching for what you sell, in the words they actually use. Step four is capture and follow-up: every visitor who isn't ready to buy gets an easy way to stay in your world until they are.",
      "This order matters. Most businesses do it backwards \u2014 they buy more traffic (step three) for a website that leaks (steps one, two and four undone), then conclude that \"online marketing doesn't work.\" It works. It just works in sequence.",
      "If you want to check your own site against the five leaks, [the free website audit on this site](/tools) walks you through the same list I start every client project with \u2014 no email wall for the first result. And if you want the complete system, it's the one I wrote down in my book, [Website to Customers](/ebook): the clarity framework, the conversion pages, the traffic chapters, and a 30-day action plan that puts it in order for you.",
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
      "Want a second pair of eyes on your store? The [free website audit on this site](/tools) is the same checklist I start every project with.",
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
      "Technical health: site speed, mobile responsiveness, and no broken links. I run every new client through [Google Search Console](https://search.google.com/search-console) in the first week to catch what's silently hurting rankings.",
      "Content that matches intent: a blog post about 'best practices' means nothing if customers are searching for what you actually sell, in the words they actually use. Match your content to real search intent, not what feels impressive to write.",
      "Getting these right consistently outperforms chasing every new SEO trend before the fundamentals are solid.",
      "Start with the [free audit tool on this site](/tools) — it walks you through the same basics for your own website.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
