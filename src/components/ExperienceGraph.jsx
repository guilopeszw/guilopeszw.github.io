import { useEffect, useRef, useState } from "react";
import { experience } from "../data";

// fixed node coordinates (0..100 space) forming an S-curve; s = which side the label sits on.
// trail is drawn oldest -> newest; `experience` is newest-first, so the last node is the current one.
const POS = [
  { x: 32, y: 10, s: "l" },
  { x: 68, y: 26, s: "r" },
  { x: 47, y: 42, s: "l" },
  { x: 34, y: 58, s: "l" },
  { x: 66, y: 74, s: "r" },
  { x: 42, y: 90, s: "l" },
];

// smooth catmull-rom spline through the points -> one S-shaped path.
// `upto` = how many segments to emit, so a partial trace stays on the same curve as the full rail.
function spline(pts, upto = pts.length - 1) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < upto; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
    const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
  }
  return d;
}

export default function ExperienceGraph() {
  const order = experience.slice(0, POS.length).reverse(); // oldest -> newest
  const graphRef = useRef(null);
  const cardRef = useRef(null);
  const nodeRefs = useRef([]);
  const hideT = useRef(null);
  // i = last hovered node; drives the trace even while the card is hidden. starts on the current role.
  const [card, setCard] = useState({ show: false, i: order.length - 1, left: 0, top: 0, above: false });

  const pts = order.map((_, i) => POS[i]);

  // trail draws itself the first time the graph scrolls into view (css animation keyed on .in);
  // .done after the draw so the staggered dot delays stop applying to hover
  const [phase, setPhase] = useState(""); // "" | "in" | "in done"
  useEffect(() => {
    let t;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      setPhase("in");
      t = setTimeout(() => setPhase("in done"), 2800);
    }, { threshold: 0.35 });
    io.observe(graphRef.current);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  const clearHide = () => { if (hideT.current) { clearTimeout(hideT.current); hideT.current = null; } };
  const scheduleHide = () => { clearHide(); hideT.current = setTimeout(() => setCard((c) => ({ ...c, show: false })), 130); };

  const show = (i) => {
    clearHide();
    const node = nodeRefs.current[i], g = graphRef.current;
    const cw = cardRef.current?.offsetWidth || 270;
    const below = POS[i].y < 50;
    const left = Math.max(0, Math.min(node.offsetLeft - cw / 2, g.clientWidth - cw));
    const top = below ? node.offsetTop + 28 : node.offsetTop - 28;
    setCard({ show: true, i, left, top, above: !below });
  };

  const cur = order[card.i];

  return (
    <div className={`scroll ${phase}`}>
      <div className="graph" ref={graphRef}>
        <svg className="lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path className="rail" d={spline(pts)} />
          <path className="trace" d={spline(pts, card.i)} />
        </svg>

        <div
          ref={cardRef}
          className={`gcard${card.above ? " above" : ""}${card.show ? " show" : ""}`}
          style={{ left: card.left, top: card.top }}
          onMouseEnter={clearHide}
          onMouseLeave={scheduleHide}
        >
          <p className="org">
            {cur.org}
            {cur.url && (
              <a className="glink" href={cur.url} target="_blank" rel="noopener">
                {new URL(cur.url).hostname.replace(/^www\./, "")} ↗
              </a>
            )}
          </p>
          <p className="meta">{cur.role} <span className="d">·</span> {cur.when}{cur.where ? ` · ${cur.where}` : ""}</p>
          <p className="desc">{cur.desc}</p>
        </div>

        {order.map((x, i) => (
          <button
            key={x.org}
            ref={(el) => (nodeRefs.current[i] = el)}
            className={`node ${POS[i].s}${i <= card.i ? " on" : ""}${card.show && card.i === i ? " active" : ""}`}
            style={{ left: `${POS[i].x}%`, top: `${POS[i].y}%`, "--t": POS[i].y / 100 }}
            aria-label={x.org}
            onMouseEnter={() => show(i)}
            onMouseLeave={scheduleHide}
            onFocus={() => show(i)}
            onClick={() => show(i)}
          >
            <span className="cap">{x.org}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
