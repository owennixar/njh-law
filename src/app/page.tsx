"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Shared animation wrapper — subtle, not dramatic                    */
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SVG line icons for practice areas                                  */
/* ------------------------------------------------------------------ */
function GavelIcon() {
  return (
    <svg className="h-8 w-8 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="h-8 w-8 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="h-8 w-8 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="h-8 w-8 text-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const practiceAreas = [
  {
    name: "Construction Law",
    slug: "construction-law",
    icon: <GavelIcon />,
    summary:
      "Contract disputes, mechanic\u2019s liens, delay claims, and project litigation for contractors, owners, and suppliers across Texas.",
  },
  {
    name: "Commercial Real Estate",
    slug: "commercial-real-estate",
    icon: <BuildingIcon />,
    summary:
      "Acquisitions, dispositions, leasing, development, and financing for commercial properties throughout the DFW metroplex.",
  },
  {
    name: "Business Litigation",
    slug: "business-litigation",
    icon: <DocumentIcon />,
    summary:
      "Breach of contract, partnership disputes, fiduciary claims, and shareholder conflicts resolved in court or at the table.",
  },
  {
    name: "Corporate Transactions",
    slug: "corporate-transactions",
    icon: <HandshakeIcon />,
    summary:
      "Entity formation, joint ventures, M&A, and contract drafting for businesses from formation through exit.",
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
      {/* HERO — clean, confident, understated                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28 lg:py-36">
        <Image
          src="/images/dallas-skyline.jpg"
          alt="Dallas commercial skyline representing the construction and business law practice of Nixon Jach Hubbard"
          fill
          className="object-cover object-center opacity-30"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-navy-950/70" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="tagline text-xs text-charcoal-300 sm:text-sm">
                Contract. Construct. Resolve.
              </p>
              <h1 className="mt-6 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Dallas Construction &amp; Business Law
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal-300">
                Five attorneys. Four focused practice areas. Over three decades
                of results for contractors, developers, and business owners
                across North Texas.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-gold-400 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
                >
                  Schedule a Consultation
                </Link>
                <a
                  href="tel:9725037000"
                  className="text-sm font-medium text-charcoal-300 transition-colors hover:text-white"
                >
                  (972)&nbsp;503-7000
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RECOGNITION BADGES — static row                              */}
      {/* ============================================================ */}
      <section className="border-b border-charcoal-100 bg-white py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-10">
            <p className="shrink-0 font-heading text-base font-bold text-navy-900 lg:text-lg">
              Our attorneys are recognized by:
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-8 lg:flex-1 lg:justify-evenly"
              aria-label="Recognition badges"
            >
              <img
                src="/images/Badges/Super%20Lawyers.png"
                alt="Super Lawyers"
                className="h-[80px] w-auto object-contain lg:h-[100px]"
              />
              <img
                src="/images/Badges/Best%20Lawyers.avif"
                alt="Best Lawyers in America"
                className="h-[80px] w-auto object-contain lg:h-[100px]"
              />
              <img
                src="/images/Badges/chambers%20USA.avif"
                alt="Chambers USA"
                className="h-[80px] w-auto object-contain lg:h-[100px]"
              />
              <img
                src="/images/Badges/Martindale%20Hubbard%20.avif"
                alt="Martindale-Hubbell"
                className="h-[80px] w-auto object-contain lg:h-[100px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MISSION STATEMENT — offset image + positioning text           */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Image — 45% width */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal-100">
                  <Image
                    src="/images/dallas-skyline.jpg"
                    alt="Dallas commercial construction skyline"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              </div>
              {/* Text — 55% width */}
              <div className="lg:col-span-7">
                <div className="divider-accent mb-6" />
                <h2 className="font-heading text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                  Built for the businesses that build Dallas
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-charcoal-600">
                  Nixon Jach Hubbard is not a general practice firm. Every
                  attorney, every practice area, and every client relationship
                  connects back to the same industries: construction, commercial
                  real estate, and the businesses behind them. That focus means
                  your attorney already knows the difference between a CPM
                  schedule dispute and a liquidated damages claim before you
                  pick up the phone.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-600">
                  Three decades of concentrated experience across the DFW
                  metroplex — from contract negotiation and project counsel
                  through lien enforcement and courtroom litigation. We
                  represent every participant in the construction chain, and
                  that perspective changes how we advise, draft, and try cases.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-block text-sm font-semibold text-gold-500 transition-colors hover:text-gold-600"
                >
                  About the firm &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRACTICE AREAS — icon cards, clean grid                      */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Practice Areas
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area, i) => (
              <FadeIn key={area.slug} delay={i * 0.05}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="card-hover group block h-full rounded-lg border border-charcoal-200 bg-white p-8"
                >
                  <div className="mb-5">{area.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-navy-900">
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
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DIFFERENTIATORS                                               */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Why firms like yours choose NJH
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Over 30 years of focused practice",
                text: "Mike Nixon has represented contractors and owners in Texas since the early 1990s. Selected to Texas Super Lawyers for Construction Litigation every year from 2008 through 2024.",
              },
              {
                num: "02",
                title: "Both sides of the table",
                text: "We represent GCs, subcontractors, suppliers, developers, and owners. We already know what the other side will argue, because we have argued it ourselves.",
              },
              {
                num: "03",
                title: "Business-minded counsel",
                text: "We factor in project timelines, cash flow, and relationships before recommending any course of action. The best outcome keeps your project moving forward.",
              },
            ].map((block, i) => (
              <FadeIn key={block.num} delay={i * 0.05}>
                <p className="text-xs font-semibold tracking-wider text-charcoal-400 uppercase">
                  {block.num}
                </p>
                <h3 className="mt-3 font-heading text-lg font-bold text-white">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-300">
                  {block.text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ATTORNEY PREVIEW                                             */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Five attorneys. Direct access to every one.
            </h2>
            <p className="mt-4 max-w-lg text-sm text-charcoal-600">
              When you call this firm, you speak with a partner — not an intake
              coordinator, not a paralegal.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((attorney, i) => (
              <FadeIn key={attorney.slug} delay={i * 0.05}>
                <Link
                  href={`/attorneys/${attorney.slug}`}
                  className="card-hover group block rounded-lg border border-charcoal-200 p-6"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded bg-charcoal-100">
                    <Image
                      src={attorney.photo}
                      alt={`${attorney.name}, Dallas construction and business attorney`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-bold text-navy-900">
                    {attorney.name}
                  </h3>
                  <p className="text-xs text-charcoal-500">{attorney.title}</p>
                  <p className="mt-1 text-xs font-medium text-charcoal-600">
                    {attorney.focus}
                  </p>
                  {attorney.recognitions && (
                    <p className="mt-2 text-[11px] leading-relaxed text-gold-500">
                      {attorney.recognitions}
                    </p>
                  )}
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
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
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Tell us about your project. We&apos;ll tell you where you stand.
                </h2>
                <p className="mt-4 text-sm text-charcoal-300">
                  No obligation. Direct conversation with a partner.
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
                  className="text-sm font-medium text-charcoal-300 transition-colors hover:text-white"
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
