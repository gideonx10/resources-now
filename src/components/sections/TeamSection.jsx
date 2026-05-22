import Link from "next/link";
import { team } from "@/src/data/team";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";

export default function TeamSection({ showHeader = true }) {
  return (
    <section id="team">
      <div className="container">
        {showHeader ? (
          <RevealWrapper className="team-header">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="section-heading">People Behind the <em>Systems</em></h2>
            <p className="section-sub centered">Engineering minds building production systems that real businesses depend on.</p>
          </RevealWrapper>
        ) : null}
        <RevealWrapper delay={0.1} className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.initials}>
              <div className="team-avatar">{member.initials}</div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
            </div>
          ))}
          <Link href="/careers" className="team-card team-hire">
            <div className="team-hire-plus">+</div>
            <div className="team-hire-txt">We&apos;re Hiring</div>
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}
