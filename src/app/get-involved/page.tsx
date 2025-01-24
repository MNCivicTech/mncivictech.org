import GithubIcon from "@/icons/github";
import ForestIcon from "@/icons/logos/forest";
import GroveIcon from "@/icons/logos/grove";
import SeedlingIcon from "@/icons/logos/seedling";
import SproutIcon from "@/icons/logos/sprout";
import TreeIcon from "@/icons/logos/tree";
import SlackIcon from "@/icons/slack";
import { GITHUB_LINK, SLACK_LINK } from "@/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join MN Civic Tech to connect, collaborate, and make an impact. Introduce yourself, join a project, attend meetings, or pitch your own idea for community tech!",

  openGraph: {
    title: "Get Involved",
    description:
      "Join MN Civic Tech to connect, collaborate, and make an impact. Introduce yourself, join a project, attend meetings, or pitch your own idea for community tech!",
  },
  alternates: {
    canonical: "/get-involved",
  },
};

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto bg-blue-50/5 p-6 pt-32 text-blue-900 md:p-36">
      <h1 className="mb-4 font-bold">Get Involved</h1>
      <p className="mb-12 md:text-lg">
        Get involved with to connect, collaborate, and create meaningful impact.
        Regardless of why you are here, there’s a place for you to make a
        difference alongside others who share your passion.
      </p>

      {/* Step 1 */}
      <div className="mb-8 flex items-center md:mb-16">
        <div>
          <SproutIcon className="mr-2 size-8 md:mr-12 md:size-16" />
        </div>

        <div>
          <h2 className="font-semibold">Introduce yourself</h2>
          <p className="mt-2 max-w-2xl text-sm md:text-base">
            Fill out a{" "}
            <Link href="/get-involved/introduce-yourself" className="underline">
              short form
            </Link>{" "}
            to introduce yourself and share a little about your background,
            interests, and skills. This helps us get to know you better and
            connect you with projects or people aligned with your goals.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mb-12 flex items-start md:mb-16">
        <div>
          <SeedlingIcon className="mr-2 size-8 md:mr-12 md:size-16" />
        </div>

        <div>
          <h2 className="font-semibold">Familiarize and learn</h2>
          <p className="mt-2 max-w-2xl text-sm md:text-base">
            Join our
            <Link href={SLACK_LINK} className="inline underline">
              <SlackIcon className="mx-0.5 inline size-4" />
              Slack
            </Link>{" "}
            community to connect with others, stay updated, and engage in
            discussions. Take a moment to review our{" "}
            <Link href="/about/code-of-conduct" className="underline">
              Code of Conduct
            </Link>
            , which fosters a respectful and collaborative environment. You can
            also explore our projects on{" "}
            <Link href={GITHUB_LINK} className="inline underline">
              <GithubIcon className="mx-0.5 inline size-4" />
              GitHub
            </Link>{" "}
            to get a feel for our work and contributions.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="mb-12 flex items-start md:mb-16">
        <div>
          <TreeIcon className="mr-2 size-8 md:mr-12 md:size-16" />
        </div>

        <div>
          <h2 className="font-semibold">Come hang out</h2>
          <p className="mt-2 max-w-2xl text-sm md:text-base">
            Every month we host a{" "}
            <Link href="/get-involved/meeting" className="underline">
              remote meeting
            </Link>{" "}
            where team members come together to share updates, brainstorm ideas,
            and discuss ongoing projects. It’s a great chance to meet other
            contributors, ask questions, and find ways to get involved.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="mb-12 flex items-start md:mb-16">
        <div>
          <GroveIcon className="mr-2 size-8 md:mr-12 md:size-16" />
        </div>

        <div>
          <h2 className="font-semibold">Join a project</h2>
          <p className="mt-2 max-w-2xl text-sm md:text-base">
            Once you're ready, dive into a project! Check out the{" "}
            <Link href="/projects" className="underline">
              list of projects
            </Link>
            , clone a repository, explore open issues, and start tackling
            challenges. Collaborate with your project team, solve problems
            together, and make meaningful contributions to impactful projects
            whenever you have time!
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div className="mb-12 flex items-start md:mb-16">
        <div>
          <ForestIcon className="mr-2 size-8 md:mr-12 md:size-16" />
        </div>

        <div>
          <h2 className="font-semibold">Pitch a project</h2>
          <p className="mt-2 max-w-2xl text-sm md:text-base">
            If you have a unique idea or see an opportunity for innovation,{" "}
            <Link href="/get-involved/pitch-a-project" className="underline">
              bring it to the group
            </Link>
            ! We welcome new project proposals and provide support for those who
            want to lead initiatives. Your ideas could inspire exciting new
            directions for our community.
          </p>
        </div>
      </div>
    </div>
  );
}
