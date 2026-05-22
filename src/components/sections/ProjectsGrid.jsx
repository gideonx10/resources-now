import Link from "next/link";
import { projects } from "@/src/data/projects";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsGrid({ all = false }) {
  const visibleProjects = all ? projects : projects.slice(0, 6);
  return (
    <section id="projects">
      <div className="container">
        <RevealWrapper className="projects-header">
          <div>
            <SectionLabel>Engineering Case Studies</SectionLabel>
            <h2 className="section-heading">Systems We&apos;ve <em>Built</em></h2>
            <p className="section-sub">Real platforms. Real scale. Real business impact.</p>
          </div>
          {!all ? <Link href="/case-studies" className="btn-secondary">View All Systems &rarr;</Link> : null}
        </RevealWrapper>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <RevealWrapper key={project.slug} delay={(index % 3) * 0.1}>
              <ProjectCard project={project} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
