import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd, personSchema, websiteSchema } from "@/components/JsonLd";
import { BackToTop } from "@/components/ui/BackToTop";
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
    "Gourang Patidar is an AI/ML engineer building intelligent systems with Python and LLMs. Founder of TheQuickAI and Lumira.",
  applicationName: "Gourang Patidar",
  authors: [{ name: "Gourang Patidar", url: siteUrl }],
  creator: "Gourang Patidar",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "LLM",
    "RAG",
    "AI Agents",
    "Python",
    "Founder",
    "TheQuickAI",
    "Lumira",
  ],
  openGraph: {
    title: "Gourang Patidar — AI / ML Engineer",
    description:
      "AI/ML engineer building intelligent systems with Python and LLMs.",
    url: siteUrl,
    siteName: "Gourang Patidar",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gourang Patidar — AI / ML Engineer",
    creator: "@GourangPatidar",
  },
  appleWebApp: {
    capable: true,
    title: "Gourang",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": [
        {
          url: `${siteUrl}/feed.xml`,
          title: "Gourang Patidar — Notes from the build",
        },
      ],
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5EDE0" },
    { media: "(prefers-color-scheme: dark)", color: "#1A2438" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg focus:font-bold focus:uppercase focus:tracking-tight focus:outline-2 focus:outline-offset-2 focus:outline-brand"
        >
          Skip to main content
        </a>
        <JsonLd data={[personSchema(), websiteSchema()]} />
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
