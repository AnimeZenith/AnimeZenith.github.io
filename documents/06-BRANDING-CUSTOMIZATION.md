# 06 — Branding & Customization

## Changing the site name

The name **AnimeZenith** appears in several places. To rename the site:

1. **`src/components/Header.astro`** — brand link text.
2. **`src/components/Footer.astro`** — footer brand text.
3. **`src/layouts/BaseLayout.astro`** — default `title`, `description`, `og:site_name`, and JSON-LD `Organization` name.
4. **`src/data/posts.js`** — `author` fields (e.g., "AnimeZenith Editorial").
5. **`public/robots.txt`** — any site name mentions.
6. **`public/favicon.svg`** — logo letters if present.
7. **`package.json`** — `name` field.

A global find-and-replace across `src/` and `public/` is the fastest way.

## Changing colors

Global styles live in **`src/styles/global.css`**.

- Search for `#7044dc` (the purple theme color) and replace it.
- Theme color is also set in `BaseLayout.astro` (`<meta name="theme-color" content="#7044dc">`).

## Changing the favicon

Replace `public/favicon.svg` and `public/favicon.ico` with your own files (keep the same names).

## Changing fonts

Fonts are defined in `src/styles/global.css` via `font-family`. Update those rules.

## Changing the hero section

The hero text is in **`src/pages/index.astro`** inside the `<section class="hero">` block.

## Adding a new navigation link

Edit **`src/components/Header.astro`** and add an `<a>` inside the nav. Then add a matching footer link in **`src/components/Footer.astro`** if desired.

## Important note about links

Because this is a **root-served user site**, all internal links must start with `/` (e.g., `href="/news/"`). Never add a base prefix like `/animezenith/` — that will cause 404 errors.
