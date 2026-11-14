import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export const dynamic = "force-static";

// lastModified is a real content date, never "today": pages changed by the
// 2026-11-14 audit fixes use that date; untouched pages use their last
// committed change (git log -1 --format=%cI -- <path>).
const CHANGED = "2026-11-14";
const LAST_CHANGE: Record<string, string> = {
  "": CHANGED,
  "/services": CHANGED,
  "/work": CHANGED,
  "/tools": CHANGED,
  "/blog": CHANGED,
  "/ebook": CHANGED,
  "/newsletter": "2026-10-25",
  "/checklist": "2026-10-25",
  "/reviews": "2026-10-29",
  "/about": "2026-10-25",
  "/contact": CHANGED,
  "/platform": CHANGED,
  "/privacy": "2026-10-24",
  "/terms": "2026-10-28",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = Object.entries(LAST_CHANGE).map(([path, lastModified]) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const s of services) {
    entries.push({ url: `${site.url}/services/${s.slug}`, lastModified: new Date(CHANGED), changeFrequency: "monthly", priority: 0.8 });
  }
  for (const p of projects) {
    entries.push({ url: `${site.url}/work/${p.slug}`, lastModified: new Date(CHANGED), changeFrequency: "monthly", priority: 0.8 });
  }
  for (const post of posts) {
    entries.push({ url: `${site.url}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly", priority: 0.6 });
  }
  return entries;
}
