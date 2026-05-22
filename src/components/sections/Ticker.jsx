const items = [
  "Web Platforms",
  "SaaS Engineering",
  "AI Integrations",
  "Workflow Automation",
  "Enterprise Dashboards",
  "AI Agents",
  "Mobile Systems",
  "API Ecosystems",
  "Internal Tools",
  "Data Infrastructure",
];

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span className="ticker-pair" key={`${item}-${index}`}>
            <span className="ticker-item">{item}</span>
            <span className="ticker-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
