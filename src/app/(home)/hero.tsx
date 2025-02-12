import { Button } from "@/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 items-center gap-4 text-blue-900 md:gap-16 md:py-16 lg:grid-cols-2">
        <h1 className="mb-4 font-bold text-3xl sm:text-5xl lg:text-6xl">
          Building <br /> Civic Tech <br /> for Minnesota
        </h1>

        <p className="mx-auto mb-8 max-w-2xl md:text-xl lg:mx-0">
          At MN Civic Tech, we connect technologists, public servants, and
          community advocates to grow minnesota’s civic tech by building
          together.
        </p>

        <div className="flex flex-col justify-between gap-4 sm:justify-start md:flex-row md:gap-8">
          <Link href="/get-involved">
            <Button variant="dark-blue">{"Get Involved ->"}</Button>
          </Link>

          <Link href="/about">
            <Button type="button" variant="outline">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
