import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import ExperienceGraph from "../components/ExperienceGraph";
import { about, education, projects, personal } from "../data";
import { posts, fmtDate } from "../lib/posts";

function Rows({ items }) {
  return (
    <div className="rows">
      {items.map((it) => (
        <div className="row-item" key={it.org}>
          <div className="top">
            <span className="k">{it.org} <em>· {it.role}</em></span>
            <span className="v">{it.when}{it.where ? ` · ${it.where}` : ""}</span>
          </div>
          {it.desc && <span className="rd">{it.desc}</span>}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="wrap">
      <Hero />

      <section id="about">
        <p className="label">about me</p>
        <div className="prose">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="work">
        <p className="label">experience</p>
        <ExperienceGraph />
      </section>

      <section id="edu">
        <p className="label">education</p>
        <Rows items={education} />
      </section>

      <section id="projects">
        <p className="label">projects</p>
        <div className="proj">
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener">
              <span className="pt">
                <span className="pname">{p.name}</span>
                <span className="plink">github ↗</span>
              </span>
              <span className="pd">{p.desc}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="writing">
        <p className="label">blog — {personal.blogTagline}</p>
        <div className="posts">
          {posts.slice(0, 4).map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`}>
              <span className="ptitle">{p.title}</span>
              <span className="pdate">{fmtDate(p.date)}</span>
            </Link>
          ))}
        </div>
        {posts.length > 4 && <Link className="more" to="/blog">all posts →</Link>}
      </section>

      <Contact />
    </div>
  );
}
