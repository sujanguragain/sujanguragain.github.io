# Sujan Guragain · Portfolio & Engineering Journal

A responsive, dependency-free portfolio with project pages, a searchable journal, a browser-based Markdown editor and a GitHub Pages publishing workflow.

## What is included

- Home, Work, Journal, About, printable résumé, Privacy, Writing Studio and a 404 page.
- Four project write-ups and three initial journal entries, drafted from the supplied portfolio and updated professional profile.
- Updated professional portrait, hosted locally as an optimized WebP image.
- Category filtering, title, summary and tag search, article contents navigation, local draft saving, Markdown import/export and existing-article editing.
- Per-page metadata, canonical URLs, structured data, sitemap and RSS feed.
- Responsive layouts, keyboard navigation, visible focus states and reduced-motion support.

## Important content notes

The initial journal entries were prepared for this redesign and are dated 31 October 2026. They do not represent previously published posts. Set `draft: true` for any entry you want to withhold from the journal. Current professional content is based on the uploaded website and the October 2026 CV. The MSc is shown as in progress. AWS and Red Hat training are not presented as certifications. Client-specific addresses and configurations are excluded.

## Run locally

Requires Node.js 20 or newer. There are no npm dependencies to install.

```bash
node scripts/build.mjs
node scripts/check.mjs
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. Directly opening files with `file://` is not supported because navigation uses root-relative paths and the editor loads an article index.

## Live publishing

This repository builds and deploys the portfolio automatically after each push to `main`. The workflow builds `dist/`, validates pages and content, then publishes the generated artifact to the existing GitHub Pages site. No credentials or third-party hosting account are required.

The custom domain remains `sujanguragain.com.np`. Existing domain and HTTPS settings are preserved. When Pages still uses a source branch, the workflow waits for GitHub’s built-in publisher to finish before deploying the new artifact, preventing an older root page from overwriting the generated site. If you later choose **Settings → Pages → Source → GitHub Actions**, that compatibility wait is skipped.

The original website is preserved in branch `backup/pre-redesign-2026-10-31`. To review it, open that branch on GitHub. Rollbacks should use a normal revert commit on `main` so history remains intact.

Official publishing reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Add a blog post without writing HTML

1. Open `/studio/` on the running site.
2. Enter a title, publication date, category, summary, tags and the article body.
3. The preview updates as you write. Drafts save in this browser; export important work to keep a separate copy.
4. Choose **Ready to publish** when finished, then **Export Markdown**.
5. Upload the resulting `.md` file to `content/posts/` in GitHub and commit.
6. After the workflow succeeds, the article appears in the journal, homepage, feed and sitemap.

A Draft export contains `draft: true` and will not be published. Dates are labels, not a publication schedule: a future date alone does not hide a post. Keep `draft: true` until you want to publish.

The Writing Studio is a local authoring utility, not an authenticated CMS. It cannot upload to GitHub, change the live site, or share drafts across devices. GitHub controls who can commit and publish. The studio contains no credentials and is excluded from the sitemap and search indexing.

## Edit a post

Choose it in the studio's **existing article** list and select **Load article**, or import a Markdown file. Export with the same slug and replace the same file in `content/posts/`. A slug is the article URL, so keep it stable after publication.

## Markdown format

Metadata is written between `---` lines. String values should be double-quoted. Lists use JSON array syntax. See `templates/new-post.md`.

Supported body syntax: paragraphs, `##` / `###` / `####` headings, **bold**, *italic*, inline code, links, numbered and unordered lists, block quotes and triple-backtick code fences. Raw HTML is escaped. Nested lists, tables and embedded media are not supported by this small renderer.

## Update projects and your profile

- `content/profile.json`: name, contact links, introduction, roles, certifications, education and skills.
- `content/projects.json`: project summaries, category, tags, contribution and outcome.
- `content/posts/*.md`: articles.
- `assets/portrait.webp`: profile photograph.
- `assets/styles.css`: visual design and responsive layout.
- `scripts/build.mjs`: templates and the static site generator.

Use one existing project object as a starting point for a new project; use a unique lowercase slug. Choose `security`, `ai`, `monitoring` or `delivery` for its artwork. Set `featured` to true for homepage inclusion.

## Hosting and canonical URLs

`site.config.json` stores the default site origin. The GitHub Actions workflow overrides this with `SITE_URL=https://sujanguragain.com.np`, so canonical URLs, structured data, RSS and the sitemap use your actual domain after deployment. For another root-domain host, pass that origin with `SITE_URL` when building. This project targets a root domain/user GitHub Pages site, not a subdirectory project site.

## Validation

`node scripts/check.mjs` checks generated local links and anchors, one h1 per page, image alt attributes, duplicate IDs, metadata, draft exclusion, optimized portrait size and safe Markdown handling. Browser visual QA was unavailable in the creation environment. Structural checks and live deployment checks are recorded separately.
