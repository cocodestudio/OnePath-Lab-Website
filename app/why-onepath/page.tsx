import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  ShieldCheck, Activity, Zap, CheckCircle2, XCircle, ArrowRight, 
  Server, Lock, Clock, TrendingUp, HelpCircle, Phone, Database,
  FileCheck, Users, Cpu, MessageSquare, Award, Receipt, Network
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why OnePath Lab LIS? | 10x Faster Pathology Software vs Legacy Desktop LIMS',
  description: 'Discover why 200+ NABL & ISO accredited pathology labs across India switched from offline legacy LIMS to OnePath Cloud LIS. 0% typing error, bi-directional analyzer sync, ABDM M1 certified, and 99.99% uptime.',
  keywords: [
    'why onepath lab',
    'cloud lis vs offline lims',
    'pathology lab software comparison',
    'best pathology software india',
    'nabl compliant lis software',
    'abdm certified lis software',
    'machine interfacing pathology software',
    'affordable pathology lims'
  ],
  alternates: {
    canonical: 'https://onepathlab.com/why-onepath',
  },
  openGraph: {
    title: 'Why OnePath Lab LIS? | Cloud LIS Built for Modern Diagnostic Centers',
    description: 'Stop data loss, eliminate manual typing errors, and earn Govt. ABDM DHIS incentives. Discover why 200+ labs trust OnePath Cloud LIS.',
    url: 'https://onepathlab.com/why-onepath',
    siteName: 'OnePath Lab LIS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why OnePath Lab LIS? | The Pathology Software Built for Growth',
    description: 'Zero manual typing, 200+ analyzer connections, instant WhatsApp reports, and certified ABDM M1 integration.',
  },
}

const whyFaqs = [
  {
    q: 'Can we migrate all our existing patient history and test menus from our old software?',
    a: 'Yes, 100%. Our technical deployment team migrates your complete historical patient records, doctor referral ledgers, and customized test rate lists from any legacy offline software (Excel, Access, MS SQL, or proprietary systems) into OnePath within 24 hours with zero downtime.'
  },
  {
    q: 'What happens if our lab internet disconnects during operation?',
    a: 'OnePath includes an offline-resilient local middleware cache. Your bi-directional analyzer bridge continues buffering incoming machine results locally. Once internet connectivity is restored, all data automatically syncs to the cloud vault without losing a single reading.'
  },
  {
    q: 'How does OnePath ensure 0% manual typing errors?',
    a: 'Our proprietary OnePath Bridge Agent connects directly to your hematology, biochemistry, and immunoassay instruments via RS232 COM ports or LAN Ethernet sockets. Results flow digitally straight from the analyzer into the patient report without any technician manual entry.'
  },
  {
    q: 'Is OnePath officially certified for ABDM (Ayushman Bharat Digital Mission)?',
    a: 'Yes. OnePath is officially ABDM Milestone 1 (M1) certified. You can generate ABHA IDs via Aadhaar/Mobile OTP, link diagnostic records to national health lockers, and claim Digital Health Incentive Scheme (DHIS) cash incentives from the Government of India.'
  },
  {
    q: 'Does OnePath comply with NABL and ISO 15189 audit requirements?',
    a: 'Absolutely. OnePath maintains an immutable digital audit trail recording every technician entry, abnormal range edit, and pathologist authorization timestamp. It supports digital doctor signatures and dynamic verification QR codes mandated for NABL accreditation.'
  }
]

export default function WhyOnePathPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://onepathlab.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Why OnePath', 'item': 'https://onepathlab.com/why-onepath' }
        ]
      },
      {
        '@type': 'SoftwareApplication',
        'name': 'OnePath Lab LIS',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web, Cloud, Windows, macOS, Android, iOS',
        'description': 'Modern cloud Laboratory Information System (LIS) with automated bi-directional machine interfacing, ABDM M1 certification, and WhatsApp report delivery.',
        'offers': {
          '@type': 'Offer',
          'price': '3999',
          'priceCurrency': 'INR'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': whyFaqs.map(f => ({
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
          padding: '72px 0 64px',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="section-badge" style={{ borderLeftColor: '#2563eb' }}>
                <span className="badge-tag">[ STRATEGIC ADVANTAGE ]</span>
                <span className="badge-dot" />
                <span className="badge-desc">Why 200+ Pathology Labs Choose OnePath</span>
              </div>
            </div>

            <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'clamp(32px, 5.5vw, 58px)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                letterSpacing: '-0.035em',
                marginBottom: 20,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                Stop Risking Lab Operations on{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Outdated Desktop LIMS
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
                Traditional offline software exposes your laboratory to hard drive crashes, manual typing errors, and expensive annual maintenance contracts. OnePath Cloud LIS delivers real-time bi-directional machine interfacing, instant WhatsApp report dispatch, and verified ABDM M1 compliance in one unified architecture.
              </p>

              {/* Quick Metrics Strip */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
                textAlign: 'left'
              }}>
                {[
                  { metric: '99.99%', label: 'Cloud Uptime SLA', desc: 'Zero local server maintenance or crashes' },
                  { metric: '0%', label: 'Transcription Errors', desc: 'Direct bi-directional machine interfacing' },
                  { metric: '3.5 Hrs', label: 'Saved per Day', desc: 'Automated accessioning & WhatsApp dispatch' },
                  { metric: '₹28,000+', label: 'Monthly Cost Savings', desc: 'Eliminated paper, ink, & server AMC bills' },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderTop: '3px solid #2563eb',
                    borderRadius: 8,
                    padding: '20px 22px',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)'
                  }}>
                    <div style={{ fontSize: 30, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.1, marginBottom: 4 }}>
                      {item.metric}
                    </div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#2563eb', marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── Section 1: The 4 Major Risks of Legacy Desktop Software ─── */}
        <section style={{ padding: '96px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <div className="section-badge" style={{ borderLeftColor: '#dc2626', background: '#fef2f2', borderColor: '#fecaca' }}>
                  <span className="badge-tag" style={{ color: '#dc2626' }}>[ CRITICAL VULNERABILITIES ]</span>
                  <span className="badge-dot" />
                  <span className="badge-desc" style={{ color: '#991b1b' }}>Why Offline Software Fails Pathology Labs</span>
                </div>
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 4.5vw, 42px)',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                maxWidth: 820,
                margin: '0 auto 16px'
              }}>
                The Hidden Costs &amp; Risks of Running on Single-PC Offline Software
              </h2>
              <p style={{ color: '#64748b', fontSize: 16, maxWidth: 660, margin: '0 auto', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Independent and hospital-attached laboratories across India lose thousands of rupees every week due to these 6 structural flaws in legacy software.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: 24
            }}>
              {[
                {
                  title: 'Catastrophic Hard Drive Crashes & Lost Patient Data',
                  offline: 'Local hard drives fail, get corrupted by malware/ransomware, or crash during power cuts. One bad sector means permanent loss of years of patient records and referral ledgers.',
                  onepath: 'Encrypted AWS cloud storage with automated daily multi-region backups. Access your laboratory database securely from any browser, laptop, tablet, or phone 24/7/365 with zero data loss.',
                  icon: <Database size={24} color="#dc2626" />
                },
                {
                  title: 'Manual Typing Errors & Technician Burnout',
                  offline: 'Technicians manually read values off machine screens and type them into computer forms. Industry studies show a 3-5% transcription error rate, risking patient safety and lab reputation.',
                  onepath: 'Bi-directional machine interfacing with 200+ hematology, biochemistry, and immunoassay instruments. Results transfer digitally in milliseconds with 100% mathematical precision.',
                  icon: <Activity size={24} color="#2563eb" />
                },
                {
                  title: 'Zero ABDM Compliance & Missed Govt. Cash Incentives',
                  offline: 'Legacy desktop software does not connect to the Ayushman Bharat Digital Mission (ABDM). Labs cannot create ABHA IDs or link diagnostic reports to national health lockers.',
                  onepath: 'Official ABDM Milestone 1 (M1) & Health Facility Registry (HFR) integration. Create ABHA cards via OTP, push records to Aarogya Setu, and earn Indian Govt DHIS cash rewards up to ₹500/day.',
                  icon: <ShieldCheck size={24} color="#059669" />
                },
                {
                  title: 'Expensive Paper Printing & No Real-time Franchise Control',
                  offline: 'Labs spend ₹6 to ₹10 per patient on pre-printed paper, cartridges, and physical collection logs. Satellite collection centers cannot be monitored without manual phone calls.',
                  onepath: 'Automated WhatsApp PDF delivery with dynamic QR verification. Full B2B franchise portal with prepaid partner wallets—centers can only print reports if their wallet has balance.',
                  icon: <Zap size={24} color="#7c3aed" />
                },
                {
                  title: 'Zero Multi-Branch Sync & Fragmented Doctor Ledgers',
                  offline: 'Franchise collection centers and referring doctors cannot access reports without manual phone calls, emails, or paper courier. Calculating doctor cuts requires tedious, error-prone manual spreadsheets.',
                  onepath: 'Centralized multi-branch cloud portal with automated doctor referral commission ledgers, dedicated doctor logins, and real-time B2B prepaid wallet balances with auto-deduct controls.',
                  icon: <Network size={24} color="#0284c7" />
                },
                {
                  title: 'Exorbitant Upfront Licensing Fees & Mandatory Annual AMCs',
                  offline: 'Vendors demand ₹25,000 to ₹60,000 upfront plus compulsory annual maintenance contracts (AMCs) of ₹8,000–₹15,000/yr. When the software fails or bugs occur, labs wait days for on-site technician visits.',
                  onepath: 'Predictable, all-inclusive SaaS subscription starting at just ₹3,999. Includes continuous feature upgrades, bi-directional analyzer interfacing, automatic cloud backups, and 24/7 priority remote support.',
                  icon: <Receipt size={24} color="#ea580c" />
                },
              ].map((card, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 12,
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  boxShadow: '0 4px 16px -4px rgba(15,23,42,0.04)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 8,
                      background: '#f8fafc', border: '1px solid #e2e8f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {card.icon}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0, lineHeight: 1.3 }}>
                      {card.title}
                    </h3>
                  </div>

                  <div style={{ background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: 8, padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <XCircle size={14} /> The Offline Software Flaw
                    </div>
                    <p style={{ fontSize: 13.5, color: '#991b1b', lineHeight: 1.55, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {card.offline}
                    </p>
                  </div>

                  <div style={{ background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: 8, padding: '14px 16px', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 800, color: '#16a34a', textTransform: 'uppercase', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <CheckCircle2 size={14} /> The OnePath Cloud Solution
                    </div>
                    <p style={{ fontSize: 13.5, color: '#166534', lineHeight: 1.55, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {card.onepath}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── Section 2: Detailed Head-to-Head Comparison Table ─── */}
        <section style={{ padding: '96px 0', background: '#f8fafc', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <div className="section-badge" style={{ borderLeftColor: '#2563eb' }}>
                  <span className="badge-tag">[ ARCHITECTURE MATRIX ]</span>
                  <span className="badge-dot" />
                  <span className="badge-desc">Head-to-Head Capability Comparison</span>
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
                How OnePath Compares Against Other Options
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
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: 700 }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '16px 20px', fontSize: 13.5, fontWeight: 800, color: '#334155', fontFamily: "'Plus Jakarta Sans', sans-serif", width: '35%' }}>Feature / Capability</th>
                      <th style={{ padding: '16px 20px', fontSize: 14, fontWeight: 800, color: '#2563eb', background: '#eff6ff', fontFamily: "'Plus Jakarta Sans', sans-serif", width: '25%' }}>OnePath Cloud LIS</th>
                      <th style={{ padding: '16px 20px', fontSize: 13.5, fontWeight: 700, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif", width: '20%' }}>Legacy Offline Software</th>
                      <th style={{ padding: '16px 20px', fontSize: 13.5, fontWeight: 700, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif", width: '20%' }}>Enterprise Hospital ERP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { f: 'Analyzer Interfacing (200+ models)', op: 'Included (Bi-directional bridge)', off: 'Expensive extra module or unavailable', erp: 'Custom coding (₹50k+ extra)' },
                      { f: 'Dedicated Front-Desk Receptionist Role', op: 'Included (Fast intake, billing & queue)', off: 'Single login without role protection', erp: 'Complex manual role setup' },
                      { f: 'Reagent Stock & Expiry Management', op: 'Included (2-8°C cold chain & batch alerts)', off: 'Manual paper register or Excel', erp: 'Expensive add-on module' },
                      { f: 'ABDM Milestone 1 (M1) Certified', op: 'Built-in (National Health Locker sync)', off: 'Not supported (Fails govt mandate)', erp: 'Often requires 3rd-party broker' },
                      { f: 'Govt. DHIS Cash Incentives Tracking', op: 'Automated claim reporting', off: 'No support', erp: 'Manual reconciliation' },
                      { f: 'WhatsApp Business API PDF Delivery', op: 'Direct with dynamic verification QR', off: 'Manual copy-paste or third-party tool', erp: 'Additional per-message surcharge' },
                      { f: 'Dual AI Copilot & Delta Checks', op: 'Gemini + Groq clinical reasoning', off: 'None', erp: 'Rule-based basic limits only' },
                      { f: 'B2B Franchise & Prepaid Partner Wallet', op: 'Integrated deduct-and-print engine', off: 'None (manual paper ledger)', erp: 'Complex manual invoicing' },
                      { f: 'Hardware & OS Requirements', op: 'Any Device (PC, Mac, Tablet, Mobile)', off: 'Single dedicated Windows PC only', erp: 'Heavy on-premise local server' },
                      { f: 'Automatic Cloud Backups', op: 'Hourly encrypted AWS backups', off: 'Manual pen-drive backup (often forgotten)', erp: 'IT technician required on-site' },
                      { f: 'Pricing Transparency', op: '₹3,999 / 6 mo or ₹5,999 / yr', off: '₹25,000 upfront + ₹5,000/yr AMC', erp: '₹1,50,000+ setup fees' },
                      { f: 'Support Response SLA', op: '< 15 mins via WhatsApp / Phone', off: '3-5 days waiting for local technician', erp: 'Corporate ticket queue system' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9', background: idx % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                        <td style={{ padding: '14px 20px', fontSize: 13.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {row.f}
                        </td>
                        <td style={{ padding: '14px 20px', fontSize: 13.5, fontWeight: 700, color: '#1d4ed8', background: '#f8fafc', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <CheckCircle2 size={15} color="#2563eb" /> {row.op}
                          </span>
                        </td>
                        <td style={{ padding: '14px 20px', fontSize: 13, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                            <XCircle size={14} color="#94a3b8" /> {row.off}
                          </span>
                        </td>
                        <td style={{ padding: '14px 20px', fontSize: 13, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {row.erp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Section 3: Compliance & Security Trust Badges ─── */}
        <section style={{ padding: '80px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '40px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 28
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <Award size={22} color="#059669" />
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    NABL &amp; ISO 15189 Ready
                  </h3>
                </div>
                <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Maintains an immutable digital audit log recording every technician data entry, machine raw reading, and pathologist approval timestamp for seamless NABL audits.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <Lock size={22} color="#2563eb" />
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    HIPAA &amp; DPDP Act 2023
                  </h3>
                </div>
                <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Complies strictly with India&apos;s Digital Personal Data Protection Act 2023. Patient diagnostic records are encrypted in transit (TLS 1.3) and at rest (AES-256).
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <Server size={22} color="#7c3aed" />
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    AWS High-Availability Cluster
                  </h3>
                </div>
                <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Hosted in enterprise Mumbai AWS data centers with auto-scaling compute and real-time database replication, providing 99.99% proven uptime during peak morning rush hours.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Section 4: FAQs ─── */}
        <section style={{ padding: '80px 0', background: '#f8fafc', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <div className="section-badge" style={{ borderLeftColor: '#2563eb' }}>
                  <span className="badge-tag">[ COMMON QUESTIONS ]</span>
                  <span className="badge-dot" />
                  <span className="badge-desc">Switching to OnePath</span>
                </div>
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {whyFaqs.map((faq, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '22px 24px',
                  boxShadow: '0 1px 3px rgba(15,23,42,0.03)'
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
              Upgrade Your Laboratory to OnePath Cloud Today
            </h2>
            <p style={{ fontSize: 16.5, color: '#cbd5e1', maxWidth: 640, margin: '0 auto 32px', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Join 200+ forward-thinking diagnostic centers. Start your full-featured 7-day free trial now or speak directly with our senior laboratory technology team.
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
                <Phone size={17} /> Call Support (+91 9045757272)
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
