import GithubIcon from "@/icons/github";
import SlackIcon from "@/icons/slack";
import { Button } from "@/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/Card";
import { SLACK_LINK } from "@/utils";
import Link from "next/link";

export default function WhatsGoingOn() {
  return (
    <div className="mx-auto bg-green-50 pb-8 text-green-900 md:px-18 lg:px-36">
      <div className="flex justify-center">
        <h2 className="mb-4 text-3xl text-green-900 md:text-4xl">
          What's Going On
        </h2>
      </div>

      <div className="mx-4 flex flex-col gap-4 md:flex-row">
        {/* Left card */}
        <Card className="flex flex-[3] flex-col border border-green-900 bg-white text-green-900 md:my-8">
          <CardHeader>
            <div className="flex flex-col items-start gap-4 md:mb-4 md:flex-row md:items-center">
              <CardTitle>Join our Slack</CardTitle>
            </div>
            <CardDescription>
              Our Slack allows for you to connect with other people from MN
              Civic Tech, collaborate on projects, and just socialize with
              like-minded individuals from Minnesota.
            </CardDescription>
          </CardHeader>

          <CardContent className="max-w-lg flex-grow" />

          <CardFooter>
            <Link href={SLACK_LINK} className="w-full">
              <Button variant="purple" className="w-full">
                <SlackIcon className="mx-2 size-4" />
                {"Slack ->"}
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Center card */}
        <Card className="flex flex-[4] flex-col border border-green-900 bg-white md:my-8">
          <CardHeader>
            <div className="flex flex-col items-start gap-4 md:mb-4 md:flex-row md:items-center">
              <CardTitle>Monthly Meeting</CardTitle>
            </div>
            <CardDescription>
              We meet once a month to discuss and work on existing projects,
              research and brainstorm new projects, learn new technologies, as
              well as occasional networking events, hackathons, or social
              events.
            </CardDescription>
          </CardHeader>

          <CardContent className="max-w-lg flex-grow" />

          <CardFooter>
            <Link href="/get-involved/meeting" className="w-full">
              <Button variant="green" className="w-full">
                {"Monthly Meeting ->"}
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/*FIXME: Add back if we have a newsletter in future*/}
        {/*<Card className="flex flex-[3] flex-col border border-green-900 bg-white md:my-8">*/}
        {/*  <CardHeader>*/}
        {/*    <div className="flex flex-col items-start gap-4 md:mb-4 md:flex-row md:items-center">*/}
        {/*      <CardTitle>Newsletter</CardTitle>*/}
        {/*    </div>*/}
        {/*    <CardDescription>*/}
        {/*      Our Newsletter allows you to stay informed with upcoming events,*/}
        {/*      new projects, and other initiatives we have going on.*/}
        {/*    </CardDescription>*/}
        {/*  </CardHeader>*/}

        {/*  <CardContent className="max-w-lg flex-grow" />*/}

        {/*  <CardFooter>*/}
        {/*    <Link href="/get-involved/newsletter" className="w-full">*/}
        {/*      <Button variant="blue" className="w-full">*/}
        {/*        {"Newsletter ->"}*/}
        {/*      </Button>*/}
        {/*    </Link>*/}
        {/*  </CardFooter>*/}
        {/*</Card>*/}

        {/* Right card */}
        <Card className="flex flex-[3] flex-col border border-green-900 bg-white md:my-8">
          <CardHeader>
            <div className="flex flex-col items-start gap-4 md:mb-4 md:flex-row md:items-center">
              <CardTitle>Check out GitHub</CardTitle>
            </div>
            <CardDescription>
              Explore our GitHub to see our open-source software. We invite
              everyone to view and contribute to technology that helps us drive
              innovation within Minnesota's civic tech landscape.
            </CardDescription>
          </CardHeader>

          <CardContent className="max-w-lg flex-grow" />

          <CardFooter>
            <Link href="/get-involved/newsletter" className="w-full">
              <Button variant="blue" className="w-full">
                <GithubIcon className="mx-2 size-4" />
                {"GitHub ->"}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
