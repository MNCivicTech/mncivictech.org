import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import Footer from "@/app/Footer";
import NavBar from "@/app/NavBar";

import "./tailwind.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mncivictech.org"),
  title: {
    template: "%s | MN Civic Tech",
    default: "MN Civic Tech",
  },
  description:
    "Connecting technologists, public servants, & community advocates to improve Minnesota’s civic tech by building together.",
  applicationName: "MN Civic Tech",
  keywords: [
    "minnesota civic tech",
    "mn civic tech",
    "civic tech",
    "minnesota tech",
    "minnesota software engineer",
  ],
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "MN Civic Tech",
    description:
      "Connecting technologists, public servants, & community advocates to improve Minnesota’s civic tech by building together.",
    type: "website",
    url: "https://www.mncivictech.org",
    images: ["/og"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "16x16 32x32 64x64",
      },
      {
        url: "/favicons/196x196.png",
        sizes: "196x196",
      },
      {
        url: "/favicons/favicon-96.png",
        sizes: "96x96",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/manifest.json",
};

const JetBrainsFont = localFont({
  src: [
    // Extra Bold
    { path: "../../public/fonts/JetBrainsMono-ExtraBold.ttf", weight: "800" },

    // Bold
    { path: "../../public/fonts/JetBrainsMono-Bold.ttf", weight: "700" },

    // Semi Bold
    { path: "../../public/fonts/JetBrainsMono-SemiBold.ttf", weight: "600" },

    // Medium
    { path: "../../public/fonts/JetBrainsMono-Medium.ttf", weight: "500" },

    // Regular
    { path: "../../public/fonts/JetBrainsMono-Regular.ttf", weight: "400" },
  ],
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${JetBrainsFont.variable} ${GeistSans.variable}`}
    >
      <body>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
