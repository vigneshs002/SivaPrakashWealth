import Link from "next/link";
import { Shield, MapPin, Mail, Phone } from "lucide-react";

const usefulLinks = [
  { href: "/about", label: "About Us" },
  { href: "/#features", label: "Features" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="xl:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Shield className="w-6 h-6 text-primary" />
              Sivaprakash Wealth
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Sivaprakash Wealth — LIC and general insurance consulting in Chennai.
              28+ years of experience helping families and businesses with life cover,
              health plans, and claims support.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919884110537"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:licsivaprakash.98@gmail.com"
                title="Email"
                className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a
                href="tel:+919884110537"
                title="Phone"
                className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-primary">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Stay updated with the latest insurance tips and offers.
            </p>
            <form className="flex gap-2 mb-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919884110537"
                className="w-11 h-11 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
              <div className="text-sm">
                <div className="text-slate-400">Call or WhatsApp</div>
                <a href="tel:+919884110537" className="text-white font-semibold hover:text-primary transition-colors">
                  +91 98841 10537
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info row */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h5 className="text-white font-medium mb-1">Address</h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                Plot No.4, Balamurugan Road, Teacher&apos;s Modern Town,<br />
                Vadagarai, Chennai 600052
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h5 className="text-white font-medium mb-1">Email</h5>
              <a
                href="mailto:licsivaprakash.98@gmail.com"
                className="text-slate-400 text-sm hover:text-primary transition-colors underline"
              >
                licsivaprakash.98@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h5 className="text-white font-medium mb-1">Telephone</h5>
              <a
                href="tel:+919884110537"
                className="text-slate-400 text-sm hover:text-primary transition-colors underline"
              >
                +91 98841 10537
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-950 py-4 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Sivaprakash Wealth. All rights reserved.
      </div>
    </footer>
  );
}
