import { ImageResponse } from 'next/og';

export const alt = 'PinGrab — Free Pinterest Downloader';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 50%, #ffffff 100%)',
          fontFamily: 'sans-serif',
          padding: 64,
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: '#ffd1d6',
            opacity: 0.6,
            filter: 'blur(40px)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: '#ffb6c1',
            opacity: 0.5,
            filter: 'blur(40px)'
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 32
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: '#e60023',
              color: '#fff',
              fontSize: 56,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(230, 0, 35, 0.35)'
            }}
          >
            P
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em'
            }}
          >
            PinGrab
          </div>
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#0f172a',
            textAlign: 'center',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 24,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 16
          }}
        >
          <span>Free Pinterest</span>
          <span style={{ color: '#e60023' }}>Downloader</span>
        </div>

        <div
          style={{
            fontSize: 30,
            color: '#475569',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.4
          }}
        >
          Save Pinterest images, videos & GIFs in HD — no login, no watermark, no limits.
        </div>

        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 48,
            fontSize: 22,
            color: '#64748b'
          }}
        >
          <div
            style={{
              padding: '10px 20px',
              borderRadius: 999,
              background: '#fff',
              border: '1px solid #e2e8f0'
            }}
          >
            🎬 Video
          </div>
          <div
            style={{
              padding: '10px 20px',
              borderRadius: 999,
              background: '#fff',
              border: '1px solid #e2e8f0'
            }}
          >
            🖼 Image
          </div>
          <div
            style={{
              padding: '10px 20px',
              borderRadius: 999,
              background: '#fff',
              border: '1px solid #e2e8f0'
            }}
          >
            ✨ GIF
          </div>
          <div
            style={{
              padding: '10px 20px',
              borderRadius: 999,
              background: '#fff',
              border: '1px solid #e2e8f0'
            }}
          >
            📌 Idea Pin
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 32,
            fontSize: 22,
            color: '#94a3b8',
            fontWeight: 600
          }}
        >
          pingrab.click
        </div>
      </div>
    ),
    { ...size }
  );
}
