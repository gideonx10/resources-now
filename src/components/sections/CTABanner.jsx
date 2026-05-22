import Link from "next/link";
import RevealWrapper from "../ui/RevealWrapper";

export default function CTABanner() {
  return (
    <section id="cta">
      <div className="cta-dots" />
      <div className="container">
        <RevealWrapper>
          <h2 className="cta-heading">Ready to Build<br />Something Serious?</h2>
          <p className="cta-sub">Tell us what you&apos;re engineering. We&apos;ll make it production-ready.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-white">Start Engineering With Us &rarr;</Link>
            <a href="mailto:mail@resourcesnow.in" className="btn-ghost-white">mail@resourcesnow.in</a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
