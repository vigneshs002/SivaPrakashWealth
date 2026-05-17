"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, IndianRupee, Target, Headphones } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Deep experience",
    body: "28+ years in LIC and general insurance consultancy — so recommendations reflect what works in real life, not brochures alone.",
    link: { href: "/about", label: "About us" },
  },
  {
    icon: IndianRupee,
    title: "Personalized service",
    body: "Plans are suggested after understanding your income, dependents, goals, and risk appetite — not one-size-fits-all.",
    link: { href: "/services", label: "Services" },
  },
  {
    icon: Target,
    title: "Trust & transparency",
    body: "You get straight answers on premiums, benefits, and limitations — so you can decide with confidence.",
    link: { href: "/#testimonials", label: "Testimonials" },
  },
  {
    icon: Headphones,
    title: "IRDAI-licensed distribution",
    body: "Insurance is offered through proper licensing and insurer processes; documentation and servicing are handled diligently.",
    link: { href: "/contact", label: "Contact" },
  },
];

export default function WhyChooseUs() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Why choose us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Insurance guidance rooted in experience
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Sivaprakash Wealth is built on long-term relationships in Chennai — clear explanations,
            suitable product choices, and support at claim time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{f.body}</p>
                <Link
                  href={f.link.href}
                  className="self-start bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                >
                  {f.link.label}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
