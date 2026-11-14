
import fs from 'node:fs';
import path from 'node:path';

const files = {
  'astro.config.mjs': `
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://animeupdates.pages.dev',
  integrations: [sitemap()],
  output: 'static',
  build: { format: 'directory' }
});
`,

  'package.json': `
{
  "name": "animeverse-blog",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/sitemap": "^3.7.0",
    "astro": "^7.4.12"
  }
}
`,

  'src/data/posts.js': `
export const categories = [
  { name: 'News', slug: 'news', description: 'The latest anime announcements, industry updates and releases.' },
  { name: 'Reviews', slug: 'reviews', description: 'Thoughtful anime reviews, ratings and recommendations.' },
  { name: 'Guides', slug: 'guides', description: 'Anime watch orders, explainers and beginner guides.' },
  { name: 'Manga', slug: 'manga', description: 'Manga news, chapters, recommendations and discussions.' },
  { name: 'Characters', slug: 'characters', description: 'Character profiles, backstories and analysis.' }
];

export const posts = [
  {
    slug: 'best-new-anime-to-watch',
    title: 'Best New Anime to Watch: A Guide for Every Anime Fan',
    category: 'Guides',
    date: '2026-11-10',
    author: 'AnimeUpdates Editorial',
    readTime: '7 min read',
    excerpt: 'Discover how to choose your next anime with recommendations across action, fantasy, romance and adventure.',
    tags: ['anime recommendations', 'beginner guide'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&auto=format&fit=crop&q=80',
    body: [
      'Finding your next anime can be difficult when there are so many excellent series to explore. The best choice depends on the genres, storytelling styles and characters you enjoy.',
      'Action and adventure fans can explore stories with memorable battles, imaginative worlds and strong character development. Fantasy anime often combines world-building with emotional journeys.',
      'If you prefer slower storytelling, slice-of-life and romance series can offer relatable characters and meaningful everyday moments.',
      'Before starting a long series, check its episode count and whether its story is complete. This makes it easier to choose something that fits your available time.',
      'AnimeUpdates recommends exploring different genres instead of limiting yourself to one category. You might discover an unexpected favourite.'
    ]
  },
  {
    slug: 'anime-industry-latest-updates',
    title: 'Anime Industry: Important Trends Fans Should Know',
    category: 'News',
    date: '2026-11-12',
    author: 'AnimeUpdates Editorial',
    readTime: '5 min read',
    excerpt: 'A look at the changing anime industry, streaming platforms and the trends shaping upcoming releases.',
    tags: ['anime news', 'industry'],
    image: 'https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=1000&auto=format&fit=crop&q=80',
    body: [
      'The anime industry continues to evolve as studios, publishers and streaming services reach audiences around the world.',
      'Global distribution has made it easier for viewers to discover series from different studios and genres.',
      'Production schedules, animation quality and international licensing remain important topics for fans.',
      'When following anime announcements, always distinguish confirmed information from speculation. Check official studio and publisher announcements for reliable details.'
    ]
  },
  {
    slug: 'how-to-start-watching-anime',
    title: 'How to Start Watching Anime: A Complete Beginner Guide',
    category: 'Guides',
    date: '2026-11-09',
    author: 'AnimeUpdates Editorial',
    readTime: '6 min read',
    excerpt: 'New to anime? Understand genres, episode formats, subtitles and how to find your first series.',
    tags: ['anime for beginners', 'anime guide'],
    image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=1000&auto=format&fit=crop&q=80',
    body: [
      'Anime is a broad form of Japanese animation with stories for different age groups and interests. There is no single genre that defines the entire medium.',
      'Start by choosing a genre you already enjoy. Adventure, comedy, mystery, sports, science fiction and drama are all good starting points.',
      'Subtitles preserve the original Japanese voice performances, while dubbed versions make watching easier for viewers who prefer their own language.',
      'Try a short series before committing to a long-running show. Read spoiler-free reviews and check age ratings before watching.',
      'Most importantly, watch at your own pace and explore the stories that interest you.'
    ]
  },
  {
    slug: 'anime-review-storytelling-animation',
    title: 'What Makes an Anime Series Worth Watching?',
    category: 'Reviews',
    date: '2026-11-08',
    author: 'AnimeUpdates Editorial',
    readTime: '5 min read',
    excerpt: 'Explore storytelling, animation, soundtracks and character development when evaluating anime.',
    tags: ['anime review', 'storytelling'],
    image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=1000&auto=format&fit=crop&q=80',
    body: [
      'A memorable anime is usually more than its animation quality. Strong storytelling gives viewers a reason to care about what happens next.',
      'Character development can make even familiar story ideas feel fresh. Look for believable motivations, meaningful decisions and relationships that change over time.',
      'Music and sound design also influence how a scene feels. A well-used soundtrack can make an emotional moment more effective.',
      'A fair review considers strengths and weaknesses without treating personal preferences as universal facts.'
    ]
  },
  {
    slug: 'manga-vs-anime-differences',
    title: 'Manga vs Anime: Understanding the Key Differences',
    category: 'Manga',
    date: '2026-11-07',
    author: 'AnimeUpdates Editorial',
    readTime: '6 min read',
    excerpt: 'Learn how manga storytelling differs from anime adaptations, pacing and visual presentation.',
    tags: ['manga', 'anime adaptation'],
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=1000&auto=format&fit=crop&q=80',
    body: [
      'Manga is a form of Japanese comics, while anime refers to animated productions. Many popular anime series are adaptations of manga.',
      'Manga allows readers to control the pace of a story and spend time studying individual panels and artwork.',
      'Anime adds movement, voice acting, music and sound design. These elements can create a different emotional experience.',
      'Adaptations sometimes change pacing or add original scenes. Comparing both versions can reveal interesting creative decisions.'
    ]
  },
  {
    slug: 'understanding-anime-character-development',
    title: 'Understanding Character Development in Anime',
    category: 'Characters',
    date: '2026-11-06',
    author: 'AnimeUpdates Editorial',
    readTime: '5 min read',
    excerpt: 'Why character motivations, relationships and personal growth matter in great anime stories.',
    tags: ['anime characters', 'character analysis'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&auto=format&fit=crop&q=80',
    body: [
      'Character development describes how a fictional person changes through the events of a story.',
      'A convincing character has motivations, strengths, weaknesses and relationships that influence their choices.',
      'Some characters grow gradually, while others reveal different sides of themselves through difficult decisions.',
      'Understanding these details can make an anime more rewarding to watch.'
    ]
  },
  {
    slug: 'anime-watch-order-explained',
    title: 'Anime Watch Orders Explained: Seasons, Movies and Specials',
    category: 'Guides',
    date: '2026-11-05',
    author: 'AnimeUpdates Editorial',
    readTime: '8 min read',
    excerpt: 'Understand release order, chronological order and how to approach anime movies and specials.',
    tags: ['watch order', 'anime guide'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1000&auto=format&fit=crop&q=80',
    body: [
      'Some anime franchises contain multiple seasons, films, specials and spin-offs. Choosing a watch order can initially seem confusing.',
      'Release order follows the dates when each entry became available. It often preserves the experience intended for original audiences.',
      'Chronological order follows the timeline of events within the fictional universe. It is not always the recommended first viewing order.',
      'Always check official franchise guidance and spoiler warnings before choosing an order.'
    ]
  },
  {
    slug: 'manga-beginner-reading-guide',
    title: 'A Beginner Guide to Reading Manga',
    category: 'Manga',
    date: '2026-11-04',
    author: 'AnimeUpdates Editorial',
    readTime: '4 min read',
    excerpt: 'Learn manga reading direction, volumes, chapters and how to choose your first manga.',
    tags: ['manga beginner', 'reading guide'],
    image: 'https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=1000&auto=format&fit=crop&q=80',
    body: [
      'Manga is commonly published in chapters and collected into volumes. Many traditional Japanese manga books are read from right to left.',
      'Different publishers may offer digital editions, collected volumes and special releases.',
      'Choose a genre that interests you and check the publisher information before purchasing or reading an edition.',
      'Supporting official releases helps creators and publishers continue producing the stories readers enjoy.'
    ]
  },
  {
    slug: 'anime-review-guide-for-readers',
    title: 'How Anime Reviews Evaluate a Series',
    category: 'Reviews',
    date: '2026-11-03',
    author: 'AnimeUpdates Editorial',
    readTime: '5 min read',
    excerpt: 'A practical look at animation, music, pacing and storytelling in anime reviews.',
    tags: ['anime reviews', 'evaluation'],
    image: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=1000&auto=format&fit=crop&q=80',
    body: [
      'A useful anime review explains what a series does well and where it may disappoint some viewers.',
      'Animation is one factor, but writing, direction, music and pacing also contribute to the overall experience.',
      'Reviews should explain their opinions with examples while avoiding major spoilers.',
      'Readers should consider their own interests when deciding whether a recommendation is right for them.'
    ]
  },
  {
    slug: 'why-anime-soundtracks-matter',
    title: 'Why Anime Soundtracks Matter So Much',
    category: 'Characters',
    date: '2026-11-02',
    author: 'AnimeUpdates Editorial',
    readTime: '4 min read',
    excerpt: 'Explore how musical themes and sound design support atmosphere and character moments.',
    tags: ['anime music', 'soundtrack'],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1000&auto=format&fit=crop&q=80',
    body: [
      'Music helps establish the mood of an anime scene and can make a fictional world feel more distinctive.',
      'Recurring musical themes may become associated with characters, locations or important story moments.',
      'Sound design also includes environmental effects, dialogue and silence. All of these elements contribute to atmosphere.',
      'A strong soundtrack supports the story rather than distracting from it.'
    ]
  }
];
`,

  'src/styles/global.css': `
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #211a32;
  background: #fff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --purple: #7044dc;
  --purple-dark: #4f2ca8;
  --purple-light: #f2edff;
  --muted: #777286;
  --border: #eeeaf5;
  --surface: #faf9fc;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; min-width: 320px; }
a { color: inherit; text-decoration: none; }
button, input { font: inherit; }
img { display: block; max-width: 100%; }
.container { width: min(1160px, calc(100% - 40px)); margin-inline: auto; }
.site-header { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,.94); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.header-inner { min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.brand { font-size: 25px; font-weight: 850; letter-spacing: -1.2px; color: #261a3f; }
.brand span { color: var(--purple); }
.nav { display: flex; align-items: center; gap: 23px; }
.nav a { font-size: 13px; font-weight: 650; color: #554d65; }
.nav a:hover, .text-link:hover { color: var(--purple); }
.search-link, .primary-button { background: var(--purple); color: white !important; padding: 11px 17px; border-radius: 10px; }
.hero { margin: 36px auto 55px; min-height: 390px; padding: 55px; border-radius: 25px; overflow: hidden; color: white; background: linear-gradient(100deg,rgba(30,17,57,.94),rgba(67,35,122,.72)),url('https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&auto=format&fit=crop&q=85') center/cover; display: flex; align-items: center; }
.hero-content { max-width: 650px; }
.eyebrow { display: inline-block; background: #eee7ff; color: var(--purple-dark); padding: 7px 11px; border-radius: 50px; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
.hero .eyebrow { background: rgba(255,255,255,.15); color: white; }
.hero h1 { font-size: clamp(38px,5vw,61px); letter-spacing: -2.5px; line-height: 1.08; margin: 20px 0 15px; }
.hero p { color: #e7def8; font-size: 16px; line-height: 1.8; max-width: 560px; }
.primary-button { display: inline-block; margin-top: 12px; font-weight: 750; }
.section { margin: 55px auto; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 15px; margin-bottom: 23px; }
.section-heading h2 { margin: 0; font-size: 28px; letter-spacing: -1px; }
.section-heading p { margin: 7px 0 0; color: var(--muted); font-size: 14px; }
.text-link { font-size: 13px; font-weight: 750; color: var(--purple); }
.article-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px; }
.article-card { border: 1px solid var(--border); border-radius: 17px; overflow: hidden; background: white; transition: transform .2s, box-shadow .2s; }
.article-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(55,35,90,.09); }
.article-card img { width: 100%; height: 205px; object-fit: cover; background: var(--purple-light); }
.card-body { padding: 19px; }
.card-category { font-size: 10px; color: var(--purple); font-weight: 850; text-transform: uppercase; letter-spacing: .9px; }
.article-card h3 { font-size: 19px; line-height: 1.4; margin: 10px 0; letter-spacing: -.35px; }
.article-card p { color: var(--muted); font-size: 13px; line-height: 1.7; margin: 0 0 15px; }
.card-meta { color: #918a9d; font-size: 11px; }
.category-strip { display: grid; grid-template-columns: repeat(5,1fr); gap: 13px; }
.category-tile { padding: 20px; border: 1px solid var(--border); background: var(--surface); border-radius: 14px; transition: .2s; }
.category-tile:hover { border-color: #c8b6f6; background: var(--purple-light); }
.category-tile strong { display: block; margin-bottom: 6px; }
.category-tile small { color: var(--muted); line-height: 1.5; }
.page-heading { padding: 60px 0 35px; background: var(--surface); border-bottom: 1px solid var(--border); }
.page-heading h1 { font-size: clamp(32px,4vw,45px); letter-spacing: -1.8px; margin: 12px 0; }
.page-heading p { color: var(--muted); max-width: 650px; line-height: 1.7; }
.article-layout { max-width: 790px; margin: 55px auto; }
.article-cover { width: 100%; max-height: 430px; object-fit: cover; border-radius: 18px; margin: 25px 0; }
.article-layout h1 { font-size: clamp(34px,5vw,48px); line-height: 1.15; letter-spacing: -1.8px; }
.article-content { font-size: 17px; line-height: 1.95; color: #51495f; }
.article-content p { margin: 22px 0; }
.article-meta { color: var(--muted); font-size: 13px; }
.breadcrumb { color: var(--muted); font-size: 12px; margin-bottom: 22px; }
.breadcrumb a { color: var(--purple); }
.prose { max-width: 800px; padding: 50px 0 80px; line-height: 1.85; color: #5d5669; }
.prose h1,.prose h2 { color: #251d35; letter-spacing: -.8px; }
.prose h1 { font-size: 40px; }
.site-footer { margin-top: 75px; background: #20172f; color: white; padding: 50px 0 25px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 45px; }
.site-footer p,.site-footer a { color: #c5bdd2; font-size: 13px; line-height: 1.9; }
.footer-links { display: grid; gap: 8px; }
.footer-bottom { border-top: 1px solid #423750; margin-top: 35px; padding-top: 20px; color: #aaa0b8; font-size: 12px; }
.search-box { display: block; width: 100%; padding: 17px; border: 1px solid #ded6eb; border-radius: 12px; outline: none; margin: 25px 0; }
.search-box:focus { border-color: var(--purple); box-shadow: 0 0 0 3px #7044dc19; }
.empty-state { padding: 35px; background: var(--surface); border-radius: 14px; color: var(--muted); text-align: center; }
@media(max-width:850px) {
 .nav { gap: 13px; flex-wrap: wrap; justify-content: flex-end; }
 .nav a { font-size: 11px; }
 .article-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
 .category-strip { grid-template-columns: repeat(3,1fr); }
 .hero { padding: 38px; }
}
@media(max-width:580px) {
 .container { width: min(100% - 28px,1160px); }
 .header-inner { min-height: 65px; align-items: flex-start; padding: 15px 0; flex-direction: column; gap: 12px; }
 .nav { width: 100%; justify-content: flex-start; gap: 14px; }
 .nav a { font-size: 11px; }
 .search-link { padding: 7px 10px; }
 .hero { min-height: 360px; padding: 27px; margin-top: 20px; border-radius: 18px; }
 .hero h1 { font-size: 39px; }
 .article-grid { grid-template-columns: 1fr; }
 .category-strip { grid-template-columns: repeat(2,1fr); }
 .section-heading h2 { font-size: 23px; }
 .footer-grid { grid-template-columns: 1fr; gap: 25px; }
 .article-layout { margin: 35px auto; }
 .article-content { font-size: 16px; }
}
`,

  'src/layouts/BaseLayout.astro': `
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

const {
  title = 'AnimeUpdates — Anime News, Reviews, Guides & Manga',
  description = 'Explore anime news, reviews, guides, manga and character features on AnimeUpdates.',
  image = 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200',
  type = 'website'
} = Astro.props;

const canonical = new URL(Astro.url.pathname, Astro.site || 'https://animeupdates.pages.dev').href;
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AnimeUpdates',
  url: 'https://animeupdates.pages.dev/',
  description: 'Anime news, reviews, guides and manga editorial website.'
};
---
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="generator" content={Astro.generator} />
  <meta name="description" content={description} />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href={canonical} />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="alternate" type="application/rss+xml" title="AnimeUpdates RSS" href="/rss.xml" />
  <meta property="og:type" content={type} />
  <meta property="og:site_name" content="AnimeUpdates" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="theme-color" content="#7044dc" />
  <title>{title}</title>
  <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
</head>
<body>
  <Header />
  <main><slot /></main>
  <Footer />
</body>
</html>
`,

  'src/components/Header.astro': `
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="/">Anime<span>Verse</span>.</a>
    <nav class="nav" aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/news/">News</a>
      <a href="/reviews/">Reviews</a>
      <a href="/guides/">Guides</a>
      <a href="/manga/">Manga</a>
      <a href="/characters/">Characters</a>
      <a class="search-link" href="/search/">Search</a>
    </nav>
  </div>
</header>
`,

  'src/components/Footer.astro': `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="brand" style="color:white" href="/">Anime<span>Verse</span>.</a>
        <p>Your destination for anime news, reviews, guides, manga and stories from the world of Japanese animation.</p>
      </div>
      <div>
        <strong>Explore</strong>
        <div class="footer-links">
          <a href="/news/">Anime News</a>
          <a href="/reviews/">Reviews</a>
          <a href="/guides/">Guides</a>
          <a href="/manga/">Manga</a>
          <a href="/characters/">Characters</a>
          <a href="/rss.xml">RSS Feed</a>
        </div>
      </div>
      <div>
        <strong>Information</strong>
        <div class="footer-links">
          <a href="/about/">About Us</a>
          <a href="/contact/">Contact</a>
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/disclaimer/">Disclaimer</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">© {new Date().getFullYear()} AnimeUpdates. Independent editorial publication.</div>
  </div>
</footer>
`,

  'src/components/ArticleCard.astro': `
---
const { post } = Astro.props;
---
<article class="article-card">
  <a href={'/article/' + post.slug + '/'}>
    <img src={post.image} alt={post.title} loading="lazy" decoding="async" />
    <div class="card-body">
      <span class="card-category">{post.category}</span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div class="card-meta">{post.date} · {post.readTime}</div>
    </div>
  </a>
</article>
`,

  'src/components/ListingPage.astro': `
---
import BaseLayout from '../layouts/BaseLayout.astro';
import ArticleCard from './ArticleCard.astro';
const { title, description, posts } = Astro.props;
---
<BaseLayout title={title + ' | AnimeUpdates'} description={description}>
  <section class="page-heading">
    <div class="container">
      <span class="eyebrow">AnimeUpdates Editorial</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </section>
  <section class="container section">
    <div class="article-grid">
      {posts.map((post) => <ArticleCard post={post} />)}
    </div>
    {posts.length === 0 && <div class="empty-state">No articles have been published in this category yet.</div>}
  </section>
</BaseLayout>
`,

  'src/pages/index.astro': `
---
import BaseLayout from '../layouts/BaseLayout.astro';
import ArticleCard from '../components/ArticleCard.astro';
import { posts, categories } from '../data/posts.js';
const latest = posts.slice(0, 6);
---
<BaseLayout>
  <div class="container">
    <section class="hero">
      <div class="hero-content">
        <span class="eyebrow">Explore the world of anime</span>
        <h1>Stories, Reviews & Everything Anime.</h1>
        <p>Discover anime news, thoughtful reviews, manga stories and helpful guides — all in one place.</p>
        <a class="primary-button" href="/guides/">Explore Anime Guides →</a>
      </div>
    </section>
  </div>
  <section class="container section">
    <div class="section-heading">
      <div><h2>Explore Categories</h2><p>Find the anime topics you love.</p></div>
    </div>
    <div class="category-strip">
      {categories.map((category) => (
        <a class="category-tile" href={'/category/' + category.slug + '/'}>
          <strong>{category.name} →</strong>
          <small>{category.description}</small>
        </a>
      ))}
    </div>
  </section>
  <section class="container section">
    <div class="section-heading">
      <div><h2>Latest Articles</h2><p>Fresh stories from AnimeUpdates.</p></div>
      <a class="text-link" href="/search/">Explore all →</a>
    </div>
    <div class="article-grid">
      {latest.map((post) => <ArticleCard post={post} />)}
    </div>
  </section>
  <section class="container section">
    <div class="section-heading"><div><h2>Discover More</h2><p>Explore articles across every section.</p></div></div>
    <div class="category-strip">
      {categories.map((category) => <a class="category-tile" href={'/' + category.slug + '/'}><strong>{category.name} →</strong><small>Browse the latest {category.name.toLowerCase()} articles.</small></a>)}
    </div>
  </section>
</BaseLayout>
`,

  'src/pages/news/index.astro': `
---
import ListingPage from '../../components/ListingPage.astro';
import { posts } from '../../data/posts.js';
---
<ListingPage title="Anime News" description="Follow anime announcements, industry updates and the latest stories." posts={posts.filter(p => p.category === 'News')} />
`,

  'src/pages/reviews/index.astro': `
---
import ListingPage from '../../components/ListingPage.astro';
import { posts } from '../../data/posts.js';
---
<ListingPage title="Anime Reviews" description="Explore thoughtful reviews covering anime storytelling, animation and music." posts={posts.filter(p => p.category === 'Reviews')} />
`,

  'src/pages/guides/index.astro': `
---
import ListingPage from '../../components/ListingPage.astro';
import { posts } from '../../data/posts.js';
---
<ListingPage title="Anime Guides" description="Beginner guides, watch orders, explainers and recommendations." posts={posts.filter(p => p.category === 'Guides')} />
`,

  'src/pages/manga/index.astro': `
---
import ListingPage from '../../components/ListingPage.astro';
import { posts } from '../../data/posts.js';
---
<ListingPage title="Manga" description="Discover manga guides, reading tips and stories from the manga world." posts={posts.filter(p => p.category === 'Manga')} />
`,

  'src/pages/characters/index.astro': `
---
import ListingPage from '../../components/ListingPage.astro';
import { posts } from '../../data/posts.js';
---
<ListingPage title="Anime Characters" description="Explore character profiles, motivations and storytelling analysis." posts={posts.filter(p => p.category === 'Characters')} />
`,

  'src/pages/category/[category].astro': `
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ArticleCard from '../../components/ArticleCard.astro';
import { posts, categories } from '../../data/posts.js';

export function getStaticPaths() {
  return categories.map(category => ({
    params: { category: category.slug },
    props: { category }
  }));
}
const { category } = Astro.props;
const filtered = posts.filter(p => p.category.toLowerCase() === category.name.toLowerCase());
---
<BaseLayout title={category.name + ' Articles | AnimeUpdates'} description={category.description}>
  <section class="page-heading"><div class="container"><span class="eyebrow">Category</span><h1>{category.name}</h1><p>{category.description}</p></div></section>
  <section class="container section">
    <div class="article-grid">{filtered.map(post => <ArticleCard post={post} />)}</div>
  </section>
</BaseLayout>
`,

  'src/pages/article/[slug].astro': `
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ArticleCard from '../../components/ArticleCard.astro';
import { posts } from '../../data/posts.js';

export function getStaticPaths() {
  return posts.map(post => ({ params: { slug: post.slug }, props: { post } }));
}
const { post } = Astro.props;
const related = posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3);
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: post.image,
  datePublished: post.date,
  dateModified: post.date,
  author: { '@type': 'Organization', name: post.author },
  publisher: { '@type': 'Organization', name: 'AnimeUpdates' },
  mainEntityOfPage: new URL('/article/' + post.slug + '/', Astro.site).href
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://animeupdates.pages.dev/' },
    { '@type': 'ListItem', position: 2, name: post.category, item: 'https://animeupdates.pages.dev/category/' + post.category.toLowerCase() + '/' },
    { '@type': 'ListItem', position: 3, name: post.title }
  ]
};
---
<BaseLayout title={post.title + ' | AnimeUpdates'} description={post.excerpt} image={post.image} type="article">
  <article class="container article-layout">
    <div class="breadcrumb"><a href="/">Home</a> / <a href={'/category/' + post.category.toLowerCase() + '/'}>{post.category}</a> / {post.title}</div>
    <span class="eyebrow">{post.category}</span>
    <h1>{post.title}</h1>
    <p class="article-meta">By {post.author} · {post.date} · {post.readTime}</p>
    <img class="article-cover" src={post.image} alt={post.title} fetchpriority="high" />
    <div class="article-content">
      {post.body.map(paragraph => <p>{paragraph}</p>)}
    </div>
    <p class="article-meta">Topics: {post.tags.join(', ')}</p>
    <script type="application/ld+json" set:html={JSON.stringify(articleSchema)} />
    <script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)} />
  </article>
  {related.length > 0 && <section class="container section"><div class="section-heading"><h2>Related Articles</h2></div><div class="article-grid">{related.map(item => <ArticleCard post={item} />)}</div></section>}
</BaseLayout>
`,

  'src/pages/search.astro': `
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { posts } from '../data/posts.js';
const index = posts.map(({ slug, title, category, excerpt, date, image }) => ({ slug, title, category, excerpt, date, image }));
---
<BaseLayout title="Search Anime Articles | AnimeUpdates" description="Search anime news, reviews, guides, manga and character articles.">
  <section class="page-heading"><div class="container"><span class="eyebrow">Discover</span><h1>Search AnimeUpdates</h1><p>Find articles, guides, reviews and anime stories.</p></div></section>
  <section class="container section">
    <input id="search-input" class="search-box" type="search" placeholder="Search anime articles..." aria-label="Search articles" />
    <p id="search-count" class="article-meta">Explore all articles</p>
    <div id="search-results" class="article-grid"></div>
    <script type="application/json" id="search-index" set:html={JSON.stringify(index)} />
    <script>
      const input = document.querySelector('#search-input');
      const results = document.querySelector('#search-results');
      const count = document.querySelector('#search-count');
      const index = JSON.parse(document.querySelector('#search-index').textContent);
      function render(query = '') {
        const q = query.trim().toLowerCase();
        const found = index.filter(p => [p.title,p.category,p.excerpt].join(' ').toLowerCase().includes(q));
        count.textContent = found.length + ' article(s) found';
        results.replaceChildren();
        found.forEach(post => {
          const article = document.createElement('article');
          article.className = 'article-card';
          const link = document.createElement('a');
          link.href = '/article/' + post.slug + '/';
          const img = document.createElement('img');
          img.src = post.image;
          img.alt = post.title;
          img.loading = 'lazy';
          const body = document.createElement('div');
          body.className = 'card-body';
          const category = document.createElement('span');
          category.className = 'card-category';
          category.textContent = post.category;
          const heading = document.createElement('h3');
          heading.textContent = post.title;
          const excerpt = document.createElement('p');
          excerpt.textContent = post.excerpt;
          body.append(category,heading,excerpt);
          link.append(img,body);
          article.append(link);
          results.append(article);
        });
        if (!found.length) {
          const empty = document.createElement('div');
          empty.className = 'empty-state';
          empty.textContent = 'No matching articles found. Try another search.';
          results.append(empty);
        }
      }
      input.addEventListener('input', () => render(input.value));
      render();
    </script>
  </section>
</BaseLayout>
`,

  'src/pages/about.astro': `
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="About AnimeUpdates" description="Learn about AnimeUpdates, our editorial mission and our anime coverage.">
  <section class="container prose">
    <span class="eyebrow">Who We Are</span>
    <h1>About AnimeUpdates</h1>
    <p>AnimeUpdates is an independent editorial website created for people who enjoy anime, manga and Japanese storytelling.</p>
    <h2>Our Mission</h2>
    <p>Our goal is to publish useful guides, thoughtful reviews, anime news and accessible explanations for readers around the world.</p>
    <h2>Our Editorial Approach</h2>
    <p>We aim to make our content clear, helpful and responsible. News should be checked against reliable announcements, and opinions should be presented as opinions.</p>
    <h2>Get in Touch</h2>
    <p>For questions, corrections or collaboration enquiries, visit our <a href="/contact/">Contact page</a>.</p>
  </section>
</BaseLayout>
`,

  'src/pages/contact.astro': `
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Contact AnimeUpdates" description="Contact AnimeUpdates for feedback, corrections and editorial enquiries.">
  <section class="container prose">
    <span class="eyebrow">Contact</span>
    <h1>Contact AnimeUpdates</h1>
    <p>We welcome reader feedback, article corrections, suggestions and appropriate collaboration enquiries.</p>
    <h2>Email</h2>
    <p>Replace this placeholder with your official editorial email before publishing: <strong>your-email@example.com</strong></p>
    <h2>Corrections</h2>
    <p>If you notice an error in an article, include its URL and a clear explanation of the correction requested.</p>
    <p>Please do not send passwords, payment information or other sensitive personal information.</p>
  </section>
</BaseLayout>
`,

  'src/pages/privacy-policy.astro': `
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Privacy Policy | AnimeUpdates" description="Read the AnimeUpdates privacy policy.">
  <section class="container prose">
    <h1>Privacy Policy</h1>
    <p><strong>Last updated: November 14, 2026</strong></p>
    <p>This page explains the general privacy approach for AnimeUpdates. Update it to reflect the actual services and data practices used by your website.</p>
    <h2>Information</h2>
    <p>Static pages on this website do not require visitors to create accounts. Hosting providers may process standard technical request information to deliver and protect the website.</p>
    <h2>Cookies and Analytics</h2>
    <p>If analytics, advertising or other third-party services are added, they may use cookies or similar technologies. Explain those services and their data practices here before enabling them.</p>
    <h2>External Links</h2>
    <p>Our website may link to external websites. Their privacy policies and practices are outside our control.</p>
    <h2>Contact</h2>
    <p>For privacy questions, use the contact information published on our Contact page.</p>
  </section>
</BaseLayout>
`,

  'src/pages/disclaimer.astro': `
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Disclaimer | AnimeUpdates" description="Read the AnimeUpdates editorial and copyright disclaimer.">
  <section class="container prose">
    <h1>Disclaimer</h1>
    <p>AnimeUpdates is an independent editorial publication. Unless specifically stated, it is not affiliated with anime studios, publishers, distributors or streaming platforms.</p>
    <h2>Editorial Content</h2>
    <p>Articles may include opinions, commentary and recommendations. Information can change, and readers should verify important announcements through official sources.</p>
    <h2>Copyright and Trademarks</h2>
    <p>Anime, manga, character names, logos and related trademarks belong to their respective owners. We do not claim ownership of third-party intellectual property.</p>
    <h2>External Websites</h2>
    <p>Links to third-party websites are provided for convenience. AnimeUpdates is not responsible for their content or practices.</p>
    <h2>Corrections</h2>
    <p>Contact us if you believe content requires correction or raises an intellectual property concern.</p>
  </section>
</BaseLayout>
`,

  'src/pages/404.astro': `
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Page Not Found | AnimeUpdates" description="The requested AnimeUpdates page could not be found.">
  <section class="container prose" style="text-align:center;padding-top:100px;padding-bottom:120px">
    <span class="eyebrow">404 Error</span>
    <h1>Lost in another world?</h1>
    <p>The page you are looking for does not exist or may have moved.</p>
    <a class="primary-button" href="/">Return Home</a>
  </section>
</BaseLayout>
`,

  'src/pages/rss.xml.js': `
import rss from '@astrojs/rss';
import { posts } from '../data/posts.js';

export function GET(context) {
  return rss({
    title: 'AnimeUpdates',
    description: 'Anime news, reviews, guides and manga.',
    site: context.site,
    items: posts.map(post => ({
      title: post.title,
      description: post.excerpt,
      link: '/article/' + post.slug + '/',
      pubDate: new Date(post.date),
      author: post.author,
      categories: [post.category]
    })),
    customData: '<language>en-us</language>'
  });
}
`,

  'public/robots.txt': `
User-agent: *
Allow: /

Sitemap: https://animeupdates.pages.dev/sitemap-index.xml
`,

  'public/favicon.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="16" fill="#7044dc"/>
<path d="M15 45V19h8l9 14 9-14h8v26h-8V31l-9 13-9-13v14z" fill="white"/>
</svg>
`,

  '.gitignore': `
node_modules/
dist/
.astro/
.env
.env.*
!.env.example
.DS_Store
`
};

for (const [file, content] of Object.entries(files)) {
  const destination = path.resolve(file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, content.trimStart() + '\n', 'utf8');
  console.log('Created: ' + file);
}

console.log('\\nAnimeUpdates source files generated successfully.');
