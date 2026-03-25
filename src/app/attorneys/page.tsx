"use client";

import Link from "next/link";
import Image from "next/image";
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

const attorneys = [
  {
    name: "Michael S. Nixon",
    title: "Partner",
    slug: "michael-nixon",
    focus: "Construction Law & Real Estate Disputes",
    phone: "(972) 503-7002",
    email: "mnixon@njh-law.com",
    photo: "/images/mike_nixon.avif",
    recognitions:
      "Super Lawyers 2008, 2010\u20132024 \u00b7 Best Lawyers 2019\u20132024 \u00b7 Chambers USA 2020\u20132024",
  },
  {
    name: "Anthony (Tony) P. Jach",
    title: "Partner",
    slug: "anthony-jach",
    focus: "Commercial Real Estate, Construction & Business Litigation",
    phone: "(972) 503-7003",
    email: "tjach@njh-law.com",
    photo: "/images/tony_jach.avif",
    recognitions: "",
  },
  {
    name: "Curtis Hubbard",
    title: "Partner",
    slug: "curtis-hubbard",
    focus: "Business Litigation & Commercial Transactions",
    phone: "(972) 503-7004",
    email: "chubbard@njh-law.com",
    photo: "/images/curtis_hubbard.avif",
    recognitions: "",
  },
  {
    name: "Jeffery H. Rusthoven",
    title: "Attorney",
    slug: "jeffery-rusthoven",
    focus: "Construction Law & Commercial Real Estate",
    phone: "(972) 503-7006",
    email: "jrusthoven@njh-law.com",
    photo: "/images/jeff_rusthoven.avif",
    recognitions: "",
  },
  {
    name: "Anthony R. Alvarado",
    title: "Attorney",
    slug: "anthony-alvarado",
    focus: "Business Litigation & Corporate Transactions",
    phone: "(972) 503-7007",
    email: "aalvarado@njh-law.com",
    photo: "",
    recognitions: "",
  },
];

export default function AttorneysPage() {
  return (
    <>
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Attorneys
            </h1>
            <p className="mt-4 max-w-xl text-lg text-charcoal-300">
              Five attorneys focused on construction law, commercial real estate,
              business litigation, and corporate transactions in Dallas and
              across Texas.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Uniform grid: 3 cols for partners, then 2 remaining below */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {attorneys.map((attorney, i) => (
              <FadeIn key={attorney.slug} delay={i * 0.08}>
                <Link
                  href={`/attorneys/${attorney.slug}`}
                  className="group block h-full rounded-lg border border-charcoal-200 transition-colors hover:border-navy-600"
                >
                  {/* Attorney photo — consistent 3:4 portrait crop */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg bg-charcoal-100">
                    {attorney.photo ? (
                      <Image
                        src={attorney.photo}
                        alt={`Professional headshot of ${attorney.name}, ${attorney.focus} attorney in Dallas`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-navy-800">
                        <span className="font-heading text-5xl font-bold text-white/60">
                          {attorney.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-lg font-bold text-navy-900">
                      {attorney.name}
                    </h2>
                    <p className="text-sm text-charcoal-500">
                      {attorney.title}
                    </p>
                    <p className="mt-2 text-sm font-medium text-charcoal-600">
                      {attorney.focus}
                    </p>
                    <div className="mt-3 space-y-1 text-xs text-charcoal-400">
                      <p>{attorney.phone}</p>
                      <p>{attorney.email}</p>
                    </div>
                    {attorney.recognitions && (
                      <p className="mt-3 text-xs leading-relaxed text-navy-600">
                        {attorney.recognitions}
                      </p>
                    )}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
