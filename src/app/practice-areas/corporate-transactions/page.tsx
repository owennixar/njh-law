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
    q: "Should I form an LLC or S-Corp in Texas?",
    a: "It depends on your tax situation, number of owners, and growth plans. A Texas LLC under the BOC offers flexible management, pass-through taxation, and no member limits. An S-Corp election (IRS Form 2553) can reduce self-employment tax for owners earning above roughly $80,000 in net income. However, S-Corps impose restrictions: 100 shareholders maximum, one stock class, and mandatory payroll for active owners. Most DFW businesses start as an LLC and add S-Corp tax treatment later.",
  },
  {
    q: "What should a joint venture agreement include?",
    a: "Seven core areas: (1) capital contributions, (2) management authority, (3) profit and loss allocation, (4) exit and buy-out provisions, (5) non-compete terms, (6) dispute resolution, and (7) dissolution triggers. Under the Texas BOC, a JV structured as a partnership or LLC carries default rules. Those defaults rarely match the parties\u2019 intent. The agreement must override them explicitly.",
  },
  {
    q: "How much does it cost to form a business entity in Texas?",
    a: "The Texas Secretary of State filing fee is $300 for an LLC (certificate of formation) and $300 for a corporation. Annual franchise tax reporting is required for all Texas entities, though entities below the no-tax-due threshold (currently $2.47 million in total revenue) owe no tax. Legal fees for entity formation, operating agreements, and initial governance documents typically range from $1,500 to $5,000 depending on the complexity of the ownership structure.",
  },
  {
    q: "Do I need an attorney to draft a shareholder agreement?",
    a: "For any company with more than one owner, yes. A shareholder agreement governs what happens when owners disagree, when someone wants to leave, or when someone dies or becomes disabled. Without one, the Texas BOC default rules apply \u2014 and those defaults rarely match what the owners actually intended. Key provisions include transfer restrictions, drag-along and tag-along rights, valuation methods, and non-compete obligations. The cost of drafting is a fraction of the cost of litigating a deadlock.",
  },
  {
    q: "What is a buy-sell agreement and why do I need one?",
    a: "A buy-sell agreement controls what happens to ownership interests when a triggering event occurs \u2014 death, disability, retirement, or voluntary exit. It sets the price (or valuation method), payment terms, and timeline. Without one, a deceased owner\u2019s interest may pass to uninvolved heirs. A departing partner may demand a price the company cannot afford. Texas courts enforce buy-sell agreements under standard contract law. They are the single most important governance document for multi-owner businesses.",
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
export default function CorporateTransactionsPage() {
  return (
    <>
      <Script
        id="faq-schema-ct"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      {/* ============================================================ */}
      {/* HERO — minimal, with journey preview                         */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Business Formation &amp; Corporate Transaction Attorneys in Dallas
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* GEO extractable block #1 — definition */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-300">
              A business formation attorney Dallas companies rely on builds
              the legal foundation for new and growing businesses. That
              covers entity selection, filing under the Texas Business
              Organizations Code, shareholder agreements, joint ventures, and
              ongoing contract drafting. The right structure protects owners,
              reduces tax exposure, and prevents the disputes that end
              partnerships.
            </p>
          </FadeIn>

          {/* Journey preview — horizontal step indicators */}
          <FadeIn delay={0.2}>
            <div className="mt-14 hidden items-center gap-0 lg:flex">
              {[
                "Entity Selection",
                "Formation & Filing",
                "Governance Documents",
                "Contracts & Agreements",
                "Ongoing Compliance",
              ].map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-navy-950">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-charcoal-300">
                      {step}
                    </span>
                  </div>
                  {i < 4 && (
                    <div className="mx-4 h-px w-8 bg-navy-700" />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE FORMATION JOURNEY — alternating left/right blocks        */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              The business formation journey — from entity selection to
              compliance
            </h2>
            {/* GEO extractable block #2 — "do I need a lawyer to form an LLC in Texas" */}
            <p className="mt-6 max-w-3xl text-charcoal-600">
              Forming an LLC in Texas requires filing a certificate of formation
              with the Texas Secretary of State under the Texas Business
              Organizations Code, paying the $300 filing fee, and creating an
              operating agreement that governs ownership, management, and
              distributions. While filing alone is simple, a business formation
              attorney ensures the governance documents match the owners&apos;
              actual intent and protect against future disputes.
            </p>
          </FadeIn>

          {/* Alternating journey steps */}
          <div className="mt-20 space-y-24">
            {/* Step 1 — left-aligned */}
            <FadeIn>
              <div className="grid items-start gap-10 lg:grid-cols-12">
                <div className="lg:col-span-2">
                  <span className="font-heading text-6xl font-bold text-charcoal-100">
                    01
                  </span>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-heading text-xl font-bold text-navy-900">
                    Entity selection — LLC, C-Corp, S-Corp, or partnership
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                    <strong>The entity type determines everything</strong> that
                    follows — liability protection, tax treatment, management
                    structure, and exit options. Texas LLCs formed under BOC
                    Chapter 101 offer the most flexibility for small and
                    mid-size businesses. C-Corps under BOC Chapter 21 suit
                    companies planning to raise institutional capital or go
                    public. S-Corp election reduces self-employment tax but
                    limits ownership to 100 U.S. shareholders with one class of
                    stock.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                    We model the tax impact of each structure with your CPA,
                    assess liability exposure based on your industry, and
                    recommend the entity type that fits your five-year plan —
                    not just your first year.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-lg border border-charcoal-200 bg-charcoal-50 p-6">
                    <p className="text-xs font-semibold tracking-wider text-gold-500 uppercase">
                      Common question
                    </p>
                    <p className="mt-2 font-heading text-sm font-bold text-navy-900">
                      LLC vs S-Corp in Texas — which is better?
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal-500">
                      Most DFW businesses start as an LLC and elect S-Corp tax
                      status later when owner income exceeds roughly $80K. The
                      LLC provides the legal structure; the S-Corp election
                      provides the tax benefit. They are not mutually exclusive.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 2 — right-aligned */}
            <FadeIn>
              <div className="grid items-start gap-10 lg:grid-cols-12">
                <div className="order-1 lg:order-2 lg:col-span-2 lg:col-start-11 lg:text-right">
                  <span className="font-heading text-6xl font-bold text-charcoal-100">
                    02
                  </span>
                </div>
                <div className="order-2 lg:order-1 lg:col-span-10 lg:col-start-1">
                  <h3 className="font-heading text-xl font-bold text-navy-900">
                    Formation and filing with the Texas Secretary of State
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal-600">
                    <strong>Filing the certificate of formation</strong> is the
                    simplest part of the process. We draft and file formation
                    documents under the Texas Business Organizations Code,
                    obtain the EIN from the IRS, register for the Texas
                    franchise tax, and file initial reports. For companies
                    operating in multiple states, we handle foreign entity
                    qualifications in each jurisdiction. The filing fee is $300
                    for both LLCs and corporations in Texas.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 3 — left-aligned */}
            <FadeIn>
              <div className="grid items-start gap-10 lg:grid-cols-12">
                <div className="lg:col-span-2">
                  <span className="font-heading text-6xl font-bold text-charcoal-100">
                    03
                  </span>
                </div>
                <div className="lg:col-span-10">
                  <h3 className="font-heading text-xl font-bold text-navy-900">
                    Governance documents — operating agreements, bylaws, and
                    shareholder agreements
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-charcoal-600">
                    <strong>The governance documents are the real
                    work.</strong> An LLC operating agreement under BOC
                    &sect;101.052 controls management authority, profit
                    distributions, transfer restrictions, and what happens when
                    an owner dies, becomes disabled, or wants out. Corporate
                    bylaws and shareholder agreements serve the same function
                    for C-Corps and S-Corps. Without these documents, the BOC
                    default rules apply — and those defaults almost never match
                    what the owners actually intended.
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal-600">
                    Not every business needs the same level of governance
                    complexity. A two-person LLC with equal ownership needs a
                    strong buy-sell and deadlock provision. A five-member
                    investor group needs weighted voting, distribution waterfalls,
                    and drag-along rights. Over-documenting a simple structure
                    wastes money. Under-documenting a complex one invites
                    litigation. We scale the documents to the actual risk.
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal-600">
                    We draft buy-sell agreements, tag-along provisions,
                    valuation formulas, non-compete obligations tied to
                    ownership, and deadlock-resolution mechanisms. Our{" "}
                    <Link
                      href="/attorneys/anthony-jach"
                      className="font-medium text-gold-600 hover:text-gold-500"
                    >
                      corporate attorneys
                    </Link>{" "}
                    build these documents from what we see in{" "}
                    <Link
                      href="/practice-areas/business-litigation"
                      className="font-medium text-gold-600 hover:text-gold-500"
                    >
                      business litigation
                    </Link>{" "}
                    — the disputes that happen when governance documents are
                    missing or poorly drafted.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 4 — right-aligned, with scenario */}
            <FadeIn>
              <div className="grid items-start gap-10 lg:grid-cols-12">
                <div className="order-1 lg:order-2 lg:col-span-2 lg:col-start-11 lg:text-right">
                  <span className="font-heading text-6xl font-bold text-charcoal-100">
                    04
                  </span>
                </div>
                <div className="order-2 lg:order-1 lg:col-span-6 lg:col-start-1">
                  <h3 className="font-heading text-xl font-bold text-navy-900">
                    Contract drafting and negotiation
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                    <strong>Once the entity exists, it needs
                    contracts.</strong> We draft and negotiate the agreements
                    that govern how your business operates day to day — sales
                    agreements, procurement contracts, distribution and
                    licensing deals, franchise agreements, and vendor terms.
                    Every contract is drafted for Texas enforceability. We
                    focus on the provisions Texas courts scrutinize most:
                    non-compete scope under Business &amp; Commerce Code
                    &sect;15.50, indemnity limitations, and fee-shifting
                    clauses under CPRC &sect;38.001.
                  </p>
                </div>
                <div className="order-3 lg:col-span-4 lg:col-start-7">
                  <div className="rounded-lg border border-charcoal-200 bg-charcoal-50 p-6">
                    <p className="text-xs font-semibold tracking-wider text-gold-500 uppercase">
                      Scenario
                    </p>
                    <p className="mt-2 font-heading text-sm font-bold leading-snug text-navy-900">
                      When two construction companies form a joint venture for a
                      $15M municipal project in North Texas
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal-500">
                      Each party contributes different capabilities — one holds
                      the bonding capacity, the other has the local
                      relationships. We structure the JV as a Texas LLC under
                      BOC Chapter 101, draft the JV agreement with clear profit
                      splits, decision authority, and an exit mechanism tied to
                      project milestones. The JV wins the bid, completes the
                      project, and dissolves cleanly.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 5 — full-width */}
            <FadeIn>
              <div className="grid items-start gap-10 lg:grid-cols-12">
                <div className="lg:col-span-2">
                  <span className="font-heading text-6xl font-bold text-charcoal-100">
                    05
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-heading text-xl font-bold text-navy-900">
                    Executive employment and compensation
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                    <strong>Key-person agreements protect both the company
                    and the executive.</strong> We draft employment agreements,
                    equity compensation plans, bonus structures, and severance
                    provisions. Non-compete and non-solicitation clauses must
                    comply with Texas Business &amp; Commerce Code &sect;15.50
                    to be enforceable.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                    When a Dallas GC&apos;s top project manager leaves to join
                    a competitor, the non-compete must be reasonable in scope
                    and tied to legitimate business interests. We draft these
                    clauses to survive Texas court scrutiny from the start.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-heading text-xl font-bold text-navy-900">
                    Ongoing compliance and entity maintenance
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                    <strong>Texas requires annual franchise tax
                    reports</strong> for all registered entities. We handle
                    annual filings, registered agent services, ownership
                    changes, amendments to formation documents, and mergers or
                    conversions under BOC Chapter 10. Keeping the corporate
                    veil intact requires proper documentation — meeting
                    minutes, written consents, and capital account records.
                    Neglect the formalities and the liability protection
                    disappears.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CLIENT TYPES — horizontal with connecting lines              */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Businesses we form and advise across the DFW metroplex
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-navy-800 bg-navy-800 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Startups & New Ventures",
                desc: "Entity selection, formation, initial governance, founder agreements, and first commercial contracts.",
              },
              {
                label: "Established Businesses",
                desc: "Restructuring, ownership changes, buy-sell agreements, and contract renegotiation for growing companies.",
              },
              {
                label: "Joint Ventures",
                desc: "JV structuring, contribution agreements, management provisions, and project-based dissolution planning.",
              },
              {
                label: "Franchise Operators",
                desc: "Franchise agreement review, multi-unit entity structuring, and compliance with Texas franchise disclosure rules.",
              },
            ].map((client, i) => (
              <FadeIn key={client.label} delay={i * 0.06}>
                <div className="h-full bg-navy-900 p-8">
                  <p className="font-heading text-base font-bold text-gold-400">
                    {client.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-300">
                    {client.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* GEO extractable block #3 — "what is a joint venture agreement" */}
          <FadeIn delay={0.15}>
            <div className="mt-12 rounded-lg border border-gold-400/20 bg-navy-900 p-6">
              <p className="text-sm font-semibold text-gold-300">
                What is a joint venture agreement?
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-charcoal-400">
                A joint venture agreement is a contract between two or more
                businesses that governs a shared project or business activity
                without forming a permanent entity. In Texas, joint ventures
                are typically structured as LLCs or partnerships under the
                Texas Business Organizations Code. The agreement defines
                capital contributions, management authority, profit
                allocation, and exit provisions for each participant.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ — side-by-side question/answer cards                     */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Frequently asked questions about business formation in Texas
            </h2>
          </FadeIn>

          <div className="mt-14 space-y-6">
            {faqData.map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="grid overflow-hidden rounded-lg border border-charcoal-200 lg:grid-cols-12">
                  <div className="bg-navy-900 p-6 lg:col-span-4">
                    <h3 className="font-heading text-base font-bold leading-snug text-white">
                      {item.q}
                    </h3>
                  </div>
                  <div className="bg-white p-6 lg:col-span-8">
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
      {/* RELATED PRACTICE AREAS — inline link style                   */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Related legal services
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <FadeIn>
              <Link
                href="/practice-areas/business-litigation"
                className="group block"
              >
                <p className="font-heading text-lg font-bold text-navy-900 transition-colors group-hover:text-gold-600">
                  Business Litigation &rarr;
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  Well-drafted governance documents prevent the disputes we
                  litigate. When prevention fails, our{" "}
                  <span className="text-gold-600">
                    business litigation attorneys
                  </span>{" "}
                  handle shareholder conflicts, fiduciary claims, and contract
                  disputes in Dallas County courts.
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Link
                href="/practice-areas/commercial-real-estate"
                className="group block"
              >
                <p className="font-heading text-lg font-bold text-navy-900 transition-colors group-hover:text-gold-600">
                  Commercial Real Estate &rarr;
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  Real estate transactions require entity structuring, joint
                  venture agreements, and investor documentation. Our{" "}
                  <span className="text-gold-600">
                    commercial real estate practice
                  </span>{" "}
                  works alongside our corporate team across the DFW metroplex.
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link
                href="/practice-areas/construction-law"
                className="group block"
              >
                <p className="font-heading text-lg font-bold text-navy-900 transition-colors group-hover:text-gold-600">
                  Construction Law &rarr;
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  Construction companies need proper entity structure and
                  contractor agreements before bidding their first project. Our{" "}
                  <span className="text-gold-600">
                    construction attorneys
                  </span>{" "}
                  handle the operational legal work that follows formation.
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
                  Get strategic guidance from a business formation attorney in
                  Dallas
                </h2>
                <p className="mt-4 text-charcoal-300">
                  Tell us about your business. We respond within one business
                  day. No obligation.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300"
                >
                  Get Strategic Guidance
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
