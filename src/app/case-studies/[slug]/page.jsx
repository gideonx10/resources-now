import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import CTABanner from "@/src/components/sections/CTABanner";
import RevealWrapper from "@/src/components/ui/RevealWrapper";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <RevealWrapper>
            <div className="breadcrumb"><Link href="/case-studies">Case Studies</Link> &gt; {project.name}</div>
            <h1 className="section-heading">{project.name}</h1>
            <div className="project-tags large">
              {project.tags.map((tag, index) => (
                <span key={tag} className={`project-tag ${project.tagType[index] === "blue" ? "blue" : ""}`}>{tag}</span>
              ))}
            </div>
            <div className="project-stack spaced">
              {project.stack.map((item) => <span className="stack-pill" key={item}>{item}</span>)}
            </div>
            {project.status ? <div className="project-live">{project.status}</div> : null}
          </RevealWrapper>
        </div>
      </section>
      <section>
        <div className="container detail-grid">
          <RevealWrapper>
            <h2 className="mini-heading">Overview</h2>
            <p className="large-copy">{project.description}</p>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="mini-heading">Highlights</h2>
            <ul className="clean-list">
              {project.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <h2 className="mini-heading">Tech Stack</h2>
            <div className="project-stack">
              {project.stack.map((item) => <span className="stack-pill" key={item}>{item}</span>)}
            </div>
            {project.url ? <a className="btn-primary detail-link" href={project.url} target="_blank" rel="noreferrer">Open Live System &rarr;</a> : null}
          </RevealWrapper>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
