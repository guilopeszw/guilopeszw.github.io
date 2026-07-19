# how to post on the blog

your blog is just **markdown files in this repo**. no cms, no database, no login.
to publish, you commit a `.md` file — a github action rebuilds and deploys the
site automatically (~1 min). you can do the whole thing from github.com on your
phone or laptop.

---

## write a new post (github website, no local setup)

1. go to your repo on github.com → open the **`src/posts/`** folder
2. click **add file → create new file**
3. name it with a url-friendly slug ending in `.md`, e.g. `my-first-thought.md`
   (this becomes the url: `guilopeszw.github.io/blog/my-first-thought`)
4. paste this at the top, then write below it:

   ```markdown
   ---
   title: my first thought
   date: 2026-07-19
   ---

   write whatever you want here, in plain markdown.

   ## a heading

   - a list
   - another item

   > a quote

   normal paragraphs, **bold**, *italic*, `code`, and [links](https://example.com) all work.
   ```

5. scroll down, click **commit changes**
6. wait ~1 minute — the post is live and shows up in the blog list automatically
   (posts are sorted newest-first by their `date`)

that's it. the two lines between the `---` markers are the only required part:
`title` and `date` (use `YYYY-MM-DD`).

writing locally instead? same thing — drop a `.md` file in `src/posts/`,
`git commit`, `git push`.

---

## adding images  ← the important part

markdown images look like: `![some alt text](IMAGE_URL)`. you have two easy ways
to get an `IMAGE_URL`, both free:

### option a — drag-drop via a github issue (fastest, nothing stored in the repo)

1. on github.com, open **issues → new issue** (you do **not** have to submit it)
2. **drag your image into the comment box** — github uploads it and drops in a
   line like `![](https://github.com/user-attachments/assets/abc123...)`
3. copy that whole `![](...)` line
4. paste it into your post where you want the image
5. close/discard the issue — the image url keeps working forever

### option b — commit the image into the repo

1. put the image file in the **`public/blog/`** folder (add file → upload files
   on github.com, or drop it there locally)
2. reference it in your post with a leading slash:

   ```markdown
   ![waveform](/blog/waveform.png)
   ```

use option **a** for quick one-off images, option **b** if you want the images
version-controlled alongside the site.

---

## deleting or editing a post

- **edit:** open the `.md` file on github, click the pencil, change it, commit.
- **delete:** open the `.md` file, click the trash icon, commit. (there's a
  sample post `src/posts/on-sub-5ms-latency.md` — delete it whenever.)

---

## one-time setup (do this once)

for the auto-deploy to work, tell github pages to build from the action:

**repo → settings → pages → build and deployment → source → "github actions"**

after that, every push to `main` rebuilds and deploys the whole site.
