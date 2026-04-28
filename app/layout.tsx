import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitdas.marketing"),
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
    url: "https://rohitdas.marketing",
    siteName: "Rohit Das",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Das | Digital Marketing Strategist",
    description:
      "Performance marketing, SEO, CRO, lead generation, and funnel strategy for growth-focused businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`} suppressHydrationWarning>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
