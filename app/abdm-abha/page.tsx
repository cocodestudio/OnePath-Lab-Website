import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  ShieldCheck, CheckCircle2, ArrowRight, Award, Zap, 
  HelpCircle, Phone, Lock, FileText, Database, HeartPulse
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Govt. ABDM & ABHA M1 Certified LIS | Earn DHIS Cash Incentives | OnePath Lab',
  description: 'Official ABDM Milestone 1 (M1) certified cloud LIS for Indian pathology laboratories. Generate ABHA IDs via Aadhaar/Mobile OTP, push diagnostic reports to National Health Locker, and claim Govt DHIS cash incentives up to ₹500/day.',
  keywords: [
    'abdm certified lis',
    'abha integration pathology',
    'ayushman bharat digital mission LIS',
    'dhis cash incentive diagnostic lab',
    'national health locker lab report',
    'abdm milestone 1 LIMS',
    'HFR registered laboratory software',
    'nabl abdm pathology'
  ],
  alternates: {
    canonical: 'https://onepathlab.com/abdm-abha',
  },
  openGraph: {
    title: 'Govt. ABDM & ABHA M1 Certified LIS | OnePath Lab',
    description: 'Empower your laboratory with official ABDM M1 integration. Issue ABHA IDs, push to National Health Locker, and claim Govt. DHIS cash rewards.',
    url: 'https://onepathlab.com/abdm-abha',
    siteName: 'OnePath Lab LIS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Govt. ABDM M1 & ABHA Pathology LIS | OnePath Lab',
    description: 'Earn DHIS cash incentives and issue verified ABHA diagnostic reports with OnePath Cloud LIS.',
  },
}

const abdmFaqs = [
  {
    q: 'What is ABDM Milestone 1 (M1) certification?',
    a: 'Milestone 1 (M1) is the official National Health Authority (NHA) certification authorizing a digital health software to create ABHA IDs (Ayushman Bharat Health Accounts), verify existing ABHA numbers via Aadhaar/Mobile OTP, and link demographic profiles to patient lab records.'
  },
  {
    q: 'How does the Government Digital Health Incentive Scheme (DHIS) work?',
    a: 'Under the National Health Authority (NHA) DHIS policy, diagnostic laboratories and clinics receive direct financial cash incentives (ranging from ₹20 up to ₹500 per transaction) for creating ABHA IDs and linking digital health records. OnePath automatically aggregates and generates your DHIS claim documentation.'
  },
  {
    q: 'Can our lab generate ABHA IDs if a patient does not carry Aadhaar?',
    a: 'Yes. OnePath supports multiple ABHA creation workflows: Aadhaar OTP verification, Mobile OTP verification, and direct scanning of patient ABHA QR codes from apps like Aarogya Setu or ABHA PHR.'
  },
  {
    q: 'How do patients view their diagnostic reports in the National Health Locker?',
    a: 'Once your pathologist authorizes the report, OnePath bundles the clinical parameters into the standardized FHIR JSON format and securely uploads it to the ABDM gateway. Patients immediately see their report in their Aarogya Setu app, ABHA app, or any approved personal health record (PHR) app.'
  },
  {
    q: 'Does ABDM integration require extra paperwork or technical setup from the lab?',
    a: 'No complicated paperwork is needed. Your lab only needs a valid Health Facility Registry (HFR) ID (which our team assists you in generating for free in 10 minutes). OnePath handles 100% of the cryptographic keys, API bridges, and NHA compliance.'
  }
]

export default function AbdmAbhaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://onepathlab.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://onepathlab.com/lis-software' },
          { '@type': 'ListItem', 'position': 3, 'name': 'ABDM & ABHA M1', 'item': 'https://onepathlab.com/abdm-abha' }
        ]
      },
      {
        '@type': 'TechArticle',
        'headline': 'Govt. ABDM & ABHA M1 Certified Pathology LIS',
        'description': 'Complete guide to Ayushman Bharat Digital Mission (ABDM) Milestone 1 compliance and DHIS cash incentives for diagnostic laboratories.',
        'author': {
          '@type': 'Organization',
          'name': 'OnePath Lab'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': abdmFaqs.map(f => ({
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
          background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="section-badge" style={{ borderLeftColor: '#16a34a' }}>
                <span className="badge-tag" style={{ color: '#16a34a' }}>[ NHA CERTIFIED COMPLIANCE ]</span>
                <span className="badge-dot" />
                <span className="badge-desc">Ayushman Bharat Digital Mission (ABDM) M1 &amp; HFR</span>
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
                Govt. ABDM M1 Certified LIS &amp;{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #16a34a 0%, #0d9488 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Earn DHIS Cash Incentives
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
                Make your pathology lab 100% compliant with the Government of India&apos;s digital healthcare ecosystem. Issue ABHA IDs in seconds, link test records to National Health Lockers, and receive direct Government DHIS monetary incentives into your bank account.
              </p>

              {/* Stat badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
                textAlign: 'left'
              }}>
                {[
                  { m: 'Milestone 1 (M1)', l: 'NHA Certified Engine', d: 'Full ABHA generation & verification' },
                  { m: 'Up to ₹500 / Day', l: 'DHIS Cash Incentives', d: 'Direct bank transfers from Govt. of India' },
                  { m: '10 Seconds', l: 'ABHA OTP Creation', d: 'Fast Aadhaar & mobile number verification' },
                  { m: '100% FHIR', l: 'Interoperability Standards', d: 'Sync with Aarogya Setu & ABHA Apps' },
                ].map((s, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderTop: '3px solid #16a34a',
                    borderRadius: 8,
                    padding: '20px 22px',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)'
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 4 }}>
                      {s.m}
                    </div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#16a34a', marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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

        {/* ─── The 3 Core ABDM Capabilities ─── */}
        <section style={{ padding: '96px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <div className="section-badge" style={{ borderLeftColor: '#16a34a' }}>
                  <span className="badge-tag" style={{ color: '#16a34a' }}>[ NATIONAL HEALTH INITIATIVE ]</span>
                  <span className="badge-dot" />
                  <span className="badge-desc">How ABDM Functions Inside OnePath</span>
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
                Complete Compliance in Every Diagnostic Workflow
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 24
            }}>
              {[
                {
                  title: 'Instant ABHA ID Creation & Verification',
                  desc: 'When a patient arrives at reception, enter their 12-digit Aadhaar or mobile number. An instant OTP is sent to the patient. With 1-click verification, an official 14-digit ABHA ID and digital health card are generated.',
                  icon: <HeartPulse size={24} color="#16a34a" />
                },
                {
                  title: 'Automated FHIR Report Sync to Health Locker',
                  desc: 'As soon as the pathologist reviews and signs the digital report, OnePath converts the laboratory findings into HL7 FHIR (Fast Healthcare Interoperability Resources) and pushes it to the patient’s national PHR account.',
                  icon: <Database size={24} color="#2563eb" />
                },
                {
                  title: 'DHIS Cash Incentives Tracking & Bank Credits',
                  desc: 'Every verified ABHA creation and digital report link earns your lab government incentive rewards under the DHIS scheme. OnePath tracks every eligible transaction and automatically exports monthly DHIS claim reconciliation sheets.',
                  icon: <Zap size={24} color="#d97706" />
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
                ABDM &amp; ABHA Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {abdmFaqs.map((faq, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '22px 24px'
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 8 }}>
                    <HelpCircle size={18} color="#16a34a" style={{ flexShrink: 0 }} />
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
              Make Your Diagnostic Center ABDM Compliant Today
            </h2>
            <p style={{ fontSize: 16.5, color: '#cbd5e1', maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Start your free 7-day trial. Our team provides complete assistance in linking your Health Facility Registry (HFR) and enabling DHIS cash incentives.
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
                gap: 8,
                background: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)'
              }}>
                Start 7-Day Free Trial <ArrowRight size={17} />
              </Link>
              <a href="tel:+919045757272" style={{
                padding: '16px 28px',
                fontSize: 16,
                borderRadius: 8,
                background: 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                <Phone size={17} /> Call ABDM Desk (+91 9045757272)
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
