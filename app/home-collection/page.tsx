'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Bike, Sparkles, Bell, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react'

export default function HomeCollection() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsSubmitted(true)
        setEmail('')
    }

    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Main Premium Wrapper */}
            <section style={{
                flex: 1,
                padding: '160px 20px 100px',
                background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 50%, #f8fafc 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Premium Glow Background Blobs */}
                <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: 'rgba(59, 130, 246, 0.08)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -100, left: -100, width: 500, height: 500, background: 'rgba(139, 92, 246, 0.06)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

                <div className="container" style={{ maxWidth: 850, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>

                    {/* Badge */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: '#ffffff', border: '1px solid #bfdbfe',
                            color: 'var(--blue-primary)', padding: '6px 16px',
                            borderRadius: '100px', fontSize: '13px', fontWeight: '700',
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.1)'
                        }}>
                            <Sparkles size={14} /> Next-Gen Feature
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 style={{
                        fontSize: 'clamp(36px, 5vw, 54px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        fontFamily: "'Syne', sans-serif",
                        marginBottom: 20,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.15
                    }}>
                        Blood Sample Collection <br />
                        At Your <span style={{ color: 'var(--blue-primary)' }}>Doorstep</span>
                    </h1>

                    {/* Coming Soon Glass Tag */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
                        <div style={{
                            background: 'rgba(239, 68, 68, 0.08)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            color: '#ef4444',
                            padding: '8px 24px',
                            borderRadius: '12px',
                            fontSize: '18px',
                            fontWeight: '800',
                            fontFamily: "'Syne', sans-serif",
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            boxShadow: '0 4px 12px rgba(239,68,68,0.05)'
                        }}>
                            Coming Soon
                        </div>
                    </div>

                    {/* Subtext */}
                    <p style={{
                        fontSize: 'clamp(15px, 2vw, 17.5px)',
                        color: '#475569',
                        lineHeight: 1.7,
                        fontFamily: "'DM Sans', sans-serif",
                        maxWidth: 640,
                        margin: '0 auto 48px'
                    }}>
                        We are launching our fully automated Home Sample Collection service. Very soon, you'll be able to book certified Phlebotomists who will visit your location with specialized temperature-controlled kits.
                    </p>

                    {/* Newsletter Form / Success State */}
                    <div style={{ maxWidth: 540, margin: '0 auto 64px' }}>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubscribe} style={{
                                display: 'flex',
                                background: '#ffffff',
                                border: '1px solid #cbd5e1',
                                borderRadius: '100px',
                                padding: '6px 6px 6px 20px',
                                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
                                alignItems: 'center'
                            }} className="coming-soon-form">
                                <input
                                    type="email"
                                    placeholder="Enter email to get early access & discounts..."
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    style={{
                                        flex: 1, border: 'none', outline: 'none', fontSize: 15,
                                        fontFamily: "'DM Sans', sans-serif", color: '#0f172a', background: 'transparent'
                                    }}
                                />
                                <button type="submit" style={{
                                    background: 'var(--blue-primary)', color: '#ffffff', border: 'none',
                                    padding: '14px 28px', borderRadius: '100px', fontSize: 14, fontWeight: 700,
                                    fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', display: 'flex',
                                    alignItems: 'center', gap: 6, transition: 'all 0.2s', flexShrink: 0
                                }} className="notify-btn">
                                    Notify Me <Bell size={16} />
                                </button>
                            </form>
                        ) : (
                            <div className="animate-fade-up" style={{
                                background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '100px',
                                padding: '14px 28px', display: 'inline-flex', alignItems: 'center', gap: 10,
                                color: '#16a34a', fontWeight: 600, fontFamily: "'DM Sans', sans-serif"
                            }}>
                                <CheckCircle2 size={18} /> You're on the list! We'll notify you the day we launch.
                            </div>
                        )}
                    </div>

                    {/* Preview Features List (To add premium heavy look) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: 20,
                        borderTop: '1px solid #e2e8f0',
                        paddingTop: 48
                    }}>
                        {[
                            { icon: <Bike size={22} />, title: '1-Hour Arrival', desc: 'Book instant slots and our professional team will reach your doorstep within 60 mins.' },
                            { icon: <ShieldCheck size={22} />, title: 'Certified Phlebotomists', desc: '100% hygienic, NABL-trained medical experts handling your samples securely.' },
                            { icon: <MapPin size={22} />, title: 'Live Agent Tracking', desc: 'Track your assigned health collector on the map in real-time, just like food delivery.' }
                        ].map((item, idx) => (
                            <div key={idx} style={{ textAlign: 'left', background: '#ffffff', padding: 24, borderRadius: 20, border: '1px solid #e2e8f0', boxShadow: '0 4px 10px rgba(0,0,0,0.01)' }}>
                                <div style={{ width: 44, height: 44, background: '#eff6ff', color: 'var(--blue-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 8 }}>{item.title}</h3>
                                <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />

            <style>{`
                .coming-soon-form:focus-within {
                    border-color: var(--blue-primary) !important;
                    box-shadow: 0 10px 30px -5px rgba(59, 130, 246, 0.15) !important;
                }
                .notify-btn:hover {
                    background: #2563eb !important;
                    transform: translateY(-1px);
                }
                @media (max-width: 550px) {
                    .coming-soon-form {
                        flex-direction: column;
                        border-radius: 20px !important;
                        padding: 16px !important;
                        gap: 16px;
                    }
                    .coming-soon-form input {
                        width: 100%;
                        text-align: center;
                    }
                    .notify-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </main>
    )
}