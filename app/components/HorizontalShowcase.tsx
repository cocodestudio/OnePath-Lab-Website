'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
    ScanLine, Server, Cpu, MessageSquare, BarChart3,
    CheckCircle2, ArrowRight, Sparkles, ChevronRight, Activity, Zap
} from 'lucide-react'
import Link from 'next/link'

interface Stage {
    step: string
    title: string
    category: string
    icon: React.ReactNode
    accent: string
    bgGlow: string
    badge: string
    summary: string
    points: string[]
    mockData: {
        title: string
        id: string
        patient: string
        tests: string
        status: string
        statusColor: string
        details: Array<{ label: string; value: string; highlight?: boolean }>
    }
}

const stages: Stage[] = [
    {
        step: '01',
        title: 'Receptionist Intake & Smart Accession',
        category: 'Front-Desk Portal',
        icon: <ScanLine size={20} />,
        accent: '#2563eb',
        bgGlow: 'rgba(37,99,235,0.08)',
        badge: '30-Sec Intake & Queue',
        summary: 'Dedicated receptionist workstation for 30-second patient registration, automatic sample barcode tube printing, and doctor-locked editing rules.',
        points: [
            'Role-based front-desk security (restricts non-doctor test edits)',
            'Instant barcode printing on collection vials & token queue display',
            'Quick billing collection with cash/UPI receipts & GST invoices',
        ],
        mockData: {
            title: 'Front-Desk Reception Terminal',
            id: 'REC-TERM-01 · Staff Portal',
            patient: 'Ramesh Kumar (42M) · Walk-in Patient',
            tests: 'CBC, Lipid Profile (Paid ₹950 UPI)',
            status: 'Billed & Barcoded',
            statusColor: '#2563eb',
            details: [
                { label: 'Token Queue', value: '#A-14 · Active' },
                { label: 'Collection Vials', value: 'EDTA + Serum Tube' },
                { label: 'Invoice Generated', value: 'INV-2026-0891 (GST Paid)', highlight: true },
                { label: 'Security Level', value: 'Doctor Edit Lock Active' },
            ]
        }
    },
    {
        step: '02',
        title: 'Bi-directional Machine & Inventory Sync',
        category: 'Hardware & Reagent Bridge',
        icon: <Server size={20} />,
        accent: '#059669',
        bgGlow: 'rgba(5,150,105,0.08)',
        badge: 'ASTM / HL7 Protocols',
        summary: 'Direct hardware connection with 200+ hematology, biochemistry, and immunoassay analyzers with automated reagent stock deduction.',
        points: [
            'Seamless bi-directional sync with Sysmex, Mindray, Roche, Abbott, Erba',
            'Results flow directly to parameters — zero manual technician typing',
            'Automated reagent inventory batch tracking & expiry alerts before testing',
        ],
        mockData: {
            title: 'Analyzer & Reagent Live Feed',
            id: 'Sysmex XN-350 / Mindray BS-240',
            patient: 'Sample Tube #B-40892',
            tests: '22 Parameters Synced · Reagent Deducted',
            status: 'Hardware Bridge Active',
            statusColor: '#059669',
            details: [
                { label: 'Connection Protocol', value: 'ASTM E1394 / HL7 Serial' },
                { label: 'Analyzer Model', value: 'Sysmex XN-350 Hematology' },
                { label: 'Reagent Pack', value: 'Cellpack DCL (Batch #891A)', highlight: true },
                { label: 'Typing Errors', value: '0% (Direct Digital Feed)' },
            ]
        }
    },
    {
        step: '03',
        title: 'AI Clinical Validation & Delta Checks',
        category: 'Intelligent Rules Engine',
        icon: <Cpu size={20} />,
        accent: '#7c3aed',
        bgGlow: 'rgba(124,58,237,0.08)',
        badge: 'Medical Precision',
        summary: 'Automated calculation of derived clinical metrics, historical delta comparison against past patient tests, and red-flagging of abnormal values.',
        points: [
            'Age and gender-adjusted reference range mapping',
            'Compares with past patient history to detect sudden acute anomalies',
            'Panic alert triggers on critical life-threatening values before release',
        ],
        mockData: {
            title: 'Delta Verification Matrix',
            id: 'Validation Engine v3.2',
            patient: 'Hb: 8.2 g/dL (Previous: 11.4 g/dL)',
            tests: 'Auto-Flag: Severe Acute Delta Drop',
            status: 'Pending Pathologist Review',
            statusColor: '#d97706',
            details: [
                { label: 'Primary Parameter', value: 'Hemoglobin (Hb) 8.2 g/dL' },
                { label: 'Delta Shift', value: '-3.2 g/dL vs Last Visit', highlight: true },
                { label: 'AI Impression', value: 'Microcytic Hypochromic Pattern' },
                { label: 'Doctor Sign-off', value: 'Required Before Dispatch' },
            ]
        }
    },
    {
        step: '04',
        title: 'Instant WhatsApp & Dynamic QR Dispatch',
        category: 'Patient Experience',
        icon: <MessageSquare size={20} />,
        accent: '#2563eb',
        bgGlow: 'rgba(37,99,235,0.08)',
        badge: 'Delivered in 4 Seconds',
        summary: 'Doctor digitally signed PDF reports with dynamic smartphone authenticity QR codes dispatched directly to patient and doctor WhatsApp in seconds.',
        points: [
            'Official Meta WhatsApp Business API integration (zero number bans)',
            'Dynamic QR code on PDF for instant hospital & visa authenticity verify',
            'Simultaneous SMS link and email delivery backup',
        ],
        mockData: {
            title: 'WhatsApp Dispatch Queue',
            id: 'WA-GATEWAY-PROD · Meta Cloud',
            patient: 'Delivered to: +91 98765 43210',
            tests: 'Report PDF (NABL Header + Digital Sign)',
            status: 'Delivered & Read',
            statusColor: '#16a34a',
            details: [
                { label: 'Delivery Channel', value: 'Meta WhatsApp Business Cloud' },
                { label: 'Delivery Time', value: '3.4 Seconds (Instant)' },
                { label: 'Dynamic QR', value: 'Cryptographic Authenticity Pass', highlight: true },
                { label: 'Open Rate', value: '98% Patient Engagement' },
            ]
        }
    },
    {
        step: '05',
        title: 'Multi-Branch MIS & Financials',
        category: 'Executive Control',
        icon: <BarChart3 size={20} />,
        accent: '#0891b2',
        bgGlow: 'rgba(8,145,178,0.08)',
        badge: 'Enterprise Scalability',
        summary: 'Control multiple collection centers and franchise labs from a single dashboard. Live revenue ledgers, doctor payouts, and automated prepaid wallet deductions.',
        points: [
            'Consolidated chain analytics with branch-wise filters & dues recovery',
            'Automated B2B corporate billing & prepaid deduct-and-print system',
            'Real-time TAT (Turn Around Time) monitoring per technician',
        ],
        mockData: {
            title: 'Central Multi-Center Control',
            id: 'Chain Operations · 3 Centers Active',
            patient: 'Consolidated Revenue Today: ₹48,600',
            tests: 'Completed: 142 · TAT Avg: 38 mins',
            status: 'All Centers Synced',
            statusColor: '#0891b2',
            details: [
                { label: 'Active Branches', value: 'Main Lab + 2 Collection Centers' },
                { label: 'Prepaid B2B Wallet', value: 'Deduct-and-Print Enabled', highlight: true },
                { label: 'Average TAT', value: '38 Minutes (Target: <45m)' },
                { label: 'Daily Counter Closing', value: 'Reconciled With Bank UPI' },
            ]
        }
    },
]

export default function HorizontalShowcase() {
    const [activeIdx, setActiveIdx] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const activeStage = stages[activeIdx]

    // Auto rotate every 6 seconds when not hovered
    useEffect(() => {
        if (!isAutoPlaying) return
        timerRef.current = setTimeout(() => {
            setActiveIdx(prev => (prev + 1) % stages.length)
        }, 6000)

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [activeIdx, isAutoPlaying])

    return (
        <section
            className="interactive-showcase-section"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            style={{
                position: 'relative',
                padding: '96px 0',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 50%, #ffffff 100%)',
                width: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >
            <div className="container" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>
                
                {/* ── Section Header ── */}
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <div className="section-badge">
                            <Sparkles size={13} color="#2563eb" style={{ flexShrink: 0 }} />
                            <span className="badge-tag">[ WORKFLOW PIPELINE ]</span>
                            <span className="badge-dot" />
                            <span className="badge-desc">Diagnostic Lifecycle</span>
                        </div>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 44px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: 12,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.2,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                        From Sample Intake to{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Verified WhatsApp Report
                        </span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 640,
                        margin: '0 auto',
                        fontSize: 'clamp(14.5px, 2.2vw, 16.5px)',
                        lineHeight: 1.6,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                        Explore how OnePath automates every step of your diagnostic operations — eliminating human errors and saving technician hours.
                    </p>
                </div>

                {/* ── Main Interactive Showcase Container ── */}
                <div className="showcase-card-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) minmax(360px, 1.35fr)',
                    gap: 28,
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 20,
                    padding: 'clamp(18px, 3vw, 32px)',
                    boxShadow: '0 20px 48px -12px rgba(15,23,42,0.07)',
                    boxSizing: 'border-box',
                }}>

                    {/* ── Left Column: Interactive Stage Buttons ── */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#94a3b8',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            marginBottom: 4,
                            paddingLeft: 4,
                        }}>
                            Select Pipeline Stage ({activeIdx + 1}/{stages.length})
                        </div>

                        {stages.map((stage, idx) => {
                            const isActive = idx === activeIdx
                            return (
                                <button
                                    key={stage.step}
                                    type="button"
                                    onClick={() => setActiveIdx(idx)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 14,
                                        padding: '14px 16px',
                                        borderRadius: 14,
                                        border: isActive ? `1.5px solid ${stage.accent}` : '1px solid #f1f5f9',
                                        background: isActive ? '#f8faff' : '#ffffff',
                                        boxShadow: isActive ? '0 4px 16px rgba(37,99,235,0.08)' : 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                                        width: '100%',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    {/* Number / Icon */}
                                    <div style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: 10,
                                        background: isActive ? stage.accent : '#f1f5f9',
                                        color: isActive ? '#ffffff' : '#64748b',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 800,
                                        fontSize: 14,
                                        flexShrink: 0,
                                        transition: 'all 0.2s ease',
                                    }}>
                                        {isActive ? stage.icon : stage.step}
                                    </div>

                                    {/* Text Info */}
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: isActive ? stage.accent : '#94a3b8',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.04em',
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            marginBottom: 2,
                                        }}>
                                            {stage.category}
                                        </div>
                                        <div style={{
                                            fontSize: 14,
                                            fontWeight: 700,
                                            color: isActive ? '#0f172a' : '#475569',
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}>
                                            {stage.title}
                                        </div>
                                    </div>

                                    <ChevronRight
                                        size={16}
                                        style={{
                                            color: isActive ? stage.accent : '#cbd5e1',
                                            transform: isActive ? 'translateX(2px)' : 'none',
                                            transition: 'transform 0.2s',
                                            flexShrink: 0,
                                        }}
                                    />
                                </button>
                            )
                        })}

                        <div style={{
                            marginTop: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 14px',
                            background: '#f8fafc',
                            borderRadius: 10,
                            border: '1px solid #e2e8f0',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#64748b', fontWeight: 600 }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                                <span>{isAutoPlaying ? 'Auto-advancing' : 'Manual preview'}</span>
                            </div>
                            <Link href="/lis-software" style={{ fontSize: 12, fontWeight: 700, color: '#2563eb', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                                Full Suite <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>

                    {/* ── Right Column: Live Terminal / Stage Preview ── */}
                    <div style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: 16,
                        padding: 'clamp(18px, 2.5vw, 28px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxSizing: 'border-box',
                    }}>
                        <div>
                            {/* Card Header */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    background: activeStage.bgGlow,
                                    border: `1px solid ${activeStage.accent}33`,
                                    color: activeStage.accent,
                                    padding: '5px 12px',
                                    borderRadius: 6,
                                    fontSize: 12,
                                    fontWeight: 700,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}>
                                    <Activity size={13} />
                                    <span>{activeStage.badge}</span>
                                </div>

                                <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    Stage {activeStage.step} of 05
                                </div>
                            </div>

                            <h3 style={{
                                fontSize: 'clamp(20px, 3vw, 26px)',
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: 10,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                letterSpacing: '-0.02em',
                                lineHeight: 1.25,
                            }}>
                                {activeStage.title}
                            </h3>

                            <p style={{
                                fontSize: 14.5,
                                color: '#475569',
                                lineHeight: 1.65,
                                marginBottom: 20,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}>
                                {activeStage.summary}
                            </p>

                            {/* Checklist Points */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                                {activeStage.points.map((pt, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                        <CheckCircle2 size={16} color={activeStage.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                                        <span style={{ fontSize: 13.5, color: '#1e293b', fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                            {pt}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Simulated Live Feed Chip */}
                        <div style={{
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            borderRadius: 14,
                            padding: '16px 18px',
                            boxShadow: '0 4px 16px rgba(15,23,42,0.04)',
                            boxSizing: 'border-box',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span style={{
                                        width: 8, height: 8, borderRadius: '50%',
                                        background: activeStage.mockData.statusColor,
                                        boxShadow: `0 0 8px ${activeStage.mockData.statusColor}`,
                                    }} />
                                    <span style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                        {activeStage.mockData.title}
                                    </span>
                                </div>
                                <span style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: activeStage.mockData.statusColor,
                                    background: `${activeStage.mockData.statusColor}14`,
                                    padding: '3px 8px',
                                    borderRadius: 6,
                                }}>
                                    {activeStage.mockData.status}
                                </span>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                                gap: 10,
                                marginTop: 12,
                                paddingTop: 12,
                                borderTop: '1px solid #f1f5f9',
                            }}>
                                {activeStage.mockData.details.map((item, dIdx) => (
                                    <div key={dIdx} style={{ fontSize: 12 }}>
                                        <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: 11, marginBottom: 2 }}>{item.label}</div>
                                        <div style={{
                                            fontWeight: 700,
                                            color: item.highlight ? activeStage.accent : '#0f172a',
                                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                                        }}>
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <style>{`
                @media (max-width: 860px) {
                    .showcase-card-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                }
            `}</style>
        </section>
    )
}
