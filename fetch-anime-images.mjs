import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const animeIds = {
  frieren: 52991,
  jjk: 40748,
  demon: 38000,
  solo: 52299,
  aot: 16498
};

const charMap = {
  'Frieren': 'frieren', 'Fern': 'fern', 'Stark': 'stark', 'Himmel': 'himmel',
  'Satoru Gojo': 'gojo', 'Yuji Itadori': 'yuji', 'Megumi Fushiguro': 'megumi', 'Nobara Kugisaki': 'nobara', 'Ryomen Sukuna': 'sukuna', 'Kento Nanami': 'nanami',
  'Tanjiro Kamado': 'tanjiro', 'Nezuko Kamado': 'nezuko', 'Zenitsu Agatsuma': 'zenitsu', 'Inosuke Hashibira': 'inosuke', 'Giyu Tomioka': 'giyu', 'Kyojuro Rengoku': 'rengoku',
  'Sung Jinwoo': 'jinwoo', 'Cha Hae-In': 'chahaein', 'Yoo Jinho': 'jinho', 'Igris': 'igris',
  'Eren Yeager': 'eren', 'Levi Ackerman': 'levi', 'Mikasa Ackerman': 'mikasa', 'Armin Arlert': 'armin', 'Erwin Smith': 'erwin', 'Reiner Braun': 'reiner'
};

async function fetchChars() {
  for (const [key, id] of Object.entries(animeIds)) {
    try {
      console.log(`Fetching characters for anime ${id}...`);
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
      const json = await res.json();
      if (!json.data) continue;

      for (const char of json.data) {
        const name = char.character.name;
        if (charMap[name]) {
          const idSlug = charMap[name];
          const imgUrl = char.character.images.jpg.image_url;
          const proxiedUrl = `https://images.weserv.nl/?url=${encodeURIComponent(imgUrl)}&w=600&output=webp`;
          
          console.log(`Downloading image for ${name}...`);
          const imgRes = await fetch(proxiedUrl);
          if (imgRes.ok) {
            const buffer = await imgRes.arrayBuffer();
            fs.writeFileSync(path.join(dir, `char-${idSlug}.webp`), Buffer.from(buffer));
            console.log(`Saved char-${idSlug}.webp`);
          } else {
            console.log(`Failed to download ${name}`);
          }
        }
      }
      await new Promise(r => setTimeout(r, 1000)); // Wait 1s between anime
    } catch (e) {
      console.error(e);
    }
  }
}

fetchChars();
