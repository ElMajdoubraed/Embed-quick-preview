import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Transform Decision-Making with Leadshook: Multi-Templates & Layouts for Dynamic Embed Decision Trees",
  description:
    "Unlock the power of dynamic decision-making with Leadshook's versatile offering. Explore a range of templates and layouts to craft engaging and intuitive decision trees. Embed these dynamic tools seamlessly into your landing pages for enhanced user interaction and conversion optimization.",
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
