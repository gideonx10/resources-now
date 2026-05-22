import AboutSection from "@/src/components/sections/AboutSection";
import AISection from "@/src/components/sections/AISection";
import ContactSection from "@/src/components/sections/ContactSection";
import CTABanner from "@/src/components/sections/CTABanner";
import Hero from "@/src/components/sections/Hero";
import Metrics from "@/src/components/sections/Metrics";
import ProcessTrack from "@/src/components/sections/ProcessTrack";
import ProjectsGrid from "@/src/components/sections/ProjectsGrid";
import ServicesGrid from "@/src/components/sections/ServicesGrid";
import TeamSection from "@/src/components/sections/TeamSection";
import TechStack from "@/src/components/sections/TechStack";
import Ticker from "@/src/components/sections/Ticker";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Metrics />
      <ServicesGrid />
      <ProjectsGrid />
      <AboutSection />
      <AISection />
      <ProcessTrack />
      <TechStack />
      <TeamSection />
      <CTABanner />
      <ContactSection />
    </>
  );
}
