"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/practice-areas/construction-law", label: "Practice Areas" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-charcoal-200 bg-white shadow-md"
          : "border-transparent bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Firm logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/NJH_LAW_logo.gif"
            alt="Nixon Jach Hubbard - Attorneys at Law"
            width={240}
            height={80}
            className="h-14 w-auto mix-blend-multiply sm:h-[72px]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2 py-1.5 text-sm font-medium text-charcoal-600 transition-colors hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: phone + CTA (desktop) */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          <a
            href="tel:9725037000"
            className="rounded px-2 py-1.5 text-sm font-medium text-charcoal-600 transition-colors hover:text-navy-900"
          >
            (972) 503-7000
          </a>
          <Link
            href="/contact"
            className="rounded bg-gold-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
          >
            Schedule a Consultation
          </Link>
        </div>

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
                Schedule a Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
