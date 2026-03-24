import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Litigation Attorney Dallas | Nixon Jach Hubbard | Commercial Dispute Lawyers",
  description:
    "Business litigation attorney in Dallas handling breach of contract, partner disputes, fiduciary claims & injunctions in Texas state and federal courts.",
  openGraph: {
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
