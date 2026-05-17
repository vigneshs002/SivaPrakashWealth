import type { Metadata } from "next";
import FaqContent from "./FaqContent";
import { faqs } from "./faqData";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const metadata: Metadata = {
  title: "LIC & Insurance FAQs — Sivaprakash Wealth Chennai",
  description:
    "Frequently asked questions about LIC policies, health insurance, tax benefits under 80C and 80D, claims, and corporate plans — answered by Sivaprakash Wealth.",
  keywords: [
    "LIC insurance FAQ",
    "health insurance questions India",
    "80C 80D tax benefits",
    "LIC claim process",
    "insurance policy review",
    "corporate health insurance FAQ",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Insurance FAQs — Sivaprakash Wealth Chennai",
    description:
      "Common questions about LIC, health insurance, premiums, tax savings, and claim processes answered clearly.",
    images: [{ url: "https://sivaprakashwealth.com/img/carousel-2.png" }],
  },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqContent />
    </>
  );
}
