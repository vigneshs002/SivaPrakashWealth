import type { Metadata } from "next";
import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "FAQs — Insurance Questions Answered in Plain Language",
  description:
    "Frequently asked questions about LIC policies, health insurance, tax benefits under 80C and 80D, claims, and corporate plans — answered by Sivaprakash Wealth.",
  openGraph: {
    title: "Insurance FAQs — Sivaprakash Wealth Chennai",
    description:
      "Common questions about LIC, health insurance, premiums, tax savings, and claim processes answered clearly.",
    images: [{ url: "https://sivaprakashwealth.com/img/carousel-2.png" }],
  },
};

export default function FaqPage() {
  return <FaqContent />;
}
