import Link from "next/link";
import { services } from "@/src/data/services";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesGrid({ expanded = false }) {
  const expansions = [
    "We define the core user flows, data model, and deployment path before interface work begins. Every platform is structured for maintainability, traffic, and operational use.",
    "We separate tenants, roles, subscriptions, and billing concerns at the architecture level. The result is a product foundation that can grow without rewriting core systems.",
    "We embed LLM workflows into real product surfaces with clear data boundaries. Retrieval, prompts, tools, and fallbacks are engineered as part of the application.",
    "We map the current process, identify manual handoffs, and convert repeatable work into software flows. Automation is built around approvals, data integrity, and measurable time savings.",
    "We model the metrics, permissions, and update frequency before dashboard design. The goal is a reliable operating surface, not decorative charts.",
    "We build tools around the exact roles and workflows your team already follows. Admin systems are kept fast, clear, and resilient for daily operations.",
    "We pair mobile interfaces with API ecosystems that support offline states, notifications, and synchronized data. The experience is engineered for field use and real operating constraints.",
    "We design vendor, order, payment, and fulfilment flows as connected systems. Marketplace logic is kept auditable and scalable from the first release.",
    "We scope agents around specific tools, permissions, and review boundaries. Their workflows are tested like production software, with clear outcomes and control points.",
    "We define contracts, payloads, authentication, webhooks, and failure behavior before integration work. APIs are documented and structured for long-term use.",
    "We create data models and pipelines that support reporting without manual cleanup. Analytics infrastructure is built to keep business decisions connected to reliable data.",
    "We convert operational rules into portals, modules, and workflows that teams can run every day. The focus is durable software for real business processes.",
  ];

  return (
    <section id="services">
      <div className="container">
        <RevealWrapper className="services-header">
          <div>
            <SectionLabel>Engineering Capabilities</SectionLabel>
            <h2 className="section-heading">What We <em>Engineer</em></h2>
            <p className="section-sub">From scalable SaaS systems to AI-native automation &mdash; we build enterprise-grade digital infrastructure for businesses that mean business.</p>
          </div>
          {!expanded ? (
            <div className="align-right">
              <Link href="/services" className="btn-primary">View All Services &rarr;</Link>
            </div>
          ) : null}
        </RevealWrapper>
        <div className={`services-grid ${expanded ? "expanded" : ""}`}>
          {services.map((service, index) => (
            <RevealWrapper key={service.name} delay={(index % 4) * 0.1}>
              <ServiceCard service={service} large={expanded}>
                {expanded ? <p className="service-approach">{expansions[index]}</p> : null}
              </ServiceCard>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
