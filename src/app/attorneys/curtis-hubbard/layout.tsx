import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curtis Hubbard | Nixon Jach Hubbard | Dallas Business Litigation Attorney",
  description:
    "Curtis Hubbard is a Dallas business litigation and corporate transactions attorney at Nixon Jach Hubbard, representing companies in disputes across Texas.",
  openGraph: {
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
