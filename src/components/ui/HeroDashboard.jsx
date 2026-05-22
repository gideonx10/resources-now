export default function HeroDashboard() {
  return (
    <div className="hero-dashboard">
      <div className="dash-topbar">
        <div className="dash-dot red" />
        <div className="dash-dot yellow" />
        <div className="dash-dot green" />
        <div className="dash-url">resourcesnow.in / production-dashboard</div>
        <span className="dash-live"><span />Live</span>
      </div>
      <div className="dash-body">
        <div className="d-card">
          <div className="d-card-lbl">Active Platforms</div>
          <div className="d-card-val blue">30+</div>
          <div className="d-card-sub">Clients served</div>
        </div>
        <div className="d-card">
          <div className="d-card-lbl">Deployments</div>
          <div className="d-card-val">140+</div>
          <div className="d-card-sub">Since 2020</div>
        </div>
        <div className="d-card">
          <div className="d-card-lbl">Uptime</div>
          <div className="d-card-val green">99.8%</div>
          <div className="d-card-sub">Last 90 days</div>
        </div>
        <div className="d-card d-wide">
          <div className="d-card-lbl pipeline-label">Engineering Pipeline</div>
          {[
            ["Web Platforms", "88%", "Live", "blue"],
            ["AI Integrations", "72%", "Growing", "green"],
            ["Automation Systems", "64%", "Active", "blue"],
          ].map(([label, width, pill, tone]) => (
            <div className="d-bar-row" key={label}>
              <span className="label">{label}</span>
              <div className="d-track"><div className={`d-fill ${tone}`} style={{ width }} /></div>
              <span className="d-percent">{width}</span>
              <span className={`d-pill ${pill === "Growing" ? "build" : "live"}`}>{pill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
