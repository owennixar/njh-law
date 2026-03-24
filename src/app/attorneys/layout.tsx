import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Attorneys | Nixon Jach Hubbard | Dallas Business Law Attorneys",
  description:
    "Meet the five attorneys at Nixon Jach Hubbard \u2014 Dallas construction, real estate, litigation & corporate lawyers serving businesses across Texas.",
  openGraph: {
    title: "Our Attorneys | Nixon Jach Hubbard",
    description:
      "Five Dallas attorneys focused on construction law, commercial real estate, business litigation, and corporate transactions.",
  },
};

export default function AttorneysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
