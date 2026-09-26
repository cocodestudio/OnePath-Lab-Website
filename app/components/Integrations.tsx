'use client'
import { CreditCard, MessageCircle, FileText, Database, ShieldCheck, Zap } from 'lucide-react'

const integrations = [
    {
        icon: <CreditCard size={22} />,
        name: 'Payment Gateways',
        desc: 'Direct integration with Razorpay and PhonePe to auto-reconcile patient collections and B2B invoices.',
        color: '#2563eb',
        bg: '#eff6ff',
    },
    {
        icon: <MessageCircle size={22} />,
        name: 'WhatsApp Business API',
        desc: 'Official API integration for automated report dispatch, appointment reminders, and digital payment receipts.',
        color: '#059669',
        bg: '#ecfdf5',
    },
    {
        icon: <FileText size={22} />,
        name: 'Doctor Referral Portal',
        desc: 'Dedicated web login for referring doctors to track their referred patients and live commission statements.',
        color: '#d97706',
        bg: '#fffbeb',
    },
    {
        icon: <Database size={22} />,
        name: 'LIS Hardware Middleware',
        desc: 'Bridge software for hardware connectivity, supporting HL7/ASTM protocols for 200+ analyzer models.',
        color: '#7c3aed',
        bg: '#f5f3ff',
    },
    {
        icon: <ShieldCheck size={22} />,
        name: 'ABHA & EHR Sync',
        desc: 'Compliant with Ayushman Bharat Health Account (ABHA) to securely push reports to national health lockers.',
        color: '#0891b2',
        bg: '#ecfeff',
    },
    {
        icon: <Zap size={22} />,
        name: 'Universal REST API',
        desc: 'Secure API access for your lab website or custom mobile app to register tests and fetch report status.',
        color: '#dc2626',
        bg: '#fef2f2',
    },
]

export default function Integrations() {
    return (
        <section className="integrations-section" style={{ padding: '96px 0', background: '#ffffff', boxSizing: 'border-box', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>

                <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            background: '#f8fafc',
                            border: '1px solid #cbd5e1',
                            borderLeft: '3px solid #2563eb',
                            color: '#0f172a',
                            padding: '7px 16px',
                            borderRadius: 6,
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            <span>[ ECOSYSTEM ]</span>
                            <span style={{ color: '#475569' }}>Laboratory Hardware &amp; API Connectivity</span>
                        </div>
                    </div>


                    <h2 style={{
                        fontSize: 'clamp(28px, 5.5vw, 42px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: 14,
                        letterSpacing: '-0.03em',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        wordBreak: 'break-word',
                        lineHeight: 1.2,
                    }}>
                        Infrastructure that <span style={{
                            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>Seamlessly Integrates</span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 560,
                        margin: '0 auto',
                        fontSize: 'clamp(14.5px, 2.5vw, 17px)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                        OnePath isn't an island. We build bridges between your diagnostic machines, payment gateways, and the national health ecosystem.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    gap: 20,
                    width: '100%',
                }}>
                    {integrations.map(int => (
                        <div
                            key={int.name}
                            className="integration-card"
                            style={{
                                padding: '28px 24px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: 20,
                                display: 'flex',
                                gap: 18,
                                alignItems: 'flex-start',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxSizing: 'border-box',
                                width: '100%',
                            }}
                        >
                            <div style={{
                                width: 48, height: 48,
                                borderRadius: 12,
                                background: int.bg,
                                border: `1px solid ${int.color}25`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: int.color,
                                flexShrink: 0,
                                transition: 'transform 0.3s ease'
                            }} className="int-icon">
                                {int.icon}
                            </div>

                            <div style={{ flex: 1, minWidth: 0 }}>
                                <h3 style={{
                                    fontSize: 17,
                                    fontWeight: 700,
                                    marginBottom: 6,
                                    color: '#0f172a',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    wordBreak: 'break-word',
                                    letterSpacing: '-0.02em',
                                }}>
                                    {int.name}
                                </h3>
                                <p style={{
                                    fontSize: 13.5,
                                    color: '#64748b',
                                    lineHeight: 1.65,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    margin: 0,
                                }}>
                                    {int.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .integration-card:hover {
                    transform: translateY(-4px);
                    border-color: #cbd5e1 !important;
                    box-shadow: 0 12px 32px -10px rgba(15,23,42,0.08);
                }
                .integration-card:hover .int-icon {
                    transform: scale(1.06);
                }
                
                @media (max-width: 768px) {
                    .integrations-section { padding: 56px 16px !important; }
                }
                
                @media (max-width: 380px) {
                    .integration-card {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;
                    }
                }
            `}</style>
        </section>
    )
}