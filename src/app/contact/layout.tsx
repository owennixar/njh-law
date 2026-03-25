import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nixon Jach Hubbard | Dallas Attorneys",
  description:
    "Reach Nixon Jach Hubbard at (972) 503-7000. Dallas office at 14241 Dallas Parkway, Suite 575. Construction, real estate, litigation & corporate counsel.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Nixon Jach Hubbard | Dallas Law Firm",
    description:
      "Schedule a consultation with a Dallas business law attorney. (972) 503-7000.",
  },
  twitter: {
    card: "summary",
    title: "Contact Nixon Jach Hubbard | Dallas Law Firm",
    description:
      "Schedule a consultation with a Dallas business law attorney. (972) 503-7000.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
