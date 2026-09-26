import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Activity, CheckCircle2, ArrowRight, Server, ShieldCheck, 
  Cpu, Zap, HelpCircle, Phone, FileCheck, Layers, AlertCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bi-directional Machine Interfacing LIS | Connect 200+ Analyzers (Sysmex, Mindray, Erba)',
  description: 'Connect your laboratory hematology, biochemistry, and immunoassay analyzers directly to OnePath Cloud LIS. Supports 200+ instruments via RS232, TCP/IP, ASTM, and HL7 with 0% transcription errors.',
  keywords: [
    'machine interfacing LIS',
    'bi-directional analyzer interfacing',
    'sysmex LIS integration',
    'mindray machine interface pathology',
    'erba chem analyzer LIS',
    'ASTM E1381 LIS',
    'HL7 laboratory interface',
    'automated lab test results transfer'
  ],
  alternates: {
    canonical: 'https://www.onepathlab.com/machine-interfacing',
  },
  openGraph: {
    title: 'Bi-directional Machine Interfacing LIS | 200+ Analyzers Supported',
    description: 'Eliminate manual typing errors with automated machine interfacing for Sysmex, Mindray, Erba, Roche, and Abbott instruments.',
    url: 'https://www.onepathlab.com/machine-interfacing',
    siteName: 'OnePath Lab LIS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bi-directional Machine Interfacing LIS | OnePath Lab',
    description: 'Instant ASTM/HL7 bridge software connecting your pathology analyzers directly into patient reports.',
  },
}

const interfacingFaqs = [
  {
    q: 'How does OnePath connect to our laboratory analyzers?',
    a: 'We install a lightweight OnePath Bridge Agent on your local lab computer. The agent connects to your analyzer via a standard RS232 serial cable (or USB-to-RS232 converter) or a LAN Ethernet network cable. The agent automatically listens to incoming data packets, parses them, and pushes values straight to your cloud dashboard.'
  },
  {
    q: 'What is the difference between Uni-directional and Bi-directional interfacing?',
    a: 'In Uni-directional interfacing, the machine sends test results to the software. In Bi-directional interfacing, the machine can also query OnePath for the worklist. When a technician scans a sample tube barcode on the analyzer, the machine asks OnePath which tests to run, executes them, and sends results back automatically.'
  },
  {
    q: 'Will our existing older analyzer work with OnePath?',
    a: 'Yes. OnePath supports over 200 analyzer models, including legacy instruments with ASTM E1381/E1394, HL7, and proprietary serial protocols. If your analyzer outputs data via serial COM or LAN, our engineering team can interface it within 15 minutes.'
  },
  {
    q: 'Do we need a dedicated server PC for machine interfacing?',
    a: 'No. Any standard Windows desktop or laptop (Windows 10 or 11 with 4GB RAM) already present near your analyzers can run the OnePath Bridge Agent quietly in the background without slowing down other work.'
  },
  {
    q: 'What happens if the internet goes down while tests are running?',
    a: 'The OnePath Bridge Agent stores incoming raw analyzer readings in a secure local buffer SQLite cache. As soon as internet connectivity resumes, all buffered test results sync automatically to your cloud database with zero data loss.'
  }
]

const supportedAnalyzers = [
  {
    category: 'Hematology Analyzers (CBC / 3-Part & 5-Part)',
    brands: 'Sysmex (XN-L, XP-100, XP-300, KX-21), Mindray (BC-20s, BC-30s, BC-5000, BC-5150, BC-6000), Erba (Elite 580, H360, H560), Horiba (Yumizen H500, Microsemi CRP), Nihon Kohden (Celltac series), Abbott Cell-Dyn'
  },
  {
    category: 'Biochemistry Analyzers (Semi & Fully Automated)',
    brands: 'Erba (Chem 5X, Chem 7, EM 200, EM 360), Roche (Cobas c111, Cobas c311, Cobas 6000), Mindray (BS-120, BS-200, BS-240, BS-380), Beckman Coulter (AU480, AU680), Biosystems (BA400, A15, A25), Randox, Transasia'
  },
  {
    category: 'Immunoassay & CLIA Analyzers',
    brands: 'Roche (Elecsys 2010, Cobas e411), Abbott (Architect i1000sr, Alinity i), Snibe (Maglumi 600, 800, 2000), Mindray (CL-900i, CL-1200i), Siemens (Centaur, Immulite), Bio-Rad'
  },
  {
    category: 'Electrolyte, Coagulation & Urine Analyzers',
    brands: 'Cornley, Caretium, Stago Coagulation, Sysmex CA series, Erba ECL, Dirui Urine Analyzers, Urometer series, Medica EasyLyte'
  }
]

export default function MachineInterfacingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.onepathlab.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://www.onepathlab.com/lis-software' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Machine Interfacing', 'item': 'https://www.onepathlab.com/machine-interfacing' }
        ]
      },
      {
        '@type': 'TechArticle',
        'headline': 'Bi-directional Machine Interfacing LIS | 200+ Analyzers',
        'description': 'Automated laboratory analyzer interfacing middleware for Sysmex, Mindray, Erba, Roche, and Abbott instruments via ASTM and HL7.',
        'author': {
          '@type': 'Organization',
          'name': 'OnePath Lab'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': interfacingFaqs.map(f => ({
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
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderLeft: '3px solid #2563eb',
                borderRadius: 6,
                padding: '7px 16px',
                fontSize: 12,
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: '0 1px 3px rgba(15,23,42,0.04)'
              }}>
                <Activity size={14} color="#2563eb" />
                <span>[ LAB HARDWARE BRIDGE ]</span>
                <span style={{ color: '#475569' }}>ASTM &amp; HL7 Protocol Middleware</span>
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
                Zero Manual Typing.{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Direct Analyzer Interfacing
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
                Connect over 200+ clinical hematology, biochemistry, immunoassay, and electrolyte analyzers directly to OnePath Cloud LIS. Patient test results transfer digitally from machine sensors straight into patient reports in milliseconds.
              </p>

              {/* Stat badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
                textAlign: 'left'
              }}>
                {[
                  { m: '200+ Models', l: 'Out-of-the-Box Drivers', d: 'Sysmex, Mindray, Erba, Roche, Abbott' },
                  { m: '< 1 Second', l: 'Digital Result Transfer', d: 'Results flow instantly upon analyzer cycle' },
                  { m: '100% Accuracy', l: 'Zero Transcription Error', d: 'Eliminates typo risks and transposed digits' },
                  { m: '15 Minutes', l: 'Remote Setup Time', d: 'Fast remote calibration by OnePath team' },
                ].map((s, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderTop: '3px solid #2563eb',
                    borderRadius: 8,
                    padding: '20px 22px',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)'
                  }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 4 }}>
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

        {/* ─── How It Works (The 3-Step Interfacing Pipeline) ─── */}
        <section style={{ padding: '96px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderLeft: '3px solid #2563eb',
                  borderRadius: 6,
                  padding: '6px 14px',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#0f172a',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  <span>[ PROTOCOL WORKFLOW ]</span>
                  <span>How OnePath Middleware Operates</span>
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
                From Blood Tube to Final Report in 3 Automated Steps
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24
            }}>
              {[
                {
                  step: '01',
                  title: 'Tube Barcode Accessioning',
                  desc: 'Patient is registered and sample tube (EDTA / Plain Serum) receives a unique barcode sticker. The sample is placed in the analyzer tray.',
                  badge: 'Scan & Accession'
                },
                {
                  step: '02',
                  title: 'Automated Analyzer Execution',
                  desc: 'Analyzer reads the barcode, queries OnePath for the test worklist, processes the reagents, and outputs the raw data packet via RS232 COM or TCP/IP.',
                  badge: 'ASTM / HL7 Execution'
                },
                {
                  step: '03',
                  title: 'Direct Report Population & Flagging',
                  desc: 'OnePath Bridge Agent parses the raw frame and populates the patient report. Abnormal values are highlighted in red for the pathologist review.',
                  badge: 'Instant Result Transfer'
                }
              ].map((step, idx) => (
                <div key={idx} style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 12,
                  padding: '32px 28px',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: 44, fontWeight: 900, color: '#e2e8f0',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    lineHeight: 1, marginBottom: 16
                  }}>
                    {step.step}
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: 4,
                    padding: '3px 8px',
                    fontSize: 11,
                    fontWeight: 800,
                    color: '#2563eb',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>
                    {step.badge}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── Supported Analyzers Catalog ─── */}
        <section style={{ padding: '80px 0', background: '#f8fafc', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderLeft: '3px solid #2563eb',
                  borderRadius: 6,
                  padding: '6px 14px',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#0f172a',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  <span>[ 200+ COMPATIBLE INSTRUMENTS ]</span>
                  <span>Supported Hardware List</span>
                </div>
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Pre-Configured Analyzer Profiles
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
              {supportedAnalyzers.map((group, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '24px 22px',
                  boxShadow: '0 2px 8px rgba(15,23,42,0.03)'
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#2563eb', marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {group.category}
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {group.brands}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── FAQs ─── */}
        <section style={{ padding: '80px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Machine Interfacing FAQs
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {interfacingFaqs.map((faq, i) => (
                <div key={i} style={{
                  background: '#f8fafc',
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

        {/* ─── CTA ─── */}
        <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', textAlign: 'center', boxSizing: 'border-box' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#ffffff' }}>
              Connect Your Lab Analyzers in Under 15 Minutes
            </h2>
            <p style={{ fontSize: 16.5, color: '#cbd5e1', maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Start your free trial today. Our interfacing specialists will configure your machine connection remotely without any disruption to your patient testing.
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
                <Phone size={17} /> Call Interfacing Engineer (+91 9045757272)
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
