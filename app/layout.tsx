import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_ID = 'G-0Y57PR6JMP';

export const metadata: Metadata = {
  metadataBase: new URL('https://pingrab.click'),
  title: {
    default: 'PinGrab — Pinterest Downloader for Images, Videos & GIFs',
    template: '%s | PinGrab'
  },
  description:
    'Free Pinterest downloader. Save images, videos, GIFs and story pins in HD — no login, no watermark, no limits.',
  keywords: [
    'pinterest downloader',
    'pinterest video downloader',
    'pinterest image downloader',
    'pinterest gif downloader',
    'download pinterest video',
    'save pinterest image',
    'pin downloader'
  ],
  authors: [{ name: 'PinGrab' }],
  openGraph: {
    type: 'website',
    siteName: 'PinGrab',
    title: 'PinGrab — Pinterest Downloader',
    description: 'Download Pinterest images, videos, GIFs in HD. Free and no login.',
    url: 'https://pingrab.click'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PinGrab — Pinterest Downloader',
    description: 'Download Pinterest images, videos, GIFs in HD.'
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://pingrab.click' }
};

export const viewport: Viewport = {
  themeColor: '#e60023',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PinGrab',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Free Pinterest downloader for images, videos and GIFs in HD quality.',
    url: 'https://pingrab.click'
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://i.pinimg.com" />
        <link rel="dns-prefetch" href="https://widgets.pinterest.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
