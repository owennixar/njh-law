import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear();

const navColumns = [
  {
    title: "Firm",
    links: [
      { href: "/about", label: "About the Firm" },
      { href: "/attorneys", label: "Our Attorneys" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Practice Areas",
    links: [
      { href: "/practice-areas/construction-law", label: "Construction Law" },
      { href: "/practice-areas/commercial-real-estate", label: "Commercial Real Estate" },
      { href: "/practice-areas/business-litigation", label: "Business Litigation" },
      { href: "/practice-areas/corporate-transactions", label: "Corporate Transactions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/insights", label: "Insights & Articles" },
      { href: "/contact", label: "Schedule a Consultation" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-200 bg-navy-950 text-charcoal-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Firm info column */}
          <div>
            <Link href="/">
              <Image
                src="/images/NJH_LAW_logo.gif"
                alt="Nixon Jach Hubbard - Attorneys at Law"
                width={140}
                height={46}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed">
              <p>International Plaza III</p>
              <p>14241 Dallas Parkway, Suite 575</p>
              <p>Dallas, Texas 75254</p>
            </address>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <span className="text-charcoal-400">Phone: </span>
                <a href="tel:9725037000" className="transition-colors hover:text-white">
                  (972) 503-7000
                </a>
              </p>
              <p>
                <span className="text-charcoal-400">Fax: </span>
                <span>(972) 503-7001</span>
              </p>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold tracking-wider text-white uppercase">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-1 text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-navy-800 pt-8">
          <p className="text-xs leading-relaxed text-charcoal-400">
            &copy; {currentYear} Nixon Jach Hubbard. All rights reserved.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-charcoal-500">
            This website is designed for general information only. The information
            presented should not be construed as formal legal advice or the
            formation of a lawyer/client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
