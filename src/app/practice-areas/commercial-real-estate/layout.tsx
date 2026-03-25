import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Real Estate Attorney | NJH | Dallas",
  description:
    "Commercial real estate attorney in Dallas handling acquisitions, leasing, development & financing for developers, investors & landlords across the DFW metroplex.",
  alternates: { canonical: "/practice-areas/commercial-real-estate" },
  openGraph: {
    title: "Commercial Real Estate Attorney Dallas | Nixon Jach Hubbard",
    description:
      "Dallas real estate attorneys handling acquisitions, leasing, development, and financing across DFW.",
  },
  twitter: {
    card: "summary",
    title: "Commercial Real Estate Attorney Dallas | Nixon Jach Hubbard",
    description:
      "Dallas real estate attorneys handling acquisitions, leasing, development, and financing across DFW.",
  },
};

export default function CommercialRealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
