export default function SectionLabel({ children, dark = false }) {
  return <div className={dark ? "ai-label" : "section-label"}>{children}</div>;
}
