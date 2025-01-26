import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "Connecting technologists, public servants, & community advocates to improve Minnesota’s civic tech by building together.",

  openGraph: {
    title: "About",
    description:
      "Connecting technologists, public servants, & community advocates to improve Minnesota’s civic tech by building together.",
    url: "https://www.mncivictech.org/about/annoucement",
    images: ["/og"],
  },
  alternates: {
    canonical: "/about/announcement",
  },
};

export default function AnnouncementPage() {
  return (
    <div className="mx-auto bg-brown-50/50 p-6 pt-32 text-brown-900 md:p-36">
      <h1 className="mb-8 font-bold text-4xl">Introducing MN Civic Tech</h1>

      <section className="">
        <p className="text-brown-900 md:text-lg">
          <span className="font-bold">
            We are thrilled to announce the launch of MN Civic Tech, a new
            Minneapolis-based civic tech nonprofit organization.
          </span>
          <br />
          <br />
          Our mission is to create, build, and foster local software initiatives
          which will focus on providing tools, services, or platforms that
          directly benefit the community, such as fostering civic engagement,
          improving public services, or addressing local issues.
          <br />
          <br />
          We believe that technology has the power to improve the lives of
          everyone in Minnesota, and we are committed to using it to create a
          more transparent and technologically advanced community. As we ramp up
          and grow, we are hoping to start building meaningful software, which
          might include ideas like:
        </p>
      </section>

      <section className="mb-6 md:mb-12">
        <ul className="ml-4 list-disc text-brown-900 md:text-lg">
          <li className="mb-2">
            Develop visualization tools that simplify the process of exploring
            and understanding the vast and often complex datasets provided by
            government agencies.
          </li>

          <li className="mb-2">
            Create a platform that seamlessly connects individuals with nearby,
            meaningful volunteer opportunities in local schools, nonprofits, and
            community organizations.
          </li>

          <li className="mb-2">
            Build a user-friendly online resource to help discover, navigate,
            and make the most of Minnesota’s beautiful parks, trails, and green
            spaces.
          </li>
        </ul>
      </section>

      <section className="mb-6 md:mb-12">
        <p className="text-brown-900 md:text-lg">
          We are a 501(c)(3) non-profit organization, and we rely on the support
          of our community to make all of this possible. If you are interested
          in learning more about us, volunteering, or getting involved, please
          visit our website at www.mncivictech.org and join our public Slack at
          slack.mncivictech.org! We are excited to join the Minnesota civic tech
          community, and we look forward to working with everyone to make a
          difference.
        </p>
      </section>
    </div>
  );
}
