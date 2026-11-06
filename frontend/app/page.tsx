import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSections";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050A11] text-white">
      <Header />
      <main>
        <section id="home" className="min-h-screen">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
