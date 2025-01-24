// import NewsletterForm from "@/app/get-involved/newsletter/NewsletterForm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Introduce yourself to MN Civic Tech! Share your skills, interests, and background to connect with projects and people who share your passion for civic tech.",

  openGraph: {
    title: "Introduce Yourself",
    description:
      "Introduce yourself to MN Civic Tech! Share your skills, interests, and background to connect with projects and people who share your passion for civic tech.",
  },
  alternates: {
    canonical: "/get-involved/newsletter",
  },
};

export default function NewsletterPage() {
  // FIXME: figure out what a newsletter might look like
  notFound();

  // return (
  //   <div className="mx-auto min-h-screen bg-blue-50/5 p-6 pt-32 text-blue-900 md:p-36">
  //     <h1 className="mb-6 font-bold text-2xl">Newsletter</h1>
  //
  //     <p className="mb-8">
  //       Our Newsletter allows you to stay informed with upcoming events, new
  //       projects, and other initiatives we have going on.
  //     </p>
  //
  //     <NewsletterForm />
  //   </div>
  // );
}
