import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Formation Attorney Dallas | Nixon Jach Hubbard | Corporate Transaction Lawyers",
  description:
    "Business formation attorney in Dallas handling LLCs, corporations, joint ventures & contract drafting under the Texas Business Organizations Code.",
  openGraph: {
    title: "Business Formation Attorney Dallas | Nixon Jach Hubbard",
    description:
      "Dallas corporate attorneys handling entity formation, joint ventures, and contract drafting across Texas.",
  },
};

export default function CorporateTransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
