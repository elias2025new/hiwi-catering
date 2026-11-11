import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['gsap'],
  reactStrictMode: true,
  allowedDevOrigins: ['10.0.0.30', '10.0.0.30:3000', 'localhost:3000'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/events',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/inquiry-form',
        destination: '/inquiry',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/inquiry',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
