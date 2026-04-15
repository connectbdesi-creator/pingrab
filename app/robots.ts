import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://pingrab-self.vercel.app/sitemap.xml',
    host: 'https://pingrab-self.vercel.app'
  };
}
