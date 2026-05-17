import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import OurPromise from "@/components/home/OurPromise";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import PlansGuide from "@/components/home/PlansGuide";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sivaprakash Wealth | LIC & Insurance Consultant Chennai",
  description:
    "28+ years of LIC and general insurance consulting in Chennai. Free consultation: +91 98841 10537. Expert advice for families and businesses.",
  keywords: [
    "LIC agent Chennai",
    "LIC insurance consultant Chennai",
    "health insurance advisor Chennai",
    "life insurance Chennai",
    "general insurance Chennai",
    "free insurance consultation Chennai",
    "financial planning Chennai",
  ],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurPromise />
      <WhyChooseUs />
      <AboutSection />
      <ServicesSection />
      <PlansGuide />

      {/* FAQs CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Have questions?
          </p>
          <p className="text-gray-600 mb-6">
            Answers to common insurance and consultation questions are on our FAQs page.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Read FAQs
          </Link>
        </div>
      </section>

      <BlogPreview />
      <TeamSection />
      <Testimonials />
    </>
  );
}
