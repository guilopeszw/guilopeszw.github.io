import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} guilherme lopes
        </span>
      </div>
    </footer>
  );
}
