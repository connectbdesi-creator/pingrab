'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Download,
  Link as LinkIcon,
  Loader2,
  Image as ImageIcon,
  Video,
  AlertCircle,
  Clipboard,
  Film
} from 'lucide-react';

type MediaItem = {
  type: 'image' | 'video' | 'gif';
  url: string;
  width?: number;
  height?: number;
  quality?: string;
};

type PinResult = {
  id: string;
  title?: string;
  description?: string;
  author?: { username?: string; fullName?: string; avatar?: string };
  thumbnail?: string;
  media: MediaItem[];
  sourceUrl: string;
};

export type DownloaderMode = 'all' | 'video' | 'image' | 'gif';

const placeholders: Record<DownloaderMode, string> = {
  all: 'Paste Pinterest link here (pinterest.com/pin/… or pin.it/…)',
  video: 'Paste Pinterest video pin URL…',
  image: 'Paste Pinterest image pin URL…',
  gif: 'Paste Pinterest GIF pin URL…'
};

export default function Downloader({ mode = 'all' }: { mode?: DownloaderMode }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PinResult | null>(null);
  const searchParams = useSearchParams();
  const autoRan = useRef(false);
  const resultRef = useRef<HTMLDivElement | null>(null);

  async function runFetch(target: string) {
    setError(null);
    setResult(null);
    if (!target.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/fetch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: target })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch');
      setResult(data);
      requestAnimationFrame(() =>
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      );
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (autoRan.current) return;
    const fromQuery =
      searchParams.get('url') ||
      searchParams.get('pin') ||
      searchParams.get('link');
    if (fromQuery && /pinterest\.com|pin\.it/i.test(fromQuery)) {
      autoRan.current = true;
      setUrl(fromQuery);
      runFetch(fromQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    runFetch(url);
  }

  async function pasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setUrl(text);
    } catch {}
  }

  function downloadHref(m: MediaItem) {
    const name = `${result?.id || 'pinterest'}-${m.quality || m.type}`;
    return `/api/download?url=${encodeURIComponent(m.url)}&filename=${encodeURIComponent(name)}`;
  }

  const filtered = result
    ? mode === 'all'
      ? result.media
      : result.media.filter((m) => m.type === mode)
    : [];

  const hasVideos = filtered.some((m) => m.type === 'video');
  const hasImages = filtered.some((m) => m.type === 'image');
  const hasGifs = filtered.some((m) => m.type === 'gif');

  return (
    <section className="w-full">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-2xl shadow-xl p-3 md:p-4 border border-slate-200"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          <div className="flex-1 flex items-center gap-2 border border-slate-200 rounded-xl px-3 md:px-4 py-3 focus-within:ring-2 focus-within:ring-brand-500 bg-slate-50">
            <LinkIcon size={18} className="text-slate-400 shrink-0" />
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={placeholders[mode]}
              className="flex-1 outline-none text-sm md:text-base bg-transparent min-w-0"
              autoComplete="off"
              inputMode="url"
              aria-label="Pinterest URL"
            />
            <button
              type="button"
              onClick={pasteFromClipboard}
              className="text-slate-500 hover:text-brand-500 text-xs md:text-sm flex items-center gap-1 shrink-0"
            >
              <Clipboard size={14} /> <span className="hidden sm:inline">Paste</span>
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-[0.98] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60 shadow-md shadow-brand-500/30 transition"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
            {loading ? 'Fetching…' : 'Download'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center gap-2">
          <AlertCircle size={18} /> {error}
        </div>
      )}

      {result && filtered.length === 0 && (
        <div className="mt-4 p-4 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
          No {mode === 'all' ? 'media' : `${mode}s`} found on this pin. Try a different URL.
        </div>
      )}

      {result && filtered.length > 0 && (
        <div
          ref={resultRef}
          className="mt-6 md:mt-8 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden scroll-mt-20"
        >
          <div className="p-4 md:p-6 border-b bg-gradient-to-br from-slate-50 to-white">
            {result.title && <h2 className="font-bold text-lg">{result.title}</h2>}
            {result.description && (
              <p className="text-sm text-slate-600 mt-1 line-clamp-3">{result.description}</p>
            )}
            {result.author?.username && (
              <div className="mt-2 text-xs text-slate-500">by @{result.author.username}</div>
            )}
          </div>

          {hasVideos && (
            <MediaGrid
              title="Videos"
              icon={<Video size={18} />}
              items={filtered.filter((m) => m.type === 'video')}
              render={(v, i) => (
                <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                  <video
                    controls
                    preload="metadata"
                    poster={result.thumbnail}
                    className="w-full aspect-video bg-black"
                  >
                    <source src={v.url} />
                  </video>
                  <div className="p-3 flex items-center justify-between text-sm">
                    <span className="text-slate-600">
                      {v.width && v.height ? `${v.width}×${v.height}` : v.quality || 'video'}
                    </span>
                    <a
                      href={downloadHref(v)}
                      className="px-3 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-medium flex items-center gap-1"
                    >
                      <Download size={14} /> MP4
                    </a>
                  </div>
                </div>
              )}
              cols="md:grid-cols-2"
            />
          )}

          {hasImages && (
            <MediaGrid
              title="Images"
              icon={<ImageIcon size={18} />}
              items={filtered.filter((m) => m.type === 'image')}
              render={(m, i) => <ImageCard key={i} m={m} href={downloadHref(m)} />}
              cols="grid-cols-2 md:grid-cols-3"
            />
          )}

          {hasGifs && (
            <MediaGrid
              title="GIFs"
              icon={<Film size={18} />}
              items={filtered.filter((m) => m.type === 'gif')}
              render={(m, i) => <ImageCard key={i} m={m} href={downloadHref(m)} label="GIF" />}
              cols="grid-cols-2 md:grid-cols-3"
            />
          )}
        </div>
      )}
    </section>
  );
}

function MediaGrid({
  title,
  icon,
  items,
  render,
  cols
}: {
  title: string;
  icon: React.ReactNode;
  items: MediaItem[];
  render: (m: MediaItem, i: number) => React.ReactNode;
  cols: string;
}) {
  return (
    <div className="p-4 md:p-6 border-b last:border-b-0">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        {icon} {title} <span className="text-slate-400 text-sm font-normal">({items.length})</span>
      </h3>
      <div className={`grid gap-4 ${cols}`}>{items.map(render)}</div>
    </div>
  );
}

function ImageCard({ m, href, label }: { m: MediaItem; href: string; label?: string }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 group">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={m.url}
        alt=""
        loading="lazy"
        className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform"
      />
      <div className="p-2 flex items-center justify-between text-xs">
        <span className="text-slate-600">
          {m.width && m.height ? `${m.width}×${m.height}` : m.quality || m.type}
        </span>
        <a
          href={href}
          className="px-2.5 py-1 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-medium flex items-center gap-1"
        >
          <Download size={12} /> {label || (m.type === 'gif' ? 'GIF' : 'JPG')}
        </a>
      </div>
    </div>
  );
}
