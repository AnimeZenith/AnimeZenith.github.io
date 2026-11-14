# 07 — Links & Base Path (Important)

This document explains the most common source of 404 errors on this site.

## The rule

Because this project is deployed as a **user site** at `https://animezenith.github.io/`, the site is served from the **root path (`/`)**.

Therefore:
- **All internal links must start with a single `/`.**
- **`astro.config.mjs` must NOT contain a `base` property.**

## Correct examples

```html
<a href="/">Home</a>
<a href="/news/">News</a>
<a href="/article/best-new-anime-to-watch/">Article</a>
```

## Wrong examples (cause 404)

```html
<a href="/animezenith/">Home</a>
<a href="/Animeupdates/">Home</a>
<a href="/animezenith/news/">News</a>
<a href="/animezenith/animezenith/">News</a>
```

## Dynamic links

When building links in loops, prefix with `/` only:

```jsx
<a href={'/category/' + category.slug + '/'}>{category.name}</a>
```

Not:

```jsx
<a href={'/animezenith/category/' + category.slug + '/'}>...</a>
```

## Static assets

Files in `public/` are served at root:
- `/favicon.svg` ✅
- `/robots.txt` ✅
- `/animezenith/favicon.svg` ❌

## If you ever move to a project site

If you ever deploy to a **project site** (e.g., `https://username.github.io/repo-name/`), you MUST:

1. Set `base: '/repo-name'` in `astro.config.mjs`.
2. Prefix every internal link with that base.

But for this user site, do **not** use `base`.

## How to fix a wrong prefix

Search the `src/` folder for `/animezenith/` or `/Animeupdates/` and remove that prefix from every `href` and `src`.
