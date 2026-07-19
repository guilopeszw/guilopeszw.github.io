import { Link } from "react-router-dom";
import { useState } from "react";

function setTheme(t) {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch { /* ignore */ }
}

export default function SideNav() {
  const [theme, set] = useState(() => document.documentElement.dataset.theme || "light");
  const pick = (t) => { setTheme(t); set(t); };

  return (
    <nav className="side">
      <span className="links">
        <a href="/#about">about me</a>
        <a href="/#work">work</a>
        <Link to="/blog">blog</Link>
        <a href="/#say">say hi</a>
      </span>
      <span className="switch" role="group" aria-label="color theme">
        <button data-set="light" aria-pressed={theme === "light"} onClick={() => pick("light")}>light</button>
        <button data-set="dark" aria-pressed={theme === "dark"} onClick={() => pick("dark")}>dark</button>
      </span>
    </nav>
  );
}
