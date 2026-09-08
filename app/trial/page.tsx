'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Lock, User, Phone, Building, Users, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, ChevronDown, Home } from 'lucide-react'

const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '14px', fontWeight: 700,
    color: '#334155', marginBottom: '8px', fontFamily: "'Plus Jakarta Sans', sans-serif"
}
const inputGroupStyle: React.CSSProperties = {
    position: 'relative', display: 'flex', alignItems: 'center'
}
const iconStyle: React.CSSProperties = {
    position: 'absolute', left: '16px', zIndex: 1
}
const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px 14px 44px', borderRadius: '12px',
    border: '1px solid #cbd5e1', fontSize: '15px', fontFamily: "'Plus Jakarta Sans', sans-serif",
    outline: 'none', background: '#ffffff',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', color: '#0f172a'
}

const patientOptions = [
    { label: '1 - 50 Patients/day', value: '1-50', tag: 'FREE', tagColor: '#16a34a', tagBg: '#dcfce7' },
    { label: '51 - 200 Patients/day', value: '51-200', tag: '+ Additional Charge', tagColor: '#d97706', tagBg: '#fffbeb' },
    { label: '201 - 500 Patients/day', value: '201-500', tag: '+ Additional Charge', tagColor: '#d97706', tagBg: '#fffbeb' },
    { label: '500+ Patients/day', value: '500+', tag: '+ Additional Charge', tagColor: '#d97706', tagBg: '#fffbeb' },
]

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', password: '', labName: '', patientCount: '1-50'
    })
    const [selectedPlan, setSelectedPlan] = useState<'6month' | '1year'>('1year')
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isAutoApproved, setIsAutoApproved] = useState(false)
    const [error, setError] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
                setIsDropdownOpen(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError('')
    }

    const handleDropdownSelect = (e: React.MouseEvent, value: string) => {
        e.stopPropagation()
        setFormData({ ...formData, patientCount: value })
        setIsDropdownOpen(false)
        setError('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        if (!formData.patientCount) { setError('Please select daily patient volume'); return }
        setIsLoading(true)

        try {
            const rawBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.onepathlab.com/api';
            const baseUrl = rawBaseUrl.replace(/\/$/, '');

            const response = await fetch(`${baseUrl}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...formData, plan_type: selectedPlan })
            })

            const data = await response.json()

            if (!response.ok) {
                if (data.errors) {
                    throw new Error(Object.values(data.errors).flat().join('\n'))
                }
                throw new Error(data.message || 'Registration failed. Please try again.')
            }

            if (data.approved && data.access_token) {
                setIsAutoApproved(true)
                try {
                    localStorage.setItem('auth_token', data.access_token)
                    localStorage.setItem('user', JSON.stringify(data.user || {}))
                } catch (e) {}
            } else {
                setIsAutoApproved(false)
            }

            setIsSuccess(true)
        } catch (err: any) {
            console.error("API Error Details:", err);
            setError(err.message || 'Unable to connect to the server. Please check your internet connection.')
        } finally {
            setIsLoading(false)
        }
    }

    const selectedOpt = patientOptions.find(o => o.value === formData.patientCount)

    return (
        <main style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
            {/* Navbar */}
            <div style={{ padding: '24px 32px', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                    <Image src="/logo.png" alt="OnePath" width={36} height={36} style={{ width: 'auto', height: 'auto', objectFit: 'contain' }} />
                    <span style={{ fontSize: 24, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#0f172a', letterSpacing: '-0.03em' }}>OnePath</span>
                </Link>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#475569', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <span className="hide-on-mobile">Already have an account? </span>
                    <a href="https://lis.onepathlab.com" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 700 }}>Log in</a>
                </div>
            </div>

            <div className="signup-wrapper" style={{ display: 'flex', flex: 1, paddingTop: 88 }}>
                {/* —— Left: Form —— */}
                <div className="signup-form-section" style={{ flex: 1.2, padding: 'clamp(24px, 5vw, 40px) 16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: 540 }}>

                        {!isSuccess ? (
                            <div className="animate-fade-in">
                                <div style={{ marginBottom: 36 }}>
                                    <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                                        Start your <span style={{ color: '#2563eb' }}>7-Day Free Trial</span>
                                    </h1>
                                    <p style={{ color: '#64748b', fontSize: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
                                        Instant access to full LIS features. No credit card required.
                                    </p>
                                </div>

                                {error && (
                                    <div style={{ padding: '12px 16px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '12px', marginBottom: '24px', fontSize: '14px', fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: 'pre-line' }}>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16 }}>
                                        <div>
                                            <label style={labelStyle}>Full Name</label>
                                            <div className="input-group custom-input" style={inputGroupStyle}>
                                                <User size={18} color="#94a3b8" style={iconStyle} />
                                                <input type="text" name="name" required placeholder="Dr. John Doe" value={formData.name} onChange={handleChange} style={inputStyle} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Phone Number</label>
                                            <div className="input-group custom-input" style={inputGroupStyle}>
                                                <Phone size={18} color="#94a3b8" style={iconStyle} />
                                                <input type="tel" name="phone" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} style={inputStyle} />
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16 }}>
                                        <div>
                                            <label style={labelStyle}>Email Address</label>
                                            <div className="input-group custom-input" style={inputGroupStyle}>
                                                <Mail size={18} color="#94a3b8" style={iconStyle} />
                                                <input type="email" name="email" required placeholder="john@lab.com" value={formData.email} onChange={handleChange} style={inputStyle} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Create Password</label>
                                            <div className="input-group custom-input" style={inputGroupStyle}>
                                                <Lock size={18} color="#94a3b8" style={iconStyle} />
                                                <input type="password" name="password" required placeholder="••••••••" value={formData.password} onChange={handleChange} style={inputStyle} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Laboratory Name</label>
                                        <div className="input-group custom-input" style={inputGroupStyle}>
                                            <Building size={18} color="#94a3b8" style={iconStyle} />
                                            <input type="text" name="labName" required placeholder="e.g. Apex Diagnostics" value={formData.labName} onChange={handleChange} style={inputStyle} />
                                        </div>
                                    </div>

                                    {/* Patient Volume Dropdown */}
                                    <div ref={dropdownRef}>
                                        <label style={labelStyle}>Daily Patient Volume</label>
                                        <div style={{ ...inputGroupStyle, position: 'relative' }}>
                                            <Users size={18} color="#94a3b8" style={iconStyle} />
                                            <div
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                style={{
                                                    ...inputStyle, paddingLeft: '44px', paddingRight: '14px',
                                                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                                                    justifyContent: 'space-between', gap: 8,
                                                    borderColor: isDropdownOpen ? '#2563eb' : '#cbd5e1',
                                                    boxShadow: isDropdownOpen ? '0 0 0 4px rgba(37,99,235,0.1)' : 'none'
                                                }}
                                            >
                                                <span style={{ color: '#0f172a', flex: 1, fontSize: 15 }}>{selectedOpt?.label}</span>
                                                {selectedOpt && (
                                                    <span style={{ fontSize: 11, fontWeight: 700, color: selectedOpt.tagColor, background: selectedOpt.tagBg, padding: '2px 9px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 }}>
                                                        {selectedOpt.tag}
                                                    </span>
                                                )}
                                                <ChevronDown size={16} color="#94a3b8" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s', flexShrink: 0 }} />
                                            </div>

                                            {isDropdownOpen && (
                                                <div className="animate-fade-in" style={{
                                                    position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 8,
                                                    background: '#ffffff', borderRadius: 12, border: '1px solid #cbd5e1',
                                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', zIndex: 20, overflow: 'hidden'
                                                }}>
                                                    {patientOptions.map(opt => (
                                                        <div
                                                            key={opt.value}
                                                            onClick={(e) => handleDropdownSelect(e, opt.value)}
                                                            className="dropdown-item"
                                                            style={{
                                                                padding: '13px 16px', cursor: 'pointer', fontSize: 14,
                                                                fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#334155',
                                                                transition: 'background 0.15s', borderBottom: '1px solid #f1f5f9',
                                                                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
                                                                fontWeight: formData.patientCount === opt.value ? 700 : 500,
                                                            }}
                                                        >
                                                            <span>{opt.label}</span>
                                                            <span style={{ fontSize: 11, fontWeight: 700, color: opt.tagColor, background: opt.tagBg, padding: '2px 9px', borderRadius: 100, whiteSpace: 'nowrap', flexShrink: 0 }}>
                                                                {opt.tag}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Plan Selection */}
                                    <div style={{ marginTop: 4 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                                            <label style={{ ...labelStyle, marginBottom: 0 }}>Choose Your Plan</label>
                                            <span style={{ color: '#16a34a', background: '#dcfce7', padding: '4px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                                1st Month Free
                                            </span>
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 14 }}>
                                            <button type="button" onClick={() => setSelectedPlan('6month')} className={`plan-card ${selectedPlan === '6month' ? 'selected' : ''}`}>
                                                {selectedPlan === '6month' && <div className="check-icon"><CheckCircle2 size={20} /></div>}
                                                <h4 className="plan-title">6 Months</h4>
                                                <div className="plan-price">₹3,999<span style={{ fontSize: 13, fontWeight: 500, color: '#64748b' }}> total</span></div>
                                                <p className="plan-desc">6 months access, billed once.<br />All features included.</p>
                                            </button>

                                            <button type="button" onClick={() => setSelectedPlan('1year')} className={`plan-card ${selectedPlan === '1year' ? 'selected' : ''}`}>
                                                {selectedPlan === '1year' && <div className="check-icon"><CheckCircle2 size={20} /></div>}
                                                <div className="recommended-badge">BEST VALUE</div>
                                                <h4 className="plan-title">1 Year</h4>
                                                <div className="plan-price">₹5,999<span style={{ fontSize: 13, fontWeight: 500, color: '#64748b' }}> total</span></div>
                                                <p className="plan-desc">Full year access, billed once.<br />All features included.</p>
                                            </button>
                                        </div>

                                        <div style={{ marginTop: 12, padding: '10px 14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <CheckCircle2 size={14} color="#2563eb" style={{ flexShrink: 0 }} />
                                            <span style={{ fontSize: 12.5, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                                Both plans include <strong style={{ color: '#0f172a' }}>all features</strong> — AI Reports, Machine Interfacing, WhatsApp Delivery, Multi-branch & more.
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="submit-btn"
                                        style={{
                                            padding: '18px', borderRadius: '14px', background: '#2563eb', color: '#ffffff',
                                            fontSize: 16, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", border: 'none',
                                            cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'all 0.2s ease',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 8,
                                            boxShadow: '0 10px 25px -6px rgba(37, 99, 235, 0.5)'
                                        }}
                                    >
                                        {isLoading ? <span className="spinner" /> : <><ArrowRight size={18} /> Start 7-Day Free Trial</>}
                                    </button>

                                    <p style={{ textAlign: 'center', fontSize: 13, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif", marginTop: 4 }}>
                                        By signing up, you agree to our{' '}
                                        <Link href="/terms" style={{ color: '#64748b', textDecoration: 'underline' }}>Terms of Service</Link>{' '}and{' '}
                                        <Link href="/privacy-policy" style={{ color: '#64748b', textDecoration: 'underline' }}>Privacy Policy</Link>.
                                    </p>
                                </form>
                            </div>
                        ) : (
                            /* Success State */
                            <div className="animate-fade-in" style={{ textAlign: 'center', padding: '44px 32px', background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.07)' }}>
                                <div style={{ width: 76, height: 76, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 0 8px rgba(34,197,94,0.1)' }}>
                                    <CheckCircle2 size={38} color="#16a34a" />
                                </div>
                                <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 10 }}>
                                    {isAutoApproved ? '🎉 7-Day Free Trial is Live!' : 'Registration Successful!'}
                                </h2>
                                <p style={{ fontSize: 15, color: '#475569', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.7, maxWidth: 430, margin: '0 auto 20px' }}>
                                    Welcome, <strong style={{ color: '#0f172a' }}>{formData.name.split(' ')[0]}</strong>! Your lab account for{' '}
                                    <strong style={{ color: '#0f172a' }}>{formData.labName}</strong> has been created.
                                </p>

                                {isAutoApproved ? (
                                    <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', borderRadius: 14, padding: '16px 20px', marginBottom: 24, textAlign: 'left' }}>
                                        <div style={{ fontSize: 13.5, fontWeight: 700, color: '#166534', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                                            ✓ Instant Access Granted
                                        </div>
                                        <p style={{ fontSize: 13, color: '#14532d', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>
                                            Your 7-Day Free Trial with complete LIS features (Patient Registration, Test Catalog, Result Entry, Bill Invoicing, and Print Reports) is active now!
                                        </p>
                                    </div>
                                ) : (
                                    <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 14, padding: '16px 20px', marginBottom: 20, textAlign: 'left' }}>
                                        <div style={{ fontSize: 13, fontWeight: 700, color: '#92400e', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 6 }}>⏳ Pending Admin Approval</div>
                                        <p style={{ fontSize: 13.5, color: '#78350f', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.7, margin: 0 }}>
                                            Your account is under review. Once approved, you'll receive a confirmation at{' '}
                                            <strong>{formData.email}</strong>.
                                        </p>
                                    </div>
                                )}

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                                    <a
                                        href="https://lis.onepathlab.com"
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                            padding: '14px 28px', background: '#2563eb', color: '#fff',
                                            borderRadius: '12px', textDecoration: 'none',
                                            fontWeight: 700, fontSize: 15,
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            boxShadow: '0 8px 20px -6px rgba(37, 99, 235, 0.4)',
                                        }}
                                    >
                                        <ArrowRight size={16} /> Open OnePath LIS Portal
                                    </a>
                                </div>

                                <p style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif", margin: 0, lineHeight: 1.65 }}>
                                    Need help? Call{' '}
                                    <a href="tel:+919045757272" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>+91 90457 57272</a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* —— Right: Info Panel —— */}
                <div className="signup-info-section" style={{ flex: 1, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '80px 60px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'rgba(37,99,235,0.3)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: -100, left: -100, width: 300, height: 300, background: 'rgba(139,92,246,0.2)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

                    <div style={{ position: 'relative', zIndex: 1, maxWidth: 460 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', padding: '6px 16px', borderRadius: 100, color: '#4ade80', fontSize: 13, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            <Sparkles size={14} /> 7-Day Free Trial
                        </div>
                        <h2 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.02em' }}>
                            Experience the future of <span style={{ color: '#60a5fa' }}>Diagnostics</span>.
                        </h2>
                        <p style={{ fontSize: 16, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.6, marginBottom: 48 }}>
                            Get full access for 7 days free. No hidden charges. We'll even help set up your machines.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            {[
                                { icon: <Zap size={24} color="#60a5fa" />, title: 'Instant Machine Integration', desc: 'Connect Cell Counters & Biochemistry analyzers in minutes.' },
                                { icon: <ShieldCheck size={24} color="#34d399" />, title: 'NABL Compliant Reports', desc: 'Pre-formatted, beautiful smart reports ready for patients.' },
                                { icon: <Users size={24} color="#a78bfa" />, title: 'Multi-User Access', desc: 'Separate secure logins for Pathologists, Technicians, and Reception.' },
                            ].map((f, i) => (
                                <div key={i} style={{ display: 'flex', gap: 16 }}>
                                    <div style={{ width: 52, height: 52, background: 'rgba(255,255,255,0.05)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,255,255,0.1)' }}>{f.icon}</div>
                                    <div>
                                        <h4 style={{ fontSize: 17, fontWeight: 700, color: '#ffffff', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 6 }}>{f.title}</h4>
                                        <p style={{ fontSize: 14.5, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.5 }}>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-input input:focus { border-color: #2563eb !important; box-shadow: 0 0 0 4px rgba(37,99,235,0.1); }
                .custom-input:focus-within svg { color: #2563eb !important; }
                .dropdown-item:last-child { border-bottom: none !important; }
                .dropdown-item:hover { background: #f8fafc !important; color: #2563eb !important; font-weight: 700 !important; }
                .plan-card { border: 2px solid #e2e8f0; background: #ffffff; padding: 20px; border-radius: 16px; cursor: pointer; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); position: relative; display: flex; flex-direction: column; gap: 6px; text-align: left; }
                .plan-card:hover { border-color: #cbd5e1; background: #f8fafc; }
                .plan-card.selected { border-color: #2563eb; background: #eff6ff; box-shadow: 0 10px 25px -5px rgba(37,99,235,0.15); transform: translateY(-2px); }
                .plan-title { font-size: 16px; font-weight: 700; color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif; margin: 0; }
                .plan-price { font-size: 28px; font-weight: 800; color: #2563eb; font-family: 'Plus Jakarta Sans', sans-serif; margin-bottom: 4px; }
                .plan-price span { font-size: 13px; font-weight: 600; color: #64748b; font-family: 'Plus Jakarta Sans', sans-serif; }
                .plan-desc { font-size: 13px; color: #64748b; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 1.5; margin: 0; }
                .check-icon { position: absolute; top: 14px; right: 14px; color: #2563eb; animation: scaleIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275); }
                .recommended-badge { position: absolute; top: -10px; left: 16px; background: #2563eb; color: white; font-size: 10px; font-weight: 800; padding: 2px 10px; border-radius: 100px; font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: 0.05em; }
                .submit-btn:hover:not(:disabled) { background: #1d4ed8 !important; transform: translateY(-2px); box-shadow: 0 12px 30px -6px rgba(37, 99, 235, 0.6) !important; }
                .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
                @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
                @keyframes scaleIn { from { transform:scale(0.5); opacity:0; } to { transform:scale(1); opacity:1; } }
                @keyframes spin { 100% { transform:rotate(360deg); } }
                .spinner { width:22px; height:22px; border:3px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 1s linear infinite; display:inline-block; }
                .hide-on-mobile { display: inline; }
                @media (max-width: 950px) {
                    .signup-wrapper { flex-direction: column; }
                    .signup-info-section { display: none; }
                    .signup-form-section { padding: 32px 20px !important; }
                    .hide-on-mobile { display: none; }
                }
            ` }} />
        </main>
    )
}