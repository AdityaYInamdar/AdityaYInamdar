import type { Metadata } from "next";
import { Inter, Sofia_Sans_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const sofia = Sofia_Sans_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-sofia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Inamdar — Software Engineer",
  description:
    "Backend Engineer and Full Stack Developer building production systems with Python, FastAPI, React, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sofia.variable}`}>
      <body>{children}</body>
    </html>
  );
}
