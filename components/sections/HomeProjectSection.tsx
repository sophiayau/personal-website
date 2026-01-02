import Link from "next/link";
import ProjectCard from "@/components/HomeProjectCard";
import { inter } from "@/lib/fonts";

export default function ProjectSection() {
  return (
    <section className={` ${inter.className} bg-white py-14 sm:py-16`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link href="/projects#fp" className="block">
            <div className="w-full max-w-none md:max-w-[360px] mx-auto">
              <ProjectCard
                name="Focus Point"
                description="Distraction detection application using real-time computer vision."
                techTags={[
                  "Computer Vision",
                  "Full Stack",
                  "Real-time Systems",
                  "Open Source",
                ]}
                projectLogo="/logos/focus_point.jpg"
              />
            </div>
          </Link>

          <Link href="/projects#refuconnect" className="block">
            <div className="w-full max-w-none md:max-w-[360px] mx-auto">
              <ProjectCard
                name="RefuConnect"
                description="Multilingual and auto-translating communication platform."
                techTags={["Real-time Systems", "APIs", "Full Stack", "WebSockets"]}
                projectLogo="/logos/refuconnect.jpg"
              />
            </div>
          </Link>

          <Link href="/projects#portfolio" className="block">
            <div className="w-full max-w-none md:max-w-[360px] mx-auto">
              <ProjectCard
                name="Personal Portfolio"
                description="Platform home to my projects, skills, and experience."
                techTags={[
                  "Component-Based Architecture",
                  "Frontend",
                  "Web Application",
                ]}
                projectLogo="/logos/portfolio_logo.png"
              />
            </div>
          </Link>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="
              inline-flex items-center justify-center
              rounded-xl bg-black px-6 py-3
              text-sm font-semibold text-white
              transition-all duration-200 ease-out
              hover:scale-105 hover:shadow-lg
            "
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}
