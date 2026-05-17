"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import StatsCounter from "@/components/home/StatsCounter";
import type { Metadata } from "next";

const highlights = [
  { label: "Experience:", value: "28+ years advising on LIC and general insurance products" },
  { label: "Personalized service:", value: "Plans tailored to your family stage or corporate requirements" },
  { label: "Trust:", value: "Clear explanations; support for maturity and death claims from real field experience" },
  { label: "IRDAI-licensed distribution:", value: "All business conducted through approved insurer procedures" },
];

const features = [
  {
    title: "Longstanding track record",
    body: "28+ years in the industry with a track record of policy servicing and real claim-handling experience.",
    link: { href: "/about", label: "About" },
  },
  {
    title: "Goal-based planning",
    body: "Education, marriage, retirement, or tax efficiency — we map LIC and health options to dated goals and cash flows.",
    link: { href: "/services", label: "Services" },
  },
  {
    title: "Transparent comparisons",
    body: "We explain premiums, benefits, and limitations in writing where helpful — so you can compare before you commit.",
    link: { href: "/services", label: "Services" },
  },
  {
    title: "Responsive support",
    body: "Reachable by phone or WhatsApp for queries, renewal reminders, and claim documentation assistance.",
    link: { href: "/contact", label: "Contact" },
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* About section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 flex flex-col"
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Who we are
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                28+ years in the insurance industry
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                I am <strong>C. Sivaprakash</strong> from Chennai. I joined{" "}
                <strong>LIC as an advisor in 1998</strong> and built my practice with the guidance
                of my Development Officer and senior colleagues. Today, through{" "}
                <strong>Sivaprakash Wealth</strong>, I work independently so clients get direct
                access, consistent follow-up, and advice across both{" "}
                <strong>LIC (life)</strong> and <strong>general insurance</strong> — including
                health and employee benefits.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>Our mission:</strong> To help individuals and businesses choose insurance
                and savings plans that match their goals, affordability, and risk — with honest
                comparisons and help at servicing and claim time.
              </p>
              <ul className="space-y-3 mb-8">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>{h.label}</strong> {h.value}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="self-start bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Contact us for a free consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-2xl p-8 flex flex-col gap-6"
            >
              <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-100">
                <Image src="/img/about-1.png" alt="C. Sivaprakash" fill className="object-cover" />
              </div>
              <StatsCounter />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Our Features
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Why clients stay with Sivaprakash Wealth
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Straightforward LIC and general insurance guidance for Chennai families and
              businesses — from first quote to claim support.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3"
              >
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{f.body}</p>
                <Link
                  href={f.link.href}
                  className="self-start text-primary text-sm font-medium hover:underline"
                >
                  {f.link.label} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-3">Have questions before you call?</h3>
          <p className="text-blue-100 mb-6">
            Premiums, claims, tax benefits, and plan types are explained in plain language on our
            FAQs page.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/faq"
              className="bg-white text-primary font-medium px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Read FAQs
            </Link>
            <Link
              href="/#testimonials"
              className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Client stories
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Happy with our service?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Your review on Google helps other families in Chennai find honest insurance advice.
              It takes less than two minutes and makes a real difference — thank you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white font-medium px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors text-sm"
              >
                Leave a Google Review
              </a>
              <a
                href="https://www.google.com/maps/search/Sivaprakash+Wealth+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary text-primary font-medium px-5 py-2.5 rounded-full hover:bg-primary/5 transition-colors text-sm"
              >
                Find us on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
