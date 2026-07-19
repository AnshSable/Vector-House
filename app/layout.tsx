import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vector House — Web, AI & Design Studio",
    template: "%s | Vector House",
  },
  description:
    "Vector House is a digital agency building websites, AI systems, and thoughtful design for ambitious brands worldwide.",
  keywords: [
    "web development",
    "AI agents",
    "automation",
    "UI/UX design",
    "video editing",
    "motion design",
    "digital agency",
    "India",
  ],
  authors: [{ name: "Vector House Studio" }],
  openGraph: {
    title: "Vector House — Web, AI & Design Studio",
    description:
      "We build the digital products and AI systems your business needs to move fast.",
    url: "https://vectorhouse.studio",
    siteName: "Vector House",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector House — Web, AI & Design Studio",
    description: "Web, AI & Design for ambitious brands.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[#F8F6F2] dark:bg-[#1B1B1B] text-[#4B3A32] dark:text-[#F2EDE6] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
