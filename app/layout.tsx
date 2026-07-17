import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dubai & Muscat · 2026",
  description: "A living itinerary for three friends travelling through Dubai and Muscat.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
