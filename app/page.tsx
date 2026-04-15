import PageShell from '@/components/PageShell';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Prose from '@/components/Prose';
import Link from 'next/link';
import { Video, Image as ImageIcon, Film, Chrome, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <PageShell>
      <Hero
        title="Pinterest"
        highlight="Downloader"
        subtitle="Save any Pinterest pin — images, videos, GIFs and idea pins — in full HD. No login. No watermark. No limits."
      />

      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">Pick your Pinterest download tool</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
          Each tool is tuned for its format so you always get the cleanest, highest-resolution file.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/video-downloader', icon: Video, title: 'Video Downloader', text: 'Save Pinterest videos as MP4 in HD.' },
            { href: '/image-downloader', icon: ImageIcon, title: 'Image Downloader', text: 'Download Pinterest photos in original size.' },
            { href: '/gif-downloader', icon: Film, title: 'GIF Downloader', text: 'Grab animated GIFs keeping the loop intact.' },
            { href: '/chrome-extension', icon: Chrome, title: 'Chrome Extension', text: 'One-click downloads inside Pinterest.' }
          ].map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="group p-6 rounded-2xl bg-white border hover:border-brand-300 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 grid place-items-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition">
                <c.icon size={24} />
              </div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{c.text}</p>
              <div className="mt-4 text-brand-500 text-sm font-medium flex items-center gap-1">
                Open <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <HowItWorks subject="pin" />
      <Features />

      <Prose>
        <h2>The easiest way to download from Pinterest</h2>
        <p>
          Pinterest is where millions of creators share mood boards, tutorials, recipes and short videos every
          day — but the platform does not give you a straightforward way to save those pins offline. PinGrab
          was built to close that gap. Paste any Pinterest link and our extractor pulls the original file
          straight from Pinterest's CDN, untouched and unwatermarked, so you keep the exact quality the
          creator uploaded.
        </p>
        <p>
          Unlike screen-recording or screenshotting a pin, PinGrab saves the real source file. That means
          crisp typography on infographic images, smooth 30 fps playback on video pins, and perfectly looping
          animations on GIFs. It is the same file Pinterest serves to its own mobile app — just delivered to
          your device instead of their player.
        </p>

        <h2>What makes PinGrab different</h2>
        <p>
          A lot of Pinterest downloaders feel the same: a plain input box, three banner ads, and a download
          that silently drops to 480p. We took a different path. PinGrab focuses on three things: quality,
          speed and trust. Every download is streamed through a privacy-respecting proxy that strips nothing
          and adds nothing — no transcoding, no re-encoding, no tracking pixels embedded in the file.
        </p>
        <ul>
          <li><strong>Always original resolution:</strong> we request Pinterest's highest-available tier (orig &gt; 736x &gt; 564x) before falling back.</li>
          <li><strong>Streaming downloads:</strong> large video files begin saving the moment bytes arrive — no multi-minute "processing" wait.</li>
          <li><strong>Edge-deployed:</strong> the site is served from a global CDN so latency is low wherever you are.</li>
          <li><strong>Zero account friction:</strong> no sign-up, no captcha on normal use, no mailing list.</li>
        </ul>

        <h2>Who uses PinGrab</h2>
        <p>
          Designers archive inspiration boards so their references survive a Pinterest account deletion.
          Teachers save craft tutorials for offline classroom display. Wedding planners collect venue
          reference shots for mood decks. Marketers pull reference footage for brand presentations. PinGrab
          fits anywhere a Pinterest pin is valuable but a web page is not enough.
        </p>

        <h2>Works on every device</h2>
        <p>
          PinGrab is a web app — there is nothing to install unless you want the Chrome Extension for
          one-click saves. iPhone, iPad, Android, Mac and Windows all work identically. On iOS, tap the image
          or video after downloading and choose "Save to Photos" to move it into your camera roll.
        </p>
      </Prose>

      <FAQ
        items={[
          { q: 'Is PinGrab completely free?', a: 'Yes. Every download is free with no quota or registration. Our only revenue comes from unobtrusive display ads on some pages.' },
          { q: 'What Pinterest URLs does it accept?', a: 'Any pin URL from pinterest.com, country domains like pinterest.co.uk or in.pinterest.com, and short pin.it share links.' },
          { q: 'Why does a pin show multiple download options?', a: 'Pinterest stores pins at several resolutions. We expose each tier so you can pick the exact size you need.' },
          { q: 'Does Pinterest notify the creator when I download?', a: 'No. Downloads happen on our servers, so the creator receives no notification or view event.' },
          { q: 'Can I download private or secret boards?', a: 'No. PinGrab only works with pins that are publicly viewable without logging in.' }
        ]}
      />
    </PageShell>
  );
}
