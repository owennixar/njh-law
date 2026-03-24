"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  q: string;
  a: string;
}

export default function AccordionFAQ({
  items,
  heading,
}: {
  items: FAQItem[];
  heading: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {heading}
      </h2>
      <p className="mt-4 text-sm text-charcoal-500">
        Every answer references the specific Texas statute that governs the issue.
      </p>

      <div className="mt-12 divide-y divide-charcoal-200 border-t border-charcoal-200">
        {items.map((item, i) => (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-start justify-between gap-4 py-6 text-left"
              aria-expanded={openIndex === i}
            >
              <h3 className="font-heading text-base font-bold text-navy-900 pr-4">
                {item.q}
              </h3>
              <span className="mt-1 shrink-0">
                <svg
                  className={`h-5 w-5 text-charcoal-400 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-relaxed text-charcoal-600">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
