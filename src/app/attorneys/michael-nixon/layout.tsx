import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael S. Nixon | Nixon Jach Hubbard | Dallas Construction Attorney",
  description:
    "Michael S. Nixon is a Dallas construction attorney with 35+ years handling lien claims, delay disputes & project litigation. Super Lawyers 2008\u20132024, Chambers USA.",
  openGraph: {
    title: "Michael S. Nixon | Dallas Construction Attorney",
    description:
      "Partner at Nixon Jach Hubbard. 35+ years of construction law in Dallas. Super Lawyers, Chambers USA, Best Lawyers.",
  },
};

export default function MichaelNixonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
