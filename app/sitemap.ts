import type { MetadataRoute } from 'next';

const BASE = 'https://pingrab.click';

// Honest, stable per-route last-modified dates (YYYY-MM-DD). Bump a page's
// date only when its content actually changes — do NOT use `new Date()`, which
// stamps the build time and makes every page look freshly edited on each deploy
// (Google learns to ignore lastmod when it cries wolf).
const PAGES: { path: string; lastmod: string; priority: number }[] = [
  { path: '', lastmod: '2026-06-09', priority: 1 },
  { path: '/video-downloader', lastmod: '2026-06-09', priority: 0.8 },
  { path: '/image-downloader', lastmod: '2026-06-09', priority: 0.8 },
  { path: '/gif-downloader', lastmod: '2026-06-09', priority: 0.8 },
  { path: '/chrome-extension', lastmod: '2026-06-09', priority: 0.8 },
  { path: '/about', lastmod: '2026-06-09', priority: 0.6 },
  { path: '/contact', lastmod: '2026-06-09', priority: 0.6 },
  { path: '/privacy', lastmod: '2026-04-28', priority: 0.3 },
  { path: '/terms', lastmod: '2026-04-28', priority: 0.3 },
  { path: '/dmca', lastmod: '2026-04-28', priority: 0.3 },
  { path: '/disclaimer', lastmod: '2026-04-28', priority: 0.3 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastmod, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: lastmod,
    changeFrequency: 'weekly',
    priority
  }));
}
