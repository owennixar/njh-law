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

const posts = [
  {
    title:
      "How to File a Mechanic\u2019s Lien in Texas: A Step-by-Step Guide",
    slug: "mechanics-lien-texas-guide",
    author: "Michael S. Nixon",
    date: "March 24, 2026",
    category: "Construction Law",
    excerpt:
      "A mechanic\u2019s lien is a legal claim filed against a property to secure payment for work performed or materials provided. This guide covers every step of the Texas lien process under Chapter 53 of the Texas Property Code.",
  },
  {
    title:
      "What the Texas Prompt Payment Act Means for Contractors",
    slug: "#",
    author: "Michael S. Nixon",
    date: "Coming Soon",
    category: "Construction Law",
    excerpt:
      "The Texas Prompt Payment Act sets mandatory payment deadlines and penalties for late payment on public and private construction projects.",
  },
  {
    title:
      "5 Clauses Every Construction Contract Should Include",
    slug: "#",
    author: "Anthony P. Jach",
    date: "Coming Soon",
    category: "Construction Law",
    excerpt:
      "Five contract provisions that protect contractors, subcontractors, and owners before work begins on any Texas project.",
  },
  {
    title: "LLC vs S-Corp: Choosing the Right Structure in Texas",
    slug: "#",
    author: "Curtis Hubbard",
    date: "Coming Soon",
    category: "Corporate Transactions",
    excerpt:
      "How to choose between an LLC and S-Corp election under the Texas Business Organizations Code \u2014 and when to switch.",
  },
  {
    title: "Handling Commercial Lease Disputes in DFW",
    slug: "#",
    author: "Anthony P. Jach",
    date: "Coming Soon",
    category: "Commercial Real Estate",
    excerpt:
      "Common commercial lease disputes in Dallas-Fort Worth and the legal options available to landlords and tenants.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Insights &amp; Articles
            </h1>
            <p className="mt-4 max-w-xl text-lg text-charcoal-300">
              Practical legal analysis for contractors, developers, and business
              owners in Dallas and across Texas.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-12">
            {posts.map((post, i) => {
              const isFirst = i === 0;
              const span = isFirst ? "md:col-span-12" : "md:col-span-6";
              return (
                <FadeIn key={post.slug + i} delay={i * 0.06} className={span}>
                  {post.slug === "#" ? (
                    <div className="h-full rounded-lg border border-charcoal-200 bg-charcoal-50 p-8">
                      <p className="text-xs font-semibold tracking-wider text-charcoal-400 uppercase">
                        {post.category} &middot; {post.date}
                      </p>
                      <h2 className="mt-3 font-heading text-lg font-bold text-navy-900">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-charcoal-500">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-xs text-charcoal-400">
                        By {post.author}
                      </p>
                    </div>
                  ) : (
                    <Link
                      href={`/insights/${post.slug}`}
                      className="group block h-full rounded-lg border border-charcoal-200 bg-charcoal-50 p-8 transition-colors hover:border-navy-600 hover:bg-white"
                    >
                      <p className="text-xs font-semibold tracking-wider text-gold-500 uppercase">
                        {post.category} &middot; {post.date}
                      </p>
                      <h2
                        className={`mt-3 font-heading font-bold text-navy-900 ${
                          isFirst ? "text-2xl" : "text-lg"
                        }`}
                      >
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm text-charcoal-600">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-xs text-charcoal-400">
                        By {post.author}
                      </p>
                      <span className="mt-4 inline-block text-sm font-semibold text-gold-500 transition-colors group-hover:text-gold-600">
                        Read the full guide &rarr;
                      </span>
                    </Link>
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
