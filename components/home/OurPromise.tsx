"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Hands-on claims & maturity support",
    body: "Experience includes assisting with death claim settlements and a large number of maturity payouts — so you get guidance on paperwork and follow-up, not just a policy number.",
  },
  {
    title: "LIC + general insurance",
    body: "Life and annuity planning through LIC, together with general insurance support such as health and business-related covers — structured around your budget and priorities.",
  },
];

export default function OurPromise() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Our Promise
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              In a financial world full of noise, we offer clarity.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Sivaprakash Wealth, every recommendation comes with responsibility.
              Every policy comes with service. Every client becomes a long-term relationship.
            </p>
            <p className="italic text-gray-700 border-l-4 border-primary pl-4">
              &ldquo;We don&apos;t just sell insurance. We stand with you when it matters most.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {features.map((f, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-xl hover:border-primary/40 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
