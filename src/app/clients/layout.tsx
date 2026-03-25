import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | Nixon Jach Hubbard | Dallas Law Firm",
  description:
    "Dallas construction and business law firm representing GCs, subcontractors, developers, and owners. Lien claims, contract disputes & litigation across Texas.",
  alternates: { canonical: "/clients" },
  openGraph: {
    title: "Clients | Nixon Jach Hubbard",
    description:
      "Representative experience across the construction, real estate, and business industries in Dallas and throughout Texas.",
  },
  twitter: {
    card: "summary",
    title: "Clients | Nixon Jach Hubbard",
    description:
      "Representative experience across the construction, real estate, and business industries in Dallas and throughout Texas.",
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
