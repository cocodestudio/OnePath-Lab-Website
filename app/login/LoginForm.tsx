'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Lock, Eye, EyeOff, ShieldCheck, Activity, Quote, ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react'

export default function LoginForm() {
    const [view, setView] = useState<'login' | 'forgot'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [resetSent, setResetSent] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)

    const handleAction = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setErrorMessage(null)
        setSuccessMessage(null)

        const apiOrigin = process.env.NEXT_PUBLIC_API_URL
            ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
            : "http://127.0.0.1:8000"

        if (view === 'forgot') {
            try {
                const response = await fetch(`${apiOrigin}/api/auth/forgot-password`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ email }),
                })

                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.message || 'Unable to process password reset request.')
                }

                setResetSent(true)
                setSuccessMessage('We have emailed you a secure link to reset your password.')
            } catch (err: any) {
                setErrorMessage(err.message || 'Unable to connect to authentication server.')
            } finally {
                setIsLoading(false)
            }
            return
        }

        // Login Action
        try {
            const response = await fetch(`${apiOrigin}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (!response.ok) {
                if (data.errors) {
                    const errorMessages = Object.values(data.errors).flat().join(' ')
                    throw new Error(errorMessages)
                }
                throw new Error(data.message || 'Invalid credentials. Please verify your email and password.')
            }

            if (data.status === 'success') {
                // Redirect user to the LIS Workstation portal with pre-filled email
                window.location.href = `https://lis.onepathlab.com/login?email=${encodeURIComponent(email)}`
            }
        } catch (err: any) {
            setErrorMessage(err.message || 'Unable to connect to authentication server.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="login-container" style={{ minHeight: '100vh', display: 'flex', background: '#ffffff', width: '100%' }}>

            {/* Left Panel: Form Section */}
            <div className="login-left" style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 24px',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                {/* Brand Logo */}
                <div className="login-logo" style={{ position: 'absolute', top: 40, left: 40 }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                        <Image
                            src="/logo.png"
                            alt="OnePath Logo"
                            width={36}
                            height={36}
                            style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
                            priority
                        />
                        <span style={{ fontSize: 24, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#0f172a', letterSpacing: '-0.03em' }}>
                            OnePath
                        </span>
                    </Link>
                </div>

                <div className="form-wrapper" style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>

                    {/* Direct Portal Access Banner */}
                    <div style={{
                        background: '#eff6ff',
                        border: '1px solid #bfdbfe',
                        borderRadius: 12,
                        padding: '12px 16px',
                        marginBottom: 28,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12
                    }}>
                        <div style={{ fontSize: 13, color: '#1e40af', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                            Direct Workstation Access
                        </div>
                        <a
                            href="https://lis.onepathlab.com/login"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 4,
                                color: '#2563eb',
                                fontSize: 13,
                                fontWeight: 700,
                                textDecoration: 'none',
                                fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}
                        >
                            Open Portal <ExternalLink size={13} />
                        </a>
                    </div>

                    {/* Error / Success Alerts */}
                    {errorMessage && (
                        <div style={{
                            background: '#fef2f2',
                            border: '1px solid #fecaca',
                            color: '#991b1b',
                            padding: '12px 16px',
                            borderRadius: 12,
                            fontSize: 14,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            marginBottom: 20,
                            lineHeight: 1.5
                        }}>
                            {errorMessage}
                        </div>
                    )}

                    {successMessage && (
                        <div style={{
                            background: '#ecfdf5',
                            border: '1px solid #a7f3d0',
                            color: '#065f46',
                            padding: '12px 16px',
                            borderRadius: 12,
                            fontSize: 14,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            marginBottom: 20,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            lineHeight: 1.5
                        }}>
                            <CheckCircle size={18} color="#059669" style={{ flexShrink: 0 }} />
                            <span>{successMessage}</span>
                        </div>
                    )}

                    {/* View: LOGIN */}
                    {view === 'login' ? (
                        <div className="animate-fade-in">
                            <div style={{ marginBottom: 32, textAlign: 'center' }}>
                                <h1 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 10, letterSpacing: '-0.02em' }}>
                                    Welcome back
                                </h1>
                                <p style={{ color: '#64748b', fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
                                    Sign in to your diagnostic laboratory portal
                                </p>
                            </div>

                            <form onSubmit={handleAction} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#334155', marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        Email Address
                                    </label>
                                    <div className="input-group" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                        <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: 16 }} />
                                        <input
                                            type="email"
                                            placeholder="Enter your registered email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                            style={{
                                                width: '100%', padding: '14px 16px 14px 44px', borderRadius: '12px', border: '1px solid #cbd5e1',
                                                fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", outline: 'none', background: '#ffffff',
                                                transition: 'all 0.2s', color: '#0f172a'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                        <label style={{ fontSize: 14, fontWeight: 700, color: '#334155', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                            Password
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => { setView('forgot'); setErrorMessage(null); setSuccessMessage(null); }}
                                            style={{ fontSize: 13, fontWeight: 700, color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", padding: 0 }}
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                    <div className="input-group" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                        <Lock size={18} color="#94a3b8" style={{ position: 'absolute', left: 16 }} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                            style={{
                                                width: '100%', padding: '14px 44px', borderRadius: '12px', border: '1px solid #cbd5e1',
                                                fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", outline: 'none', background: '#ffffff',
                                                transition: 'all 0.2s', color: '#0f172a'
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ position: 'absolute', right: 16, background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex' }}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    style={{
                                        padding: '16px', borderRadius: '12px', background: '#2563eb', color: '#ffffff',
                                        fontSize: 16, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", border: 'none',
                                        cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8,
                                        boxShadow: '0 8px 25px -6px rgba(37, 99, 235, 0.4)'
                                    }}
                                    className="primary-btn"
                                >
                                    {isLoading ? <span className="spinner" /> : 'Sign In to Workstation'}
                                </button>
                            </form>

                            <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14.5, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                Don&apos;t have an account?{' '}
                                <Link href="/trial" style={{ color: '#2563eb', fontWeight: 700, textDecoration: 'none' }}>
                                    Start 7-day free trial
                                </Link>
                            </p>
                        </div>
                    ) : (
                        /* View: FORGOT PASSWORD */
                        <div className="animate-fade-in">
                            <div style={{ marginBottom: 32, textAlign: 'left' }}>
                                <div style={{ width: 48, height: 48, background: '#eff6ff', color: '#2563eb', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                                    <Lock size={24} />
                                </div>
                                <h2 style={{ fontSize: 'clamp(24px, 4vw, 30px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 10, letterSpacing: '-0.02em' }}>
                                    Reset Password
                                </h2>
                                <p style={{ color: '#64748b', fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, lineHeight: 1.6 }}>
                                    {resetSent
                                        ? "A password reset link has been dispatched to your email. Click the link in your inbox to configure your new password."
                                        : "Enter your registered laboratory email and we'll send you an encrypted password reset link."}
                                </p>
                            </div>

                            {!resetSent ? (
                                <form onSubmit={handleAction} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#334155', marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                            Email Address
                                        </label>
                                        <div className="input-group" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                            <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: 16 }} />
                                            <input
                                                type="email"
                                                placeholder="Enter your registered email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                                style={{
                                                    width: '100%', padding: '14px 16px 14px 44px', borderRadius: '12px', border: '1px solid #cbd5e1',
                                                    fontSize: 15, fontFamily: "'Plus Jakarta Sans', sans-serif", outline: 'none', background: '#ffffff',
                                                    transition: 'all 0.2s', color: '#0f172a'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        style={{
                                            padding: '16px', borderRadius: '12px', background: '#2563eb', color: '#ffffff',
                                            fontSize: 16, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", border: 'none',
                                            cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                            boxShadow: '0 8px 25px -6px rgba(37, 99, 235, 0.4)'
                                        }}
                                        className="primary-btn"
                                    >
                                        {isLoading ? <span className="spinner" /> : 'Send Reset Link'}
                                    </button>
                                </form>
                            ) : (
                                <button
                                    onClick={() => { setView('login'); setResetSent(false); setSuccessMessage(null); }}
                                    style={{
                                        width: '100%', padding: '16px', borderRadius: '12px', background: '#f1f5f9', color: '#0f172a',
                                        fontSize: 16, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", border: 'none',
                                        cursor: 'pointer', transition: 'all 0.2s'
                                    }}
                                    className="secondary-btn"
                                >
                                    Return to Sign In
                                </button>
                            )}

                            {!resetSent && (
                                <button
                                    type="button"
                                    onClick={() => { setView('login'); setErrorMessage(null); setSuccessMessage(null); }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%',
                                        marginTop: 28, fontSize: 14.5, fontWeight: 700, color: '#64748b', background: 'none', border: 'none',
                                        cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif"
                                    }}
                                    className="back-link"
                                >
                                    <ArrowLeft size={16} /> Back to log in
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Panel: Feature Highlights */}
            <div className="login-right" style={{
                flex: 1.2,
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '60px',
                color: 'white'
            }}>
                <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: 'rgba(59, 130, 246, 0.3)', borderRadius: '50%', filter: 'blur(120px)' }} />
                <div style={{ position: 'absolute', bottom: -100, left: -100, width: 500, height: 500, background: 'rgba(139, 92, 246, 0.2)', borderRadius: '50%', filter: 'blur(120px)' }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: 500 }}>
                    <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
                        Automate.<br />Scale. <span style={{ color: '#60a5fa' }}>Grow.</span>
                    </h2>
                    <p style={{ fontSize: 18, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.6 }}>
                        Join the network of top NABL accredited labs across India utilizing our cloud LIS software.
                    </p>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px', padding: '36px',
                    position: 'relative', zIndex: 1, maxWidth: 500, boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}>
                    <Quote size={40} color="rgba(255,255,255,0.1)" style={{ position: 'absolute', top: 24, right: 24 }} />
                    <p style={{ fontSize: 16, color: '#f8fafc', lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 28, position: 'relative', zIndex: 2 }}>
                        &ldquo;Switching to OnePath was the best operational decision we made. Our TAT reduced by 40%, and the automatic WhatsApp delivery eliminated queues at our reception desk.&rdquo;
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            D
                        </div>
                        <div>
                            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#ffffff' }}>Dr. Dilip Sanghvi</div>
                            <div style={{ fontSize: 14, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Apex Diagnostics</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: 40, position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <ShieldCheck size={28} color="#60a5fa" />
                        <div>
                            <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#fff' }}>HIPAA &amp; DPDP</div>
                            <div style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>100% Data Security</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Activity size={28} color="#34d399" />
                        <div>
                            <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#fff' }}>99.9% Uptime</div>
                            <div style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>AWS Infrastructure</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .animate-fade-in { animation: fadeIn 0.3s ease-out; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .input-group input:focus {
                    border-color: #2563eb !important;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
                    background: #ffffff !important;
                }
                .input-group:focus-within svg { color: #2563eb !important; }

                .primary-btn:hover:not(:disabled) {
                    background: #1d4ed8 !important;
                    transform: translateY(-1px);
                    box-shadow: 0 12px 30px -6px rgba(37, 99, 235, 0.5) !important;
                }
                .secondary-btn:hover { background: #e2e8f0 !important; }
                .back-link:hover { color: #0f172a !important; }

                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                .spinner {
                    width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: #fff; border-radius: 50%; animation: spin 1s linear infinite;
                }

                @media (max-width: 900px) {
                    .login-right { display: none !important; }
                    .login-left {
                        padding: 24px !important;
                        background: #f8fafc;
                        align-items: center;
                    }
                    .login-logo {
                        position: relative !important;
                        top: 0 !important; left: 0 !important;
                        margin-bottom: 32px;
                        display: flex; justify-content: center; width: 100%;
                    }
                    .form-wrapper {
                        background: #ffffff;
                        padding: 36px 24px;
                        border-radius: 24px;
                        box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05);
                        border: 1px solid #e2e8f0;
                    }
                }
            `}</style>
        </div>
    )
}
