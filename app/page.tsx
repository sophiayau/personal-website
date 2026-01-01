import ExperienceSection from "@/components/sections/HomeExperienceSection";
import IntroSection from "@/components/sections/IntroSection";
import ProjectSection from "@/components/sections/HomeProjectSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </main>
  );
}
