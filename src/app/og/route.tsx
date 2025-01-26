export const revalidate = 60;

import { readFileSync } from "node:fs";
import { join } from "node:path";
import Logo from "@/icons/logos/logo";
import { ImageResponse } from "next/og";

const geistBold = readFileSync(
  join(
    process.cwd(),
    "node_modules",
    "geist",
    "dist",
    "fonts",
    "geist-sans",
    "Geist-Bold.ttf",
  ),
);

export async function GET() {
  return new ImageResponse(
    <div
      tw="flex flex-col w-full h-full items-center justify-center bg-green-50 text-2xl text-green-900 text-4xl"
      style={font("Geist")}
    >
      <Logo width="150" />
      {/*<h1>MN Civic Tech</h1>*/}
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: geistBold,
          weight: 400,
        },
      ],
    },
  );
}

function font(fontFamily: string) {
  return { fontFamily };
}
