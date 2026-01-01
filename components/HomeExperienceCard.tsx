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
        rounded-2xl
        bg-white
        px-6 py-7 sm:p-8
        border border-gray-200
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md
        min-h-[300px]
        flex flex-col
      "
    >
      <div className="flex items-start gap-4">
        {logoSrc && (
          <Image
            src={logoSrc}
            alt={logoAlt || company}
            width={52}
            height={52}
            className="object-contain rounded-md"
          />
        )}

        <div>
          <h3 className="text-base sm:text-lg font-bold text-black leading-tight">
            {company}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{role}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        {location} · {dates}
      </p>

      <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full bg-gray-100 px-3 py-1
              text-xs sm:text-sm text-gray-700
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
