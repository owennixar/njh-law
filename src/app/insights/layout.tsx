import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles | Nixon Jach Hubbard | Dallas Business Law Attorneys",
  description:
    "Legal insights on construction law, commercial real estate, business litigation & corporate transactions from the attorneys at Nixon Jach Hubbard in Dallas.",
  openGraph: {
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
