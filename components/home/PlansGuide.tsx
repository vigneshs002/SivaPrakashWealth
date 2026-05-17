"use client";

import { motion } from "framer-motion";

const ageGroups = [
  { age: "20–30 years", desc: "Strong family protection (term-heavy mix) with disciplined savings where budget allows." },
  { age: "30–40 years", desc: "Child education and marriage goals, alongside pension / retirement accumulation." },
  { age: "40–50 years", desc: "Wealth creation and guaranteed-benefit style plans, balanced with existing cover." },
  { age: "50+ years", desc: "Single-premium or limited-pay options where liquidity and health criteria fit." },
];

const incomeGroups = [
  { income: "Below ₹5 lakh", desc: "Long-term endowment-style savings combined with essential term insurance." },
  { income: "₹5–10 lakh", desc: "Examples discussed include Jeevan Labh, Jeevan Umang, Bima Shree — subject to eligibility." },
  { income: "₹10–20 lakh", desc: "Shorter premium-payment designs such as Jeevan Utsav when they match cash flow." },
  { income: "Above ₹20 lakh", desc: "Bima Shree, Jeevan Lakshya, and other high sum assured structures after risk review." },
];

const specialCards = [
  { title: "Retirement planning", desc: "Jeevan Akshay, Jeevan Umang, and Jeevan Shanti are examples we compare for annuity-style or long-term income needs." },
  { title: "Tax-saving angle (80C)", desc: "Endowment and whole-life plans with compliant premium levels may support 80C within statutory limits; we map this clearly at proposal stage." },
  { title: "HNWIs & business owners", desc: "Higher sum assured through Jeevan Labh, Jeevan Anand, Bima Shree; business owners may also consider shorter-pay or single-premium routes such as Jeevan Utsav when appropriate." },
];

export default function PlansGuide() {
  return (
    <section id="plans-guide" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Best insurance plans — overview
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How we think about LIC options
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            The names below are <strong>examples only</strong>. Product availability,
            underwriting, and suitability depend on your age, income, health disclosures, and
            insurer rules at the time of application — we finalise recommendations only after a
            proper consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* By age */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <h4 className="text-primary font-semibold mb-4">By age group</h4>
            <ul className="space-y-3">
              {ageGroups.map((g, i) => (
                <li key={i} className="text-sm text-gray-700">
                  <strong className="text-gray-900">{g.age}:</strong> {g.desc}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* By income */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-6"
          >
            <h4 className="text-primary font-semibold mb-4">By annual income (illustrative)</h4>
            <ul className="space-y-3">
              {incomeGroups.map((g, i) => (
                <li key={i} className="text-sm text-gray-700">
                  <strong className="text-gray-900">{g.income}:</strong> {g.desc}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {specialCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gray-200 rounded-xl p-5"
            >
              <h5 className="text-primary font-semibold text-sm mb-2">{c.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary/10 rounded-2xl p-6"
        >
          <h5 className="text-gray-900 font-semibold mb-2">Child education &amp; future planning</h5>
          <p className="text-gray-600 text-sm leading-relaxed">
            Amrit Baal and Jeevan Tarun for education milestones; Jeevan Anand and Jeevan Umang
            for broader family security — timelines and premiums are aligned to your real goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
