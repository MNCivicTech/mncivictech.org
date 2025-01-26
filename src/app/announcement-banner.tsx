"use client";

import CloseIcon from "@/icons/close";
import { Button } from "@/ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white text-blue-900 shadow-xl">
        <div className="flex items-center justify-between px-6 pt-6 ">
          <h3 className="font-semibold">Introducing MN Civic Tech 🌳</h3>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon width="10" className="ml-2 md:ml-4" />
          </button>
        </div>

        <div className="p-6">
          <p className="mb-4">
            We’re excited to introduce MN Civic Tech, a Minneapolis-based
            nonprofit dedicated to using technology to build tools that benefit
            our community.
            <br />
            <br />
            Learn more about us and our mission, vision, and how you can get
            involved by checking out our official announcement.
          </p>

          <Link
            href="/about/announcement"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            <Button variant="dark-blue" className="w-full">
              {"Read Our Announcement ->"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
