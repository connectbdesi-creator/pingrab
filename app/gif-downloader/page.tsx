import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Hero from '@/components/Hero';
import Prose from '@/components/Prose';
import FAQ from '@/components/FAQ';
import { Repeat, Zap, MessageCircle, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pinterest GIF Download — Save Animated GIFs Free',
  description:
    'Pinterest GIF download tool. Save animated GIFs from any Pinterest pin with the loop and frame rate intact. No login, no watermark.',
  keywords: [
    'pinterest gif download',
    'pinterest gif downloader',
    'download pinterest gif',
    'animated gif pinterest',
    'save pinterest gif',
    'pin gif saver'
  ],
  alternates: { canonical: 'https://pingrab.click/gif-downloader' },
  openGraph: {
    title: 'Pinterest GIF Download — Save Animated GIFs',
    description: 'Download animated GIFs from Pinterest with the loop intact.',
    url: 'https://pingrab.click/gif-downloader'
  }
};

export default function GifDownloader() {
  return (
    <PageShell>
      <Hero
        title="Pinterest GIF"
        highlight="Download"
        subtitle="Save animated GIFs from Pinterest — loop, frame rate and transparency preserved exactly as uploaded."
        mode="gif"
      />

      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">GIFs, not silent MP4s</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
          We detect whether the pin is a true animated GIF and hand you the real .gif file — not a muted video mimic.
        </p>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { icon: Repeat, title: 'Real loop', text: 'Endlessly looping animation, same as the creator exported.' },
            { icon: Zap, title: 'Full frame rate', text: '15–24 fps depending on the original. Nothing dropped.' },
            { icon: Layers, title: 'Transparent GIFs', text: 'Alpha channels survive — great for sticker packs.' },
            { icon: MessageCircle, title: 'Chat-ready', text: 'Direct-paste into WhatsApp, Telegram, Slack, Discord.' }
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
        <h2>The Pinterest GIF download situation is… complicated</h2>
        <p>
          Here is something most downloaders will not tell you: Pinterest frequently re-encodes uploaded GIFs
          into silent MP4 videos because MP4 is dramatically smaller than GIF at the same visual quality.
          From the viewer's perspective the pin still looks like a GIF — it loops, it has no audio — but the
          actual underlying file is a video. PinGrab handles both cases.
        </p>
        <ul>
          <li><strong>True GIF pins:</strong> we hand you the original .gif byte-for-byte.</li>
          <li><strong>GIF-as-MP4 pins:</strong> we give you the MP4 with a one-click conversion hint, and mark the item as "GIF" so you know its origin.</li>
        </ul>

        <h3>Converting MP4 back to GIF</h3>
        <p>
          If you need a literal .gif extension (to send as a WhatsApp sticker or drop into a legacy forum),
          run the downloaded MP4 through a free converter like <strong>ezgif.com</strong>, <strong>cloudconvert.com</strong>
          or the <strong>ffmpeg</strong> one-liner{' '}
          <code>ffmpeg -i input.mp4 -vf fps=20 output.gif</code>. Quality will drop a little — GIF is an
          inefficient format — but you will have a true looping GIF again.
        </p>

        <h2>Why people download Pinterest GIFs</h2>
        <p>
          Pinterest has quietly become one of the richest GIF libraries on the internet. Makeup tutorial
          snippets, looping cooking steps, animated stickers by indie illustrators, vintage cartoon clips,
          workout form demos — all of it lives on Pinterest, often uploaded by the creators directly. Our GIF
          downloader exists so you can archive those loops before they disappear, or embed them in a
          presentation without the Pinterest chrome around them.
        </p>

        <h2>Best practices for Pinterest GIF download</h2>
        <ol>
          <li>Open the pin on its dedicated URL (not the board preview) for maximum fidelity.</li>
          <li>If multiple download buttons appear, pick the one marked "GIF" before any MP4 fallback.</li>
          <li>On mobile, download to Files first — saving directly to Photos strips animation on older iOS versions.</li>
          <li>Respect the creator: if you plan to republish the GIF, credit the original pinner.</li>
        </ol>

        <h2>GIF vs MP4: which should you keep?</h2>
        <p>
          If the loop is under five seconds and you need cross-platform compatibility (old Slack clients,
          email attachments, chat stickers), keep the GIF. If the loop is longer or needs to look crisp on a
          Retina display, keep the MP4 — it will be a fraction of the size at much higher quality. PinGrab
          lets you grab either so you do not have to pick in advance.
        </p>
      </Prose>

      <FAQ
        items={[
          { q: 'Why did my Pinterest GIF download save as .mp4?', a: 'Because Pinterest had already converted that GIF into a silent video for performance. The animation is identical — just in a video container.' },
          { q: 'How long can a Pinterest GIF be?', a: 'Pinterest does not publish a strict limit, but most GIF pins are under 10 seconds. PinGrab handles whatever length the pin contains.' },
          { q: 'Will the downloaded GIF work on iMessage?', a: 'Yes. iMessage accepts both true .gif files and .mp4 loops, so either format works as a reply sticker.' },
          { q: 'Is there a size limit on Pinterest GIF download?', a: 'No server-side cap. The only limit is your own bandwidth.' },
          { q: 'Can I download a GIF and keep its transparency?', a: 'Yes, if the original was uploaded with an alpha channel. Pinterest occasionally flattens transparent GIFs — in that case the background becomes white.' }
        ]}
      />
    </PageShell>
  );
}
