import Link from "next/link";
import RevealWrapper from "@/src/components/ui/RevealWrapper";
import SectionLabel from "@/src/components/ui/SectionLabel";

export default function BlogPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <RevealWrapper className="center-block">
          <SectionLabel>Insights</SectionLabel>
          <h1 className="section-heading">Engineering Blog</h1>
          <p className="section-sub centered">Thoughts on systems, AI, and building digital products.</p>
          <div className="coming-soon-card">
            <p>We&apos;re writing. Check back soon.</p>
            <Link href="/contact" className="btn-primary">Contact Resources Now &rarr;</Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
