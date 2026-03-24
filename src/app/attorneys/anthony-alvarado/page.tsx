"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anthony R. Alvarado",
  jobTitle: "Attorney",
  worksFor: {
    "@type": "LegalService",
    name: "Nixon Jach Hubbard",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14241 Dallas Parkway, Suite 575",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75254",
    },
  },
  telephone: "(972) 503-7000",
  email: "aalvarado@njhlaw.com",
  knowsAbout: [
    "Business Litigation",
    "Corporate Transactions",
    "Entity Formation",
  ],
};

export default function AnthonyAlvaradoPage() {
  return (
    <>
      <Script
        id="person-schema-alvarado"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />

      {/* HEADER — split dark/light */}
      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2">
            {/* Dark side — photo */}
            <FadeIn>
              <div className="flex items-end py-16 lg:py-28">
                <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-lg bg-navy-800">
                  <span className="font-heading text-5xl font-bold text-white/60">AA</span>
                </div>
              </div>
            </FadeIn>
            {/* Info side */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col justify-center py-16 lg:py-28 lg:pl-12">
                <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Anthony R. Alvarado
                </h1>
                <p className="mt-1 text-lg text-white">Attorney</p>
                <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-sm text-charcoal-300">
                  <a href="tel:9725037000" className="hover:text-white">
                    (972) 503-7000
                  </a>
                  <a
                    href="mailto:aalvarado@njhlaw.com"
                    className="hover:text-white"
                  >
                    aalvarado@njhlaw.com
                  </a>
                </div>
                <div className="mt-6 flex gap-3">
                  <Link
                    href="/practice-areas/business-litigation"
                    className="rounded-full bg-navy-800 px-4 py-1.5 text-xs font-medium text-charcoal-200 hover:bg-navy-700"
                  >
                    Business Litigation
                  </Link>
                  <Link
                    href="/practice-areas/corporate-transactions"
                    className="rounded-full bg-navy-800 px-4 py-1.5 text-xs font-medium text-charcoal-200 hover:bg-navy-700"
                  >
                    Corporate Transactions
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold text-navy-900">
              Business litigation and corporate transactions in Dallas
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
              Anthony Alvarado represents businesses in commercial disputes
              and corporate matters across the DFW metroplex. His litigation
              practice covers breach of contract claims, partnership disputes,
              non-compete enforcement, and injunctive relief under the Texas
              Civil Practice &amp; Remedies Code.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              His corporate work includes LLC and corporation formation under
              the Texas Business Organizations Code, operating agreement
              drafting, shareholder agreements, and commercial contract
              negotiation. Anthony works with the firm&apos;s partners on
              complex multi-party litigation and entity structuring for
              construction and real estate companies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Speak with Anthony directly
                </h2>
                <p className="mt-1 text-sm text-charcoal-300">
                  (972) 503-7000 &middot; aalvarado@njhlaw.com
                </p>
              </div>
              <Link
                href="/contact"
                className="rounded bg-gold-400 px-6 py-3 text-sm font-semibold text-white hover:bg-gold-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
