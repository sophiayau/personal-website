import Image from "next/image";
import { Experience } from "@/data/experience";
import { inter } from "@/lib/fonts";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-2xl p-8 bg-gradient-to-b hover:scale-101 transition from-white/10 to-white/5 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-start gap-4">
        {exp.companyLogo && (
          <Image
            src={exp.companyLogo}
            alt={exp.company}
            width={50}
            height={32}
            className="object-contain"
          />
        )}

        <div>
          <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
          <p className="text-sm font-semibold text-blue-300">{exp.company}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-white/80">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-black/30 px-3 py-1 text-xs text-blue-200 border border-blue-400/30"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
