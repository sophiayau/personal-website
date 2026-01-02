import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { inter } from "@/lib/fonts";


type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    projectTags: string[];
    tech: string[];
    bullets: string[];
    links: {
      code?: string;
      demo?: string;
    };
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={`${inter.className}
        group relative flex h-full flex-col overflow-hidden rounded-2xl
        border border-gray-200/80 bg-gradient-to-b from-white to-[#F7FAFF]
        shadow-sm transition duration-300
      `}
    >
        {/* hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)] */}
      <div className="pointer-events-none absolute inset-0 bg-blue-400/5 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative h-44 w-full">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt || project.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-7">
        
        <div className="mb-3 flex flex-wrap gap-2">
          {project.projectTags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full bg-blue-100/70 px-3 py-1
                text-xs font-semibold text-blue-800
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          {project.name}
        </h3>

        <p className="mt-2 text-sm text-gray-700">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2 text-sm text-gray-700">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
            <span className="flex-1">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full bg-white px-3 py-1
                text-xs font-medium text-gray-600
                border border-gray-200
              "
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        <div className="mt-6 flex gap-3">
          {project.links.demo && (
            <Link
                href={project.links.demo}
                target="_blank"
                className="
                inline-flex items-center gap-2
                rounded-xl bg-blue-800 px-4 py-2
                text-center text-sm font-semibold text-white
                transition hover:bg-blue-600 hover:scale-102
                "
            >
                <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-4 w-4"
                />
                View Project
            </Link>
            )}


          {project.links.code && (
            <Link
                href={project.links.code}
                target="_blank"
                className="
                inline-flex items-center gap-2
                rounded-xl border border-blue-200 bg-white
                px-4 py-2
                text-center text-sm font-semibold text-blue-800
                transition hover:bg-blue-50 hover:scale-102
                "
            >
                <FontAwesomeIcon
                size="xl"
                icon={faSquareGithub}
                className="h-6 w-4"
                />
                Source Code
            </Link>
            )}

        </div>
      </div>
    </div>
  );
}
