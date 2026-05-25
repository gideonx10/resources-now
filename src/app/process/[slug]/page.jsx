import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/src/components/sections/CTABanner";
import RevealWrapper from "@/src/components/ui/RevealWrapper";
import SectionLabel from "@/src/components/ui/SectionLabel";
import { processStages } from "@/src/data/process";

export function generateStaticParams() {
  return processStages.map((stage) => ({ slug: stage.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const stage = processStages.find((item) => item.slug === slug);
  if (!stage) return {};
  return {
    title: `${stage.name} Process | Resources Now`,
    description: stage.desc,
  };
}

export default async function ProcessStagePage({ params }) {
  const { slug } = await params;
  const stage = processStages.find((item) => item.slug === slug);
  if (!stage) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <RevealWrapper>
            <div className="breadcrumb"><Link href="/process">Process</Link> &gt; {stage.name}</div>
            <SectionLabel>{stage.label}</SectionLabel>
            <h1 className="section-heading">{stage.name}</h1>
            <p className="section-sub">{stage.desc}</p>
          </RevealWrapper>
        </div>
      </section>
      <section>
        <div className="container service-detail-grid">
          <RevealWrapper>
            <div className="detail-panel primary">
              <h2>Simple Explanation</h2>
              <p>{stage.plain}</p>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <div className="detail-panel">
              <h2>What You Receive</h2>
              <ul>{stage.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <div className="detail-panel">
              <h2>Why It Helps Sales</h2>
              <ul>{stage.salesNotes.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </RevealWrapper>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
