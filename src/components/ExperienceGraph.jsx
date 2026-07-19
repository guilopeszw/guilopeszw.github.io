import { useRef, useState } from "react";
import { experience } from "../data";

// fixed node coordinates (0..100 space) forming an S-curve; s = which side the label sits on.
// trail is drawn oldest -> newest, so we reverse `experience` (which is newest-first).
const POS = [
  { x: 26, y: 12, s: "l" },
  { x: 72, y: 31, s: "r" },
  { x: 46, y: 50, s: "l" },
  { x: 28, y: 69, s: "l" },
  { x: 74, y: 88, s: "r" },
];

// smooth catmull-rom spline through the points -> one S-shaped path
function spline(pts) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
    const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
  }
  return d;
}

export default function ExperienceGraph() {
  const order = [...experience].reverse().slice(0, POS.length); // oldest -> newest
  const graphRef = useRef(null);
  const cardRef = useRef(null);
  const nodeRefs = useRef([]);
  const hideT = useRef(null);
  const [card, setCard] = useState({ show: false, i: 0, left: 0, top: 0, above: false });

  const d = spline(order.map((_, i) => POS[i]));

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
    <div className="scroll">
      <div className="graph" ref={graphRef}>
        <svg className="lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d={d} />
        </svg>

        <div
          ref={cardRef}
          className={`gcard${card.above ? " above" : ""}${card.show ? " show" : ""}`}
          style={{ left: card.left, top: card.top }}
          onMouseEnter={clearHide}
          onMouseLeave={scheduleHide}
        >
          {cur && (
            <>
              <p className="org">{cur.org}</p>
              <p className="meta">{cur.role} <span className="d">·</span> {cur.when}{cur.where ? ` · ${cur.where}` : ""}</p>
              <p className="desc">{cur.desc}</p>
            </>
          )}
        </div>

        {order.map((x, i) => (
          <button
            key={x.org}
            ref={(el) => (nodeRefs.current[i] = el)}
            className={`node ${POS[i].s}${card.show && card.i === i ? " active" : ""}`}
            style={{ left: `${POS[i].x}%`, top: `${POS[i].y}%` }}
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
