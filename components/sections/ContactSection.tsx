import Link from "next/link";
import { inter } from "@/lib/fonts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={`${inter.className} bg-white pt-8 pb-16 sm:pt-5 sm:pb-25`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="
            relative overflow-hidden rounded-3xl
            border border-gray-200 bg-white
            p-6 sm:p-10
            shadow-[0_20px_60px_rgba(15,23,42,0.10)]
            transition-all duration-300
            group
          "
        >
          <div
            className="
              pointer-events-none absolute -top-24 right-[-120px]
              h-72 w-72 rounded-full
              bg-blue-200/40 blur-3xl
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          />
          <div
            className="
              pointer-events-none absolute -bottom-24 left-[-120px]
              h-72 w-72 rounded-full
              bg-purple-200/30 blur-3xl
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          />

          <div className="relative">
            <div className="mb-8">
              {/* <p className="text-sm font-semibold tracking-wide text-blue-600">
                CONTACT
              </p> */}
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Let’s connect
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-gray-600">
                Open to opportunities, collaborations, and conversations! 👩🏻‍💻
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Email
                </p>
                <a
                  href="mailto:sophiayau888@gmail.com"
                  className="mt-2 inline-block text-sm font-semibold text-gray-900 hover:underline"
                >
                  sophiayau888@gmail.com
                </a>
                <p className="mt-1 text-xs text-gray-500">
                  Best way to reach me
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Location
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  New York City, NY
                </p>
                {/* <p className="mt-1 text-xs text-gray-500">
                  Open to NYC & hybrid roles
                </p> */}
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Links
                </p>

                <div className="mt-2 space-y-2 text-sm font-medium">
                  <Link
                    href="https://github.com/sophiayau"
                    target="_blank"
                    className="block text-gray-900 hover:underline"
                  >
                    github.com/sophiayau
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/sophiayau"
                    target="_blank"
                    className="block text-gray-900 hover:underline"
                  >
                    linkedin.com/in/sophiayau
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/Sophia_Yau_Resume.pdf"
                target="_blank"
                className="
                  inline-flex items-center justify-center
                  rounded-xl border border-gray-300
                  bg-white px-6 py-3
                  text-sm font-semibold text-gray-900
                  transition-all duration-200 ease-out
                  hover:-translate-y-0.5 hover:shadow-md
                "
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
