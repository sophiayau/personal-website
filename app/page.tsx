import ExperienceSection from "@/components/sections/HomeExperienceSection";
import IntroSection from "@/components/sections/IntroSection";
import ProjectSection from "@/components/sections/HomeProjectSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
