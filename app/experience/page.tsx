"use client";

import { useEffect } from "react";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export default function ExperiencePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");

    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen bg-[#070A12] text-white px-6 py-16">
      <ExperienceTimeline />
    </main>
  );
}
