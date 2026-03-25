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

const faqData = [
  {
    q: "Can a homeowner file a mechanic\u2019s lien in Texas?",
    a: "No. Mechanic\u2019s lien rights under Texas Property Code Chapter 53 are reserved for contractors, subcontractors, and material suppliers who provide labor or materials to improve a property. Property owners have other remedies, including breach of contract claims against contractors who fail to complete work.",
  },
  {
    q: "What happens if I miss the mechanic\u2019s lien deadline in Texas?",
    a: "Your lien rights are permanently lost. Texas courts strictly enforce the deadlines in Chapter 53. If you miss the filing window \u2014 the 15th day of the fourth month after your last day of work \u2014 you cannot file a valid lien. You may still pursue a breach of contract claim, but you lose the security interest in the property.",
  },
  {
    q: "How much does it cost to file a mechanic\u2019s lien in Texas?",
    a: "County clerk filing fees typically range from $25 to $50 depending on the county. Attorney fees for lien preparation and filing range from $500 to $2,000 depending on complexity. The cost of not filing \u2014 losing your only secured claim against the property \u2014 is almost always higher.",
  },
  {
    q: "How long do I have to file a mechanic\u2019s lien in Texas?",
    a: "Under Texas Property Code \u00a753.052, the deadline is the 15th day of the fourth month after the month you last provided labor or materials. If your last day of work was June 20, the lien affidavit must be filed by October 15. Subcontractors and suppliers must also send preliminary notice by the 15th of the second month after first providing work. Missing either deadline permanently destroys your lien rights.",
  },
  {
    q: "Can I file a mechanic\u2019s lien on a residential homestead in Texas?",
    a: "Yes, but the requirements are stricter. Under Texas Property Code \u00a753.254, an original contractor must have a written contract with the homeowner, or provide a disclosure statement before work begins, to preserve lien rights on a homestead. Subcontractors and suppliers can lien a homestead but must comply with the same notice deadlines as commercial projects. Texas courts closely scrutinize homestead liens because of the strong constitutional protections the Texas Constitution gives to homestead property.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to File a Mechanic\u2019s Lien in Texas: A Step-by-Step Guide",
  author: {
    "@type": "Person",
    name: "Michael S. Nixon",
    jobTitle: "Partner",
    url: "https://njh-law.com/attorneys/michael-nixon",
  },
  publisher: {
    "@type": "LegalService",
    name: "Nixon Jach Hubbard",
  },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  mainEntityOfPage:
    "https://njh-law.com/insights/mechanics-lien-texas-guide",
};

export default function MechanicsLienGuidePage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema-lien"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      {/* ============================================================ */}
      {/* HEADER                                                       */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-wider text-white uppercase">
              Construction Law
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              How to File a Mechanic&apos;s Lien in Texas: A Step-by-Step Guide
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-charcoal-400">
              <span>
                By{" "}
                <Link
                  href="/attorneys/michael-nixon"
                  className="font-medium text-charcoal-300 hover:text-white"
                >
                  Michael S. Nixon
                </Link>
              </span>
              <span>&middot;</span>
              <span>Partner, Nixon Jach Hubbard</span>
              <span>&middot;</span>
              <span>35+ Years of Construction Law</span>
            </div>
            <p className="mt-2 text-xs text-charcoal-500">
              Published March 24, 2026 &middot; Last updated March 24, 2026
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ARTICLE BODY                                                 */}
      {/* ============================================================ */}
      <article className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          {/* INTRO — direct answer in first 100 words */}
          <FadeIn>
            <p className="text-base leading-relaxed text-charcoal-700">
              <strong>
                A mechanic&apos;s lien is a legal claim filed against a
                property to secure payment for work performed or materials
                provided.
              </strong>{" "}
              In Texas, mechanic&apos;s lien rights are governed by Chapter 53
              of the Texas Property Code. Filing requires strict compliance
              with notice deadlines, a properly drafted lien affidavit, and
              timely recording with the county clerk. Missing any single
              deadline can permanently destroy your lien rights. This guide
              walks through every step a contractor, subcontractor, or
              supplier needs to follow.
            </p>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* WHO CAN FILE                                             */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <h2 className="mt-16 font-heading text-2xl font-bold text-navy-900">
              Who can file a mechanic&apos;s lien in Texas?
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              Texas Property Code &sect;53.021 grants lien rights to anyone
              who furnishes labor or materials for construction or repair of
              an improvement on real property. That includes:
            </p>

            <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
              <li>
                <strong>Original contractors</strong> (prime/general
                contractors with a direct contract with the owner)
              </li>
              <li>
                <strong>Subcontractors</strong> (first-tier and lower-tier
                subs)
              </li>
              <li>
                <strong>Material suppliers</strong> (companies that provide
                building materials, equipment, or fixtures)
              </li>
              <li>
                <strong>Design professionals</strong> (architects and
                engineers, under certain conditions)
              </li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              Laborers who work directly for a subcontractor also have lien
              rights under &sect;53.021. However, the notice requirements
              and deadlines differ based on your position in the contract
              chain. That distinction matters.
            </p>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* NOTICE REQUIREMENTS                                      */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <h2 className="mt-16 font-heading text-2xl font-bold text-navy-900">
              Notice requirements under Chapter 53
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              Before you can file a mechanic&apos;s lien in Texas, you may
              need to send preliminary notices. The requirements depend on
              whether you are an original contractor or a subcontractor/
              supplier.
            </p>

            <h3 className="mt-8 font-heading text-lg font-bold text-navy-900">
              Original contractors
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              Original contractors are not required to send preliminary
              notice to the owner under Chapter 53. However, the contract
              itself must be in writing, or the contractor must send a
              disclosure statement under &sect;53.254. Without a written
              contract or proper disclosure, lien rights may be limited.
            </p>

            <h3 className="mt-8 font-heading text-lg font-bold text-navy-900">
              Subcontractors and suppliers
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              <strong>Subcontractors must send notice</strong> to the
              property owner and the original contractor by the 15th day
              of the second month after the month they first provided labor
              or materials (&sect;53.056). This is commonly called the
              &ldquo;second-month notice.&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              <strong>Suppliers must send the same notice</strong> within the
              same timeframe. If you deliver $80,000 in steel to a job site
              in January, your notice is due by March 15. Miss that deadline
              and your lien rights disappear — regardless of how much you
              are owed.
            </p>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* STEP-BY-STEP                                             */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <h2 className="mt-16 font-heading text-2xl font-bold text-navy-900">
              Step-by-step: filing a mechanic&apos;s lien in Texas
            </h2>

            {/* GEO extractable block */}
            <div className="mt-4 rounded-lg border border-navy-600/20 bg-navy-600/5 p-5">
              <p className="text-sm leading-relaxed text-charcoal-700">
                Filing a mechanic&apos;s lien in Texas requires four steps:
                (1) send preliminary notice to the property owner within the
                statutory deadline, (2) file the lien affidavit with the
                county clerk where the project is located, (3) serve a copy
                on the property owner, and (4) enforce the lien by filing
                suit within the required timeframe.
              </p>
            </div>

            <h3 className="mt-10 font-heading text-lg font-bold text-navy-900">
              Step 1: Send preliminary notice (if required)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              Subcontractors and suppliers must send written notice to the
              owner and the original contractor. The deadline is the 15th
              day of the second month after you first provided labor or
              materials. Send by certified mail, return receipt requested.
              Keep the green card — it is your proof of compliance.
            </p>

            <h3 className="mt-10 font-heading text-lg font-bold text-navy-900">
              Step 2: Prepare and file the lien affidavit
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              The lien affidavit must be filed with the county clerk in the
              county where the project is located. Under &sect;53.052, the
              deadline for filing is the 15th day of the fourth month after
              the month you last provided labor or materials. For a
              subcontractor who last worked on a project in June, the
              affidavit is due by October 15.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              The affidavit must include: the amount claimed, a description
              of the work or materials, the property description (legal
              description, not just the street address), the name of the
              property owner, and the name of the original contractor.
              Errors in any of these fields can invalidate the lien.
            </p>

            <h3 className="mt-10 font-heading text-lg font-bold text-navy-900">
              Step 3: Serve a copy on the property owner
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              After filing with the county clerk, you must send a copy of
              the filed lien affidavit to the property owner by certified
              mail. This must happen within five business days of the filing
              date. Failure to serve the owner does not automatically void
              the lien, but it weakens enforcement and creates procedural
              risk.
            </p>

            <h3 className="mt-10 font-heading text-lg font-bold text-navy-900">
              Step 4: Enforce the lien by filing suit
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              A mechanic&apos;s lien does not collect itself. You must file
              suit to foreclose the lien. Under &sect;53.158, the deadline
              depends on the project type. For most projects, the claimant
              must file suit within one year after the last day labor or
              materials were provided, or two years in some cases. If you
              do not file suit within the statutory period, the lien expires
              and cannot be revived.
            </p>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* COMMON MISTAKES                                          */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <h2 className="mt-16 font-heading text-2xl font-bold text-navy-900">
              Common mistakes that invalidate a Texas mechanic&apos;s lien
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              Texas courts strictly construe lien statutes. Small errors
              destroy lien rights. The most common mistakes we see:
            </p>

            <ul className="mt-4 space-y-3 text-sm text-charcoal-600">
              <li>
                <strong>Missing the preliminary notice deadline.</strong>{" "}
                Subcontractors and suppliers who skip the second-month
                notice lose lien rights entirely. No exceptions.
              </li>
              <li>
                <strong>Using the street address instead of the legal
                description.</strong> The lien affidavit must include the
                legal property description from the deed or plat. A street
                address alone is not sufficient.
              </li>
              <li>
                <strong>Overstating the lien amount.</strong> Under
                &sect;53.156, a lien that claims more than the amount
                actually owed can be invalidated. Only claim what you are
                owed, supported by documentation.
              </li>
              <li>
                <strong>Filing in the wrong county.</strong> The lien must be
                filed in the county where the project is physically located,
                not where your business is based.
              </li>
              <li>
                <strong>Failing to enforce within the statutory period.
                </strong> Filing the lien is only half the process. If you
                do not file suit to foreclose within the deadline, the lien
                expires.
              </li>
            </ul>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* WHEN TO ENFORCE                                          */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <h2 className="mt-16 font-heading text-2xl font-bold text-navy-900">
              When to call a construction attorney about your lien
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              Filing a lien is a legal process with no room for error. Call
              an attorney when:
            </p>

            <ul className="mt-4 space-y-2 text-sm text-charcoal-600">
              <li>You are owed more than $25,000 on any project</li>
              <li>You are unsure whether your notice deadlines have passed</li>
              <li>The property owner disputes the amount owed</li>
              <li>A lender or title company is contesting your lien</li>
              <li>You need to file suit to foreclose before the deadline</li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
              The cost of professional lien filing is a fraction of the cost
              of losing a valid lien claim. A{" "}
              <Link
                href="/practice-areas/construction-law"
                className="font-medium text-gold-600 hover:text-gold-500"
              >
                Dallas construction attorney
              </Link>{" "}
              familiar with Chapter 53 can ensure every deadline is met and
              every document is properly drafted.
            </p>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* KEY TAKEAWAY                                             */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <div className="mt-16 rounded-lg border border-navy-800 bg-navy-950 p-8">
              <p className="text-sm font-semibold tracking-wider text-white uppercase">
                Key Takeaways
              </p>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-300">
                <li>
                  Texas mechanic&apos;s lien rights are governed by Property
                  Code Chapter 53. Strict compliance is required.
                </li>
                <li>
                  Subcontractors and suppliers must send preliminary notice by
                  the 15th of the second month after first providing work.
                </li>
                <li>
                  The lien affidavit must be filed by the 15th of the fourth
                  month after your last day of work.
                </li>
                <li>
                  Common errors — wrong property description, overstated
                  amounts, missed deadlines — destroy lien rights permanently.
                </li>
                <li>
                  A filed lien must be enforced by lawsuit within the
                  statutory period or it expires.
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* FAQ                                                      */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <h2 className="mt-16 font-heading text-2xl font-bold text-navy-900">
              Frequently asked questions about mechanic&apos;s liens in Texas
            </h2>

            <div className="mt-8 space-y-8">
              {faqData.map((item, i) => (
                <div key={i}>
                  <h3 className="font-heading text-base font-bold text-navy-900">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* CTA                                                      */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <div className="mt-16 rounded-lg border border-charcoal-200 bg-charcoal-50 p-8 text-center">
              <p className="font-heading text-lg font-bold text-navy-900">
                Questions about filing a mechanic&apos;s lien in Texas?
              </p>
              <p className="mt-2 text-sm text-charcoal-600">
                We respond within one business day. No obligation.
              </p>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-gold-400 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* AUTHOR BIO                                               */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <div className="mt-16 border-t border-charcoal-200 pt-10">
              <div className="flex gap-6">
                {/* Photo placeholder */}
                <div className="h-20 w-20 shrink-0 rounded-lg bg-charcoal-100" role="img" aria-label="Michael S. Nixon, Dallas construction attorney" />
                <div>
                  <p className="font-heading text-base font-bold text-navy-900">
                    <Link
                      href="/attorneys/michael-nixon"
                      className="hover:text-gold-600"
                    >
                      Michael S. Nixon
                    </Link>
                  </p>
                  <p className="text-sm text-charcoal-500">
                    Partner, Nixon Jach Hubbard
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                    Mike Nixon has represented contractors, subcontractors, and
                    owners in Texas construction disputes for over 35 years.
                    Selected to Texas Super Lawyers for Construction Litigation
                    every year from 2008 through 2024. Recognized by Chambers
                    USA and Best Lawyers in America.
                  </p>
                  <Link
                    href="/attorneys/michael-nixon"
                    className="mt-3 inline-block text-sm font-medium text-gold-500 hover:text-gold-600"
                  >
                    View full bio &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* -------------------------------------------------------- */}
          {/* RELATED POSTS                                            */}
          {/* -------------------------------------------------------- */}
          <FadeIn>
            <div className="mt-16 border-t border-charcoal-200 pt-10">
              <h2 className="font-heading text-lg font-bold text-navy-900">
                Related articles
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-charcoal-200 bg-charcoal-50 p-6">
                  <p className="text-xs text-charcoal-400">Coming Soon</p>
                  <p className="mt-2 font-heading text-sm font-bold text-navy-900">
                    What the Texas Prompt Payment Act Means for Contractors
                  </p>
                </div>
                <div className="rounded-lg border border-charcoal-200 bg-charcoal-50 p-6">
                  <p className="text-xs text-charcoal-400">Coming Soon</p>
                  <p className="mt-2 font-heading text-sm font-bold text-navy-900">
                    5 Clauses Every Construction Contract Should Include
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
