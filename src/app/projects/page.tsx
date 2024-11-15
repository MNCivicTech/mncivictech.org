import ProjectCard from "@/app/projects/ProjectCard";
import { Button } from "@/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/Card";
import type { Metadata } from "next";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  color: string;
  slack: string;
  github?: string;
  link?: string;
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore MN Civic Tech’s current projects, where open-source tech initiatives drive positive change in Minnesota. Join us in building a stronger community!",

  openGraph: {
    title: "Projects",
    description:
      "Explore MN Civic Tech’s current projects, where open-source tech initiatives drive positive change in Minnesota. Join us in building a stronger community!",
  },
  alternates: {
    canonical: "/projects",
  },
};

const currentProjects: Project[] = [
  // FIXME: Add projects here
  // {
  //   title: "Open Data Portal",
  //   description:
  //     "A centralized platform for accessing and visualizing public data from various Minnesota government agencies.",
  //   color: "bg-gradient-to-br from-purple-500 to-blue-500",
  //   slack: "https://mncivictech.slack.com/archives/open-data-portal",
  //   github: "https://github.com/mncivictech/open-data-portal",
  //   link: "https://opendata.minnesota.gov",
  // },
  // {
  //   title: "Community Resource Finder",
  //   description:
  //     "An app to help residents find and access local community resources such as food banks, health clinics, and job training programs.",
  //   slack: "https://mncivictech.slack.com/archives/resource-finder",
  //   github: "https://github.com/mncivictech/community-resource-finder",
  //   color: "bg-gradient-to-br from-blue-400 to-green-400",
  // },
];

const previousProjects: Project[] = [];

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-purple-50/50 p-6 pt-32 md:p-12 md:pt-32">
      <h1 className="md:mb-8">Our Projects</h1>

      <p className="mb-6 max-w-3xl md:mb-12 md:text-lg">
        At MN Civic Tech, we're dedicated to creating open-source,
        volunteer-driven projects that benefit our community. Our initiatives
        are non-profit and aim to leverage technology for the public good. Join
        us in making a difference through collaborative coding and innovation!
      </p>

      <h2 className="md:mb-4">Active Projects</h2>
      {previousProjects.length < 1 ? (
        <p className="mb-6 max-w-3xl md:mb-12 md:text-lg">
          Nothing in the works yet, stay tuned!
        </p>
      ) : null}

      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {previousProjects.length > 0 ? <h2>Previous Projects</h2> : null}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {previousProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div>
        <Card className="my-4 flex flex-col border border-purple-900 bg-white md:my-8">
          <CardHeader>
            <div className="flex flex-col items-start gap-4 md:mb-4 md:flex-row md:items-center">
              <CardTitle>Not seeing what you're looking for?</CardTitle>
            </div>

            <CardDescription>
              Bring your own idea and pitch it to the group. We'd love to hear
              about how we can help.
            </CardDescription>
          </CardHeader>

          <CardContent className="max-w-lg">
            {/* Properly space out the footer, could add more details here too */}
            <Link href="/get-involved/pitch-a-project" className="">
              <Button variant="green" className="w-full">
                Pitch a Project
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
