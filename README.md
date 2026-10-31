# Sujan Guragain · Portfolio & Journal

Personal website at **https://sujanguragain.com.np**. A static portfolio with projects, a searchable journal, an About page and a printable résumé. Posts are managed directly in GitHub.

## Publish a journal entry

1. Open [`templates/new-post.md`](templates/new-post.md) and copy its contents.
2. In [`content/posts`](content/posts), choose **Add file → Create new file**. Give it a descriptive filename ending in `.md`.
3. Paste the template, update its metadata and write the article. Use a unique lowercase `slug` with words separated by hyphens. The slug becomes the article URL.
4. Keep `draft: true` while preparing the post. Change it to `false` when it is ready to appear publicly.
5. Commit to `main`. The **Build and publish portfolio** workflow validates and publishes the site. The journal, homepage, RSS feed and sitemap update automatically.

To edit an article, open its Markdown file, choose the pencil icon, make the changes and commit. Keep the slug unchanged to preserve the URL. An optional `updated` date records a revision in the article metadata.

Dates are publication labels, not scheduled publishing. A future date does not hide an article; use `draft: true` until it is ready. Draft files in this public repository remain readable on GitHub even though they are excluded from the website.

The website has no editing interface, account system or upload form. Only repository contributors can change and publish its content.

## Article format

The block between `---` lines is metadata. Use double quotes for strings, JSON arrays for tags and an unquoted `true` or `false` for `draft`.

Required: `title`, `slug`, `date`, `category`, `excerpt`, `tags`, `draft`.

Optional:

- `art`: `monitoring`, `security`, `delivery`, `database`, `logging`, `ai` or `cloud`.
- `order`: a number to order articles sharing the same date. Newer dates always appear first.
- `updated`: a revision date in `YYYY-MM-DD` format.
- `source`: a reference URL for editorial records. Include reader-facing attribution in the article body too.

Supported Markdown: paragraphs, `##` to `####` headings, **bold**, *italic*, inline code, links, numbered and unordered lists, block quotes and fenced code blocks. Raw HTML is escaped. Nested lists, tables and embedded media are not supported by this small renderer.

## Update the website

| File | Content |
| --- | --- |
| `content/profile.json` | Introduction, contact links, employment, education, résumé certifications and skills |
| `content/projects.json` | Project summaries, tools, contributions and operational notes |
| `content/posts/*.md` | Journal articles |
| `content/redirects.json` | Previous article URLs and their replacement pages |
| `assets/portrait.webp` | Profile photograph |
| `assets/mark.svg` and `assets/favicon.svg` | SG identity and browser icon |
| `assets/styles.css` | Layout, colours and responsive styles |
| `scripts/build.mjs` | Page templates and build logic |
| `scripts/artwork.mjs` | Decorative illustrations |

Each project needs a unique slug. Set `featured: true` to include it on the homepage. Certifications appear as plain text in the résumé only.

The ten initial notes cover monitoring, security review, automation, MySQL, Tomcat, ELK, private AI and three topics from Etech Insights. Prepared on 31 October 2026, these are technical notes, not historical incident reports or quantified case studies. Articles include source links. The MSc remains listed as in progress.

## Check locally

Requires Node.js 20 or newer. No npm packages are required.

```bash
node scripts/build.mjs
node scripts/check.mjs
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. Navigation uses root-relative URLs, so serve `dist/` instead of opening HTML files directly. Each build replaces `dist/` to prevent removed pages or assets from being carried forward.

## Publishing and recovery

Every push to `main` builds and checks the site, then deploys `dist/` to GitHub Pages. The domain remains `sujanguragain.com.np`; no additional hosting account or credentials are required.

If GitHub’s built-in branch publisher also runs, the custom workflow waits for it to finish before deploying the generated site. If Pages is later switched to **Settings → Pages → Source → GitHub Actions**, the compatibility wait is skipped automatically.

The original website is preserved in `backup/pre-redesign-2026-10-31`. Restore an earlier version through a normal revert commit on `main` so publishing runs again and history is retained.

`site.config.json` holds the production origin. A `SITE_URL` environment variable overrides it for previews. The build emits canonical links, metadata, structured data, RSS, a sitemap, `robots.txt`, `.nojekyll` and `CNAME`.

Publishing documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
