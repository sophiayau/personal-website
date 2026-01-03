"use client";

import Link from "next/link";
import { pixelify, inter } from "@/lib/fonts";

export default function Navbar() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", "/");
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      history.replaceState(null, "", "/#contact");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link
          href="/"
          onClick={scrollToTop}
          className={`
            ${pixelify.className}
            font-bold text-black
            text-4xl sm:text-5xl
            transition-all duration-200 ease-out
            hover:scale-110
          `}
          aria-label="Home"
        >
          S
        </Link>

        <div
          className={`
            ${inter.className}
            flex flex-wrap items-center justify-end
            gap-x-4 gap-y-2 sm:gap-6
            text-xs sm:text-sm
            font-medium
          `}
        >
          <Link
            href="/experience"
            className="text-black transition-all duration-200 ease-out hover:scale-105"
          >
            Experience
          </Link>

          <Link
            href="/projects"
            className="text-black transition-all duration-200 ease-out hover:scale-105"
          >
            Projects
          </Link>

          <Link
            href="/#contact"
            onClick={scrollToContact}
            className="text-black transition-all duration-200 ease-out hover:scale-105"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
