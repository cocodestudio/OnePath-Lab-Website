import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best LIS Software in India | Pathology Lab Management System - OnePath Lab',
  description:
    'OnePath Lab is India’s #1 AI-powered Laboratory Information System (LIS) for clinical pathology labs, diagnostic centers, and hospital chains. Features automated bi-directional analyzer interfacing (ASTM/HL7), smart barcode tracking, WhatsApp report delivery, NABL ISO 15189 compliance, and instant billing.',
  keywords: [
    'LIS software',
    'LIS software India',
    'best LIS software',
    'laboratory information system',
    'laboratory information management system',
    'pathology lab software',
    'pathology management software',
    'pathology reporting software',
    'clinical lab software',
    'diagnostic lab software',
    'NABL compliant lab software',
    'ASTM HL7 analyzer interfacing',
    'blood test reporting software',
    'pathology billing software',
    'OnePath Lab LIS',
  ],
  alternates: {
    canonical: 'https://onepathlab.com/lis-software',
  },
  openGraph: {
    title: 'OnePath Lab | #1 AI-Powered Pathology Laboratory Information System (LIS)',
    description:
      'Supercharge your pathology laboratory with seamless machine interfacing, instant QR reports, NABL compliance, and smart billing. Start free trial today.',
    url: 'https://onepathlab.com/lis-software',
    siteName: 'OnePath Lab LIS',
    images: [
      {
        url: 'https://onepathlab.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'OnePath Lab LIS Software Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnePath Lab LIS | Best Pathology Lab Software',
    description:
      'India’s top-rated Laboratory Information System (LIS) with automated machine interfacing and smart WhatsApp reports.',
    images: ['https://onepathlab.com/logo.png'],
  },
}

export default function LisSoftwareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'OnePath Lab LIS',
    operatingSystem: 'Cloud, Web, Windows, macOS, Linux, Android, iOS',
    applicationCategory: 'HealthApplication, BusinessApplication',
    softwareVersion: '3.4.0',
    description:
      'India’s #1 AI-powered Laboratory Information System (LIS) for diagnostic pathology labs, phlebotomy centers, and hospital networks.',
    url: 'https://onepathlab.com/lis-software',
    offers: {
      '@type': 'Offer',
      price: '2499',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '412',
      bestRating: '5',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OnePath Lab Technologies',
      url: 'https://onepathlab.com',
      logo: 'https://onepathlab.com/logo.png',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
