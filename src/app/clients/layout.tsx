import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | Nixon Jach Hubbard | Dallas Construction & Business Law Firm",
  description:
    "Representative experience across the construction and real estate industries. Nixon Jach Hubbard represents general contractors, subcontractors, developers, and business owners throughout Texas.",
  openGraph: {
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
