import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthony R. Alvarado | Nixon Jach Hubbard | Dallas Business Attorney",
  description:
    "Anthony Alvarado is a Dallas business litigation and corporate transactions attorney at Nixon Jach Hubbard, handling contract disputes and entity formation.",
  openGraph: {
    title: "Anthony R. Alvarado | Dallas Business Attorney",
    description:
      "Attorney at Nixon Jach Hubbard. Business litigation and corporate transactions in Dallas, Texas.",
  },
};

export default function AnthonyAlvaradoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
