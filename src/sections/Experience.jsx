import { useState } from "react";
import Section from "../components/Section";
import { experience } from "../data/portfolio";

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <Section id="experience">
      <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "20px", textTransform: "uppercase" }}>
        experience
      </p>
      <h2
        className="font-serif"
        style={{ fontSize: "40px", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "48px" }}
      >
        experience
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "32px", alignItems: "start" }}
           className="exp-grid">
        {/* Tab list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {experience.map((exp, i) => (
            <button
              key={exp.id}
              onClick={() => setActive(i)}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: active === i ? "rgba(255,255,255,0.65)" : "transparent",
                boxShadow: active === i ? "0 1px 8px rgba(26,108,245,0.08)" : "none",
              }}
              onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = "rgba(255,255,255,0.3)"; }}
              onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ fontSize: "13px", fontWeight: active === i ? 500 : 400, color: active === i ? "var(--text-primary)" : "var(--text-secondary)", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                {exp.org}
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "3px" }}>
                {exp.period}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div
          className="glass"
          style={{ borderRadius: "16px", padding: "32px", minHeight: "280px" }}
        >
          {experience.map((exp, i) => (
            <div key={exp.id} style={{ display: active === i ? "block" : "none" }}>
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                  {exp.type} · {exp.location}
                </p>
                <h3 style={{ fontSize: "20px", fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                  {exp.role}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {exp.org}
                </p>
              </div>

              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none" }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", fontSize: "12px", marginTop: "3px", flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: "14px", lineHeight: "1.65", color: "var(--text-secondary)", fontWeight: 300 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
