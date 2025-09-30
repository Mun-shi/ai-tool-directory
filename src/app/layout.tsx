import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Base URL for metadata (update if deploying on custom domain)
const siteUrl = "https://ai-toolkit.directory"; // TODO: replace with production domain

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
  applicationName: "AI Toolkit Directory",
  title: {
    default: "AI Toolkit Directory – Discover the Best AI Tools by Category",
    template: "%s | AI Toolkit Directory"
  },
  description: "Curated AI toolkit directory featuring chatbots, image generation, coding assistance, automation, productivity and more – compare pricing, features and categories.",
  keywords: [
    "AI tools","AI directory","best AI apps","AI chatbot","image generation AI","AI coding assistant","AI workflow automation","AI meeting notes","AI scheduling","AI presentation tools","AI writing tools"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "AI Toolkit Directory – Curated & Categorized",
    description: "Explore and compare the best AI tools across productivity, creativity, development and automation.",
    url: siteUrl,
    siteName: "AI Toolkit Directory",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Toolkit Directory Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Toolkit Directory – Curated & Categorized",
    description: "Discover the best AI tools by feature & category.",
    images: ["/og-image.png"],
    creator: "@yourhandle"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logos/logo.png", type: "image/png", sizes: "512x512" }
    ],
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
      <head>
        <meta name="theme-color" content="#0F62FE" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <link rel="preload" as="image" href="/logos/logo.png" />
        {/* Explicit favicon links for broader browser support */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logos/logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logos/logo.png" />
        <link rel="apple-touch-icon" href="/logos/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global structured data: Organization & WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'AI Toolkit Directory',
                  url: siteUrl,
                  logo: `${siteUrl}/logos/logo.png`,
                  sameAs: [
                    'https://twitter.com/yourhandle'
                  ]
                },
                {
                  '@type': 'WebSite',
                  name: 'AI Toolkit Directory',
                  url: siteUrl,
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: `${siteUrl}/?q={search_term_string}`,
                    'query-input': 'required name=search_term_string'
                  }
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
