import GithubIcon from "@/icons/github";
import LinkedinIcon from "@/icons/linkedin";
import LogoIcon from "@/icons/logos/logo";
import SlackIcon from "@/icons/slack";
import { GITHUB_LINK, SLACK_LINK } from "@/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown-50 px-4 py-12 text-brown-900 md:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start md:gap-16">
        {/* Logo Section */}
        <div className="mr-2 mb-8 md:mr-24 md:mb-0">
          <Link href="/" className="flex max-w-96 items-center gap-4">
            <div>
              <LogoIcon className="mb-2 size-12" />
            </div>
          </Link>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-24 md:text-left">
          {/* About Section */}
          <div>
            <h2 className="mb-4 font-bold">About</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:underline">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/about/code-of-conduct" className="hover:underline">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h2 className="mb-4 font-bold">Connect</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href={SLACK_LINK}
                  className="flex items-center hover:underline"
                >
                  <div>
                    <SlackIcon className="mr-2 size-5" />
                  </div>
                  Slack
                </Link>
              </li>

              <li>
                <Link
                  href={GITHUB_LINK}
                  className="flex items-center hover:underline"
                >
                  <div>
                    <GithubIcon className="mr-2 size-5" />
                  </div>
                  GitHub
                </Link>
              </li>

              <li>
                {/* FIXME: Update Linkedin Link */}
                <Link
                  href="https://linkedin.com"
                  className="flex items-center hover:underline"
                >
                  <div>
                    <LinkedinIcon className="mr-2 size-5" />
                  </div>
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h2 className="mb-4 font-bold">Get Involved</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/get-involved/introduce-yourself"
                  className="hover:underline"
                >
                  Introduce yourself
                </Link>
              </li>

              <li>
                <Link href="/get-involved/meeting" className="hover:underline">
                  Monthly Meeting
                </Link>
              </li>

              <li>
                <Link href="/projects" className="hover:underline">
                  Join a project
                </Link>
              </li>

              <li>
                <Link
                  href="/get-involved/pitch-a-project"
                  className="hover:underline"
                >
                  Pitch a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
