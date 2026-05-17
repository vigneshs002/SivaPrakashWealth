"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHeader from "@/components/shared/PageHeader";
import { faqs } from "./faqData";

export default function FaqContent() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Some Important FAQs
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Common Frequently Asked Questions
              </h2>
              <Accordion defaultValue={["item-0"]} className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full h-80 xl:h-[500px] rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image
                src="/img/carousel-2.png"
                alt="Insurance FAQ illustration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-blue-100 mb-6">
            Reach out for a free consultation — we&apos;re happy to walk through your specific
            situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
