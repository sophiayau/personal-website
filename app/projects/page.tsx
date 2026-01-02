import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import Footer from "@/components/Footer";
import { inter } from "@/lib/fonts";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#F2F5FA]">
      <main className="px-4 sm:px-6 py-12 sm:py-20">
        <div
          className={`
            ${inter.className}
            mx-auto w-full max-w-6xl
            rounded-3xl
            border border-white/60
            bg-white/75
            backdrop-blur-xl
            px-5 py-8
            sm:px-12 sm:py-12
            shadow-[0_20px_60px_rgba(15,23,42,0.10)]
          `}
        >
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-wide text-blue-600">
              PROJECTS
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              Selected Work
            </h1>

            <p className="mt-3 max-w-xl text-sm text-gray-600">
              A collection of projects that showcase my skills and experience in software development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
