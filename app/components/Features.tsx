import Link from 'next/link'
import { Activity, ScanBarcode, FileText, MessageCircle, Network, Users, Boxes, ShieldCheck, Cpu, Wallet, ArrowRight } from 'lucide-react'

const labFeatures = [
    {
        icon: <Activity size={22} />,
        title: 'Bi-directional Machine Interfacing',
        desc: 'Direct bridge integration with 200+ analyzers (Sysmex, Mindray, Erba, Roche, Abbott). Results flow directly to reports — zero manual typing.',
        color: '#2563eb',
        bg: '#eff6ff',
        link: '/machine-interfacing',
    },
    {
        icon: <ShieldCheck size={22} />,
        title: 'Govt. ABDM / ABHA M1 & HFR Ready',
        desc: 'Certified Ayushman Bharat Digital Mission integration. Create ABHA IDs, push to National Health Locker, and claim Govt. DHIS cash incentives.',
        color: '#059669',
        bg: '#ecfdf5',
        link: '/abdm-abha',
    },
    {
        icon: <Cpu size={22} />,
        title: 'Dual AI Clinical Copilot',
        desc: 'Dual Gemini + Groq engine generates automatic clinical impressions, performs historical delta checks, and triggers panic alert warnings.',
        color: '#7c3aed',
        bg: '#f5f3ff',
        link: '/ai-clinical-copilot',
    },
    {
        icon: <MessageCircle size={22} />,
        title: 'Automated WhatsApp & QR Reports',
        desc: 'Delivers PDF reports with doctor digital signatures and dynamic authenticity QR codes instantly to patient and doctor WhatsApp.',
        color: '#2563eb',
        bg: '#eff6ff',
        link: '/whatsapp-reports',
    },
    {
        icon: <Wallet size={22} />,
        title: 'B2B Franchise & Prepaid Wallet',
        desc: 'Seamlessly manage collection centers with prepaid wallet balances, online UPI recharges, and automated deduct-and-print report rules.',
        color: '#d97706',
        bg: '#fffbeb',
        link: '/b2b-franchise',
    },
    {
        icon: <ScanBarcode size={22} />,
        title: 'Smart Barcode Accessioning',
        desc: 'Instant barcode printing for EDTA, Serum, and Fluoride tubes. Guarantees 100% sample traceability from intake to disposal.',
        color: '#0891b2',
        bg: '#ecfeff',
        link: '/lis-software',
    },
    {
        icon: <Users size={22} />,
        title: 'Front-Desk Receptionist Portal',
        desc: 'Dedicated intake workstation for receptionists: 30-sec patient registration, barcode token printing, bill collection, and queue management with doctor-only edit locks.',
        color: '#4f46e5',
        bg: '#eef2ff',
        link: '/lis-software',
    },
    {
        icon: <Boxes size={22} />,
        title: 'Reagents & Lab Inventory Management',
        desc: 'Admin stock control for lab consumables: batch numbers, 2-8°C cold chain tracking, real-time stock valuation, low-stock warnings, and expiry alerts before testing.',
        color: '#dc2626',
        bg: '#fef2f2',
        link: '/lis-software',
    },
    {
        icon: <FileText size={22} />,
        title: 'NABL & ISO 15189 Audit Trail',
        desc: 'Tamper-proof digital records, technician verification stages, pathologist sign-off workflows, and strict role-based access security.',
        color: '#059669',
        bg: '#ecfdf5',
        link: '/why-onepath',
    },
]

export default function Features() {
    return (
        <section className="features-section" style={{ padding: '96px 0', background: '#ffffff', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>

                <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
                        <div className="section-badge">
                            <span className="badge-tag">[ ARCHITECTURE ]</span>
                            <span className="badge-dot" />
                            <span className="badge-desc">Enterprise Laboratory Capabilities</span>
                        </div>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 5.5vw, 44px)',
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
                            Scale Faster &amp; Error-Free
                        </span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 640,
                        margin: '0 auto',
                        fontSize: 'clamp(14.5px, 2.5vw, 17px)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                        Powerful automation tools designed specifically for modern diagnostic centers to eliminate bottlenecks, cut costs, and boost patient satisfaction.
                    </p>
                </div>

                <div className="features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                    gap: 22,
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
                                margin: '0 0 16px',
                                flex: 1,
                            }}>
                                {feat.desc}
                            </p>
                            <Link
                                href={feat.link}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: feat.color,
                                    textDecoration: 'none',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    marginTop: 'auto',
                                    transition: 'gap 0.2s ease',
                                }}
                            >
                                Explore Details <ArrowRight size={14} />
                            </Link>
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
                    .features-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
                    .features-section .feature-card { padding: 22px 18px !important; border-radius: 16px !important; }
                    .mobile-break { display: block; }
                }
            `}</style>
        </section>
    )
}