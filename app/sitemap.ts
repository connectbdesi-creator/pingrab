import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pingrab.app';
  const pages = [
    '',
    '/video-downloader',
    '/image-downloader',
    '/gif-downloader',
    '/chrome-extension',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/dmca',
    '/disclaimer'
  ];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8
  }));
}
