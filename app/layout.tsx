import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
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
  twitter: {
    card: "summary_large_image",
    title: "Sivaprakash Wealth | LIC & Insurance Consultant Chennai",
    description:
      "28+ years of LIC and general insurance consulting in Chennai. Free consultation: +91 98841 10537.",
    images: ["https://sivaprakashwealth.in/img/carousel-2.png"],
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      "@id": "https://sivaprakashwealth.in/#business",
      name: "Sivaprakash Wealth",
      description:
        "LIC and general insurance consulting in Chennai. 28+ years of experience helping families and businesses with life cover, health plans, and claims support.",
      url: "https://sivaprakashwealth.in",
      telephone: "+919884110537",
      email: "licsivaprakash.98@gmail.com",
      founder: { "@type": "Person", name: "C. Sivaprakash" },
      foundingDate: "1998",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No.4, Balamurugan Road, Teacher's Modern Town, Vadagarai",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600052",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.0827,
        longitude: 80.2707,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "Free consultation",
      areaServed: { "@type": "City", name: "Chennai" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Insurance Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "LIC Life Insurance Advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Health Insurance Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Group Insurance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Child & Retirement Planning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Policy Health Check" } },
        ],
      },
      sameAs: ["https://wa.me/919884110537"],
      image: "https://sivaprakashwealth.in/img/carousel-1.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://sivaprakashwealth.in/#website",
      url: "https://sivaprakashwealth.in",
      name: "Sivaprakash Wealth",
      description: "LIC and general insurance consulting in Chennai",
      publisher: { "@id": "https://sivaprakashwealth.in/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://sivaprakashwealth.in/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/img/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {gaId && gaId !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
