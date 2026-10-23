import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight Centre",
  description: "Flight Centre",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },
  },
};

export default function FlightCentreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
