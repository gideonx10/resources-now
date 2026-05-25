import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/src/components/sections/CTABanner";
import RevealWrapper from "@/src/components/ui/RevealWrapper";
import SectionLabel from "@/src/components/ui/SectionLabel";
import { Icon } from "@/src/components/ui/IconMap";
import { services } from "@/src/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.marketName || service.name} | Resources Now`,
    description: service.overview,
    openGraph: {
      title: `${service.marketName || service.name} by Resources Now`,
      description: service.overview,
      url: `https://resourcesnow.in/services/${service.slug}`,
      images: ["/og-image.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="service-hero">
        <div className="hero-grid-bg" />
        <div className="container">
          <RevealWrapper>
            <div className="breadcrumb"><Link href="/services">Services</Link> &gt; {service.marketName || service.name}</div>
            <div className="service-hero-icon"><Icon name={service.icon} size={30} /></div>
            <SectionLabel>Engineering Service</SectionLabel>
            <h1 className="hero-heading">{service.marketName || service.name}</h1>
            <p className="hero-sub">{service.overview}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">Discuss This Service &rarr;</Link>
              <Link href="/process" className="btn-secondary">See Our Process</Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section>
        <div className="container service-detail-grid">
          <DetailBlock title="Service Overview" items={[service.desc, service.approach]} paragraph />
          <DetailBlock title="Business Problems Solved" items={service.problems} />
          <DetailBlock title="Use Cases" items={service.useCases} />
          <DetailBlock title="Industries Supported" items={service.industries} />
          <DetailBlock title="Process Breakdown" items={service.process} />
          <DetailBlock title="Technical Capabilities" items={service.capabilities} />
        </div>
      </section>

      <section className="service-architecture-section">
        <div className="container">
          <RevealWrapper className="architecture-visual">
            <div>
              <SectionLabel>Architecture View</SectionLabel>
              <h2 className="section-heading">How This Service Becomes a Working System</h2>
              <p className="section-sub">We connect business input, product interfaces, APIs, data, integrations, and production deployment into one dependable system.</p>
            </div>
            <div className="workflow-diagram service-diagram">
              <span>Business Flow</span>
              <span>Product UI</span>
              <span>API Layer</span>
              <span>Data Model</span>
              <span>Integrations</span>
              <span>Production</span>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section>
        <div className="container service-detail-grid">
          <DetailBlock title="Example Workflows" items={service.workflows} />
          <DetailBlock title="Technologies Used" items={service.technologies} pills />
          <DetailBlock title="Deliverables" items={service.deliverables} />
          <DetailBlock title="Why Choose Resources Now" items={service.why} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function DetailBlock({ title, items, paragraph = false, pills = false }) {
  return (
    <RevealWrapper>
      <div className="detail-panel">
        <h2>{title}</h2>
        {paragraph ? (
          items.map((item) => <p key={item}>{item}</p>)
        ) : pills ? (
          <div className="stack-items">{items.map((item) => <span className="stack-item" key={item}>{item}</span>)}</div>
        ) : (
          <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
        )}
      </div>
    </RevealWrapper>
  );
}
