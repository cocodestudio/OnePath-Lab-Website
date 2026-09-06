import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OnePath Lab | Best AI-Powered Pathology Lab Management Software',
  description: 'Streamline your pathology lab with India’s #1 AI-powered Lab Information System. Trusted by NABL accredited labs for automation, precision, and growth.',
  keywords: ['Pathology Lab Software', 'LIS Software India', 'AI Lab Management', 'NABL Lab Software', 'Pathology Automation'],
  authors: [{ name: 'OnePath Lab' }],
  metadataBase: new URL('https://onepathlab.com'),
  alternates: {
    canonical: 'https://onepathlab.com',
  },
  openGraph: {
    title: 'OnePath Lab | AI-Powered LIS for Pathology Labs',
    description: 'Transform your lab operations with AI-powered automation. Trusted by NABL Labs across India.',
    url: 'https://onepathlab.com',
    siteName: 'OnePath Lab',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  other: {
    'google-adsense-account': 'ca-pub-3071851906714660',
  },
}

import { TopProgressBar } from './components/TopProgressBar'
import { SmoothScrolling } from './components/SmoothScrolling'
import GoogleAnalytics from './components/GoogleAnalytics'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3071851906714660" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3071851906714660"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <GoogleAnalytics />
        <TopProgressBar />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  )
}