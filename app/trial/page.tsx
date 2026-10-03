import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrialForm from './TrialForm'

export const metadata: Metadata = {
  title: 'Start 7-Day Free Trial | OnePath Lab Cloud LIS (No Credit Card Required)',
  description: 'Instant full access to OnePath Lab Cloud LIS for 7 days. Features 200+ analyzer machine interfacing, ABDM/ABHA M1 sync, dual AI clinical copilot, and automated WhatsApp PDF reports. Zero setup fees.',
  keywords: [
    'LIS software free trial',
    'pathology lab software trial',
    'cloud pathology LIS trial india',
    'diagnostic lab software signup',
    'onepath lab trial'
  ],
  alternates: {
    canonical: 'https://onepathlab.com/trial',
  },
  openGraph: {
    title: 'Start 7-Day Free Trial | OnePath Lab Cloud LIS',
    description: 'Transform your pathology lab today. Instant access, free machine interfacing setup, and zero credit card required.',
    url: 'https://onepathlab.com/trial',
    siteName: 'OnePath Lab LIS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start 7-Day Free Trial | OnePath Lab Cloud LIS',
    description: '7 days free full access to India’s leading AI & ABDM-ready cloud LIS software.',
  },
}

const trialJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://onepathlab.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Start Free Trial', 'item': 'https://onepathlab.com/trial' }
      ]
    },
    {
      '@type': 'WebPage',
      'name': 'OnePath Lab 7-Day Free Trial',
      'url': 'https://onepathlab.com/trial',
      'description': 'Register for a 7-day full feature trial of OnePath Lab cloud LIS software with bi-directional analyzer interfacing and WhatsApp reports.'
    }
  ]
}

export default function SignUpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trialJsonLd) }}
      />
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
        <TrialForm />
        <Footer />
      </main>
    </>
  )
}