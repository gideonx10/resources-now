import Link from "next/link";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";
import { aiCapabilities } from "@/src/data/site";

export default function AISection({ page = false }) {
  return (
    <section id="ai" className={page ? "ai-page-section" : ""}>
      <div className="ai-bg-grid" />
      <div className="ai-blob" />
      <div className="container">
        <div className={page ? "ai-page-inner" : "ai-inner"}>
          <RevealWrapper>
            <SectionLabel dark>AI Solutions</SectionLabel>
            <h2 className="ai-heading">Intelligence Built<br />Into Your <em>Systems</em></h2>
            <p className="ai-sub">We don&apos;t bolt AI on top &mdash; we engineer it into the architecture from the ground up. RAG pipelines, LLM integrations, autonomous agents, and workflow intelligence.</p>
            {!page ? <Link href="/ai-solutions" className="btn-primary-white">Explore AI Systems &rarr;</Link> : null}
          </RevealWrapper>
          <RevealWrapper delay={0.2} className="ai-cards">
            {aiCapabilities.map(({ icon: IconComponent, name, desc, more }) => (
              <div className="ai-card" key={name}>
                <div className="ai-card-icon"><IconComponent size={22} /></div>
                <div className="ai-card-name">{name}</div>
                <div className="ai-card-desc">{desc}{page ? ` ${more}` : ""}</div>
              </div>
            ))}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
