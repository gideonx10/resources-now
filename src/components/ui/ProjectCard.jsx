import Link from "next/link";
import { Icon, projectIcon } from "./IconMap";

export default function ProjectCard({ project, compact = false }) {
  return (
    <Link
      href={`/case-studies/${project.slug}`}
      className={`project-card ${project.featured && !compact ? "featured" : ""}`}
    >
      <div className="project-thumb" style={{ height: project.featured && !compact ? 190 : undefined }}>
        <div className="project-thumb-grid" />
        <span className="project-icon-wrap">
          <Icon name={projectIcon(project.slug)} size={project.featured && !compact ? 54 : 46} />
        </span>
      </div>
      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={tag} className={`project-tag ${project.tagType[index] === "blue" ? "blue" : ""}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-name">{project.name}</div>
        <div className="project-desc">{project.description}</div>
        <div className="project-stack">
          {project.stack.map((item) => (
            <span className="stack-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
        {project.status ? <div className="project-live">{project.status}{project.url ? ` — ${new URL(project.url).hostname.replace("www.", "")}` : ""}</div> : null}
      </div>
    </Link>
  );
}
