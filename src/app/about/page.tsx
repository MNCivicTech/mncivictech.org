import ContactForm from "@/app/about/contact-form";
import SlackIcon from "@/icons/slack";
import { Button } from "@/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/Card";
import { SLACK_LINK } from "@/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MN Civic Tech, a volunteer nonprofit using technology to solve local challenges in Minnesota. Meet our team, read our code of conduct, and connect!",

  openGraph: {
    title: "About",
    description:
      "Learn about MN Civic Tech, a volunteer nonprofit using technology to solve local challenges in Minnesota. Meet our team, read our code of conduct, and connect!",
    url: "https://www.mncivictech.org/about",
    images: ["/og"],
  },
  alternates: {
    canonical: "/about",
  },
};

const leadershipTeam = [
  {
    name: "Will Sather",
    role: "President",
  },
  {
    name: "Davis Jaeger",
    role: "Secretary",
  },
  // {
  //   name: "Ben Rickers",
  //   role: "Treasurer",
  // },
];

export default function AboutPage() {
  return (
    <div className="mx-auto bg-brown-50/50 p-6 pt-32 text-brown-900 md:p-36">
      <h1 className="mb-8 font-bold text-3xl md:text-4xl">
        About MN Civic Tech
      </h1>

      <section className="mb-12 md:mb-16">
        <p className="text-brown-900 md:text-lg">
          MN Civic Tech is a volunteer-driven organization dedicated to building
          technology for the public good in Minnesota. We bring together
          technologists, public servants, and community advocates to collaborate
          on projects that address local challenges and improve the lives of
          Minnesotans. MN Civic Tech initiatives focus on providing tools,
          services, or platforms that directly benefit the community, such as
          fostering civic engagement, improving public services, or addressing
          local issues.
          <br />
          <br />
          Our mission goes beyond creating software—we build community. By
          fostering collaboration and innovation, we focus on building
          technology that directly benefits Minnesotans. Together, we’re
          cultivating a more connected, empathetic, and efficient
          Minnesota—where everyone has the opportunity to contribute to
          technology that improves the very place we live.
        </p>
      </section>

      <section id="leadership" className="mb-12 scroll-mt-32 md:mb-16">
        <h2 className="mb-6 font-semibold text-3xl">Leadership Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {leadershipTeam.map((member) => (
            <div key={member.name}>
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <Card className="my-4 flex flex-col border border-brown-900 bg-white md:my-8">
          <CardHeader>
            <div className="flex flex-col items-start gap-4 md:mb-4 md:flex-row md:items-center">
              <CardTitle>Code of Conduct</CardTitle>
            </div>

            <CardDescription>
              At MN Civic Tech, we are committed to providing a welcoming and
              inclusive environment for all participants. We expect all members,
              volunteers, and attendees to treat each other with respect and
              courtesy, regardless of their background or identity.
              <br />
              <br />
              Our code of conduct prohibits harassment, discrimination, and
              disruptive behavior in any form. We encourage collaboration, open
              communication, and feedback to maintain a positive and productive
              community.
            </CardDescription>
          </CardHeader>

          <CardContent className="max-w-lg">
            {/* Properly space out the footer, could add more details here too */}
            <Link href="/about/code-of-conduct" className="">
              <Button variant="green" className="w-full">
                {"Read Full Code of Conduct ->"}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section id="contact" className="mb-12 scroll-mt-32 md:mb-16">
        <h2 className="mb-6 font-semibold text-3xl">Contact</h2>
        <div>
          <p className="mb-4 text-gray-700">
            Get in contact with us via this form, emailing us at{" "}
            <Link href="mailto:hi@mncivictech.org" className="underline">
              hi@mncivictech.org
            </Link>
            {", "}
            or by joining the
            <Link href={SLACK_LINK} className="inline underline">
              <SlackIcon className="mr-0.5 ml-1.5 inline size-4" />
              Slack
            </Link>
            .
          </p>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
