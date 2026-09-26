import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  CheckCircle2, XCircle, ArrowRight, ShieldCheck, Zap, 
  HelpCircle, Phone, Mail, Building2, Sparkles, MessageCircle, 
  Layers, Database, Clock, Award, Activity, Cpu
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'OnePath Lab LIS Pricing & Plans | Transparent B2B Pathology Software Rates',
  description: 'Transparent, affordable pricing for diagnostic labs. 6-Month Plan at ₹3,999 total (₹666/mo), 1-Year Plan at ₹5,999 total (₹499/mo), and Custom Enterprise Plans for multi-year hospital chains. 7-day free trial, no credit card required.',
  keywords: [
    'pathology software pricing',
    'LIS software cost india',
    'lims pricing',
    'onepath lab plans',
    'affordable pathology software',
    'laboratory software subscription',
    'enterprise hospital LIS',
    'multi year pathology software licensing'
  ],
  alternates: {
    canonical: 'https://www.onepathlab.com/pricing',
  },
  openGraph: {
    title: 'OnePath Lab LIS Pricing | Transparent Pathology Software Plans',
    description: 'No per-test fees, no expensive server AMC. Explore our 6-Month, 1-Year, and Custom Multi-Year Enterprise Organization plans.',
    url: 'https://www.onepathlab.com/pricing',
    siteName: 'OnePath Lab LIS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnePath Lab LIS Pricing & Plans',
    description: 'Cloud LIS starting at ₹3,999 for 6 months. Machine interfacing, WhatsApp reports, and ABDM M1 certification included.',
  },
}

const pricingFaqs = [
  {
    q: 'Are there any hidden costs or per-test royalties?',
    a: 'Zero. Unlike other software vendors who charge per patient or per report, OnePath charges a simple flat subscription fee. You can register 50 or 5,000 patients a day without any extra software cost.'
  },
  {
    q: 'Do you charge extra for connecting our lab analyzers?',
    a: 'No. Bi-directional machine interfacing for your laboratory analyzers (hematology, biochemistry, immunoassay) is completely included in all active plans. Our technical team configures your serial/LAN bridge remotely at no extra setup charge.'
  },
  {
    q: 'What happens when our included WhatsApp report credits run out?',
    a: 'You can instantly top-up WhatsApp credits directly inside your dashboard at our wholesale cost of just 25 paise per message. Your reports are never interrupted.'
  },
  {
    q: 'How does the Enterprise / Organization Plan work for multi-year licensing?',
    a: 'For multi-branch diagnostic chains, corporate hospital networks, or labs wanting 2-year, 3-year, or 5-year locked-in agreements, we offer substantial enterprise volume discounts, dedicated account managers, and custom HIS/EHR API integrations. Contact our enterprise sales desk via phone or email for a customized contract.'
  },
  {
    q: 'Can we switch from the 6-Month Plan to the 1-Year or Enterprise Plan later?',
    a: 'Yes. You can upgrade your plan at any time from your account settings. The remaining pro-rated value of your current plan will be credited towards your upgrade.'
  }
]

export default function PricingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.onepathlab.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Pricing', 'item': 'https://www.onepathlab.com/pricing' }
        ]
      },
      {
        '@type': 'Product',
        'name': 'OnePath Lab Cloud LIS',
        'description': 'Cloud Laboratory Information System for diagnostic pathology labs with machine interfacing, ABDM M1 certification, and WhatsApp PDF delivery.',
        'brand': {
          '@type': 'Brand',
          'name': 'OnePath Lab'
        },
        'offers': [
          {
            '@type': 'Offer',
            'name': '6-Month Growth Plan',
            'price': '3999',
            'priceCurrency': 'INR',
            'priceValidUntil': '2027-12-31',
            'availability': 'https://schema.org/InStock',
            'url': 'https://www.onepathlab.com/pricing'
          },
          {
            '@type': 'Offer',
            'name': '1-Year Pro Plan',
            'price': '5999',
            'priceCurrency': 'INR',
            'priceValidUntil': '2027-12-31',
            'availability': 'https://schema.org/InStock',
            'url': 'https://www.onepathlab.com/pricing'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': pricingFaqs.map(f => ({
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
        
        {/* ─── Hero Section (Full-Width Edge-to-Edge) ─── */}
        <section style={{ 
          padding: '72px 0 56px',
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
                borderLeft: '3px solid #16a34a',
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
                <span>[ TRANSPARENT PRICING ]</span>
                <span style={{ color: '#475569' }}>Zero Hidden Machine Fees · 100% Predictable SaaS</span>
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
                Simple, High-Value Pricing for{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Laboratories of Any Scale
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(16px, 2.2vw, 19px)',
                color: '#475569',
                lineHeight: 1.68,
                maxWidth: 780,
                margin: '0 auto 28px',
                fontWeight: 500,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Start with a 7-day full-access free trial. No credit card required, zero installation fees, and free technical migration of your existing patient records.
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 16,
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: 8,
                padding: '10px 20px',
                fontSize: 13.5,
                fontWeight: 600,
                color: '#1e40af',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                <span>✓ Unlimited Patients &amp; Tests</span>
                <span>•</span>
                <span>✓ 200+ Analyzers Connected</span>
                <span>•</span>
                <span>✓ ABDM M1 Certified</span>
              </div>
            </div>

          </div>
        </section>

        {/* ─── The 3 Plans Cards (6-Month, 1-Year, Enterprise) ─── */}
        <section style={{ padding: '80px 0 96px', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: 28,
              alignItems: 'stretch'
            }}>
              
              {/* ─── Plan 1: 6-Month Plan ─── */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: 12,
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 4px 16px -4px rgba(15,23,42,0.06)'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  borderRadius: 4,
                  padding: '4px 10px',
                  fontSize: 11.5,
                  fontWeight: 800,
                  color: '#475569',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  width: 'fit-content',
                  marginBottom: 16,
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Starter Lab Solution
                </div>

                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', margin: '0 0 6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  6-Month Growth Plan
                </h2>
                <p style={{ fontSize: 13.5, color: '#64748b', margin: '0 0 24px', lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Ideal for new diagnostic setups, solo pathologists, and labs transitioning from paper or desktop systems.
                </p>

                <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 44, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.03em' }}>
                      ₹3,999
                    </span>
                    <span style={{ fontSize: 14, color: '#64748b', fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      total for 6 months
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: '#059669', fontWeight: 700, marginTop: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Effectively ₹666 / month (All features included)
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36, flex: 1 }}>
                  {[
                    'Unlimited Patients & Pathology Reports',
                    '200+ Machine Interfacing (Sysmex, Mindray, Erba, etc.)',
                    '1,500 Included WhatsApp Reports with Dynamic QR',
                    'Govt. ABDM / ABHA M1 Integration (PHR sync)',
                    'B2B Franchise Portal (Up to 3 Collection Centers)',
                    'Dual AI Clinical Copilot (Out-of-range detection)',
                    'Daily Cash, UPI & Patient Due Reconciliation',
                    'GST Billing & Tax Invoice Generation',
                    'Dedicated Front-Desk Receptionist Role & Barcode Queue',
                    'Reagent Inventory & Stock Management with Expiry Alerts',
                    '24/7 WhatsApp & Phone Support',
                  ].map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#334155', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <CheckCircle2 size={16} color="#16a34a" style={{ marginTop: 2, flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link href="/trial?plan=6month" style={{
                  padding: '14px 24px',
                  fontSize: 15,
                  borderRadius: 8,
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1.5px solid #0f172a',
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'all 0.2s ease'
                }}>
                  Start 7-Day Free Trial <ArrowRight size={16} />
                </Link>
              </div>

              {/* ─── Plan 2: 1-Year Pro Plan (Most Popular) ─── */}
              <div style={{
                background: '#ffffff',
                border: '2px solid #2563eb',
                borderRadius: 12,
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 12px 36px -8px rgba(37,99,235,0.18)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: -13,
                  left: 28,
                  background: '#2563eb',
                  color: '#ffffff',
                  fontSize: 11,
                  fontWeight: 800,
                  padding: '3px 12px',
                  borderRadius: 4,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Most Popular · Best Value
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  borderRadius: 4,
                  padding: '4px 10px',
                  fontSize: 11.5,
                  fontWeight: 800,
                  color: '#2563eb',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  width: 'fit-content',
                  marginBottom: 16,
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Complete Diagnostic Suite
                </div>

                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', margin: '0 0 6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  1-Year Pro Plan
                </h2>
                <p style={{ fontSize: 13.5, color: '#64748b', margin: '0 0 24px', lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Engineered for established pathology centers, multi-technician facilities, and reference labs aiming to maximize efficiency and DHIS rewards.
                </p>

                <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 44, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.03em' }}>
                      ₹5,999
                    </span>
                    <span style={{ fontSize: 14, color: '#64748b', fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      total for 12 months
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: '#2563eb', fontWeight: 700, marginTop: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Effectively ₹499 / month (Save 38% vs half-yearly renewal)
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36, flex: 1 }}>
                  {[
                    'Everything in 6-Month Plan, PLUS:',
                    '3,500 Included WhatsApp Reports (Over 2x more credits)',
                    'Advanced AI Copilot with Historical Delta Checks & Panic Alerts',
                    'Unlimited B2B Franchise Centers with Deduct-and-Print Wallet',
                    'Full ABDM M1 + HFR Sync to Claim Govt. DHIS Cash Incentives',
                    'Custom Doctor Digital Signatures & Dynamic QR Watermarking',
                    'Multi-Counter Front-Desk Reception Terminals with Role Privileges',
                    'Advanced Reagent Stock Tracking with Cold Chain (2-8°C) Logs',
                    'Priority High-Speed Server Cluster for Instant PDF Rendering',
                    'Free VIP Onboarding & Technician Video Training',
                    '1-Year Immutable Cloud Backup & NABL Audit Trail Retention',
                    'Priority 15-Minute Support SLA via Phone & WhatsApp',
                  ].map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: i === 0 ? '#0f172a' : '#334155', fontWeight: i === 0 ? 800 : 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <CheckCircle2 size={16} color="#2563eb" style={{ marginTop: 2, flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link href="/trial?plan=1year" className="btn-primary" style={{
                  padding: '14px 24px',
                  fontSize: 15,
                  borderRadius: 8,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  boxShadow: '0 8px 24px -4px rgba(37,99,235,0.45)'
                }}>
                  Start 7-Day Free Trial <ArrowRight size={16} />
                </Link>
              </div>

              {/* ─── Plan 3: Enterprise / Organization Plan ─── */}
              <div style={{
                background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
                border: '1.5px solid #94a3b8',
                borderRadius: 12,
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 4px 16px -4px rgba(15,23,42,0.06)'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  borderRadius: 4,
                  padding: '4px 10px',
                  fontSize: 11.5,
                  fontWeight: 800,
                  color: '#0f172a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  width: 'fit-content',
                  marginBottom: 16,
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Multi-Year &amp; Hospital Chains
                </div>

                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', margin: '0 0 6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Enterprise Organization
                </h2>
                <p style={{ fontSize: 13.5, color: '#64748b', margin: '0 0 24px', lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  For diagnostic chains, hospital networks, and labs requiring 2-year, 3-year, or 5-year locked-in pricing with custom integrations.
                </p>

                <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 36, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}>
                      Custom Quote
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: '#475569', fontWeight: 600, marginTop: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Locked multi-year discounts (2 to 5 years contracts)
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36, flex: 1 }}>
                  {[
                    'Unlimited Hub & Spoke Collection Center Network',
                    'Dedicated Local Analyzer Middleware Bridge Server Nodes',
                    'Custom Hospital HIS / EHR / HL7 / FHIR API Integration',
                    'Dedicated WhatsApp API Sender ID (Green Tick Support)',
                    'Multi-Branch Consolidated Financial MIS & Group Accounting',
                    'Multi-Tier Pathologist Authorization Hierarchy & Roles',
                    'Custom Report Letterhead Designer & White-Label Layouts',
                    'Dedicated Account Manager with 15-Minute Critical Resolution SLA',
                    'On-Site or Comprehensive Remote Team Training',
                    'Priority Custom Feature Engineering Requests',
                  ].map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#334155', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <CheckCircle2 size={16} color="#7c3aed" style={{ marginTop: 2, flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a
                    href="mailto:support@onepathlab.com?subject=Enterprise%20Multi-Year%20Inquiry%20for%20OnePath%20LIS"
                    style={{
                      padding: '13px 20px',
                      fontSize: 14.5,
                      borderRadius: 8,
                      background: '#0f172a',
                      color: '#ffffff',
                      fontWeight: 700,
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    <Mail size={16} /> Email: support@onepathlab.com
                  </a>

                  <a
                    href="tel:+919045757272"
                    style={{
                      padding: '13px 20px',
                      fontSize: 14.5,
                      borderRadius: 8,
                      background: '#ffffff',
                      color: '#0f172a',
                      border: '1px solid #cbd5e1',
                      fontWeight: 700,
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}
                  >
                    <Phone size={16} color="#2563eb" /> Call Sales: +91 9045757272
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ─── Comprehensive 30+ Feature Comparison Matrix ─── */}
        <section style={{ padding: '80px 0', background: '#f8fafc', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
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
                  <span>[ GRANULAR BREAKDOWN ]</span>
                  <span>Feature Comparison Matrix</span>
                </div>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 4.5vw, 40px)',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Compare Plans Side-by-Side
              </h2>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 8px 30px -8px rgba(15,23,42,0.06)'
            }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: 720 }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '16px 20px', fontSize: 13.5, fontWeight: 800, color: '#334155', fontFamily: "'Plus Jakarta Sans', sans-serif", width: '38%' }}>Capability</th>
                      <th style={{ padding: '16px 20px', fontSize: 13.5, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", width: '20%' }}>6-Month Plan (₹3,999)</th>
                      <th style={{ padding: '16px 20px', fontSize: 14, fontWeight: 800, color: '#2563eb', background: '#eff6ff', fontFamily: "'Plus Jakarta Sans', sans-serif", width: '22%' }}>1-Year Pro (₹5,999)</th>
                      <th style={{ padding: '16px 20px', fontSize: 13.5, fontWeight: 800, color: '#7c3aed', fontFamily: "'Plus Jakarta Sans', sans-serif", width: '20%' }}>Enterprise Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat: 'Capacity & Infrastructure' },
                      { f: 'Daily Patient Registrations', p6: 'Unlimited', p1: 'Unlimited', pe: 'Unlimited' },
                      { f: 'Diagnostic Report Generation', p6: 'Unlimited', p1: 'Unlimited', pe: 'Unlimited' },
                      { f: 'Concurrent User Logins', p6: 'Unlimited', p1: 'Unlimited', pe: 'Unlimited' },
                      { f: 'Multi-Branch Hub & Spoke Server', p6: 'Up to 3 centers', p1: 'Unlimited branches', pe: 'Unlimited branches + Multi-city' },
                      { f: 'Automated Cloud Backup', p6: 'Daily', p1: 'Daily + Hourly snapshots', pe: 'Continuous real-time replication' },

                      { cat: 'Analyzer Interfacing & Hardware' },
                      { f: 'Bi-directional Machine Bridge (200+ Analyzers)', p6: 'Included (ASTM/HL7)', p1: 'Included (ASTM/HL7)', pe: 'Custom protocols & on-premise nodes' },
                      { f: 'Barcode Tube Accessioning & Printing', p6: 'Yes (EDTA, Serum, etc.)', p1: 'Yes', pe: 'Yes + High-speed industrial batching' },
                      { f: 'Zero-Typing Automatic Value Injection', p6: 'Yes', p1: 'Yes', pe: 'Yes' },

                      { cat: 'Front-Desk & Reagent Inventory' },
                      { f: 'Dedicated Front-Desk Receptionist Portal', p6: 'Yes (Restricted medical edit locks)', p1: 'Yes (Multi-counter & tokens)', pe: 'Enterprise front-office cluster' },
                      { f: 'Reagent Stock Tracking & Expiry Alerts', p6: 'Yes (Batch & expiry monitoring)', p1: 'Yes (2-8°C cold chain & low-stock alerts)', pe: 'Multi-warehouse auto-purchase orders' },

                      { cat: 'ABDM (Govt. of India) & ABHA' },
                      { f: 'ABDM Milestone 1 (M1) Certified', p6: 'Yes', p1: 'Yes', pe: 'Yes' },
                      { f: 'Instant ABHA ID Creation (Aadhaar/Mobile)', p6: 'Yes', p1: 'Yes', pe: 'Yes' },
                      { f: 'National Health Locker (PHR) Sync', p6: 'Yes', p1: 'Yes', pe: 'Yes' },
                      { f: 'Govt. DHIS Cash Incentives Reporting', p6: 'Basic', p1: 'Advanced real-time tracking', pe: 'Automated treasury reconciliation' },

                      { cat: 'AI Clinical Copilot & Safety' },
                      { f: 'AI Out-of-Range Clinical Impression', p6: 'Standard', p1: 'Advanced Gemini + Groq', pe: 'Customized clinical rules' },
                      { f: 'Historical Delta Checks against Past Tests', p6: 'No', p1: 'Yes (Auto-flagged)', pe: 'Yes (Multi-facility historical data)' },
                      { f: 'Critical Panic Value Alert Warning', p6: 'No', p1: 'Yes (Instant alert)', pe: 'Yes (SMS, WhatsApp, Audio alarm)' },

                      { cat: 'Patient Experience & Reporting' },
                      { f: 'WhatsApp Business API Delivery Included', p6: '1,500 Credits', p1: '3,500 Credits', pe: 'Custom Volume + Dedicated Sender ID' },
                      { f: 'Dynamic Authenticity Verification QR', p6: 'Yes', p1: 'Yes', pe: 'Yes' },
                      { f: 'Digital Pathologist Signature Watermarking', p6: 'Yes', p1: 'Yes', pe: 'Multi-tier digital sign-off matrix' },

                      { cat: 'B2B Franchise & Billing' },
                      { f: 'Prepaid Partner Wallet (Deduct-and-Print)', p6: 'Up to 3 centers', p1: 'Unlimited centers', pe: 'Unlimited centers + Credit lines' },
                      { f: 'Multi-Tier Doctor Referral Commissions', p6: 'Yes', p1: 'Yes', pe: 'Yes + Automated direct payout sync' },
                      { f: 'Financial MIS & GST Counter Billing', p6: 'Yes', p1: 'Yes', pe: 'Yes + ERP integration' },

                      { cat: 'Support & SLAs' },
                      { f: 'Free Historical Data Migration', p6: 'Standard (within 48 hrs)', p1: 'Priority (within 24 hrs)', pe: 'Dedicated engineer on-call' },
                      { f: 'Support Response Guarantee', p6: 'Within 2 hours', p1: '< 15 mins priority', pe: 'Dedicated Account Manager (< 10 mins)' },
                    ].map((row, idx) => {
                      if ('cat' in row) {
                        return (
                          <tr key={idx} style={{ background: '#f8fafc', borderTop: '2px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                            <td colSpan={4} style={{ padding: '12px 20px', fontSize: 12.5, fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                              {row.cat}
                            </td>
                          </tr>
                        )
                      }
                      return (
                        <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '12px 20px', fontSize: 13.5, fontWeight: 600, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {row.f}
                          </td>
                          <td style={{ padding: '12px 20px', fontSize: 13, color: '#475569', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {row.p6}
                          </td>
                          <td style={{ padding: '12px 20px', fontSize: 13, fontWeight: 700, color: '#1d4ed8', background: '#f8fafc', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {row.p1}
                          </td>
                          <td style={{ padding: '12px 20px', fontSize: 13, color: '#6b21a8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {row.pe}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Pricing FAQs ─── */}
        <section style={{ padding: '80px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
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
                  <span>[ PRICING CLARIFICATIONS ]</span>
                  <span>Everything Answered</span>
                </div>
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Frequently Asked Pricing Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {pricingFaqs.map((faq, i) => (
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

        {/* ─── Bottom Call to Action ─── */}
        <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', textAlign: 'center', boxSizing: 'border-box' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 800, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#ffffff' }}>
              Test OnePath Free in Your Lab for 7 Days
            </h2>
            <p style={{ fontSize: 16.5, color: '#cbd5e1', maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Experience the power of bi-directional analyzer interfacing and automated WhatsApp reporting firsthand with zero financial commitment.
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
              <a href="https://api.whatsapp.com/send?phone=9045757272&text=Hello%20OnePath,%20I%20have%20questions%20regarding%20pricing" target="_blank" rel="noreferrer" style={{
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
                <MessageCircle size={18} /> Chat with Sales on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
