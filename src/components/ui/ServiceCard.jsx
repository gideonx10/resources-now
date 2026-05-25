import { Icon } from "./IconMap";
import Link from "next/link";

export default function ServiceCard({ service, children, large = false }) {
  return (
    <Link href={`/services/${service.slug}`} className={`service-card ${large ? "service-card-large" : ""}`}>
      <div className="service-num">{service.num}</div>
      <div className="service-icon">
        <Icon name={service.icon} />
      </div>
      <div className="service-name">{service.marketName || service.name}</div>
      <div className="service-desc">{service.desc}</div>
      {children}
      <div className="service-link">View service details &rarr;</div>
    </Link>
  );
}
