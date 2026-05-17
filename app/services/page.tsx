import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

const PROVIDER = { "@id": "https://sivaprakashwealth.com/#business" };

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Insurance Services — Sivaprakash Wealth",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "LIC Life Insurance Advisory",
        description: "Protection, savings, and pension-style plans through LIC for individuals and families.",
        provider: PROVIDER,
        areaServed: { "@type": "City", name: "Chennai" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Health Insurance Planning",
        description: "Individual and family floater health insurance plans with expert guidance on coverage and renewals.",
        provider: PROVIDER,
        areaServed: { "@type": "City", name: "Chennai" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Corporate Group Health Insurance",
        description: "Group health insurance design, renewal comparisons, and employee benefit planning for businesses.",
        provider: PROVIDER,
        areaServed: { "@type": "City", name: "Chennai" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Child & Retirement Planning",
        description: "Long-term financial planning for child education, marriage, and retirement income through LIC plans.",
        provider: PROVIDER,
        areaServed: { "@type": "City", name: "Chennai" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Free Policy Health Check",
        description: "Review existing LIC and health policies, identify coverage gaps, and optimise under 80C/80D.",
        provider: PROVIDER,
        areaServed: { "@type": "City", name: "Chennai" },
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "LIC & Insurance Services Chennai — Life, Health, Corporate",
  description:
    "LIC life insurance, health insurance, child and retirement planning, and free policy health checks in Chennai. Expert advice from Sivaprakash Wealth.",
  keywords: [
    "LIC life insurance Chennai",
    "health insurance Chennai",
    "corporate group health insurance",
    "child education plan Chennai",
    "retirement planning Chennai",
    "term insurance Chennai",
    "80C tax saving insurance",
    "80D health insurance deduction",
    "free policy review Chennai",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Insurance Services — Sivaprakash Wealth Chennai",
    description:
      "Life insurance, health plans, corporate group cover, and retirement planning — all under one roof in Chennai.",
    images: [{ url: "https://sivaprakashwealth.com/img/blog-1.png" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
