import { processSteps } from "@/src/data/site";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";

export default function ProcessTrack() {
  return (
    <section id="process">
      <div className="container">
        <RevealWrapper className="process-header">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="section-heading">Our Engineering <em>Workflow</em></h2>
          <p className="section-sub centered">A structured, mature engineering process &mdash; from discovery to production and beyond.</p>
        </RevealWrapper>
        <div className="process-track">
          {processSteps.map((step, index) => (
            <RevealWrapper key={step.name} delay={(index % 4) * 0.1}>
              <div className="process-step">
                <div className="process-step-num">{step.num}</div>
                <div className="process-step-name">{step.name}</div>
                <div className="process-step-desc">{step.desc}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
