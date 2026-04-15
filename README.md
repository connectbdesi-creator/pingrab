# PinGrab — Pinterest Downloader

A fast, free Pinterest image, video and GIF downloader built with Next.js 14, TypeScript and Tailwind CSS.

## Features

- Download Pinterest images in HD (up to original resolution)
- Download Pinterest videos as MP4
- Supports GIFs and story/idea pins (multi-page)
- Works with both full URLs (`pinterest.com/pin/...`) and short links (`pin.it/...`)
- No login, no watermark, no rate limits (self-hosted)
- Streaming proxy download — forces "save as" instead of opening the image

## Tech stack

- **Next.js 14** (App Router) + React 18
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** icons
- Pinterest extraction via public widget API + HTML fallback (no auth needed)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Deploy

One-click deploy to **Vercel** (recommended) — Node runtime is required for the fetch/download routes.

## Project structure

```
app/
  api/fetch/route.ts     # POST — extracts media from a Pinterest URL
  api/download/route.ts  # GET  — streams media as an attachment
  page.tsx               # Landing page
  layout.tsx
components/
  Downloader.tsx         # Main UI (input, preview, download buttons)
  Header.tsx, Footer.tsx
lib/
  pinterest.ts           # Scraper — widget API + HTML fallbacks
```

## Notes

This project scrapes publicly available Pinterest pages. Pinterest's HTML structure can change — if extraction breaks, update the JSON script selectors in `lib/pinterest.ts`.

Not affiliated with Pinterest, Inc.
