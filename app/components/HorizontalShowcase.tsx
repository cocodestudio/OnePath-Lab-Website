'use client'
import React, { useRef, useState, useEffect, useCallback } from 'react'
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
    const sectionRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [scrollProgress, setScrollProgress] = useState(0)
    const isMobileRef = useRef(false)

    // Calculate translation and active card on vertical page scroll
    const handleScroll = useCallback(() => {
        const section = sectionRef.current
        const track = trackRef.current
        if (!section || !track) return

        const rect = section.getBoundingClientRect()
        const totalScrollable = section.offsetHeight - window.innerHeight
        if (totalScrollable <= 0) return

        const currentScrolled = -rect.top
        const progress = Math.min(Math.max(currentScrolled / totalScrollable, 0), 1)

        setScrollProgress(progress)

        // Calculate max horizontal distance to translate
        const paddingOffset = window.innerWidth <= 640 ? 24 : 80
        const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth + paddingOffset)
        const currentTranslate = progress * maxTranslate

        track.style.transform = `translate3d(-${currentTranslate}px, 0, 0)`

        // Calculate active card index (0 to 4)
        const active = Math.min(Math.round(progress * (stages.length - 1)), stages.length - 1)
        setActiveIndex(active)
    }, [])

    useEffect(() => {
        const checkMobile = () => {
            isMobileRef.current = window.innerWidth < 768
        }
        checkMobile()

        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', checkMobile, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })

        // Initial compute
        handleScroll()

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', checkMobile)
            window.removeEventListener('resize', onScroll)
        }
    }, [handleScroll])

    // Smooth scroll page to jump directly to any stage
    const scrollToStage = (index: number) => {
        const section = sectionRef.current
        if (!section) return
        const totalScrollable = section.offsetHeight - window.innerHeight
        const targetTop = section.offsetTop + (index / (stages.length - 1)) * totalScrollable
        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        })
    }

    const handlePrev = () => {
        if (activeIndex > 0) {
            scrollToStage(activeIndex - 1)
        }
    }

    const handleNext = () => {
        if (activeIndex < stages.length - 1) {
            scrollToStage(activeIndex + 1)
        }
    }

    return (
        <section
            ref={sectionRef}
            className="horizontal-showcase-section"
            style={{
                position: 'relative',
                height: '320vh',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 50%, #ffffff 100%)',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            {/* Sticky Viewport Container */}
            <div
                className="sticky-tour-viewport"
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    width: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '36px 0 24px',
                    boxSizing: 'border-box',
                    zIndex: 2,
                }}
            >
                {/* Background Ambient Accents */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    width: 'min(800px, 95vw)',
                    height: 'min(800px, 95vw)',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)',
                    transform: 'translateX(-50%)',
                    pointerEvents: 'none',
                    zIndex: -1,
                }} />

                {/* 1. Header & Stage Navigation */}
                <div className="container" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 20px', width: '100%', boxSizing: 'border-box' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 16,
                        marginBottom: 18,
                    }}>
                        <div style={{ maxWidth: 640 }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                                <span className="shimmer-badge" style={{
                                    padding: '5px 14px',
                                    borderRadius: 999,
                                    fontSize: 12,
                                    fontWeight: 700,
                                    color: '#1d4ed8',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.04em',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                }}>
                                    <Sparkles size={13} color="#2563eb" />
                                    Interactive Platform Tour
                                </span>
                            </div>

                            <h2 style={{
                                fontSize: 'clamp(24px, 4vw, 38px)',
                                fontWeight: 700,
                                color: '#0f172a',
                                marginBottom: 6,
                                letterSpacing: '-0.015em',
                                lineHeight: 1.2,
                            }}>
                                From Sample Intake to{' '}
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
                                fontSize: 'clamp(13.5px, 2vw, 15px)',
                                lineHeight: 1.5,
                                margin: 0,
                            }}>
                                Scroll page naturally to progress through the 5-stage automated laboratory pipeline.
                            </p>
                        </div>

                        {/* Navigation Controls */}
                        <div className="showcase-nav-btns" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <button
                                onClick={handlePrev}
                                disabled={activeIndex === 0}
                                aria-label="Previous step"
                                style={{
                                    width: 40, height: 40,
                                    borderRadius: '50%',
                                    border: '1px solid #e2e8f0',
                                    background: activeIndex > 0 ? '#ffffff' : '#f8fafc',
                                    color: activeIndex > 0 ? '#0f172a' : '#cbd5e1',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: activeIndex > 0 ? 'pointer' : 'default',
                                    boxShadow: activeIndex > 0 ? '0 4px 12px rgba(15,23,42,0.06)' : 'none',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={activeIndex === stages.length - 1}
                                aria-label="Next step"
                                style={{
                                    width: 40, height: 40,
                                    borderRadius: '50%',
                                    border: '1px solid #e2e8f0',
                                    background: activeIndex < stages.length - 1 ? '#2563eb' : '#f8fafc',
                                    color: activeIndex < stages.length - 1 ? '#ffffff' : '#cbd5e1',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: activeIndex < stages.length - 1 ? 'pointer' : 'default',
                                    boxShadow: activeIndex < stages.length - 1 ? '0 4px 14px rgba(37,99,235,0.3)' : 'none',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Stage Quick Tabs */}
                    <div className="stage-tabs-wrapper" style={{
                        display: 'flex',
                        gap: 8,
                        overflowX: 'auto',
                        paddingBottom: 6,
                        scrollbarWidth: 'none',
                    }}>
                        {stages.map((st, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToStage(i)}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '6px 14px',
                                    borderRadius: 999,
                                    fontSize: 12.5,
                                    fontWeight: activeIndex === i ? 700 : 500,
                                    background: activeIndex === i ? '#0f172a' : '#ffffff',
                                    color: activeIndex === i ? '#ffffff' : '#64748b',
                                    border: activeIndex === i ? '1px solid #0f172a' : '1px solid #e2e8f0',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.25s ease',
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

                {/* 2. Scroll-Linked Horizontal Cards Track */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                        padding: '10px 0',
                    }}
                >
                    <div
                        ref={trackRef}
                        className="horizontal-cards-track"
                        style={{
                            display: 'flex',
                            gap: 24,
                            paddingLeft: 'max(16px, calc((100% - 1200px) / 2))',
                            paddingRight: 'max(16px, calc((100% - 1200px) / 2))',
                            width: 'max-content',
                            willChange: 'transform',
                            transition: 'transform 0.08s linear',
                        }}
                    >
                        {stages.map((stage, idx) => {
                            const isActive = activeIndex === idx
                            return (
                                <div
                                    key={idx}
                                    className="showcase-card"
                                    onClick={() => scrollToStage(idx)}
                                    style={{
                                        width: 'clamp(270px, 80vw, 420px)',
                                        flexShrink: 0,
                                        background: '#ffffff',
                                        border: isActive ? `1.5px solid ${stage.accent}` : '1px solid #e2e8f0',
                                        borderRadius: 22,
                                        padding: '24px 22px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: isActive
                                            ? `0 20px 40px -12px ${stage.accent}25, 0 0 0 1px ${stage.accent}30`
                                            : '0 8px 24px -10px rgba(15,23,42,0.06)',
                                        position: 'relative',
                                        transform: isActive ? 'scale(1.02)' : 'scale(0.97)',
                                        opacity: isActive ? 1 : 0.85,
                                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                        cursor: 'pointer',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    {/* Card Content Top */}
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                                            <div style={{
                                                width: 44, height: 44,
                                                borderRadius: 12,
                                                background: `${stage.accent}14`,
                                                border: `1px solid ${stage.accent}25`,
                                                color: stage.accent,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                {stage.icon}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                                <span style={{
                                                    fontSize: 10.5, fontWeight: 700, color: stage.accent,
                                                    background: `${stage.accent}12`, border: `1px solid ${stage.accent}25`,
                                                    padding: '3px 9px', borderRadius: 999,
                                                    textTransform: 'uppercase', letterSpacing: '0.04em',
                                                }}>
                                                    {stage.badge}
                                                </span>
                                                <span style={{
                                                    fontSize: 15, fontWeight: 800, color: '#94a3b8',
                                                }}>
                                                    {stage.step}
                                                </span>
                                            </div>
                                        </div>

                                        <div style={{ fontSize: 11.5, fontWeight: 700, color: stage.accent, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                                            {stage.category}
                                        </div>

                                        <h3 style={{
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: '#0f172a',
                                            marginBottom: 10,
                                            lineHeight: 1.3,
                                            letterSpacing: '-0.01em',
                                        }}>
                                            {stage.title}
                                        </h3>

                                        <p style={{
                                            color: '#64748b',
                                            fontSize: 13.5,
                                            lineHeight: 1.6,
                                            marginBottom: 16,
                                        }}>
                                            {stage.summary}
                                        </p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
                                            {stage.points.map((pt, pIdx) => (
                                                <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12.5, color: '#334155' }}>
                                                    <CheckCircle2 size={14} color={stage.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                                                    <span>{pt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interactive Mini Mockup Chip */}
                                    <div style={{
                                        background: '#f8fafc',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: 12,
                                        padding: '10px 12px',
                                        boxSizing: 'border-box',
                                    }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                                            <span style={{ fontSize: 10, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                {stage.mockData.title}
                                            </span>
                                            <span style={{
                                                fontSize: 9.5, fontWeight: 700,
                                                color: stage.mockData.statusColor,
                                                background: `${stage.mockData.statusColor}18`,
                                                padding: '2px 7px', borderRadius: 999,
                                            }}>
                                                {stage.mockData.status}
                                            </span>
                                        </div>
                                        <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', marginBottom: 2 }}>
                                            {stage.mockData.patient}
                                        </div>
                                        <div style={{ fontSize: 11, color: '#64748b' }}>
                                            {stage.mockData.tests}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* 3. Bottom Progress Bar & Link */}
                <div className="container" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 20px', width: '100%', boxSizing: 'border-box' }}>
                    {/* Linear Progress Bar */}
                    <div style={{
                        width: '100%',
                        height: 4,
                        background: '#e2e8f0',
                        borderRadius: 999,
                        overflow: 'hidden',
                        marginBottom: 12,
                    }}>
                        <div style={{
                            width: `${Math.max(scrollProgress * 100, 6)}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                            borderRadius: 999,
                            transition: 'width 0.1s linear',
                        }} />
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 12,
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{
                                display: 'inline-block',
                                width: 7, height: 7, borderRadius: '50%',
                                background: scrollProgress >= 0.98 ? '#16a34a' : '#2563eb',
                                boxShadow: scrollProgress >= 0.98 ? '0 0 8px #16a34a' : '0 0 8px #2563eb',
                            }} />
                            <span style={{ fontSize: 12, fontWeight: 600, color: '#64748b' }}>
                                {scrollProgress >= 0.98 ? 'Tour completed · Scroll down for workflow' : `Stage ${activeIndex + 1} of ${stages.length} · Scroll down to continue tour`}
                            </span>
                        </div>

                        <Link
                            href="/lis-software"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                fontSize: 13,
                                fontWeight: 700,
                                color: '#2563eb',
                                textDecoration: 'none',
                            }}
                        >
                            Explore all LIS capabilities in detail <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                .sticky-tour-viewport {
                    overflow: hidden !important;
                    max-width: 100vw !important;
                }
                @media (max-width: 768px) {
                    .horizontal-showcase-section { height: 280vh !important; }
                    .sticky-tour-viewport { padding: 24px 0 16px !important; }
                    .showcase-nav-btns { display: none !important; }
                }
            `}</style>
        </section>
    )
}
