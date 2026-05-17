import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/sanity";

const BASE_URL = "https://sivaprakashwealth.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPostSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.9 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
