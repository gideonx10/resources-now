"use client";

import { useState } from "react";
import { projects } from "@/src/data/projects";
import ProjectCard from "./ProjectCard";
import RevealWrapper from "./RevealWrapper";

const filters = ["All", "Web Platform", "SaaS", "Mobile", "Marketplace", "Institutional", "E-commerce", "Automation"];

function matches(project, filter) {
  if (filter === "All") return true;
  const haystack = `${project.category} ${project.tags.join(" ")} ${project.name}`.toLowerCase();
  if (filter === "Web Platform") return haystack.includes("platform");
  if (filter === "SaaS") return haystack.includes("saas") || haystack.includes("erp");
  return haystack.includes(filter.toLowerCase());
}

export default function CaseStudyFilter() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter((project) => matches(project, active));
  return (
    <>
      <div className="filter-bar">
        {filters.map((filter) => (
          <button key={filter} className={active === filter ? "active" : ""} onClick={() => setActive(filter)}>
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filtered.map((project, index) => (
          <RevealWrapper key={project.slug} delay={(index % 3) * 0.1}>
            <ProjectCard project={project} compact />
          </RevealWrapper>
        ))}
      </div>
    </>
  );
}
