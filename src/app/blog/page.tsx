import LogoIcon from "@/icons/logos/logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest from MN Civic Tech’s blog! Explore insights, updates, and stories about civic tech projects and community impact in Minnesota.",

  openGraph: {
    title: "Blog",
    description:
      "Read the latest from MN Civic Tech’s blog! Explore insights, updates, and stories about civic tech projects and community impact in Minnesota.",
    url: "https://www.mncivictech.org/blog",
    images: ["/og"],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-50 p-12 pt-32">
      <LogoIcon className="size-36" />

      <h1 className="my-8 text-center font-bold text-green-800">Blog</h1>

      <p className="text-green-800">🚧 coming soon 🚧</p>
    </main>
  );
}
