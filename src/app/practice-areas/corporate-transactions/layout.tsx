import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Formation Attorney | NJH | Dallas",
  description:
    "Dallas business formation attorney handling LLCs, corporations, joint ventures & contract drafting under the Texas Business Organizations Code. NJH Law.",
  alternates: { canonical: "/practice-areas/corporate-transactions" },
  openGraph: {
    title: "Business Formation Attorney Dallas | Nixon Jach Hubbard",
    description:
      "Dallas corporate attorneys handling entity formation, joint ventures, and contract drafting across Texas.",
  },
  twitter: {
    card: "summary",
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
