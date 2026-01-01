import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import { inter } from "@/lib/fonts";

export default function ExperienceTimeline() {
  return (
    <div className={`${inter.className} flex justify-center`}>
      <div
        className="
          relative w-full max-w-4xl
          rounded-3xl
          border border-white/60
          bg-white/75
          backdrop-blur-xl
          px-12 py-12
          shadow-[0_20px_60px_rgba(15,23,42,0.10)]
        "
      >
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-wide text-blue-600">
              EXPERIENCE
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Work Experience
            </h2>
            <p className="mt-3 max-w-xl text-sm text-gray-600">
              A timeline of roles, impact, and the systems I’ve built.
            </p>
          </div>
{/* 
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Updated regularly
          </div> */}
        </div>

        <div className="absolute left-10 top-40 h-[calc(100%-10rem)] w-px bg-gradient-to-b from-blue-200 via-gray-200 to-transparent" />

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              id={exp.id}
              className="relative pl-12 scroll-mt-32"
            >
              <div className="absolute left-5 top-2 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-100" />

              <p className="mb-4 text-sm font-semibold text-gray-500">
                {exp.dates}
              </p>

              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
