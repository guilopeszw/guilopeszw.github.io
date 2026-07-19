// blog posts live as markdown files in src/posts/*.md, each with a tiny frontmatter block:
//
//   ---
//   title: my post title
//   date: 2026-07-19
//   ---
//   ...markdown body...
//
// vite inlines them at build time, so publishing is just: commit a new .md file.

const files = import.meta.glob("../posts/*.md", { query: "?raw", import: "default", eager: true });

// minimal frontmatter parser — no dependency needed for `key: value` lines.
function parse(raw) {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { meta, body: match[2] };
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop().replace(/\.md$/, "");
    const { meta, body } = parse(raw);
    return { slug, title: meta.title || slug, date: meta.date || "", body };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first

export const getPost = (slug) => posts.find((p) => p.slug === slug);

// 2026-07-11 -> 2026.07.11 to match the mono date style
export const fmtDate = (d) => (d || "").replaceAll("-", ".");
