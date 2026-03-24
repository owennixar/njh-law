"use client";

import Link from "next/link";
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
  name: "Anthony P. Jach",
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
  telephone: "(972) 503-7000",
  email: "tjach@njhlaw.com",
  knowsAbout: [
    "Commercial Real Estate",
    "Construction Law",
    "Business Litigation",
  ],
};

export default function AnthonyJachPage() {
  return (
    <>
      <Script
        id="person-schema-jach"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />

      {/* HEADER — horizontal band, photo left-inline */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <FadeIn>
              <div className="h-48 w-48 shrink-0 rounded-lg bg-navy-800 lg:h-56 lg:w-56" role="img" aria-label="Anthony P. Jach, Dallas commercial real estate attorney" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Anthony P. Jach
              </h1>
              <p className="mt-1 text-lg text-gold-400">Partner</p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-sm text-charcoal-300">
                <a href="tel:9725037000" className="hover:text-white">
                  (972) 503-7000
                </a>
                <a href="mailto:tjach@njhlaw.com" className="hover:text-white">
                  tjach@njhlaw.com
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* OVERVIEW + PRACTICE AREAS — side by side */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-8">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Commercial real estate and construction counsel for the DFW
                market
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
                Tony Jach represents developers, investors, landlords, and
                tenants in commercial real estate transactions throughout the
                Dallas-Fort Worth metroplex. His practice covers acquisitions,
                dispositions, commercial leasing, development agreements, and
                real estate financing — from initial letter of intent through
                post-closing compliance.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                When a title commitment on a $9M retail acquisition revealed an
                unresolved utility easement three weeks before closing, Tony
                traced the encumbrance to a 1987 deed and negotiated a partial
                release that saved the deal. That ability to solve problems
                under deadline pressure is what DFW developers expect from
                deal counsel.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                Tony also handles construction contract matters for real estate
                clients — owner-side GMP agreements, design-build contracts,
                and lien waiver management. His business litigation work focuses
                on partnership disputes, lease defaults, and contract claims
                that arise from commercial real estate transactions.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-4">
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Practice Areas
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  { href: "/practice-areas/commercial-real-estate", label: "Commercial Real Estate" },
                  { href: "/practice-areas/construction-law", label: "Construction Law" },
                  { href: "/practice-areas/business-litigation", label: "Business Litigation" },
                ].map((a) => (
                  <li key={a.href}>
                    <Link
                      href={a.href}
                      className="text-sm font-medium text-navy-900 hover:text-gold-600"
                    >
                      {a.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Speak with Tony directly
                </h2>
                <p className="mt-1 text-sm text-charcoal-300">
                  (972) 503-7000 &middot; tjach@njhlaw.com
                </p>
              </div>
              <Link
                href="/contact"
                className="rounded bg-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-300"
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
