import MeetingCountdown from "@/app/get-involved/meeting/meeting-countdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Meeting",
  description:
    "Join MN Civic Tech’s monthly meetings to connect with team members, discuss projects, and brainstorm ideas. Contribute to civic tech initiatives in Minnesota!",

  openGraph: {
    title: "Monthly Meeting",
    description:
      "Join MN Civic Tech’s monthly meetings to connect with team members, discuss projects, and brainstorm ideas. Contribute to civic tech initiatives in Minnesota!",
    url: "https://www.mncivictech.org/get-involved/meeting",
    images: ["/og"],
  },
  alternates: {
    canonical: "/get-involved/meeting",
  },
};

export default function MeetingPage() {
  return (
    <div className="mx-auto min-h-screen bg-blue-50/5 p-6 pt-32 text-blue-900 md:p-36">
      <h1 className="mb-4 font-bold">Monthly Meeting</h1>
      <p className="mb-12">
        Join our monthly meeting to stay connected, share progress, and discuss
        upcoming goals with the team. Whether you're a regular contributor or
        new to the community, this is a great space to collaborate, ask
        questions, and stay engaged in our latest projects.
        <br />
        <br />
        We meet every month, on the first Tuesday of the month at 7pm CST.
      </p>

      <MeetingCountdown />
    </div>
  );
}
