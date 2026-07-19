import { useEffect, useRef } from "react";
import { personal, socials } from "../data";

// types "guilherme" / "lopes" out, retyping every 5s while the hero is on screen.
function useTypewriter(ref) {
  useEffect(() => {
    const nm = ref.current;
    if (!nm) return;
    const seq = [];
    ["guilherme", "lopes"].forEach((line, i) => {
      if (i) seq.push("<br>");
      line.split("").forEach((c) => seq.push(c));
    });
    const full = seq.join("");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { nm.innerHTML = full; return; }

    let typeT, loopT, running = false;
    const type = () => {
      clearTimeout(typeT);
      let i = 0, s = "";
      const step = () => {
        if (i >= seq.length) return;
        s += seq[i]; nm.innerHTML = s; i++;
        typeT = setTimeout(step, seq[i - 1] === "<br>" ? 170 : 82);
      };
      step();
    };
    const start = () => { if (running) return; running = true; type(); loopT = setInterval(type, 5000); };
    const stop = () => { running = false; clearInterval(loopT); clearTimeout(typeT); };
    const io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : stop())), { threshold: 0.25 });
    io.observe(nm.closest(".hero"));
    return () => { io.disconnect(); stop(); };
  }, [ref]);
}

export default function Hero() {
  const nmRef = useRef(null);
  useTypewriter(nmRef);

  return (
    <section className="hero">
      <p className="geo">{personal.geo}</p>
      <div className="headline">
        <h1><span className="nm" ref={nmRef}>guilherme<br />lopes</span><span className="caret" aria-hidden="true" /></h1>
        <span className="portrait"><span className="frame"><img src="/avatar.png" alt="guilherme lopes" /></span></span>
      </div>
      <p className="role">{personal.roleLines[0]}<br />{personal.roleLines[1]}</p>
      <div className="herolinks">
        <a href={`mailto:${socials.email}`}>email</a>
        <a href={socials.github} target="_blank" rel="noopener">github</a>
        <a href={socials.linkedin} target="_blank" rel="noopener">linkedin</a>
        <a href={socials.twitter} target="_blank" rel="noopener">twitter</a>
        <a href={socials.calendar} target="_blank" rel="noopener">book a call</a>
      </div>
      <button
        className="scrolldown"
        aria-label="scroll to about me"
        onClick={() => document.getElementById("about")?.scrollIntoView({ block: "start" })}
      >
        <span className="lbl">scroll</span>
        <span className="arw">↓</span>
      </button>
    </section>
  );
}
