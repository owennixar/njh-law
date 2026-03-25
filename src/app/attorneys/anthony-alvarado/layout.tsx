import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthony R. Alvarado | Nixon Jach Hubbard | Dallas Construction Attorney",
  description:
    "Anthony Alvarado is an associate at Nixon Jach Hubbard, a solution-oriented construction attorney focused on payment and performance disputes, lien and bond claims in Texas.",
  openGraph: {
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
