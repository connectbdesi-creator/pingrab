export type MediaItem = {
  type: 'image' | 'video' | 'gif';
  url: string;
  width?: number;
  height?: number;
  quality?: string;
};

export type PinResult = {
  id: string;
  title?: string;
  description?: string;
  author?: { username?: string; fullName?: string; avatar?: string };
  thumbnail?: string;
  media: MediaItem[];
  sourceUrl: string;
};

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

async function resolveShortUrl(url: string): Promise<string> {
  if (!/pin\.it|pinterest\.com\/amp/i.test(url)) return url;
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: { 'User-Agent': UA }
    });
    return res.url || url;
  } catch {
    return url;
  }
}

function extractPinId(url: string): string | null {
  const m = url.match(/\/pin\/(?:[^\/]+--)?(\d+)/);
  return m ? m[1] : null;
}

function pickBestImage(images: Record<string, any>): MediaItem | null {
  if (!images) return null;
  const order = ['orig', '736x', '564x', '474x', '236x', '170x'];
  for (const k of order) {
    const img = images[k];
    if (img?.url) {
      return {
        type: img.url.endsWith('.gif') ? 'gif' : 'image',
        url: img.url,
        width: img.width,
        height: img.height,
        quality: k
      };
    }
  }
  return null;
}

function collectVideos(videoList: Record<string, any> | undefined): MediaItem[] {
  if (!videoList) return [];
  const out: MediaItem[] = [];
  for (const [key, v] of Object.entries<any>(videoList)) {
    if (v?.url) {
      out.push({
        type: 'video',
        url: v.url,
        width: v.width,
        height: v.height,
        quality: key
      });
    }
  }
  out.sort((a, b) => (b.width || 0) - (a.width || 0));
  return out;
}

function parsePinData(pin: any, sourceUrl: string): PinResult {
  const media: MediaItem[] = [];

  const videos = pin?.videos?.video_list || pin?.video_list;
  media.push(...collectVideos(videos));

  const storyBlocks = pin?.story_pin_data?.pages || [];
  for (const page of storyBlocks) {
    for (const block of page?.blocks || []) {
      if (block?.video?.video_list) media.push(...collectVideos(block.video.video_list));
      if (block?.image?.images) {
        const img = pickBestImage(block.image.images);
        if (img) media.push(img);
      }
    }
  }

  const mainImg = pickBestImage(pin?.images);
  if (mainImg && !media.some((m) => m.url === mainImg.url)) media.push(mainImg);

  return {
    id: String(pin?.id || extractPinId(sourceUrl) || ''),
    title: pin?.title || pin?.grid_title || undefined,
    description: pin?.description || pin?.auto_alt_text || undefined,
    author: pin?.pinner
      ? {
          username: pin.pinner.username,
          fullName: pin.pinner.full_name,
          avatar: pin.pinner.image_medium_url
        }
      : undefined,
    thumbnail: mainImg?.url,
    media,
    sourceUrl
  };
}

async function fetchViaWidgetApi(pinId: string, sourceUrl: string): Promise<PinResult | null> {
  const api = `https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${pinId}`;
  const res = await fetch(api, { headers: { 'User-Agent': UA, Accept: 'application/json' } });
  if (!res.ok) return null;
  const json: any = await res.json();
  const pin = json?.data?.[0];
  if (!pin) return null;
  return parsePinData(pin, sourceUrl);
}

async function fetchViaHtml(sourceUrl: string): Promise<PinResult | null> {
  const res = await fetch(sourceUrl, {
    headers: {
      'User-Agent': UA,
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9'
    }
  });
  if (!res.ok) return null;
  const html = await res.text();

  const patterns = [
    /<script[^>]+id="__PWS_DATA__"[^>]*>([\s\S]*?)<\/script>/,
    /<script[^>]+id="initial-state"[^>]*>([\s\S]*?)<\/script>/,
    /<script[^>]*>\s*window\.__PWS_INITIAL_PROPS__\s*=\s*([\s\S]*?);\s*<\/script>/
  ];
  for (const rx of patterns) {
    const m = html.match(rx);
    if (!m) continue;
    try {
      const data = JSON.parse(m[1]);
      const pin = findPin(data);
      if (pin) return parsePinData(pin, sourceUrl);
    } catch {}
  }

  const og = html.match(/<meta property="og:image" content="([^"]+)"/i);
  const ogVideo = html.match(/<meta property="og:video" content="([^"]+)"/i);
  if (og || ogVideo) {
    const media: MediaItem[] = [];
    if (ogVideo) media.push({ type: 'video', url: ogVideo[1] });
    if (og) media.push({ type: 'image', url: og[1] });
    return {
      id: extractPinId(sourceUrl) || '',
      media,
      thumbnail: og?.[1],
      sourceUrl
    };
  }
  return null;
}

function findPin(obj: any): any {
  if (!obj || typeof obj !== 'object') return null;
  if (obj.id && (obj.images || obj.videos || obj.story_pin_data)) return obj;
  for (const key of Object.keys(obj)) {
    const found = findPin(obj[key]);
    if (found) return found;
  }
  return null;
}

export async function fetchPin(rawUrl: string): Promise<PinResult> {
  const url = await resolveShortUrl(rawUrl.trim());
  const pinId = extractPinId(url);

  if (pinId) {
    const widgetResult = await fetchViaWidgetApi(pinId, url);
    if (widgetResult && widgetResult.media.length) return widgetResult;
  }

  const htmlResult = await fetchViaHtml(url);
  if (htmlResult && htmlResult.media.length) return htmlResult;

  throw new Error('Could not extract media from this Pinterest URL');
}
