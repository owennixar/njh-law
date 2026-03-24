import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthony P. Jach | Nixon Jach Hubbard | Dallas Real Estate Attorney",
  description:
    "Anthony (Tony) Jach is a Dallas commercial real estate and construction attorney at Nixon Jach Hubbard, serving developers and investors across the DFW metroplex.",
  openGraph: {
    title: "Anthony P. Jach | Dallas Real Estate Attorney",
    description:
      "Partner at Nixon Jach Hubbard. Commercial real estate, construction, and business litigation in Dallas.",
  },
};

export default function AnthonyJachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
