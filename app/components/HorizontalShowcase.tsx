'use client'
import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Cpu, Sparkles, Server, MessageSquare, BarChart3, ScanLine, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const stages = [
    {
        step: '01',
        title: 'Smart Accession & Token Queue',
        category: 'Intake Automation',
        icon: <ScanLine size={24} />,
        accent: '#2563eb',
        bgGlow: 'rgba(37,99,235,0.08)',
        badge: 'Zero Waiting Time',
        summary: 'Register patients in under 30 seconds with auto-generated barcode labels and instant digital tokens.',
        points: [
            'Direct barcode printing on collection vials',
            'Auto-fetches previous patient records by phone number',
            'Instant doctor referral tagging with commission rules',
        ],
        mockData: {
            title: 'Live Accession Stream',
            id: 'PAT-2026-8941',
            patient: 'Ramesh Kumar (42M)',
            tests: 'Complete Blood Count (CBC), Lipid Profile',
            status: 'Barcoded & Queued',
            statusColor: '#2563eb',
        }
    },
    {
        step: '02',
        title: 'Bi-directional Machine Interfacing',
        category: 'Hardware Bridge',
        icon: <Server size={24} />,
        accent: '#059669',
        bgGlow: 'rgba(5,150,105,0.08)',
        badge: 'ASTM / HL7 Protocols',
        summary: 'Direct hardware connection with 200+ hematology and biochemistry analyzers — zero typing, zero human errors.',
        points: [
            'Seamless sync with Sysmex, Mindray, Roche, Abbott, Erba',
            'Results flow directly to patient test parameters',
            'Saves 3+ technician work hours every single day',
        ],
        mockData: {
            title: 'Analyzer Live Feed',
            id: 'Sysmex XN-350 / Mindray BS-240',
            patient: 'Sample Tube #B-40892',
            tests: '22 Parameters Synced in 1.4s',
            status: 'Data Bridge Active',
            statusColor: '#059669',
        }
    },
    {
        step: '03',
        title: 'AI Clinical Validation & Delta Checks',
        category: 'Intelligent Rules Engine',
        icon: <Cpu size={24} />,
        accent: '#7c3aed',
        bgGlow: 'rgba(124,58,237,0.08)',
        badge: 'Medical Precision',
        summary: 'Automated calculation of derived metrics, historical delta comparison, and instant red-flagging of abnormal values.',
        points: [
            'Age and gender-adjusted reference range mapping',
            'Compares with patient history to detect sudden anomalies',
            'Technician warning triggers on critical life-threatening values',
        ],
        mockData: {
            title: 'Delta Verification Matrix',
            id: 'Validation Engine v3.2',
            patient: 'Hb: 8.2 g/dL (Previous: 11.4)',
            tests: 'Auto-Flag: Severe Anemia Alert',
            status: 'Pending Pathologist Review',
            statusColor: '#d97706',
        }
    },
    {
        step: '04',
        title: 'Instant WhatsApp & QR Dispatch',
        category: 'Patient Experience',
        icon: <MessageSquare size={24} />,
        accent: '#2563eb',
        bgGlow: 'rgba(37,99,235,0.08)',
        badge: 'Delivered in 4 Seconds',
        summary: 'Approved PDF reports with doctor digital signatures and QR verification dispatched directly to patient WhatsApp.',
        points: [
            'Official WhatsApp Business API integration',
            'Dynamic QR code on PDF for instant authenticity verify',
            'Auto-sends SMS & email link backup simultaneously',
        ],
        mockData: {
            title: 'WhatsApp Dispatch Queue',
            id: 'WA-MSG-9045757272',
            patient: 'Delivered to: +91 98765 43210',
            tests: 'Report PDF (NABL Header + Digital Sign)',
            status: 'Delivered & Read',
            statusColor: '#16a34a',
        }
    },
    {
        step: '05',
        title: 'Multi-Branch MIS & Financials',
        category: 'Executive Control',
        icon: <BarChart3 size={24} />,
        accent: '#0891b2',
        bgGlow: 'rgba(8,145,178,0.08)',
        badge: 'Enterprise Scalability',
        summary: 'Control multiple collection centers from a single screen. Live revenue dashboards, dues recovery, and doctor payouts.',
        points: [
            'Consolidated chain analytics with branch-wise filters',
            'Automated B2B corporate billing & credit reconciliation',
            'Real-time TAT (Turn Around Time) tracking per technician',
        ],
        mockData: {
            title: 'Multi-Center Dashboard',
            id: '3 Centers Active',
            patient: 'Total Revenue Today: ₹48,600',
            tests: 'Completed: 142 · TAT Avg: 38 mins',
            status: 'Central Node Synced',
            statusColor: '#0891b2',
        }
    },
]

export default function HorizontalShowcase() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const tickingRef = useRef(false)
    const updateScrollState = () => {
        if (tickingRef.current) return
        tickingRef.current = true
        requestAnimationFrame(() => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
                const newLeft = scrollLeft > 20
                const newRight = scrollLeft < scrollWidth - clientWidth - 20
                setCanScrollLeft(prev => prev !== newLeft ? newLeft : prev)
                setCanScrollRight(prev => prev !== newRight ? newRight : prev)

                const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 360
                const index = Math.round(scrollLeft / (cardWidth + 24))
                const bounded = Math.min(Math.max(index, 0), stages.length - 1)
                setActiveIndex(prev => prev !== bounded ? bounded : prev)
            }
            tickingRef.current = false
        })
    }

    useEffect(() => {
        const el = scrollContainerRef.current
        if (!el) return
        el.addEventListener('scroll', updateScrollState, { passive: true })
        window.addEventListener('resize', updateScrollState, { passive: true })
        updateScrollState()
        return () => {
            el.removeEventListener('scroll', updateScrollState)
            window.removeEventListener('resize', updateScrollState)
        }
    }, [])

    const scrollToIndex = (index: number) => {
        if (!scrollContainerRef.current) return
        const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 360
        scrollContainerRef.current.scrollTo({
            left: index * (cardWidth + 24),
            behavior: 'smooth',
        })
        setActiveIndex(index)
    }

    const handlePrev = () => {
        if (activeIndex > 0) {
            scrollToIndex(activeIndex - 1)
        } else {
            scrollToIndex(0)
        }
    }

    const handleNext = () => {
        if (activeIndex < stages.length - 1) {
            scrollToIndex(activeIndex + 1)
        }
    }

    return (
        <section
            className="horizontal-showcase-section"
            style={{
                padding: '96px 0',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 50%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            {/* Background Ambient Accents */}
            <div style={{
                position: 'absolute', top: '20%', left: '50%',
                width: 'min(800px, 95vw)', height: 'min(800px, 95vw)',
                background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}>

                {/* Section Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 20,
                    marginBottom: 36,
                }}>
                    <div style={{ maxWidth: 640 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                            <span className="shimmer-badge" style={{
                                padding: '6px 16px',
                                borderRadius: 999,
                                fontSize: 12.5,
                                fontWeight: 700,
                                color: '#1d4ed8',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                            }}>
                                <Sparkles size={13} color="#2563eb" />
                                Interactive Platform Tour
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(28px, 5.5vw, 44px)',
                            fontWeight: 800,
                            color: '#0f172a',
                            marginBottom: 12,
                            letterSpacing: '-0.03em',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            lineHeight: 1.15,
                        }}>
                            From Sample Intake to <br className="mobile-break" />
                            <span style={{
                                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                Instant WhatsApp Report
                            </span>
                        </h2>

                        <p style={{
                            color: '#64748b',
                            fontSize: 'clamp(14.5px, 2.5vw, 17px)',
                            lineHeight: 1.65,
                            margin: 0,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            Scroll horizontally through the complete 5-stage automated engine that powers 200+ high-volume pathology labs.
                        </p>
                    </div>

                    {/* Desktop Slider Navigation Arrows */}
                    <div className="showcase-nav-btns" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <button
                            onClick={handlePrev}
                            disabled={!canScrollLeft}
                            aria-label="Previous step"
                            style={{
                                width: 44, height: 44,
                                borderRadius: '50%',
                                border: '1px solid #e2e8f0',
                                background: canScrollLeft ? '#ffffff' : '#f8fafc',
                                color: canScrollLeft ? '#0f172a' : '#cbd5e1',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: canScrollLeft ? 'pointer' : 'default',
                                boxShadow: canScrollLeft ? '0 4px 12px rgba(15,23,42,0.06)' : 'none',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={!canScrollRight}
                            aria-label="Next step"
                            style={{
                                width: 44, height: 44,
                                borderRadius: '50%',
                                border: '1px solid #e2e8f0',
                                background: canScrollRight ? '#2563eb' : '#f8fafc',
                                color: canScrollRight ? '#ffffff' : '#cbd5e1',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: canScrollRight ? 'pointer' : 'default',
                                boxShadow: canScrollRight ? '0 4px 14px rgba(37,99,235,0.3)' : 'none',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Stage Quick Tabs */}
                <div className="stage-tabs-wrapper" style={{
                    display: 'flex',
                    gap: 8,
                    overflowX: 'auto',
                    paddingBottom: 16,
                    marginBottom: 20,
                    scrollbarWidth: 'none',
                }}>
                    {stages.map((st, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '8px 16px',
                                borderRadius: 999,
                                fontSize: 13,
                                fontWeight: activeIndex === i ? 700 : 500,
                                background: activeIndex === i ? '#0f172a' : '#ffffff',
                                color: activeIndex === i ? '#ffffff' : '#64748b',
                                border: activeIndex === i ? '1px solid #0f172a' : '1px solid #e2e8f0',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s ease',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            <span style={{
                                width: 18, height: 18, borderRadius: '50%',
                                background: activeIndex === i ? '#3b82f6' : '#f1f5f9',
                                color: activeIndex === i ? '#ffffff' : '#64748b',
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 10, fontWeight: 800,
                            }}>
                                {st.step}
                            </span>
                            <span>{st.category}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div
                ref={scrollContainerRef}
                className="horizontal-track no-scrollbar"
                style={{
                    display: 'flex',
                    gap: 24,
                    overflowX: 'auto',
                    padding: '12px 20px 32px',
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch',
                    maxWidth: 1300,
                    margin: '0 auto',
                    boxSizing: 'border-box',
                }}
            >
                {stages.map((stage, idx) => (
                    <div
                        key={idx}
                        className="showcase-card"
                        style={{
                            flex: '0 0 auto',
                            width: 'clamp(300px, 85vw, 420px)',
                            scrollSnapAlign: 'start',
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            borderRadius: 24,
                            padding: '30px 26px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: activeIndex === idx
                                ? '0 20px 40px -12px rgba(37,99,235,0.12), 0 0 0 1px rgba(37,99,235,0.2)'
                                : '0 10px 28px -10px rgba(15,23,42,0.06)',
                            position: 'relative',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            boxSizing: 'border-box',
                        }}
                    >
                        {/* Card Top */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div style={{
                                    width: 48, height: 48,
                                    borderRadius: 14,
                                    background: `${stage.accent}15`,
                                    border: `1px solid ${stage.accent}30`,
                                    color: stage.accent,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    {stage.icon}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <span style={{
                                        fontSize: 11, fontWeight: 700, color: stage.accent,
                                        background: `${stage.accent}12`, border: `1px solid ${stage.accent}25`,
                                        padding: '4px 10px', borderRadius: 999,
                                        textTransform: 'uppercase', letterSpacing: '0.04em',
                                    }}>
                                        {stage.badge}
                                    </span>
                                    <span style={{
                                        fontSize: 16, fontWeight: 800, color: '#94a3b8',
                                        letterSpacing: '-0.02em',
                                    }}>
                                        {stage.step}
                                    </span>
                                </div>
                            </div>

                            <div style={{ fontSize: 12, fontWeight: 700, color: stage.accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                                {stage.category}
                            </div>

                            <h3 style={{
                                fontSize: 20,
                                fontWeight: 800,
                                color: '#0f172a',
                                marginBottom: 12,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.25,
                            }}>
                                {stage.title}
                            </h3>

                            <p style={{
                                color: '#64748b',
                                fontSize: 14,
                                lineHeight: 1.6,
                                marginBottom: 20,
                            }}>
                                {stage.summary}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                                {stage.points.map((pt, pIdx) => (
                                    <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#334155' }}>
                                        <CheckCircle2 size={15} color={stage.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Mini Mockup Chip */}
                        <div style={{
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: 14,
                            padding: '12px 14px',
                            boxSizing: 'border-box',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                                <span style={{ fontSize: 10.5, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {stage.mockData.title}
                                </span>
                                <span style={{
                                    fontSize: 10, fontWeight: 700,
                                    color: stage.mockData.statusColor,
                                    background: `${stage.mockData.statusColor}18`,
                                    padding: '2px 8px', borderRadius: 999,
                                }}>
                                    {stage.mockData.status}
                                </span>
                            </div>
                            <div style={{ fontSize: 12.5, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>
                                {stage.mockData.patient}
                            </div>
                            <div style={{ fontSize: 11.5, color: '#64748b' }}>
                                {stage.mockData.tests}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Progress Bar Indicator */}
            <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 16,
                    paddingTop: 12,
                }}>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        {stages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                style={{
                                    width: activeIndex === i ? 28 : 8,
                                    height: 8,
                                    borderRadius: 999,
                                    background: activeIndex === i ? '#2563eb' : '#cbd5e1',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>

                    <Link
                        href="/lis-software"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: 13.5,
                            fontWeight: 700,
                            color: '#2563eb',
                            textDecoration: 'none',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                    >
                        Explore all LIS capabilities in detail <ArrowRight size={15} />
                    </Link>
                </div>
            </div>

            <style>{`
                .horizontal-track::-webkit-scrollbar {
                    display: none;
                }
                .showcase-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px -10px rgba(37,99,235,0.15) !important;
                }
                .mobile-break { display: none; }

                @media (max-width: 768px) {
                    .horizontal-showcase-section { padding: 56px 0 !important; }
                    .mobile-break { display: block; }
                    .showcase-nav-btns { display: none !important; }
                }
            `}</style>
        </section>
    )
}
