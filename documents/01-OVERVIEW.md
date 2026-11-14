# 01 — Project Overview

## What is AnimeZenith?

AnimeZenith is a fully static anime blog website. It publishes articles about anime news, reviews, guides, manga, and character analysis.

## What it does

- Displays a home page with a hero section, category tiles, and latest articles.
- Lists articles by category: News, Reviews, Guides, Manga, Characters.
- Shows individual article pages with title, date, author, read time, and body content.
- Provides a search page, an RSS feed, and a sitemap for SEO.

## Tech Stack

| Tech | Purpose |
|------|---------|
| Astro v7 | Static site generator |
| @astrojs/sitemap | Generates sitemap.xml |
| @astrojs/rss | Generates rss.xml |
| GitHub Actions | Automatic build & deploy |
| GitHub Pages | Hosting |

## How content flows

1. All content lives in `src/data/posts.js`.
2. Astro reads that file at build time.
3. Every post becomes its own static HTML page.
4. GitHub Actions builds the site and pushes it to GitHub Pages.

## Key characteristics

- **Fast:** Static HTML pages load instantly.
- **SEO-friendly:** Each page has unique title, description, OG tags, and JSON-LD schema.
- **No backend:** There is no database or server. Everything is pre-built.
- **Free hosting:** GitHub Pages is free for public repos.
