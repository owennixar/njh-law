import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attorneys | Nixon Jach Hubbard | Dallas",
  description:
    "Meet the five Dallas attorneys at Nixon Jach Hubbard — construction, real estate, litigation & corporate lawyers serving businesses across Texas.",
  alternates: { canonical: "/attorneys" },
  openGraph: {
    title: "Our Attorneys | Nixon Jach Hubbard",
    description:
      "Five Dallas attorneys focused on construction law, commercial real estate, business litigation, and corporate transactions.",
  },
  twitter: {
    card: "summary",
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
