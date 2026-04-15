import { Suspense } from 'react';
import Downloader, { DownloaderMode } from './Downloader';

export default function Hero({
  title,
  highlight,
  trailing,
  subtitle,
  mode = 'all'
}: {
  title: string;
  highlight: string;
  trailing?: string;
  subtitle: string;
  mode?: DownloaderMode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 -left-24 w-80 h-80 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-14 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {title} <span className="gradient-text">{highlight}</span>
            {trailing ? ` ${trailing}` : ''}
          </h1>
          <p className="mt-4 md:mt-6 text-slate-600 md:text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <Suspense fallback={<div className="h-20" />}>
          <Downloader mode={mode} />
        </Suspense>
      </div>
    </section>
  );
}
