import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CWA Sciences Classes | Maheshkhunt Coaching",
  description:
    "Offline and online science & math coaching for classes 8 to 12 in Maheshkhunt. Join CWA Sciences Classes for focused preparation and YouTube lessons.",
  openGraph: {
    title: "CWA Sciences Classes | Maheshkhunt Coaching",
    description:
      "Offline and online science & math coaching for classes 8 to 12 in Maheshkhunt. Join CWA Sciences Classes for focused preparation and YouTube lessons.",
    url: "https://agentic-7c4824bc.vercel.app",
    siteName: "CWA Sciences Classes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CWA Sciences Classes | Maheshkhunt Coaching",
    description:
      "Offline and online science & math coaching for classes 8 to 12 in Maheshkhunt. Join CWA Sciences Classes for focused preparation and YouTube lessons.",
  },
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
