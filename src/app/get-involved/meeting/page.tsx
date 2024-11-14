import { Button } from "@/ui/Button";
import Link from "next/link";

export default function MeetingPage() {
  return (
    <div className="mx-auto min-h-screen bg-blue-50/5 p-6 pt-32 text-brown-900 md:p-36">
      <h1 className="mb-4 font-bold">Weekly Meeting</h1>
      <p className="mb-12">
        Join our bi-weekly meeting to stay connected, share progress, and
        discuss upcoming goals with the team. Whether you're a regular
        contributor or new to the community, this is a great space to
        collaborate, ask questions, and stay engaged in our latest projects.
        <br />
        <br />
        {/*TODO: Add Countdown*/}
        <span className="font-bold text-lg">
          We meeting every other Wednesday at 7pm CST
        </span>
      </p>

      {/*FIXME: Fix Meeting Link*/}
      <div className="flex flex-col gap-4 md:flex-row">
        <Link href="/" className="">
          <Button variant="blue" className="w-full">
            Zoom Meeting
          </Button>
        </Link>

        {/*FIXME: Add Calendar Invite download or link*/}
        <Button variant="outline">Calendar Invite</Button>
      </div>
    </div>
  );
}
