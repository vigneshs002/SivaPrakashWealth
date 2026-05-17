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
              {["Facebook", "YouTube", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  title={`${s} — link coming soon`}
                  className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center text-xs text-slate-400 hover:border-primary hover:text-primary transition-colors"
                >
                  {s[0]}
                </a>
              ))}
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
