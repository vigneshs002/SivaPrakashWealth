import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getAllPostSlugs, getPostBySlug, urlFor } from "@/lib/sanity";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const imgSrc = post.coverImage ? urlFor(post.coverImage).width(1200).height(600).url() : null;
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-primary text-sm font-medium mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>

        {post.category && (
          <span className="inline-block bg-primary text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
        )}

        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>

        <div className="flex items-center gap-5 text-sm text-gray-400 mb-8">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" /> {post.author ?? "C. Sivaprakash"}
          </span>
          {date && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {date}
            </span>
          )}
        </div>

        {imgSrc && (
          <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-gray-100 mb-10">
            <Image
              src={imgSrc}
              alt={(post.coverImage as { alt?: string })?.alt ?? post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium border-l-4 border-primary pl-5">
            {post.excerpt}
          </p>
        )}

        {post.body && (
          <div className="prose prose-lg prose-primary max-w-none">
            <PortableText
              value={post.body as Parameters<typeof PortableText>[0]["value"]}
              components={{
                block: {
                  h2: ({ children }: { children?: React.ReactNode }) => (
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
                  ),
                  h3: ({ children }: { children?: React.ReactNode }) => (
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
                  ),
                  blockquote: ({ children }: { children?: React.ReactNode }) => (
                    <blockquote className="border-l-4 border-primary pl-5 italic text-gray-600 my-6">
                      {children}
                    </blockquote>
                  ),
                  normal: ({ children }: { children?: React.ReactNode }) => (
                    <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
                  ),
                },
              }}
            />
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Want personalised advice?
          </h3>
          <p className="text-gray-600 text-sm mb-5">
            Book a free consultation with C. Sivaprakash to discuss your insurance needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Book free consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
