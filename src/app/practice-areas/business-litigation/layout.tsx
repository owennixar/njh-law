import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Litigation Attorney | NJH | Dallas",
  description:
    "Business litigation attorney in Dallas handling breach of contract, partner disputes, fiduciary claims & injunctions. Texas state and federal court experience.",
  alternates: { canonical: "/practice-areas/business-litigation" },
  openGraph: {
    title: "Business Litigation Attorney Dallas | Nixon Jach Hubbard",
    description:
      "Dallas business litigation attorneys handling contract disputes, partner conflicts, and injunctions across Texas.",
  },
  twitter: {
    card: "summary",
    title: "Business Litigation Attorney Dallas | Nixon Jach Hubbard",
    description:
      "Dallas business litigation attorneys handling contract disputes, partner conflicts, and injunctions across Texas.",
  },
};

export default function BusinessLitigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
