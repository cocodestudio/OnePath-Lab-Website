/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.31.192', 'localhost'],
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