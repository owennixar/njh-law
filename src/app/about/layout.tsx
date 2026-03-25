import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Firm | Nixon Jach Hubbard | Dallas",
  description:
    "Dallas law firm specializing in construction law, commercial real estate, business litigation & corporate transactions. Five attorneys, four practice areas, 30+ years.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Nixon Jach Hubbard | Dallas Business Law Firm",
    description:
      "Five attorneys focused on construction, real estate, litigation, and corporate law in Dallas, Texas.",
  },
  twitter: {
    card: "summary",
    title: "About Nixon Jach Hubbard | Dallas Business Law Firm",
    description:
      "Five attorneys focused on construction, real estate, litigation, and corporate law in Dallas, Texas.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
