"use client";

import ForestIcon from "@/icons/logos/forest";

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-green-50 p-12 md:flex-row md:p-24">
      <ForestIcon className="size-48" />

      <div className="flex max-w-sm flex-col text-center md:text-left">
        <h1 className="mb-2">bummer.</h1>
        <p>we had an error, maybe try again later.</p>
      </div>
    </main>
  );
}
