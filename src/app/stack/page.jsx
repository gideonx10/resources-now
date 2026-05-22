import CTABanner from "@/src/components/sections/CTABanner";
import TechStack from "@/src/components/sections/TechStack";
import RevealWrapper from "@/src/components/ui/RevealWrapper";

export default function StackPage() {
  return (
    <>
      <TechStack />
      <section>
        <div className="container">
          <RevealWrapper>
            <h2 className="mini-heading">Why these choices</h2>
          </RevealWrapper>
          <div className="value-grid">
            {[
              ["Performance", "We choose tools that keep interfaces fast, APIs responsive, and deployments reliable."],
              ["Scalability", "We favor architectures that can grow across users, data, roles, and integrations."],
              ["Developer Experience", "We use mature tooling that keeps delivery structured, testable, and maintainable."],
            ].map(([title, text], index) => (
              <RevealWrapper key={title} delay={index * 0.1}>
                <div className="stack-cat">
                  <div className="process-step-name">{title}</div>
                  <p className="process-step-desc">{text}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
