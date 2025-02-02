import PitchForm from "@/app/get-involved/pitch-a-project/pitch-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch a Project",
  description:
    "Pitch your project idea to MN Civic Tech! Share your vision and lead initiatives that use technology to address community needs in Minnesota.",

  openGraph: {
    title: "Pitch a Project",
    description:
      "Pitch your project idea to MN Civic Tech! Share your vision and lead initiatives that use technology to address community needs in Minnesota.",
    url: "https://www.mncivictech.org/get-involved/pitch-a-project",
    images: ["/og"],
  },
  alternates: {
    canonical: "/get-involved/pitch-a-project",
  },
};

export default function PitchAProjectPage() {
  return (
    <div className="mx-auto bg-blue-50/5 p-6 pt-32 text-blue-900 md:p-36">
      <h1 className="mb-6 font-bold text-2xl">Pitch a Project</h1>

      <p>
        If you have an idea for a project that could help connect, inform, or
        support our communities, we’d love to know more!
        <br />
        <br />
        Just fill out the form below to share your idea with us. Let’s see how
        we can work together to make a real difference.
      </p>

      <PitchForm />
    </div>
  );
}
