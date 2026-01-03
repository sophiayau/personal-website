import ExperienceSection from "@/components/sections/HomeExperienceSection";
import IntroSection from "@/components/sections/IntroSection";
import ProjectSection from "@/components/sections/HomeProjectSection";
import SkillSection from "@/components/sections/SkillSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
