import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  MessageSquare, CheckCircle2, ArrowRight, ShieldCheck, 
  QrCode, Zap, HelpCircle, Phone, FileText, Send, Smartphone
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automated WhatsApp Lab Reports & Dynamic QR Verification | OnePath Cloud LIS',
  description: 'Deliver tamper-proof diagnostic PDF reports directly to patient and doctor WhatsApp in 4 seconds. Features dynamic authenticity QR codes, doctor digital signatures, and 98% patient open rates.',
  keywords: [
    'whatsapp lab reports',
    'automated whatsapp pdf pathology',
    'digital signature pathology report',
    'QR code report verification',
    'official whatsapp business api LIS',
    'instant lab report delivery',
    'pathology whatsapp software'
  ],
  alternates: {
    canonical: 'https://onepathlab.com/whatsapp-reports',
  },
  openGraph: {
    title: 'Automated WhatsApp Reports & QR Verification | OnePath Lab',
    description: 'Instant PDF report delivery on WhatsApp with digital signatures and smartphone QR verification in 4 seconds.',
    url: 'https://onepathlab.com/whatsapp-reports',
    siteName: 'OnePath Lab LIS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated WhatsApp Lab Reports & Dynamic QR Verification',
    description: 'Deliver pathology reports instantly to patient WhatsApp with tamper-proof QR verification.',
  },
}

const whatsappFaqs = [
  {
    q: 'Is this using the Official Meta WhatsApp Business API?',
    a: 'Yes, 100%. OnePath uses official Meta Cloud WhatsApp Business APIs. Unlike risky unofficial Chrome extensions or desktop scrapers that get your phone number banned, our official integration ensures 100% reliable delivery, enterprise security, and zero number ban risk.'
  },
  {
    q: 'How fast are reports delivered to patients?',
    a: 'In under 4 seconds! The moment a pathologist clicks "Authorize & Sign", OnePath renders a high-definition PDF and dispatches it straight to the patient’s and referring doctor’s WhatsApp with a personalized message.'
  },
  {
    q: 'How does the Dynamic Authenticity QR Code work?',
    a: 'Every diagnostic report printed or sent on WhatsApp includes a unique cryptographic QR code. When a hospital doctor, airline, or patient scans this QR with any mobile camera, it opens a secure OnePath verification portal showing the authentic, untampered report directly from your lab vault.'
  },
  {
    q: 'Can we include our doctor digital signatures?',
    a: 'Yes. Pathologists, biochemists, and lab directors can securely upload their digital signatures. The signatures are automatically watermarked onto finalized reports with an immutable timestamp as required by NABL and ISO 15189 standards.'
  },
  {
    q: 'What can patients do if they message the lab WhatsApp number?',
    a: 'OnePath includes an interactive automated patient assistant. If a patient replies "Hi", the bot allows them to re-download their past test reports, check test preparation guidelines (fasting requirements), or view payment receipts.'
  }
]

export default function WhatsappReportsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://onepathlab.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://onepathlab.com/lis-software' },
          { '@type': 'ListItem', 'position': 3, 'name': 'WhatsApp Reports & QR', 'item': 'https://onepathlab.com/whatsapp-reports' }
        ]
      },
      {
        '@type': 'TechArticle',
        'headline': 'Automated WhatsApp Pathology Reports & Dynamic QR Verification',
        'description': 'Deliver diagnostic PDF reports to patient and doctor WhatsApp in seconds with tamper-proof QR verification and digital signatures.',
        'author': {
          '@type': 'Organization',
          'name': 'OnePath Lab'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': whatsappFaqs.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main style={{ background: '#ffffff', minHeight: '100vh', paddingTop: 68, overflowX: 'hidden' }}>
        
        {/* ─── Hero Section ─── */}
        <section style={{ 
          padding: '72px 0 64px',
          background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="section-badge" style={{ borderLeftColor: '#2563eb' }}>
                <span className="badge-tag">[ PATIENT ENGAGEMENT SUITE ]</span>
                <span className="badge-dot" />
                <span className="badge-desc">Official Meta WhatsApp Business API Cloud</span>
              </div>
            </div>

            <div style={{ maxWidth: 940, margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'clamp(32px, 5.5vw, 56px)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                marginBottom: 20,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Automated WhatsApp Reports &amp;{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Dynamic QR Verification
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(16px, 2.2vw, 19px)',
                color: '#475569',
                lineHeight: 1.68,
                maxWidth: 820,
                margin: '0 auto 48px',
                fontWeight: 500,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Delight your patients with instant diagnostic PDF report delivery directly on WhatsApp within 4 seconds. Features tamper-proof QR code verification, embedded pathologist digital signatures, and automated doctor referral copy dispatch.
              </p>

              {/* Stat badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
                textAlign: 'left'
              }}>
                {[
                  { m: '< 4 Seconds', l: 'Dispatch Latency', d: 'Sent instantly upon pathologist signature' },
                  { m: '98%', l: 'Patient Open Rate', d: '6x higher than traditional patient emails' },
                  { m: '₹8 / Patient', l: 'Savings in Paper & Ink', d: 'Eliminates expensive pre-printed stationery' },
                  { m: '100% Tamper-Proof', l: 'Dynamic QR Authenticity', d: 'Verifiable on any mobile smartphone camera' },
                ].map((s, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderTop: '3px solid #2563eb',
                    borderRadius: 8,
                    padding: '20px 22px',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)'
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 4 }}>
                      {s.m}
                    </div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#2563eb', marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {s.l}
                    </div>
                    <div style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {s.d}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── 3 Key Advantages ─── */}
        <section style={{ padding: '96px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <div className="section-badge" style={{ borderLeftColor: '#2563eb' }}>
                  <span className="badge-tag">[ MODERN PATIENT EXPERIENCE ]</span>
                  <span className="badge-dot" />
                  <span className="badge-desc">Why Labs Love WhatsApp Dispatch</span>
                </div>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 4.5vw, 42px)',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Built for High Reliability &amp; Patient Convenience
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 24
            }}>
              {[
                {
                  title: 'Zero Manual Copy-Pasting',
                  desc: 'Technicians do not need to save phone numbers on a personal mobile or manually attach PDFs. The cloud system handles queueing, formatting, and delivery with 100% automation.',
                  icon: <Send size={24} color="#2563eb" />
                },
                {
                  title: 'Smartphone QR Authenticity Scanner',
                  desc: 'Every single report carries a dynamic QR code. Anyone scanning it with an iPhone or Android camera is redirected to your lab’s verified HTTPS portal displaying the genuine original PDF.',
                  icon: <QrCode size={24} color="#7c3aed" />
                },
                {
                  title: 'Doctor Digital Signatures & NABL Trail',
                  desc: 'Embed authorized signatures of consultant pathologists and biochemists directly into the generated PDF with exact authorization timestamps meeting NABL audit criteria.',
                  icon: <FileText size={24} color="#059669" />
                }
              ].map((card, i) => (
                <div key={i} style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 12,
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: '#ffffff', border: '1px solid #e2e8f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── FAQs ─── */}
        <section style={{ padding: '80px 0', background: '#f8fafc', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                WhatsApp Delivery FAQs
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {whatsappFaqs.map((faq, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '22px 24px'
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 8 }}>
                    <HelpCircle size={18} color="#2563eb" style={{ flexShrink: 0 }} />
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.65, margin: 0, paddingLeft: 26, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', textAlign: 'center', boxSizing: 'border-box' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#ffffff' }}>
              Send Your First Automated WhatsApp Report in Minutes
            </h2>
            <p style={{ fontSize: 16.5, color: '#cbd5e1', maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Test OnePath free for 7 days. Comes loaded with free WhatsApp report credits so you can experience instant delivery on your own phone.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/trial" className="btn-primary" style={{
                padding: '16px 36px',
                fontSize: 16,
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8
              }}>
                Start 7-Day Free Trial <ArrowRight size={17} />
              </Link>
              <a href="https://api.whatsapp.com/send?phone=9045757272&text=Hello%20OnePath,%20send%20me%20a%20sample%20diagnostic%20report%20on%20WhatsApp" target="_blank" rel="noreferrer" style={{
                padding: '16px 28px',
                fontSize: 16,
                borderRadius: 8,
                background: '#25d366',
                color: '#ffffff',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                <MessageSquare size={18} /> Request Sample Report on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
