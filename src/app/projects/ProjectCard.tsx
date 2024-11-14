import type { Project } from "@/app/projects/page";
import GithubIcon from "@/icons/github";
import LinkIcon from "@/icons/link";
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
import Link from "next/link";

function ProjectLogo({ title, color }: { title: string; color: string }) {
  const initials = title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex size-12 min-w-12 items-center justify-center rounded-lg font-bold text-white text-xl md:size-16 md:min-w-16 ${color}`}
    >
      {initials}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      key={project.title}
      className="flex flex-col border border-purple-900 bg-white"
    >
      <CardHeader>
        <div className="flex flex-col items-start gap-4 md:mb-4 md:flex-row md:items-center">
          <ProjectLogo title={project.title} color={project.color} />
          <CardTitle>{project.title}</CardTitle>
        </div>

        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Properly space out the footer, could add more details here too */}
      </CardContent>

      <CardFooter className="flex flex-col items-end space-y-2 pt-0">
        <Link href={project.slack} className="w-full">
          <Button variant="green" className="w-full">
            <SlackIcon className="mr-2 size-4" />
            Slack
          </Button>
        </Link>

        {project.github != null ? (
          <Link href={project.github} className="w-full">
            <Button variant="outline" className="w-full">
              <GithubIcon className="mr-2 size-4" />
              GitHub
            </Button>
          </Link>
        ) : null}

        {project.link != null ? (
          <Link href={project.link} className="w-full">
            <Button variant="outline" className="w-full">
              <LinkIcon className="mr-2 size-4" />
              Visit
            </Button>
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}
