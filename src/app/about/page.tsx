import ContactForm from "@/app/about/ContactForm";
import SlackIcon from "@/icons/slack";
import Link from "next/link";

const leadershipTeam = [
  {
    name: "Will Sather",
    role: "President",
  },
  {
    name: "Davis Jaeger",
    role: "Secretary",
  },
  {
    name: "Ben Rickers",
    role: "Treasurer",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto bg-brown-50/25 p-6 pt-32 text-brown-900 md:p-36">
      <h1 className="mb-8 font-bold text-4xl">About MN Civic Tech</h1>

      <section className="mb-12 md:mb-16">
        <p className="text-brown-900">
          MN Civic Tech is a volunteer-driven organization dedicated to building
          technology for the public good in Minnesota. We bring together
          technologists, public servants, and community advocates to collaborate
          on projects that address local challenges and improve the lives of
          Minnesotans. Our mission is to foster innovation, promote civic
          engagement, and create a more connected and efficient state through
          the power of technology.
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
        <h2 className="mb-6 font-semibold text-3xl">Code of Conduct</h2>
        <div className="rounded-lg bg-brown-300 p-6 font-mono">
          <p className="mb-4">
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
          </p>

          <button type="button">
            <Link href="/about/code-of-conduct" className="underline">
              {"Read Full Code of Conduct ->"}
            </Link>
          </button>
        </div>
      </section>

      <section id="contact" className="mb-12 scroll-mt-32 md:mb-16">
        <h2 className="mb-6 font-semibold text-3xl">Contact</h2>
        <div>
          <p className="mb-4 text-gray-700">
            Get in contact with us via this form, emailing us at{" "}
            <Link
              href="mailto:hello@mncivictech.org"
              className="italic underline"
            >
              hello@mncivictech.org
            </Link>
            {", "}
            or by joining the
            {/*FIXME: Update Slack Link*/}
            <Link href="https://slack.com" className="inline underline">
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
