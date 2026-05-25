import Link from "next/link";
import RevealWrapper from "../ui/RevealWrapper";
import HeroDashboard from "../ui/HeroDashboard";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-blob" />
      <div className="hero-blob-2" />
      <div className="container">
        <div className="hero-inner">
          <div>
            <RevealWrapper>
              <div className="hero-eyebrow">AI-Powered Engineering Systems</div>
              <h1 className="hero-heading">
                <span>We Engineer</span>
                <span><em>Scalable</em> Software</span>
                <span>Systems &amp; Digital</span>
                <span className="hero-heading-final">Infrastructure</span>
              </h1>
              <p className="hero-sub">Enterprise platforms, AI integrations, workflow automation, and full-stack engineering systems &mdash; built for modern businesses that demand reliability and scale.</p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">Start Engineering With Us &rarr;</Link>
                <Link href="/case-studies" className="btn-secondary">View Systems Built</Link>
              </div>
            </RevealWrapper>
          </div>
          <RevealWrapper delay={0.3} className="hero-visual">
            <HeroDashboard />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
