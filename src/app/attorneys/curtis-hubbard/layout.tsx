import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curtis Hubbard | Nixon Jach Hubbard | Dallas",
  description:
    "Curtis Hubbard is a Dallas business litigation and construction attorney at Nixon Jach Hubbard. Super Lawyers 2011\u20132024, Best Lawyers 2021\u20132024. Texas and Arkansas.",
  alternates: { canonical: "/attorneys/curtis-hubbard" },
  openGraph: {
    title: "Curtis Hubbard | Dallas Business Litigation Attorney",
    description:
      "Partner at Nixon Jach Hubbard. Business litigation and corporate transactions in Dallas, Texas.",
  },
  twitter: {
    card: "summary",
    title: "Curtis Hubbard | Dallas Business Litigation Attorney",
    description:
      "Partner at Nixon Jach Hubbard. Business litigation and corporate transactions in Dallas, Texas.",
  },
};

export default function CurtisHubbardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
