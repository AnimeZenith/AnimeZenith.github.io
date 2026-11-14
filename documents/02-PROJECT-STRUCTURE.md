# 02 — Project Structure

## Top-level files

| File/Folder | Purpose |
|-------------|---------|
| `astro.config.mjs` | Astro config (site URL, sitemap, static output, build format) |
| `package.json` | Project name, scripts, and dependencies |
| `package-lock.json` | Exact dependency versions |
| `tsconfig.json` | TypeScript config for Astro |
| `.gitignore` | Excludes `node_modules/`, `dist/`, `.astro/`, `.env` from git |
| `.github/workflows/deploy.yml` | GitHub Actions workflow for Pages deployment |
| `public/` | Static files served at root: `favicon.ico`, `favicon.svg`, `robots.txt` |
| `src/` | All source code |
| `dist/` | Generated build output (not in git) |
| `documents/` | This documentation folder |

## src/ folder

### `src/components/`
Reusable UI pieces:
- `Header.astro` — top navigation bar and brand
- `Footer.astro` — footer links
- `ArticleCard.astro` — card preview for article lists
- `ListingPage.astro` — layout for category/section pages

### `src/layouts/`
- `BaseLayout.astro` — global HTML wrapper with SEO meta, OG tags, JSON-LD schema

### `src/data/`
- `posts.js` — **all content lives here**: `categories` array and `posts` array

### `src/pages/`
Each file becomes a URL route:

| File | URL |
|------|-----|
| `index.astro` | `/` |
| `about.astro` | `/about/` |
| `contact.astro` | `/contact/` |
| `privacy-policy.astro` | `/privacy-policy/` |
| `disclaimer.astro` | `/disclaimer/` |
| `404.astro` | `/404.html` |
| `search.astro` | `/search/` |
| `rss.xml.js` | `/rss.xml` |
| `article/[slug].astro` | `/article/<slug>/` |
| `category/[category].astro` | `/category/<category>/` |
| `news/index.astro` | `/news/` |
| `reviews/index.astro` | `/reviews/` |
| `guides/index.astro` | `/guides/` |
| `manga/index.astro` | `/manga/` |
| `characters/index.astro` | `/characters/` |

### `src/styles/`
- `global.css` — global site styles
