import ExperienceCard from "@/components/HomeExperienceCard";
import Link from "next/link";
import { inter } from "@/lib/fonts";

export default function ExperienceSection() {
  return (
    <section className={`${inter.className} bg-white py-14 sm:py-16`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Experience
          </h2>
          {/* <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-600">
            A few roles where I built systems, shipped features, and learned fast.
          </p>  */}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Link href="/experience#c1" className="block">
            <div className="w-full max-w-none md:max-w-[360px] mx-auto">
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
          </Link>

          <Link href="/experience#anote" className="block">
            <div className="w-full max-w-none md:max-w-[360px] mx-auto">
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
          </Link>

          <Link href="/experience#tiqc" className="block">
            <div className="w-full max-w-none md:max-w-[360px] mx-auto">
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
          </Link>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/experience"
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
