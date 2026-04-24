import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'Claude-SearchBot',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'GoogleOther',
    'Applebot-Extended',
    'CCBot',
    'cohere-ai',
    'Bytespider',
    'DuckAssistBot',
    'MistralAI-User',
    'Meta-ExternalAgent',
    'Amazonbot',
    'YouBot'
  ];

  const searchBots = [
    'Googlebot',
    'Bingbot',
    'msnbot',
    'Slurp',
    'DuckDuckBot',
    'Baiduspider',
    'YandexBot',
    'Applebot'
  ];

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      ...searchBots.map((ua) => ({
        userAgent: ua,
        allow: '/',
        disallow: ['/api/']
      })),
      ...aiBots.map((ua) => ({
        userAgent: ua,
        allow: '/'
      }))
    ],
    sitemap: 'https://pingrab.click/sitemap.xml',
    host: 'https://pingrab.click'
  };
}
