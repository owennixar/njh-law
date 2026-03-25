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
  url: "https://njh-law.com/attorneys/curtis-hubbard",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Arkansas Tech University" },
    { "@type": "CollegeOrUniversity", name: "Baylor University School of Law" },
  ],
  knowsAbout: [
    "Construction Law",
    "Construction Litigation",
    "Contract Drafting",
    "Business Litigation",
  ],
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
                  src="/images/curtis_hubbard.avif"
                  alt="Curtis Hubbard, Dallas construction attorney and partner at Nixon Jach Hubbard"
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
                Curtis Hubbard
              </h1>
              <p className="mt-2 text-lg text-white">Partner</p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-charcoal-300">
                <a
                  href="tel:9725037004"
                  className="transition-colors hover:text-white"
                >
                  (972) 503-7004
                </a>
                <a
                  href="mailto:chubbard@njh-law.com"
                  className="transition-colors hover:text-white"
                >
                  chubbard@njh-law.com
                </a>
              </div>

              {/* Accomplishment badge images */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <img src="/images/Badges/curtis/super-lawyer.avif" alt="Curtis Hubbard – Texas Super Lawyer" className="h-[100px] w-auto object-contain" style={{ mixBlendMode: "multiply" }} />
                <img src="/images/Badges/curtis/best-law-firms.avif" alt="Best Law Firms – Regional Tier 1" className="h-[100px] w-auto object-contain" style={{ mixBlendMode: "multiply" }} />
              </div>

              {/* Recognition badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Texas Super Lawyers 2011\u20132024",
                  "Best Lawyers in America 2021\u20132024",
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
                A founding member focused on construction contracts and litigation
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
                Curtis Hubbard is a founding member of Nixon Jach Hubbard,
                PLLC. He has built his practice around two pillars: drafting
                and negotiating construction contracts, and litigating the
                disputes that arise when projects go wrong.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                Strong contracts prevent disputes before they start. Curtis
                understands how construction projects are structured from
                bid to closeout. That knowledge allows him to draft
                provisions that protect clients against payment failures,
                scope disputes, and delay claims. Owners, general
                contractors, and subcontractors each face different risks.
                Curtis tailors every contract to the client&apos;s specific
                position on the project.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                When disputes cannot be avoided, Curtis brings firsthand
                knowledge of contract intent into the courtroom. He has
                litigated and arbitrated construction-related disputes for
                developers and commercial contractors on both public and
                private work. An attorney who drafts the deal and tries
                the case sees both sides of every construction conflict.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                Curtis holds bar admissions in both Texas and Arkansas,
                which expands the firm&apos;s geographic reach for clients
                with projects crossing state lines. He also practices
                before all four U.S. District Courts in Texas and the
                Fifth Circuit Court of Appeals.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                His peers recognize his authority in this field. Curtis
                speaks on construction law topics as a presiding officer
                and presenter at CLE seminars. Attorneys who teach other
                attorneys demonstrate a depth of knowledge that goes
                beyond day-to-day practice. His Super Lawyers recognition
                since 2011 and Best Lawyers selection since 2021 reflect
                that standing. As Executive Editor of the Baylor Law
                Review, he built the research and writing discipline that
                continues to sharpen his legal work today.
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
                    <dd className="font-medium text-navy-900">Since 2001</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Arkansas Bar</dt>
                    <dd className="font-medium text-navy-900">Since 2007</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Education</dt>
                    <dd className="font-medium text-navy-900">
                      Baylor University &ndash; J.D.
                    </dd>
                    <dd className="font-medium text-navy-900">
                      Arkansas Tech University &ndash; B.S.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-400">Direct Line</dt>
                    <dd className="font-medium text-navy-900">
                      <a href="tel:9725037004" className="hover:text-gold-600">
                        (972) 503-7004
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
                <li>State Bar of Texas &ndash; 2001</li>
                <li>State Bar of Arkansas &ndash; 2007</li>
                <li>U.S. District Court, Northern District of Texas</li>
                <li>U.S. District Court, Southern District of Texas</li>
                <li>U.S. District Court, Eastern District of Texas</li>
                <li>U.S. District Court, Western District of Texas</li>
                <li>U.S. Court of Appeals &ndash; Fifth Circuit</li>
                <li>U.S. District Court, Eastern District of Arkansas</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Education
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  <strong>J.D.</strong>, Baylor University
                  <br />
                  <span className="text-charcoal-400">
                    Baylor Law Review &ndash; Executive Editor, Phi Delta Phi
                    Honor Fraternity, Order of Barristers
                  </span>
                </li>
                <li>
                  <strong>B.S.</strong>, Arkansas Tech University
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.16}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Professional Memberships
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  Dallas Bar Association &ndash; Construction Law Section,
                  Business Litigation Section, Tort &amp; Insurance Section
                </li>
                <li>
                  State Bar of Texas &ndash; Construction Law Section, Business
                  Litigation Section
                </li>
                <li>
                  American Bar Association &ndash; Forum on the Construction
                  Industry
                </li>
                <li>Dallas Association of Young Lawyers &ndash; Member</li>
                <li>
                  TEXO (Associated General Contractors / Associated Builders
                  &amp; Contractors &ndash; Joint Association)
                </li>
                <li>Lifetime Member of the Baylor Law Review</li>
                <li>College of the State Bar of Texas &ndash; Member</li>
                <li>Co-Founder &amp; Host &ndash; Monthly Young Contractors Luncheon</li>
                <li>Dallas Metropolitan YMCA &ndash; Board of Directors</li>
                <li>Frisco Chamber of Commerce</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.24}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Honors &amp; Awards
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  Super Lawyers &ndash; Recognized in Construction Litigation,
                  &ldquo;Texas Rising Star&rdquo; &amp; &ldquo;Texas Super
                  Lawyer&rdquo; (Thomson Reuters) 2011&ndash;2024
                </li>
                <li>
                  Selected by &ldquo;Best Lawyers&rdquo; in America &ndash;
                  Litigation &ndash; Construction, 2021&ndash;2024
                </li>
              </ul>

              <h3 className="mt-8 text-sm font-semibold tracking-wider text-gold-500 uppercase">
                Selected Speeches &amp; Publications
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
                <li>
                  Presiding Officer &ndash; The Basic Course in Texas
                  Construction Law
                </li>
                <li>
                  Identifying and Resolving Ethical Issues in Construction
                </li>
                <li>Project Documentation</li>
                <li>The Employee Handbook</li>
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
                  Speak with Curtis directly
                </h2>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-charcoal-300">
                  <a
                    href="tel:9725037004"
                    className="transition-colors hover:text-white"
                  >
                    (972) 503-7004
                  </a>
                  <a
                    href="mailto:chubbard@njh-law.com"
                    className="transition-colors hover:text-white"
                  >
                    chubbard@njh-law.com
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
