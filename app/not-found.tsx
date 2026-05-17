import Link from "next/link";

export default function NotFoundPage() {
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
