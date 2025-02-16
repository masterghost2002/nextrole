import type { Metadata } from "next";
import { Silkscreen, VT323, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";

// Silkscreen - Perfect for main headings, very retro pixel font
const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

// VT323 - Great for subheadings and buttons, classic terminal style
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

// IBM Plex Mono - Clean monospace for inputs and body text
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
});

export const viewport = {
  themeColor: "#00ff00",
};

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${silkscreen.variable} ${vt323.variable} ${ibmPlexMono.variable} font-mono antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
