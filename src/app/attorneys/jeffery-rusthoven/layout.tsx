import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeff Rusthoven | Nixon Jach Hubbard | Dallas",
  description:
    "Jeff Rusthoven is a board certified construction law attorney at Nixon Jach Hubbard in Dallas. Two decades of litigation experience across Texas courts.",
  alternates: { canonical: "/attorneys/jeffery-rusthoven" },
  openGraph: {
    title: "Jeffery H. Rusthoven | Dallas Construction Attorney",
    description:
      "Partner at Nixon Jach Hubbard. Board certified in construction law with two decades of litigation experience in Dallas, Texas.",
  },
  twitter: {
    card: "summary",
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
