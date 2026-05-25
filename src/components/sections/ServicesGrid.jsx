import Link from "next/link";
import { services } from "@/src/data/services";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesGrid({ expanded = false }) {
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
                {expanded ? <p className="service-approach">{service.approach}</p> : null}
              </ServiceCard>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
