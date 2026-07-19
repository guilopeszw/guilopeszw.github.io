import { Link } from "react-router-dom";
import { posts, fmtDate } from "../lib/posts";
import { personal } from "../data";

export default function Blog() {
  return (
    <div className="wrap">
      <section className="pagetop">
        <p className="label">blog — {personal.blogTagline}</p>
        {posts.length === 0 ? (
          <p className="prose" style={{ color: "var(--muted)" }}>nothing here yet. soon.</p>
        ) : (
          <div className="posts">
            {posts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`}>
                <span className="ptitle">{p.title}</span>
                <span className="pdate">{fmtDate(p.date)}</span>
              </Link>
            ))}
          </div>
        )}
        <div style={{ marginTop: "40px" }}>
          <Link className="more" to="/">← back home</Link>
        </div>
      </section>
    </div>
  );
}
