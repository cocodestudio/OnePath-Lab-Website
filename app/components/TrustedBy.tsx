'use client'
import React from 'react'

export default function TrustedBy() {
    const logos = [
        'Indian Path Lab', 'Star Pathology Lab', 'Nosran Diagnostics',
        'Max Hospital', 'Saksham Hospital', 'Darul Shifa Clinic', 'Zarrah Clinic', 'New Life Nursing Home'
    ]

    const allLogos = [...logos, ...logos]

    return (
        <section className="trustedby-section" style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            borderBottom: '1px solid #e2e8f0',
            padding: '40px 0',
            overflow: 'hidden',
            width: '100%',
            boxSizing: 'border-box',
        }}>
            <div className="trustedby-title" style={{
                textAlign: 'center',
                marginBottom: 28,
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#64748b',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: '0 16px',
            }}>
                Trusted by 200+ diagnostic labs across India
            </div>

            <div className="scroll-container" style={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                width: '100%'
            }}>

                <div className="mask-left" style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
                    background: 'linear-gradient(to right, #ffffff, transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />
                <div className="mask-right" style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
                    background: 'linear-gradient(to left, #ffffff, transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />

                <div
                    className="logo-track"
                    style={{
                        display: 'flex',
                        width: 'max-content',
                        animation: 'scrollLeft 36s linear infinite'
                    }}
                >
                    {allLogos.map((name, i) => (
                        <div
                            key={i}
                            className="trusted-logo-item"
                            style={{
                                padding: '0 32px',
                                fontSize: 17,
                                fontWeight: 700,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                color: '#94a3b8',
                                whiteSpace: 'nowrap',
                                transition: 'color 0.2s ease',
                                cursor: 'default',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = '#2563eb'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = '#94a3b8'
                            }}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                .scroll-container:hover .logo-track {
                    animation-play-state: paused !important;
                }

                @media (max-width: 640px) {
                    .trustedby-section { padding: 28px 0 !important; }
                    .trustedby-title { font-size: 11px !important; margin-bottom: 20px !important; }
                    .trusted-logo-item { padding: 0 18px !important; font-size: 14px !important; }
                    .mask-left, .mask-right { width: 40px !important; }
                }
            `}</style>
        </section>
    )
}