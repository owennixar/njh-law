import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-charcoal-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Firm wordmark + contact */}
          <div>
            <Link href="/" className="group inline-block">
              <span className="wordmark block text-lg text-white">
                Nixon Jach Hubbard
              </span>
              <span className="wordmark-sub mt-1 block text-[10px] text-charcoal-400">
                Attorneys &amp; Counselors
              </span>
            </Link>
            <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed">
              <p>14241 Dallas Parkway, Suite 575</p>
              <p>Dallas, Texas 75254</p>
            </address>
            <div className="mt-3 space-y-1 text-sm">
              <p>
                <a href="tel:9725037000" className="transition-colors hover:text-white">
                  (972) 503-7000
                </a>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-wider text-white uppercase">Firm</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/attorneys", label: "Attorneys" },
                { href: "/clients", label: "Clients" },
                { href: "/insights", label: "Insights" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <p className="text-xs font-semibold tracking-wider text-white uppercase">Practice Areas</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/practice-areas/construction-law", label: "Construction Law" },
                { href: "/practice-areas/commercial-real-estate", label: "Commercial Real Estate" },
                { href: "/practice-areas/business-litigation", label: "Business Litigation" },
                { href: "/practice-areas/corporate-transactions", label: "Corporate Transactions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <p className="text-xs font-semibold tracking-wider text-white uppercase">Get in Touch</p>
            <p className="mt-4 text-sm leading-relaxed">
              We respond within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded bg-gold-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-navy-800 pt-6">
          <p className="text-xs leading-relaxed text-charcoal-400">
            &copy; {currentYear} Nixon Jach Hubbard. All rights reserved.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-charcoal-500">
            This website is designed for general information only. The information
            presented should not be construed as formal legal advice or the
            formation of a lawyer/client relationship.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-charcoal-500">
            Except where specifically noted, our attorneys are not certified by
            the Texas Board of Legal Specialization.
          </p>
        </div>
      </div>
    </footer>
  );
}
