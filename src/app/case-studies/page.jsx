import CaseStudyFilter from "@/src/components/ui/CaseStudyFilter";
import RevealWrapper from "@/src/components/ui/RevealWrapper";
import SectionLabel from "@/src/components/ui/SectionLabel";

export default function CaseStudiesPage() {
  return (
    <section id="projects" className="page-hero-section">
      <div className="container">
        <RevealWrapper className="projects-header">
          <div>
            <SectionLabel>Engineering Case Studies</SectionLabel>
            <h1 className="section-heading">Systems We&apos;ve <em>Built</em></h1>
            <p className="section-sub">Real platforms. Real scale. Real business impact.</p>
          </div>
        </RevealWrapper>
        <CaseStudyFilter />
      </div>
    </section>
  );
}
