import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Building2, CheckCircle2, ArrowRight, Wallet, ShieldCheck, 
  BarChart3, Zap, HelpCircle, Phone, ScanBarcode, CreditCard, Lock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'B2B Franchise & Collection Center LIS | Prepaid Partner Wallet | OnePath Lab',
  description: 'Scale your diagnostic laboratory network with OnePath B2B Franchise Portal. Multi-branch management, prepaid partner wallet with automated deduct-and-print, tiered B2B rate lists, and live sample tracking.',
  keywords: [
    'b2b franchise pathology software',
    'collection center LIS',
    'prepaid partner wallet lab software',
    'hub and spoke diagnostic network',
    'lab collection center management',
    'b2b rate list pathology',
    'deduct and print pathology software'
  ],
  alternates: {
    canonical: 'https://onepathlab.com/b2b-franchise',
  },
  openGraph: {
    title: 'B2B Franchise & Collection Center LIS | OnePath Lab',
    description: 'Grow your diagnostic network risk-free. Manage satellite collection centers with prepaid partner wallets and automated deduct-and-print rules.',
    url: 'https://onepathlab.com/b2b-franchise',
    siteName: 'OnePath Lab LIS',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Franchise & Prepaid Partner Wallet LIS | OnePath Lab',
    description: 'Eliminate overdue receivables from collection centers with OnePath automated prepaid wallet LIS.',
  },
}

const franchiseFaqs = [
  {
    q: 'How does the "Deduct-and-Print" prepaid wallet eliminate bad debts?',
    a: 'Each satellite collection center has a digital wallet inside OnePath. Centers recharge their wallet balance online via UPI or card. When a center registers a patient and attempts to print or dispatch the final report, OnePath automatically deducts the wholesale B2B test cost from their wallet. If the wallet balance is zero, printing is blocked until recharged—ensuring your central lab is never left with unpaid partner dues!'
  },
  {
    q: 'Can satellite collection centers see reports from our main lab or other centers?',
    a: 'No. OnePath provides strict role-based data partitioning. A collection center login can only view and register patients belonging to their own location. They cannot see data, financial ledgers, or reports from your main lab or other franchise branches.'
  },
  {
    q: 'Can we configure different B2B rate lists for different franchise partners?',
    a: 'Yes. OnePath supports dynamic multi-tier rate lists. You can assign different discount percentages or custom fixed rate cards to individual collection centers, high-volume B2B partners, or corporate clients.'
  },
  {
    q: 'How do collection centers dispatch physical blood samples to the central lab?',
    a: 'Centers generate a digital "Sample Batch Dispatch Sheet" with unique barcodes for EDTA, Serum, and Fluoride tubes. When the courier arrives at your central lab, your accessioning desk scans the batch barcode to acknowledge receipt of all samples in a single click.'
  },
  {
    q: 'Can collection centers customize their own letterhead or contact info on reports?',
    a: 'Yes. You can allow collection centers to have their own address, telephone number, and logo displayed in the report header/footer while maintaining the central laboratory’s pathologist digital signatures.'
  }
]

export default function B2bFranchisePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://onepathlab.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://onepathlab.com/lis-software' },
          { '@type': 'ListItem', 'position': 3, 'name': 'B2B Franchise & Wallet', 'item': 'https://onepathlab.com/b2b-franchise' }
        ]
      },
      {
        '@type': 'TechArticle',
        'headline': 'B2B Franchise & Collection Center LIS with Prepaid Partner Wallet',
        'description': 'Hub-and-spoke diagnostic laboratory management with prepaid partner wallet and automated deduct-and-print rules.',
        'author': {
          '@type': 'Organization',
          'name': 'OnePath Lab'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': franchiseFaqs.map(f => ({
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
          background: 'linear-gradient(180deg, #fffbeb 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <div className="section-badge" style={{ borderLeftColor: '#d97706' }}>
                <Building2 size={14} color="#d97706" style={{ flexShrink: 0 }} />
                <span className="badge-tag">[ HUB &amp; SPOKE NETWORK ]</span>
                <span className="badge-dot" />
                <span className="badge-desc">B2B Franchise &amp; Collection Center Automation</span>
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
                Scale Your Lab Network with{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Prepaid Partner Wallets
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
                Manage 5 to 500+ satellite collection centers without bad debts or overdue follow-ups. Our automated &ldquo;Deduct-and-Print&rdquo; prepaid partner wallet system guarantees that tests are paid for before reports can be printed.
              </p>

              {/* Stat badges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
                textAlign: 'left'
              }}>
                {[
                  { m: '0% Bad Debts', l: 'Prepaid Wallet Security', d: 'Automated deduct-and-print authorization' },
                  { m: 'Unlimited', l: 'Collection Centers', d: 'Grow satellite branches without extra fees' },
                  { m: '1-Click UPI', l: 'Partner Wallet Recharge', d: 'Instant credit via PayU, UPI & PhonePe' },
                  { m: '100% Barcoded', l: 'Sample Logistics Tracking', d: 'Cold-chain batch dispatch & intake' },
                ].map((s, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderTop: '3px solid #d97706',
                    borderRadius: 8,
                    padding: '20px 22px',
                    boxShadow: '0 2px 8px rgba(15,23,42,0.04)'
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 4 }}>
                      {s.m}
                    </div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#d97706', marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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

        {/* ─── The 3 Key Pillars of B2B Automation ─── */}
        <section style={{ padding: '96px 0', background: '#ffffff', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 48px)', boxSizing: 'border-box' }}>
            
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <div className="section-badge" style={{ borderLeftColor: '#d97706' }}>
                  <span className="badge-tag">[ FINANCIAL CONTROL ]</span>
                  <span className="badge-dot" />
                  <span className="badge-desc">How OnePath Protects Cashflow</span>
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
                Eliminate Partner Payment Follow-ups Forever
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 24
            }}>
              {[
                {
                  title: 'Prepaid Wallet & Deduct-and-Print',
                  desc: 'Franchise centers recharge their wallet balance online via QR or UPI. When the collection center clicks to print the finalized report, the B2B wholesale fee is deducted in real-time. If balance is exhausted, printing is paused.',
                  icon: <Wallet size={24} color="#d97706" />
                },
                {
                  title: 'Multi-Tier Dynamic Rate Lists',
                  desc: 'Set different profit margins and pricing slabs for collection centers, corporate tie-ups, and doctor referral commissions. The software automatically applies the correct wholesale rate without manual calculation.',
                  icon: <CreditCard size={24} color="#2563eb" />
                },
                {
                  title: 'Sample Transit Logistics & Accessioning',
                  desc: 'Collection centers generate digital sample dispatch sheets with barcode identification. Your central reference lab scans the incoming courier batch to instantly verify tube counts, temperature status, and patient data.',
                  icon: <ScanBarcode size={24} color="#059669" />
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
                B2B Franchise FAQs
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {franchiseFaqs.map((faq, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 10,
                  padding: '22px 24px'
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 8 }}>
                    <HelpCircle size={18} color="#d97706" style={{ flexShrink: 0 }} />
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
              Expand Your Collection Center Franchise Network Today
            </h2>
            <p style={{ fontSize: 16.5, color: '#cbd5e1', maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Start your 7-day free trial. Test the prepaid partner wallet and B2B rate list system with your own satellite centers risk-free.
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
                background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)'
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
                <Phone size={17} /> Call Franchise Team (+91 9045757272)
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
