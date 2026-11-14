# 04 — Deployment Guide

## How deployment works

The site is deployed using **GitHub Actions** → **GitHub Pages**.

1. You push code to the `main` branch.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The workflow installs dependencies and runs `npm run build`.
4. Astro generates static files into `dist/`.
5. The workflow uploads `dist/` as a Pages artifact and deploys it.

## The workflow file

Located at `.github/workflows/deploy.yml`. Key parts:

- **Trigger:** push to `main` or manual dispatch.
- **Permissions:** `pages: write`, `id-token: write`, `contents: read`.
- **Build job:** uses `withastro/action@v3` with Node 22.
- **Deploy job:** uses `actions/deploy-pages@v4`.

## One-time GitHub setup

1. Go to repo **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Save.

Without this, GitHub Pages will try to use Jekyll and fail.

## Manual deployment

Just push to `main`:

```sh
git add .
git commit -m "Your message"
git push origin main
```

Then watch the **Actions** tab on GitHub.

## Local build

```sh
npm install
npm run build      # creates dist/
npm run preview    # preview the built site
```

## Local development

```sh
npm run dev        # starts dev server at localhost:4321
```

## Repo naming rule (important)

The repo is named `AnimeZenith.github.io` because it is a **user site**. For user sites:
- The repo name must be exactly `<username>.github.io`.
- The site is served at `https://<username>.github.io/` (root path).
- No `base` path should be set in `astro.config.mjs`.

## Custom domain (optional)

To use a custom domain:
1. Buy a domain.
2. In **Settings → Pages → Custom domain**, enter it.
3. Add DNS A records to GitHub's IPs and a CNAME for `www`.
4. Enable **Enforce HTTPS** after DNS propagates.
