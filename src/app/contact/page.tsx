"use client";

import { useState } from "react";
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

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nixon Jach Hubbard",
  telephone: "(972) 503-7000",
  faxNumber: "(972) 503-7001",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14241 Dallas Parkway, Suite 575",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75254",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "(972) 503-7000",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  openingHours: "Mo-Fr 08:30-17:30",
};

const practiceOptions = [
  "Construction Law",
  "Commercial Real Estate",
  "Business Litigation",
  "Corporate Transactions",
  "Other",
];

const attorneys = [
  { name: "Michael S. Nixon", email: "mnixon@njhlaw.com", title: "Partner" },
  { name: "Anthony P. Jach", email: "tjach@njhlaw.com", title: "Partner" },
  { name: "Curtis Hubbard", email: "chubbard@njhlaw.com", title: "Partner" },
  {
    name: "Jeffery H. Rusthoven",
    email: "jrusthoven@njhlaw.com",
    title: "Attorney",
  },
  {
    name: "Anthony R. Alvarado",
    email: "aalvarado@njhlaw.com",
    title: "Attorney",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, replace with an API route or form service
    setSubmitted(true);
  }

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        strategy="afterInteractive"
      />

      {/* ============================================================ */}
      {/* HEADER                                                       */}
      {/* ============================================================ */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s discuss your situation
            </h1>
            <p className="mt-4 max-w-xl text-lg text-charcoal-300">
              Every inquiry goes directly to an attorney — not a call center,
              not an intake coordinator. Tell us what you are facing. We respond
              within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FORM + CONTACT INFO                                          */}
      {/* ============================================================ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* FORM — left column */}
            <FadeIn className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-lg border border-navy-600/20 bg-navy-600/5 p-10 text-center">
                  <p className="font-heading text-2xl font-bold text-navy-900">
                    Thank you for reaching out.
                  </p>
                  <p className="mt-3 text-sm text-charcoal-600">
                    We will respond within one business day. All inquiries are
                    confidential.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-navy-900"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        autoComplete="given-name"
                        className="mt-1.5 block w-full rounded border border-charcoal-300 px-3 py-2.5 text-sm text-navy-900 outline-none invalid:border-red-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-navy-900"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        autoComplete="family-name"
                        className="mt-1.5 block w-full rounded border border-charcoal-300 px-3 py-2.5 text-sm text-navy-900 outline-none invalid:border-red-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-navy-900"
                    >
                      Company name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className="mt-1.5 block w-full rounded border border-charcoal-300 px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy-900"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        placeholder="(555) 555-5555"
                        className="mt-1.5 block w-full rounded border border-charcoal-300 px-3 py-2.5 text-sm text-navy-900 outline-none placeholder:text-charcoal-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        className="mt-1.5 block w-full rounded border border-charcoal-300 px-3 py-2.5 text-sm text-navy-900 outline-none invalid:border-red-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="practiceArea"
                      className="block text-sm font-medium text-navy-900"
                    >
                      Practice area
                    </label>
                    <select
                      id="practiceArea"
                      name="practiceArea"
                      required
                      defaultValue=""
                      className="mt-1.5 block w-full rounded border border-charcoal-300 px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                    >
                      <option value="" disabled>
                        Select a practice area
                      </option>
                      {practiceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-1.5 block w-full rounded border border-charcoal-300 px-3 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="rounded bg-gold-400 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
                    >
                      Send Your Inquiry
                    </button>
                    <p className="mt-3 text-xs text-charcoal-500">
                      We respond within one business day. All inquiries are
                      confidential.
                    </p>
                  </div>
                </form>
              )}
            </FadeIn>

            {/* CONTACT INFO — right column */}
            <FadeIn delay={0.15} className="lg:col-span-5">
              {/* Office address */}
              <div>
                <h2 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  Office
                </h2>
                <address className="mt-4 space-y-1 text-sm not-italic text-charcoal-600">
                  <p className="font-medium text-navy-900">
                    International Plaza III
                  </p>
                  <p>14241 Dallas Parkway, Suite 575</p>
                  <p>Dallas, Texas 75254</p>
                </address>
              </div>

              {/* Phone / Fax */}
              <div className="mt-8">
                <h2 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  Phone &amp; Fax
                </h2>
                <div className="mt-4 space-y-1 text-sm">
                  <p>
                    <span className="text-charcoal-400">Main: </span>
                    <a
                      href="tel:9725037000"
                      className="font-medium text-navy-900 hover:text-gold-600"
                    >
                      (972) 503-7000
                    </a>
                  </p>
                  <p>
                    <span className="text-charcoal-400">Fax: </span>
                    <span className="text-charcoal-600">(972) 503-7001</span>
                  </p>
                </div>
              </div>

              {/* Office hours */}
              <div className="mt-8">
                <h2 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  Office Hours
                </h2>
                <p className="mt-4 text-sm text-charcoal-600">
                  Monday – Friday, 8:30 AM – 5:30 PM
                </p>
              </div>

              {/* Attorney direct contacts */}
              <div className="mt-8">
                <h2 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  Attorney Direct Lines
                </h2>
                <div className="mt-4 space-y-3">
                  {attorneys.map((atty) => (
                    <div key={atty.email} className="text-sm">
                      <p className="font-medium text-navy-900">
                        {atty.name}{" "}
                        <span className="font-normal text-charcoal-400">
                          — {atty.title}
                        </span>
                      </p>
                      <a
                        href={`mailto:${atty.email}`}
                        className="text-charcoal-600 hover:text-gold-600"
                      >
                        {atty.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LOCATION CONTEXT                                             */}
      {/* ============================================================ */}
      <section className="bg-charcoal-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-navy-900">
                  Location
                </h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  International Plaza III on the Dallas Parkway corridor, near
                  the intersection of Dallas Parkway and Arapaho Road. Free
                  visitor parking in the building garage.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-900">
                  Service Area
                </h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  Serving businesses throughout the DFW metroplex and across
                  Texas. Admitted to practice in all four federal districts
                  of Texas and the Fifth Circuit.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-900">
                  What to Expect
                </h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  Your inquiry goes directly to an attorney. Initial
                  consultations are confidential. We respond within one
                  business day — usually the same day.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
