import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ShieldCheck, Lock, Eye, Server, AlertCircle, Mail, CheckCircle } from 'lucide-react'

const sections = [
    {
        icon: <Eye size={20} />, color: '#2563eb', bg: '#eff6ff',
        title: '1. Information We Collect',
        content: [
            { head: 'Account Information', body: 'When your lab registers, we collect the lab owner\'s name, email address, phone number, lab name, address, and billing information required to set up and manage your account.' },
            { head: 'Patient Data (Lab-Entered)', body: 'Information entered by your lab team — patient names, phone numbers, date of birth, test requests, and diagnostic results. This data is your property. We act only as a processor, never as the owner of this data.' },
            { head: 'Usage Data', body: 'We collect anonymized usage logs (pages visited, features used, session duration) to improve product experience. This data cannot be used to identify individual patients.' },
            { head: 'Device & Browser Data', body: 'IP address, browser type, device type, and operating system — collected to ensure compatibility, security, and fraud prevention.' },
        ],
    },
    {
        icon: <Server size={20} />, color: '#7c3aed', bg: '#f5f3ff',
        title: '2. How We Use Your Data',
        content: [
            { head: 'Service Delivery', body: 'To generate automated diagnostic reports, send WhatsApp/SMS notifications to patients on your behalf, and provide the full LIS functionality you\'ve subscribed to.' },
            { head: 'AI Model Training', body: 'We may use anonymized, non-identifiable aggregate data to improve our AI interpretation models. This requires explicit opt-in consent and follows strict anonymization protocols.' },
            { head: 'Billing & Payments', body: 'Subscription billing, invoice generation, and payment processing via Razorpay. Your full card details are never stored on our servers.' },
            { head: 'Customer Support', body: 'To diagnose issues, respond to queries, and provide onboarding/training support to your lab team.' },
        ],
    },
    {
        icon: <Lock size={20} />, color: '#059669', bg: '#ecfdf5',
        title: '3. Data Security & Encryption',
        content: [
            { head: 'Encryption in Transit', body: 'All data exchanged between your browser/app and our servers is encrypted using TLS 1.3 (the same protocol used by banks). No plain-text transmission of any patient data.' },
            { head: 'Encryption at Rest', body: 'Patient records stored in our database are encrypted using AES-256 encryption. Even in the unlikely event of a physical server breach, data remains unreadable.' },
            { head: 'Data Centers', body: 'Hosted on ISO 27001-certified infrastructure (AWS Mumbai region — data stays in India). Automated backups every 4 hours with 30-day retention.' },
            { head: 'Access Control', body: 'Role-based access ensures your technicians, doctors, and admin staff only see the data they need. Multi-factor authentication is available for all account roles.' },
        ],
    },
    {
        icon: <AlertCircle size={20} />, color: '#d97706', bg: '#fffbeb',
        title: '4. Data Sharing & Third Parties',
        content: [
            { head: 'WhatsApp / SMS Providers', body: 'AiSensy and other messaging providers receive only the patient\'s phone number and the pre-formatted report PDF link — nothing else. They are contractually prohibited from using this data for any other purpose.' },
            { head: 'Payment Gateway', body: 'Razorpay receives only transaction metadata needed to process your subscription payment. Patient data is never shared with payment processors.' },
            { head: 'No Data Selling', body: 'We do not sell, rent, or trade your data or your patients\' data to advertisers, data brokers, or any third party for commercial purposes. Ever.' },
            { head: 'Legal Disclosure', body: 'We may disclose data if legally required by Indian law (e.g., court order or government directive). We will notify you within 48 hours of receiving such a request unless legally prohibited.' },
        ],
    },
    {
        icon: <ShieldCheck size={20} />, color: '#0891b2', bg: '#ecfeff',
        title: '5. Your Rights & Data Control',
        content: [
            { head: 'Data Portability', body: 'You can export all your lab data — test masters, patient records, reports — in CSV or PDF format at any time from the Settings > Data Export panel.' },
            { head: 'Account Deletion', body: 'If you cancel your subscription, your data is retained for 30 days so you can export it. After 30 days, it is permanently deleted from our servers. You can also request immediate deletion by emailing us.' },
            { head: 'Data Rectification', body: 'You can correct any account-level information directly from your dashboard. For data entered by your lab staff, your admin account has full edit access.' },
            { head: 'Consent Withdrawal', body: 'If you previously opted in to AI model training, you can withdraw consent at any time from Settings > Privacy. This will not affect your service in any way.' },
        ],
    },
    {
        icon: <Mail size={20} />, color: '#dc2626', bg: '#fef2f2',
        title: '6. Cookies & Tracking',
        content: [
            { head: 'Essential Cookies', body: 'Used for login sessions and security tokens. Cannot be disabled as they are required for the software to function. These never contain personal health data.' },
            { head: 'Analytics Cookies', body: 'We use Mixpanel for anonymized product analytics. You can opt out of analytics tracking from your account Settings > Privacy without affecting functionality.' },
            { head: 'No Advertising Cookies', body: 'We do not run ad networks or retargeting pixels on our platform. No Facebook Pixel, no Google Ads tracking, no third-party behavioral profiling.' },
        ],
    },
]

export default function PrivacyPolicy() {
    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* ── Hero ── */}
            <section style={{ padding: '160px 20px 80px', background: 'linear-gradient(160deg,#ffffff 0%,#eff6ff 60%,#e0eaff 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(219,234,254,0.6) 0%,transparent 70%)', top: -80, right: -80, pointerEvents: 'none' }} />
                <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 72, height: 72, background: '#eff6ff', border: '1px solid #dbeafe', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#2563eb' }}>
                        <ShieldCheck size={32} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px,5vw,58px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Privacy Policy
                    </h1>
                    <p style={{ fontSize: 16, color: '#64748b', fontFamily: "'DM Sans',sans-serif", lineHeight: 1.7, marginBottom: 20 }}>
                        Last updated: June 2026 · Effective immediately for all new and existing accounts.
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 10, padding: '8px 18px', fontSize: 13.5, fontWeight: 600, color: '#15803d', fontFamily: "'DM Sans',sans-serif" }}>
                        <CheckCircle size={15} /> NABL Compliant · HIPAA Aligned · ISO 27001 Certified Infrastructure
                    </div>
                </div>
            </section>

            {/* ── Intro card ── */}
            <section style={{ padding: '48px 20px 0' }}>
                <div style={{ maxWidth: 860, margin: '0 auto', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 20, padding: '32px 36px' }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1d4ed8', fontFamily: "'Syne',sans-serif", marginBottom: 10 }}>Our Commitment to You</h2>
                    <p style={{ fontSize: 15, color: '#1e40af', lineHeight: 1.8, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>
                        At OnePath Lab, we handle two categories of data: <strong>your lab's operational data</strong> (staff, tests, billing) and <strong>your patients' health data</strong>. We treat both with the same level of care — because a breach of medical data doesn't just break trust, it can cause real harm to real people. This document explains exactly what we collect, why, and how we protect it. Plain language. No legalese.
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section style={{ padding: '56px 20px 96px' }}>
                <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
                    {sections.map((s, i) => (
                        <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.07)' }}>
                            {/* Section header */}
                            <div style={{ padding: '24px 32px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 11, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.icon}</div>
                                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", margin: 0 }}>{s.title}</h2>
                            </div>
                            {/* Sub-points */}
                            <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {s.content.map((c, j) => (
                                    <div key={j} style={{ paddingLeft: 16, borderLeft: `3px solid ${s.bg}`, transition: 'border-color 0.2s' }}>
                                        <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 5 }}>{c.head}</div>
                                        <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.8, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{c.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Contact block */}
                    <div style={{ background: '#f8fafc', borderRadius: 20, padding: '32px 36px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-start', gap: 20 }} className="contact-block">
                        <div style={{ width: 48, height: 48, background: '#eff6ff', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}>
                            <Mail size={22} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 8 }}>Questions About This Policy?</h3>
                            <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif", marginBottom: 12 }}>
                                If you have any questions about how we handle your data, want to request a data export, or want to report a potential security concern, contact our Data Protection Officer directly.
                            </p>
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                <a href="mailto:privacy@onepath.in" style={{ fontSize: 14.5, fontWeight: 600, color: '#2563eb', textDecoration: 'none', fontFamily: "'DM Sans',sans-serif" }}>support@onepathlab.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
        @media (max-width: 600px) {
          .contact-block { flex-direction: column !important; }
        }
      `}</style>
        </main>
    )
}