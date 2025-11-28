import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

const URL = 'https://summary.all2ools.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blogPosts.map(({ slug }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.6,
  }));

  return [...routes, ...posts];
}
