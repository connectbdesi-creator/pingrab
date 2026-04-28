import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Prose from '@/components/Prose';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy — PinGrab',
  description: 'How PinGrab collects, uses and protects your data. Our full privacy policy with GDPR/CCPA disclosures.',
  alternates: {
    canonical: 'https://pingrab.click/privacy',
    languages: {
      'x-default': 'https://pingrab.click/privacy',
      en: 'https://pingrab.click/privacy'
    }
  },
  openGraph: {
    title: 'Privacy Policy — PinGrab',
    url: 'https://pingrab.click/privacy',
    images: ['/opengraph-image']
  },
  robots: { index: true, follow: true }
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: 'https://pingrab.click' },
          { name: 'Privacy Policy', url: 'https://pingrab.click/privacy' }
        ]}
      />
      <section className="bg-gradient-to-b from-brand-50 to-white py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-slate-600">Last updated: April 15, 2026</p>
        </div>
      </section>

      <Prose>
        <p>
          This Privacy Policy explains how PinGrab ("we", "us", "our") collects, uses and shares information
          when you use <strong>pingrab.click</strong> and the PinGrab browser extension (collectively the
          "Service"). By using the Service you agree to the practices described here.
        </p>

        <h2>1. Information we collect</h2>
        <h3>1.1 Information you provide</h3>
        <p>
          The Service does not require an account. The only data you actively provide is the Pinterest URL
          you paste into the downloader. This URL is processed server-side to locate the associated media,
          and is <strong>not</strong> stored in any database or log file after the request completes.
        </p>
        <h3>1.2 Information collected automatically</h3>
        <ul>
          <li><strong>Server logs:</strong> Like most web services, we record standard request metadata (IP address, user agent, timestamp, response code) for up to 14 days to diagnose abuse and outages.</li>
          <li><strong>Cookies:</strong> We use a single first-party cookie to remember your consent preferences. No tracking cookies are set without consent.</li>
          <li><strong>Analytics:</strong> We use privacy-preserving, cookieless analytics (Plausible) that records aggregate page views only. No individual profiles are built.</li>
        </ul>

        <h2>2. How we use information</h2>
        <ul>
          <li>To provide the Service — i.e. fetch and deliver the media you requested.</li>
          <li>To monitor and improve reliability and performance.</li>
          <li>To detect and prevent abuse, fraud, and violations of our Terms.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>3. Advertising</h2>
        <p>
          PinGrab displays advertisements served by third-party networks including Google AdSense. These
          providers may use cookies and similar technologies to serve ads based on your prior visits to
          this and other websites. Google's use of advertising cookies enables it and its partners to serve
          ads based on your visit to our Service. You may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads">Google Ads Settings</a> or{' '}
          <a href="https://www.aboutads.info">aboutads.info</a>.
        </p>
        <p>
          Our ad partners may collect data including IP address, browser type, pages viewed and general
          location. We do not share Pinterest URLs or downloaded media with advertisers.
        </p>

        <h2>4. Cookies</h2>
        <p>
          A cookie is a small text file stored on your device. We use cookies for:
        </p>
        <ul>
          <li><strong>Essential cookies</strong> — to remember your cookie consent choice.</li>
          <li><strong>Advertising cookies</strong> — set by Google and other ad partners when you consent.</li>
        </ul>
        <p>You can disable cookies in your browser settings at any time.</p>

        <h2>5. Data retention</h2>
        <p>
          Pinterest URLs and downloaded files are never retained — they pass through our servers in memory
          and are discarded once the download stream completes. Server access logs are automatically deleted
          after 14 days.
        </p>

        <h2>6. Data sharing</h2>
        <p>We share data only with:</p>
        <ul>
          <li><strong>Infrastructure providers</strong> (Vercel, Cloudflare) that host and deliver the Service.</li>
          <li><strong>Advertising partners</strong> as described above.</li>
          <li><strong>Law enforcement</strong> when legally compelled and only after reviewing the request.</li>
        </ul>
        <p>We never sell personal information.</p>

        <h2>7. Your rights</h2>
        <p>
          If you are located in the EEA, UK, California, or another jurisdiction with data protection laws,
          you have the right to access, correct, delete or port your personal data, and to withdraw
          advertising consent. Contact <a href="mailto:privacy@pingrab.click">privacy@pingrab.click</a> to exercise
          any of these rights. We respond within 30 days.
        </p>

        <h2>8. Children</h2>
        <p>
          The Service is not directed to children under 13. We do not knowingly collect personal data from
          children. If you believe a child has submitted personal data, please contact us for deletion.
        </p>

        <h2>9. International transfers</h2>
        <p>
          PinGrab is operated globally through CDN edge nodes. By using the Service you consent to your
          information being transferred to and processed in the United States and other countries where our
          providers operate.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this policy occasionally. Material changes will be announced on the homepage at
          least seven days in advance. Continued use of the Service after the effective date constitutes
          acceptance.
        </p>

        <h2>11. Contact</h2>
        <p>
          Privacy questions: <a href="mailto:privacy@pingrab.click">privacy@pingrab.click</a>
        </p>
      </Prose>
    </PageShell>
  );
}
