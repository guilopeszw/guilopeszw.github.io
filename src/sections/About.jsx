import Section from "../components/Section";
import { education, personal } from "../data/portfolio";

export default function About() {
  return (
    <Section id="about">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}
           className="about-grid">
        {/* Left */}
        <div>
          <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "20px", textTransform: "uppercase" }}>
            about
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: "40px", fontWeight: 400, color: "var(--text-primary)", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: "28px" }}
          >
            i write code that<br />
            <span>moves data and learns</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              `cs student at federal university of paraíba (ufpb) and member of tail — the technology and artificial intelligence league. that's where most of the interesting problems come from.`,
              `at aria laboratory, i design data and backend infrastructure — schemas, microservices, pipelines, api's - you get the idea. at moises.ai, i built an audio analysis api for chord notes recognition.`,
              `i also did ml research with the university of pennsylvania, helping test and rate tissue separation with machine learning on medical imaging classification.`,
              `through tail's music board, i'm also part of a joint project developing ai-driven haptic systems to make music accessible to hearing-impaired people.`,
              `i am very much obsessed with anything world-changing, especially if it envolves music, ai, data and, well, code.`,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-secondary)", fontWeight: 300 }}>
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Education card */}
          <div
            className="glass"
            style={{ borderRadius: "14px", padding: "24px" }}
          >
            <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>
              education
            </p>
            <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
              {education.school}
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
              {education.degree}
            </p>
            <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "8px" }}>
              {education.period}
            </p>
          </div>

          {/* TAIL */}
          <div
            className="glass"
            style={{ borderRadius: "14px", padding: "24px" }}
          >
            <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>
              member
            </p>
            <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
              tail
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}>
              technology and artificial intelligence league
            </p>
            <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "8px" }}>
              ufpb · music board · auris iii haptic chair
            </p>
          </div>

          {/* Coursework */}          <div
            className="glass"
            style={{ borderRadius: "14px", padding: "24px" }}
          >
            <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>
              coursework
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {education.courses.map((c) => (
                <span
                  key={c}
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    background: "rgba(26, 108, 245, 0.06)",
                    border: "1px solid rgba(26, 108, 245, 0.12)",
                    borderRadius: "100px",
                    padding: "4px 12px",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div
            className="glass"
            style={{ borderRadius: "14px", padding: "24px" }}
          >
            <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>
              languages
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { lang: "portuguese", level: "native" },
                { lang: "english", level: "fluent" },
                { lang: "spanish", level: "basic" },
              ].map(({ lang, level }) => (
                <div key={lang} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", color: "var(--text-primary)" }}>{lang}</span>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
