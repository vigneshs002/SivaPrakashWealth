"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building2, ShieldCheck, Heart, FileText } from "lucide-react";

const services = [
  {
    icon: Building2,
    img: "/img/blog-1.png",
    title: "Corporate insurance consulting",
    body: "Group health insurance, employee benefit plans, and business risk management guidance for SMEs and institutions.",
    href: "/services",
    cta: "View services",
  },
  {
    icon: ShieldCheck,
    img: "/img/blog-2.png",
    title: "LIC life insurance",
    body: "Term, savings-linked, pension, and annuity-style solutions through LIC — aligned to income, dependents, and retirement goals.",
    href: "/services",
    cta: "View services",
  },
  {
    icon: Heart,
    img: "/img/blog-3.png",
    title: "Health insurance",
    body: "Individual and family health covers plus corporate group mediclaim — sum insured, networks, and add-ons explained clearly.",
    href: "/services",
    cta: "View services",
  },
  {
    icon: FileText,
    img: "/img/blog-4.png",
    title: "Policy sales & claim support",
    body: "Choosing the right policy, documentation, revival queries, maturity processing, and assistance with death or health claims.",
    href: "/contact",
    cta: "Schedule consultation",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Our Services
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Corporate, individual &amp; advisory
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From group health for your employees to personal life and health plans, Sivaprakash
            Wealth helps you choose cover that matches your stage of life or business — with
            ongoing support for servicing and claims.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 right-0 m-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{s.body}</p>
                  <Link
                    href={s.href}
                    className="self-start bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    {s.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Schedule a free consultation today
          </Link>
        </div>
      </div>
    </section>
  );
}
