import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Insurance Services — Life, Health & Corporate Plans",
  description:
    "LIC life insurance, health insurance, child and retirement planning, and free policy health checks in Chennai. Expert advice from Sivaprakash Wealth.",
  openGraph: {
    title: "Insurance Services — Sivaprakash Wealth Chennai",
    description:
      "Life insurance, health plans, corporate group cover, and retirement planning — all under one roof in Chennai.",
    images: [{ url: "https://sivaprakashwealth.in/img/blog-1.png" }],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
