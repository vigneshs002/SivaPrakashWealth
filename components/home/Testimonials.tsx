"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lakshmi R.",
    role: "Homemaker, Anna Nagar",
    img: "/img/testimonial-1.jpg",
    text: "Mr Sivaprakash explained our LIC policies in simple Tamil and English, compared two options without pressure, and helped us increase our term cover within budget. Maturity paperwork was also handled smoothly.",
  },
  {
    name: "Karthik S.",
    role: "Small business owner, Chennai",
    img: "/img/testimonial-2.jpg",
    text: "For our team he arranged a group health policy that actually matched our headcount and budget. Claims follow-up was proactive — he coordinated with the TPA until the hospital bill was settled.",
  },
  {
    name: "Dr. Priya M.",
    role: "Physician, Chennai",
    img: "/img/testimonial-3.jpg",
    text: "Professional, punctual, and ethical. He reviewed my old endowment plans, showed what was working and what was not, and suggested a cleaner mix for retirement without upselling products I did not need.",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            What our customers are saying
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Clients value clear communication, timely servicing, and calm guidance when claims
            arise. Here is what a few of them have shared.
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-none w-full px-2">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm max-w-3xl mx-auto">
                  <div className="grid grid-cols-3 sm:grid-cols-4">
                    <div className="relative h-full min-h-[160px] bg-gray-100">
                      <Image
                        src={t.img}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-3 p-6 flex flex-col justify-center">
                      <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                      <p className="text-gray-500 text-sm mb-3">{t.role}</p>
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
