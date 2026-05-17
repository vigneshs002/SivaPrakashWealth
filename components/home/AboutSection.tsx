"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import StatsCounter from "./StatsCounter";

const highlights = [
  { label: "Experience:", value: "28+ years in LIC and general insurance consultancy" },
  { label: "Personalized service:", value: "Recommendations tailored to your family or corporate requirements" },
  { label: "Trust:", value: "Straightforward guidance and support through policy servicing and claims" },
  { label: "IRDAI-licensed practice:", value: "Insurance offered through approved processes and insurers" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Text card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 h-full flex flex-col"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Who we are
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Sivaprakash Wealth
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              I am <strong>C. Sivaprakash</strong>, based in Chennai. I began my journey as an
              LIC advisor in <strong>1998</strong> and grew my practice with the support of my
              Development Officer and senior colleagues. Over the years I have served{" "}
              <strong>1,156+</strong> clients with life and general insurance solutions, and today
              I work independently under <strong>Sivaprakash Wealth</strong> so I can give you
              focused time, end-to-end servicing, and continuity at claim and maturity stages.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Our mission:</strong> To help individuals and businesses make sound insurance
              decisions — aligning life cover, health cover, and savings or pension plans with what
              you actually need and can sustain.
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
              className="self-start bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-colors mt-auto"
            >
              Book a free consultation
            </Link>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/img/about-1.png"
                alt="Sivaprakash Wealth office"
                fill
                className="object-cover"
              />
            </div>
            <StatsCounter />
            <p className="text-xs text-gray-400 text-center">
              Total sum assured and cumulative premium are specific to your portfolio — we can
              walk through these figures when we review your policies together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
