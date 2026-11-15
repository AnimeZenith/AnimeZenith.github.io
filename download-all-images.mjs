import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const covers = [
  { slug: 'frieren', id: 154587 },
  { slug: 'jujutsu-kaisen', id: 113415 },
  { slug: 'demon-slayer', id: 101922 },
  { slug: 'solo-leveling', id: 151807 },
  { slug: 'attack-on-titan', id: 16498 }
];

const chars = [
  'Frieren', 'Fern', 'Stark', 'Himmel', 'Aura', 'Serie',
  'Satoru Gojo', 'Yuji Itadori', 'Megumi Fushiguro', 'Nobara Kugisaki', 'Ryomen Sukuna', 'Kento Nanami', 'Toji Fushiguro', 'Maki Zenin', 'Yuta Okkotsu', 'Choso',
  'Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Giyu Tomioka', 'Kyojuro Rengoku', 'Muzan Kibutsuji', 'Akaza', 'Shinobu Kocho', 'Mitsuri Kanroji',
  'Eren Yeager', 'Levi Ackerman', 'Mikasa Ackerman', 'Armin Arlert', 'Erwin Smith', 'Reiner Braun', 'Annie Leonhart', 'Hange Zoe', 'Jean Kirstein',
  'Sung Jinwoo', 'Cha Hae-In', 'Yoo Jinho', 'Igris', 'Choi Jong-In'
];

const slugMap = {
  'Frieren': 'frieren', 'Fern': 'fern', 'Stark': 'stark', 'Himmel': 'himmel', 'Aura': 'aura', 'Serie': 'serie',
  'Satoru Gojo': 'gojo', 'Yuji Itadori': 'yuji', 'Megumi Fushiguro': 'megumi', 'Nobara Kugisaki': 'nobara', 'Ryomen Sukuna': 'sukuna', 'Kento Nanami': 'nanami', 'Toji Fushiguro': 'toji', 'Maki Zenin': 'maki', 'Yuta Okkotsu': 'yuta', 'Choso': 'choso',
  'Tanjiro Kamado': 'tanjiro', 'Nezuko Kamado': 'nezuko', 'Zenitsu Agatsuma': 'zenitsu', 'Inosuke Hashibira': 'inosuke', 'Giyu Tomioka': 'giyu', 'Kyojuro Rengoku': 'rengoku', 'Muzan Kibutsuji': 'muzan', 'Akaza': 'akaza', 'Shinobu Kocho': 'shinobu', 'Mitsuri Kanroji': 'mitsuri',
  'Eren Yeager': 'eren', 'Levi Ackerman': 'levi', 'Mikasa Ackerman': 'mikasa', 'Armin Arlert': 'armin', 'Erwin Smith': 'erwin', 'Reiner Braun': 'reiner', 'Annie Leonhart': 'annie', 'Hange Zoe': 'hange', 'Jean Kirstein': 'jean',
  'Sung Jinwoo': 'jinwoo', 'Cha Hae-In': 'chahaein', 'Yoo Jinho': 'jinho', 'Igris': 'igris', 'Choi Jong-In': 'choijongin'
};

const query = `
query ($search: String) {
  Character(search: $search) {
    image { large }
  }
}
`;

async function downloadImage(url, filename) {
  try {
    // Using wsrv.nl proxy which is very reliable
    const rawUrl = url.replace(/^https?:\/\//, '');
    const proxyUrl = 'https://wsrv.nl/?url=' + encodeURIComponent(rawUrl) + '&w=800&output=webp';
    const res = await fetch(proxyUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    
    if (res.ok) {
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(path.join(dir, filename), Buffer.from(buffer));
      console.log('✅ Downloaded: ' + filename);
    } else {
      console.log('❌ Failed: ' + filename + ' (Status ' + res.status + ')');
    }
  } catch(e) {
    console.error('❌ Error downloading ' + filename, e.message);
  }
}

async function run() {
  // 1. Download Covers
  for (const cover of covers) {
    // AniList cover URLs have a specific format
    const coverUrl = `https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/b${cover.id}-0.jpg`;
    await downloadImage(coverUrl, cover.slug + '-cover.webp');
    await new Promise(r => setTimeout(r, 800));
  }

  // 2. Download Characters
  for (const name of chars) {
    try {
      const res = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ query, variables: { search: name } })
      });
      const json = await res.json();
      
      if (json.data && json.data.Character && json.data.Character.image && json.data.Character.image.large) {
        const imgUrl = json.data.Character.image.large;
        const slug = slugMap[name] || name.toLowerCase().replace(/[^a-z0-9]/g, '');
        await downloadImage(imgUrl, 'char-' + slug + '.webp');
      } else {
        console.log('❌ Not found in AniList: ' + name);
      }
      await new Promise(r => setTimeout(r, 1200)); // Rate limit
    } catch (e) {
      console.error('❌ API Error for ' + name, e.message);
    }
  }
}

run();
