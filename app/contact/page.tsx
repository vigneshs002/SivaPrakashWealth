"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/shared/ContactForm";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Plot No.4, Balamurugan Road, Teacher's Modern Town, Vadagarai, Chennai 600052",
    href: undefined,
  },
  {
    icon: Mail,
    title: "Mail Us",
    content: "licsivaprakash.98@gmail.com",
    href: "mailto:licsivaprakash.98@gmail.com",
  },
  {
    icon: Phone,
    title: "Telephone",
    content: "+91 98841 10537",
    href: "tel:+919884110537",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: "WhatsApp",
    content: "+91 98841 10537",
    href: "https://wa.me/919884110537",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section id="consult" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Sivaprakash Wealth
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Plan today for a better tomorrow
            </h2>
            <p className="text-gray-500 text-sm">
              Phone:{" "}
              <a href="tel:+919884110537" className="text-primary hover:underline">
                +91 98841 10537
              </a>{" "}
              · Email:{" "}
              <a href="mailto:licsivaprakash.98@gmail.com" className="text-primary hover:underline">
                licsivaprakash.98@gmail.com
              </a>{" "}
              · WhatsApp:{" "}
              <a href="https://wa.me/919884110537" className="text-primary hover:underline">
                +91 98841 10537
              </a>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-80 xl:h-full min-h-[320px] rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image
                src="/img/contact-img.png"
                alt="Contact Sivaprakash Wealth"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-2xl p-8"
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-3 shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{c.title}</h4>
                  {c.href ? (
                    <a href={c.href} className="text-gray-600 text-sm hover:text-primary transition-colors">
                      {c.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed">{c.content}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-sm"
          >
            <iframe
              className="w-full"
              style={{ height: 400 }}
              src="https://maps.google.com/maps?q=Plot+No.4+Balamurugan+Road+Teacher%27s+Modern+Town+Vadagarai+Chennai+600052&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sivaprakash Wealth location"
            />
          </motion.div>
        </div>
      </section>

      {/* Google My Business CTA */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h5 className="font-semibold text-gray-900 mb-1">Find us on Google</h5>
              <p className="text-gray-500 text-sm">
                Search &ldquo;Sivaprakash Wealth&rdquo; on Google Maps to see our location, hours,
                and client reviews.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href="https://www.google.com/maps/search/Sivaprakash+Wealth+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-primary text-primary font-medium px-4 py-2 rounded-full hover:bg-primary/5 transition-colors"
              >
                Open in Maps
              </a>
              <a
                href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-yellow-400 text-yellow-600 font-medium px-4 py-2 rounded-full hover:bg-yellow-50 transition-colors"
              >
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
