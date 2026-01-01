import Image from "next/image";
import { Experience } from "@/data/experience";
import { inter } from "@/lib/fonts";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div
      className={`
        ${inter.className}
        group
        relative
        rounded-2xl
        border border-gray-200/80
        bg-gradient-to-b from-white to-[#F7FAFF]
        p-8
        shadow-sm
        transition
        duration-200
        hover:scale-100
        hover:shadow-[0_10px_20px_rgba(59,130,246,0.18)]
      `}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          bg-blue-400/5
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          {exp.companyLogo && (
            <Image
              src={exp.companyLogo}
              alt={exp.company}
              width={48}
              height={48}
              className="object-contain rounded-xl border border-gray-200 bg-white p-1"
            />
          )}

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {exp.role}
            </h3>
            <p className="text-md font-semibold text-blue-900">
              {exp.company}
            </p>
          </div>
        </div>

        <ul className="mt-6 space-y-3 text-sm text-gray-700">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full
                bg-white
                px-3
                py-1
                text-xs
                font-medium
                text-blue-700
                border border-blue-200/70
                shadow-sm
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
