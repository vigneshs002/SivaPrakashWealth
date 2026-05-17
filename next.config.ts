import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // #region agent log H3 - redirect old static-HTML .html URLs to Next.js routes
  async redirects() {
    return [
      { source: "/index.html",       destination: "/",        permanent: true },
      { source: "/about.html",       destination: "/about",   permanent: true },
      { source: "/service.html",     destination: "/services",permanent: true },
      { source: "/FAQ.html",         destination: "/faq",     permanent: true },
      { source: "/blog.html",        destination: "/blog",    permanent: true },
      { source: "/contact.html",     destination: "/contact", permanent: true },
    ];
  },
  // #endregion
};

export default nextConfig;
