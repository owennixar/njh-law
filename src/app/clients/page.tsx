"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const clientCategories = [
  {
    category: "Commercial General Contractors",
    description:
      "We represent GCs on projects from $500K tenant build-outs to $200M mixed-use developments. That includes prime contract negotiation, mechanic\u2019s lien management, delay claim prosecution and defense, subcontractor disputes, and change order litigation. Our attorneys handle cases in Dallas County district courts, the Northern District of Texas, and AAA arbitration panels.",
    services: [
      "Contract negotiation and AIA document review",
      "Mechanic\u2019s lien perfection and defense",
      "Delay, acceleration, and impact claims",
      "Payment disputes and retainage recovery",
    ],
  },
  {
    category: "Subcontractors & Specialty Trade Contractors",
    description:
      "Subcontractors face unique risks: pay-if-paid clauses, flow-down indemnity provisions, and lien notice requirements that differ from those of prime contractors. We help specialty trades protect their payment rights under Texas Property Code Chapter 53, pursue bond claims on public projects under Texas Government Code Chapter 2253, and resolve scope disputes that arise when field conditions change.",
    services: [
      "Lien rights preservation and enforcement",
      "Bond claims on public and private projects",
      "Change order and scope dispute resolution",
      "Contract review for sub-tier risk allocation",
    ],
  },
  {
    category: "Material Suppliers",
    description:
      "Suppliers who furnish materials to construction projects have specific lien and bond claim rights that require strict compliance with notice deadlines. We represent suppliers in payment recovery actions, Chapter 53 lien filings, and Miller Act bond claims on federal projects. Our experience spans building materials, heavy equipment, and specialty fabrication suppliers throughout the DFW metroplex.",
    services: [
      "Statutory lien notice compliance",
      "Payment bond claims under Miller Act and state statutes",
      "Credit collection and UCC enforcement",
      "Supply agreement drafting and negotiation",
    ],
  },
  {
    category: "Commercial Developers & Owners",
    description:
      "We serve developers on both the construction and real estate sides of commercial projects. On the construction side, we draft and negotiate owner-side GMP contracts, manage lien waiver programs, and defend against contractor claims. On the real estate side, we handle acquisitions, development agreements, TIF and PID financing, zoning entitlements, and commercial leasing across the DFW market.",
    services: [
      "Owner-side construction contract negotiation",
      "Development agreement and entitlement counsel",
      "Lien defense and project completion strategies",
      "Acquisition, financing, and disposition transactions",
    ],
  },
  {
    category: "Real Estate Investors & Operators",
    description:
      "Investors and operators rely on us for transaction counsel across office, retail, industrial, and multi-family property types. We handle purchase and sale agreements, 1031 exchanges, joint venture structuring, commercial lease negotiation, and CAM reconciliation disputes. When deals go sideways, we litigate title defects, partnership disputes, and lease defaults in Dallas County courts.",
    services: [
      "Acquisition due diligence and closing",
      "Joint venture and entity structuring",
      "Commercial lease drafting and enforcement",
      "Real estate dispute resolution and litigation",
    ],
  },
  {
    category: "Sureties & Design Professionals",
    description:
      "We represent sureties in bond claim defense, indemnity enforcement, and contractor default investigations. For architects and engineers, we handle professional liability defense, scope disputes, and errors-and-omissions claims. Both client types benefit from our deep understanding of the construction chain — we know how these disputes develop because we handle them from every perspective.",
    services: [
      "Bond claim defense and indemnity enforcement",
      "Takeover agreement negotiation",
      "Professional liability defense",
      "Scope and design error dispute resolution",
    ],
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="divider-accent mb-8" />
            <h1 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Clients We Represent
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-300">
              Representative experience across the construction and real estate
              industries. Every client type listed below reflects matters we
              handle regularly — from contract negotiations and payment disputes
              to complex litigation in Texas state and federal courts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Client categories */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-20">
            {clientCategories.map((cat, i) => (
              <FadeIn key={cat.category} delay={0}>
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <p className="text-xs font-semibold tracking-wider text-charcoal-400 uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold text-navy-900">
                      {cat.category}
                    </h2>
                    <ul className="mt-6 space-y-2">
                      {cat.services.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-2 text-sm text-charcoal-600"
                        >
                          <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm leading-relaxed text-charcoal-600">
                      {cat.description}
                    </p>
                  </div>
                </div>
                {i < clientCategories.length - 1 && (
                  <div className="mt-20 border-b border-charcoal-200" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREA LINKS */}
      <section className="border-t border-charcoal-200 bg-charcoal-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { href: "/practice-areas/construction-law", label: "Construction Law" },
                { href: "/practice-areas/commercial-real-estate", label: "Commercial Real Estate" },
                { href: "/practice-areas/business-litigation", label: "Business Litigation" },
                { href: "/practice-areas/corporate-transactions", label: "Corporate Transactions" },
              ].map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="rounded-lg border border-charcoal-200 bg-white p-6 text-center text-sm font-semibold text-navy-900 transition-colors hover:border-navy-600 hover:text-gold-600"
                >
                  {area.label} &rarr;
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Tell us about your project or business matter
                </h2>
                <p className="mt-4 text-sm text-charcoal-300">
                  Direct access to experienced partners. We respond within one
                  business day.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-gold-400 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
                >
                  Schedule a Consultation
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
