import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "C. Sivaprakash — LIC Advisor in Chennai Since 1998",
  description:
    "Meet C. Sivaprakash, Chennai's trusted LIC advisor since 1998. 28+ years helping families and businesses with life cover, health insurance, and claim support.",
  keywords: [
    "LIC advisor Chennai",
    "C Sivaprakash insurance",
    "LIC agent since 1998",
    "experienced insurance advisor Chennai",
    "Sivaprakash Wealth",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sivaprakash Wealth — Trusted LIC Advisor in Chennai",
    description:
      "28+ years of insurance advisory experience in Chennai. Personalised LIC and health insurance guidance for individuals and businesses.",
    images: [{ url: "https://sivaprakashwealth.com/img/about-1.png" }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
