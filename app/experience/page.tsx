"use client";

import { useEffect } from "react";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
    <main className="min-h-screen bg-[#F2F5FA] px-6 py-20">
      <ExperienceTimeline />
    </main>
    <Footer />
    </div>
  );
}
