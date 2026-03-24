"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Script from "next/script";

/* ------------------------------------------------------------------ */
/*  Animation wrapper                                                  */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/*  FAQ data + schema                                                  */
/* ------------------------------------------------------------------ */
const faqData = [
  {
    q: "What qualifies as breach of contract under Texas law?",
    a: "Four elements are required: (1) a valid contract existed, (2) the plaintiff performed, (3) the defendant breached, and (4) the plaintiff suffered damages. CPRC \u00a738.001 also allows the prevailing party to recover reasonable attorney\u2019s fees on most contract claims. That fee-shifting right significantly affects the economics of every breach dispute in Texas.",
  },
  {
    q: "How long does business litigation typically take in Dallas County?",
    a: "Most cases take 12 to 24 months from filing to trial. Complex matters with extensive discovery or multiple parties can take longer. Dallas County district courts typically set trial dates 12 to 18 months after the case management conference. Many disputes resolve through mediation in 6 to 9 months, avoiding trial entirely.",
  },
  {
    q: "What is the difference between a temporary restraining order and a temporary injunction?",
    a: "A TRO is emergency relief granted quickly \u2014 often the same day \u2014 to prevent immediate, irreparable harm. It lasts up to 14 days. A temporary injunction requires a full evidentiary hearing and lasts until trial. Under CPRC \u00a765.011, the applicant must show a probable right to recovery and that no adequate legal remedy exists. TROs are commonly sought in non-compete, trade secret, and asset dissipation cases.",
  },
  {
    q: "Can I recover attorney\u2019s fees in a Texas breach of contract case?",
    a: "Yes. Texas Civil Practice & Remedies Code \u00a738.001 allows recovery of reasonable attorney\u2019s fees for breach of contract claims involving oral or written contracts. The statute applies to individuals and corporations and covers fees at both trial and appellate levels. Some contracts also contain independent fee-shifting clauses that may expand or limit recovery. Chapter 38 fees are not automatic \u2014 you must present the claim and meet the statutory requirements at trial.",
  },
  {
    q: "What should I do if my business partner is mismanaging company funds?",
    a: "Act immediately and document everything. Under the Texas Business Organizations Code, partners and officers owe fiduciary duties of loyalty and care to the entity and other owners. If you suspect mismanagement, request formal accounting records, preserve financial documents, and consult a business litigation attorney before confronting the partner. Emergency injunctive relief under CPRC \u00a765.011 can freeze assets and appoint a receiver if dissipation is imminent. A shareholder derivative action or direct suit may follow depending on the entity structure.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function BusinessLitigationPage() {
  return (
    <>
      <Script
        id="faq-schema-bl"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      {/* ============================================================ */}
      {/* HERO — scenario-based narrative hook                         */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Narrative hook — large left column */}
            <FadeIn className="lg:col-span-8">
              <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Business Litigation Attorneys in Dallas, Texas
              </h1>

              <div className="mt-8 rounded-lg border border-navy-800 bg-navy-900 p-8">
                <p className="text-sm leading-relaxed text-charcoal-300">
                  <span className="font-semibold text-gold-400">
                    Tuesday, 9:14 AM.
                  </span>{" "}
                  Your CFO finds $340,000 in unauthorized transfers to an LLC
                  your business partner registered last month. By 10 AM, your
                  bookkeeper confirms three months of diverted client payments.
                  The partner is not returning calls.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-300">
                  By noon, we file a temporary restraining order in Dallas
                  County district court under CPRC &sect;65.011. The
                  partner&apos;s accounts are frozen. By end of week, we obtain
                  a temporary injunction and initiate a forensic accounting hold.
                  We file a breach of fiduciary duty claim under the Texas
                  Business Organizations Code. The money stops moving. The case
                  starts.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-400">
                  That is what a business litigation attorney Dallas companies
                  call when the situation is urgent — not next week, not after
                  three consultations. Today.
                </p>
              </div>
            </FadeIn>

            {/* Right column — GEO block + CTA */}
            <FadeIn delay={0.15} className="flex flex-col justify-end lg:col-span-4">
              {/* GEO extractable block #1 — definition */}
              <p className="text-sm leading-relaxed text-charcoal-400">
                Business litigation covers the disputes that arise between
                companies, partners, shareholders, and counterparties when
                commercial relationships break down. In Texas, these claims
                are governed by the Texas Civil Practice &amp; Remedies Code,
                the Texas Business Organizations Code, and federal rules in
                the U.S. District Court for the Northern District of Texas.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE HANDLE — two-tone split                              */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Commercial disputes we litigate for Dallas businesses
            </h2>
            {/* GEO extractable block #2 */}
            <p className="mt-6 max-w-3xl text-charcoal-600">
              The business litigation process in Texas begins with a demand or
              petition filed in state district court or federal court, followed
              by discovery, mediation (required in most Dallas County courts),
              and trial or arbitration. Statute of limitations periods range
              from two to four years under Texas Civil Practice &amp; Remedies
              Code &sect;16.003 and &sect;16.004, depending on the claim type.
            </p>
          </FadeIn>

          {/* Claims in a 3-column masonry-like layout — not the 7/5 pattern */}
          <div className="mt-16 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {[
              {
                title: "Breach of contract",
                body: "Contract disputes are the core of commercial litigation. We handle claims from vendor agreements, service contracts, purchase orders, licensing deals, and joint ventures. CPRC \u00a738.001 allows the prevailing party to recover attorney\u2019s fees on most contract claims \u2014 a factor that shapes strategy from day one.",
              },
              {
                title: "Employment and non-compete disputes",
                body: "When a key employee leaves with clients or trade secrets, the damage is immediate. We enforce and defend non-compete agreements, non-solicitation clauses, and confidentiality provisions under Texas Business & Commerce Code \u00a715.50. Emergency TROs under CPRC \u00a765.011 can stop the harm before it becomes irreversible.",
              },
              {
                title: "Breach of fiduciary duty",
                body: "Officers, directors, partners, and agents owe fiduciary duties of loyalty and care under the Texas Business Organizations Code. When a fiduciary diverts company opportunities or engages in self-dealing, Texas courts allow actual damages, disgorgement of profits, and exemplary damages under CPRC \u00a741.003.",
              },
              {
                title: "Business torts",
                body: "Tortious interference, fraud, and conspiracy claims arise when a third party disrupts a business relationship or a counterparty uses deception. We prosecute and defend claims for tortious interference with existing contracts, statutory fraud under Texas Business & Commerce Code \u00a727.01, and civil conspiracy.",
              },
              {
                title: "Shareholder and partner disputes",
                body: "Ownership disputes can paralyze a company. We handle shareholder oppression claims, management authority disputes, contested distributions, and deadlocked boards. Under Texas Business Organizations Code \u00a711.314, courts can appoint a receiver and order judicial dissolution when governance has failed.",
              },
              {
                title: "Bankruptcy litigation and claims",
                body: "When a debtor or counterparty files for bankruptcy, the automatic stay halts all existing claims. We represent creditors in adversary proceedings, preference actions, and proof-of-claim disputes in the U.S. Bankruptcy Court for the Northern District of Texas. We pursue non-dischargeable debt claims under 11 U.S.C. \u00a7523.",
              },
              {
                title: "Business dissolution",
                body: "Voluntary winding down is straightforward. Contested dissolution is not. We handle judicial dissolution petitions under Texas BOC \u00a711.314, wind-up disputes, asset distribution disagreements, and post-dissolution claims. When partners cannot agree on how to split a business, we protect your share through receivership or trial.",
              },
              {
                title: "Collections and judgment enforcement",
                body: "Winning a judgment means nothing without enforcement. We pursue post-judgment discovery, writs of execution, turnover orders under CPRC \u00a731.002, and garnishment proceedings. For pre-suit collections, we send demand correspondence and negotiate structured payment resolutions.",
              },
              {
                title: "Injunctions and commercial restraining orders",
                body: "Some disputes cannot wait for trial. We file TROs and temporary injunctions under CPRC \u00a765.011, often obtaining hearings within 24 to 48 hours in Dallas County district courts. The same tools apply in federal court under Fed. R. Civ. P. 65.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={(i % 3) * 0.05}>
                <div className="break-inside-avoid rounded-lg border border-charcoal-200 bg-charcoal-50 p-6">
                  <h3 className="font-heading text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CLIENT TYPES + APPROACH — integrated horizontal band         */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Client types as a compact tag-style row */}
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Who we represent — and how we approach the case
            </h2>
            <p className="mt-4 max-w-2xl text-charcoal-600">
              We represent both plaintiffs and defendants — companies bringing
              claims and companies defending them. That dual perspective
              sharpens how we assess risk and prepare for trial.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Corporations & LLCs",
                "Partnerships & Joint Ventures",
                "Shareholders & Members",
                "Officers & Directors",
                "Executives & Key Employees",
                "Construction Companies",
                "Real Estate Ventures",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-charcoal-300 bg-white px-4 py-2 text-sm font-medium text-navy-900"
                >
                  {label}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Approach steps — full-width horizontal cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <FadeIn>
              <div className="rounded-lg border border-charcoal-200 bg-white p-8">
                <p className="text-4xl font-bold text-charcoal-200">01</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  Damage assessment and document preservation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  We identify the legal claims, quantify the exposure, and
                  issue litigation hold notices to preserve documents and
                  electronic records. In cases involving potential injunctive
                  relief, we prepare TRO applications in parallel so emergency
                  filings can happen within days.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-lg border border-charcoal-200 bg-white p-8">
                <p className="text-4xl font-bold text-charcoal-200">02</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  Strategy that accounts for the business cost
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Litigation is expensive. We model the realistic cost,
                  timeline, and probability of outcomes before recommending
                  any path. Sometimes a $300K claim is worth pursuing
                  aggressively. Sometimes a $3M claim is better settled in
                  mediation for 60 cents on the dollar. Our{" "}
                  <Link
                    href="/attorneys/michael-nixon"
                    className="font-medium text-gold-600 hover:text-gold-500"
                  >
                    litigation partners
                  </Link>{" "}
                  counsel clients on the real numbers.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-lg border border-charcoal-200 bg-white p-8">
                <p className="text-4xl font-bold text-charcoal-200">03</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  Aggressive execution in court and at the table
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  We try cases in Dallas County district courts, Collin
                  County, Tarrant County, the U.S. District Court for the
                  Northern District of Texas, and before AAA arbitration
                  panels. When mediation is the right path, we prepare for it
                  the same way — with a fully developed case.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* GEO block — standalone */}
          <FadeIn delay={0.15}>
            <div className="mt-12 rounded-lg border border-gold-200 bg-gold-100/40 p-6">
              <p className="text-sm font-semibold text-navy-900">
                How to handle a partnership dispute in Texas
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-charcoal-700">
                Partnership disputes in Texas are resolved through direct
                negotiation, mediation, arbitration, or litigation in state
                or federal court. The Texas Business Organizations Code
                governs partner fiduciary duties, dissolution rights, and
                receivership. Emergency injunctive relief under Texas Civil
                Practice &amp; Remedies Code &sect;65.011 can freeze assets
                and prevent dissipation while the dispute is pending.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ — alternating left/right                                 */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Frequently asked questions about business litigation in Texas
            </h2>
          </FadeIn>

          <div className="mt-14 space-y-12">
            {faqData.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div
                  className={`grid gap-6 lg:grid-cols-12 ${
                    i % 2 === 1 ? "lg:text-right" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-5 ${
                      i % 2 === 1 ? "lg:col-start-8" : ""
                    }`}
                  >
                    <h3 className="font-heading text-base font-bold text-navy-900">
                      {item.q}
                    </h3>
                  </div>
                  <div
                    className={`lg:col-span-7 ${
                      i % 2 === 1
                        ? "lg:col-start-1 lg:row-start-1 lg:text-left"
                        : ""
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-charcoal-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RELATED PRACTICE AREAS                                       */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Related legal services
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-12">
            <FadeIn className="md:col-span-6">
              <Link
                href="/practice-areas/construction-law"
                className="group block h-full rounded-lg border border-charcoal-200 bg-white p-8 transition-colors hover:border-gold-400"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Construction Law
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Many business disputes in the construction industry involve
                  contract claims, lien disputes, and payment demands that
                  require specialized{" "}
                  <span className="text-gold-600">
                    construction litigation counsel
                  </span>{" "}
                  familiar with Texas Property Code Chapter 53.
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1} className="md:col-span-3">
              <Link
                href="/practice-areas/corporate-transactions"
                className="group block h-full rounded-lg border border-charcoal-200 bg-white p-8 transition-colors hover:border-gold-400"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Corporate Transactions
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Well-drafted agreements prevent the disputes we litigate.
                  Proactive{" "}
                  <span className="text-gold-600">corporate counsel</span>{" "}
                  reduces risk from the start.
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="md:col-span-3">
              <Link
                href="/practice-areas/commercial-real-estate"
                className="group block h-full rounded-lg border border-charcoal-200 bg-white p-8 transition-colors hover:border-gold-400"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Commercial Real Estate
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Real estate partnership disputes and lease defaults that
                  escalate into litigation across the DFW metroplex.
                </p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA BAND                                                     */}
      {/* ============================================================ */}
      <section className="bg-navy-900 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Speak with a business litigation attorney in Dallas about
                  your dispute
                </h2>
                <p className="mt-4 text-charcoal-300">
                  Tell us about your situation. We respond within one business
                  day. No obligation.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300"
                >
                  Speak With an Attorney
                </Link>
                <a
                  href="tel:9725037000"
                  className="text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  (972)&nbsp;503-7000
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
