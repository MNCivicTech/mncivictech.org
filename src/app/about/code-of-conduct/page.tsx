import LogoIcon from "@/icons/logos/logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "MN Civic Tech’s Code of Conduct ensures a welcoming, inclusive environment for all. Read our commitment to respect, diversity, and collaboration.",

  openGraph: {
    title: "Code of Conduct",
    description:
      "MN Civic Tech’s Code of Conduct ensures a welcoming, inclusive environment for all. Read our commitment to respect, diversity, and collaboration.",
  },
  alternates: {
    canonical: "/about/code-of-conduct",
  },
};

export default function CodeOfConductPage() {
  return (
    <main className="mx-auto bg-brown-50/0 p-6 pt-32 text-brown-900 text-brown-900 md:p-36 md:text-lg">
      <h1 className="mb-8 font-bold text-4xl">Code of Conduct</h1>

      <section className="max-w-5xl">
        <h3 className="mt-6">Space for Everyone</h3>

        {/*<h3 className="mt-6">*/}
        {/*  Space for{" "}*/}
        {/*  <span className="relative inline-block">*/}
        {/*    <span className="relative z-10">Everyone</span>*/}
        {/*    <span className="absolute bottom-0 left-0 w-full h-3 bg-green-300 -rotate-2 rounded-sm" />*/}
        {/*  </span>*/}
        {/*</h3>*/}

        <p>What does that mean?</p>

        <ul className="mb-4 ml-4 list-disc md:ml-8">
          <li>
            We work together to create a more connected and inclusive Minnesota.
          </li>
          <li>
            We respect and support each other to ensure a collaborative and safe
            space.
          </li>
          <li>
            We value collaboration and encourage all to engage, discuss, and
            learn.
          </li>
          <li>
            We build software that serves everyone, made by a community that
            welcomes everyone.
          </li>
        </ul>

        <p>
          These aren’t just words—they’re commitments we act on. Below, you’ll
          find the full Code of Conduct, including our harassment policy and how
          to report concerns. For questions, contact us at{" "}
          <a href="mailto:hello@mncivictech.org" className="underline">
            hello@mncivictech.org
          </a>{" "}
          or reach out on Slack.
        </p>
      </section>

      <section className="max-w-5xl">
        <h3 className="mt-6">Code of Conduct</h3>
        <p>
          The MN Civic Tech community expects that all MN Civic Tech activities,
          events, meetings, and digital forums:
        </p>

        <ol className="mb-4 ml-4 list-decimal md:ml-8">
          <li>Are a safe and respectful environment for all participants.</li>
          <li>
            Are a place where people are free to fully express their identities.
          </li>
          <li>
            Presume the value of others. Everyone’s ideas, skills, and
            contributions have value.
          </li>
          <li>
            Don’t assume everyone has the same context, and encourage questions.
          </li>
          <li>
            Find a way for people to be productive with their skills (technical
            and not) and energy. Use language such as “yes/and,” not “no/but.”
          </li>
          <li>
            Encourage members and participants to listen as much as they speak.
          </li>
          <li>
            Strive to build tools that are open and free technology for public
            use. Activities that aim to foster public use, not private gain, are
            prioritized.
          </li>
          <li>
            Prioritize access for and input from those who are traditionally
            excluded from the civic process.
          </li>
          <li>
            Work to ensure that the community is well-represented in the
            planning, design, and implementation of civic tech. This includes
            encouraging participation from women, minorities, and traditionally
            marginalized groups.
          </li>
          <li>
            Actively involve community groups and those with subject matter
            expertise in the decision-making process.
          </li>
          <li>
            Ensure that the relationships and conversations between community
            members, local government staff, and community partners remain
            respectful, participatory, and productive.
          </li>
          <li>
            Provide an environment where people are free from discrimination or
            harassment.
          </li>
        </ol>
        <p>
          This Code of Conduct is based on the Code of Conduct from Code for
          America, created by the Ada Initiative and other volunteers.
        </p>
      </section>

      <section className="max-w-5xl">
        <h2 className="mt-6">Anti-Harassment Policy</h2>
        <h3 className="mt-6">Our Commitment</h3>
        <p>
          MN Civic Tech is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, sexual orientation, disability, physical appearance, body
          size, race, age, or religion. We do not tolerate harassment of
          conference participants in any form. Sexual language and imagery are
          not appropriate for any MN Civic Tech event, including talks. Anyone
          in violation of these policies may be expelled from MN Civic Tech
          events or network activities, at the discretion of the event
          organizers.
        </p>

        <h3 className="mt-6">What is Harassment?</h3>
        <p>Harassment includes, but is not limited to:</p>
        <ul className="mb-4 ml-4 list-disc md:ml-8">
          <li>
            Verbal comments that reinforce social structures of domination
            related to gender, gender identity and expression, sexual
            orientation, disability, physical appearance, body size, race, age,
            religion.
          </li>
          <li>Sexual images in public spaces.</li>
          <li>Deliberate intimidation, stalking, or following.</li>
          <li>Harassing photography or recording.</li>
          <li>Sustained disruption of talks or other events.</li>
          <li>Inappropriate physical contact.</li>
          <li>Unwelcome sexual attention.</li>
          <li>Advocating for, or encouraging, any of the above behavior.</li>
        </ul>
        <p>
          If a participant engages in harassing behavior, the event organizers
          may take any action they deem appropriate, including warning the
          offender or expulsion from MN Civic Tech events and network
          activities.
        </p>

        <h3 className="mt-6">Speak Up</h3>
        <p>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact one of the Organizers,
          Executives, or Executive Director at{" "}
          <a href="mailto:hello@mncivictech.org" className="underline">
            hello@mncivictech.org
          </a>{" "}
          or on Slack.
        </p>
        <p>
          If the harassment took place at an in-person event, event staff or
          forum administrators will be happy to help participants contact venue
          security or local law enforcement, provide escorts, or otherwise
          assist those experiencing harassment to feel safe during the event.
        </p>
        <p className="my-8 font-bold">
          If you cannot reach an organizer and/or it is an emergency, please
          call 911 and/or remove yourself from the situation.
        </p>
        <p>
          We value your attendance and hope that by communicating these
          expectations widely we can all enjoy a harassment-free environment.
        </p>

        <hr className="my-8" />

        <h3 className="mt-6">Email Template for Anti-Harassment Reporting</h3>
        <p className="font-bold">SUBJECT: Safe Space alert at [EVENT NAME]</p>
        <p>
          I am writing because of a harassment issue at MN Civic Tech, (NAME,
          PLACE, DATE OF EVENT). You can reach me at (CONTACT INFO). Thank you.
        </p>

        <hr className="my-8" />

        <p>
          This anti-harassment policy is based on the{" "}
          <a
            href="https://geekfeminism.fandom.com/wiki/Conference_anti-harassment/Policy"
            className="underline"
          >
            example policy
          </a>{" "}
          from the Geek Feminism wiki, created by the Ada Initiative and other
          volunteers. This policy is based on several other policies, including
          the Ohio LinuxFest anti-harassment policy, written by Esther Filderman
          and Beth Lynn Eicher, and the Con Anti-Harassment Project. Mary
          Gardiner, Valerie Aurora, Sarah Smith, and Donna Benjamin generalized
          the policies and added supporting material. Many members of LinuxChix,
          Geek Feminism, and other groups contributed to this work.
        </p>
      </section>
    </main>
  );
}
