'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Wand2, Search, Settings, HelpCircle, Bell, Zap, Shield, TrendingUp, Play } from 'lucide-react'



export default function Hero() {
    const [mounted, setMounted] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
        }
        window.addEventListener('mousemove', handleMouse)
        return () => window.removeEventListener('mousemove', handleMouse)
    }, [])

    const tiltX = (mousePos.y - 0.5) * 6
    const tiltY = (mousePos.x - 0.5) * -6

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
                backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px',
                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 80%)',
            }} />

            {/* ─── Light Glow Orbs ─── */}
            <div style={{
                position: 'absolute', top: '-8%', left: '-6%', width: 'min(700px, 100vw)', height: 'min(700px, 100vw)',
                background: 'radial-gradient(circle, rgba(219,234,254,0.95) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
                transform: mounted ? `translate(${(mousePos.x - 0.5) * -22}px, ${(mousePos.y - 0.5) * -18}px)` : 'none',
                transition: 'transform 1.4s ease',
            }} />
            <div style={{
                position: 'absolute', bottom: '5%', right: '-8%', width: 'min(600px, 100vw)', height: 'min(600px, 100vw)',
                background: 'radial-gradient(circle, rgba(237,233,254,0.85) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0,
                transform: mounted ? `translate(${(mousePos.x - 0.5) * 22}px, ${(mousePos.y - 0.5) * 18}px)` : 'none',
                transition: 'transform 1.6s ease',
            }} />

            {/* ─── Floating Accent Dots (Desktop only for performance) ─── */}
            {mounted && [
                { top: '18%', left: '6%', size: 6, delay: 0, color: '#bfdbfe' },
                { top: '22%', left: '91%', size: 4, delay: 0.7, color: '#ddd6fe' },
                { top: '60%', left: '4%', size: 5, delay: 1.3, color: '#bae6fd' },
                { top: '72%', left: '93%', size: 4, delay: 0.3, color: '#bfdbfe' },
            ].map((p, i) => (
                <div key={i} className="hide-mobile" style={{
                    position: 'absolute', top: p.top, left: p.left,
                    width: p.size, height: p.size, borderRadius: '50%',
                    background: p.color, boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
                    animation: `float-dot ${3.5 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${p.delay}s`, zIndex: 1,
                }} />
            ))}

            <div className="container hero-container" style={{ position: 'relative', zIndex: 2, padding: '0 20px', width: '100%', boxSizing: 'border-box' }}>

                {/* ─── Eyebrow Badge ─── */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                    <span className="hero-badge" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
                        border: '1px solid rgba(37,99,235,0.2)', borderRadius: 100,
                        padding: '6px 18px', fontSize: 13, fontWeight: 700, color: '#2563eb',
                        boxShadow: '0 2px 10px rgba(37,99,235,0.08)', letterSpacing: '0.01em',
                        textAlign: 'center', maxWidth: '100%',
                    }}>
                        <Wand2 size={13} color="#6366f1" style={{ flexShrink: 0 }} />
                        <span>India&apos;s most intelligent cloud LIS — 200+ labs</span>
                    </span>
                </div>

                {/* ─── Storytelling Headline ─── */}
                <div className="hero-text-area" style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center', paddingBottom: 36 }}>
                    <h1 className="hero-title-top" style={{
                        fontSize: 'clamp(28px, 7vw, 72px)', fontWeight: 900, lineHeight: 1.1,
                        color: '#0f172a', marginBottom: 4, letterSpacing: '-0.03em',
                        fontFamily: "'Syne', sans-serif",
                    }}>
                        Your Lab is Working
                    </h1>

                    <h1 className="hero-title-bottom" style={{
                        fontSize: 'clamp(28px, 7vw, 72px)', fontWeight: 900, lineHeight: 1.1,
                        marginBottom: 22, letterSpacing: '-0.03em', fontFamily: "'Syne', sans-serif",
                        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #a855f7 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                        Hard. Not Smart.
                    </h1>

                    {/* ─── Proof Point Pills ─── */}
                    <div className="hero-proof-row" style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                        {[
                            { icon: <Zap size={12} color="#d97706" />, text: 'Manual entry wastes 3+ hrs/day', bg: '#fffbeb', border: '#fde68a', col: '#78350f' },
                            { icon: <Shield size={12} color="#059669" />, text: 'Patients wait hours for reports', bg: '#f0fdf4', border: '#bbf7d0', col: '#064e3b' },
                            { icon: <TrendingUp size={12} color="#7c3aed" />, text: 'No live MIS for revenue & TAT', bg: '#f5f3ff', border: '#ddd6fe', col: '#3b0764' },
                        ].map((item, i) => (
                            <span key={i} className="proof-pill" style={{
                                display: 'inline-flex', alignItems: 'center', gap: 5,
                                background: item.bg, border: `1px solid ${item.border}`,
                                borderRadius: 100, padding: '5px 12px', fontSize: 12, fontWeight: 600, color: item.col,
                            }}>{item.icon} <span>{item.text}</span></span>
                        ))}
                    </div>

                    <p className="hero-desc" style={{
                        fontSize: 'clamp(15px, 2.2vw, 18.5px)', color: '#475569',
                        maxWidth: 580, margin: '0 auto 30px', lineHeight: 1.68, fontWeight: 500,
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        OnePath automates machine interfacing, generates AI-powered reports, and delivers them via WhatsApp — instantly.
                    </p>

                    {/* ─── CTAs ─── */}
                    <div className="hero-cta-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
                        <Link href="/trial" className="hero-cta-primary" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 36px',
                            fontSize: 15.5, fontWeight: 700, background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                            color: '#ffffff', borderRadius: 100, textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 8px 24px -4px rgba(37,99,235,0.4)', transition: 'all 0.3s ease',
                            justifyContent: 'center',
                        }}>
                            Start 7-Day Free Trial <ArrowRight size={17} />
                        </Link>
                    </div>

                    <p style={{ fontSize: 11.5, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        No credit card · Instant 7-day full access · Cancel anytime
                    </p>
                </div>

                {/* ─── 3D Premium White Mockup ─── */}
                <div className="mockup-wrapper" style={{
                    width: '100%', maxWidth: 1100, margin: '0 auto',
                    perspective: '1400px', perspectiveOrigin: '50% 30%', boxSizing: 'border-box',
                }}>
                    <div className="mockup-tilt-card" style={{
                        transform: mounted
                            ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${scrollY * -0.04}px)`
                            : 'rotateX(4deg)',
                        transition: 'transform 0.18s ease', transformStyle: 'preserve-3d',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, rgba(37,99,235,0.4) 0%, rgba(99,102,241,0.3) 50%, rgba(124,58,237,0.4) 100%)',
                        padding: '1.5px',
                        boxShadow: '0 24px 48px -18px rgba(37,99,235,0.2), 0 0 0 1px rgba(37,99,235,0.06)',
                    }}>
                        <div className="mockup-container" style={{
                            background: '#f8fafc', borderRadius: '18.5px', overflow: 'hidden',
                            display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box',
                        }}>
                            {/* Browser bar */}
                            <div className="mockup-browser-bar" style={{
                                background: 'linear-gradient(to right, #f1f5f9, #ffffff)',
                                padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10,
                                borderBottom: '1px solid #e2e8f0'
                            }}>
                                <div style={{ display: 'flex', gap: 5 }}>
                                    {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
                                        <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                                    ))}
                                </div>
                                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                    <div style={{
                                        background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 6,
                                        padding: '3px 16px', fontSize: 11.5, color: '#64748b',
                                        fontFamily: "'DM Sans', sans-serif", minWidth: 150, textAlign: 'center',
                                    }}>🔒 lis.onepathlab.com</div>
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
                                        {[18, 18, 12].map((w, i) => (
                                            <div key={i} style={{ width: w, height: 2, background: i < 2 ? '#334155' : '#94a3b8', borderRadius: 2 }} />
                                        ))}
                                    </div>
                                    <span style={{
                                        fontSize: 17, fontWeight: 800, fontFamily: 'Syne, sans-serif',
                                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                    }}>OnePath Lab</span>
                                </div>
                                <div className="hide-mobile" style={{ flex: 1, maxWidth: 400, margin: '0 16px' }}>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 8, background: '#f1f5f9',
                                        border: '1px solid #e2e8f0', padding: '7px 12px', borderRadius: 8
                                    }}>
                                        <Search size={14} color="#64748b" />
                                        <span style={{ color: '#94a3b8', fontSize: 12.5, fontFamily: "'DM Sans', sans-serif" }}>
                                            Search patient by name, ID, phone...
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <div style={{ border: '1px solid #e2e8f0', padding: '4px 10px', borderRadius: 6, fontSize: 12, color: '#334155', fontWeight: 600, background: '#f8fafc' }}>Center 1</div>
                                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', flexShrink: 0 }} />
                                    <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600 }}>
                                        <HelpCircle size={12} /> Help
                                    </div>
                                    <Bell size={16} color="#64748b" style={{ cursor: 'pointer', flexShrink: 0 }} />
                                </div>
                            </div>

                            {/* App Body */}
                            <div style={{ display: 'flex', flex: 1, background: '#f8fafc', width: '100%' }}>
                                {/* Sidebar (Desktop) */}
                                <div className="hide-mobile" style={{
                                    width: 200, borderRight: '1px solid #e2e8f0', background: '#ffffff',
                                    padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 3,
                                }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff',
                                        padding: '10px 12px', borderRadius: 8, fontSize: 12.5, fontWeight: 700,
                                        boxShadow: '0 3px 10px rgba(37,99,235,0.2)', marginBottom: 6,
                                    }}>+ New Registration</div>
                                    {[
                                        { em: '⚡', label: 'Accession', active: true },
                                        { em: '🔬', label: 'Analysis', active: false },
                                        { em: '📋', label: 'Patient List', active: false },
                                        { em: '📄', label: 'Reports', active: false },
                                    ].map((item, i) => (
                                        <div key={i} style={{
                                            padding: '8px 10px', borderRadius: 6, fontSize: 12.5, fontWeight: 600,
                                            color: item.active ? '#2563eb' : '#64748b',
                                            background: item.active ? '#eff6ff' : 'transparent',
                                            borderLeft: item.active ? '2px solid #2563eb' : '2px solid transparent',
                                            display: 'flex', alignItems: 'center', gap: 6,
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
                                                <div style={{ fontSize: 10, fontWeight: 700, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>
                                                    {card.label}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 8 }}>
                                                    <div style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif" }}>{card.count}</div>
                                                    <span style={{ fontSize: 10.5, fontWeight: 700, color: card.color, background: card.bg, padding: '2px 6px', borderRadius: 100 }}>{card.delta}</span>
                                                </div>
                                                <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 24 }}>
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
                                            <span style={{ fontSize: 12, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>Live Registrations</span>
                                            <span style={{ fontSize: 10.5, color: '#059669', fontWeight: 700, background: '#f0fdf4', padding: '2px 8px', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 4 }}>
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
                                                        <div style={{ fontSize: 12, fontWeight: 600, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>{row.name}</div>
                                                        <div style={{ fontSize: 10.5, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>{row.test}</div>
                                                    </div>
                                                </div>
                                                <span style={{ fontSize: 10.5, fontWeight: 700, color: row.sc, background: row.sb, padding: '2px 8px', borderRadius: 100 }}>{row.status}</span>
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
                        { number: '4.9 ★', label: 'Average Rating' },
                    ].map((stat, i) => (
                        <div key={i} className="hero-stat-item">
                            <div className="stat-num">{stat.number}</div>
                            <div className="stat-lbl">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes float-dot {
                    0%, 100% { transform: translateY(0); opacity: 0.6; }
                    50% { transform: translateY(-14px); opacity: 1; }
                }
                .hero-section { padding-top: 120px; padding-bottom: 40px; }
                .mockup-container { min-height: 400px; }
                .hero-cta-primary:hover { transform: translateY(-2px) !important; box-shadow: 0 12px 32px -4px rgba(37,99,235,0.5) !important; }
                .hero-cta-secondary:hover { border-color: #2563eb !important; color: #2563eb !important; transform: translateY(-2px) !important; box-shadow: 0 6px 16px rgba(37,99,235,0.1) !important; }

                /* Desktop Stats Row */
                .hero-stats-row {
                    display: flex;
                    justify-content: center;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    background: #ffffff;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.03);
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
                    fontWeight: 800;
                    color: #0f172a;
                    font-family: 'Syne', sans-serif;
                    letter-spacing: -0.03em;
                    margin-bottom: 3px;
                }
                .stat-lbl {
                    font-size: 11.5px;
                    color: #64748b;
                    font-weight: 600;
                    font-family: 'DM Sans', sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 860px) {
                    .hero-section { padding-top: 86px !important; padding-bottom: 24px !important; }
                    .hide-mobile { display: none !important; }
                    .mockup-tilt-card {
                        transform: none !important; /* Disable 3D tilt on mobile for crisp rendering */
                        box-shadow: 0 10px 30px -10px rgba(37,99,235,0.18) !important;
                    }
                    .mockup-container { min-height: auto !important; }
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
                    .hero-badge { font-size: 11.5px !important; padding: 5px 14px !important; }
                    .hero-title-top, .hero-title-bottom {
                        font-size: clamp(26px, 8.2vw, 36px) !important;
                        margin-bottom: 4px !important;
                    }
                    .hero-title-bottom { margin-bottom: 16px !important; }
                    .proof-pill { font-size: 11px !important; padding: 4px 10px !important; }
                    .hero-proof-row { gap: 6px !important; margin-bottom: 18px !important; }
                    .hero-desc { font-size: 14.5px !important; line-height: 1.6 !important; margin-bottom: 22px !important; }
                    .hero-cta-wrapper {
                        flex-direction: column !important;
                        width: 100% !important;
                        gap: 10px !important;
                    }
                    .hero-cta-primary, .hero-cta-secondary {
                        width: 100% !important;
                        max-width: 320px !important;
                        padding: 13px 20px !important;
                        font-size: 15px !important;
                    }

                    /* 2x2 Grid for Mobile Stats */
                    .hero-stats-row {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        border-radius: 14px !important;
                        margin-top: 24px !important;
                    }
                    .hero-stat-item {
                        padding: 14px 8px !important;
                        border-right: 1px solid #e2e8f0 !important;
                        border-bottom: 1px solid #e2e8f0 !important;
                    }
                    .hero-stat-item:nth-child(2n) {
                        border-right: none !important;
                    }
                    .hero-stat-item:nth-child(3), .hero-stat-item:nth-child(4) {
                        border-bottom: none !important;
                    }
                    .stat-num { font-size: 21px !important; }
                    .stat-lbl { font-size: 10.5px !important; }
                }

                @media (max-width: 380px) {
                    .hero-container { padding: 0 10px !important; }
                    .proof-pill { font-size: 10.5px !important; padding: 3px 8px !important; }
                }
            `}</style>
        </section>
    )
}
