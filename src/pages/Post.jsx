import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, fmtDate } from "../lib/posts";

export default function Post() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="wrap">
        <section className="pagetop">
          <p className="label">not found</p>
          <p className="prose" style={{ color: "var(--muted)" }}>that post doesn't exist.</p>
          <div style={{ marginTop: "24px" }}><Link className="more" to="/blog">← all posts</Link></div>
        </section>
      </div>
    );
  }

  return (
    <div className="wrap">
      <section className="pagetop">
        <article className="post">
          <Link className="back" to="/blog">← all posts</Link>
          <h1 className="ptitle">{post.title}</h1>
          <p className="pm">{fmtDate(post.date)}</p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </article>
      </section>
    </div>
  );
}
