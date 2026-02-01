import { PageTransition } from "../components/layout/PageTransition";
import { HeroSection } from "../components/home/HeroSection";
import { AboutSection } from "../components/home/AboutSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { SkillsSection } from "../components/home/SkillsSection";
import { StatsSection } from "../components/home/StatsSection";
import { ClientsSection } from "../components/home/ClientsSection";
import { CTASection } from "../components/home/CTASection";

const Index = () => {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <ClientsSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <SkillsSection />
        <CTASection />
      </main>
    </PageTransition>
  );
};

export default Index;
