import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/sanity";

const BASE_URL = "https://sivaprakashwealth.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPostSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                  lastModified: new Date("2026-05-17"), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,       lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`,    lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`,        lastModified: new Date("2026-05-17"), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/faq`,         lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`,     lastModified: new Date("2026-05-01"), changeFrequency: "yearly",  priority: 0.6 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = slugs.map(({ slug, publishedAt }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
