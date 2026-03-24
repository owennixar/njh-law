"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Shared animation wrapper                                          */
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
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const practiceAreas = [
  {
    name: "Construction Law",
    slug: "construction-law",
    summary:
      "Contract disputes, mechanic\u2019s liens, delay claims, and project litigation. We represent general contractors, subcontractors, suppliers, and owners on projects across Texas.",
  },
  {
    name: "Commercial Real Estate",
    slug: "commercial-real-estate",
    summary:
      "Acquisitions, dispositions, leasing, and development. From due diligence through closing, we handle commercial transactions throughout the DFW metroplex.",
  },
  {
    name: "Business Litigation",
    slug: "business-litigation",
    summary:
      "Breach of contract, partnership disputes, fiduciary claims, and shareholder conflicts. Aggressive representation grounded in business reality, not just legal theory.",
  },
  {
    name: "Corporate Transactions",
    slug: "corporate-transactions",
    summary:
      "Entity formation, joint ventures, M&A, and contract drafting. Practical corporate counsel for businesses from formation through exit.",
  },
];

const partners = [
  {
    name: "Mike Nixon",
    title: "Founding Partner",
    focus: "Construction Law & Business Litigation",
    slug: "michael-nixon",
    photo: "/images/mike_nixon.avif",
    recognitions: "Super Lawyers 2008\u20132024 \u00b7 Chambers USA 2020\u20132024 \u00b7 Best Lawyers 2019\u20132024",
  },
  {
    name: "Tony Jach",
    title: "Partner",
    focus: "Commercial Real Estate & Corporate Transactions",
    slug: "anthony-jach",
    photo: "/images/tony_jach.avif",
    recognitions: "",
  },
  {
    name: "Curtis Hubbard",
    title: "Partner",
    focus: "Business Litigation & Construction Law",
    slug: "curtis-hubbard",
    photo: "/images/curtis_hubbard.avif",
    recognitions: "",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 — Hero                                             */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-28 lg:py-40">
        {/* Dallas skyline background */}
        <Image
          src="/images/dallas-skyline.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={80}
        />
        {/* Dark gradient overlay from left — keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                The Dallas Business Law Firm Behind the Projects That Shape This City
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-300">
                Construction attorneys, real estate counsel, and business litigators
                who speak your industry&apos;s language. Five attorneys.
                Four focused practice areas. Over three decades of results
                for contractors, developers, and business owners across North Texas.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — Recognition Bar                                  */}
      {/* ============================================================ */}
      <section className="border-b border-charcoal-200 bg-charcoal-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <FadeIn>
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              {/* Logo placeholders */}
              <div className="flex items-center gap-10">
                {["Best Lawyers", "Chambers USA", "Texas Super Lawyers"].map(
                  (label) => (
                    <div
                      key={label}
                      className="flex h-10 items-center text-xs font-semibold tracking-wider text-charcoal-400 uppercase"
                    >
                      {label}
                    </div>
                  )
                )}
              </div>
              <p className="text-sm text-charcoal-500">
                Attorneys recognized by Best Lawyers, Chambers USA, and Texas Super
                Lawyers for over 16 consecutive years
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — What We Do (Practice Areas)                      */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="max-w-2xl text-lg leading-relaxed text-charcoal-600">
              <strong className="text-navy-900">
                General contractors, commercial developers, and business owners
              </strong>{" "}
              across the DFW metroplex rely on this Dallas business law firm
              for the same reason: we know your industry from the inside.
              Every practice area connects back to the businesses that build,
              invest in, and operate commercial projects in Texas.
            </p>
          </FadeIn>

          {/* Asymmetric grid: 2 large + 2 standard */}
          <div className="mt-14 grid gap-6 md:grid-cols-12">
            {practiceAreas.map((area, i) => {
              const isLarge = i === 0 || i === 3;
              return (
                <FadeIn
                  key={area.slug}
                  delay={i * 0.1}
                  className={
                    isLarge ? "md:col-span-7" : "md:col-span-5"
                  }
                >
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="group block h-full rounded-lg border border-charcoal-200 bg-charcoal-50 p-8 transition-colors hover:border-navy-600 hover:bg-white"
                  >
                    <h3 className="font-heading text-xl font-bold text-navy-900">
                      {area.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                      {area.summary}
                    </p>
                    <span className="mt-5 inline-block text-sm font-semibold text-gold-500 transition-colors group-hover:text-gold-600">
                      Explore {area.name} &rarr;
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — Why NJH (Differentiators)                        */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for the businesses that build Dallas
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            {/* Block 1 — large */}
            <FadeIn className="lg:col-span-5">
              <div>
                <p className="text-sm font-semibold tracking-wider text-white uppercase">
                  01
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-white">
                  Over 30 years of focused practice
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-300">
                  This is not a general practice firm that dabbles in
                  construction cases. Mike Nixon has represented contractors
                  and owners in Texas since the early 1990s. That depth
                  shows in every contract review, every lien filing, every
                  courtroom argument. Selected to Texas Super Lawyers for
                  Construction Litigation every year from 2008 through 2024.
                </p>
              </div>
            </FadeIn>

            {/* Block 2 */}
            <FadeIn delay={0.1} className="lg:col-span-4">
              <div>
                <p className="text-sm font-semibold tracking-wider text-white uppercase">
                  02
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-white">
                  Both sides of the table
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-300">
                  We represent general contractors, subcontractors, material
                  suppliers, developers, and property owners. That range
                  gives us something most firms lack: we already know
                  what the other side will argue, because we&apos;ve argued it
                  ourselves. That perspective changes how we negotiate, draft,
                  and litigate.
                </p>
              </div>
            </FadeIn>

            {/* Block 3 */}
            <FadeIn delay={0.2} className="lg:col-span-3">
              <div>
                <p className="text-sm font-semibold tracking-wider text-white uppercase">
                  03
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-white">
                  Business-minded counsel
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-300">
                  Legal advice that ignores project timelines, cash flow, and
                  business relationships is worthless. We factor in the real
                  cost of disruption before recommending any course of
                  action — because the best outcome is the one that keeps
                  your project moving forward.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — Attorney Preview                                 */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Five attorneys. Direct access to every one.
            </h2>
            <p className="mt-4 max-w-xl text-charcoal-600">
              When you call this firm, you speak with a partner — not an intake
              coordinator, not a paralegal. That&apos;s how it works from the
              first conversation through final resolution.
            </p>
          </FadeIn>

          {/* Asymmetric: first card wider */}
          <div className="mt-14 grid gap-6 md:grid-cols-12">
            {partners.map((attorney, i) => {
              const span =
                i === 0
                  ? "md:col-span-5"
                  : i === 1
                  ? "md:col-span-4"
                  : "md:col-span-3";
              return (
                <FadeIn key={attorney.slug} delay={i * 0.1} className={span}>
                  <Link
                    href={`/attorneys/${attorney.slug}`}
                    className="group block rounded-lg border border-charcoal-200 p-6 transition-colors hover:border-navy-600"
                  >
                    {/* Attorney photo */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded bg-charcoal-100">
                      <Image
                        src={attorney.photo}
                        alt={`Professional headshot of ${attorney.name}, Dallas construction and business attorney`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-navy-900">
                      {attorney.name}
                    </h3>
                    <p className="text-sm text-charcoal-500">{attorney.title}</p>
                    <p className="mt-1 text-sm font-medium text-charcoal-600">
                      {attorney.focus}
                    </p>
                    {attorney.recognitions && (
                      <p className="mt-3 text-xs leading-relaxed text-gold-500">
                        {attorney.recognitions}
                      </p>
                    )}
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Link
                href="/attorneys"
                className="text-sm font-semibold text-gold-500 transition-colors hover:text-gold-600"
              >
                Meet the full team &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — CTA Band                                         */}
      {/* ============================================================ */}
      <section className="bg-navy-900 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Tell us about your project. We&apos;ll tell you where you stand.
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
