"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Script from "next/script";
import AccordionFAQ from "@/components/AccordionFAQ";

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
    q: "How long do I have to file a mechanic\u2019s lien in Texas?",
    a: "The deadline depends on your role in the project. Original contractors must file a lien affidavit by the 15th day of the fourth month after the last day they provided labor or materials, under Texas Property Code \u00a753.052. Subcontractors and suppliers face the same deadline but must also send preliminary notices to the owner within strict timeframes. Missing any deadline by even one day can permanently destroy your lien rights.",
  },
  {
    q: "What should I do if a subcontractor files a lien on my project?",
    a: "Act fast. Under Texas Property Code \u00a753.160, you can demand that the claimant file suit to foreclose the lien within a set period, or the lien expires. Review the lien affidavit for technical defects \u2014 improper notice, missed deadlines, or overstated amounts can void the claim entirely. A Dallas construction attorney can evaluate whether the lien was properly perfected and recommend the strongest response strategy.",
  },
  {
    q: "Can I recover delay damages on a Texas construction project?",
    a: "Yes, in most cases. Texas courts allow recovery when the other party caused the delay and the contract lacks an enforceable no-damages-for-delay clause. Recovery depends on the contract terms, the delay type \u2014 excusable, compensable, or concurrent \u2014 and whether you gave timely written notice. Documenting schedule impacts through daily logs and updated CPM schedules strengthens your claim.",
  },
  {
    q: "What is the Texas Prompt Payment Act and how does it protect contractors?",
    a: "The Prompt Payment Act sets mandatory payment deadlines for construction projects in Texas. Texas Government Code Chapter 2251 governs public work; Texas Property Code \u00a728.002 governs private. Late payment triggers interest penalties of 1.5% per month on public projects. The Act also allows the prevailing party to recover attorney\u2019s fees throughout Texas.",
  },
  {
    q: "Do I need an attorney to review my construction contract?",
    a: "For any project over $50,000, yes. Construction contracts contain pay-if-paid clauses, indemnity provisions, and damage caps that can eliminate your rights before work begins. One unfavorable clause in an AIA or ConsensusDocs form \u2014 like a broad consequential damages waiver \u2014 can cost far more than the review fee. Contract review is the cheapest risk management tool available.",
  },
  {
    q: "What is the difference between mediation and arbitration in construction disputes?",
    a: "Mediation is a voluntary negotiation guided by a neutral third party. Either side can walk away. Arbitration is binding \u2014 an arbitrator issues a final decision with very limited appeal rights under CPRC Chapter 171. Many AIA and ConsensusDocs contracts require mediation first, then arbitration. The choice significantly affects cost, timeline, and your control over the outcome.",
  },
  {
    q: "How do Miller Act bond claims work on federal construction projects?",
    a: "The Miller Act (40 U.S.C. \u00a7\u00a73131\u20133134) requires payment bonds on federal projects over $100,000. Unpaid subcontractors and suppliers claim against the bond instead of filing a lien \u2014 you cannot lien federal property. You must file within one year of your last day of work. If unpaid after 90 days, you can file suit in the U.S. District Court for the Northern District of Texas.",
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
  name: "Construction Law",
  description:
    "Construction law services including mechanic\u2019s lien claims, contract disputes, delay claims, and project litigation for contractors, owners, and suppliers in Dallas, Texas.",
  provider: {
    "@type": "LegalService",
    name: "Nixon Jach Hubbard",
    url: "https://njh-law.com",
  },
  areaServed: { "@type": "State", name: "Texas" },
  url: "https://njh-law.com/practice-areas/construction-law",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ConstructionLawPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="service-schema-cl"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="afterInteractive"
      />

      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-8" />
            <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Construction Law Attorneys in Dallas, Texas
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* GEO extractable block #1 — definition */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-300">
              Construction law covers the contracts, disputes, payment claims,
              and regulatory requirements that arise on building projects. In
              Texas, these matters are governed primarily by the Texas Property
              Code, the Texas Prompt Payment Act, and federal statutes like the
              Miller Act. A Dallas construction attorney helps contractors,
              owners, and design professionals protect their rights at every
              phase of a project — from contract negotiation through final
              payment.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
              >
                Discuss Your Project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STAT BANNER                                                  */}
      {/* ============================================================ */}
      <section className="border-y border-navy-800 bg-navy-900">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "30+", label: "Years of construction litigation in Texas" },
              { value: "$500K\u2013$200M", label: "Project range we handle" },
              { value: "16", label: "Consecutive years of Super Lawyers recognition" },
              { value: "7", label: "Client types across the construction chain" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="text-center lg:text-left">
                  <p className="font-heading text-3xl font-bold text-white lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-charcoal-400">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT WE HANDLE — granular subsections                        */}
      {/* ============================================================ */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-6" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Construction disputes we resolve for Dallas contractors and owners
            </h2>
            {/* GEO extractable block #2 — process */}
            <p className="mt-6 max-w-3xl text-charcoal-600">
              Resolving a construction dispute in Texas typically involves four
              stages: (1) evaluating the contract terms and project records,
              (2) sending required statutory notices, (3) pursuing negotiation or
              formal mediation, and (4) filing suit or arbitration if no
              resolution is reached. Each stage has strict deadlines under the
              Texas Property Code and Texas Civil Practice &amp; Remedies Code.
            </p>
          </FadeIn>

          <div className="mt-20 grid gap-x-10 gap-y-16 lg:grid-cols-12">
            {/* Mechanic's Lien — expanded with granular subsections */}
            <FadeIn className="lg:col-span-7">
              <h3 className="font-heading text-xl font-bold text-navy-900">
                Mechanic&apos;s lien claims under Chapter 53
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                <strong>A mechanic&apos;s lien secures payment</strong> by
                placing a legal claim against the property where work was
                performed. Texas Property Code Chapter 53 controls the entire
                process — from preliminary notices to lien affidavit filings to
                foreclosure suits.
              </p>

              {/* Granular sub-services */}
              <div className="mt-6 space-y-4">
                <div className="rounded border border-charcoal-200 bg-charcoal-50 p-5">
                  <h4 className="text-sm font-bold text-navy-900">Mechanic&apos;s lien filing and perfection</h4>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-600">
                    We prepare and file lien affidavits with the county clerk, send all required preliminary and monthly notices under Chapter 53, and ensure every statutory deadline is met. One missed notice can destroy the entire lien right.
                  </p>
                </div>
                <div className="rounded border border-charcoal-200 bg-charcoal-50 p-5">
                  <h4 className="text-sm font-bold text-navy-900">Lien defense and removal</h4>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-600">
                    We defend property owners against invalid or overstated liens. Under Texas Property Code &sect;53.160, owners can demand the claimant file suit or forfeit the lien. We identify technical defects in notices, filings, and affidavit amounts to invalidate improper claims.
                  </p>
                </div>
                <div className="rounded border border-charcoal-200 bg-charcoal-50 p-5">
                  <h4 className="text-sm font-bold text-navy-900">Bond claims on public projects</h4>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-600">
                    Public projects in Texas require payment bonds under Texas Government Code Chapter 2253. Subcontractors and suppliers cannot lien public property — the bond is the remedy. We file bond claims within the statutory notice period and prosecute recovery actions.
                  </p>
                </div>
                <div className="rounded border border-charcoal-200 bg-charcoal-50 p-5">
                  <h4 className="text-sm font-bold text-navy-900">Bond claims on private projects and Miller Act claims</h4>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-600">
                    Private payment bonds and federal Miller Act bonds (40 U.S.C. &sect;&sect;3131&ndash;3134) each have distinct notice requirements and filing deadlines. We handle claims under both regimes in the U.S. District Court for the Northern District of Texas and in state courts across DFW.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-5">
              <h3 className="font-heading text-xl font-bold text-navy-900">
                Construction defect claims
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                <strong>Defect claims involve workmanship failures,</strong>{" "}
                design errors, or material deficiencies that cause property
                damage or require repair. Under the Texas Residential
                Construction Liability Act (RCLA, Texas Property Code Chapter
                27) and common-law negligence, the burden of proof and notice
                requirements differ depending on project type. We pursue and
                defend these claims for owners and contractors alike.
              </p>
            </FadeIn>

            <FadeIn className="lg:col-span-5">
              <h3 className="font-heading text-xl font-bold text-navy-900">
                Delay, acceleration, and impact claims
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                <strong>Schedule disruptions cost real money</strong> — extended
                general conditions, idle equipment, lost productivity. We
                analyze CPM schedules, daily logs, and RFI timelines to build or
                defend delay claims. When an owner demands acceleration without
                a change order, the contractor may be entitled to recover the
                added costs under the contract or under Texas common law.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7">
              <h3 className="font-heading text-xl font-bold text-navy-900">
                Texas Prompt Payment Act disputes
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                <strong>Late payment is not just frustrating</strong> — it
                triggers statutory penalties. Texas Government Code Chapter 2251
                governs public projects; Texas Property Code &sect;28.002
                governs private work. Both impose mandatory interest on late
                payments and allow recovery of attorney&apos;s fees. We enforce
                these claims for contractors stuck waiting on retainage releases,
                disputed change orders, and withheld final payments.
              </p>
            </FadeIn>

            <FadeIn className="lg:col-span-7">
              <h3 className="font-heading text-xl font-bold text-navy-900">
                Contract negotiation and drafting
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                <strong>The dispute you prevent is cheaper</strong> than the one
                you litigate. We review and negotiate AIA, ConsensusDocs, and
                custom construction contracts — focusing on pay-if-paid clauses,
                indemnity provisions, damage caps, insurance requirements, and
                dispute resolution mechanisms. Every redline is grounded in how
                these clauses actually play out in Texas courtrooms.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-5">
              <h3 className="font-heading text-xl font-bold text-navy-900">
                Mediation, arbitration, and litigation
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                <strong>Not every dispute belongs in a courtroom.</strong> A
                well-structured mediation can resolve a $2M delay claim in weeks
                instead of the 18–24 months typical for construction litigation
                in Dallas County. But when trial is the right move, we try cases
                in Texas state courts, federal courts, and before AAA arbitration
                panels.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MID-PAGE CTA                                                 */}
      {/* ============================================================ */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="max-w-2xl font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Facing a construction dispute, payment issue, or contract concern?
              </h2>
              <p className="text-charcoal-300">
                No obligation. Direct conversation with a partner who handles these cases every day.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
              >
                Discuss Your Project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR APPROACH                                                 */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              How we handle construction disputes differently
            </h2>
          </FadeIn>

          {/* Scenario */}
          <FadeIn delay={0.1}>
            <div className="mt-14 rounded-lg border border-charcoal-200 bg-white p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                    Scenario
                  </p>
                  <p className="mt-4 font-heading text-xl font-bold leading-snug text-navy-900">
                    When a general contractor faces a $1.5M delay claim on a
                    mixed-use project in North Texas
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-charcoal-600">
                    The owner blames the GC for a six-month schedule overrun. The
                    GC points to 47 owner-directed changes and a three-month
                    permitting delay outside its control.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-sm leading-relaxed text-charcoal-600">
                    Our{" "}
                    <Link
                      href="/attorneys/michael-nixon"
                      className="font-medium text-gold-600 hover:text-gold-500"
                    >
                      construction litigation attorneys
                    </Link>{" "}
                    reconstruct the critical path from the baseline CPM schedule.
                    We correlate each delay event to owner changes or excusable
                    conditions and calculate the time extension owed. The result:
                    a counterclaim for extended general conditions and a negotiated
                    resolution that keeps both parties out of an 18-month trial.
                  </p>

                  {/* GEO extractable block #3 */}
                  <div className="mt-8 rounded border border-navy-600/20 bg-navy-600/5 p-6">
                    <p className="text-sm font-semibold text-navy-900">
                      How to resolve a construction dispute in Texas
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                      Most construction disputes in Texas are resolved through
                      direct negotiation, formal mediation, binding arbitration,
                      or litigation in state or federal court. The path depends
                      on the contract&apos;s dispute resolution clause, the
                      dollar amount at stake, and applicable statutes including
                      the Texas Property Code and Texas Civil Practice &amp;
                      Remedies Code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Process steps */}
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Contract and project record review",
                desc: "We start with the documents \u2014 the prime contract, subcontract, change orders, pay applications, daily logs, and RFI correspondence. Most disputes have a paper trail that reveals the strongest positions before any demand letter is sent.",
              },
              {
                step: "02",
                title: "Strategy built around your business objectives",
                desc: "A $400K retainage dispute on a project where you need the GC\u2019s next bid invitation calls for a different approach than a $5M defect claim on a completed building. We map the legal options against the business reality \u2014 timeline, relationship value, cost of disruption.",
              },
              {
                step: "03",
                title: "Execution \u2014 negotiation through trial",
                desc: "We send statutory notices, demand letters, or file suit. If the contract requires mediation or arbitration, we prepare as thoroughly as we would for trial. Our construction litigation attorneys try cases in Dallas County district courts, the Northern District of Texas, and AAA panels.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <p className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  Step {item.step}
                </p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMMON SCENARIOS — When You Need Us                          */}
      {/* ============================================================ */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-6" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              When you need a construction attorney
            </h2>
            <p className="mt-4 max-w-2xl text-charcoal-600">
              These are the situations where our clients call us. If any of
              these sound familiar, we should talk.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Your GC hasn\u2019t paid in 90 days",
                desc: "You completed the work, submitted pay applications, and followed up repeatedly. The GC blames the owner. The lien filing deadline under Chapter 53 is approaching. You need to preserve your lien rights now while there is still time to act.",
              },
              {
                title: "An owner-directed change blows up your schedule",
                desc: "The owner added 47 change orders over six months but refuses to extend the substantial completion date. They are now threatening liquidated damages for every day past the original deadline. Your daily logs and CPM schedule updates tell a different story.",
              },
              {
                title: "A subcontractor files a lien on your project",
                desc: "A sub you already paid through your GC files a lien affidavit on the property. Your lender flags it as a title defect and threatens to halt construction draws. You need the lien removed \u2014 or defended against \u2014 before the project stalls.",
              },
              {
                title: "Your construction contract has a pay-if-paid clause",
                desc: "You signed a subcontract with a pay-if-paid provision you did not fully understand. The GC is now using it to withhold $380K in earned retainage, claiming the owner has not paid. Texas courts have specific tests for enforceability of these clauses.",
              },
            ].map((scenario, i) => (
              <FadeIn key={scenario.title} delay={i * 0.08}>
                <div className="card-hover rounded-lg border border-charcoal-200 bg-charcoal-50 p-10">
                  <h3 className="font-heading text-base font-bold text-navy-900">
                    {scenario.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                    {scenario.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
              >
                Discuss Your Situation
              </Link>
              <p className="mt-3 text-xs text-charcoal-400">
                No obligation. We respond within one business day.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ — Accordion style, prominently placed                    */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <AccordionFAQ
              items={faqData}
              heading="Frequently asked questions about construction law in Texas"
            />
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CLIENT TYPES                                                 */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-6" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Construction industry clients we represent in Dallas
            </h2>
            <p className="mt-5 max-w-2xl text-charcoal-400">
              Having represented every major participant in the construction
              chain gives us a perspective most firms cannot match. We
              understand your position because we have argued it — and argued
              against it.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "General Contractors", desc: "Prime contract disputes, sub-tier payment claims, delay defense, lien management on commercial and public projects." },
              { label: "Subcontractors", desc: "Payment recovery, mechanic\u2019s lien perfection, change order disputes, and pass-through claims against owners." },
              { label: "Material Suppliers", desc: "Lien rights under Chapter 53, bond claims, and credit collection for building materials and equipment." },
              { label: "Sureties", desc: "Bond claim defense, indemnity enforcement, takeover agreements, and contractor default investigations." },
              { label: "Developers & Owners", desc: "Defect claims, contractor disputes, lien defense, and project completion strategies." },
              { label: "Design Professionals", desc: "Professional liability defense, scope disputes, and errors-and-omissions claims on commercial projects." },
            ].map((client, i) => (
              <FadeIn key={client.label} delay={i * 0.05}>
                <div className="rounded-lg border border-navy-800 bg-navy-900 p-8">
                  <p className="font-heading text-base font-bold text-white">
                    {client.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-300">
                    {client.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TEXAS CONSTRUCTION LAW RESOURCES                             */}
      {/* ============================================================ */}
      <section className="bg-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-6" />
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Texas construction law resources
            </h2>
            <p className="mt-4 max-w-2xl text-charcoal-600">
              In-depth legal guides written by our construction attorneys.
              Every article cites the specific Texas statutes and practical
              steps that contractors and owners need to know.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <Link
                href="/insights/mechanics-lien-texas-guide"
                className="card-hover group block rounded-lg border border-charcoal-200 bg-charcoal-50 p-10 transition-colors hover:border-navy-600 hover:bg-white"
              >
                <p className="text-xs font-semibold tracking-wider text-gold-500 uppercase">
                  Legal Guide
                </p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  How to File a Mechanic&apos;s Lien in Texas: A Step-by-Step Guide
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  The complete guide to mechanic&apos;s lien rights under Texas
                  Property Code Chapter 53 — notice requirements, filing
                  deadlines, and enforcement procedures for contractors and
                  suppliers.
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold-500 transition-colors group-hover:text-gold-600">
                  Read the guide &rarr;
                </span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Link
                href="/insights"
                className="card-hover group block rounded-lg border border-charcoal-200 bg-charcoal-50 p-10 transition-colors hover:border-navy-600 hover:bg-white"
              >
                <p className="text-xs font-semibold tracking-wider text-gold-500 uppercase">
                  All Articles
                </p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  View All Construction Law Insights
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Articles covering Texas Prompt Payment Act disputes,
                  construction contract clauses, delay claims, and more —
                  written by our Dallas construction attorneys.
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold-500 transition-colors group-hover:text-gold-600">
                  Browse all articles &rarr;
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RELATED PRACTICE AREAS                                       */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Related legal services
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-12">
            <FadeIn className="md:col-span-5">
              <Link
                href="/practice-areas/commercial-real-estate"
                className="card-hover group block h-full rounded-lg border border-charcoal-200 bg-white p-10 transition-colors hover:border-navy-600"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Commercial Real Estate
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                  Construction and real estate intersect on every development
                  project. Our{" "}
                  <span className="text-gold-600">
                    commercial real estate attorneys
                  </span>{" "}
                  handle acquisitions, leasing, and development transactions
                  throughout the DFW metroplex.
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1} className="md:col-span-4">
              <Link
                href="/practice-areas/business-litigation"
                className="card-hover group block h-full rounded-lg border border-charcoal-200 bg-white p-10 transition-colors hover:border-navy-600"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Business Litigation
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                  Construction companies face disputes beyond the job site —
                  partnership conflicts, breach of contract claims, and
                  shareholder issues that require experienced{" "}
                  <span className="text-gold-600">
                    business litigation counsel
                  </span>
                  .
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="md:col-span-3">
              <Link
                href="/practice-areas/corporate-transactions"
                className="card-hover group block h-full rounded-lg border border-charcoal-200 bg-white p-10 transition-colors hover:border-navy-600"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Corporate Transactions
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                  Entity formation, joint ventures, and M&amp;A for
                  construction and development companies building their
                  businesses in Texas.
                </p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA BAND                                                     */}
      {/* ============================================================ */}
      <section className="bg-navy-900 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="divider-accent mb-6" />
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Discuss your construction project with a Dallas construction
                  attorney
                </h2>
                <p className="mt-5 text-charcoal-300">
                  No obligation. Direct conversation with a partner, not a
                  junior associate. We respond within one business day.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-gold-400 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
                >
                  Discuss Your Project
                </Link>
                <a
                  href="tel:9725037000"
                  className="text-sm font-medium text-charcoal-200 transition-colors hover:text-white"
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
