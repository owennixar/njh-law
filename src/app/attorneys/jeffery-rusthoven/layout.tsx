import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeffery H. Rusthoven | Nixon Jach Hubbard | Dallas Construction Attorney",
  description:
    "Jeffery Rusthoven is a Dallas construction law and commercial real estate attorney at Nixon Jach Hubbard, handling lien claims and transactions across Texas.",
  openGraph: {
    title: "Jeffery H. Rusthoven | Dallas Construction Attorney",
    description:
      "Attorney at Nixon Jach Hubbard. Construction law and commercial real estate in Dallas, Texas.",
  },
};

export default function JefferyRusthovenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
