"use client";

import CloseIcon from "@/icons/close";
import LogoIcon from "@/icons/logo";
import MenuIcon from "@/icons/menu";
import Link from "next/link";
import { type ReactNode, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function NavLink({ href, children }: { href: string; children: ReactNode }) {
    return (
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className="rounded-md px-1 py-2 text-brown-900 text-sm hover:underline lg:px-3"
      >
        {children}
      </Link>
    );
  }

  function MobileNavLink({
    href,
    children,
  }: { href: string; children: ReactNode }) {
    return (
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className="block rounded-md px-3 py-2 font-medium text-sm hover:underline"
      >
        {children}
      </Link>
    );
  }

  return (
    <nav className="fixed top-4 right-4 left-4 z-10">
      <div className="rounded-lg bg-white/30 shadow-lg backdrop-blur-xl">
        <div className="mx-0 px-4 sm:px-6 lg:mx-8 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <LogoIcon className="size-12" />
                <span className="ml-2 font-extrabold text-lg">
                  MN Civic Tech
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/get-involved">Get Involved</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/donate">Donate</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <CloseIcon className="block size-4" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block size-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <MobileNavLink href="/get-involved">Get Involved</MobileNavLink>
              <MobileNavLink href="/projects">Projects</MobileNavLink>
              <MobileNavLink href="/blog">Blog</MobileNavLink>
              <MobileNavLink href="/donate">Donate</MobileNavLink>
              <MobileNavLink href="/about">About</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
