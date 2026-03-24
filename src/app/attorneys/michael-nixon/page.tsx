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
  name: "Michael S. Nixon",
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
  email: "mnixon@njhlaw.com",
  url: "https://njhlaw.com/attorneys/michael-nixon",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Louisiana State University" },
    { "@type": "CollegeOrUniversity", name: "Baylor University School of Law" },
  ],
  knowsAbout: [
    "Construction Law",
    "Mechanic\u2019s Liens",
    "Construction Litigation",
    "Real Estate Disputes",
    "Texas Property Code",
  ],
};

export default function MichaelNixonPage() {
  return (
    <>
      <Script
        id="person-schema-nixon"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />

      {/* ============================================================ */}
      {/* BIO HEADER — wide layout, photo offset left                  */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            {/* Photo placeholder — offset left */}
            <FadeIn className="lg:col-span-4">
              <div className="aspect-[3/4] rounded-lg bg-navy-800" role="img" aria-label="Michael S. Nixon, Dallas construction attorney and partner at Nixon Jach Hubbard" />
            </FadeIn>

            {/* Name, title, contact, recognitions */}
            <FadeIn delay={0.1} className="lg:col-span-8">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Michael S. Nixon
              </h1>
              <p className="mt-2 text-lg text-gold-400">Partner</p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-charcoal-300">
                <a
                  href="tel:9725037000"
                  className="transition-colors hover:text-white"
                >
                  (972) 503-7000
                </a>
                <a
                  href="mailto:mnixon@njhlaw.com"
                  className="transition-colors hover:text-white"
                >
                  mnixon@njhlaw.com
                </a>
              </div>

              {/* Recognition badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Texas Super Lawyers 2008, 2010\u20132024",
                  "Best Lawyers in America 2019\u20132024",
                  "Chambers USA Construction 2020\u20132024",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-gold-400/30 bg-navy-900 px-4 py-1.5 text-xs font-medium text-gold-300"
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
      {/* OVERVIEW — narrative, third person, scenario-based            */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-7">
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                Over 35 years of construction law in Dallas and across Texas
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
                Michael Nixon has represented general contractors, subcontractors,
                material suppliers, sureties, developers, and property owners in
                construction disputes since 1988. His practice spans every phase
                of a construction project — from contract negotiation and bid
                protests through mechanic&apos;s lien claims, delay litigation,
                and final payment disputes.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                When a $12M mixed-use project in North Texas stalled over
                competing delay claims, Mike reconstructed the CPM schedule,
                identified 47 owner-directed changes, and negotiated a
                resolution that kept the GC whole without shutting down the job
                site. That combination — deep knowledge of the Texas Property
                Code and practical understanding of how projects actually run —
                is what sets his practice apart.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                He has tried construction cases in every federal district court
                in Texas, before AAA arbitration panels, and in state courts
                across the DFW metroplex. His clients include some of the
                largest commercial contractors in North Texas, as well as
                specialty subcontractors and material suppliers navigating
                Chapter 53 lien claims for the first time.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                Mike also handles commercial real estate disputes where
                construction and property interests overlap — developer-contractor
                conflicts, construction defect claims on completed buildings,
                and lien foreclosure actions. His recognition by Chambers USA
                for Construction (2020–2024), Best Lawyers in America for
                Construction Litigation (2019–2024), and Texas Super Lawyers
                for Construction Litigation (2008, 2010–2024) reflects the
                breadth and consistency of that work.
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
                      href: "/practice-areas/commercial-real-estate",
                      label: "Commercial Real Estate",
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
                    <dd className="font-medium text-navy-900">Since 1988</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Education</dt>
                    <dd className="font-medium text-navy-900">
                      Baylor University School of Law
                    </dd>
                    <dd className="font-medium text-navy-900">
                      Louisiana State University
                    </dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Super Lawyers</dt>
                    <dd className="font-medium text-navy-900">
                      16 consecutive years
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
                <li>State Bar of Texas (1988)</li>
                <li>U.S. District Court, Northern District of Texas</li>
                <li>U.S. District Court, Southern District of Texas</li>
                <li>U.S. District Court, Eastern District of Texas</li>
                <li>U.S. District Court, Western District of Texas</li>
                <li>U.S. Court of Appeals, Fifth Circuit</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Education
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  <strong>J.D.</strong>, Baylor University School of Law
                </li>
                <li>
                  <strong>B.A.</strong>, Louisiana State University
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.16}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Professional Memberships
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>Dallas Bar Association</li>
                <li>
                  American Bar Association — Forum on Construction Industry
                </li>
                <li>State Bar of Texas — Construction Law Section</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.24}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Honors &amp; Awards
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  Texas Super Lawyers, Construction Litigation (2008,
                  2010–2024)
                </li>
                <li>
                  Best Lawyers in America, Construction Litigation (2019–2024)
                </li>
                <li>Chambers USA, Construction (2020–2024)</li>
              </ul>
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
                  Speak with Mike directly
                </h2>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-charcoal-300">
                  <a
                    href="tel:9725037000"
                    className="transition-colors hover:text-white"
                  >
                    (972) 503-7000
                  </a>
                  <a
                    href="mailto:mnixon@njhlaw.com"
                    className="transition-colors hover:text-white"
                  >
                    mnixon@njhlaw.com
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300"
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
