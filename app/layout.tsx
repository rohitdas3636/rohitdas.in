/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rohitdas.in"),
  title: {
    default: "Rohit Das | Digital Marketing Strategist & Performance Expert",
    template: "%s | Rohit Das",
  },
  description:
    "Premium digital marketing portfolio for Rohit Das, helping businesses generate higher-quality leads through Google Ads, SEO, CRO, funnels, and automation.",
  openGraph: {
    title: "Rohit Das | High-Performance Digital Marketing",
    description:
      "Generate better leads, reduce wasted ad spend, and scale with data-driven digital marketing strategy.",
    url: "https://www.rohitdas.in",
    siteName: "Rohit Das",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Das | Digital Marketing Strategist",
    description:
      "Performance marketing, SEO, CRO, lead generation, and funnel strategy for growth-focused businesses.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HWSNTJYNDT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HWSNTJYNDT');
            `,
          }}
        />
      </head>
      <body className={`${manrope.variable} antialiased`} suppressHydrationWarning>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
