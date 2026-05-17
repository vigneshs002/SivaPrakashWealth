import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sivaprakash Wealth | LIC & Insurance Consultant Chennai",
    template: "%s | Sivaprakash Wealth",
  },
  description:
    "Sivaprakash Wealth — LIC and general insurance consulting in Chennai. 28+ years of experience. Free consultation: +91 98841 10537.",
  keywords: [
    "LIC insurance consultant Chennai",
    "life insurance advisor",
    "general insurance",
    "financial planning Chennai",
    "health insurance Chennai",
  ],
  openGraph: {
    type: "website",
    siteName: "Sivaprakash Wealth",
    title: "Sivaprakash Wealth | LIC & Insurance Consultant Chennai",
    description:
      "28+ years of LIC and general insurance consulting in Chennai. Free consultation: +91 98841 10537.",
    url: "https://sivaprakashwealth.in",
    images: [{ url: "https://sivaprakashwealth.in/img/carousel-2.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/img/favicon.png" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
