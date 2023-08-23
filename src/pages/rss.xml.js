import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection('posts');
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: 'https://proud-river-03ddfce03.3.azurestaticapps.net',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}