'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Chrome, Image as ImageIcon, Film, Video } from 'lucide-react';

const navLinks = [
  { href: '/video-downloader', label: 'Video', icon: Video },
  { href: '/image-downloader', label: 'Image', icon: ImageIcon },
  { href: '/gif-downloader', label: 'GIF', icon: Film },
  { href: '/chrome-extension', label: 'Chrome Extension', icon: Chrome }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="w-9 h-9 rounded-full bg-brand-500 text-white grid place-items-center font-bold shadow-md">
            P
          </div>
          <span className="font-bold text-lg">PinGrab</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-50 hover:text-brand-600 flex items-center gap-1.5 transition"
            >
              <l.icon size={16} /> {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t bg-white">
          <div className="px-4 py-2 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 flex items-center gap-3 text-slate-700 hover:text-brand-600"
              >
                <l.icon size={18} /> {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
