import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MobileCTA from "@/components/MobileCTA";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dallas Business Law Firm | Nixon Jach Hubbard | Construction & Real Estate Attorneys",
  description:
    "Dallas business law firm with 30+ years in construction law, commercial real estate, business litigation, and corporate transactions. Recognized by Chambers USA and Best Lawyers.",
  metadataBase: new URL("https://njh-law.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nixon Jach Hubbard",
    title: "Dallas Business Law Firm | Nixon Jach Hubbard",
    description:
      "Construction law, commercial real estate, business litigation, and corporate transactions in Dallas, Texas.",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nixon Jach Hubbard",
  url: "https://njh-law.com",
  telephone: "(972) 503-7000",
  faxNumber: "(972) 503-7001",
  email: "info@njh-law.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14241 Dallas Parkway, Suite 575",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75254",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9345,
    longitude: -96.8208,
  },
  areaServed: [
    {
      "@type": "State",
      name: "Texas",
    },
    {
      "@type": "City",
      name: "Dallas",
    },
  ],
  knowsAbout: [
    "Construction Law",
    "Commercial Real Estate",
    "Business Litigation",
    "Corporate Transactions",
    "Mechanic\u2019s Liens",
    "Texas Property Code",
  ],
  sameAs: [
    "https://www.linkedin.com/company/nixon-jach-hubbard",
    "https://www.google.com/maps/place/14241+Dallas+Pkwy+%23575,+Dallas,+TX+75254",
  ],
  openingHours: "Mo-Fr 08:30-17:30",
  priceRange: "$$",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <MobileCTA />
      </body>
    </html>
  );
}
