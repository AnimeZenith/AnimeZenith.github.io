# 09 — FAQ

## Q: Where does the content come from?
A: All content is hardcoded in `src/data/posts.js`. There is no CMS.

## Q: Do I need a database?
A: No. The site is fully static.

## Q: How do I add a new article?
A: Add a new object to the `posts` array in `src/data/posts.js`, then push to `main`.

## Q: How long does deployment take?
A: Usually 1–2 minutes after a push.

## Q: Is hosting free?
A: Yes. GitHub Pages is free for public repositories.

## Q: Can I use my own domain?
A: Yes. Buy a domain, add it in Settings → Pages → Custom domain, configure DNS, and enable HTTPS.

## Q: Why does /animezenith/news/ 404?
A: Because this is a root-served user site. Links must be `/news/`, not `/animezenith/news/`.

## Q: Why is my CSS not loading?
A: Usually a wrong `base` value or leftover link prefixes. Remove `base` from `astro.config.mjs` and fix links.

## Q: How do I change the site name?
A: Find-and-replace the name across `src/`, `public/`, and `package.json`. See [Branding & Customization](./06-BRANDING-CUSTOMIZATION.md).

## Q: Where is the sitemap?
A: `https://animezenith.github.io/sitemap-index.xml` after a successful deploy.

## Q: How do I preview locally?
A: Run `npm run dev` (dev server) or `npm run build && npm run preview` (production build).

## Q: Can I edit content without touching code?
A: Not currently. You must edit `posts.js`.

## Q: What if GitHub Actions fails?
A: Check the **Actions** tab → click the failed run → read the error log. See [Troubleshooting](./08-TROUBLESHOOTING.md).
