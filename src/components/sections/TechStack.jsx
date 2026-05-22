import { stackCategories } from "@/src/data/stack";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";

export default function TechStack() {
  return (
    <section id="stack">
      <div className="container">
        <RevealWrapper className="stack-header">
          <div>
            <SectionLabel>Technology</SectionLabel>
            <h2 className="section-heading">Our Engineering <em>Stack</em></h2>
            <p className="section-sub">Modern, battle-tested technologies chosen for reliability, performance, and scale.</p>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={0.1} className="stack-grid">
          {stackCategories.map((category) => (
            <div className="stack-cat" key={category.title}>
              <div className="stack-cat-title">{category.title}</div>
              <div className="stack-items">
                {category.items.map((item) => (
                  <span className="stack-item" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
