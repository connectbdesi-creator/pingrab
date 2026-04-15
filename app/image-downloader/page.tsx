import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Hero from '@/components/Hero';
import Prose from '@/components/Prose';
import FAQ from '@/components/FAQ';
import { Image as ImageIcon, Maximize, FileImage, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pinterest Image Download — Save Photos in Original Quality',
  description:
    'Pinterest image download tool. Save any Pinterest photo in its original HD resolution as JPG, PNG or WebP — no cropping, no compression, no watermark.',
  keywords: [
    'pinterest image download',
    'pinterest image downloader',
    'download pinterest image',
    'pinterest photo download',
    'save pinterest picture',
    'pinterest hd image saver'
  ],
  alternates: { canonical: 'https://pingrab.app/image-downloader' },
  openGraph: {
    title: 'Pinterest Image Download — Original HD',
    description: 'Download Pinterest photos in original quality. Free & unlimited.',
    url: 'https://pingrab.app/image-downloader'
  }
};

export default function ImageDownloader() {
  return (
    <PageShell>
      <Hero
        title="Pinterest Image"
        highlight="Download"
        subtitle="Save Pinterest photos at the exact resolution the creator uploaded. Zero compression, zero cropping, zero watermarks."
        mode="image"
      />

      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Built for designers, not screenshots</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
          A screenshot throws away half the pixels. PinGrab gives you the file exactly as it lives on Pinterest's CDN.
        </p>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { icon: Maximize, title: 'Original resolution', text: 'Up to 4K when the creator uploaded it that large.' },
            { icon: FileImage, title: 'JPG, PNG, WebP', text: 'Whatever format Pinterest stores is what you get — lossless.' },
            { icon: Palette, title: 'True colors', text: 'No sRGB conversion or color profile stripping.' },
            { icon: ImageIcon, title: 'Print-ready', text: '300 DPI files stay 300 DPI when available in the source.' }
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
        <h2>Why Pinterest image download quality matters</h2>
        <p>
          If you right-click-save an image from pinterest.com you often get a 236-pixel thumbnail optimized
          for the feed grid — not the full photo. That thumbnail is fine to browse but useless for a
          portfolio board, a print layout, or anything sharper than a Stories post. PinGrab bypasses that
          thumbnail and reaches straight into the <code>images.orig</code> slot on the pin payload, which
          holds the exact file the creator uploaded.
        </p>

        <h3>What &quot;original&quot; actually means</h3>
        <p>
          Pinterest stores each image in a resolution ladder: <code>170x</code>, <code>236x</code>,{' '}
          <code>474x</code>, <code>564x</code>, <code>736x</code> and <code>orig</code>. Everything below
          <code>orig</code> is a downscale. PinGrab always tries <code>orig</code> first and only falls back
          when the creator's upload simply was not large enough to justify a bigger tier.
        </p>

        <h3>File formats you will see</h3>
        <ul>
          <li><strong>JPG</strong> — photographs and complex scenes. This is the most common format on Pinterest.</li>
          <li><strong>PNG</strong> — infographics, logos, illustrations with transparency or sharp text.</li>
          <li><strong>WebP</strong> — newer uploads; compresses smaller than JPG at the same visual quality.</li>
          <li><strong>GIF</strong> — static GIF frames sometimes; for animated GIFs use our <a href="/gif-downloader">GIF downloader</a>.</li>
        </ul>

        <h2>Ideas for what to do with your Pinterest image download</h2>
        <p>
          People use Pinterest image download tools for a surprising variety of things. Interior designers
          import reference shots into tools like Morpholio and Milanote. Fashion stylists build lookbooks in
          Google Slides. Tattoo artists print out reference sheets. Art teachers compose slide decks.
          Photographers study composition by tracing their own layouts over saved inspiration. PinGrab simply
          removes the friction of getting the pixels from Pinterest to whatever tool you already use.
        </p>

        <h2>What about copyright?</h2>
        <p>
          Downloading a pin for personal reference is generally fine under fair-use doctrines in most
          countries, but republishing, reselling or claiming the image as your own is not. If you plan to use
          a Pinterest image commercially, click through to the original source — Pinterest preserves the
          source URL on nearly every pin — and contact the creator for a license. Respect for original
          creators is what keeps platforms like Pinterest worth downloading from in the first place.
        </p>

        <h2>Power-user tip: batch reference boards</h2>
        <p>
          If you are collecting reference for a long project, create a dedicated Pinterest board, save every
          pin there, and then paste the pins one by one into PinGrab. Because each download is independent,
          the process is safe to interrupt and resume later without losing progress — there is no login
          state to reset.
        </p>
      </Prose>

      <FAQ
        items={[
          { q: 'How do I get the largest possible Pinterest image?', a: 'Just paste the pin URL — PinGrab already selects the highest-resolution tier available. There is no hidden "HD" toggle.' },
          { q: 'Will the download contain the pin description or board text?', a: 'No. Only the raw image file is saved. Metadata, title, and description are displayed on the preview page but not embedded in the image.' },
          { q: 'Does Pinterest image download work on iPad?', a: 'Yes. Safari on iPadOS saves the file to the Files app; from there you can drag it into Procreate, Figma or any design tool.' },
          { q: 'Can I download images from a Pinterest board all at once?', a: 'Not yet — each pin must be pasted individually. Board-scale bulk download is on the roadmap.' },
          { q: 'Is there a hidden transparent PNG version of every pin?', a: 'No. Only pins the creator uploaded as PNG with transparency will keep it. JPG uploads never have transparency.' }
        ]}
      />
    </PageShell>
  );
}
