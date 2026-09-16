/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],
  allowedDevOrigins: ['192.168.31.192', 'localhost'],
  async redirects() {
    return [
      {
        source: '/r/:id*',
        destination: 'https://lis.onepathlab.com/r/:id*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;