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
  name: "Anthony R. Alvarado",
  jobTitle: "Associate",
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
  telephone: "(972) 503-7007",
  email: "aalvarado@njh-law.com",
  url: "https://njh-law.com/attorneys/anthony-alvarado",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Texas Pan American" },
    { "@type": "CollegeOrUniversity", name: "Western Michigan University Cooley Law School" },
  ],
  knowsAbout: [
    "Construction Law",
    "Payment Disputes",
    "Mechanic\u2019s Liens",
    "Bond Claims",
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

      {/* ============================================================ */}
      {/* BIO HEADER — wide layout, initials placeholder               */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            {/* Photo placeholder */}
            <FadeIn className="lg:col-span-4">
              <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg bg-navy-800">
                <span className="font-heading text-6xl font-bold text-white/60">
                  AA
                </span>
              </div>
            </FadeIn>

            {/* Name, title, contact */}
            <FadeIn delay={0.1} className="lg:col-span-8">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Anthony R. Alvarado
              </h1>
              <p className="mt-2 text-lg text-white">Associate</p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-charcoal-300">
                <a
                  href="tel:9725037007"
                  className="transition-colors hover:text-white"
                >
                  (972) 503-7007
                </a>
                <a
                  href="mailto:aalvarado@njh-law.com"
                  className="transition-colors hover:text-white"
                >
                  aalvarado@njh-law.com
                </a>
              </div>

              {/* Recognition badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "College of the State Bar of Texas",
                  "Top 100 Magazine",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-navy-600/30 bg-navy-900 px-4 py-1.5 text-xs font-medium text-charcoal-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OVERVIEW — narrative, third person                            */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-7">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Solution-oriented construction attorney focused on payment and performance disputes
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
                Anthony Alvarado is an associate at Nixon Jach Hubbard, PLLC.
                Anthony is a solution-oriented construction attorney who
                represents clients across all aspects of the construction
                industry — including general contractors, subcontractors, and
                material suppliers.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                His practice is primarily focused on payment and performance
                disputes, including resolution of lien and bond claims, as well
                as other claims typical to the construction industry.
              </p>
            </FadeIn>

            {/* Sidebar — quick facts + practice areas */}
            <FadeIn delay={0.15} className="lg:col-span-5">
              <div className="rounded-lg border border-charcoal-200 bg-charcoal-50 p-8">
                <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  Practice Areas
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    {
                      href: "/practice-areas/construction-law",
                      label: "Construction Law",
                    },
                    {
                      href: "/practice-areas/business-litigation",
                      label: "Business Litigation",
                    },
                  ].map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        className="text-sm font-medium text-navy-900 transition-colors hover:text-gold-600"
                      >
                        {area.label} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-lg border border-charcoal-200 bg-charcoal-50 p-8">
                <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  At a glance
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-charcoal-400">Texas Bar</dt>
                    <dd className="font-medium text-navy-900">Since 2021</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Education</dt>
                    <dd className="font-medium text-navy-900">
                      Western Michigan University Cooley Law School &ndash; J.D.
                    </dd>
                    <dd className="font-medium text-navy-900">
                      University of Texas Pan American &ndash; B.S.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Direct Line</dt>
                    <dd className="font-medium text-navy-900">
                      <a href="tel:9725037007" className="hover:text-gold-600">
                        (972) 503-7007
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CREDENTIALS — detailed, full width                           */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold text-navy-900">
              Credentials
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <FadeIn>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Bar Admissions
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>Texas &ndash; 2021</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Education
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  <strong>J.D.</strong>, Western Michigan University Cooley Law
                  School
                  <br />
                  <span className="text-charcoal-400">
                    Dean&apos;s List, Homeland and National Security Law Review
                    &ndash; Associate Editor
                  </span>
                </li>
                <li>
                  <strong>B.S.</strong>, University of Texas Pan American
                  <br />
                  <span className="text-charcoal-400">Cum Laude</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.16}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Professional Memberships
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  State Bar of Texas &ndash; Collaborative Law Section, Family
                  Law Section, Litigation Section, Real Estate, Probate, and
                  Trust Law Section
                </li>
                <li>
                  Dallas Bar Association &ndash; Construction Law Section,
                  Hispanic Bar Association, Young Lawyers Association
                </li>
                <li>College of the State Bar of Texas &ndash; Member</li>
                <li>Top 100 Magazine</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <section className="bg-navy-900 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
                  Speak with Anthony directly
                </h2>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-charcoal-300">
                  <a
                    href="tel:9725037007"
                    className="transition-colors hover:text-white"
                  >
                    (972) 503-7007
                  </a>
                  <a
                    href="mailto:aalvarado@njh-law.com"
                    className="transition-colors hover:text-white"
                  >
                    aalvarado@njh-law.com
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-gold-400 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
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
