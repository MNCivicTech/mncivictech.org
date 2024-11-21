export interface Project {
  title: string;
  description: string;
  logo?: string;
  color?: string;
  slack: string;
  github?: string;
  link?: string;
}

export const currentProjects: Project[] = [
  {
    title: "MN Civic Tech Website",
    description:
      "The MN Civic Tech website is a Next.js application using Typescript that serves as both a marketing tool and an internal hub, showcasing our mission, community project work, ways to get involved, a blog, and details about upcoming events and initiatives.",
    logo: "/images/projects/mn-civic-tech-website.png",
    slack: "https://mncivictech.slack.com/archives/C081BG59A92",
    github: "https://github.com/MNCivicTech/mncivictech.org",
    link: "https://www.mncivictech.org",
  },
];

export const previousProjects: Project[] = [];
