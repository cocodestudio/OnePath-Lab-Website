'use client'
import { CreditCard, MessageCircle, FileText, Database, ShieldCheck, Zap } from 'lucide-react'

const integrations = [
    {
        icon: <CreditCard size={24} />,
        name: 'Payment Gateways',
        desc: 'Direct integration with Razorpay/PhonePe to auto-reconcile patient payments and B2B client invoices.',
        color: '#3b82f6',
    },
    {
        icon: <MessageCircle size={24} />,
        name: 'WhatsApp Business API',
        desc: 'Official API integration for automated report dispatch, appointment reminders, and payment receipts.',
        color: '#22c55e',
    },
    {
        icon: <FileText size={24} />,
        name: 'Doctor Referral Portal',
        desc: 'Dedicated login for referring doctors to track their referred patients and live commission statements.',
        color: '#f59e0b',
    },
    {
        icon: <Database size={24} />,
        name: 'LIS Middleware',
        desc: 'Bridge software for hardware connectivity, supporting HL7/ASTM protocols for 500+ analyzer models.',
        color: '#6366f1',
    },
    {
        icon: <ShieldCheck size={24} />,
        name: 'ABHA & EHR Sync',
        desc: 'Compliant with Ayushman Bharat Health Account (ABHA) to push reports to patient health lockers.',
        color: '#14b8a6',
    },
    {
        icon: <Zap size={24} />,
        name: 'Universal REST API',
        desc: 'Secure API access for your mobile app or website to trigger test bookings and fetch report status.',
        color: '#8b5cf6',
    },
]

export default function Integrations() {
    return (
        <section className="integrations-section" style={{ padding: '96px 20px', background: '#f8fafc', boxSizing: 'border-box', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>

                <div style={{ textAlign: 'center', marginBottom: 64, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: 'var(--blue-primary, #3b82f6)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: "'DM Sans', sans-serif",
                        }}>
                            Connectivity
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 6vw, 42px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: 16,
                        letterSpacing: '-0.02em',
                        fontFamily: "'Syne', sans-serif",
                        wordBreak: 'break-word',
                    }}>
                        Infrastructure that <span style={{ color: 'var(--blue-primary, #3b82f6)' }}>Integrates</span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 550,
                        margin: '0 auto',
                        fontSize: 'clamp(14px, 4vw, 17px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        OnePath isn't an island. We build bridges between your diagnostic machines, payment gateways, and the national health ecosystem.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    // The magic fix: min(100%, 280px) guarantees 100% width on small devices
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: 24,
                    width: '100%',
                }}>
                    {integrations.map(int => (
                        <div
                            key={int.name}
                            className="integration-card"
                            style={{
                                padding: '32px 24px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '20px',
                                display: 'flex',
                                gap: 20,
                                alignItems: 'flex-start',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxSizing: 'border-box',
                                width: '100%',
                            }}
                        >
                            <div style={{
                                width: 52, height: 52,
                                borderRadius: '14px',
                                background: `${int.color}15`,
                                border: `1px solid ${int.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: int.color,
                                flexShrink: 0,
                                transition: 'transform 0.3s ease'
                            }} className="int-icon">
                                {int.icon}
                            </div>

                            <div style={{ flex: 1, minWidth: 0 }}> {/* minWidth: 0 prevents flex overflow */}
                                <h3 style={{
                                    fontSize: 'clamp(16px, 4vw, 18px)',
                                    fontWeight: 700,
                                    marginBottom: 8,
                                    color: '#0f172a',
                                    fontFamily: "'Syne', sans-serif",
                                    wordBreak: 'break-word',
                                }}>
                                    {int.name}
                                </h3>
                                <p style={{
                                    fontSize: 'clamp(14px, 3.5vw, 14.5px)',
                                    color: '#64748b',
                                    lineHeight: 1.6,
                                    fontFamily: "'DM Sans', sans-serif"
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
                    transform: translateY(-5px);
                    border-color: #cbd5e1 !important;
                    box-shadow: 0 12px 30px -10px rgba(0,0,0,0.08);
                }
                .integration-card:hover .int-icon {
                    transform: scale(1.08);
                }
                
                @media (max-width: 768px) {
                    .integrations-section { padding: 60px 15px !important; }
                }
                
                /* Super small mobile fix */
                @media (max-width: 400px) {
                    .integration-card {
                        flex-direction: column; /* Stack icon and text on tiny screens */
                        align-items: center;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    )
}