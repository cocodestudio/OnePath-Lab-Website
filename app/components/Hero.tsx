'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Wand2, Search, Settings, HelpCircle, Bell, Zap, Shield, TrendingUp } from 'lucide-react'


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

    const tiltX = (mousePos.y - 0.5) * 8
    const tiltY = (mousePos.x - 0.5) * -8

    return (
        <section
            className="hero-section"
            style={{
                position: 'relative', minHeight: '100vh',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                background: 'linear-gradient(160deg, #03060f 0%, #060c1e 30%, #0a1535 60%, #0f1f45 100%)',
                overflow: 'hidden', width: '100%', boxSizing: 'border-box',
            }}
        >
            {/* Animated Background Grid */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: 'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
            }} />

            {/* Deep Glow Orbs */}
            <div style={{
                position: 'absolute', top: '-10%', left: '5%', width: 700, height: 700,
                background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
                transform: mounted ? `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -20}px)` : 'none',
                transition: 'transform 1.2s ease',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '-5%', width: 600, height: 600,
                background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
                transform: mounted ? `translate(${(mousePos.x - 0.5) * 30}px, ${(mousePos.y - 0.5) * 20}px)` : 'none',
                transition: 'transform 1.4s ease',
            }} />
            <div style={{
                position: 'absolute', top: '40%', left: '50%', width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0, transform: 'translateX(-50%)',
            }} />

            {/* Floating Particles */}
            {mounted && [
                { top: '15%', left: '8%', size: 4, delay: 0, color: '#60a5fa' },
                { top: '25%', left: '88%', size: 3, delay: 0.8, color: '#a78bfa' },
                { top: '65%', left: '5%', size: 5, delay: 1.4, color: '#34d399' },
                { top: '75%', left: '92%', size: 3, delay: 0.4, color: '#60a5fa' },
                { top: '45%', left: '3%', size: 2, delay: 2, color: '#f9a8d4' },
                { top: '30%', left: '95%', size: 4, delay: 1.2, color: '#a78bfa' },
            ].map((p, i) => (
                <div key={i} style={{
                    position: 'absolute', top: p.top, left: p.left,
                    width: p.size, height: p.size, borderRadius: '50%',
                    background: p.color, boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                    animation: `float-particle ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${p.delay}s`, zIndex: 1,
                }} />
            ))}

            <div className="container hero-container" style={{ position: 'relative', zIndex: 2, padding: '0 20px', width: '100%', boxSizing: 'border-box' }}>

                {/* Story Tag */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(96,165,250,0.3)',
                        borderRadius: 100, padding: '7px 20px', fontSize: 13, fontWeight: 700,
                        color: '#93c5fd', backdropFilter: 'blur(12px)', letterSpacing: '0.04em',
                        boxShadow: '0 0 24px rgba(37,99,235,0.15)',
                    }}>
                        <Wand2 size={14} color="#60a5fa" />
                        Precision in every drop — built for India&apos;s labs
                    </span>
                </div>

                {/* Main Headline - Storytelling */}
                <div className="animate-fade-up hero-text-area" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', paddingBottom: 48 }}>
                    <h1 style={{
                        fontSize: 'clamp(34px, 7vw, 72px)', fontWeight: 800, lineHeight: 1.1,
                        color: '#ffffff', marginBottom: 8, letterSpacing: '-0.03em',
                        fontFamily: "'Syne', sans-serif",
                    }}>Your Lab is Working</h1>
                    <h1 style={{
                        fontSize: 'clamp(34px, 7vw, 72px)', fontWeight: 800, lineHeight: 1.1,
                        marginBottom: 24, letterSpacing: '-0.03em', fontFamily: "'Syne', sans-serif",
                        background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 40px rgba(96,165,250,0.4))',
                    }}>Hard. Not Smart.</h1>

                    {/* 3 Proof Points */}
                    <div className="hero-proof-row" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                        {[
                            { icon: <Zap size={13} color="#fbbf24" />, text: 'Manual entry wastes 3+ hrs/day' },
                            { icon: <Shield size={13} color="#34d399" />, text: 'Patients wait for WhatsApp reports' },
                            { icon: <TrendingUp size={13} color="#a78bfa" />, text: 'No live MIS for revenue & TAT' },
                        ].map((item, i) => (
                            <span key={i} style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 100, padding: '6px 14px', fontSize: 12.5, fontWeight: 600,
                                color: 'rgba(203,213,225,0.9)', backdropFilter: 'blur(8px)',
                            }}>{item.icon} {item.text}</span>
                        ))}
                    </div>

                    <p style={{
                        fontSize: 'clamp(15px, 2.5vw, 19px)', color: 'rgba(148,163,184,0.9)',
                        maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.7, fontWeight: 500,
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        OnePath automates machine interfacing, generates AI-powered reports, and delivers them via WhatsApp — instantly. India&apos;s most advanced cloud LIS.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                        <Link href="/trial" className="hero-cta-btn" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            padding: '16px 40px', fontSize: 16, fontWeight: 700,
                            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                            color: '#ffffff', borderRadius: 100, textDecoration: 'none',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 8px 32px rgba(99,102,241,0.5)', transition: 'all 0.3s ease',
                            minWidth: 250, justifyContent: 'center',
                        }}>
                            Start 5-Day Free Trial <ArrowRight size={18} />
                        </Link>
                        <p style={{ fontSize: 12, color: 'rgba(100,116,139,0.8)', fontWeight: 600, letterSpacing: '0.06em' }}>
                            • NO CREDIT CARD REQUIRED &nbsp;•&nbsp; SETUP IN MINUTES
                        </p>
                    </div>
                </div>

                {/* 3D Premium Floating Mockup */}
                <div className="animate-fade-up mockup-wrapper" style={{
                    width: '100%', maxWidth: 1100, margin: '0 auto 80px',
                    perspective: '1200px', perspectiveOrigin: '50% 40%', animationDelay: '0.2s',
                    boxSizing: 'border-box',
                }}>
                    <div style={{
                        transform: mounted ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${scrollY * -0.06}px)` : 'rotateX(4deg)',
                        transition: 'transform 0.15s ease', transformStyle: 'preserve-3d',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, rgba(99,102,241,0.7) 0%, rgba(59,130,246,0.5) 50%, rgba(139,92,246,0.6) 100%)',
                        padding: '2px',
                        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), 0 0 80px rgba(99,102,241,0.2)',
                    }}>
                        <div className="mockup-container" style={{
                            background: '#0d1525', borderRadius: '22px', overflow: 'hidden',
                            display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box',
                        }}>
                            {/* Mac Dots */}
                            <div style={{
                                background: '#0d1525', padding: '13px 22px',
                                display: 'flex', alignItems: 'center', gap: 12,
                                borderBottom: '1px solid rgba(255,255,255,0.06)'
                            }}>
                                <div style={{ display: 'flex', gap: 7 }}>
                                    {['#ef4444','#eab308','#22c55e'].map((c, i) => (
                                        <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c, boxShadow: `0 0 6px ${c}80` }} />
                                    ))}
                                </div>
                                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                    <div style={{
                                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: 7, padding: '4px 24px', fontSize: 12,
                                        color: 'rgba(148,163,184,0.6)', fontFamily: "'DM Sans', sans-serif",
                                        minWidth: 200, textAlign: 'center',
                                    }}>lis.onepathlab.com</div>
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="mockup-header" style={{
                                padding: '14px 22px', display: 'flex', alignItems: 'center',
                                justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)',
                                background: '#0f1b2e', width: '100%', boxSizing: 'border-box'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        {[20, 20, 14].map((w, i) => (
                                            <div key={i} style={{ width: w, height: 2, background: i < 2 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
                                        ))}
                                    </div>
                                    <span className="hide-mobile" style={{
                                        fontSize: 20, fontWeight: 800, fontFamily: 'Syne, sans-serif',
                                        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                    }}>OnePath</span>
                                </div>
                                <div className="hide-mobile" style={{ flex: 1, maxWidth: 460, margin: '0 20px' }}>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: 8,
                                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '9px 16px', borderRadius: 10
                                    }}>
                                        <Search size={16} color="rgba(148,163,184,0.7)" />
                                        <span style={{ color: 'rgba(100,116,139,0.7)', fontSize: 13.5, fontFamily: "'DM Sans', sans-serif" }}>Search patient by name, ID, phone no.</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div className="hide-mobile" style={{ border: '1px solid rgba(255,255,255,0.12)', padding: '5px 12px', borderRadius: 8, fontSize: 13, color: 'rgba(203,213,225,0.8)', fontWeight: 600 }}>Center 1</div>
                                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 12px rgba(99,102,241,0.4)', flexShrink: 0 }} />
                                    <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#60a5fa', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', padding: '5px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600 }}>
                                        <HelpCircle size={14} /> Help
                                    </div>
                                    <Settings size={18} color="rgba(100,116,139,0.7)" style={{ cursor: 'pointer', flexShrink: 0 }} />
                                    <Bell size={18} color="rgba(100,116,139,0.7)" style={{ cursor: 'pointer', flexShrink: 0 }} />
                                </div>
                            </div>

                            {/* App Body */}
                            <div style={{ display: 'flex', flex: 1, background: '#080f1e', width: '100%' }}>
                                <div className="hide-mobile" style={{ width: 240, borderRight: '1px solid rgba(255,255,255,0.05)', background: '#0a1525', padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    <div style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', color: '#fff', padding: '12px 16px', borderRadius: 10, fontSize: 13, fontWeight: 700, boxShadow: '0 4px 16px rgba(99,102,241,0.35)' }}>+ New Registration</div>
                                    {['|| Accession', '○ Analysis', '☰ Patient List', '◎ Reports'].map((item, i) => (
                                        <div key={i} style={{ padding: '10px 14px', color: i === 0 ? '#60a5fa' : 'rgba(100,116,139,0.8)', fontSize: 13, fontWeight: 600, background: i === 0 ? 'rgba(37,99,235,0.1)' : 'transparent', borderRadius: 8, borderLeft: i === 0 ? '2px solid #3b82f6' : '2px solid transparent' }}>{item}</div>
                                    ))}
                                </div>
                                <div className="mockup-main" style={{ flex: 1, padding: '24px', boxSizing: 'border-box', overflow: 'hidden' }}>
                                    <div className="mockup-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 18 }}>
                                        {[
                                            { label: 'Today Reports', count: '128', color: '#60a5fa' },
                                            { label: 'Pending Analysis', count: '12', color: '#a78bfa' },
                                            { label: 'Revenue Today', count: '₹18,400', color: '#34d399' },
                                        ].map((card, i) => (
                                            <div key={i} className="mockup-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 20, boxSizing: 'border-box' }}>
                                                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(100,116,139,0.8)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>{card.label}</div>
                                                <div style={{ fontSize: 28, fontWeight: 800, color: card.color, fontFamily: "'Syne', sans-serif", marginBottom: 16, filter: `drop-shadow(0 0 8px ${card.color}60)` }}>{card.count}</div>
                                                <div className="mockup-line" style={{ width: '100%', height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4, marginBottom: 8 }} />
                                                <div className="mockup-line" style={{ width: '70%', height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4 }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float-particle {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
                    50% { transform: translateY(-18px) scale(1.3); opacity: 1; }
                }
                .hero-section { padding-top: 140px; }
                .mockup-container { min-height: 480px; }
                .hero-cta-btn:hover {
                    transform: translateY(-3px) !important;
                    box-shadow: 0 16px 48px rgba(99,102,241,0.6) !important;
                }
                .mobile-break { display: none; }

                @media (max-width: 800px) {
                    .hero-section { padding-top: 100px !important; }
                    .hide-mobile { display: none !important; }
                    .mobile-break { display: block; }
                    .mockup-header { padding: 10px 14px !important; }
                    .mockup-container { min-height: 280px !important; }
                    .mockup-main { padding: 14px !important; }
                    .mockup-grid {
                        display: flex !important; overflow-x: auto;
                        gap: 12px !important; scroll-snap-type: x mandatory; padding-bottom: 4px;
                    }
                    .mockup-grid::-webkit-scrollbar { display: none; }
                    .mockup-grid { -ms-overflow-style: none; scrollbar-width: none; }
                    .mockup-card { min-width: 80%; scroll-snap-align: start; padding: 16px !important; }
                    .mockup-line { height: 6px !important; }
                }
                @media (max-width: 480px) {
                    .hero-container { padding: 0 14px !important; }
                    .mockup-wrapper { border-radius: 16px !important; }
                    .mockup-container { border-radius: 14px !important; }
                }
            `}</style>
        </section>
    )
}