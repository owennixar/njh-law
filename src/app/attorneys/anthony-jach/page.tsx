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
  telephone: "(972) 503-7003",
  email: "tjach@njh-law.com",
  url: "https://njh-law.com/attorneys/anthony-jach",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Texas at Arlington" },
    { "@type": "CollegeOrUniversity", name: "Texas Tech University School of Law" },
  ],
  knowsAbout: [
    "Construction Law",
    "Construction Litigation",
    "Business Litigation",
    "Dispute Resolution",
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

      {/* ============================================================ */}
      {/* BIO HEADER — wide layout, photo offset left                  */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            {/* Photo — offset left */}
            <FadeIn className="lg:col-span-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/images/tony_jach.avif"
                  alt="Anthony (Tony) P. Jach, Dallas construction attorney and partner at Nixon Jach Hubbard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
            </FadeIn>

            {/* Name, title, contact, recognitions */}
            <FadeIn delay={0.1} className="lg:col-span-8">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Anthony (Tony) P. Jach
              </h1>
              <p className="mt-2 text-lg text-white">Partner</p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-charcoal-300">
                <a
                  href="tel:9725037003"
                  className="transition-colors hover:text-white"
                >
                  (972) 503-7003
                </a>
                <a
                  href="mailto:tjach@njh-law.com"
                  className="transition-colors hover:text-white"
                >
                  tjach@njh-law.com
                </a>
              </div>

              {/* Recognition badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Chambers USA Construction 2021\u20132024",
                  "Texas Super Lawyers 2010\u20132024",
                  "Martindale-Hubbell AV Preeminent",
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
                A founding member and top-recognized construction attorney in Texas
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
                Tony Jach is a founding member of Nixon Jach Hubbard, PLLC. Tony
                has been recognized by multiple publications and by his peers as
                one of the top construction attorneys in Texas. He routinely
                speaks at industry functions and continuing legal education
                seminars on construction law, litigation, and practical dispute
                resolution.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                Tony has successfully litigated, arbitrated and resolved numerous
                construction-related disputes for developers and commercial
                contractors engaged in both public and private work.
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
                    <dd className="font-medium text-navy-900">Since 1994</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Education</dt>
                    <dd className="font-medium text-navy-900">
                      Texas Tech University &ndash; J.D.
                    </dd>
                    <dd className="font-medium text-navy-900">
                      University of Texas at Arlington &ndash; B.A.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Direct Line</dt>
                    <dd className="font-medium text-navy-900">
                      <a href="tel:9725037003" className="hover:text-gold-600">
                        (972) 503-7003
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
                <li>State Bar of Texas &ndash; 1994</li>
                <li>U.S. District Court, Northern District of Texas</li>
                <li>U.S. District Court, Southern District of Texas</li>
                <li>U.S. District Court, Eastern District of Texas</li>
                <li>U.S. District Court, Western District of Texas</li>
                <li>U.S. Court of Appeals &ndash; Fifth Circuit</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Education
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  <strong>J.D.</strong>, Texas Tech University
                  <br />
                  <span className="text-charcoal-400">
                    Eddleman M. Farland Scholarship
                  </span>
                </li>
                <li>
                  <strong>B.A.</strong>, University of Texas at Arlington
                  <br />
                  <span className="text-charcoal-400">
                    University Presidential Scholarship, Falk Corporate
                    Leadership Scholarship, Phi Eta Sigma National Honor Society
                  </span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.16}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Professional Memberships
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  Dallas Bar Association &ndash; Construction Law Section:
                  President (2015), Officer (2010&ndash;2014), Council Member
                  (2007&ndash;2009). Member &ndash; Construction Law Section,
                  Business Litigation Section, Employment Law Section, Consumer
                  Law Section
                </li>
                <li>
                  State Bar of Texas &ndash; Construction Law Section, Business
                  Litigation Section, Employment Law Section, Consumer
                  (Bankruptcy) Law Section
                </li>
                <li>
                  American Bar Association &ndash; Member, Division 1
                  &ldquo;Dispute Avoidance and Resolution&rdquo; (Litigation
                  Division)
                </li>
                <li>College of the State Bar of Texas &ndash; Member</li>
                <li>
                  TEXO (Associated General Contractors / Associated Builders
                  &amp; Contractors &ndash; Joint Association)
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.24}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Honors &amp; Awards
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  Chambers USA &ndash; America&apos;s Leading Lawyers for
                  Business, Texas Construction; Chambers &amp; Partners
                  (2021&ndash;2024)
                </li>
                <li>Martindale-Hubbell &ndash; AV Preeminent Peer Rating</li>
                <li>
                  Super Lawyer &ndash; Recognized in Construction Litigation,
                  &ldquo;Texas Super Lawyers&rdquo; (Thomson Reuters)
                  2010&ndash;2024
                </li>
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
                  Speak with Tony directly
                </h2>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-charcoal-300">
                  <a
                    href="tel:9725037003"
                    className="transition-colors hover:text-white"
                  >
                    (972) 503-7003
                  </a>
                  <a
                    href="mailto:tjach@njh-law.com"
                    className="transition-colors hover:text-white"
                  >
                    tjach@njh-law.com
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
