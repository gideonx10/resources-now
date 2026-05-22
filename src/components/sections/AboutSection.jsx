import { Building2, Bot, Globe, Rocket } from "lucide-react";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";
import { aboutValues } from "@/src/data/site";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-inner">
          <RevealWrapper>
            <div className="about-img-collage">
              <StatCard blue icon={Building2} value="5 yrs" label="Building in Surat" />
              <StatCard icon={Globe} value="30+" label="Active Clients" />
              <StatCard icon={Rocket} value="140+" label="Deployments" />
              <StatCard blue dark icon={Bot} value="AI-First" label="Engineering Approach" />
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="section-heading">Engineering-First,<br /><em>Always</em></h2>
            <p className="section-sub">Resources Now is a Surat-based AI-powered digital engineering company. We think in systems, build for scale, and execute with precision. Not a template shop &mdash; an engineering partner.</p>
            <div className="about-values">
              {aboutValues.map(({ icon: IconComponent, name, desc }) => (
                <div className="about-val" key={name}>
                  <div className="about-val-icon"><IconComponent size={20} /></div>
                  <div>
                    <div className="about-val-name">{name}</div>
                    <div className="about-val-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: IconComponent, value, label, blue = false, dark = false }) {
  return (
    <div className={`about-img-card ${blue ? "blue" : ""} ${dark ? "dark-blue" : ""}`}>
      <div className="about-img-card-icon"><IconComponent size={32} /></div>
      <div className="about-img-card-val">{value}</div>
      <div className="about-img-card-lbl">{label}</div>
    </div>
  );
}
