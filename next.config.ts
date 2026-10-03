import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ['192.168.31.192', 'localhost'],
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/r/:id*',
        destination: 'https://lis.onepathlab.com/r/:id*',
        permanent: false,
      },
      {
        source: '/track-report',
        destination: '/lis-software',
        permanent: true,
      },
      {
        source: '/test-pricing',
        destination: '/lis-software',
        permanent: true,
      },
      {
        source: '/home-collection',
        destination: '/lis-software',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;