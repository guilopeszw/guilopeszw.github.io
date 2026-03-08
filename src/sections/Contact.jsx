import Section from "../components/Section";
import { personal } from "../data/portfolio";

const links = [
  {
    label: "email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    label: "linkedin",
    value: "guilherme-u-lopes",
    href: personal.linkedin,
  },
  {
    label: "github",
    value: "guilopeszw",
    href: personal.github,
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <div style={{ maxWidth: "560px" }}>
        <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "20px", textTransform: "uppercase" }}>
          contact
        </p>
        <h2
          className="font-serif"
          style={{ fontSize: "40px", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "20px" }}
        >
          let's talk
        </h2>
        <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "48px", fontWeight: 300 }}>
          i'm passionate about backend development, software engineering, data science and applied ml. let's build something together!
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass glass-hover"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateX(4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
            >
              <div>
                <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "3px" }}>
                  {link.label}
                </span>
                <span style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 400 }}>
                  {link.value}
                </span>
              </div>
              <span style={{ fontSize: "16px", color: "var(--text-muted)" }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
