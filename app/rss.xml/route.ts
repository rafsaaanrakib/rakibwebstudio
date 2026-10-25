import { posts } from "@/data/posts";
import { site } from "@/data/site";

export const dynamic = "force-static";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// RSS feed for the blog. Consumed by feed readers and by the site's own
// newsletter Worker (/api/send-latest), which emails the newest item to
// subscribers whenever a post goes live.
export function GET() {
  // Date descending; equal dates keep the posts-array order (newest first).
  // Returning -1 for equal dates used to scramble same-day posts, so the
  // newsletter's "newest item" pick kept landing on an already-sent post.
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const items = sorted
    .map((p) => {
      const link = `${site.url}/blog/${p.slug}`;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(`${p.date}T09:00:00+06:00`).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rakib Web Studio — Blog</title>
    <link>${site.url}/blog</link>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Websites that turn visitors into customers: conversion, SEO and growth systems for businesses worldwide.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
