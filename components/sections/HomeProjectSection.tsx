import Link from "next/link";
import ProjectCard from "@/components/HomeProjectCard";

export default function ProjectSection() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3 justify-items-center">
          
          <div className="w-full max-w-[300px]">
            <ProjectCard
              name="Focus Point"
              description="Distraction detection application using real-time computer vision."
              techTags={["Computer Vision", "Real-time Systems", "Open Source Models", "Full Stack"]}
              projectLogo="/logos/anote.jpeg"
            />
          </div>

          <div className="w-full max-w-[300px]">
            <ProjectCard
              name="RefuConnect"
              description="Multilingual and auto-translating communication platform"
              techTags={["Real-time Systems", "APIs", "Full Stack", "WebSockets"]}
              projectLogo="/logos/anote.jpeg"
            />
          </div>

          <div className="w-full max-w-[300px]">
            <ProjectCard
              name="Personal Portfolio"
              description="Tracks and compares flight prices with calendar integration."
              techTags={["Component-Based Architecture", "Frontend", "Web Application"]}
              projectLogo="/logos/portfolio_logo.png"
            />
          </div>

        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="
              inline-flex items-center gap-2 bg-black text-white
              rounded-xl px-5 py-3
              text-sm font-semibold
              text-blue-600
              transition-all duration-200 ease-out
              hover:scale-105
              hover:shadow-lg
            " 
          >
            See more
          </Link>
          </div>
      </div>
    </section>
  );
}
