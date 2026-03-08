import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 32px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Location */}
      <p
        className="animate-fade-up"
        style={{
          fontSize: "13px",
          color: "var(--text-muted)",
          marginBottom: "24px",
          letterSpacing: "0.01em",
          animationDelay: "0.05s",
        }}
      >
        🇧🇷 {personal.location}
      </p>

      {/* Name + avatar */}
      <div
        className="animate-fade-up"
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "20px",
          marginBottom: "32px",
          animationDelay: "0.1s",
          flexWrap: "wrap",
        }}
      >
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(52px, 8vw, 96px)",
            fontWeight: 400,
            color: "var(--text-primary)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            margin: 0,
          }}
        >
          {personal.name}
        </h1>
        <div
          style={{
            width: "clamp(52px, 7vw, 80px)",
            height: "clamp(52px, 7vw, 80px)",
            borderRadius: "50%",
            overflow: "hidden",
            background: "rgba(255,255,255,0.6)",
            border: "1px solid var(--border)",
            flexShrink: 0,
            marginBottom: "6px",
          }}
        >
          <img
            src="/avatar.png"
            alt="guilherme lopes"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", mixBlendMode: "multiply" }}
          />
        </div>
      </div>

      {/* Role */}
      <p
        className="animate-fade-up"
        style={{
          fontSize: "18px",
          color: "var(--text-secondary)",
          marginBottom: "24px",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          animationDelay: "0.2s",
        }}
      >
        {personal.title} — {personal.subtitle}
      </p>

      {/* Bio */}
      <p
        className="animate-fade-up"
        style={{
          fontSize: "16px",
          lineHeight: "1.65",
          color: "var(--text-secondary)",
          maxWidth: "520px",
          marginBottom: "48px",
          fontWeight: 300,
          animationDelay: "0.3s",
        }}
      >
        {personal.bio}
      </p>

      {/* Links */}
      <div
        className="animate-fade-up"
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          animationDelay: "0.4s",
          flexWrap: "wrap",
        }}
      >
        <a
          href={`mailto:${personal.email}`}
          style={{
            fontSize: "14px",
            color: "var(--text-primary)",
            textDecoration: "none",
            fontWeight: 500,
            borderBottom: "1px solid var(--text-primary)",
            paddingBottom: "1px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.5"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          email ↗
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
        >
          github ↗
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
        >
          linkedin ↗
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="animate-fade-up"
        style={{
          position: "absolute",
          bottom: "48px",
          left: "32px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          animationDelay: "0.7s",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "var(--text-muted)",
            opacity: 0.5,
          }}
        />
        <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
          scroll
        </span>
      </div>
    </section>
  );
}
