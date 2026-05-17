import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/sanity";
import BlogCard from "@/components/blog/BlogCard";

const staticPosts = [
  {
    img: "/img/blog-1.png",
    category: "Insurance tips",
    author: "C. Sivaprakash",
    date: "May 2026",
    title: "Top 5 mistakes to avoid when choosing insurance",
    excerpt:
      "How to dodge common traps — under-insuring the earning member, ignoring health waiting periods, and chasing returns instead of protection.",
  },
  {
    img: "/img/blog-2.png",
    category: "Insurance tips",
    author: "C. Sivaprakash",
    date: "May 2026",
    title: "How to pick the best life insurance policy for your family",
    excerpt:
      "A simple checklist: income replacement, goal dates, premium comfort, and matching LIC product categories to each need.",
  },
  {
    img: "/img/blog-3.png",
    category: "Insurance tips",
    author: "C. Sivaprakash",
    date: "May 2026",
    title: "Understanding corporate group health insurance",
    excerpt:
      "What SMEs should verify: floater vs individual, add-ons, claim TPA experience, and how renewals are managed year on year.",
  },
];

export default async function BlogPreview() {
  const livePosts = await getAllPosts();
  const posts = livePosts.slice(0, 3);
  const hasCms = posts.length > 0;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Insights
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {hasCms ? "Latest articles" : "Articles we are publishing next"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Practical topics on LIC planning, health cover, and running a secure business —
            written for Chennai families and entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hasCms
            ? posts.map((post) => <BlogCard key={post._id} post={post} />)
            : staticPosts.map((p, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span>👤 {p.author}</span>
                      <span>📅 {p.date}</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                      {p.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.excerpt}</p>
                    <Link
                      href="/blog"
                      className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                    >
                      View blog →
                    </Link>
                  </div>
                </div>
              ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
