"use client";

import CloseIcon from "@/icons/close";
import LogoIcon from "@/icons/logos/logo";
import MenuIcon from "@/icons/menu";
import Link from "next/link";
import { type ReactNode, useState } from "react";

const routes = [
  { href: "/get-involved", name: "Get Involved" },
  { href: "/projects", name: "Projects" },
  { href: "/about", name: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function NavLink({ href, children }: { href: string; children: ReactNode }) {
    return (
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className="rounded-md px-1 py-2 text-blue-900 text-sm hover:underline lg:px-3"
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
    <nav className="fixed top-4 right-4 left-4 z-10 font-mono">
      <div className="rounded-lg bg-white/30 shadow-lg backdrop-blur-xl">
        <div className="mx-0 px-4 sm:px-6 lg:mx-8 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <LogoIcon className="size-12" />
                <span className="ml-2 font-bold font-sans text-blue-900 text-lg">
                  MN Civic Tech
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {routes.map(({ href, name }) => (
                  <NavLink key={href} href={href}>
                    {name}
                  </NavLink>
                ))}
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
              {routes.map(({ href, name }) => (
                <MobileNavLink key={href} href={href}>
                  {name}
                </MobileNavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
