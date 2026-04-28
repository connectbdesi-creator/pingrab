import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Prose from '@/components/Prose';
import FAQ from '@/components/FAQ';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import { Chrome, Download, MousePointerClick, Shield, Zap, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pinterest Chrome Extension — Free One-Click Pinterest Downloader, No Watermark',
  description:
    'Free PinGrab Chrome extension. One-click download for Pinterest images, videos and GIFs in HD — no login, no watermark, works on Chrome, Edge, Brave & Opera.',
  keywords: [
    'pinterest chrome extension',
    'pinterest chrome extension free',
    'pinterest download extension',
    'pinterest downloader chrome',
    'pinterest image extension chrome',
    'pinterest video extension',
    'pinterest extension no watermark'
  ],
  alternates: {
    canonical: 'https://pingrab.click/chrome-extension',
    languages: {
      'x-default': 'https://pingrab.click/chrome-extension',
      en: 'https://pingrab.click/chrome-extension'
    }
  },
  openGraph: {
    title: 'PinGrab Chrome Extension — Free One-Click Pinterest Downloader',
    description:
      'One-click Pinterest download right inside your browser. Free. No login.',
    url: 'https://pingrab.click/chrome-extension',
    images: ['/opengraph-image']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PinGrab Chrome Extension — Free',
    description: 'One-click Pinterest downloads inside your browser.',
    images: ['/opengraph-image']
  }
};

export default function ChromeExtensionPage() {
  return (
    <PageShell>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: 'https://pingrab.click' },
          { name: 'Chrome Extension', url: 'https://pingrab.click/chrome-extension' }
        ]}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6 border border-brand-100">
            <Chrome size={16} /> Free Chrome Extension
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Download Pinterest with <span className="gradient-text">one click</span>
          </h1>
          <p className="mt-5 text-slate-600 md:text-lg max-w-2xl mx-auto">
            The PinGrab extension embeds a download button directly into every Pinterest pin. No copy-paste,
            no tabs, no waiting — just click and save.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold shadow-lg shadow-brand-500/30"
            >
              <Chrome size={20} /> Add to Chrome — it's free
            </a>
            <span className="text-sm text-slate-500">Works on Chrome, Edge, Brave & Opera</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Extension features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { icon: MousePointerClick, title: 'Inline download button', text: 'Button appears on every pin hover. Works on boards, feed and pin pages.' },
            { icon: Download, title: 'Every media type', text: 'Images, videos (MP4) and GIFs handled automatically — no format picker needed.' },
            { icon: Zap, title: 'No redirects', text: 'Files save straight to your Downloads folder. No new tabs, no intermediate page.' },
            { icon: Eye, title: 'HD by default', text: 'Always grabs the highest-resolution tier Pinterest has for that pin.' },
            { icon: Shield, title: 'Privacy-respecting', text: 'No analytics, no telemetry. Source code is auditable on request.' },
            { icon: Chrome, title: 'Tiny footprint', text: 'Under 200 KB installed. Only activates on pinterest.com — zero cost elsewhere.' }
          ].map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border hover:border-brand-200 hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-500 grid place-items-center mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-600 mt-1 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Prose>
        <h2>Why we built a Pinterest Chrome extension</h2>
        <p>
          The web version of PinGrab is fast, but it still forces you to copy a pin link, switch tabs, paste
          it, wait for extraction and then click download. That is fine for saving the occasional pin, but
          designers and researchers often save dozens in a single session. The extension collapses that
          five-step flow into a single click, right where you already are.
        </p>

        <h3>Permissions explained</h3>
        <p>
          The extension asks for only two permissions: <strong>access to pinterest.com</strong> so it can
          inject the download button, and <strong>downloads</strong> so it can save the file without opening
          a new tab. It never reads your other tabs, your history, or your cookies outside of pinterest.com.
        </p>

        <h3>How the extension decides what to save</h3>
        <p>
          When you click the button, the extension reads the pin DOM, finds the highest-resolution source URL
          embedded by Pinterest (the same <code>images.orig</code> field the website uses internally), and
          passes it straight to Chrome's native download API. Nothing is proxied through our servers, which
          means the extension is not only faster but also works offline-first on any cached pin.
        </p>

        <h2>Installation in 30 seconds</h2>
        <ol>
          <li>Click <strong>Add to Chrome</strong> and confirm the permissions prompt.</li>
          <li>Pin the PinGrab icon next to your address bar so it is always one click away.</li>
          <li>Browse Pinterest normally — a circular download button appears on the top-right of every pin when you hover.</li>
          <li>Click the button. That is it. The file drops into your Downloads folder.</li>
        </ol>

        <h2>Keyboard shortcuts</h2>
        <p>
          Power users can trigger a download with <code>Alt + D</code> on any open pin page. The shortcut is
          customisable from <code>chrome://extensions/shortcuts</code> if it clashes with another extension
          you use.
        </p>
      </Prose>

      <FAQ
        items={[
          { q: 'Is the extension free?', a: 'Yes. Completely free and always will be. We do not plan a paid tier.' },
          { q: 'Is it safe to install?', a: 'Yes. The extension uses the minimum possible permissions and ships through the official Chrome Web Store with Google review.' },
          { q: 'Does it work on Microsoft Edge or Brave?', a: 'Yes. Every Chromium-based browser (Edge, Brave, Opera, Vivaldi, Arc) installs Chrome Web Store extensions.' },
          { q: 'Does it slow down my browser?', a: 'No. It only runs code on pinterest.com tabs. On any other site the extension is dormant.' },
          { q: 'Does the extension work without the PinGrab website?', a: 'Yes. The extension is self-contained — no account, no calls home, no dependency on our servers.' }
        ]}
      />
    </PageShell>
  );
}
