"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Script from "next/script";
import AccordionFAQ from "@/components/AccordionFAQ";

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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Litigation",
  description:
    "Business litigation services including breach of contract, partner disputes, fiduciary claims, shareholder conflicts, and injunctions in Dallas, Texas.",
  provider: {
    "@type": "LegalService",
    name: "Nixon Jach Hubbard",
    url: "https://njh-law.com",
  },
  areaServed: { "@type": "State", name: "Texas" },
  url: "https://njh-law.com/practice-areas/business-litigation",
};

export default function BusinessLitigationPage() {
  return (
    <>
      <Script
        id="faq-schema-bl"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema-bl"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />

      {/* HERO */}
      <section className="bg-navy-950 py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-8" />
            <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Business Litigation Attorneys in Dallas, Texas
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-300">
              Business litigation covers the disputes that arise between
              companies, partners, shareholders, and counterparties when
              commercial relationships break down. In Texas, these claims are
              governed by the Texas Civil Practice &amp; Remedies Code, the
              Texas Business Organizations Code, and federal rules in the
              U.S. District Court for the Northern District of Texas. We
              represent Dallas businesses on both sides of commercial
              disputes — from emergency injunctions to trial and appeal.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-6" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Commercial disputes we litigate for Dallas businesses
            </h2>
            <p className="mt-6 max-w-3xl text-charcoal-600">
              The business litigation process in Texas begins with a demand or
              petition filed in state district court or federal court, followed
              by discovery, mediation (required in most Dallas County courts),
              and trial or arbitration. Statute of limitations periods range
              from two to four years under Texas Civil Practice &amp; Remedies
              Code &sect;16.003 and &sect;16.004, depending on the claim type.
            </p>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Breach of contract", body: "Contract disputes are the core of commercial litigation. We handle claims from vendor agreements, service contracts, purchase orders, licensing deals, and joint ventures. CPRC \u00a738.001 allows the prevailing party to recover attorney\u2019s fees on most contract claims \u2014 a factor that shapes strategy from day one." },
              { title: "Employment and non-compete disputes", body: "When a key employee leaves with clients or trade secrets, the damage is immediate. We enforce and defend non-compete agreements, non-solicitation clauses, and confidentiality provisions under Texas Business & Commerce Code \u00a715.50. Emergency TROs under CPRC \u00a765.011 can stop the harm before it becomes irreversible." },
              { title: "Breach of fiduciary duty", body: "Officers, directors, partners, and agents owe fiduciary duties of loyalty and care under the Texas Business Organizations Code. When a fiduciary diverts company opportunities or engages in self-dealing, Texas courts allow actual damages, disgorgement of profits, and exemplary damages under CPRC \u00a741.003." },
              { title: "Business torts", body: "Tortious interference, fraud, and conspiracy claims arise when a third party disrupts a business relationship or a counterparty uses deception. We prosecute and defend claims for tortious interference with existing contracts, statutory fraud under Texas Business & Commerce Code \u00a727.01, and civil conspiracy." },
              { title: "Shareholder and partner disputes", body: "Ownership disputes can paralyze a company. We handle shareholder oppression claims, management authority disputes, contested distributions, and deadlocked boards. Under Texas Business Organizations Code \u00a711.314, courts can appoint a receiver and order judicial dissolution when governance has failed." },
              { title: "Bankruptcy litigation and claims", body: "When a debtor or counterparty files for bankruptcy, the automatic stay halts all existing claims. We represent creditors in adversary proceedings, preference actions, and proof-of-claim disputes in the U.S. Bankruptcy Court for the Northern District of Texas." },
              { title: "Business dissolution", body: "Voluntary winding down is straightforward. Contested dissolution is not. We handle judicial dissolution petitions under Texas BOC \u00a711.314, wind-up disputes, asset distribution disagreements, and post-dissolution claims. The process typically begins with a petition to the district court showing that the entity\u2019s management is deadlocked, that those in control are acting illegally or fraudulently, or that corporate assets are being wasted. Under BOC \u00a711.404, the court can order a full accounting and appoint a receiver to manage the wind-up." },
              { title: "Collections and judgment enforcement", body: "Winning a judgment means nothing without enforcement. We pursue post-judgment discovery, writs of execution, turnover orders under CPRC \u00a731.002, and garnishment proceedings. Texas law allows turnover receivers to seize nonexempt assets that cannot be attached by ordinary process. We also domesticate out-of-state judgments under the Uniform Enforcement of Foreign Judgments Act, CPRC Chapter 35, and pursue fraudulent transfer claims under the Texas Uniform Voidable Transactions Act, Business & Commerce Code Chapter 24." },
              { title: "Injunctions and commercial restraining orders", body: "Some disputes cannot wait for trial. We file TROs and temporary injunctions under CPRC \u00a765.011, often obtaining hearings within 24 to 48 hours in Dallas County district courts. A TRO applicant must show a probable right to recovery and a probable, imminent, and irreparable injury. Common scenarios include asset dissipation by a fiduciary, trade secret misappropriation after an employee departure, and violations of restrictive covenants. We also defend businesses served with TROs and prepare for the temporary injunction hearing that follows within 14 days." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={(i % 3) * 0.05}>
                <div className="card-hover flex h-full flex-col rounded-lg border border-charcoal-200 bg-charcoal-50 p-8">
                  <h3 className="font-heading text-base font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="max-w-2xl font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Facing a business dispute that requires immediate action?
              </h2>
              <p className="text-charcoal-300">We handle emergency TROs and injunctions within 24 to 48 hours.</p>
              <Link href="/contact" className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300">
                Speak With an Attorney
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OUR APPROACH + CLIENT TYPES */}
      <section className="bg-charcoal-50 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Who we represent — and how we approach the case
            </h2>
            <p className="mt-5 max-w-2xl text-charcoal-600">
              We represent both plaintiffs and defendants — companies bringing
              claims and companies defending them. That dual perspective
              sharpens how we assess risk and prepare for trial.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Corporations & LLCs", "Partnerships & Joint Ventures", "Shareholders & Members", "Officers & Directors", "Executives & Key Employees", "Construction Companies", "Real Estate Ventures"].map((label) => (
                <span key={label} className="rounded-full border border-charcoal-300 bg-white px-5 py-2.5 text-sm font-medium text-navy-900">{label}</span>
              ))}
            </div>
          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              { num: "01", title: "Damage assessment and document preservation", desc: "We identify the legal claims, quantify the exposure, and issue litigation hold notices to preserve documents and electronic records. In cases involving potential injunctive relief, we prepare TRO applications in parallel so emergency filings can happen within days." },
              { num: "02", title: "Strategy that accounts for the business cost", desc: "Litigation is expensive. We model the realistic cost, timeline, and probability of outcomes before recommending any path." },
              { num: "03", title: "Aggressive execution in court and at the table", desc: "We try cases in Dallas County district courts, Collin County, Tarrant County, the U.S. District Court for the Northern District of Texas, and before AAA arbitration panels." },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <div className="card-hover rounded-lg border border-charcoal-200 bg-white p-10">
                  <p className="text-4xl font-bold text-charcoal-200">{item.num}</p>
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                    {item.desc}
                    {item.num === "02" && (
                      <> Our{" "}
                        <Link href="/attorneys/michael-nixon" className="font-medium text-gold-600 hover:text-gold-500">
                          litigation partners
                        </Link>{" "}
                        counsel clients on the real numbers.
                      </>
                    )}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="mt-14 rounded-lg border border-navy-600/20 bg-navy-600/5 p-8">
              <p className="text-sm font-semibold text-navy-900">How to handle a partnership dispute in Texas</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal-700">
                Partnership disputes in Texas are resolved through direct negotiation, mediation, arbitration, or litigation in state or federal court. The Texas Business Organizations Code governs partner fiduciary duties, dissolution rights, and receivership. Emergency injunctive relief under Texas Civil Practice &amp; Remedies Code &sect;65.011 can freeze assets and prevent dissipation while the dispute is pending.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMMON SCENARIOS */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-6" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">When you need a business litigation attorney</h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              { title: "Your business partner is diverting company funds", desc: "Your CFO discovers unauthorized transfers to an entity your partner controls. The partner stops returning calls. You need emergency injunctive relief to freeze accounts and preserve assets before more money disappears." },
              { title: "A key employee leaves with your client list", desc: "Within a week of their departure, three major accounts receive solicitation emails from the employee\u2019s new company. Your non-compete may need emergency enforcement under Texas Business & Commerce Code \u00a715.50." },
              { title: "A minority shareholder blocks a critical capital call", desc: "Your development project requires funding within 45 days, but a shareholder is blocking the vote. The shareholder agreement lacks a deadlock-resolution mechanism. You need either a negotiated resolution or court intervention under the Texas BOC." },
              { title: "A vendor delivers $1.8M in defective materials", desc: "The materials fail specification testing. The vendor refuses to replace or refund. Your project schedule cannot absorb a 60-day delay. You need breach of contract and warranty claims filed immediately to recover costs and keep the project moving." },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="card-hover rounded-lg border border-charcoal-200 bg-charcoal-50 p-10">
                  <h3 className="font-heading text-base font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Accordion */}
      <section className="bg-charcoal-50 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <AccordionFAQ items={faqData} heading="Frequently asked questions about business litigation in Texas" />
          </FadeIn>
        </div>
      </section>

      {/* RELATED PRACTICE AREAS */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Related legal services</h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-12">
            <FadeIn className="md:col-span-6">
              <Link href="/practice-areas/construction-law" className="card-hover group block h-full rounded-lg border border-charcoal-200 bg-charcoal-50 p-10 transition-colors hover:border-navy-600 hover:bg-white">
                <h3 className="font-heading text-lg font-bold text-navy-900">Construction Law</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">Many business disputes in the construction industry involve contract claims, lien disputes, and payment demands that require specialized <span className="text-gold-600">construction litigation counsel</span> familiar with Texas Property Code Chapter 53.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1} className="md:col-span-3">
              <Link href="/practice-areas/corporate-transactions" className="card-hover group block h-full rounded-lg border border-charcoal-200 bg-charcoal-50 p-10 transition-colors hover:border-navy-600 hover:bg-white">
                <h3 className="font-heading text-lg font-bold text-navy-900">Corporate Transactions</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">Well-drafted agreements prevent the disputes we litigate. Proactive <span className="text-gold-600">corporate counsel</span> reduces risk from the start.</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} className="md:col-span-3">
              <Link href="/practice-areas/commercial-real-estate" className="card-hover group block h-full rounded-lg border border-charcoal-200 bg-charcoal-50 p-10 transition-colors hover:border-navy-600 hover:bg-white">
                <h3 className="font-heading text-lg font-bold text-navy-900">Commercial Real Estate</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">Real estate partnership disputes and lease defaults that escalate into litigation across the DFW metroplex.</p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-navy-900 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="divider-accent mb-6" />
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">Speak with a business litigation attorney in Dallas about your dispute</h2>
                <p className="mt-5 text-charcoal-300">Tell us about your situation. We respond within one business day. No obligation.</p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300">Speak With an Attorney</Link>
                <a href="tel:9725037000" className="text-sm font-medium text-charcoal-200 transition-colors hover:text-white">(972)&nbsp;503-7000</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
