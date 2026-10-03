'use client'
import { Check, X } from 'lucide-react'

const rows = [
    ['Govt. ABDM / ABHA M1 & DHIS Cash Incentives', true, false],
    ['Bi-directional Machine Interfacing (200+ Analyzers)', true, false],
    ['Dual AI Clinical Copilot & Auto-Interpretation', true, false],
    ['Instant WhatsApp Delivery with Dynamic QR Code', true, false],
    ['Prepaid B2B Franchise Wallet (Deduct & Print)', true, false],
    ['Real-Time Financial MIS & Daily Counter Closing', true, false],
    ['Dynamic Multi-Tier Rate Lists & Doctor Commissions', true, false],
    ['Automatic Encrypted Cloud Backups (Zero Data Loss)', true, false],
    ['NABL / ISO 15189 Audit Trails & Digital Signatures', true, false],
    ['Barcode Labeling for Sample Accessioning', true, false],
    ['Mobile, Tablet & Anywhere Cloud Browser Access', true, false],
    ['Automatic Regular Feature Updates (Zero Downtime)', true, false],
]

export default function Comparison() {
    return (
        <section
            className="section-pad comparison-section"
            style={{
                background: '#f8fafc',
                padding: '96px 20px',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
                        <div className="section-badge">
                            <span className="badge-tag">[ BENCHMARK ]</span>
                            <span className="badge-dot" />
                            <span className="badge-desc">Modern Cloud LIS vs Legacy Systems</span>
                        </div>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 5.5vw, 42px)',
                        fontWeight: 800,
                        marginBottom: 14,
                        color: '#0f172a',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        letterSpacing: '-0.03em',
                        wordBreak: 'break-word',
                        lineHeight: 1.2,
                    }}>
                        OnePath Cloud vs{' '}
                        <span style={{ color: '#94a3b8' }}>Outdated Desktop LIS</span>
                    </h2>
                    <p style={{
                        color: '#64748b',
                        maxWidth: 520,
                        margin: '0 auto',
                        fontSize: 'clamp(14.5px, 2.5vw, 16.5px)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                        See why 200+ diagnostics centers migrated from crash-prone local software to OnePath.
                    </p>
                </div>

                {/* Comparison Table / Card */}
                <div style={{
                    margin: '0 auto',
                    borderRadius: 20,
                    overflow: 'hidden',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 16px 36px -10px rgba(15,23,42,0.06)',
                    boxSizing: 'border-box',
                    width: '100%',
                }}>

                    {/* Table Header */}
                    <div className="compare-grid" style={{
                        background: '#f8fafc',
                        borderBottom: '1px solid #e2e8f0',
                        padding: '18px 24px',
                        boxSizing: 'border-box',
                    }}>
                        <div className="compare-header-text" style={{ fontSize: 13, fontWeight: 800, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            Core Feature
                        </div>
                        <div className="compare-header-title" style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 800,
                            color: '#2563eb',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            background: 'rgba(37, 99, 235, 0.08)',
                            padding: '8px 12px',
                            borderRadius: 8,
                        }}>
                            OnePath
                        </div>
                        <div className="compare-header-title" style={{
                            textAlign: 'center',
                            fontSize: 14,
                            fontWeight: 700,
                            color: '#94a3b8',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            Offline Software
                        </div>
                    </div>

                    {/* Table Rows */}
                    {rows.map(([label, onePath, offline], i) => (
                        <div
                            key={String(label)}
                            className="compare-grid compare-row"
                            style={{
                                padding: '15px 24px',
                                borderBottom: i < rows.length - 1 ? '1px solid #f1f5f9' : 'none',
                                transition: 'background 0.2s ease',
                                boxSizing: 'border-box',
                            }}
                        >
                            {/* Feature Name */}
                            <div className="compare-feature-text" style={{
                                fontSize: 14.5,
                                fontWeight: 600,
                                color: '#1e293b',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                paddingRight: '8px',
                            }}>
                                {label}
                            </div>

                            {/* OnePath Checkmarks */}
                            <div style={{ textAlign: 'center', background: 'rgba(37, 99, 235, 0.02)', margin: '-15px 0', padding: '15px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {onePath
                                    ? <span style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: 26, height: 26, borderRadius: '50%',
                                        background: '#dcfce7', border: '1px solid #bbf7d0',
                                        boxShadow: '0 2px 4px rgba(34, 197, 94, 0.15)'
                                    }}>
                                        <Check size={15} color="#16a34a" strokeWidth={3} />
                                    </span>
                                    : <X size={18} color="#cbd5e1" />
                                }
                            </div>

                            {/* Offline Software Checkmarks */}
                            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {offline
                                    ? <span style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: 26, height: 26, borderRadius: '50%',
                                        background: '#dcfce7', border: '1px solid #bbf7d0',
                                    }}>
                                        <Check size={15} color="#16a34a" strokeWidth={3} />
                                    </span>
                                    : <span style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: 24, height: 24, borderRadius: '50%',
                                        background: '#fee2e2', border: '1px solid #fecaca',
                                    }}>
                                        <X size={13} color="#ef4444" strokeWidth={2.5} />
                                    </span>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .compare-grid {
                    display: grid;
                    grid-template-columns: 1fr 160px 160px;
                    align-items: center;
                }
                
                .compare-row:hover {
                    background: #f8fafc;
                }

                @media (max-width: 768px) {
                    .comparison-section { padding: 56px 16px !important; }
                }

                @media (max-width: 640px) {
                    .compare-grid {
                        grid-template-columns: 1fr 64px 64px;
                        padding: 13px 12px !important;
                        gap: 6px;
                    }
                    .compare-feature-text {
                        font-size: 13px !important;
                        line-height: 1.35;
                        word-break: break-word;
                    }
                    .compare-header-text {
                        font-size: 11px !important;
                    }
                    .compare-header-title {
                        font-size: 12px !important;
                        padding: 6px 0 !important;
                    }
                }

                @media (max-width: 360px) {
                    .comparison-section { padding: 48px 10px !important; }
                    .compare-grid {
                        grid-template-columns: 1fr 50px 50px;
                        padding: 10px 6px !important;
                        gap: 4px;
                    }
                    .compare-feature-text {
                        font-size: 11.5px !important;
                        line-height: 1.3;
                    }
                    .compare-header-title {
                        font-size: 11px !important;
                    }
                }
            `}</style>
        </section>
    )
}