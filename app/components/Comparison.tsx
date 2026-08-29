'use client'
import { Check, X } from 'lucide-react'

const rows = [
    ['Access Anywhere', true, false],
    ['Auto Data Backup & Security', true, false],
    ['Machine Integration (Uni + Bi)', true, false],
    ['WhatsApp / SMS / Email Reports', true, false],
    ['Real-Time Analytics Dashboard', true, false],
    ['AI Interpretation & Flagging', true, false],
    ['Custom Branding', true, false],
    ['Role-Based Multi-User Logins', true, false],
    ['Barcode & QR Code Integration', true, false],
    ['Free Feature Updates', true, false],
    ['Works on Any Device', true, false],
    ['B2B Client Management', true, false],
]

export default function Comparison() {
    return (
        <section
            className="section-pad comparison-section"
            style={{
                background: '#ffffff',
                padding: '96px 20px',
                boxSizing: 'border-box',
                overflow: 'hidden', // Added to prevent any accidental horizontal scroll
            }}
        >
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', boxSizing: 'border-box' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 64, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: 'var(--blue-primary)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: "'DM Sans', sans-serif",
                        }}>
                            Why Choose OnePath
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(28px, 6vw, 42px)',
                        fontWeight: 800,
                        marginBottom: 16,
                        color: '#0f172a',
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: '-0.02em',
                        wordBreak: 'break-word',
                    }}>
                        OnePath vs{' '}
                        <span style={{ color: '#94a3b8' }}>Offline Software</span>
                    </h2>
                    <p style={{
                        color: '#64748b',
                        maxWidth: 500,
                        margin: '0 auto',
                        fontSize: 'clamp(14px, 4vw, 16px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        See why 200+ labs switched to cloud-based OnePath from outdated local software.
                    </p>
                </div>

                {/* Comparison Table / Card */}
                <div className="animate-fade-up" style={{
                    margin: '0 auto',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)',
                    boxSizing: 'border-box',
                    width: '100%',
                }}>

                    {/* Table Header */}
                    <div className="compare-grid" style={{
                        background: '#f8fafc',
                        borderBottom: '1px solid #e2e8f0',
                        padding: '20px 24px',
                        boxSizing: 'border-box',
                    }}>
                        <div className="compare-header-text" style={{ fontSize: 14, fontWeight: 700, color: '#64748b', fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Features
                        </div>
                        <div className="compare-header-title" style={{
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: 800,
                            color: 'var(--blue-primary)',
                            fontFamily: "'Syne', sans-serif",
                            background: 'rgba(59, 130, 246, 0.08)',
                            padding: '8px 0',
                            borderRadius: '8px',
                        }}>
                            OnePath
                        </div>
                        <div className="compare-header-title" style={{
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 600,
                            color: '#94a3b8',
                            fontFamily: "'DM Sans', sans-serif",
                        }}>
                            Offline / Local
                        </div>
                    </div>

                    {/* Table Rows */}
                    {rows.map(([label, onePath, offline], i) => (
                        <div
                            key={String(label)}
                            className="compare-grid compare-row"
                            style={{
                                padding: '16px 24px',
                                borderBottom: i < rows.length - 1 ? '1px solid #f1f5f9' : 'none',
                                transition: 'background 0.2s ease',
                                boxSizing: 'border-box',
                            }}
                        >
                            {/* Feature Name */}
                            <div className="compare-feature-text" style={{
                                fontSize: 15,
                                fontWeight: 500,
                                color: '#334155',
                                fontFamily: "'DM Sans', sans-serif",
                                paddingRight: '8px', // Safety padding
                            }}>
                                {label}
                            </div>

                            {/* OnePath Checkmarks */}
                            <div style={{ textAlign: 'center', background: 'rgba(59, 130, 246, 0.03)', margin: '-16px 0', padding: '16px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {onePath
                                    ? <span style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: 28, height: 28, borderRadius: '50%',
                                        background: '#dcfce7', border: '1px solid #bbf7d0',
                                        boxShadow: '0 2px 4px rgba(34, 197, 94, 0.1)'
                                    }}>
                                        <Check size={16} color="#16a34a" strokeWidth={3} />
                                    </span>
                                    : <X size={18} color="#cbd5e1" />
                                }
                            </div>

                            {/* Offline Software Checkmarks */}
                            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {offline
                                    ? <span style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: 28, height: 28, borderRadius: '50%',
                                        background: '#dcfce7', border: '1px solid #bbf7d0',
                                    }}>
                                        <Check size={16} color="#16a34a" strokeWidth={3} />
                                    </span>
                                    : <span style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: 28, height: 28, borderRadius: '50%',
                                        background: '#fee2e2', border: '1px solid #fecaca',
                                    }}>
                                        <X size={14} color="#ef4444" strokeWidth={2.5} />
                                    </span>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive CSS Setup */}
            <style>{`
                /* Desktop Layout */
                .compare-grid {
                    display: grid;
                    grid-template-columns: 1fr 180px 180px;
                    align-items: center;
                }
                
                .compare-row:hover {
                    background: #f8fafc;
                }

                /* Tablet & Mobile Layout Fixes */
                @media (max-width: 768px) {
                    .comparison-section { padding: 60px 15px !important; }
                }

                @media (max-width: 640px) {
                    .compare-grid {
                        grid-template-columns: 1fr 75px 75px; /* Safely shrinks columns */
                        padding: 16px 10px !important;
                        gap: 8px;
                    }
                    .compare-feature-text {
                        font-size: 13px !important;
                        line-height: 1.4;
                        word-break: break-word; /* Prevents long words from breaking layout */
                    }
                    .compare-header-text {
                        font-size: 11px !important;
                    }
                    .compare-header-title {
                        font-size: 12px !important;
                        padding: 6px 0 !important;
                        word-break: break-word;
                    }
                }
            `}</style>
        </section>
    )
}