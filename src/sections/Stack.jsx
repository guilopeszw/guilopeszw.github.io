import Section from "../components/Section";
import { stack } from "../data/portfolio";

export default function Stack() {
  return (
    <Section id="stack">
      <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "20px", textTransform: "uppercase" }}>
        stack
      </p>
      <h2
        className="font-serif"
        style={{ fontSize: "40px", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "48px" }}
      >
        tools of the craft
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
           className="stack-grid">
        {Object.entries(stack).map(([category, items]) => (
          <div
            key={category}
            className="glass glass-hover"
            style={{
              borderRadius: "14px",
              padding: "28px",
              transition: "all 0.25s ease",
            }}
          >
            <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
              {category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    background: "rgba(26, 108, 245, 0.05)",
                    border: "1px solid rgba(26, 108, 245, 0.1)",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
