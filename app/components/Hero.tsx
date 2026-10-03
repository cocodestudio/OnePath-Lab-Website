'use client'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { ArrowRight, Wand2, Search, HelpCircle, Bell, Zap, Shield, TrendingUp } from 'lucide-react'

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)
    const orb1Ref = useRef<HTMLDivElement>(null)
    const orb2Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
        let ticking = false
        let curScrollY = 0
        let normX = 0
        let normY = 0

        const applyTransform = () => {
            if (cardRef.current) {
                const tiltX = normY * 5
                const tiltY = normX * -5
                cardRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${curScrollY * -0.03}px)`
            }
            if (orb1Ref.current) {
                orb1Ref.current.style.transform = `translate(${normX * -20}px, ${normY * -16}px)`
            }
            if (orb2Ref.current) {
                orb2Ref.current.style.transform = `translate(${normX * 20}px, ${normY * 16}px)`
            }
            ticking = false
        }

        const handleScroll = () => {
            curScrollY = window.scrollY
            if (!ticking) {
                requestAnimationFrame(applyTransform)
                ticking = true
            }
        }

        const handleMouse = (e: MouseEvent) => {
            normX = e.clientX / window.innerWidth - 0.5
            normY = e.clientY / window.innerHeight - 0.5
            if (!ticking) {
                requestAnimationFrame(applyTransform)
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        if (typeof window !== 'undefined' && window.innerWidth > 860) {
            window.addEventListener('mousemove', handleMouse, { passive: true })
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousemove', handleMouse)
        }
    }, [])

    return (
        <section
            className="hero-section"
            style={{
                position: 'relative', minHeight: '100vh',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                background: '#ffffff',
                overflow: 'hidden', width: '100%', boxSizing: 'border-box',
            }}
        >
            {/* ─── Animated Mesh Gradient ─── */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                background: 'radial-gradient(ellipse 130% 80% at 50% -10%, rgba(219,234,254,0.95) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 70% 60% at 92% 50%, rgba(237,233,254,0.6) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 8% 80%, rgba(224,242,254,0.5) 0%, transparent 65%)',
            }} />

            {/* ─── Dot Grid ─── */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: 'radial-gradient(rgba(37,99,235,0.08) 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px',
                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 80%)',
            }} />

            {/* ─── Ambient Glow Orbs ─── */}
            <div ref={orb1Ref} style={{
                position: 'absolute', top: '-8%', left: '-6%', width: 'min(500px, 80vw)', height: 'min(500px, 80vw)',
                background: 'radial-gradient(circle, rgba(219,234,254,0.95) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
                transform: 'none',
                transition: 'transform 0.4s ease-out',
                overflow: 'hidden',
                willChange: 'transform',
            }} />
            <div ref={orb2Ref} style={{
                position: 'absolute', bottom: '5%', right: '-8%', width: 'min(450px, 80vw)', height: 'min(450px, 80vw)',
                background: 'radial-gradient(circle, rgba(237,233,254,0.8) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0,
                transform: 'none',
                transition: 'transform 0.4s ease-out',
                overflow: 'hidden',
                willChange: 'transform',
            }} />

            <div className="container hero-container" style={{ position: 'relative', zIndex: 2, padding: '0 clamp(16px, 3.5vw, 40px)', maxWidth: 1440, width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>

                {/* ─── Modern Sharp Enterprise Eyebrow ─── */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                    <div className="section-badge">
                        <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#2563eb', flexShrink: 0 }} />
                        <span className="badge-tag">Govt. ABDM M1 Certified</span>
                        <span className="badge-dot" />
                        <span className="badge-desc">200+ Analyzers Sync · Dual AI Engine</span>
                    </div>
                </div>

                {/* ─── SEO High-Intent Headline (Single Unified H1) ─── */}
                <div className="hero-text-area" style={{ maxWidth: 1040, margin: '0 auto', textAlign: 'center', paddingBottom: 32 }}>
                    <h1 className="hero-main-h1" style={{ margin: 0, padding: 0 }}>
                        <span className="hero-title-top" style={{
                            display: 'block',
                            fontSize: 'clamp(30px, 6.2vw, 68px)', fontWeight: 800, lineHeight: 1.14,
                            color: '#0f172a', marginBottom: 6, letterSpacing: '-0.035em',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            India&apos;s #1 AI &amp; ABDM-Ready
                        </span>

                        <span className="hero-title-bottom shimmer-text" style={{
                            display: 'block',
                            fontSize: 'clamp(30px, 6.2vw, 68px)', fontWeight: 900, lineHeight: 1.14,
                            marginBottom: 20, letterSpacing: '-0.035em', fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            Pathology Lab Software &amp; Cloud LIS
                        </span>
                    </h1>

                    {/* ─── Sharp Enterprise Feature Chips ─── */}
                    <div className="hero-proof-row" style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                        {[
                            { icon: <Zap size={14} color="#2563eb" />, text: 'Bi-directional Analyzer Interfacing (200+ Models)', border: '#cbd5e1', col: '#0f172a' },
                            { icon: <Shield size={14} color="#059669" />, text: 'ABDM M1 & Earn DHIS Cash Incentives', border: '#cbd5e1', col: '#0f172a' },
                            { icon: <TrendingUp size={14} color="#7c3aed" />, text: 'Dual AI Copilot & Abnormal Delta Checks', border: '#cbd5e1', col: '#0f172a' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                background: '#ffffff', border: `1px solid ${item.border}`,
                                borderRadius: 8, padding: '7px 15px', fontSize: 13, fontWeight: 600, color: item.col,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                boxShadow: '0 1px 3px rgba(15,23,42,0.04)',
                            }}>
                                {item.icon} <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="hero-desc" style={{
                        fontSize: 'clamp(15.5px, 2.2vw, 18.5px)', color: '#475569',
                        maxWidth: 780, margin: '0 auto 28px', lineHeight: 1.68, fontWeight: 500,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                        Eliminate manual typing errors with automated machine interfacing, push records to National Health Locker via ABDM, calculate clinical delta checks with AI, and deliver QR-verified PDF reports directly on patient WhatsApp in seconds.
                    </p>

                    {/* ─── CTAs with Modern 12px Radius ─── */}
                    <div className="hero-cta-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 14 }}>
                        <Link href="/trial" className="btn-primary" style={{
                            padding: '16px 36px',
                            fontSize: 16,
                            borderRadius: 12,
                            boxShadow: '0 8px 24px -4px rgba(37,99,235,0.4)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            fontWeight: 700,
                        }}>
                            Start 7-Day Free Trial <ArrowRight size={17} />
                        </Link>
                        <Link href="/pricing" style={{
                            padding: '16px 30px',
                            fontSize: 16,
                            borderRadius: 12,
                            background: '#ffffff',
                            color: '#0f172a',
                            border: '1px solid #cbd5e1',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            fontWeight: 700,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        }}>
                            View Plans
                        </Link>
                    </div>

                    <p style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        No credit card required · Instant full access · Zero setup fees
                    </p>
                </div>

                {/* ─── 3D White Mockup with Full Width ─── */}
                <div className="mockup-wrapper" style={{
                    width: '100%', maxWidth: 1280, margin: '0 auto',
                    perspective: '1400px', perspectiveOrigin: '50% 30%', boxSizing: 'border-box',
                }}>

                    <div ref={cardRef} className="mockup-tilt-card shimmer-border" style={{
                        transform: 'rotateX(2deg) rotateY(0deg)',
                        transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)', transformStyle: 'preserve-3d',
                        borderRadius: '20px',
                        padding: '1.5px',
                        boxShadow: '0 24px 48px -18px rgba(37,99,235,0.2), 0 0 0 1px rgba(37,99,235,0.08)',
                    }}>
                        <div className="mockup-container" style={{
                            background: '#f8fafc', borderRadius: '18.5px', overflow: 'hidden',
                            display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box',
                        }}>
                            {/* Browser bar */}
                            <div className="mockup-browser-bar" style={{
                                background: '#ffffff',
                                padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10,
                                borderBottom: '1px solid #e2e8f0'
                            }}>
                                <div style={{ display: 'flex', gap: 6 }}>
                                    {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
                                        <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                                    ))}
                                </div>
                                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                    <div style={{
                                        background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 6,
                                        padding: '4px 16px', fontSize: 11.5, color: '#64748b',
                                        fontFamily: "'Plus Jakarta Sans', sans-serif", minWidth: 160, textAlign: 'center',
                                        fontWeight: 600,
                                    }}>🔒 https://lis.onepathlab.com</div>
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="mockup-header" style={{
                                padding: '12px 18px', display: 'flex', alignItems: 'center',
                                justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0',
                                background: '#ffffff', width: '100%', boxSizing: 'border-box',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        {[16, 16, 10].map((w, i) => (
                                            <div key={i} style={{ width: w, height: 2, background: i < 2 ? '#334155' : '#94a3b8', borderRadius: 2 }} />
                                        ))}
                                    </div>
                                    <span style={{
                                        fontSize: 16, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                    }}>OnePath Lab</span>
                                </div>
                                <div className="hide-mobile" style={{ flex: 1, maxWidth: 380, margin: '0 16px' }}>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 8, background: '#f8fafc',
                                        border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: 8
                                    }}>
                                        <Search size={14} color="#64748b" />
                                        <span style={{ color: '#94a3b8', fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                            Search patient by name, ID, phone...
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <div style={{ border: '1px solid #e2e8f0', padding: '4px 10px', borderRadius: 6, fontSize: 12, color: '#334155', fontWeight: 600, background: '#f8fafc', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Center 1</div>
                                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', flexShrink: 0 }} />
                                    <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        <HelpCircle size={12} /> Help
                                    </div>
                                    <Bell size={15} color="#64748b" style={{ cursor: 'pointer', flexShrink: 0 }} />
                                </div>
                            </div>

                            {/* App Body */}
                            <div style={{ display: 'flex', flex: 1, background: '#f8fafc', width: '100%' }}>
                                {/* Sidebar (Desktop) */}
                                <div className="hide-mobile" style={{
                                    width: 190, borderRight: '1px solid #e2e8f0', background: '#ffffff',
                                    padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 3,
                                }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)', color: '#fff',
                                        padding: '9px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                                        boxShadow: '0 2px 8px rgba(37,99,235,0.25)', marginBottom: 6,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    }}>+ New Registration</div>
                                    {[
                                        { em: '⚡', label: 'Accession', active: true },
                                        { em: '👩‍💼', label: 'Reception Desk', active: false },
                                        { em: '🔬', label: 'Analysis', active: false },
                                        { em: '📦', label: 'Inventory & Stock', active: false },
                                        { em: '📄', label: 'Reports', active: false },
                                    ].map((item, i) => (
                                        <div key={i} style={{
                                            padding: '8px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600,
                                            color: item.active ? '#2563eb' : '#64748b',
                                            background: item.active ? '#eff6ff' : 'transparent',
                                            borderLeft: item.active ? '2px solid #2563eb' : '2px solid transparent',
                                            display: 'flex', alignItems: 'center', gap: 6,
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        }}>
                                            <span>{item.em}</span> {item.label}
                                        </div>
                                    ))}
                                </div>

                                {/* Main content */}
                                <div className="mockup-main" style={{ flex: 1, padding: '16px', boxSizing: 'border-box', overflow: 'hidden' }}>
                                    {/* Stats Cards */}
                                    <div className="mockup-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 10, marginBottom: 12 }}>
                                        {[
                                            { label: "Today's Reports", count: '128', delta: '+12%', color: '#2563eb', bg: '#eff6ff', bars: [40, 60, 45, 75, 55, 88, 70] },
                                            { label: 'Pending Analysis', count: '12', delta: '-3', color: '#7c3aed', bg: '#f5f3ff', bars: [80, 60, 70, 55, 45, 30, 20] },
                                            { label: 'Revenue Today', count: '₹18,400', delta: '+8%', color: '#059669', bg: '#f0fdf4', bars: [40, 50, 60, 65, 70, 80, 90] },
                                        ].map((card, i) => (
                                            <div key={i} className="mockup-card" style={{
                                                background: '#ffffff', border: '1px solid #e2e8f0',
                                                borderRadius: 10, padding: '14px', boxSizing: 'border-box',
                                                boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                                            }}>
                                                <div style={{ fontSize: 10, fontWeight: 700, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                                    {card.label}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 8 }}>
                                                    <div style={{ fontSize: 21, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{card.count}</div>
                                                    <span style={{ fontSize: 10.5, fontWeight: 700, color: card.color, background: card.bg, padding: '2px 6px', borderRadius: 4 }}>{card.delta}</span>
                                                </div>
                                                <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 22 }}>
                                                    {card.bars.map((h, j) => (
                                                        <div key={j} style={{ flex: 1, height: `${h}%`, borderRadius: 2, background: j === 6 ? card.color : `${card.color}28` }} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Patient Table Preview */}
                                    <div className="mockup-patient-table" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 10, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                                        <div style={{ padding: '8px 12px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Live Registrations</span>
                                            <span style={{ fontSize: 10.5, color: '#059669', fontWeight: 700, background: '#f0fdf4', padding: '2px 8px', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                                                Live
                                            </span>
                                        </div>
                                        {[
                                            { name: 'Ramesh Kumar', test: 'CBC + LFT', status: 'Ready', sc: '#059669', sb: '#f0fdf4' },
                                            { name: 'Priya Sharma', test: 'Thyroid Panel', status: 'Processing', sc: '#d97706', sb: '#fffbeb' },
                                        ].map((row, i) => (
                                            <div key={i} style={{ padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: i < 1 ? '1px solid #f8fafc' : 'none' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: `linear-gradient(135deg, #e0e7ff, #dbeafe)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#2563eb' }}>{row.name[0]}</div>
                                                    <div>
                                                        <div style={{ fontSize: 12, fontWeight: 600, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{row.name}</div>
                                                        <div style={{ fontSize: 10.5, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{row.test}</div>
                                                    </div>
                                                </div>
                                                <span style={{ fontSize: 10.5, fontWeight: 700, color: row.sc, background: row.sb, padding: '2px 8px', borderRadius: 4 }}>{row.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ─── Trust Stats ─── */}
                <div className="hero-stats-row" style={{ maxWidth: 820, margin: '36px auto 0' }}>
                    {[
                        { number: '200+', label: 'Labs Onboarded' },
                        { number: '10L+', label: 'Reports Done' },
                        { number: '99.9%', label: 'Uptime SLA' },
                        { number: '4.9 ★', label: 'Verified Rating' },
                    ].map((stat, i) => (
                        <div key={i} className="hero-stat-item">
                            <div className="stat-num">{stat.number}</div>
                            <div className="stat-lbl">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hero-section { padding-top: 120px; padding-bottom: 40px; }
                .mockup-container { min-height: 380px; }

                /* Desktop Stats Row */
                .hero-stats-row {
                    display: flex;
                    justify-content: center;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    background: #ffffff;
                    box-shadow: 0 4px 16px -4px rgba(15,23,42,0.06);
                    box-sizing: border-box;
                    width: 100%;
                }
                .hero-stat-item {
                    flex: 1 1 150px;
                    text-align: center;
                    padding: 18px 12px;
                    border-right: 1px solid #e2e8f0;
                    box-sizing: border-box;
                }
                .hero-stat-item:last-child {
                    border-right: none;
                }
                .stat-num {
                    font-size: 26px;
                    font-weight: 800;
                    color: #0f172a;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    letter-spacing: -0.03em;
                    margin-bottom: 3px;
                }
                .stat-lbl {
                    font-size: 11.5px;
                    color: #64748b;
                    font-weight: 600;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 860px) {
                    .hero-section { padding-top: 84px !important; padding-bottom: 24px !important; }
                    .hide-mobile { display: none !important; }
                    .mockup-wrapper {
                        perspective: none !important;
                        overflow: hidden !important;
                        max-width: 100% !important;
                    }
                    .mockup-tilt-card {
                        transform: none !important;
                        box-shadow: 0 10px 30px -10px rgba(37,99,235,0.18) !important;
                    }
                    .mockup-container { min-height: auto !important; }
                    .mockup-browser-bar > div:nth-child(2) > div {
                        min-width: 0 !important;
                        max-width: 180px !important;
                        font-size: 10.5px !important;
                        padding: 3px 8px !important;
                    }
                    .mockup-main { padding: 10px !important; }
                    .mockup-grid {
                        display: flex !important; overflow-x: auto; gap: 8px !important;
                        scroll-snap-type: x mandatory; padding-bottom: 4px;
                        -ms-overflow-style: none; scrollbar-width: none;
                    }
                    .mockup-grid::-webkit-scrollbar { display: none; }
                    .mockup-card { min-width: 72%; scroll-snap-align: start; padding: 10px !important; }
                }

                @media (max-width: 640px) {
                    .hero-container { padding: 0 14px !important; }
                    .hero-badge { font-size: 11px !important; padding: 6px 12px !important; }
                    .hero-title-top, .hero-title-bottom {
                        font-size: clamp(26px, 8vw, 36px) !important;
                        margin-bottom: 3px !important;
                    }
                    .hero-title-bottom { margin-bottom: 14px !important; }
                    .proof-pill { font-size: 11px !important; padding: 5px 10px !important; }
                    .hero-proof-row { gap: 6px !important; margin-bottom: 16px !important; }
                    .hero-desc { font-size: 14px !important; line-height: 1.6 !important; margin-bottom: 20px !important; }
                    .hero-cta-wrapper {
                        flex-direction: column !important;
                        width: 100% !important;
                        gap: 10px !important;
                    }
                    .hero-cta-primary {
                        width: 100% !important;
                        max-width: 320px !important;
                        padding: 13px 20px !important;
                        font-size: 14.5px !important;
                    }

                    /* 2x2 Grid for Mobile Stats */
                    .hero-stats-row {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        border-radius: 14px !important;
                        margin-top: 22px !important;
                    }
                    .hero-stat-item {
                        padding: 12px 8px !important;
                        border-right: 1px solid #e2e8f0 !important;
                        border-bottom: 1px solid #e2e8f0 !important;
                    }
                    .hero-stat-item:nth-child(2n) {
                        border-right: none !important;
                    }
                    .hero-stat-item:nth-child(3), .hero-stat-item:nth-child(4) {
                        border-bottom: none !important;
                    }
                    .stat-num { font-size: 20px !important; }
                    .stat-lbl { font-size: 10px !important; }
                }

                @media (max-width: 360px) {
                    .hero-container { padding: 0 10px !important; }
                    .proof-pill { font-size: 10px !important; padding: 4px 8px !important; }
                }
            `}</style>
        </section>
    )
}
