"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getNextMeeting } from "@/app/get-involved/meeting/get-next-meeting";
import { Button } from "@/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/Card";

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
  const [isActiveMeeting, setIsActiveMeeting] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const nextMeeting = getNextMeeting();
      setTimeRemaining(nextMeeting.getTime() - Date.now());

      const now = new Date();

      // if the meeting is currently happening
      setIsActiveMeeting(
        now >= nextMeeting &&
          now < new Date(nextMeeting.getTime() + 60 * 60 * 1000),
      );
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
          {isActiveMeeting && (
            <div className="mb-4 rounded-lg">
              🚀 Our meeting is happening now! Come join us before it's over!
            </div>
          )}

          {!isActiveMeeting && (
            <>
              The next meeting is{" "}
              {nextMeeting.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              at 7:00 PM CST
              <br />
            </>
          )}
        </CardDescription>

        {/* Countdown Section */}
        {!isActiveMeeting && (
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
        )}
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
