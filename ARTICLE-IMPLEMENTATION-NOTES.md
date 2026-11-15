# AnimeZenith article rewrite – implementation notes

This update preserves the five original article slugs and their `/article/<slug>/` URL paths. It keeps the existing Astro project, GitHub Pages site configuration, light theme, images and navigation.

## Files replaced
- `src/data/posts.js` – all five article rewrites, structured H2 sections, spoiler labels, official further-reading links, and a reading-time helper.
- `src/pages/article/[slug].astro` – semantic section rendering, accessible breadcrumb, spoiler notice, Demon Slayer comparison table, visible sources, absolute image URL in BlogPosting JSON-LD, and related content.
- `src/layouts/BaseLayout.astro` – removed the site-wide Frieren image preload; article pages now preload their own hero image.
- `src/components/ArticleCard.astro` – calculates read time from the rewritten content and uses a more descriptive image alt.

## Editorial notes
- Jujutsu Kaisen Shibuya Incident is now categorized as `Guides`, because the article is an evergreen explanatory guide rather than a current news report.
- Eren Yeager article carries a major-spoiler notice. The Shibuya article also carries a major-spoiler notice.
- The article text is editorial analysis. The listed official pages are linked as sources for basic series, staff, story and character information; they do not independently validate subjective review opinions.
- No fabricated reviewer identity, credentials, numerical ratings or audience statistics were added.
- `datePublished` values and existing URL slugs were retained. `modifiedDate` is set to 2026-11-15 for the rewritten articles.

## Build note
The source JavaScript syntax was checked. A full Astro production build could not be completed in this environment: dependency installation timed out, and the available Node.js runtime (22.16.0) is below the Astro 7.4.12 engine requirement (Node >=22.23.4). Use a compatible Node release before running `npm ci` and `npm run build` locally or in GitHub Actions.
