# 08 — Troubleshooting

## Site shows 404 at the root URL

**Causes:**
- GitHub Pages source is not set to "GitHub Actions".
- The workflow failed.
- Repo name is not exactly `<username>.github.io`.

**Fix:** Check Settings → Pages → Source = GitHub Actions. Check the Actions tab for errors.

## CSS/UI not loading (plain HTML, no styles)

**Cause:** Wrong `base` or prefixed asset paths.

**Fix:** `astro.config.mjs` should have no `base` for this user site. Asset links must be `/style.css`, not `/animezenith/style.css`.

## Internal links 404 (e.g., /animezenith/news/)

**Cause:** Link prefix left over from an earlier project-site setup.

**Fix:** Remove `/animezenith/` and `/Animeupdates/` prefixes from all `href` and `src` values in `src/`.

## Build fails: "Node.js 20 is deprecated"

**Cause:** `deploy.yml` uses Node 20; Astro needs newer.

**Fix:** Set `node-version: 22` in `.github/workflows/deploy.yml`.

## Permission denied (403) when pushing

**Cause:** Windows Git Credential Manager has an old account cached.

**Fix:**
```sh
cmdkey /delete:git:https://github.com
```
Then push again and log in with the correct account.

## "Repository not found" when pushing

**Cause:** Remote URL points to a repo that does not exist or you don't have access.

**Fix:** Create the repo on GitHub first, then update the remote:
```sh
 git remote set-url origin https://github.com/<user>/<repo>.git
```

## Build works locally but not on GitHub

**Cause:** Version mismatch or missing lockfile commit.

**Fix:** Commit `package-lock.json`. Ensure the workflow uses `package-manager: npm@latest`.

## Changes not showing on live site

**Causes:**
- Push didn't reach `main`.
- Workflow still running.
- Browser cache.

**Fix:** Check Actions tab, wait for green tick, then hard-refresh (`Ctrl+Shift+R`).
