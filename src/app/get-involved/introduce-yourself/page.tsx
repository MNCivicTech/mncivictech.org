import IntroductionForm from "@/app/get-involved/introduce-yourself/introduction-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduce Yourself",
  description:
    "Introduce yourself to MN Civic Tech! Share your skills, interests, and background to connect with projects and people who share your passion for civic tech.",

  openGraph: {
    title: "Introduce Yourself",
    description:
      "Introduce yourself to MN Civic Tech! Share your skills, interests, and background to connect with projects and people who share your passion for civic tech.",
    url: "https://www.mncivictech.org/get-involved/introduce-yourself",
    images: ["/og"],
  },
  alternates: {
    canonical: "/get-involved/introduce-yourself",
  },
};

export default function IntroduceYourselfPage() {
  return (
    <div className="mx-auto bg-blue-50/5 p-6 pt-32 text-blue-900 md:p-36">
      <h1 className="mb-6 font-bold text-2xl">Introduce Yourself</h1>

      <IntroductionForm />
    </div>
  );
}
