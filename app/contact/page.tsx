import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactFaq from './ContactFaq'
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle, Headphones, Settings, UserCog } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Contact Sales & 24/7 Technical Support | OnePath Lab LIS',
    description: 'Get in touch with OnePath Lab. Connect with our dedicated sales & clinical onboarding engineers via WhatsApp, call (+91 9045757272), or email. 24/7 emergency support for active diagnostic laboratories.',
    alternates: {
        canonical: 'https://onepathlab.com/contact',
    },
    openGraph: {
        title: 'Contact Sales & 24/7 Technical Support | OnePath Lab LIS',
        description: 'Connect with OnePath Lab sales and onboarding engineers. 24/7 support for clinical diagnostics and pathology labs across India.',
        url: 'https://onepathlab.com/contact',
        siteName: 'OnePath Lab',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact OnePath Lab | 24/7 LIS Software Support',
        description: 'Need onboarding or machine interfacing assistance? Talk to certified LIS specialists.',
    },
}

const contactCards = [
    {
        icon: <Phone size={22} />, title: 'Sales Enquiry', sub: 'Talk to our sales team', color: '#2563eb', bg: '#eff6ff',
        lines: ['+91 9045757272', '+91 9045757272'],
        note: 'Mon–Sat, 8 AM to 9 PM IST',
    },
    {
        icon: <Mail size={22} />, title: 'Email Us', sub: 'We reply within 2 hours', color: '#7c3aed', bg: '#f5f3ff',
        lines: ['support@onepathlab.com'],
        note: 'For billing queries: support@onepathlab.com',
    },
    {
        icon: <MapPin size={22} />, title: 'Visit Us', sub: 'Head office', color: '#059669', bg: '#ecfdf5',
        lines: ['Street No 04, Tibba Road', 'Mayapuri Chowk, Ludhiana Punjab 141007'],
        note: 'By appointment only',
    },
    {
        icon: <Clock size={22} />, title: 'Support Hours', sub: 'Technical support', color: '#d97706', bg: '#fffbeb',
        lines: ['Mon–Sat: 8 AM – 9 PM', 'Sunday: 10 AM – 6 PM'],
        note: 'Emergency line: 24×7 for active clients',
    },
]

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'OnePath Lab Contact & Support',
    'url': 'https://onepathlab.com/contact',
    'mainEntity': {
        '@type': 'Organization',
        'name': 'OnePath Lab',
        'url': 'https://onepathlab.com',
        'contactPoint': [
            {
                '@type': 'ContactPoint',
                'telephone': '+91-9045757272',
                'contactType': 'sales',
                'areaServed': 'IN',
                'availableLanguage': ['English', 'Hindi']
            },
            {
                '@type': 'ContactPoint',
                'telephone': '+91-9045757272',
                'contactType': 'technical support',
                'areaServed': 'IN',
                'availableLanguage': ['English', 'Hindi']
            }
        ]
    }
}

export default function ContactSupport() {
    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* ── Hero ── */}
            <section style={{
                padding: 'clamp(115px, 15vw, 160px) 16px 60px',
                background: 'linear-gradient(160deg,#ffffff 0%,#eff6ff 60%,#e0eaff 100%)',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(219,234,254,0.5) 0%,transparent 70%)', top: -100, right: -100, pointerEvents: 'none' }} />
                <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 100, padding: '6px 18px', fontSize: 13, fontWeight: 600, color: '#2563eb', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 28, boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                        Sales &amp; Support Infrastructure
                    </div>
                    <h1 style={{ fontSize: 'clamp(32px,6vw,62px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 20, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                        We&apos;re Here to<br /><span style={{ color: '#2563eb' }}>Help You Scale</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#475569', lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                        Whether you need a personalized product demo, data migration assistance, or immediate technical support — our certified LIS experts are just a call or message away.
                    </p>
                </div>
            </section>

            {/* ── Contact Cards ── */}
            <section style={{ padding: '0 16px', marginTop: '-32px', position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 230px),1fr))', gap: 16 }}>
                    {contactCards.map((c, i) => (
                        <div key={i} style={{ background: '#ffffff', borderRadius: 20, padding: '24px 20px', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px -8px rgba(0,0,0,0.09)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 4 }}>
                                <div style={{ width: 46, height: 46, borderRadius: 13, background: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.icon}</div>
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.title}</div>
                                    <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.sub}</div>
                                </div>
                            </div>
                            {c.lines.map((l, j) => (
                                <div key={j} style={{ fontSize: 14.5, fontWeight: 600, color: '#1e293b', fontFamily: "'Plus Jakarta Sans',sans-serif", wordBreak: 'break-word' }}>{l}</div>
                            ))}
                            <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 4 }}>{c.note}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── WhatsApp + Support Architecture ── */}
            <section style={{ padding: '60px 16px 80px' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 48, alignItems: 'start' }} className="contact-grid">

                    {/* Left: Quick Chat & Trust Points */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div>
                            <h2 style={{ fontSize: 'clamp(24px, 4vw, 30px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 12, letterSpacing: '-0.02em' }}>
                                Need Immediate Help?
                            </h2>
                            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                                For immediate queries, migration planning, or software demonstrations, drop us a message on our official WhatsApp channel.
                            </p>
                        </div>

                        <a href="https://wa.me/919045757272?text=Hi%2C%20I%20want%20to%20know%20more%20about%20OnePath%20Lab%20software" target="_blank" rel="noreferrer"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: '#22c55e', color: '#ffffff', textDecoration: 'none', fontWeight: 700, fontSize: 16, padding: '16px 20px', borderRadius: 16, fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: '0 8px 28px rgba(34,197,94,0.35)', transition: 'all 0.2s', textAlign: 'center' }}>
                            <MessageCircle size={22} style={{ flexShrink: 0 }} />
                            Chat with Sales / Support
                        </a>

                        {/* Trust points */}
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 16, padding: '20px' }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 16 }}>Our Service Commitment</div>
                            {[
                                'Free onboarding & zero-loss data migration',
                                'Dedicated account manager for first 3 months',
                                'No long-term contracts — cancel anytime',
                                'Response SLA: Under 15 mins on active channels',
                                'Unlimited training sessions for your staff',
                            ].map((pt, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#334155', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, marginBottom: 12 }}>
                                    <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                                    {pt}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Enterprise Support Escalation Matrix */}
                    <div className="escalation-card" style={{ background: '#ffffff', borderRadius: 24, padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08)' }}>
                        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 6, letterSpacing: '-0.02em' }}>Enterprise Support Architecture</h2>
                        <p style={{ fontSize: 14, color: '#64748b', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 32, lineHeight: 1.6 }}>
                            We don&apos;t just sell software; we partner in your operations. Our 3-tier support system ensures your lab never faces downtime.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            {/* L1 Support */}
                            <div style={{ display: 'flex', gap: 16 }}>
                                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Headphones size={22} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                                        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>L1 Helpdesk &amp; Training</h4>
                                        <span style={{ fontSize: 11, fontWeight: 700, background: '#dcfce7', color: '#16a34a', padding: '2px 8px', borderRadius: 100, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>&lt; 15 Min SLA</span>
                                    </div>
                                    <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                                        For day-to-day operational queries, report template adjustments, billing issues, and immediate staff training needs.
                                    </p>
                                </div>
                            </div>

                            <div style={{ height: 1, background: '#f1f5f9', width: '100%' }} />

                            {/* L2 Support */}
                            <div style={{ display: 'flex', gap: 16 }}>
                                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Settings size={22} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                                        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>L2 Clinical Engineering</h4>
                                        <span style={{ fontSize: 11, fontWeight: 700, background: '#fef3c7', color: '#d97706', padding: '2px 8px', borderRadius: 100, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>&lt; 2 Hr SLA</span>
                                    </div>
                                    <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                                        For machine interfacing errors, bi-directional connectivity setup, complex API integrations, and database migrations.
                                    </p>
                                </div>
                            </div>

                            <div style={{ height: 1, background: '#f1f5f9', width: '100%' }} />

                            {/* L3 Support */}
                            <div style={{ display: 'flex', gap: 16 }}>
                                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <UserCog size={22} />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                                        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>L3 Account Management</h4>
                                        <span style={{ fontSize: 11, fontWeight: 700, background: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: 100, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Direct Line</span>
                                    </div>
                                    <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                                        Your dedicated Success Manager for multi-branch scaling, custom feature requests, enterprise contract renewals, and strategic planning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Interactive FAQs ── */}
            <ContactFaq />

            <Footer />

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .escalation-card { padding: 24px 16px !important; border-radius: 18px !important; }
        }
      `}</style>
        </main>
    )
}