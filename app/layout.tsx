import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_ID = 'G-0Y57PR6JMP';
const SITE_URL = 'https://pingrab.click';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PinGrab — Free Pinterest Downloader Online | Images, Videos & GIFs HD',
    template: '%s | PinGrab'
  },
  description:
    'Free Pinterest downloader online. Save Pinterest images, videos, GIFs and story pins in HD — no login, no watermark, no limits. Works on iPhone, Android & desktop.',
  keywords: [
    'pinterest downloader',
    'pinterest video downloader',
    'pinterest image downloader',
    'pinterest gif downloader',
    'download pinterest video',
    'save pinterest image',
    'pin downloader',
    'pinterest downloader free',
    'pinterest downloader online',
    'pinterest downloader no watermark'
  ],
  authors: [{ name: 'PinGrab' }],
  openGraph: {
    type: 'website',
    siteName: 'PinGrab',
    title: 'PinGrab — Free Pinterest Downloader',
    description: 'Download Pinterest images, videos and GIFs in HD. Free, no login, no watermark.',
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'PinGrab — Free Pinterest Downloader'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PinGrab — Free Pinterest Downloader',
    description: 'Download Pinterest images, videos and GIFs in HD. Free, no login.',
    images: ['/opengraph-image']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'x-default': SITE_URL,
      en: SITE_URL
    }
  },
  verification: {
    yandex: 'b8ebdd72d4d4dbf1'
  }
};

export const viewport: Viewport = {
  themeColor: '#e60023',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${SITE_URL}/#webapp`,
    name: 'PinGrab',
    alternateName: ['Pin Grab', 'PinGrab Pinterest Downloader'],
    url: SITE_URL,
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Pinterest Downloader',
    operatingSystem: 'Web, Windows, macOS, iOS, Android, Linux',
    browserRequirements: 'Requires JavaScript and a modern web browser',
    description:
      'Free online Pinterest downloader. Save Pinterest images, videos, GIFs and story pins in original HD quality with no watermark and no login.',
    inLanguage: 'en',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    featureList: [
      'Pinterest video download in MP4 HD',
      'Pinterest image download in original resolution',
      'Pinterest GIF download with loop preserved',
      'Idea pin and story pin support',
      'pin.it short URL resolution',
      'No login or signup required',
      'No watermark on downloads',
      'Works on mobile, tablet, and desktop'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: 'PinGrab Pinterest Downloader',
    operatingSystem: 'Web, Windows, macOS, iOS, Android',
    applicationCategory: 'MultimediaApplication',
    description:
      'Free Pinterest downloader for images, videos and GIFs. No login, no watermark, no limits.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
      bestRating: '5'
    },
    url: SITE_URL
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: 'PinGrab',
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    sameAs: [],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'hello@pingrab.click',
        availableLanguage: ['English']
      }
    ]
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'PinGrab',
    description: 'Free Pinterest downloader for images, videos and GIFs.',
    publisher: { '@id': `${SITE_URL}/#org` },
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?url={pinterest_url}`
      },
      'query-input': 'required name=pinterest_url'
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://i.pinimg.com" />
        <link rel="dns-prefetch" href="https://widgets.pinterest.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
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
