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

export default function AboutPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              A Dallas law firm built for one purpose: the businesses that
              build, invest in, and operate commercial projects in Texas
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-300">
              Nixon Jach Hubbard is not a general practice firm. Every attorney,
              every practice area, and every client relationship connects back
              to the same industries: construction, commercial real estate,
              and the businesses behind them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR STORY                                                    */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-7">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900">
                Founded in Dallas. Specialized from day one.
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
                <strong>The firm was built on a simple premise:</strong>{" "}
                construction companies, developers, and commercial property
                owners deserve attorneys who understand their industry — not
                generalists who treat a $5M lien dispute the same as a slip-
                and-fall case. That specialization has guided every hiring
                decision, every practice area, and every client we take on.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                <strong>Five attorneys work across four practice areas</strong>{" "}
                — construction law, commercial real estate, business
                litigation, and corporate transactions. The team is small by
                design. Clients work directly with partners who know their
                industry, their contracts, and their business objectives. No
                hand-offs to junior associates. No layers between the client
                and the attorney doing the work.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                <strong>The firm operates from International Plaza III</strong>{" "}
                on Dallas Parkway, in the heart of the North Dallas commercial
                corridor. Clients include general contractors, subcontractors,
                material suppliers, commercial developers, property investors,
                and business owners across the DFW metroplex and throughout
                Texas.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-5">
              <div className="rounded-lg border border-charcoal-200 bg-charcoal-50 p-8">
                <p className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  What specialization means in practice
                </p>
                <ul className="mt-4 space-y-4 text-sm text-charcoal-600">
                  <li>
                    <strong>We turn down cases</strong> outside our core areas.
                    Personal injury, family law, criminal defense — those
                    clients need different counsel.
                  </li>
                  <li>
                    <strong>Every attorney handles construction or real
                    estate matters.</strong> There is no rotation into
                    unfamiliar practice areas.
                  </li>
                  <li>
                    <strong>Industry knowledge compounds.</strong> When your
                    attorney has reviewed 500 AIA contracts, the 501st review
                    takes a fraction of the time — and catches issues a
                    generalist would miss.
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* OUR APPROACH                                                 */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900">
              How we work differently than most Dallas law firms
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <FadeIn>
              <div className="rounded-lg border border-charcoal-200 bg-white p-8">
                <p className="text-4xl font-bold text-charcoal-200">01</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  Proactive contract review
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Most construction disputes trace back to a contract clause
                  nobody flagged before work started. We review contracts
                  before you sign — identifying pay-if-paid traps, indemnity
                  exposure, and dispute resolution pitfalls. Prevention costs
                  a fraction of litigation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-lg border border-charcoal-200 bg-white p-8">
                <p className="text-4xl font-bold text-charcoal-200">02</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  Both sides of the table
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  We represent general contractors, subcontractors, suppliers,
                  developers, and property owners. That range is rare — and
                  valuable. We already know what the other side will argue,
                  because we have argued it ourselves. That perspective changes
                  how we negotiate, draft, and litigate.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-lg border border-charcoal-200 bg-white p-8">
                <p className="text-4xl font-bold text-charcoal-200">03</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">
                  Business-minded risk assessment
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Legal advice that ignores project timelines, cash flow, and
                  business relationships is worthless. We factor in the real
                  cost of disruption before recommending any path. Sometimes
                  mediation at 60 cents on the dollar beats two years of
                  litigation. We tell clients that directly.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BY THE NUMBERS                                               */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
              The firm by the numbers
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-navy-800 bg-navy-800 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { value: "35+", label: "Years of combined construction law experience" },
              { value: "5", label: "Attorneys focused on four practice areas" },
              { value: "4", label: "Practice areas \u2014 construction, real estate, litigation, corporate" },
              { value: "16", label: "Consecutive years of Super Lawyers recognition" },
              { value: "4", label: "Federal district courts of Texas \u2014 admitted to all" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.06}>
                <div className="bg-navy-900 p-8 text-center">
                  <p className="font-heading text-4xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal-400">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
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
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
                  Tell us about your project. We&apos;ll tell you where you
                  stand.
                </h2>
                <p className="mt-4 text-charcoal-300">
                  Direct access to experienced partners. No obligation.
                  We respond within one business day.
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
