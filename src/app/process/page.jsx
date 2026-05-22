import CTABanner from "@/src/components/sections/CTABanner";
import RevealWrapper from "@/src/components/ui/RevealWrapper";
import SectionLabel from "@/src/components/ui/SectionLabel";
import { processExpansions, processSteps } from "@/src/data/site";

export default function ProcessPage() {
  return (
    <>
      <section id="process" className="page-hero-section">
        <div className="container">
          <RevealWrapper className="process-header">
            <SectionLabel>How We Work</SectionLabel>
            <h1 className="section-heading">Our Engineering <em>Workflow</em></h1>
            <p className="section-sub centered">A structured, mature engineering process &mdash; from discovery to production and beyond.</p>
          </RevealWrapper>
          <div className="process-track">
            {processSteps.map((step, index) => (
              <RevealWrapper key={step.name} delay={(index % 4) * 0.1}>
                <div className="process-step expanded">
                  <div className="process-step-num">{step.num}</div>
                  <div className="process-step-name">{step.name}</div>
                  <div className="process-step-desc">{step.desc}</div>
                  <p className="process-extra">{processExpansions[index]}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <RevealWrapper>
            <h2 className="mini-heading">What you get at each stage</h2>
            <table className="deliverables-table">
              <thead><tr><th>Step</th><th>Deliverable</th></tr></thead>
              <tbody>{processSteps.map((step) => <tr key={step.name}><td>{step.name}</td><td>{step.deliverable}</td></tr>)}</tbody>
            </table>
          </RevealWrapper>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
