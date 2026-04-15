import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">P</div>
            <span className="font-bold">PinGrab</span>
          </div>
          <p className="text-slate-600 max-w-sm">
            Free Pinterest downloader for images, videos and GIFs. Save in HD with one click — no login required.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Downloaders</h4>
          <ul className="space-y-2 text-slate-600">
            <li><Link href="/video-downloader" className="hover:text-brand-600">Video Downloader</Link></li>
            <li><Link href="/image-downloader" className="hover:text-brand-600">Image Downloader</Link></li>
            <li><Link href="/gif-downloader" className="hover:text-brand-600">GIF Downloader</Link></li>
            <li><Link href="/chrome-extension" className="hover:text-brand-600">Chrome Extension</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-slate-600">
            <li><Link href="/about" className="hover:text-brand-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-600">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-brand-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-brand-600">Terms of Service</Link></li>
            <li><Link href="/dmca" className="hover:text-brand-600">DMCA</Link></li>
            <li><Link href="/disclaimer" className="hover:text-brand-600">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} PinGrab. Not affiliated with Pinterest, Inc.</div>
          <div>Made for creators who love Pinterest.</div>
        </div>
      </div>
    </footer>
  );
}
