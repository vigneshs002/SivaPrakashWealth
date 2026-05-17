"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, HeartPulse, Car, Search, Building2, User, BookOpen } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";

const mainServices = [
  {
    icon: Users,
    img: "/img/blog-1.png",
    title: "Life Insurance",
    body: "Helping clients choose the right LIC policies for financial security and retirement planning.",
  },
  {
    icon: HeartPulse,
    img: "/img/blog-2.png",
    title: "Health Insurance",
    body: "Comprehensive health insurance solutions including group plans and individual coverage.",
  },
  {
    icon: Car,
    img: "/img/blog-3.png",
    title: "Child & Retirement Planning",
    body: "Secure child education, marriage planning, and retirement income with plans that grow with your family's goals.",
  },
  {
    icon: Search,
    img: "/img/blog-4.png",
    title: "Free Policy Health Check",
    body: "Review your existing LIC and health policies, optimize coverage, and identify savings opportunities under 80C/80D.",
    cta: "Book review",
  },
];

const detailedServices = [
  {
    icon: Building2,
    title: "A. Corporate insurance consulting",
    items: [
      "Group health insurance design and renewal comparisons",
      "Employee benefit planning alongside HR and management",
      "Business risk management — health, liability, and related covers as needed",
    ],
  },
  {
    icon: User,
    title: "B. Individual insurance services",
    items: [
      "Life insurance — protection, savings, and pension routes through LIC",
      "Health insurance — individual / family floater selection",
      "Retirement planning — annuity-style and long-term income options reviewed for your age band",
    ],
  },
  {
    icon: BookOpen,
    title: "C. Policy sales & advisory",
    items: [
      "Helping you choose the right policy for each goal",
      "Assistance with claim intimation, forms, and insurer follow-up",
      "Free first consultation to review existing portfolios",
    ],
  },
];

export default function ServicesContent() {
  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

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
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Services Designed Around Your Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We provide life insurance planning, health coverage solutions, and long-term financial
              protection advice — including policy reviews for better coverage and tax benefits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {mainServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 right-0 m-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{s.body}</p>
                    <Link
                      href="/contact"
                      className="self-start bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      {s.cta ?? "Book consultation"}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Schedule a free consultation today
            </Link>
          </div>

          {/* Detailed categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detailedServices.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{d.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {d.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
