import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import SocialSection from "@/components/home/SocialSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      {/* ProjectsSection will go here later */}
      <SocialSection />
    </>
  );
}
