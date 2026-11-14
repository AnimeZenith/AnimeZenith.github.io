# 03 — Content Guide

All content is stored in **one file**: `src/data/posts.js`.

## Categories

The `categories` array defines the site's sections:

```js
export const categories = [
  { name: 'News', slug: 'news', description: '...' },
  { name: 'Reviews', slug: 'reviews', description: '...' },
  { name: 'Guides', slug: 'guides', description: '...' },
  { name: 'Manga', slug: 'manga', description: '...' },
  { name: 'Characters', slug: 'characters', description: '...' }
];
```

- `slug` becomes the URL: `/category/news/`
- Adding a new category automatically adds it to the homepage tiles and footer.

## Posts

Each post is an object in the `posts` array:

```js
{
  slug: 'best-new-anime-to-watch',       // URL: /article/best-new-anime-to-watch/
  title: 'Best New Anime to Watch...',
  category: 'Guides',                     // must match a category name
  date: '2026-11-10',                     // YYYY-MM-DD
  author: 'AnimeZenith Editorial',
  readTime: '7 min read',
  excerpt: 'Short summary shown on cards.',
  tags: ['anime recommendations', 'beginner guide'],
  image: 'https://images.unsplash.com/...',
  body: [
    'Paragraph 1.',
    'Paragraph 2.'
  ]
}
```

## How to add a new post

1. Open `src/data/posts.js`.
2. Copy an existing post object.
3. Change `slug`, `title`, `category`, `date`, `excerpt`, `image`, and `body`.
4. Save the file.
5. Run `npm run dev` to preview, or push to git to deploy.

**Rules:**
- `slug` must be unique and URL-safe (lowercase, hyphens).
- `category` must exactly match one of the five category names.
- `body` is an array of paragraph strings — each string becomes a `<p>`.
- `date` should be `YYYY-MM-DD` format.
- Image URLs must be publicly accessible.

## How to edit an existing post

Find the post object by its `slug`, edit any field, and save.

## How to delete a post

Remove the entire post object from the `posts` array.
