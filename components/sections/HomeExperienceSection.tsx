import ExperienceCard from "@/components/HomeExperienceCard";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Experience
        </h2>

        <div className="grid gap-6 md:grid-cols-3 justify-items-center">
          
          <div className="w-full max-w-[300px]">
            <ExperienceCard
              company="Capital One"
              role="Software Engineer Intern"
              location="New York, NY"
              dates="May 2025 – Aug 2025"
              description="Developed analyst facing internal tool."
              techStack={["Python", "TypeScript", "AWS", "PyTest", "Jenkins"]}
              logoSrc="/logos/capital_one.jpeg"
            />
          </div>

          <div className="w-full max-w-[300px]">
            <ExperienceCard
              company="Anote"
              role="Software Engineer Intern"
              location="New York, NY"
              dates="Jun 2024 – Aug 2024"
              description="Developed AI-powered solutions for businesses."
              techStack={["Python", "AI", "SQL"]}
              logoSrc="/logos/anote.jpeg"
            />
          </div>

          <div className="w-full max-w-[300px]">
            <ExperienceCard
              company="Queens College CUNY"
              role="Technical Project Management Intern"
              location="New York, NY"
              dates="Jun 2023 – Aug 2023"
              description="Led cross-functional teams to develop software for clients."
              techStack={["Agile", "Jira"]}
              logoSrc="/logos/queens_college.jpeg"
            />
          </div>

        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/experience"
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
