const statusStyle = {
  "in progress": { bg: "rgba(255, 180, 0, 0.1)", color: "#b07800", border: "rgba(255, 180, 0, 0.25)" },
  active:        { bg: "rgba(26, 108, 245, 0.07)", color: "#1a6cf5", border: "rgba(26, 108, 245, 0.2)" },
  shipped:       { bg: "rgba(0, 170, 100, 0.08)", color: "#007a44", border: "rgba(0, 170, 100, 0.2)" },
};

export default function ProjectCard({ project }) {
  const s = statusStyle[project.status] || statusStyle.shipped;

  return (
    <div
      className="glass glass-hover"
      style={{
        borderRadius: "16px",
        padding: "32px",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "default",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px", gap: "12px" }}>
        <div>
          <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
            {project.year}
          </span>
          <h3
            style={{ fontSize: "17px", fontWeight: 500, color: "var(--text-primary)", marginTop: "4px", letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h3>
        </div>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.04em",
            padding: "3px 10px",
            borderRadius: "100px",
            background: s.bg,
            color: s.color,
            border: `1px solid ${s.border}`,
            flexShrink: 0,
            marginTop: "4px",
            textTransform: "lowercase",
          }}
        >
          {project.status}
        </span>
      </div>

      <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "24px" }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "11px",
              color: "var(--text-muted)",
              background: "rgba(26, 108, 245, 0.06)",
              border: "1px solid rgba(26, 108, 245, 0.12)",
              borderRadius: "100px",
              padding: "3px 10px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
