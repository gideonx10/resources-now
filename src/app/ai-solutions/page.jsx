import AISection from "@/src/components/sections/AISection";
import CTABanner from "@/src/components/sections/CTABanner";
import RevealWrapper from "@/src/components/ui/RevealWrapper";

export default function AISolutionsPage() {
  return (
    <div className="ai-page">
      <AISection page />
      <section className="ai-dark-band">
        <div className="container">
          <RevealWrapper>
            <h2 className="ai-heading smaller">How we integrate AI</h2>
          </RevealWrapper>
          <div className="process-track">
            {[
              "Audit your existing system",
              "Design the AI architecture",
              "Engineer and deploy",
            ].map((step, index) => (
              <RevealWrapper key={step} delay={index * 0.1}>
                <div className="ai-card">
                  <div className="process-step-num">{`0${index + 1}`}</div>
                  <div className="ai-card-name">{step}</div>
                </div>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper delay={0.2} className="ai-stack-row">
            {["OpenAI", "LangChain", "RAG Pipelines", "LLM Workflows", "Vector DBs"].map((item) => (
              <span className="stack-item dark" key={item}>{item}</span>
            ))}
          </RevealWrapper>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
