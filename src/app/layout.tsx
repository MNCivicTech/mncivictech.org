import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "./tailwind.css";

export const metadata: Metadata = {
  title: "MN Civic Tech",
  description:
    "Connecting technologists, public servants, and community advocates to improve Civic Tech for Minnesota",
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
    <html lang="en" className={JetBrainsFont.className}>
      <body>{children}</body>
    </html>
  );
}
