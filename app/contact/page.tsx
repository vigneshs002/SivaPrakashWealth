import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation in Chennai",
  description:
    "Reach Sivaprakash Wealth for a free insurance consultation. Call or WhatsApp +91 98841 10537, email licsivaprakash.98@gmail.com, or use the contact form.",
  openGraph: {
    title: "Contact Sivaprakash Wealth — Free Insurance Consultation",
    description:
      "Book a free consultation today. Call, WhatsApp, or email — we're based in Chennai and happy to help.",
    images: [{ url: "https://sivaprakashwealth.com/img/contact-img.png" }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
