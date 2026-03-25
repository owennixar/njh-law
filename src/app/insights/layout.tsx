import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Nixon Jach Hubbard | Dallas Attorneys",
  description:
    "Legal insights on construction law, commercial real estate, business litigation & corporate transactions from Dallas attorneys at Nixon Jach Hubbard.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights & Articles | Nixon Jach Hubbard",
    description:
      "Practical legal analysis for contractors, developers, and business owners in Dallas and across Texas.",
  },
  twitter: {
    card: "summary",
    title: "Insights & Articles | Nixon Jach Hubbard",
    description:
      "Practical legal analysis for contractors, developers, and business owners in Dallas and across Texas.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
