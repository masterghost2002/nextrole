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
  title: "NextRole | Your Next Role, Revealed",
  description:
    "Get anonymous insider insights on salaries, work culture, and interview experiences. Make your next career move with confidence using real data from verified employees.",
  keywords: [
    "anonymous company reviews",
    "salary insights",
    "interview experiences",
    "work culture",
    "career growth",
    "job insights",
    "anonymous employee reviews",
    "company culture",
    "salary data",
    "career moves",
  ],
  openGraph: {
    title: "NextRole | Your Next Role, Revealed",
    description:
      "Access anonymous insider insights on salaries, work culture, and interview experiences to make informed career decisions.",
    type: "website",
    locale: "en_US",
    siteName: "NextRole",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextRole | Your Next Role, Revealed",
    description:
      "Access anonymous insider insights on salaries, work culture, and interview experiences to make informed career decisions.",
  },
  authors: [{ name: "NextRole" }],
  creator: "NextRole",
  publisher: "NextRole",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#D91656",
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
