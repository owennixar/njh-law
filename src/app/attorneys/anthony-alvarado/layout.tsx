import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthony Alvarado | Nixon Jach Hubbard | Dallas",
  description:
    "Anthony Alvarado is a Dallas construction attorney at Nixon Jach Hubbard focused on payment disputes, mechanic\u2019s lien claims, and bond claims across Texas.",
  alternates: { canonical: "/attorneys/anthony-alvarado" },
  openGraph: {
    title: "Anthony R. Alvarado | Dallas Construction Attorney",
    description:
      "Associate at Nixon Jach Hubbard. Construction law focused on payment disputes, lien and bond claims in Dallas, Texas.",
  },
  twitter: {
    card: "summary",
    title: "Anthony R. Alvarado | Dallas Construction Attorney",
    description:
      "Associate at Nixon Jach Hubbard. Construction law focused on payment disputes, lien and bond claims in Dallas, Texas.",
  },
};

export default function AnthonyAlvaradoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
