import Link from "next/link";

// #region agent log H3 - which URLs trigger Next.js 404?
async function logNotFound() {
  // This runs server-side; log to console for Vercel function log visibility
  const info = { message: "Next.js not-found rendered", timestamp: Date.now(), hypothesisId: "H3" };
  console.log("[debug-5566ee] not-found page hit:", JSON.stringify(info));
}
// #endregion

export default async function NotFoundPage() {
  await logNotFound();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Page not found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved or the URL might be
        incorrect.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Go to Home
        </Link>
        <Link
          href="/contact"
          className="border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
