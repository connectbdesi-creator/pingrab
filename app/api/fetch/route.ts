import { NextRequest, NextResponse } from 'next/server';
import { fetchPin } from '@/lib/pinterest';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Missing url' }, { status: 400 });
    }
    if (!/pinterest\.com|pin\.it/i.test(url)) {
      return NextResponse.json({ error: 'Not a Pinterest URL' }, { status: 400 });
    }
    const result = await fetchPin(url);
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || 'Failed to fetch pin' },
      { status: 500 }
    );
  }
}
