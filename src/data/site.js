import { Brain, Database, FileText, Gauge, RefreshCcw, Search, Wrench, Zap } from "lucide-react";

export const contactDetails = [
  { label: "Location", value: "Adajan, Surat, Gujarat", icon: "MapPin" },
  { label: "Phone", value: "+91 70411 39115", icon: "Phone" },
  { label: "Email", value: "mail@resourcesnow.in", icon: "Mail" },
  { label: "Response Time", value: "Within 24 hours", icon: "Clock" },
];

export const projectTypes = [
  "Web Platform / SaaS",
  "Mobile Application",
  "AI Integration / Agent",
  "Internal Tools / Dashboard",
  "E-commerce / Marketplace",
  "Enterprise / ERP System",
  "Automation / Workflows",
  "Something else",
];

export const processSteps = [
  { num: "01", name: "Discovery", desc: "Business requirements, technical constraints, scope and goal definition.", deliverable: "Requirements, constraints, scope, and goals" },
  { num: "02", name: "Architecture", desc: "System design, tech stack selection, API contracts, data modelling.", deliverable: "System design, stack plan, API contracts, and data model" },
  { num: "03", name: "Planning", desc: "Sprint structure, milestone planning, resource allocation.", deliverable: "Sprint structure, milestones, and resource allocation" },
  { num: "04", name: "Engineering", desc: "Full-stack development with weekly client reviews and demos.", deliverable: "Production-ready features with weekly demos" },
  { num: "05", name: "QA & Testing", desc: "End-to-end testing, performance audits, security reviews.", deliverable: "Tested flows, performance notes, and security review" },
  { num: "06", name: "Deployment", desc: "CI/CD pipelines, zero-downtime production launch.", deliverable: "CI/CD pipeline and production launch" },
  { num: "07", name: "Monitoring", desc: "Uptime tracking, error monitoring, performance dashboards.", deliverable: "Uptime, error, and performance monitoring" },
  { num: "08", name: "Scaling", desc: "Iterative improvement, feature expansion, infrastructure growth.", deliverable: "Feature expansion and infrastructure growth plan" },
];

export const processExpansions = [
  "We align business objectives with technical reality before estimating work. The output is a focused scope that the team can execute without ambiguity.",
  "We define the core system shape before feature work begins. Data flow, integrations, APIs, and deployment constraints are decided early.",
  "We convert architecture into milestones, owners, and review cycles. This keeps delivery visible while leaving room for technical discovery.",
  "We build in production-oriented increments with client reviews. Each sprint prioritizes working software over abstract progress.",
  "We validate flows, performance, and security before launch. The goal is stable behavior across real users, real data, and real operating conditions.",
  "We ship through repeatable pipelines and production checks. Launch is treated as an engineering event, not a manual file upload.",
  "We watch uptime, errors, and performance after release. Monitoring data guides fixes before small issues become operational blockers.",
  "We expand the system through measured iteration. Scaling covers features, infrastructure, and the operating workflows around the product.",
];

export const aiCapabilities = [
  { icon: Brain, name: "AI Copilots", desc: "Context-aware assistants embedded in your operational workflows and dashboards.", more: "They help teams retrieve answers, take action, and move faster inside the systems they already use." },
  { icon: Search, name: "RAG Systems", desc: "Retrieval-augmented generation over your own documents, databases, and knowledge bases.", more: "We design retrieval, chunking, permissions, and response flows around your operational data." },
  { icon: Zap, name: "AI Agents", desc: "Autonomous agents that execute multi-step tasks, research, and operations end-to-end.", more: "Agent workflows are scoped with clear tools, review points, and production guardrails." },
  { icon: FileText, name: "Document Intelligence", desc: "Automated extraction, classification, and analysis of unstructured documents at scale.", more: "These systems turn forms, PDFs, and records into structured workflows and usable data." },
  { icon: RefreshCcw, name: "Workflow Intelligence", desc: "AI-driven process automation that learns your business logic and removes manual tasks.", more: "We connect triggers, approvals, and integrations so automation fits real operating rules." },
  { icon: Gauge, name: "AI Dashboards", desc: "Intelligent analytics surfaces that surface insights, anomalies, and predictions automatically.", more: "Dashboards combine metrics with AI-assisted interpretation for faster decisions." },
];

export const aboutValues = [
  { icon: Wrench, name: "Systems Thinking", desc: "We design architecture before writing a line of code. Every system is built to scale, not just to ship." },
  { icon: Zap, name: "Execution Velocity", desc: "Fast delivery without cutting corners. Structured sprints, real deadlines, real accountability." },
  { icon: Database, name: "Business Impact Focus", desc: "Every engineering decision maps to a business outcome. We build what moves your metrics." },
];
