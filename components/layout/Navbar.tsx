"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Shield, Phone, MessageCircle, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="hidden lg:block bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/contact" className="flex items-center gap-1 hover:text-primary transition-colors">
              <span className="text-primary">📍</span> Chennai
            </Link>
            <a href="mailto:licsivaprakash.98@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <span className="text-primary">✉</span> licsivaprakash.98@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Contact:</span>
            <a href="https://wa.me/919884110537" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-70 transition-opacity text-xs font-medium">WhatsApp</a>
            <span className="text-slate-300">·</span>
            <a href="mailto:licsivaprakash.98@gmail.com" className="text-primary hover:opacity-70 transition-opacity text-xs font-medium">Email</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
              <Shield className="w-6 h-6" />
              <span>Sivaprakash Wealth</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    pathname === href
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 bg-primary text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                Free consultation
              </Link>
            </div>

            {/* Phone CTA (xl+) */}
            <div className="hidden xl:flex items-center gap-3 ml-4">
              <a
                href="tel:+919884110537"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors relative"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
                <MessageCircle className="w-3 h-3 absolute top-1.5 right-1.5 text-yellow-500" />
              </a>
              <div className="text-sm">
                <div className="text-gray-500 text-xs">Call or WhatsApp</div>
                <a href="tel:+919884110537" className="font-semibold text-gray-800 hover:text-primary transition-colors">
                  +91 98841 10537
                </a>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    pathname === href
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-primary text-white text-sm font-medium px-4 py-2.5 rounded-full text-center hover:bg-primary/90 transition-colors"
              >
                Free consultation
              </Link>
              <a
                href="tel:+919884110537"
                className="text-center text-sm font-semibold text-primary py-2"
              >
                📞 +91 98841 10537
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
