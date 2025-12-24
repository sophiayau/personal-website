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
        rounded-2xl bg-white p-6
        border border-gray-200
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md
        flex flex-col
      "
    >
      <div className="flex items-center gap-3 mb-3">
        {projectLogo && (
          <Image
            src={projectLogo}
            alt={logoAlt || name}
            width={32}
            height={32}
            className="object-contain"
          />
        )}

        <h3 className="text-base font-semibold text-gray-900">
          {name}
        </h3>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
