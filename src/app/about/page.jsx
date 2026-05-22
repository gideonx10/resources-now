import AboutSection from "@/src/components/sections/AboutSection";
import Metrics from "@/src/components/sections/Metrics";
import TeamSection from "@/src/components/sections/TeamSection";
import RevealWrapper from "@/src/components/ui/RevealWrapper";
import SectionLabel from "@/src/components/ui/SectionLabel";
import { aboutValues } from "@/src/data/site";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <RevealWrapper>
            <SectionLabel>About Us</SectionLabel>
            <h1 className="section-heading">Engineering-First,<br /><em>Always</em></h1>
            <p className="section-sub">Resources Now is a Surat-based AI-powered digital engineering company. We think in systems, build for scale, and execute with precision. Not a template shop &mdash; an engineering partner.</p>
          </RevealWrapper>
        </div>
      </section>
      <section>
        <div className="container narrow">
          <RevealWrapper>
            <h2 className="mini-heading">Company Story</h2>
            <p className="large-copy">Resources Now is a Surat-based AI-powered digital engineering company founded to build scalable software systems for modern businesses. We think in systems, build for scale, and execute with precision.</p>
          </RevealWrapper>
          <div className="value-grid">
            {aboutValues.map(({ icon: IconComponent, name, desc }, index) => (
              <RevealWrapper key={name} delay={index * 0.1}>
                <div className="stack-cat">
                  <div className="about-val-icon"><IconComponent size={22} /></div>
                  <div className="process-step-name">{name}</div>
                  <p className="process-step-desc">{desc}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
      <TeamSection showHeader />
      <Metrics />
    </>
  );
}
