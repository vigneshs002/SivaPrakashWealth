import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author?: string;
  category?: string;
  excerpt?: string;
  coverImage?: SanityImageSource & { alt?: string };
  body?: unknown[];
}

const isSanityConfigured =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder";

export async function getAllPosts(): Promise<Post[]> {
  if (!isSanityConfigured) return [];
  return sanityClient.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, author, category, excerpt, coverImage
    }`,
    {},
    { next: { revalidate: 3600 } }
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) return null;
  const post = await sanityClient.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, author, category, excerpt, coverImage, body
    }`,
    { slug },
    { next: { revalidate: 3600 } }
  );
  return post ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return [];
  const posts = await sanityClient.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"]{ slug }`,
    {},
    { next: { revalidate: 3600 } }
  );
  return posts.map((p: { slug: { current: string } }) => p.slug.current);
}
