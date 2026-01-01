import Image from "next/image";

type ProjectCardProps = {
  name: string;
  description: string;
  techTags: string[];
  projectLogo?: string;
  logoAlt?: string;
};

export default function ProjectCard({
  name,
  description,
  techTags,
  projectLogo,
  logoAlt,
}: ProjectCardProps) {
  return (
    <div
      className="
        w-full
        rounded-2xl
        bg-white
        px-6 py-7 sm:p-8
        border border-gray-200
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md
        flex flex-col
        min-h-[240px]
      "
    >
      <div className="flex items-center gap-4 mb-4">
        {projectLogo && (
          <Image
            src={projectLogo}
            alt={logoAlt || name}
            width={44}
            height={44}
            className="object-contain rounded-md"
          />
        )}

        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
          {name}
        </h3>
      </div>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full bg-gray-100 px-3 py-1
              text-xs sm:text-sm text-gray-700
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
