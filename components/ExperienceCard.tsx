import Image from "next/image";

type ExperienceCardProps = {
  role: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  techStack: string[];
  logoSrc?: string;
  logoAlt?: string;
};

export default function ExperienceCard({
  role,
  company,
  location,
  dates,
  description,
  techStack,
  logoSrc,
  logoAlt,
}: ExperienceCardProps) {
  return (
    <div
      className="
        w-full
        rounded-2xl bg-white p-6
        border border-gray-200
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md
        min-h-[260px]
        flex flex-col
      "
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        {logoSrc && (
            <Image
              src={logoSrc}
              alt={logoAlt || company}
              width={40}
              height={40}
              className="object-contain"
            />
        )}

        <div>
          <h3 className="text-sm font-bold text-black leading-tight">
            {company}
          </h3>
          <p className="text-xs text-gray-500 mt-1">{role}</p>
        </div>
      </div>

      {/* Meta */}
      <p className="mt-3 text-xs text-gray-400">
        {location} · {dates}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-700 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Tech stack */}
      <div className="mt-auto pt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
