import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Cpu, CheckCircle2, ArrowRight, Activity, ShieldAlert, 
  HelpCircle, Phone, Sparkles, TrendingUp, AlertTriangle, FileText
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dual AI Clinical Copilot for Pathology Labs | Auto-Impressions & Delta Checks | OnePath',
  description: 'Next-gen Dual Gemini + Groq AI Clinical Copilot for diagnostic laboratories. Generates instant clinical impressions, calculates patient delta checks against past history, and warns of critical panic values.',
  keywords: [
    'AI pathology software',
    'AI clinical copilot LIS',
    'auto interpretation lab reports',
    'delta check pathology software',
    'panic value alert LIMS',
    'dual gemini groq clinical AI',
    'diagnostic clinical decision support'
  ],
  alternates: {
    canonical: 'https://onepathlab.com/ai-clinical-copilot',
  },
  openGraph: {
    title: 'Dual AI Clinical Copilot for Pathology Labs | OnePath Lab',
    description: 'Empower pathologists with dual AI clinical intelligence: automatic impressions, historical delta checks, and instant panic value alerts.',
    url: 'https://onepathlab.com/ai-clinical-copilot',
    siteName: 'OnePath Lab LIS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dual AI Clinical Copilot for Pathology | OnePath Lab',
    description: 'Next-generation Gemini + Groq AI clinical decision support for diagnostic laboratories.',
  },
}

const aiFaqs = [
  {
    q: 'How does the Dual AI Clinical Copilot work?',
    a: 'OnePath pairs Google Gemini 1.5 Pro’s deep medical reasoning models with Groq’s ultra-low latency LPU hardware. When analyzer values populate a report, the AI analyzes cross-parameter relationships, patient demographics, and past visit history to draft differential diagnostic impressions in less than 500 milliseconds.'
  },
  {
    q: 'Does the AI replace the pathologist?',
    a: 'Never. OnePath strictly adheres to a "Pathologist-in-the-Loop" architecture. The AI acts as an expert junior pathologist copilot, highlighting subtle anomalies, calculating delta check changes, and drafting preliminary remarks. Every report must be reviewed and authorized with the pathologist’s digital signature.'
  },
  {
    q: 'What is a Delta Check and why is it critical?',
    a: 'A Delta Check compares a patient’s current test parameter against their own previous historical values. For example, if a patient’s Hemoglobin drops from 14 g/dL to 8 g/dL within 48 hours, or Creatinine doubles, OnePath immediately triggers a Delta Check alert to flag possible internal bleeding or acute renal failure.'
  },
  {
    q: 'What are Critical Panic Values?',
    a: 'Panic values are life-threatening laboratory results (such as Potassium > 6.5 mEq/L, Platelets < 20,000/µL, or Blood Glucose < 45 mg/dL). OnePath instantly triggers high-visibility audio-visual warnings and sends automated priority SMS/WhatsApp notifications to the treating doctor.'
  },
  {
    q: 'Is patient data used to train public AI models?',
    a: 'No. All clinical inference calls run through dedicated, zero-retention enterprise API endpoints. Patient health data is never stored, retained, or utilized for public model training, ensuring 100% compliance with HIPAA and India’s DPDP Act 2023.'
  }
]

export default function AiClinicalCopilotPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://onepathlab.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://onepathlab.com/lis-software' },
          { '@type': 'ListItem', 'position': 3, 'name': 'AI Clinical Copilot', 'item': 'https://onepathlab.com/ai-clinical-copilot' }
        ]
      },
      {
        '@type': 'TechArticle',
        'headline': 'Dual AI Clinical Copilot for Diagnostic Pathology',
        'description': 'Clinical AI decision support engine combining Google Gemini and Groq for automated impressions, delta checks, and panic alerts.',
        'author': {
          '@type': 'Organization',
          'name': 'OnePath Lab'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': aiFaqs.map(f => ({
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
          background: 'linear-gradient(180deg, #f5f3ff 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="section-badge" style={{ borderLeftColor: '#7c3aed' }}>
                <span className="badge-tag" style={{ color: '#7c3aed' }}>[ CLINICAL DECISION SUPPORT ]</span>
                <span className="badge-dot" />
                <span className="badge-desc">Dual Gemini + Groq AI Reasoning Engine</span>
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
                Next-Generation{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Dual AI Clinical Copilot
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
                Eliminate diagnostic oversight with automated clinical impression drafts, historical delta checks against past visits, and real-time warnings for life-threatening panic values. Designed to support pathologists, not replace them.
              </p>

              {/* Stat badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
                textAlign: 'left'
              }}>
                {[
                  { m: '< 500 ms', l: 'Inference Speed', d: 'Groq LPU hardware acceleration' },
                  { m: '100% History', l: 'Automated Delta Checks', d: 'Compares against previous patient visits' },
                  { m: 'Real-Time', l: 'Critical Panic Warnings', d: 'Immediate audio-visual alert triggers' },
                  { m: 'Zero-Retention', l: 'HIPAA & DPDP Compliant', d: 'Patient records never used to train public AI' },
                ].map((s, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderTop: '3px solid #7c3aed',
                    borderRadius: 8,
                    padding: '20px 22px',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)'
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 4 }}>
                      {s.m}
                    </div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#7c3aed', marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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

        {/* ─── The 4 Pillars of OnePath Clinical AI ─── */}
        <section style={{ padding: '96px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <div className="section-badge" style={{ borderLeftColor: '#7c3aed' }}>
                  <span className="badge-tag" style={{ color: '#7c3aed' }}>[ CLINICAL INTELLIGENCE ]</span>
                  <span className="badge-dot" />
                  <span className="badge-desc">4 Pillars of the OnePath Copilot</span>
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
                Smart Clinical Guardrails for Every Diagnostic Panel
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: 24
            }}>
              {[
                {
                  title: 'Automated Clinical Impressions',
                  desc: 'The AI evaluates correlated test parameters (e.g. low MCV, low MCH with high RDW and low Ferritin) and drafts a medically sound clinical impression for the pathologist’s 1-click review and customization.',
                  icon: <Sparkles size={24} color="#7c3aed" />
                },
                {
                  title: 'Historical Patient Delta Checks',
                  desc: 'Every parameter is cross-checked against the patient’s historical laboratory tests over time. Sudden dangerous variances (such as a 30% drop in Hemoglobin or spike in Creatinine) are instantly flagged in amber.',
                  icon: <TrendingUp size={24} color="#2563eb" />
                },
                {
                  title: 'Critical Panic Value Alert Engine',
                  desc: 'Dangerous threshold breaches (such as Serum Potassium > 6.5 mEq/L or Platelets < 20,000/µL) trigger visual warning banners and automated priority alerts, enabling immediate intervention before patient discharge.',
                  icon: <AlertTriangle size={24} color="#dc2626" />
                },
                {
                  title: 'Dynamic Demographic Range Calibration',
                  desc: 'Normal biological reference ranges are auto-adjusted dynamically based on the patient’s exact age (neonatal, pediatric, geriatric), biological gender, and pregnancy trimesters, eliminating outdated generic brackets.',
                  icon: <Activity size={24} color="#059669" />
                },
                {
                  title: 'Differential Diagnostic Clue Corroboration',
                  desc: 'Cross-analyzes multiple lab panels (e.g. CBC, Liver Function, and Renal Profile) simultaneously to suggest potential differential etiologies such as hemolytic anemia vs nutritional deficiency.',
                  icon: <FileText size={24} color="#0284c7" />
                },
                {
                  title: 'Automated Derived Clinical Ratio Calculations',
                  desc: 'Instantly computes complex derived diagnostic indices including eGFR (CKD-EPI formula), De Ritis Ratio (AST/ALT), Albumin-to-Globulin Ratio, and LDL via Friedewald equation with 100% precision.',
                  icon: <ShieldAlert size={24} color="#ea580c" />
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
                AI Clinical Copilot FAQs
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {aiFaqs.map((faq, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '22px 24px'
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 8 }}>
                    <HelpCircle size={18} color="#7c3aed" style={{ flexShrink: 0 }} />
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
              Equip Your Pathologists with Dual AI Intelligence
            </h2>
            <p style={{ fontSize: 16.5, color: '#cbd5e1', maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Experience automatic impressions and delta check warnings in your daily reporting workflow. Start your 7-day full access trial today.
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
                background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)'
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
                <Phone size={17} /> Talk with AI Specialist (+91 9045757272)
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
