import fs from 'node:fs';
import path from 'node:path';

const targets = ['src', 'public', 'astro.config.mjs', 'setup.mjs'];

function update(file) {
  if (!fs.existsSync(file)) return;

  const stat = fs.statSync(file);

  if (stat.isDirectory()) {
    for (const name of fs.readdirSync(file)) {
      update(path.join(file, name));
    }
    return;
  }

  if (!/\.(astro|js|mjs|css|txt|svg)$/.test(file)) return;

  let content = fs.readFileSync(file, 'utf8');

  content = content
    .replaceAll('AnimeVerse', 'AnimeUpdates')
    .replaceAll('Anime Updates', 'AnimeUpdates')
    .replaceAll('animeverse-blog.pages.dev', 'animeupdates.pages.dev')
    .replaceAll('anime-updates.pages.dev', 'animeupdates.pages.dev');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated: ' + file);
}

for (const target of targets) update(target);

const packageFile = 'package.json';
if (fs.existsSync(packageFile)) {
  const pkg = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  pkg.name = 'animeupdates';
  fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2) + '\n');
}

console.log('\nAnimeUpdates branding applied.');