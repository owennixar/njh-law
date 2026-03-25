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
  name: "Curtis Hubbard",
  jobTitle: "Partner",
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
  telephone: "(972) 503-7004",
  email: "chubbard@njh-law.com",
  knowsAbout: ["Business Litigation", "Commercial Transactions"],
};

export default function CurtisHubbardPage() {
  return (
    <>
      <Script
        id="person-schema-hubbard"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />

      {/* HEADER — centered, minimal */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/images/curtis_hubbard.avif"
                alt="Curtis Hubbard, Dallas business litigation attorney"
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-8 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Curtis Hubbard
            </h1>
            <p className="mt-1 text-lg text-white">Partner</p>
            <div className="mt-4 flex justify-center gap-6 text-sm text-charcoal-300">
              <a href="tel:9725037004" className="hover:text-white">
                (972) 503-7004
              </a>
              <a href="mailto:chubbard@njh-law.com" className="hover:text-white">
                chubbard@njh-law.com
              </a>
            </div>
            {/* Practice areas as tags */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                { href: "/practice-areas/business-litigation", label: "Business Litigation" },
                { href: "/practice-areas/corporate-transactions", label: "Corporate Transactions" },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="rounded-full border border-navy-600/30 bg-navy-900 px-4 py-1.5 text-xs font-medium text-charcoal-200 hover:bg-navy-800"
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OVERVIEW — full width narrative */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold text-navy-900">
              Business litigation and corporate counsel for Dallas companies
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
              Curtis Hubbard represents businesses in commercial disputes and
              corporate transactions across the DFW metroplex. His litigation
              practice focuses on breach of contract claims, partnership and
              shareholder disputes, fiduciary duty claims, and injunctive
              relief.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              His corporate transactions work includes entity formation,
              operating agreements, buy-sell provisions, and contract drafting
              for construction companies, real estate ventures, and service
              businesses. Curtis drafts governance documents informed by the
              disputes he litigates — because he sees firsthand what happens
              when those documents are missing or poorly written.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold text-white">
              Speak with Curtis directly
            </h2>
            <div className="mt-2 flex justify-center gap-6 text-sm text-charcoal-300">
              <a href="tel:9725037004" className="hover:text-white">
                (972) 503-7004
              </a>
              <a href="mailto:chubbard@njh-law.com" className="hover:text-white">
                chubbard@njh-law.com
              </a>
            </div>
            <div className="mt-6">
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
