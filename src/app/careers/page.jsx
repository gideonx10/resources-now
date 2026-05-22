import RevealWrapper from "@/src/components/ui/RevealWrapper";
import SectionLabel from "@/src/components/ui/SectionLabel";

const roles = [
  {
    title: "Outreach / Business Development",
    desc: "Research Surat-based and international businesses, identify digital product opportunities, and convert leads through direct outreach and pitching.",
    requirements: "Strong communication skills, research ability, confident in real-world conversations, self-motivated, results-oriented.",
    offer: "Base salary + commission per converted client + performance bonuses.",
  },
  {
    title: "Tech Engineer (Junior / Mid)",
    desc: "Work on real production projects — web platforms, mobile apps, dashboards, and AI integrations. Own your tasks end-to-end from briefing to deployment.",
    requirements: "Proficiency in at least one of Next.js / React / Node.js / Flutter. GitHub portfolio required. Ability to handle blockers independently, strong ownership mentality.",
    offer: "Base salary + project delivery bonuses.",
  },
];

export default function CareersPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <RevealWrapper>
          <SectionLabel>Careers</SectionLabel>
          <h1 className="section-heading">Join the Engineering Team</h1>
          <p className="section-sub">We&apos;re building a team of dedicated engineers, sales people, and operators who take ownership and deliver.</p>
        </RevealWrapper>
        <div className="value-grid roles-grid">
          {roles.map((role, index) => (
            <RevealWrapper key={role.title} delay={index * 0.1}>
              <div className="stack-cat role-card">
                <h2 className="mini-heading">{role.title}</h2>
                <p>{role.desc}</p>
                <h3>Requirements</h3>
                <p>{role.requirements}</p>
                <h3>What we offer</h3>
                <p>{role.offer}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper delay={0.2}>
          <div className="stack-cat application-card">
            <h2 className="mini-heading">Application process</h2>
            <div className="application-steps">
              {["Apply", "Assignment", "Interview / Roleplay", "2-week Paid Trial"].map((step) => <span className="stack-item" key={step}>{step}</span>)}
            </div>
            <p>Send your application to <a href="mailto:mail@resourcesnow.in">mail@resourcesnow.in</a> with the subject line: [Role] — Your Name</p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
