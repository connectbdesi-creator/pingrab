import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  const filename = req.nextUrl.searchParams.get('filename') || 'pinterest-download';
  if (!url) return NextResponse.json({ error: 'Missing url' }, { status: 400 });
  if (!/^https:\/\/.+\.(pinimg|pinterest)\.com\//.test(url)) {
    return NextResponse.json({ error: 'Invalid host' }, { status: 400 });
  }

  const upstream = await fetch(url, { headers: { 'User-Agent': UA, Referer: 'https://www.pinterest.com/' } });
  if (!upstream.ok || !upstream.body) {
    return NextResponse.json({ error: 'Upstream fetch failed' }, { status: 502 });
  }

  const contentType = upstream.headers.get('content-type') || 'application/octet-stream';
  const ext = contentType.includes('mp4')
    ? 'mp4'
    : contentType.includes('gif')
    ? 'gif'
    : contentType.includes('png')
    ? 'png'
    : contentType.includes('webp')
    ? 'webp'
    : 'jpg';
  const safeName = filename.replace(/[^a-z0-9-_]+/gi, '_').slice(0, 80);

  return new NextResponse(upstream.body, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${safeName}.${ext}"`,
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
