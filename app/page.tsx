import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HorizontalShowcase from './components/HorizontalShowcase'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Comparison from './components/Comparison'
import Integrations from './components/Integrations'
import FAQ from './components/FAQ'
import { faqsData } from '../data/faqs'
import CTA from './components/CTA'
import Footer from './components/Footer'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqsData.map(item => ({
    '@type': 'Question',
    'name': item.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': item.answer
    }
  }))
}

export default function Home() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HorizontalShowcase />
      <Workflow />
      <Testimonials />
      <Comparison />
      <Integrations />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}