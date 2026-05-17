import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us — 28+ Years of LIC Experience in Chennai",
  description:
    "Meet C. Sivaprakash, Chennai's trusted LIC advisor since 1998. 28+ years helping families and businesses with life cover, health insurance, and claim support.",
  openGraph: {
    title: "About Sivaprakash Wealth — Trusted LIC Advisor in Chennai",
    description:
      "28+ years of insurance advisory experience in Chennai. Personalised LIC and health insurance guidance for individuals and businesses.",
    images: [{ url: "https://sivaprakashwealth.in/img/about-1.png" }],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
