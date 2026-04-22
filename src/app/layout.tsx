import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gourangpatidar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gourang Patidar — AI / ML Engineer",
    template: "%s · Gourang Patidar",
  },
  description:
    "Gourang Patidar is an AI/ML engineer building intelligent systems with Python and LLMs.",
  openGraph: {
    title: "Gourang Patidar — AI / ML Engineer",
    description:
      "AI/ML engineer building intelligent systems with Python and LLMs.",
    url: siteUrl,
    siteName: "Gourang Patidar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourang Patidar — AI / ML Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
