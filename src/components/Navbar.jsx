import { useState, useEffect } from "react";

const links = ["about", "projects", "experience", "stack", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        background: scrolled ? "rgba(200, 223, 247, 0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(180, 210, 240, 0.5)" : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.02em", background: "none", border: "none", cursor: "pointer" }}
        >
          gl
        </button>

        {/* Desktop nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: "32px", listStyle: "none" }} className="hidden md:flex">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  background: "none", border: "none", cursor: "pointer",
                  transition: "color 0.2s",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
                onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ display: "block", width: "20px", height: "1px", background: "currentColor", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
            <span style={{ display: "block", width: "14px", height: "1px", background: "currentColor", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "20px", height: "1px", background: "currentColor", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          maxHeight: menuOpen ? "240px" : 0,
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          background: "rgba(200, 223, 247, 0.9)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div style={{ padding: "16px 32px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{ textAlign: "left", fontSize: "15px", color: "var(--text-primary)", background: "none", border: "none", cursor: "pointer" }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
