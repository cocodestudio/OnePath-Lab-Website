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
            {/* â”€â”€â”€ Animated Mesh Gradient â”€â”€â”€ */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                background: 'radial-gradient(ellipse 130% 80% at 50% -10%, rgba(219,234,254,0.95) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 70% 60% at 92% 50%, rgba(237,233,254,0.6) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 8% 80%, rgba(224,242,254,0.5) 0%, transparent 65%)',
            }} />

            {/* â”€â”€â”€ Dot Grid â”€â”€â”€ */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: 'radial-gradient(rgba(37,99,235,0.07) 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px',
                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 80%)',
            }} />

            {/* â”€â”€â”€ Light Glow Orbs â”€â”€â”€ */}
            <div style={{
                position: 'absolute', top: '-8%', left: '-6%', width: 700, height: 700,
                background: 'radial-gradient(circle, rgba(219,234,254,0.95) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
                transform: mounted ? `translate(${(mousePos.x - 0.5) * -22}px, ${(mousePos.y - 0.5) * -18}px)` : 'none',
                transition: 'transform 1.4s ease',
            }} />
            <div style={{
                position: 'absolute', bottom: '5%', right: '-8%', width: 600, height: 600,
                background: 'radial-gradient(circle, rgba(237,233,254,0.85) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0,
                transform: mounted ? `translate(${(mousePos.x - 0.5) * 22}px, ${(mousePos.y - 0.5) * 18}px)` : 'none',
                transition: 'transform 1.6s ease',
            }} />

            {/* â”€â”€â”€ Floating Accent Dots â”€â”€â”€ */}
            {mounted && [
                { top: '18%', left: '6%', size: 6, delay: 0, color: '#bfdbfe' },
                { top: '22%', left: '91%', size: 4, delay: 0.7, color: '#ddd6fe' },
                { top: '60%', left: '4%', size: 5, delay: 1.3, color: '#bae6fd' },
                { top: '72%', left: '93%', size: 4, delay: 0.3, color: '#bfdbfe' },
                { top: '42%', left: '2%', size: 3, delay: 1.9, color: '#e9d5ff' },
            ].map((p, i) => (
                <div key={i} style={{
                    position: 'absolute', top: p.top, left: p.left,
                    width: p.size, height: p.size, borderRadius: '50%',
                    background: p.color, boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
                    animation: `float-dot ${3.5 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${p.delay}s`, zIndex: 1,
                }} />
            ))}

            <div className="container hero-container" style={{ position: 'relative', zIndex: 2, padding: '0 20px', width: '100%', boxSizing: 'border-box' }}>

                {/* â”€â”€â”€ Eyebrow Badge â”€â”€â”€ */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
                        border: '1px solid rgba(37,99,235,0.2)', borderRadius: 100,
                        padding: '7px 20px', fontSize: 13, fontWeight: 700, color: '#2563eb',
                        boxShadow: '0 2px 12px rgba(37,99,235,0.1)', letterSpacing: '0.02em',
                    }}>
                        <Wand2 size={14} color="#6366f1" />
                        India&apos;s most intelligent cloud LIS â€” 200+ labs trust us
                    </span>
                </div>

                {/* â”€â”€â”€ Storytelling Headline â”€â”€â”€ */}
                <div className="hero-text-area" style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center', paddingBottom: 40 }}>
                    <h1 style={{
                        fontSize: 'clamp(36px, 7.5vw, 76px)', fontWeight: 900, lineHeight: 1.07,
                        color: '#0f172a', marginBottom: 4, letterSpacing: '-0.04em',
                        fontFamily: "'Syne', sans-serif",
                    }}>Your Lab is Working</h1>

                    <h1 style={{
                        fontSize: 'clamp(36px, 7.5vw, 76px)', fontWeight: 900, lineHeight: 1.07,
                        marginBottom: 26, letterSpacing: '-0.04em', fontFamily: "'Syne', sans-serif",
                        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #a855f7 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>Hard. Not Smart.</h1>

                    {/* â”€â”€â”€ Proof Point Pills â”€â”€â”€ */}
                    <div className="hero-proof-row" style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 26 }}>
                        {[
                            { icon: <Zap size={13} color="#d97706" />, text: 'Manual entry wastes 3+ hrs/day', bg: '#fffbeb', border: '#fde68a', col: '#78350f' },
                            { icon: <Shield size={13} color="#059669" />, text: 'Patients wait hours for reports', bg: '#f0fdf4', border: '#bbf7d0', col: '#064e3b' },
                            { icon: <TrendingUp size={13} color="#7c3aed" />, text: 'No live MIS for revenue & TAT', bg: '#f5f3ff', border: '#ddd6fe', col: '#3b0764' },
                        ].map((item, i) => (
                            <span key={i} style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                background: item.bg, border: `1px solid ${item.border}`,
                                borderRadius: 100, padding: '6px 14px', fontSize: 12.5, fontWeight: 600, color: item.col,
                            }}>{item.icon} {item.text}</span>
                        ))}
                    </div>

                    <p style={{
                        fontSize: 'clamp(16px, 2.2vw, 19px)', color: '#475569',
                        maxWidth: 600, margin: '0 auto 34px', lineHeight: 1.72, fontWeight: 500,
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        OnePath automates machine interfacing, generates AI-powered reports, and delivers them via WhatsApp â€” instantly. Your lab, smarter.
                    </p>

                    {/* â”€â”€â”€ CTAs â”€â”€â”€ */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
                        <Link href="/trial" className="hero-cta-primary" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 38px',
                            fontSize: 16, fontWeight: 700, background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                            color: '#ffffff', borderRadius: 100, textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 8px 28px -4px rgba(37,99,235,0.45)', transition: 'all 0.3s ease',
                            minWidth: 210, justifyContent: 'center',
                        }}>
                            Start Free Trial <ArrowRight size={18} />
                        </Link>
                        <a href="https://lis.onepathlab.com" target="_blank" rel="noreferrer" className="hero-cta-secondary" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
                            fontSize: 15, fontWeight: 600, background: '#ffffff', color: '#1e293b',
                            border: '1.5px solid #e2e8f0', borderRadius: 100, textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 2px 12px rgba(15,23,42,0.06)', transition: 'all 0.3s ease',
                        }}>
                            <Play size={14} color="#2563eb" fill="#2563eb" /> Live Demo
                        </a>
                    </div>

                    <p style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                        No credit card Â· Setup in minutes Â· Cancel anytime
                    </p>
                </div>

                {/* â”€â”€â”€ 3D Premium White Mockup â”€â”€â”€ */}
                <div className="mockup-wrapper" style={{
                    width: '100%', maxWidth: 1100, margin: '0 auto',
                    perspective: '1400px', perspectiveOrigin: '50% 30%', boxSizing: 'border-box',
                }}>
                    <div style={{
                        transform: mounted
                            ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${scrollY * -0.05}px)`
                            : 'rotateX(5deg)',
                        transition: 'transform 0.18s ease', transformStyle: 'preserve-3d',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, rgba(37,99,235,0.45) 0%, rgba(99,102,241,0.35) 50%, rgba(124,58,237,0.45) 100%)',
                        padding: '1.5px',
                        boxShadow: '0 32px 60px -18px rgba(37,99,235,0.22), 0 0 0 1px rgba(37,99,235,0.08)',
                    }}>
                        <div className="mockup-container" style={{
                            background: '#f8fafc', borderRadius: '18.5px', overflow: 'hidden',
                            display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box',
                        }}>
                            {/* Browser bar */}
                            <div style={{
                                background: 'linear-gradient(to right, #f1f5f9, #ffffff)',
                                padding: '11px 20px', display: 'flex', alignItems: 'center', gap: 12,
                                borderBottom: '1px solid #e2e8f0'
                            }}>
                                <div style={{ display: 'flex', gap: 6 }}>
                                    {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
                                        <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
                                    ))}
                                </div>
                                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                    <div style={{
                                        background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 7,
                                        padding: '4px 20px', fontSize: 12, color: '#64748b',
                                        fontFamily: "'DM Sans', sans-serif", minWidth: 180, textAlign: 'center',
                                    }}>ðŸ”’ lis.onepathlab.com</div>
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="mockup-header" style={{
                                padding: '14px 22px', display: 'flex', alignItems: 'center',
                                justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0',
                                background: '#ffffff', width: '100%', boxSizing: 'border-box',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        {[20, 20, 14].map((w, i) => (
                                            <div key={i} style={{ width: w, height: 2, background: i < 2 ? '#334155' : '#94a3b8', borderRadius: 2 }} />
                                        ))}
                                    </div>
                                    <span className="hide-mobile" style={{
                                        fontSize: 20, fontWeight: 800, fontFamily: 'Syne, sans-serif',
                                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                    }}>OnePath Lab</span>
                                </div>
                                <div className="hide-mobile" style={{ flex: 1, maxWidth: 440, margin: '0 20px' }}>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 8, background: '#f1f5f9',
                                        border: '1px solid #e2e8f0', padding: '9px 14px', borderRadius: 10
                                    }}>
                                        <Search size={15} color="#64748b" />
                                        <span style={{ color: '#94a3b8', fontSize: 13.5, fontFamily: "'DM Sans', sans-serif" }}>
                                            Search patient by name, ID, phone...
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <div className="hide-mobile" style={{ border: '1px solid #e2e8f0', padding: '5px 12px', borderRadius: 8, fontSize: 13, color: '#334155', fontWeight: 600, background: '#f8fafc' }}>Center 1</div>
                                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', flexShrink: 0 }} />
                                    <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '5px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600 }}>
                                        <HelpCircle size={13} /> Help
                                    </div>
                                    <Settings size={17} color="#64748b" style={{ cursor: 'pointer', flexShrink: 0 }} />
                                    <Bell size={17} color="#64748b" style={{ cursor: 'pointer', flexShrink: 0 }} />
                                </div>
                            </div>

                            {/* App Body */}
                            <div style={{ display: 'flex', flex: 1, background: '#f8fafc', width: '100%' }}>
                                {/* Sidebar */}
                                <div className="hide-mobile" style={{
                                    width: 220, borderRight: '1px solid #e2e8f0', background: '#ffffff',
                                    padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 3,
                                }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff',
                                        padding: '11px 14px', borderRadius: 10, fontSize: 13, fontWeight: 700,
                                        boxShadow: '0 4px 12px rgba(37,99,235,0.25)', marginBottom: 6,
                                    }}>+ New Registration</div>
                                    {[
                                        { em: 'âš¡', label: 'Accession', active: true },
                                        { em: 'ðŸ”¬', label: 'Analysis', active: false },
                                        { em: 'ðŸ“‹', label: 'Patient List', active: false },
                                        { em: 'ðŸ“„', label: 'Reports', active: false },
                                        { em: 'ðŸ’°', label: 'Billing', active: false },
                                    ].map((item, i) => (
                                        <div key={i} style={{
                                            padding: '9px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                                            color: item.active ? '#2563eb' : '#64748b',
                                            background: item.active ? '#eff6ff' : 'transparent',
                                            borderLeft: item.active ? '2px solid #2563eb' : '2px solid transparent',
                                            display: 'flex', alignItems: 'center', gap: 8,
                                        }}>
                                            <span>{item.em}</span> {item.label}
                                        </div>
                                    ))}
                                </div>

                                {/* Main content */}
                                <div className="mockup-main" style={{ flex: 1, padding: '18px', boxSizing: 'border-box', overflow: 'hidden' }}>
                                    {/* Stats Cards */}
                                    <div className="mockup-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))', gap: 12, marginBottom: 14 }}>
                                        {[
                                            { label: "Today's Reports", count: '128', delta: '+12%', color: '#2563eb', bg: '#eff6ff', bars: [40, 60, 45, 75, 55, 88, 70] },
                                            { label: 'Pending Analysis', count: '12', delta: '-3', color: '#7c3aed', bg: '#f5f3ff', bars: [80, 60, 70, 55, 45, 30, 20] },
                                            { label: 'Revenue Today', count: 'â‚¹18,400', delta: '+8%', color: '#059669', bg: '#f0fdf4', bars: [40, 50, 60, 65, 70, 80, 90] },
                                        ].map((card, i) => (
                                            <div key={i} className="mockup-card" style={{
                                                background: '#ffffff', border: '1px solid #e2e8f0',
                                                borderRadius: 12, padding: '16px', boxSizing: 'border-box',
                                                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                                            }}>
                                                <div style={{ fontSize: 10.5, fontWeight: 700, color: '#64748b', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>
                                                    {card.label}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10 }}>
                                                    <div style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif" }}>{card.count}</div>
                                                    <span style={{ fontSize: 11, fontWeight: 700, color: card.color, background: card.bg, padding: '2px 8px', borderRadius: 100 }}>{card.delta}</span>
                                                </div>
                                                <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 28 }}>
                                                    {card.bars.map((h, j) => (
                                                        <div key={j} style={{ flex: 1, height: `${h}%`, borderRadius: 2, background: j === 6 ? card.color : `${card.color}28` }} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Patient Table */}
                                    <div className="hide-mobile" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                                        <div style={{ padding: '10px 14px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>Today&apos;s Registrations</span>
                                            <span style={{ fontSize: 11, color: '#059669', fontWeight: 700, background: '#f0fdf4', padding: '3px 10px', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse-live 2s infinite' }} />
                                                Live
                                            </span>
                                        </div>
                                        {[
                                            { name: 'Ramesh Kumar', test: 'CBC + LFT', status: 'Ready', sc: '#059669', sb: '#f0fdf4' },
                                            { name: 'Priya Sharma', test: 'Thyroid Panel', status: 'Processing', sc: '#d97706', sb: '#fffbeb' },
                                            { name: 'Ankit Verma', test: 'Blood Sugar', status: 'Dispatched', sc: '#2563eb', sb: '#eff6ff' },
                                        ].map((row, i) => (
                                            <div key={i} style={{ padding: '9px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: i < 2 ? '1px solid #f8fafc' : 'none' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, #e0e7ff, #dbeafe)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#2563eb' }}>{row.name[0]}</div>
                                                    <div>
                                                        <div style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>{row.name}</div>
                                                        <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>{row.test}</div>
                                                    </div>
                                                </div>
                                                <span style={{ fontSize: 11, fontWeight: 700, color: row.sc, background: row.sb, padding: '3px 10px', borderRadius: 100 }}>{row.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* â”€â”€â”€ Trust Stats â”€â”€â”€ */}
                <div className="hero-stats-row" style={{ display: 'flex', justifyContent: 'center', gap: 0, maxWidth: 820, margin: '40px auto 0', flexWrap: 'wrap', border: '1px solid #e2e8f0', borderRadius: 16, background: '#ffffff', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                    {[
                        { number: '200+', label: 'Labs Onboarded' },
                        { number: '10L+', label: 'Reports Generated' },
                        { number: '99.9%', label: 'Uptime SLA' },
                        { number: '4.9 â˜…', label: 'Average Rating' },
                    ].map((stat, i) => (
                        <div key={i} style={{ flex: '1 1 150px', textAlign: 'center', padding: '20px 12px', borderRight: i < 3 ? '1px solid #e2e8f0' : 'none' }}>
                            <div style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", letterSpacing: '-0.03em', marginBottom: 4 }}>{stat.number}</div>
                            <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes float-dot {
                    0%, 100% { transform: translateY(0); opacity: 0.6; }
                    50% { transform: translateY(-14px); opacity: 1; }
                }
                @keyframes pulse-live {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.7); }
                    70% { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
                }
                .hero-section { padding-top: 128px; }
                .mockup-container { min-height: 440px; }
                .hero-cta-primary:hover { transform: translateY(-3px) !important; box-shadow: 0 16px 40px -6px rgba(37,99,235,0.55) !important; }
                .hero-cta-secondary:hover { border-color: #2563eb !important; color: #2563eb !important; transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(37,99,235,0.12) !important; }
                .mobile-break { display: none; }

                @media (max-width: 860px) {
                    .hero-section { padding-top: 92px !important; }
                    .hide-mobile { display: none !important; }
                    .mobile-break { display: block; }
                    .mockup-header { padding: 10px 14px !important; }
                    .mockup-container { min-height: 240px !important; }
                    .mockup-main { padding: 10px !important; }
                    .mockup-grid {
                        display: flex !important; overflow-x: auto; gap: 10px !important;
                        scroll-snap-type: x mandatory; padding-bottom: 4px;
                        -ms-overflow-style: none; scrollbar-width: none;
                    }
                    .mockup-grid::-webkit-scrollbar { display: none; }
                    .mockup-card { min-width: 76%; scroll-snap-align: start; padding: 12px !important; }
                    .hero-proof-row { gap: 6px !important; }
                }
                @media (max-width: 480px) {
                    .hero-container { padding: 0 14px !important; }
                    .mockup-wrapper { border-radius: 14px !important; }
                    .mockup-container { border-radius: 12.5px !important; }
                }
            `}</style>
        </section>
    )
}
