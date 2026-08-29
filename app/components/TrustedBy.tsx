'use client'
import React from 'react'

export default function TrustedBy() {
    const logos = [
        'Indian Path Lab', 'Star Pathology Lab', 'Nosran Diagnostics',
        'Max Hospital', 'Saksham Hospital', 'Darul Shifa Clinic', 'Zarrah Clinic', 'New Life Nursing Home'
    ]

    const allLogos = [...logos, ...logos]

    return (
        <section style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            borderBottom: '1px solid #e2e8f0',
            padding: '48px 0',
            overflow: 'hidden',
        }}>
            <div style={{
                textAlign: 'center',
                marginBottom: 36,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#64748b',
                fontFamily: "'DM Sans', sans-serif",
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

                <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 140,
                    background: 'linear-gradient(to right, #ffffff, transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', right: 0, top: 0, bottom: 0, width: 140,
                    background: 'linear-gradient(to left, #ffffff, transparent)',
                    zIndex: 2, pointerEvents: 'none',
                }} />

                <div
                    className="logo-track"
                    style={{
                        display: 'flex',
                        width: 'max-content',
                        animation: 'scrollLeft 40s linear infinite'
                    }}
                >
                    {allLogos.map((name, i) => (
                        <div
                            key={i}
                            style={{
                                padding: '0 40px',
                                fontSize: 18,
                                fontWeight: 700,
                                fontFamily: "'DM Sans', sans-serif",
                                color: '#94a3b8',
                                whiteSpace: 'nowrap',
                                transition: 'color 0.3s ease',
                                cursor: 'default',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = 'var(--blue-primary)'
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
                
                /* Premium Touch: Mouse laane par scroll ruk jayega */
                .scroll-container:hover .logo-track {
                    animation-play-state: paused !important;
                }
            `}</style>
        </section>
    )
}