import rss from '@astrojs/rss';
import { posts } from '../data/posts.js';

export function GET(context) {
  return rss({
    title: 'AnimeZenith',
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

