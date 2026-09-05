'use client'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
    return (
        <section
            className="cta-section"
            style={{
                position: 'relative',
                padding: '96px 20px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                width: '100%',
                background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #eff6ff 100%)',
            }}
        >
            {/* Soft Dot Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px',
                zIndex: 0,
            }} />

            {/* Premium Glass Container */}
            <div className="container glass-card" style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                borderRadius: 28,
                padding: '60px 24px',
                boxShadow: '0 20px 40px -10px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,1)',
                maxWidth: '960px',
                width: '100%',
                boxSizing: 'border-box',
            }}>

                {/* Pulse Badge */}
                <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: 999,
                        padding: '6px 16px',
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#475569',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                    }}>
                        <span style={{
                            width: 7, height: 7,
                            background: '#22c55e',
                            borderRadius: '50%',
                            boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)',
                            animation: 'pulse 2s infinite'
                        }} />
                        <span className="badge-text">Instant Setup · Zero Setup Fees</span>
                    </span>
                </div>

                {/* Headline */}
                <h2 style={{
                    fontSize: 'clamp(28px, 6vw, 48px)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: 18,
                    letterSpacing: '-0.03em',
                    color: '#0f172a',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    wordBreak: 'break-word',
                }}>
                    Smarter Lab Operations.{' '}
                    <br className="mobile-break" />
                    <span style={{
                        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Faster Growth.
                    </span>
                </h2>

                {/* Subtext */}
                <p style={{
                    fontSize: 'clamp(15px, 2.5vw, 17.5px)',
                    color: '#475569',
                    maxWidth: 560,
                    margin: '0 auto 36px',
                    lineHeight: 1.65,
                    fontWeight: 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                    Join 200+ pathology labs already running on OnePath. Start your free 7-day trial today — no credit card needed, cancel anytime.
                </p>

                {/* Interactive Buttons */}
                <div className="btn-wrapper" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 44 }}>
                    <Link href="/trial" className="btn-primary cta-btn" style={{
                        padding: '15px 36px',
                        fontSize: 15.5,
                        borderRadius: 999,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        fontWeight: 700,
                        textDecoration: 'none',
                        boxShadow: '0 8px 25px -4px rgba(37, 99, 235, 0.4)',
                    }}>
                        Start 7-Day Free Trial
                        <ArrowRight size={17} />
                    </Link>

                    <a
                        href="https://api.whatsapp.com/send?phone=9045757272&text=Hello, I am interested in OnePath Lab software."
                        target="_blank"
                        rel="noreferrer"
                        className="btn-whatsapp"
                        style={{
                            padding: '15px 28px',
                            fontSize: 15.5,
                            borderRadius: 999,
                            background: '#ffffff',
                            color: '#0f172a',
                            border: '1px solid #e2e8f0',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8,
                            fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'all 0.25s ease',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        <MessageCircle size={19} color="#22c55e" />
                        Chat on WhatsApp
                    </a>
                </div>

                {/* Contact Info (Sleek layout) */}
                <div style={{
                    display: 'flex',
                    gap: 'clamp(16px, 3vw, 40px)',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    paddingTop: 28,
                    borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                }}>
                    {[
                        { label: 'Sales Helpline', value: '+91 9045757272' },
                        { label: 'Technical Support', value: '+91 9058459848' },
                        { label: 'Email Enquiries', value: 'support@onepathlab.com' },
                    ].map(item => (
                        <div key={item.label} style={{ textAlign: 'center', padding: '0 8px' }}>
                            <div style={{
                                fontSize: 11,
                                color: '#64748b',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 700,
                                marginBottom: 4
                            }}>
                                {item.label}
                            </div>
                            <div style={{
                                fontSize: 'clamp(13.5px, 2vw, 14.5px)',
                                fontWeight: 700,
                                color: '#0f172a',
                                fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}>
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .btn-whatsapp:hover {
                    transform: translateY(-2px);
                    border-color: #22c55e !important;
                    background: #f0fdf4 !important;
                    box-shadow: 0 8px 20px -4px rgba(34, 197, 94, 0.2);
                }

                .mobile-break { display: none; }

                @media (max-width: 768px) {
                    .cta-section { padding: 60px 16px !important; }
                    .glass-card { padding: 36px 18px !important; }
                    .mobile-break { display: block; }
                }

                @media (max-width: 480px) {
                    .btn-wrapper { flex-direction: column; width: 100%; gap: 10px !important; }
                    .btn-wrapper a { width: 100% !important; max-width: 320px; margin: 0 auto; }
                }
            `}</style>
        </section>
    )
}