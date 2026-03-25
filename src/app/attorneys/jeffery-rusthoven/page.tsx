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
  name: "Jeffery H. Rusthoven",
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
  telephone: "(972) 503-7006",
  email: "jrusthoven@njh-law.com",
  knowsAbout: ["Construction Law", "Commercial Real Estate"],
};

export default function JefferyRusthovenPage() {
  return (
    <>
      <Script
        id="person-schema-rusthoven"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />

      {/* HEADER — card style, photo right */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-7">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Jeffery H. Rusthoven
              </h1>
              <p className="mt-1 text-lg text-white">Attorney</p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-sm text-charcoal-300">
                <a href="tel:9725037006" className="hover:text-white">
                  (972) 503-7006
                </a>
                <a
                  href="mailto:jrusthoven@njh-law.com"
                  className="hover:text-white"
                >
                  jrusthoven@njh-law.com
                </a>
              </div>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/practice-areas/construction-law"
                  className="rounded border border-navy-700 px-3 py-1 text-xs text-charcoal-300 hover:border-navy-600 hover:text-charcoal-200"
                >
                  Construction Law
                </Link>
                <Link
                  href="/practice-areas/commercial-real-estate"
                  className="rounded border border-navy-700 px-3 py-1 text-xs text-charcoal-300 hover:border-navy-600 hover:text-charcoal-200"
                >
                  Commercial Real Estate
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-5">
              <div className="relative aspect-square max-w-xs overflow-hidden rounded-lg lg:ml-auto">
                <Image
                  src="/images/jeff_rusthoven.avif"
                  alt="Jeffery H. Rusthoven, Dallas construction and real estate attorney"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
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
              Construction law and commercial real estate in Dallas
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
              Jeff Rusthoven handles construction contract disputes, mechanic&apos;s
              lien claims under Texas Property Code Chapter 53, delay and
              payment disputes, and construction defect matters for contractors
              and owners across the DFW metroplex.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              His commercial real estate work includes purchase and sale
              agreement negotiation, lease drafting and review, due diligence
              coordination, and title analysis for commercial transactions
              in North Texas. Jeff works closely with the firm&apos;s partners
              on complex matters where construction and real estate interests
              overlap.
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
                  Speak with Jeff directly
                </h2>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-charcoal-300">
                  <a href="tel:9725037006" className="hover:text-white">
                    (972) 503-7006
                  </a>
                  <a href="mailto:jrusthoven@njh-law.com" className="hover:text-white">
                    jrusthoven@njh-law.com
                  </a>
                </div>
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
