import Link from "next/link";
import CTABanner from "@/src/components/sections/CTABanner";
import RevealWrapper from "@/src/components/ui/RevealWrapper";
import SectionLabel from "@/src/components/ui/SectionLabel";
import { processStages } from "@/src/data/process";
import { services, serviceGroups } from "@/src/data/services";

export const metadata = {
  title: "Engineering Process | Resources Now",
  description:
    "Understand how Resources Now discovers, designs, builds, integrates, tests, deploys, maintains, and scales AI-powered software systems.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="process-sales-hero">
        <div className="hero-grid-bg" />
        <div className="container">
          <div className="process-sales-grid">
            <RevealWrapper>
              <SectionLabel>How We Work</SectionLabel>
              <h1 className="hero-heading">A Clear Process for Serious <em>Software Systems</em></h1>
              <p className="hero-sub">
                We help business owners, founders, and teams understand what needs to be built, how it will work, and how it will scale before engineering begins.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Discuss Your System &rarr;</Link>
                <Link href="/services" className="btn-secondary">Explore Services</Link>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <div className="process-proof-panel">
                <div className="proof-kicker">Built for sales clarity</div>
                <p>Each step is clickable, written in simple language, and connected to the services we provide.</p>
                <div className="proof-grid">
                  <span>Discovery</span>
                  <span>Architecture</span>
                  <span>AI</span>
                  <span>Deployment</span>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section id="process" className="process-map-section">
        <div className="container">
          <RevealWrapper className="process-header">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="section-heading">From Business Problem to <em>Production System</em></h2>
            <p className="section-sub centered">Click any stage to open a simple, sales-friendly explainer that helps clients understand what happens and why it matters.</p>
          </RevealWrapper>
          <div className="process-timeline">
            {processStages.map((stage, index) => (
              <RevealWrapper key={stage.slug} delay={(index % 4) * 0.08}>
                <Link href={`/process/${stage.slug}`} className="process-node">
                  <div className="process-node-num">{stage.num}</div>
                  <div>
                    <div className="process-node-label">{stage.label}</div>
                    <h3>{stage.name}</h3>
                    <p>{stage.desc}</p>
                    <span>Open stage &rarr;</span>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <RevealWrapper className="split-header">
            <div>
              <SectionLabel>Service Discovery</SectionLabel>
              <h2 className="section-heading">What We Can Build For You</h2>
            </div>
            <p className="section-sub">Every service is clickable. During a sales call, open a service page and explain business problems, use cases, process, technologies, and deliverables clearly.</p>
          </RevealWrapper>
          <div className="service-groups">
            {serviceGroups.map((group, groupIndex) => (
              <RevealWrapper key={group.title} delay={groupIndex * 0.08}>
                <div className="service-group-card">
                  <h3>{group.title}</h3>
                  <div className="service-group-links">
                    {group.slugs.map((slug) => {
                      const service = services.find((item) => item.slug === slug);
                      return (
                        <Link href={`/services/${slug}`} key={slug}>
                          {service.marketName || service.name} <span>&rarr;</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="deliverable-section">
        <div className="container">
          <RevealWrapper>
            <SectionLabel>Stage Deliverables</SectionLabel>
            <h2 className="section-heading">What You Get at Each Stage</h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <div className="deliverable-grid">
              {processStages.map((stage) => (
                <div className="deliverable-card" key={stage.slug}>
                  <span>{stage.num}</span>
                  <h3>{stage.name}</h3>
                  <ul>
                    {stage.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section>
        <div className="container">
          <RevealWrapper className="architecture-visual">
            <div>
              <SectionLabel>Workflow Visual</SectionLabel>
              <h2 className="section-heading">A Connected Engineering System</h2>
              <p className="section-sub">Business clarity feeds architecture. Architecture feeds design and engineering. Testing, deployment, support, and scaling keep the system useful after launch.</p>
            </div>
            <div className="workflow-diagram" aria-label="Business to production workflow">
              <span>Business</span>
              <span>Architecture</span>
              <span>Design</span>
              <span>Engineering</span>
              <span>Integrations</span>
              <span>Production</span>
              <span>Scale</span>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
