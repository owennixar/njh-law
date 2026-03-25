import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeffery H. Rusthoven | Nixon Jach Hubbard | Dallas Construction Attorney",
  description:
    "Jeff Rusthoven is a partner at Nixon Jach Hubbard, board certified in construction law, representing clients in complex construction and business litigation disputes across Texas.",
  openGraph: {
    title: "Jeffery H. Rusthoven | Dallas Construction Attorney",
    description:
      "Partner at Nixon Jach Hubbard. Board certified in construction law with two decades of litigation experience in Dallas, Texas.",
  },
};

export default function JefferyRusthovenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
