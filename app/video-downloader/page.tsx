import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Hero from '@/components/Hero';
import Prose from '@/components/Prose';
import FAQ from '@/components/FAQ';
import { Monitor, Smartphone, Film, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pinterest Video Download — Save MP4 Videos in HD Free',
  description:
    'Pinterest video download tool. Convert any Pinterest video to MP4 in HD — works with idea pins, story pins and reels. No login, no watermark.',
  keywords: [
    'pinterest video download',
    'pinterest video downloader',
    'download pinterest video',
    'pinterest mp4',
    'save pinterest video hd',
    'pinterest reels downloader'
  ],
  alternates: { canonical: 'https://pingrab-self.vercel.app/video-downloader' },
  openGraph: {
    title: 'Pinterest Video Download — Save MP4 HD',
    description: 'Free Pinterest video download to MP4 in HD. No login.',
    url: 'https://pingrab-self.vercel.app/video-downloader'
  }
};

export default function VideoDownloader() {
  return (
    <PageShell>
      <Hero
        title="Pinterest Video"
        highlight="Download"
        subtitle="Turn any Pinterest video link into a clean MP4 file in the highest resolution Pinterest has on offer."
        mode="video"
      />

      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">A Pinterest video downloader that keeps quality intact</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
          Most free tools re-encode videos and lose sharpness. PinGrab delivers the original file — byte for byte.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Film, title: 'Up to 1080p source', text: 'We request Pinterest\'s HLS "V_HLSV4" stream and pick the top rung of the ladder.' },
            { icon: Monitor, title: 'Desktop-ready MP4', text: 'Output is plain H.264 MP4 so it plays in Premiere, DaVinci, QuickTime and VLC instantly.' },
            { icon: Smartphone, title: 'Saves to camera roll', text: 'On iPhone, tap and hold the downloaded video to send it straight into Photos.' }
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
        <h2>How Pinterest video download works on PinGrab</h2>
        <p>
          Every Pinterest video pin is actually an HLS playlist — a short text file that points at several
          encodings of the same clip at different bitrates. When you paste a video pin URL into PinGrab, our
          server reads the playlist, selects the highest bitrate rendition, then stitches the TS segments
          back into a single MP4 file for you. The result is indistinguishable from the stream Pinterest
          plays in its own app.
        </p>

        <h3>Supported Pinterest video formats</h3>
        <p>PinGrab handles every video surface Pinterest ships today:</p>
        <ul>
          <li><strong>Standard video pins</strong> — the short looping clips you see in the feed.</li>
          <li><strong>Idea pins / story pins</strong> — multi-page posts; each page with a video is downloadable separately.</li>
          <li><strong>Pinterest TV episodes</strong> — long-form creator videos.</li>
          <li><strong>Video ads</strong> — promoted pins also resolve correctly.</li>
        </ul>

        <h3>What you can do with the downloaded file</h3>
        <p>
          Because the file is a plain MP4, you can use it anywhere: edit it in your video tool of choice,
          upload it to another platform (with the creator's permission), loop it in a digital signage
          display, or keep it for offline reference. The audio track — when the original has one — is
          preserved exactly.
        </p>

        <h2>Pinterest video download on mobile</h2>
        <p>
          On Android, PinGrab saves the MP4 straight to your Downloads folder where the Gallery app picks it
          up. iOS is a little stricter: Safari downloads to the Files app, from where you can long-press the
          file and "Save Video" to move it into Photos. The entire flow takes under five seconds on a
          reasonable connection.
        </p>

        <h2>Quality tiers explained</h2>
        <p>
          When you download, you will sometimes see multiple MP4 buttons for the same video. Here is what
          each one means:
        </p>
        <ul>
          <li><strong>V_HLSV4 / V_HLSV3:</strong> adaptive HD stream, usually 720p or 1080p — pick this one.</li>
          <li><strong>V_720P:</strong> fixed 720p rendition.</li>
          <li><strong>V_EXP4 / V_EXP5:</strong> low-bandwidth SD versions, handy for slow networks.</li>
        </ul>
        <p>
          If you are unsure, just pick the largest resolution displayed next to the button — our UI shows
          width×height right on the card.
        </p>
      </Prose>

      <section className="bg-gradient-to-b from-white to-slate-50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">What you can download</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              'Standard Pinterest feed videos',
              'Idea pins with multiple video pages',
              'Pinterest TV episodes',
              'Creator promo videos and reels',
              'Looping short-form clips',
              'Videos from board previews'
            ].map((t, i) => (
              <li key={i} className="flex items-center gap-2 p-4 rounded-xl bg-white border">
                <CheckCircle2 className="text-brand-500 shrink-0" size={18} /> <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ
        items={[
          { q: 'Why is the downloaded video smaller than I expected?', a: 'Pinterest itself caps most uploads at 1080p. If the creator uploaded a 720p clip, that is the true master — there is no hidden higher tier.' },
          { q: 'Can I download a video pin without audio?', a: 'Some creators upload muted videos; in that case the MP4 will also be silent. PinGrab never strips audio when it exists.' },
          { q: 'Does the video download work with pin.it short links?', a: 'Yes. We resolve the short link to the full pin URL server-side before extracting.' },
          { q: 'Do you support Pinterest live streams?', a: 'Live Pinterest TV broadcasts can only be downloaded after they end and have been archived by Pinterest as a replay.' },
          { q: 'Why did my download fail mid-way?', a: 'Usually a flaky network — refresh and retry. Because PinGrab streams from Pinterest directly, our servers do not cache a partial copy.' }
        ]}
      />
    </PageShell>
  );
}
