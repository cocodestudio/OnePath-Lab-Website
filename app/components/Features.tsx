'use client'
import { Activity, ScanBarcode, FileText, MessageCircle, Network, UserPlus, PackageOpen, BarChart3, ShieldCheck } from 'lucide-react'

const labFeatures = [
    {
        icon: <Activity size={22} />,
        title: 'Bidirectional Interfacing',
        desc: 'Direct integration with lab analyzers (Cell Counters, Biochemistry). Eliminates manual entry errors entirely.',
        color: '#2563eb',
        bg: '#eff6ff',
    },
    {
        icon: <ScanBarcode size={22} />,
        title: 'Smart Barcode Tracking',
        desc: 'Automated barcode generation for flawless sample tracking from collection to final report dispatch.',
        color: '#7c3aed',
        bg: '#f5f3ff',
    },
    {
        icon: <FileText size={22} />,
        title: 'Professional Reporting',
        desc: 'Generate neat, customizable PDF reports with digital signatures, QR verification, and auto-highlighted abnormal values.',
        color: '#059669',
        bg: '#ecfdf5',
    },
    {
        icon: <MessageCircle size={22} />,
        title: 'WhatsApp Automation',
        desc: 'Instantly send invoice links and final PDF reports to patients and referring doctors via official WhatsApp API.',
        color: '#2563eb',
        bg: '#eff6ff',
    },
    {
        icon: <Network size={22} />,
        title: 'Multi-Branch Sync',
        desc: 'Manage multiple collection centers and processing labs from a single centralized dashboard in real-time.',
        color: '#d97706',
        bg: '#fffbeb',
    },
    {
        icon: <UserPlus size={22} />,
        title: 'B2B & Referral Management',
        desc: 'Track doctor commissions, corporate tie-ups, and manage separate price lists for B2B clients easily.',
        color: '#0891b2',
        bg: '#ecfeff',
    },
    {
        icon: <PackageOpen size={22} />,
        title: 'Inventory Control',
        desc: 'Track reagents, manage stock consumption per test, and get alerts before critical supplies run out.',
        color: '#dc2626',
        bg: '#fef2f2',
    },
    {
        icon: <BarChart3 size={22} />,
        title: 'Financial Analytics',
        desc: 'Track daily collections, pending dues, revenue by department, and business growth patterns.',
        color: '#2563eb',
        bg: '#eff6ff',
    },
    {
        icon: <ShieldCheck size={22} />,
        title: 'Role-Based Security',
        desc: 'Create secure logins for phlebotomists, technicians, and pathologists with restricted access and audit logs.',
        color: '#059669',
        bg: '#ecfdf5',
    },
]

export default function Features() {
    return (
        <section className="features-section" style={{ padding: '96px 20px', background: '#ffffff', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', boxSizing: 'border-box' }}>

                <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: '#2563eb',
                            padding: '6px 16px',
                            borderRadius: 999,
                            fontSize: 12.5,
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            Enterprise Capabilities
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 5.5vw, 42px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: 14,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        letterSpacing: '-0.03em',
                        wordBreak: 'break-word',
                        lineHeight: 1.2,
                    }}>
                        Everything your lab needs to <br className="mobile-break" />
                        <span style={{
                            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Scale Faster & Error-Free
                        </span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 540,
                        margin: '0 auto',
                        fontSize: 'clamp(14.5px, 2.5vw, 17px)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                        Powerful automation tools designed specifically for modern diagnostic centers to eliminate bottlenecks, cut costs, and boost patient satisfaction.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    gap: 20,
                    width: '100%',
                }}>
                    {labFeatures.map((feat, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{
                                padding: '28px 24px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: 20,
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                boxSizing: 'border-box',
                                width: '100%',
                            }}
                        >
                            <div style={{
                                marginBottom: 18,
                                width: 46,
                                height: 46,
                                borderRadius: 12,
                                background: feat.bg,
                                border: `1px solid ${feat.color}25`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: feat.color,
                                transition: 'all 0.3s ease'
                            }} className="icon-box">
                                {feat.icon}
                            </div>
                            <h3 style={{
                                fontSize: 18,
                                fontWeight: 700,
                                marginBottom: 8,
                                color: '#0f172a',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                wordBreak: 'break-word',
                                letterSpacing: '-0.02em',
                            }}>
                                {feat.title}
                            </h3>
                            <p style={{
                                color: '#64748b',
                                fontSize: 14,
                                lineHeight: 1.65,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                margin: 0,
                            }}>
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .feature-card:hover {
                    border-color: #cbd5e1 !important;
                    box-shadow: 0 12px 32px -10px rgba(37,99,235,0.12);
                    transform: translateY(-3px);
                }
                .feature-card:hover .icon-box {
                    transform: scale(1.06);
                }
                .mobile-break { display: none; }
                
                @media (max-width: 768px) {
                    .features-section { padding: 56px 16px !important; }
                    .features-section .feature-card { padding: 22px 18px !important; border-radius: 16px !important; }
                    .mobile-break { display: block; }
                }
            `}</style>
        </section>
    )
}