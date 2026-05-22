import { Icon } from "./IconMap";

export default function ServiceCard({ service, children, large = false }) {
  return (
    <div className={`service-card ${large ? "service-card-large" : ""}`}>
      <div className="service-num">{service.num}</div>
      <div className="service-icon">
        <Icon name={service.icon} />
      </div>
      <div className="service-name">{service.name}</div>
      <div className="service-desc">{service.desc}</div>
      {children}
    </div>
  );
}
