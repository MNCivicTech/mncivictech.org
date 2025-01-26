"use client";

import { Button } from "@/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/Card";
import Link from "next/link";
import { useEffect, useState } from "react";

function getNextMeeting() {
  const now = new Date();
  const meeting = new Date();

  // Set to first Tuesday of current month
  meeting.setDate(1);

  while (meeting.getDay() !== 2) {
    meeting.setDate(meeting.getDate() + 1); // 2 is Tuesday
  }

  // Set time to 7 PM CST
  meeting.setHours(19, 0, 0, 0);

  // If this month's meeting has passed, move to next month
  if (now > meeting) {
    meeting.setMonth(meeting.getMonth() + 1);
    meeting.setDate(1);
    while (meeting.getDay() !== 2) {
      meeting.setDate(meeting.getDate() + 1);
    }
  }

  return meeting;
}

function formatTimeRemaining(timeRemaining: number) {
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function MeetingCountdown() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const nextMeeting = getNextMeeting();
      setTimeRemaining(nextMeeting.getTime() - Date.now());
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = formatTimeRemaining(timeRemaining);
  const nextMeeting = getNextMeeting();

  return (
    <Card className="my-4 flex flex-col border border-blue-900 bg-white text-blue-900 md:my-8">
      <CardHeader>
        <div className="flex flex-col items-start gap-4 md:mb-4 md:flex-row md:items-center">
          <CardTitle>Monthly Meeting</CardTitle>
        </div>

        <CardDescription>
          The next meeting is{" "}
          {nextMeeting.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          at 7:00 PM CST
          <br />
        </CardDescription>

        {/* Countdown Section */}
        <div className="mt-4 flex justify-center gap-1 text-center sm:justify-start sm:gap-4 md:mt-12">
          <div className="rounded-lg p-3">
            <div className="font-mono text-xl sm:text-3xl">{days}</div>
            <div className="text-sm sm:text-base">days</div>
          </div>

          <div className="rounded-lg p-3">
            <div className="font-mono text-xl sm:text-3xl">{hours}</div>
            <div className="text-sm sm:text-base">hours</div>
          </div>

          <div className="rounded-lg p-3">
            <div className="font-mono text-xl sm:text-3xl">{minutes}</div>
            <div className="text-sm sm:text-base">minutes</div>
          </div>

          <div className="hidden rounded-lg p-3 sm:block">
            <div className="font-mono text-xl sm:text-3xl">{seconds}</div>
            <div className="text-sm sm:text-base">seconds</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 md:flex-row md:gap-8">
        <Link href="https://meet.google.com/kaj-qnhh-yfz">
          <Button variant="blue" className="w-full md:w-auto">
            Google Meet
          </Button>
        </Link>

        <Link href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Mm00a2RwNnByaXNzZGxqNGpqdG01NGpxNDhfMjAyNTAyMDVUMDEwMDAwWiB3aWxsQG1uY2l2aWN0ZWNoLm9yZw&tmsrc=will%40mncivictech.org&scp=ALL">
          <Button variant="outline" className="w-full md:w-auto">
            Calendar Invite
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
