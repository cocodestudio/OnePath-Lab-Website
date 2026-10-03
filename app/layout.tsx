import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { TopProgressBar } from './components/TopProgressBar'
import { SmoothScrolling } from './components/SmoothScrolling'
import GoogleAnalytics from './components/GoogleAnalytics'
import WhatsAppWidget from './components/WhatsAppWidget'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'OnePath Lab | Best Pathology Lab Software & Cloud LIS in India (AI & ABDM Ready)',
  description: "India's #1 AI-powered Cloud Laboratory Information System (LIS) for pathology labs and diagnostic centers. Features bi-directional machine interfacing, ABDM/ABHA M1 sync, dual AI clinical copilot, automated WhatsApp PDF reports, and prepaid B2B franchise billing. Start 7-day free trial.",
  keywords: [
    'Pathology Lab Software',
    'Best LIS Software India',
    'Laboratory Information System Software',
    'Cloud Pathology Software',
    'ABDM LIS Software',
    'ABHA Integrated Lab Software',
    'NABL Lab Software',
    'Pathology Software with WhatsApp',
    'Bi-directional Analyzer Interfacing Software',
    'Diagnostic Lab Management Software',
    'LIS Software Free Trial India'
  ],
  authors: [{ name: 'OnePath Lab Technologies' }],
  creator: 'OnePath Lab',
  publisher: 'OnePath Lab',
  metadataBase: new URL('https://onepathlab.com'),
  alternates: {
    canonical: 'https://onepathlab.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'OnePath Lab | Best AI-Powered Cloud LIS & Pathology Lab Software in India',
    description: 'Transform your diagnostic lab with AI-driven automation, 200+ analyzer machine interfacing, ABDM/ABHA integration, and instant WhatsApp report delivery. Trusted by 200+ labs.',
    url: 'https://onepathlab.com',
    siteName: 'OnePath Lab',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'OnePath Lab LIS - Best Pathology Software',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnePath Lab | Best Pathology Lab Software & Cloud LIS in India',
    description: 'Cloud LIS with bi-directional machine interfacing, ABDM M1 certification, dual AI interpretation, and instant WhatsApp reports.',
    images: ['/logo.png'],
    creator: '@OnePathLab',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://onepathlab.com/#software',
      'name': 'OnePath Lab LIS',
      'operatingSystem': 'Cloud, Web, Windows, Android, iOS',
      'applicationCategory': 'HealthCareApplication',
      'applicationSubCategory': 'Laboratory Information System (LIS)',
      'description': "India's premier AI-powered and ABDM-integrated cloud Laboratory Information System (LIS) for pathology and diagnostic labs.",
      'url': 'https://onepathlab.com',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'INR',
        'description': '7-Day Full Feature Free Trial'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'ratingCount': '248',
        'bestRating': '5',
        'worstRating': '1'
      },
      'featureList': [
        'Bi-directional Machine Interfacing for 200+ Analyzers (ASTM/HL7)',
        'Govt. of India ABDM / ABHA M1 & HFR Certified with DHIS Cash Incentives',
        'Dual AI Clinical Copilot with Auto-Interpretation & Delta Checks',
        'Instant WhatsApp PDF Reports with Doctor Digital Signature & Verification QR',
        'Multi-Branch & B2B Franchise Prepaid Wallet with Deduct-and-Print',
        'Dynamic Multi-Tier Rate Lists & Doctor Referral Commission Tracking',
        'NABL ISO 15189 Quality Control, Sample Barcoding & Full Audit Trails'
      ]
    },
    {
      '@type': 'Organization',
      '@id': 'https://onepathlab.com/#organization',
      'name': 'OnePath Lab',
      'url': 'https://onepathlab.com',
      'logo': 'https://onepathlab.com/logo.png',
      'sameAs': [
        'https://www.linkedin.com/company/cocodestudio',
        'https://www.instagram.com/cocodestudio/',
        'https://x.com/OnePathLab'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-9045757272',
        'contactType': 'customer support',
        'areaServed': 'IN',
        'availableLanguage': ['English', 'Hindi']
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <TopProgressBar />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
        <WhatsAppWidget />
      </body>
    </html>
  )
}