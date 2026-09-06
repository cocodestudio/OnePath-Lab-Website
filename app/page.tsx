import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HorizontalShowcase from './components/HorizontalShowcase'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import Comparison from './components/Comparison'
import Integrations from './components/Integrations'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HorizontalShowcase />
      <Workflow />
      <Testimonials />
      <Comparison />
      <Integrations />
      <CTA />
      <Footer />
    </main>
  )
}