import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="relative w-full max-w-4xl px-12">
        <h2 className="mb-10 text-4xl font-bold text-white">
          Work Experience
        </h2>
        <div className="absolute left-10 top-20 h-full w-px bg-white/10" />

        <div className="space-y-14">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              id={exp.id}
              className="relative pl-12 scroll-mt-28"
            >
              <div className="absolute left-5 top-1 h-3 w-3 rounded-full bg-blue-400" />

              <p className="mb-4 text-sm font-semibold text-white/70">
                {exp.dates}
              </p>

              <div className="max-w-3xl">
                <ExperienceCard exp={exp} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
