'use client'
import { Activity, ScanBarcode, FileText, MessageCircle, Network, UserPlus, PackageOpen, BarChart3, ShieldCheck } from 'lucide-react'

const labFeatures = [
    {
        icon: <Activity size={24} />,
        title: 'Bidirectional Interfacing',
        desc: 'Direct integration with lab analyzers (Cell Counters, Biochemistry). Eliminates manual entry errors entirely.'
    },
    {
        icon: <ScanBarcode size={24} />,
        title: 'Smart Barcode Tracking',
        desc: 'Automated barcode generation for flawless sample tracking from collection to final report.'
    },
    {
        icon: <FileText size={24} />,
        title: 'Professional Reporting',
        desc: 'Generate neat, customizable PDF reports with digital signatures, QR verification, and auto-highlighted abnormal values.'
    },
    {
        icon: <MessageCircle size={24} />,
        title: 'WhatsApp Automation',
        desc: 'Instantly send invoice links and final PDF reports to patients and referring doctors via WhatsApp.'
    },
    {
        icon: <Network size={24} />,
        title: 'Multi-Branch Sync',
        desc: 'Manage multiple collection centers and processing labs from a single centralized dashboard in real-time.'
    },
    {
        icon: <UserPlus size={24} />,
        title: 'B2B & Referral Management',
        desc: 'Track doctor commissions, corporate tie-ups, and manage separate price lists for B2B clients easily.'
    },
    {
        icon: <PackageOpen size={24} />,
        title: 'Inventory Control',
        desc: 'Track reagents, manage stock consumption per test, and get alerts before supplies run out.'
    },
    {
        icon: <BarChart3 size={24} />,
        title: 'Financial Analytics',
        desc: 'Track daily collections, pending dues, revenue by department, and business growth patterns.'
    },
    {
        icon: <ShieldCheck size={24} />,
        title: 'Role-Based Security',
        desc: 'Create secure logins for phlebotomists, technicians, and pathologists with restricted access and audit logs.'
    },
]

export default function Features() {
    return (
        <section className="features-section" style={{ padding: '80px 20px', background: '#ffffff', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>

                <div style={{ textAlign: 'center', marginBottom: 60, padding: '0 10px' }}>
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
                            Core Features
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 6vw, 42px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: 16,
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: '-0.02em',
                        wordBreak: 'break-word',
                    }}>
                        Everything your lab needs to <br className="mobile-break" />
                        <span style={{ color: 'var(--blue-primary, #3b82f6)' }}>Scale Faster</span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 500,
                        margin: '0 auto',
                        fontSize: 'clamp(14px, 4vw, 17px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        Powerful automation tools designed specifically for modern diagnostic centers to reduce errors and increase revenue.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    // The magic fix: min(100%, 280px) guarantees it NEVER overflows the screen width
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: 24,
                    width: '100%',
                }}>
                    {labFeatures.map((feat, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{
                                padding: '32px 24px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '20px',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                boxSizing: 'border-box',
                                width: '100%',
                            }}
                        >
                            <div style={{
                                marginBottom: 20,
                                width: 48,
                                height: 48,
                                borderRadius: 12,
                                background: '#eff6ff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--blue-primary, #3b82f6)',
                                transition: 'transform 0.4s ease'
                            }} className="icon-box">
                                {feat.icon}
                            </div>
                            <h3 style={{
                                fontSize: 'clamp(16px, 4vw, 18px)',
                                fontWeight: 700,
                                marginBottom: 12,
                                color: '#0f172a',
                                fontFamily: "'DM Sans', sans-serif",
                                wordBreak: 'break-word',
                            }}>
                                {feat.title}
                            </h3>
                            <p style={{
                                color: '#64748b',
                                fontSize: 'clamp(14px, 3.5vw, 15px)',
                                lineHeight: 1.6,
                                fontFamily: "'DM Sans', sans-serif"
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
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08);
                    transform: translateY(-4px);
                }
                .feature-card:hover .icon-box {
                    transform: scale(1.1) rotate(5deg);
                    background: var(--blue-primary, #3b82f6) !important;
                    color: #ffffff !important;
                }
                .mobile-break { display: none; }
                
                @media (max-width: 768px) {
                    .features-section { padding: 60px 15px !important; }
                    .mobile-break { display: block; }
                }
            `}</style>
        </section>
    )
}