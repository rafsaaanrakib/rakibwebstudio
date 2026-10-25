import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/work", "/tools", "/blog", "/ebook", "/newsletter", "/checklist", "/reviews", "/about", "/contact", "/privacy"];
  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const s of services) {
    entries.push({ url: `${site.url}/services/${s.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 });
  }
  for (const p of projects) {
    entries.push({ url: `${site.url}/work/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 });
  }
  for (const post of posts) {
    entries.push({ url: `${site.url}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly", priority: 0.6 });
  }
  return entries;
}
