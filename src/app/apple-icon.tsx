import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1C1917',
          padding: 16,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            border: '4px solid #FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 900,
              letterSpacing: '0.12em',
              lineHeight: 1,
            }}
          >
            HC
          </span>
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: '#D4AF37',
              marginTop: 8,
            }}
          >
            HIWI
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
