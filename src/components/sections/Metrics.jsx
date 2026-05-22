import { metrics } from "@/src/data/metrics";
import AnimatedCounter from "../ui/AnimatedCounter";
import RevealWrapper from "../ui/RevealWrapper";

export default function Metrics() {
  return (
    <div id="metrics">
      <div className="container">
        <RevealWrapper className="metrics-grid">
          {metrics.map((metric) => (
            <div className="metric-item" key={metric.label}>
              <div className="metric-num">
                <AnimatedCounter value={metric.value} />
                <sup>{metric.suffix}</sup>
              </div>
              <div className="metric-lbl">{metric.label}</div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </div>
  );
}
