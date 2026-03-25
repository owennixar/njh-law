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
    q: "Do I need an attorney for a commercial real estate purchase in Texas?",
    a: "Yes. Texas does not require a buyer\u2019s attorney at closing, but the risk is substantial without one. Commercial transactions involve title commitments, survey exceptions, environmental reports, and zoning issues that create major liability if missed. A commercial real estate attorney reviews the purchase agreement, negotiates due diligence terms, and ensures the title policy covers all known risks.",
  },
  {
    q: "What should I look for in a commercial lease before signing?",
    a: "Focus on five areas: rent escalation structure, CAM reconciliation caps, assignment rights, maintenance obligations, and default-and-cure provisions. Texas Property Code Chapter 92 does not cover commercial leases. Every term is negotiable. One overlooked clause \u2014 like an uncapped operating expense pass-through \u2014 can cost tens of thousands per year over a 10-year term.",
  },
  {
    q: "How does due diligence work in a commercial real estate transaction?",
    a: "Due diligence is the buyer\u2019s investigation period, typically 30 to 60 days on commercial deals in Dallas. During this window, you review the title commitment, survey, environmental Phase I assessment, existing leases, financial statements, service contracts, and zoning compliance. Under most Texas purchase agreements, the buyer can terminate for any reason during the due diligence period and recover the earnest money deposit.",
  },
  {
    q: "What are common disputes in commercial real estate development?",
    a: "The most frequent disputes involve construction cost overruns, contractor payment claims, zoning challenges, JV disagreements, and title defects found after closing. In the DFW market, disputes over development agreements and TIF obligations are increasingly common. Cities now impose more conditions on new commercial projects, creating friction that often requires legal intervention.",
  },
  {
    q: "Can a landlord terminate a commercial lease early in Texas?",
    a: "Only if the lease grants that right or the tenant has breached a material term. Texas law does not provide a general right of early termination for commercial landlords. The lease must contain a specific termination clause, and the landlord must follow the notice-and-cure procedures exactly as written. Under Texas Property Code \u00a793.002, certain requirements also apply to commercial tenancy lockouts and lien enforcement against tenant property.",
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
  name: "Commercial Real Estate Law",
  description:
    "Commercial real estate legal services including acquisitions, dispositions, leasing, development, and financing for developers, investors, and landlords in Dallas, Texas.",
  provider: {
    "@type": "LegalService",
    name: "Nixon Jach Hubbard",
    url: "https://njh-law.com",
  },
  areaServed: { "@type": "State", name: "Texas" },
  url: "https://njh-law.com/practice-areas/commercial-real-estate",
};

export default function CommercialRealEstatePage() {
  return (
    <>
      <Script
        id="faq-schema-cre"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema-cre"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />

      {/* HERO */}
      <section className="bg-navy-950 py-32 lg:py-44">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold tracking-wider text-charcoal-400 uppercase">
              Acquisitions &middot; Development &middot; Leasing &middot; Financing
            </p>
            <div className="divider-accent mt-6 mb-6" />
            <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Commercial Real Estate Attorneys in Dallas, Texas
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-300">
              A commercial real estate attorney Dallas developers and investors
              rely on handles the legal structure behind acquisitions,
              dispositions, leasing, development, and financing of commercial
              property. In Texas, these transactions are governed by the Texas
              Property Code, county recording requirements, and a web of
              zoning, environmental, and title regulations that vary by
              municipality across the DFW metroplex.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300">
                Schedule a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DEAL TYPES + CLIENT TYPES */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-6" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Commercial real estate transactions and disputes we handle
            </h2>
            <p className="mt-6 max-w-3xl text-charcoal-600">
              A commercial real estate attorney in Texas handles purchase and
              sale agreements, title review, lease negotiation, financing
              documents, entity structuring, and dispute resolution for
              commercial properties. The scope covers office, retail, industrial,
              and multi-family projects — from initial letter of intent through
              closing and post-closing obligations under the Texas Property Code.
            </p>
          </FadeIn>

          <div className="mt-20 grid gap-16 lg:grid-cols-12">
            <div className="space-y-14 lg:col-span-7">
              {[
                { title: "Acquisition and disposition", body: "We draft and negotiate purchase and sale agreements, structure due diligence timelines, review title commitments and survey exceptions, and coordinate closings with title companies across Texas. On dispositions, we handle seller disclosures, negotiate representations and warranties, and structure 1031 exchanges under IRC \u00a71031 to defer capital gains." },
                { title: "Commercial development", body: "Ground-up development requires legal coordination across zoning, entitlements, development agreements, tax abatements, and construction contracts. We work with developers on PID financing, TIF agreements with North Texas municipalities, and Chapter 380/381 economic development incentives under the Texas Local Government Code." },
                { title: "Construction contracts for real estate projects", body: "Development and construction are inseparable. Our construction law practice works alongside our real estate team on owner-side GMP contracts, design-build agreements, AIA documents, lien waivers, and retainage management. Developers get integrated counsel instead of two firms that do not talk to each other.", link: { href: "/practice-areas/construction-law", label: "construction law practice" } },
                { title: "Commercial leasing \u2014 office, retail, industrial", body: "Lease economics drive property value. We draft and negotiate leases across every major property type in DFW. Key issues include CAM reconciliation, operating expense caps, TI allowances, co-tenancy clauses, and exclusive use restrictions. Texas commercial leases fall outside Property Code Chapter 92, so every protection must be written into the document." },
                { title: "Real estate financing", body: "Loan documents require the same scrutiny as the purchase agreement. We represent borrowers in construction loan closings, permanent financing, mezzanine debt structuring, and loan modifications. Texas has specific requirements for deeds of trust, lien priority under Texas Property Code Chapter 53, and non-judicial foreclosure procedures under \u00a751.002." },
                { title: "Workouts and collateral enforcement", body: "When a project underperforms, the lender relationship shifts from cooperative to adversarial. We represent borrowers and guarantors in loan workouts, forbearance negotiations, deed-in-lieu transactions, and receivership proceedings." },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.05}>
                  <h3 className="font-heading text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                    {item.link ? (
                      <>
                        <strong>Development and construction are inseparable.</strong>{" "}Our{" "}
                        <Link href={item.link.href} className="font-medium text-gold-600 hover:text-gold-500">{item.link.label}</Link>{" "}
                        works alongside our real estate team on owner-side GMP contracts, design-build agreements, AIA documents, lien waivers, and retainage management. Developers get integrated counsel instead of two firms that do not talk to each other.
                      </>
                    ) : (
                      <><strong>{item.body.slice(0, item.body.indexOf(".") + 1)}</strong>{item.body.slice(item.body.indexOf(".") + 1)}</>
                    )}
                  </p>
                </FadeIn>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <FadeIn>
                  <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">Clients we represent</h3>
                </FadeIn>
                <div className="mt-6 space-y-4">
                  {[
                    { label: "Developers", desc: "Ground-up development, entitlements, PID financing, TIF agreements, and construction oversight." },
                    { label: "Investors", desc: "Acquisition due diligence, entity structuring, 1031 exchanges, and disposition planning." },
                    { label: "Landlords", desc: "Lease drafting, tenant default enforcement, CAM reconciliation, and property management." },
                    { label: "Tenants", desc: "Lease review, rent escalation analysis, TI allowance negotiation, and co-tenancy protections." },
                    { label: "Retail Operators", desc: "Exclusive use clauses, percentage rent structures, signage rights, and multi-location programs." },
                    { label: "Construction Companies", desc: "Owner-side contracts, lien waiver management, and disputes integrated with our construction practice." },
                    { label: "Multi-Family Developers", desc: "Apartment development, financing, condominium regime creation under Texas Property Code Chapter 81." },
                  ].map((client, i) => (
                    <FadeIn key={client.label} delay={i * 0.04}>
                      <div className="card-hover rounded border border-charcoal-200 bg-charcoal-50 px-6 py-5">
                        <p className="text-sm font-bold text-navy-900">{client.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-charcoal-500">{client.desc}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="max-w-2xl font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Discuss your real estate transaction with an experienced Dallas commercial real estate attorney
              </h2>
              <p className="text-charcoal-300">From LOI through post-closing. We respond within one business day.</p>
              <Link href="/contact" className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300">
                Discuss Your Transaction
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-navy-950 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How we approach commercial real estate transactions in Dallas
            </h2>
            <p className="mt-5 max-w-2xl text-charcoal-400">
              Our{" "}
              <Link href="/attorneys/anthony-jach" className="font-medium text-charcoal-200 hover:text-white">real estate attorneys</Link>{" "}
              manage every phase of the deal — from LOI through post-closing compliance. We scale the work to the risk.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-16 lg:grid-cols-12">
            <div className="space-y-12 border-l-2 border-navy-600/30 pl-8 lg:col-span-7">
              {[
                { step: "01", title: "Deal structure and risk assessment", desc: "Before the LOI is signed, we evaluate the deal structure \u2014 entity selection under the Texas Business Organizations Code, tax implications, liability exposure, and financing contingencies." },
                { step: "02", title: "Due diligence management", desc: "We coordinate title review, survey analysis, environmental reports, zoning confirmation, lease audits, and estoppel certificate collection. We flag issues that affect value, insurability, or lender requirements before they become closing obstacles." },
                { step: "03", title: "Negotiation and closing", desc: "We negotiate the final contract terms, resolve title objections, coordinate lender document execution, and manage the closing process. On development deals, this includes construction loan closings, contractor lien waivers, and recorded development agreements." },
                { step: "04", title: "Post-closing and ongoing counsel", desc: "Closing is not the end. We handle tenant lease-up, property management agreements, CAM reconciliation disputes, and disposition planning." },
              ].map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.08}>
                  <div className="relative">
                    <div className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-gold-400" />
                    <p className="text-xs font-semibold tracking-wider text-white uppercase">Step {item.step}</p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-300">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="rounded-lg border border-navy-800 bg-navy-900 p-10">
                  <p className="text-sm font-semibold tracking-wider text-white uppercase">Scenario</p>
                  <p className="mt-4 font-heading text-lg font-bold leading-snug text-white">
                    When a title search reveals an unresolved easement on a $9M retail acquisition in North Texas
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-charcoal-300">
                    Three weeks before closing, the title commitment shows a utility easement that crosses the planned building pad. The seller says it was never enforced. The lender says it is an unacceptable exception.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-300">
                    We trace the easement to a 1987 deed, confirm the utility company still holds rights, and negotiate a partial release and relocation agreement. The buyer closes on schedule. The lender funds. The seller avoids a price reduction.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="mt-6 rounded-lg border border-navy-600/20 bg-navy-900 p-8">
                  <p className="text-sm font-semibold text-charcoal-200">How to handle a real estate dispute in Dallas</p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-400">
                    Commercial real estate disputes in Dallas are typically resolved through direct negotiation, formal mediation, or litigation in Dallas County district courts. Common claims include breach of purchase agreement, title defects, lease defaults, and partnership disagreements. Texas Property Code and Texas Business Organizations Code govern most procedural requirements.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON SCENARIOS */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-6" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">When you need a commercial real estate attorney</h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              { title: "A title search reveals an unresolved easement", desc: "Your $12M acquisition has a utility easement that crosses the planned building pad. The seller says it was never enforced, but your lender flags it as an unacceptable exception. You need it resolved before closing in three weeks." },
              { title: "Your anchor tenant defaults on a 10-year lease", desc: "The anchor tenant in your Class A office building stops paying rent. The co-tenancy clauses in your other leases start triggering rent reductions. You need to enforce the lease, manage the fallout, and re-tenant the space without destroying the building\u2019s value." },
              { title: "The city changes the terms of your development agreement", desc: "The municipality adds conditions to your development agreement that were not in the preliminary approval \u2014 requiring $1.2M in infrastructure improvements. You need to renegotiate the terms or challenge the changes under the Local Government Code." },
              { title: "Your JV partner wants to sell to an unknown investor", desc: "Your joint venture partner wants to sell their 40% interest to an outside investor you have never met. The JV agreement is silent on transfer restrictions. You need to protect your position before the transfer closes." },
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
            <AccordionFAQ items={faqData} heading="Frequently asked questions about commercial real estate in Texas" />
          </FadeIn>
        </div>
      </section>

      {/* RELATED PRACTICE AREAS */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Related legal services</h2>
          </FadeIn>
          <div className="mt-14 flex flex-col gap-6 md:flex-row">
            {[
              { href: "/practice-areas/construction-law", title: "Construction Law", desc: "Every development project creates construction risk. Our Dallas construction attorneys handle contract disputes, mechanic\u2019s lien claims, and project litigation for owners and contractors across Texas." },
              { href: "/practice-areas/corporate-transactions", title: "Corporate Transactions", desc: "Real estate deals require entity formation, joint venture agreements, and investor documentation structured under the Texas Business Organizations Code." },
              { href: "/practice-areas/business-litigation", title: "Business Litigation", desc: "Partnership disputes, fiduciary claims, and investor disagreements on real estate ventures that require courtroom resolution across the DFW metroplex." },
            ].map((item, i) => (
              <FadeIn key={item.href} delay={i * 0.1} className="flex-1">
                <Link href={item.href} className="card-hover group block h-full rounded-lg border border-charcoal-200 bg-charcoal-50 p-10 transition-colors hover:border-navy-600 hover:bg-white">
                  <h3 className="font-heading text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">{item.desc}</p>
                </Link>
              </FadeIn>
            ))}
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
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Discuss your real estate transaction with a Dallas commercial real estate attorney
                </h2>
                <p className="mt-5 text-charcoal-300">Tell us about your deal. We respond within one business day. No obligation.</p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link href="/contact" className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300">Discuss Your Transaction</Link>
                <a href="tel:9725037000" className="text-sm font-medium text-charcoal-200 transition-colors hover:text-white">(972)&nbsp;503-7000</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
