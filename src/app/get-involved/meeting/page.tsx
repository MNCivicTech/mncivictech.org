import { Button } from "@/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Monthly Meeting",
  description:
    "Join MN Civic Tech’s monthly meetings to connect with team members, discuss projects, and brainstorm ideas. Contribute to civic tech initiatives in Minnesota!",

  openGraph: {
    title: "Monthly Meeting",
    description:
      "Join MN Civic Tech’s monthly meetings to connect with team members, discuss projects, and brainstorm ideas. Contribute to civic tech initiatives in Minnesota!",
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
        {/*TODO: Add Countdown*/}
        {/*<span className="font-bold text-lg">*/}
        {/*  We meet every month, on the first Wednesday of the month at 7pm CST*/}
        {/*</span>*/}
      </p>

      {/*FIXME: Fix Meeting Link*/}
      <p>
        We are still in the early planning stages, so more on this to come, stay
        tuned!
      </p>
      {/*<div className="flex flex-col gap-4 md:flex-row">*/}
      {/*  <Link href="/" className="">*/}
      {/*    <Button variant="blue" className="w-full">*/}
      {/*      Zoom Meeting*/}
      {/*    </Button>*/}
      {/*  </Link>*/}

      {/*  /!*FIXME: Add Calendar Invite download or link*!/*/}
      {/*  <Button variant="outline">Calendar Invite</Button>*/}
      {/*</div>*/}
    </div>
  );
}
