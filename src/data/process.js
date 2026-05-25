export const processStages = [
  {
    num: "01",
    slug: "discovery",
    name: "Discovery",
    label: "Business clarity",
    desc: "We understand your business, users, goals, current tools, and the exact problem the system needs to solve.",
    plain:
      "This stage turns a rough idea into a clear project direction. We ask practical questions, study current workflows, and identify what should be built first.",
    deliverables: ["Business goal map", "User and role understanding", "Problem statement", "Initial scope"],
    salesNotes: ["Helps non-technical teams explain what they need", "Prevents building unnecessary features", "Creates a shared direction before cost and timeline decisions"],
  },
  {
    num: "02",
    slug: "business-understanding",
    name: "Business Understanding",
    label: "Operational context",
    desc: "We study how your business actually runs so the software supports real operations, not assumptions.",
    plain:
      "We look at departments, approval flows, sales steps, reports, communication gaps, and recurring manual work. This helps us design a system that your team can actually use every day.",
    deliverables: ["Workflow map", "Role and responsibility notes", "Operational pain points", "Priority list"],
    salesNotes: ["Useful for SMEs and enterprises with complex processes", "Makes software feel custom to your business", "Improves adoption after launch"],
  },
  {
    num: "03",
    slug: "architecture",
    name: "Architecture",
    label: "System design",
    desc: "We plan the structure of the platform: data, users, permissions, APIs, integrations, AI, and deployment.",
    plain:
      "Architecture is the blueprint. It helps us decide how the system should be built so it remains reliable when users, data, and features grow.",
    deliverables: ["System blueprint", "Data model", "Role and permission model", "Integration plan"],
    salesNotes: ["Shows technical maturity", "Reduces rebuild risk", "Makes scalability part of the first version"],
  },
  {
    num: "04",
    slug: "customized-planning",
    name: "Customized Planning",
    label: "Milestones",
    desc: "We convert the idea into phases, priorities, timelines, and review points that are easy to follow.",
    plain:
      "Instead of giving vague timelines, we break the project into buildable milestones. This helps founders, owners, and managers understand what is happening at each stage.",
    deliverables: ["Milestone plan", "Feature priority list", "Sprint structure", "Review rhythm"],
    salesNotes: ["Improves transparency", "Supports budget planning", "Makes sales and delivery conversations easier"],
  },
  {
    num: "05",
    slug: "ui-ux-design",
    name: "UI/UX Design",
    label: "Product experience",
    desc: "We design screens, flows, dashboards, and mobile experiences that make the system easy to use.",
    plain:
      "Good design is not only about looks. It helps users complete work faster, reduces confusion, and makes the software feel professional.",
    deliverables: ["User flows", "Interface direction", "Dashboard layouts", "Responsive experience plan"],
    salesNotes: ["Improves client confidence", "Helps teams visualize the product", "Reduces rework during development"],
  },
  {
    num: "06",
    slug: "development",
    name: "Development",
    label: "Engineering",
    desc: "We build the frontend, backend, APIs, database logic, dashboards, roles, and business workflows.",
    plain:
      "This is where the planned system becomes working software. We build in structured increments so progress is visible and usable.",
    deliverables: ["Frontend application", "Backend APIs", "Database logic", "Role-based workflows"],
    salesNotes: ["Shows weekly progress", "Keeps engineering aligned with business goals", "Creates production-ready systems"],
  },
  {
    num: "07",
    slug: "integrations",
    name: "Integrations",
    label: "Connected systems",
    desc: "We connect payments, WhatsApp, email, CRMs, AI tools, analytics, APIs, and third-party platforms.",
    plain:
      "Most businesses already use multiple tools. We connect them so data moves correctly and teams do not repeat work manually.",
    deliverables: ["Integration map", "API connections", "Webhook flows", "Error handling plan"],
    salesNotes: ["Reduces manual follow-up", "Improves operational speed", "Makes the platform part of the business ecosystem"],
  },
  {
    num: "08",
    slug: "qa-testing",
    name: "QA & Testing",
    label: "Reliability",
    desc: "We test user flows, edge cases, responsiveness, performance, data accuracy, and deployment readiness.",
    plain:
      "Testing protects the business from avoidable issues. We check the system like real users will use it, not only like developers test it.",
    deliverables: ["QA checklist", "Issue fixes", "Performance checks", "Mobile responsiveness review"],
    salesNotes: ["Builds launch confidence", "Reduces support pressure", "Protects business reputation"],
  },
  {
    num: "09",
    slug: "deployment",
    name: "Deployment",
    label: "Production launch",
    desc: "We launch the system with hosting, domains, environment setup, production checks, and monitoring basics.",
    plain:
      "Deployment is handled carefully so the system is ready for real users. We prepare the production environment, connect services, and verify launch behavior.",
    deliverables: ["Production deployment", "Domain and environment setup", "Launch checklist", "Monitoring basics"],
    salesNotes: ["Makes launch organized", "Reduces last-minute confusion", "Creates a professional handover"],
  },
  {
    num: "10",
    slug: "maintenance",
    name: "Maintenance",
    label: "Long-term support",
    desc: "We support improvements, bug fixes, small feature changes, monitoring, and system health after launch.",
    plain:
      "Software needs care after launch. We help keep it stable, updated, and aligned with the way your business evolves.",
    deliverables: ["Support plan", "Bug fix process", "Improvement backlog", "System health checks"],
    salesNotes: ["Improves trust after launch", "Supports long-term clients", "Keeps systems useful as the business changes"],
  },
  {
    num: "11",
    slug: "scaling",
    name: "Scaling",
    label: "Growth readiness",
    desc: "We improve performance, add modules, expand infrastructure, and prepare the system for more users and data.",
    plain:
      "When the business grows, the system should not become a blocker. We help scale features, infrastructure, automation, and analytics as needed.",
    deliverables: ["Scaling roadmap", "Performance improvements", "Module expansion", "Infrastructure upgrades"],
    salesNotes: ["Shows long-term thinking", "Supports growing businesses", "Protects the investment in custom software"],
  },
];
