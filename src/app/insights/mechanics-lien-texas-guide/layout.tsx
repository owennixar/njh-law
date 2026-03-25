import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanic\u2019s Lien Texas Guide | Nixon Jach Hubbard",
  description:
    "Step-by-step guide to filing a mechanic\u2019s lien in Texas under Property Code Chapter 53. Deadlines, notice requirements & enforcement by a Dallas attorney.",
  alternates: { canonical: "/insights/mechanics-lien-texas-guide" },
  openGraph: {
    type: "article",
    title: "How to File a Mechanic\u2019s Lien in Texas: A Step-by-Step Guide",
    description:
      "Complete guide to Texas mechanic\u2019s lien filing under Chapter 53. Deadlines, notices, common mistakes, and enforcement.",
    authors: ["Michael S. Nixon"],
    publishedTime: "2026-03-24T00:00:00Z",
    modifiedTime: "2026-03-24T00:00:00Z",
  },
  twitter: {
    card: "summary",
    title: "Mechanic\u2019s Lien Texas Guide | Nixon Jach Hubbard",
    description:
      "Step-by-step guide to filing a mechanic\u2019s lien in Texas under Property Code Chapter 53. Deadlines, notices & enforcement.",
  },
};

export default function MechanicsLienGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
