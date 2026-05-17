import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import type { Post } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const imgSrc = post.coverImage ? urlFor(post.coverImage).width(600).height(400).url() : null;
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Coming soon";

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={(post.coverImage as { alt?: string })?.alt ?? post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary text-4xl">
              📰
            </div>
          )}
          {post.category && (
            <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          )}
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" /> {post.author ?? "C. Sivaprakash"}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {date}
          </span>
        </div>
        <Link
          href={`/blog/${post.slug.current}`}
          className="block text-lg font-semibold text-gray-900 hover:text-primary transition-colors mb-2 leading-snug"
        >
          {post.title}
        </Link>
        {post.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
        )}
        <Link
          href={`/blog/${post.slug.current}`}
          className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
        >
          Read article →
        </Link>
      </div>
    </div>
  );
}
