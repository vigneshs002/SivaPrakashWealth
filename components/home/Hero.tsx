"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

interface SlideCta {
  href: string;
  label: string;
  icon: string;
  outline?: boolean;
  dark?: boolean;
}

interface Slide {
  id: number;
  tag: string;
  title: string;
  body: string;
  sub: string;
  img: string;
  imgAlt: string;
  ctas: SlideCta[];
  imgLeft: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    tag: "Sivaprakash Wealth",
    title: "LIC & General Insurance Consulting You Can Rely On",
    body: "With 28+ years of experience I have worked in insurance consultancy across LIC (life insurance) and general insurance, helping families and businesses choose cover that fits their goals. At Sivaprakash Wealth my aim is simple: the best possible advice for your situation — clear options, honest comparisons, and support when you need to claim or renew.",
    sub: "Contact us today for a free consultation. Call +91 98841 10537 or write to licsivaprakash.98@gmail.com",
    img: "/img/carousel-1.png",
    imgAlt: "Insurance consulting for families and businesses in Chennai",
    ctas: [
      { href: "/contact", label: "Get your free consultation", icon: "phone" },
      { href: "https://wa.me/919884110537", label: "WhatsApp us", icon: "whatsapp", outline: true },
    ],
    imgLeft: false,
  },
  {
    id: 2,
    tag: "Plan today for a better tomorrow",
    title: "Life, Health & Business Cover — Reviewed With Care",
    body: "Whether you need family protection, child education or marriage planning, retirement income, group health for your team, or help with a claim — we review your existing LIC and health policies, suggest practical improvements, and explain tax-related angles (such as 80C / 80D) in plain language.",
    sub: "",
    img: "/img/carousel-2.png",
    imgAlt: "Insurance planning Chennai",
    ctas: [
      { href: "/contact", label: "Schedule a free consultation", icon: "calendar" },
      { href: "tel:+919884110537", label: "Call now: +91 98841 10537", icon: "phone", dark: true },
    ],
    imgLeft: true,
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-none w-full bg-primary text-white"
          >
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  slide.imgLeft ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Text */}
                <div className={slide.imgLeft ? "lg:col-start-2" : ""}>
                  <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
                    {slide.tag}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                    {slide.title}
                  </h1>
                  <p className="text-blue-100 text-lg leading-relaxed mb-4">{slide.body}</p>
                  {slide.sub && (
                    <p className="text-blue-200 text-sm mb-6">
                      <strong className="text-white">Contact us today for a free consultation.</strong>{" "}
                      Call{" "}
                      <a href="tel:+919884110537" className="underline text-white hover:text-blue-100">
                        +91 98841 10537
                      </a>{" "}
                      or write to{" "}
                      <a href="mailto:licsivaprakash.98@gmail.com" className="underline text-white hover:text-blue-100">
                        licsivaprakash.98@gmail.com
                      </a>
                    </p>
                  )}
                  <div className="flex flex-wrap gap-3">
                    {slide.ctas.map((cta) => (
                      <Link
                        key={cta.label}
                        href={cta.href}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                          cta.dark
                            ? "bg-gray-900 text-white hover:bg-gray-800"
                            : cta.outline
                            ? "bg-white/10 border border-white text-white hover:bg-white/20"
                            : "bg-white text-primary hover:bg-blue-50"
                        }`}
                      >
                        {cta.icon === "phone" && <Phone className="w-4 h-4" />}
                        {cta.icon === "calendar" && <Calendar className="w-4 h-4" />}
                        {cta.icon === "whatsapp" && (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        )}
                        {cta.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${slide.imgLeft ? "lg:col-start-1" : ""}`}>
                  <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden bg-white/10">
                    <Image
                      src={slide.img}
                      alt={slide.imgAlt}
                      fill
                      className="object-cover"
                      priority={slide.id === 1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 py-4 bg-primary">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === selected ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
