import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dallas Construction Attorney | Nixon Jach Hubbard",
  description:
    "Dallas construction attorney with 30+ years handling mechanic\u2019s lien claims, contract disputes, delay claims & project litigation. Chambers USA, Super Lawyers.",
  alternates: { canonical: "/practice-areas/construction-law" },
  openGraph: {
    title: "Dallas Construction Attorney | Nixon Jach Hubbard",
    description:
      "Construction law attorneys in Dallas handling lien claims, delay disputes, and contract litigation across Texas.",
  },
  twitter: {
    card: "summary",
    title: "Dallas Construction Attorney | Nixon Jach Hubbard",
    description:
      "Construction law attorneys in Dallas handling lien claims, delay disputes, and contract litigation across Texas.",
  },
};

export default function ConstructionLawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
