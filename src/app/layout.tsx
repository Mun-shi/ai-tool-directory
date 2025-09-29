import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Base URL for metadata (update if deploying on custom domain)
const siteUrl = ""; // TODO: replace with production domain

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Tool Directory – Discover the Best AI Tools by Category",
    template: "%s | AI Tool Directory"
  },
  description: "Curated AI tool directory featuring chatbots, image generation, coding assistance, automation, productivity and more – compare pricing, features and categories.",
  keywords: [
    "AI tools","AI directory","best AI apps","AI chatbot","image generation AI","AI coding assistant","AI workflow automation","AI meeting notes","AI scheduling","AI presentation tools","AI writing tools"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AI Tool Directory – Curated & Categorized",
    description: "Explore and compare the best AI tools across productivity, creativity, development and automation.",
    url: siteUrl,
    siteName: "AI Tool Directory",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Tool Directory Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tool Directory – Curated & Categorized",
    description: "Discover the best AI tools by feature & category.",
    images: ["/og-image.png"],
    creator: "@yourhandle"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
