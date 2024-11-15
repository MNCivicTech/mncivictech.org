import LogoIcon from "@/icons/logos/logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support MN Civic Tech’s mission with your donation. Help fund open-source, volunteer-driven projects that improve communities and make a lasting impact in Minnesota.",

  openGraph: {
    title: "Donate",
    description:
      "Support MN Civic Tech’s mission with your donation. Help fund open-source, volunteer-driven projects that improve communities and make a lasting impact in Minnesota.",
  },
  alternates: {
    canonical: "/donate",
  },
};

export default function DonatePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-50 p-12 pt-32">
      <LogoIcon className="size-36" />

      <h1 className="my-8 text-center font-bold text-green-800">Donate</h1>

      <p className="text-green-800">🚧 coming soon 🚧</p>
    </main>
  );
}
