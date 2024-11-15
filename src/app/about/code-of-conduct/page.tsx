import LogoIcon from "@/icons/logos/logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "MN Civic Tech’s Code of Conduct ensures a welcoming, inclusive environment for all. Read our commitment to respect, diversity, and collaboration.",

  openGraph: {
    title: "Code of Conduct",
    description:
      "MN Civic Tech’s Code of Conduct ensures a welcoming, inclusive environment for all. Read our commitment to respect, diversity, and collaboration.",
  },
  alternates: {
    canonical: "/about/code-of-conduct",
  },
};

export default function CodeOfConductPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-50 p-12 pt-32">
      <LogoIcon className="size-36" />

      <h1 className="my-8 text-center font-bold text-green-800">
        Code of Conduct
      </h1>

      <p className="text-green-800">🚧 coming soon 🚧</p>
    </main>
  );
}
