import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Insurance Tips & Planning Articles | Blog",
  description:
    "Expert articles on LIC planning, health cover, tax-saving, and business insurance from C. Sivaprakash — Chennai's trusted advisor since 1998.",
};

const placeholderPosts = [
  {
    _id: "1",
    title: "Top 5 mistakes to avoid when choosing insurance",
    slug: { current: "#" },
    publishedAt: "2026-05-14T00:00:00Z",
    author: "C. Sivaprakash",
    category: "Insurance tips",
    excerpt:
      "Under-insuring the breadwinner, skipping health waiting-period rules, mixing investment and protection without a plan, ignoring nominee updates, and buying only for tax proof.",
    coverImage: undefined,
  },
  {
    _id: "2",
    title: "How to pick the best life insurance policy",
    slug: { current: "#" },
    publishedAt: undefined,
    author: "C. Sivaprakash",
    category: "Life insurance",
    excerpt:
      "Start with income replacement, match product type to goal dates, stress-test premium as income changes, and align riders only if needed.",
    coverImage: undefined,
  },
  {
    _id: "3",
    title: "Understanding corporate group health insurance",
    slug: { current: "#" },
    publishedAt: undefined,
    author: "C. Sivaprakash",
    category: "Corporate",
    excerpt:
      "Floater vs individual, maternity and daycare add-ons, room-rent limits, and how renewals affect teams with past claims.",
    coverImage: undefined,
  },
  {
    _id: "4",
    title: "Why insurance is essential for business owners",
    slug: { current: "#" },
    publishedAt: undefined,
    author: "C. Sivaprakash",
    category: "Business",
    excerpt:
      "Protecting partners, key people, debt covenants, and employee health — so operations survive shocks.",
    coverImage: undefined,
  },
  {
    _id: "5",
    title: "How to maximize tax benefits with insurance",
    slug: { current: "#" },
    publishedAt: undefined,
    author: "C. Sivaprakash",
    category: "Tax planning",
    excerpt:
      "80C and 80D in plain terms — without letting the tax tail wag the protection dog.",
    coverImage: undefined,
  },
  {
    _id: "6",
    title: "Best insurance plans for senior citizens",
    slug: { current: "#" },
    publishedAt: undefined,
    author: "C. Sivaprakash",
    category: "Seniors",
    excerpt:
      "Health entry ages, co-pay, and pension-style life options — what to verify before paying premium.",
    coverImage: undefined,
  },
  {
    _id: "7",
    title: "The role of insurance in wealth planning",
    slug: { current: "#" },
    publishedAt: undefined,
    author: "C. Sivaprakash",
    category: "Wealth planning",
    excerpt:
      "How guaranteed and non-guaranteed components fit next to mutual funds and property — building a balanced sheet for your household.",
    coverImage: undefined,
  },
] as const;

const blogImgs = [
  "/img/blog-1.png",
  "/img/blog-2.png",
  "/img/blog-3.png",
  "/img/blog-4.png",
  "/img/blog-1.png",
  "/img/blog-2.png",
  "/img/blog-3.png",
];

export default async function BlogPage() {
  const livePosts = await getAllPosts();
  const hasCms = livePosts.length > 0;

  return (
    <>
      <PageHeader
        title="Our Blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Education &amp; insights
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              {hasCms ? "Latest articles" : "Upcoming articles from Sivaprakash Wealth"}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Short guides for Chennai readers on LIC planning, health cover, and business
              protection.
            </p>
          </div>

          {hasCms ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {livePosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            /* Placeholder cards until Sanity is populated */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {placeholderPosts.map((p, i) => {
                const img = blogImgs[i % blogImgs.length];
                const date = p.publishedAt
                  ? new Date(p.publishedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "Coming soon";

                return (
                  <div
                    key={p._id}
                    className={`bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm ${
                      i === placeholderPosts.length - 1 ? "md:col-span-2 xl:col-span-1" : ""
                    }`}
                  >
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <Image src={img} alt={p.title} fill className="object-cover" />
                      <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span>👤 {p.author}</span>
                        <span>📅 {date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                        {p.title}
                      </h3>
                      {p.excerpt && (
                        <p className="text-gray-500 text-sm leading-relaxed">{p.excerpt}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!hasCms && (
            <div className="mt-12 text-center bg-primary/5 rounded-2xl p-8">
              <p className="text-gray-600 text-sm mb-4">
                Full articles go live once the blog CMS is configured. Subscribe via the contact
                form if you would like updates.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Subscribe for updates
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
