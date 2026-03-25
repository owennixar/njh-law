"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const practiceAreaLinks = [
  { href: "/practice-areas/construction-law", label: "Construction Law" },
  { href: "/practice-areas/commercial-real-estate", label: "Commercial Real Estate" },
  { href: "/practice-areas/business-litigation", label: "Business Litigation" },
  { href: "/practice-areas/corporate-transactions", label: "Corporate Transactions" },
];

const industryLinks = [
  { href: "/practice-areas/construction-law", label: "Commercial Construction" },
  { href: "/practice-areas/commercial-real-estate", label: "Commercial Real Estate" },
  { href: "/practice-areas/corporate-transactions", label: "General Business" },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/attorneys", label: "Attorneys" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const practiceRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (practiceRef.current && !practiceRef.current.contains(e.target as Node)) {
        setPracticeOpen(false);
      }
      if (industryRef.current && !industryRef.current.contains(e.target as Node)) {
        setIndustryOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const chevronDown = (
    <svg className="ml-1 h-3.5 w-3.5 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-charcoal-200 bg-white shadow-md"
          : "border-transparent bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Text wordmark */}
        <Link href="/" className="group shrink-0">
          <span className="wordmark block text-base text-navy-900 sm:text-lg">
            Nixon Jach Hubbard
          </span>
          <span className="wordmark-sub mt-0.5 block text-[9px] text-charcoal-400 sm:text-[10px]">
            Attorneys &amp; Counselors
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded px-2 py-1.5 text-[13px] font-medium text-charcoal-600 transition-colors hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}

          {/* Practice Areas dropdown */}
          <div ref={practiceRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setPracticeOpen(!practiceOpen);
                setIndustryOpen(false);
              }}
              className="flex items-center whitespace-nowrap rounded px-2 py-1.5 text-[13px] font-medium text-charcoal-600 transition-colors hover:text-navy-900"
            >
              Practice
              {chevronDown}
            </button>
            <AnimatePresence>
              {practiceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full z-50 mt-2 w-64 rounded-lg border border-charcoal-200 bg-white py-2 shadow-xl"
                >
                  {practiceAreaLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                      onClick={() => setPracticeOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries dropdown */}
          <div ref={industryRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setIndustryOpen(!industryOpen);
                setPracticeOpen(false);
              }}
              className="flex items-center whitespace-nowrap rounded px-2 py-1.5 text-[13px] font-medium text-charcoal-600 transition-colors hover:text-navy-900"
            >
              Industries
              {chevronDown}
            </button>
            <AnimatePresence>
              {industryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full z-50 mt-2 w-60 rounded-lg border border-charcoal-200 bg-white py-2 shadow-xl"
                >
                  {industryLinks.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                      onClick={() => setIndustryOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/clients"
            className="whitespace-nowrap rounded px-2 py-1.5 text-[13px] font-medium text-charcoal-600 transition-colors hover:text-navy-900"
          >
            Clients
          </Link>
          <Link
            href="/insights"
            className="whitespace-nowrap rounded px-2 py-1.5 text-[13px] font-medium text-charcoal-600 transition-colors hover:text-navy-900"
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded px-2 py-1.5 text-[13px] font-medium text-charcoal-600 transition-colors hover:text-navy-900"
          >
            Contact
          </Link>

          {/* CTA button inline with nav */}
          <Link
            href="/contact"
            className="whitespace-nowrap rounded bg-gold-400 px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-gold-300"
          >
            Consult
          </Link>
        </nav>

        {/* Mobile: phone icon + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:9725037000"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-charcoal-100"
            aria-label="Call (972) 503-7000"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-charcoal-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6 text-navy-900"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav — animated */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-charcoal-200 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Practice Areas section */}
              <p className="mt-2 px-3 pt-2 text-xs font-semibold tracking-wider text-charcoal-400 uppercase">
                Practice Areas
              </p>
              {practiceAreaLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 pl-6 text-sm font-medium text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Industries section */}
              <p className="mt-2 px-3 pt-2 text-xs font-semibold tracking-wider text-charcoal-400 uppercase">
                Industries
              </p>
              {industryLinks.map((link) => (
                <Link
                  key={link.href + "-industry"}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 pl-6 text-sm font-medium text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/clients"
                className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                onClick={() => setMobileOpen(false)}
              >
                Clients
              </Link>
              <Link
                href="/insights"
                className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                onClick={() => setMobileOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-600 transition-colors hover:bg-charcoal-50 hover:text-navy-900"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:9725037000"
                className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-600 transition-colors hover:bg-charcoal-50"
              >
                (972) 503-7000
              </a>
              <Link
                href="/contact"
                className="mt-2 rounded-lg bg-gold-400 px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-gold-300"
                onClick={() => setMobileOpen(false)}
              >
                Consult
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
