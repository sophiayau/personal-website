"use client";

import { useMemo, useState } from "react";
import { inter } from "@/lib/fonts";

type TabKey = "languages" | "frameworks" | "tools";

export default function SkillSection() {
  const tabs = useMemo(
    () =>
      [
        {
          key: "languages",
          label: "Languages",
          items: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "Java", "HTML/CSS"],
        },
        {
          key: "frameworks",
          label: "Frameworks",
          items: ["Next.js", "React", "Node.js","Tailwind CSS", "Pytest"],
        },
        {
          key: "tools",
          label: "Tools",
          items: ["AWS", "Git & GitHub", "Docker", "Jenkins","Postman/Bruno"],
        },
      ] as const,
    []
  );

  const [active, setActive] = useState<TabKey>("languages");
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section
      id="skills"
      className={`${inter.className} bg-white pt-6 pb-14 sm:pt-8 sm:pb-30`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Technical Skills
          </h2>
          {/* <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
          </p> */}
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => {
              const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  className={[
                    "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ease-out",
                    isActive
                      ? "bg-blue-800 text-white shadow-md"
                      : "bg-gray-100 text-gray-900 hover:-translate-y-0.5 hover:shadow-sm",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {activeTab.label}
              </h3>
              <span className="text-xs font-semibold text-gray-500">
                {activeTab.items.length} skills
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {activeTab.items.map((skill) => (
                <span
                  key={skill}
                  className="
                    inline-flex items-center
                    rounded-full border border-gray-200
                    bg-gray-50 px-3 py-1.5
                    text-sm font-medium text-gray-800
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="mt-8 text-xs text-gray-500">
          </div> */}
        </div>
      </div>
    </section>
  );
}
