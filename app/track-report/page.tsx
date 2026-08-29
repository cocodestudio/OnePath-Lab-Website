'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Search, FileText, CheckCircle2, Clock, AlertCircle, Download, FileQuestion, ChevronRight, Activity, Beaker } from 'lucide-react'

export default function TrackReport() {
    const [patientId, setPatientId] = useState('')
    const [accessCode, setAccessCode] = useState('')
    const [isTracking, setIsTracking] = useState(false)
    const [trackResult, setTrackResult] = useState<any>(null)

    // Simulate API Call for tracking
    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault()
        if (!patientId || !accessCode) return
        
        setIsTracking(true)
        // Fake delay to show loading state
        setTimeout(() => {
            setIsTracking(false)
            setTrackResult({
                name: 'Rahul Sharma',
                testName: 'Complete Blood Count (CBC) & Lipid Profile',
                date: '08 June 2026',
                status: 'processing', // 'completed', 'processing', 'collected'
                eta: 'Today, 08:00 PM',
            })
        }, 1500)
    }

    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            {/* Hero Section */}
            <section style={{
                padding: '160px 20px 80px',
                background: 'linear-gradient(180deg, #ffffff 0%, #e0eaff 100%)',
                borderBottom: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: 50, right: -100, width: 400, height: 400, background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
                
                <div className="container" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: '#ffffff', border: '1px solid #bfdbfe',
                            color: 'var(--blue-primary)', padding: '6px 16px',
                            borderRadius: '100px', fontSize: '12px', fontWeight: '700',
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.1)'
                        }}>
                            <Activity size={14} /> Real-Time Tracking
                        </span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 20, letterSpacing: '-0.02em' }}>
                        Track Your <span style={{ color: 'var(--blue-primary)' }}>Lab Report</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: '#475569', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", maxWidth: 600, margin: '0 auto' }}>
                        Enter your Patient ID and Access Code from your billing receipt to check the live status of your diagnostic tests and download your smart reports securely.
                    </p>
                </div>
            </section>

            {/* Tracking Tracker Section */}
            <section style={{ padding: '40px 20px 80px', flex: 1, marginTop: '-40px' }}>
                <div className="container" style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
                    
                    {/* The Tracking Form */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '24px',
                        border: '1px solid #e2e8f0',
                        padding: '40px',
                        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.08)',
                        marginBottom: 40
                    }}>
                        <form onSubmit={handleTrack} className="track-form" style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>
                                    Patient ID / Mobile Number
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. PID-982736"
                                    value={patientId}
                                    onChange={e => setPatientId(e.target.value)}
                                    required
                                    style={{
                                        width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid #cbd5e1',
                                        fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: 'none',
                                        transition: 'all 0.2s', background: '#f8fafc'
                                    }}
                                    onFocus={e => e.currentTarget.style.borderColor = 'var(--blue-primary)'}
                                    onBlur={e => e.currentTarget.style.borderColor = '#cbd5e1'}
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#0f172a', marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>
                                    Access Code / Bill No.
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Found on your receipt"
                                    value={accessCode}
                                    onChange={e => setAccessCode(e.target.value)}
                                    required
                                    style={{
                                        width: '100%', padding: '16px 20px', borderRadius: '12px', border: '1px solid #cbd5e1',
                                        fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: 'none',
                                        transition: 'all 0.2s', background: '#f8fafc'
                                    }}
                                    onFocus={e => e.currentTarget.style.borderColor = 'var(--blue-primary)'}
                                    onBlur={e => e.currentTarget.style.borderColor = '#cbd5e1'}
                                />
                            </div>
                            <button type="submit" disabled={isTracking} style={{
                                padding: '16px 32px', borderRadius: '12px', background: 'var(--blue-primary)', color: '#ffffff',
                                fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", border: 'none',
                                cursor: isTracking ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                                display: 'flex', alignItems: 'center', gap: 8, height: '54px', opacity: isTracking ? 0.8 : 1
                            }}>
                                {isTracking ? <span className="spinner" /> : <Search size={20} />}
                                {isTracking ? 'Searching...' : 'Track Status'}
                            </button>
                        </form>
                    </div>

                    {/* Result Area */}
                    {trackResult && (
                        <div className="animate-fade-up" style={{
                            background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0',
                            padding: '40px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)',
                        }}>
                            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: 24, marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                                <div>
                                    <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 6 }}>
                                        {trackResult.name}
                                    </h2>
                                    <p style={{ color: '#64748b', fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>
                                        {trackResult.testName}
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontSize: 13, color: '#94a3b8', fontWeight: 600, fontFamily: "'DM Sans', sans-serif", marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Collection Date
                                    </p>
                                    <p style={{ color: '#0f172a', fontSize: 15, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
                                        {trackResult.date}
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Stepper */}
                            <div className="timeline-container" style={{ position: 'relative', marginBottom: 48, paddingLeft: 10 }}>
                                {/* Vertical Line */}
                                <div style={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: 2, background: '#f1f5f9', zIndex: 0 }} />
                                
                                {/* Step 1 */}
                                <div style={{ display: 'flex', gap: 20, position: 'relative', zIndex: 1, marginBottom: 32 }}>
                                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#22c55e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>Sample Collected</h4>
                                        <p style={{ fontSize: 14, color: '#64748b', fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>Barcode assigned and sample safely stored.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div style={{ display: 'flex', gap: 20, position: 'relative', zIndex: 1, marginBottom: 32 }}>
                                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 0 4px rgba(59,130,246,0.15)' }}>
                                        <Beaker size={16} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>Processing in Lab (Active)</h4>
                                        <p style={{ fontSize: 14, color: '#64748b', fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>Sample is currently being analyzed by our automated machines.</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div style={{ display: 'flex', gap: 20, position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#e2e8f0', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <FileText size={16} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 16, fontWeight: 700, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>Report Generation</h4>
                                        <p style={{ fontSize: 14, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>Doctor verification and final AI smart report creation.</p>
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fffbeb', color: '#d97706', padding: '6px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600, marginTop: 12 }}>
                                            <Clock size={14} /> Expected by: {trackResult.eta}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', borderTop: '1px solid #f1f5f9', paddingTop: 24 }}>
                                <button disabled style={{
                                    padding: '12px 24px', borderRadius: '10px', background: '#f1f5f9', color: '#94a3b8',
                                    fontSize: 15, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", border: 'none',
                                    cursor: 'not-allowed', display: 'flex', alignItems: 'center', gap: 8
                                }}>
                                    <Download size={18} /> Download Report
                                </button>
                                <button style={{
                                    padding: '12px 24px', borderRadius: '10px', background: '#ffffff', color: '#475569',
                                    fontSize: 15, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", border: '1px solid #cbd5e1',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s'
                                }} onMouseEnter={e => e.currentTarget.style.background = '#f8fafc'} onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}>
                                    <AlertCircle size={18} /> Report an Issue
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Informational Content (Maximum Content Request) */}
            <section style={{ padding: '80px 20px', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
                <div className="container" style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 16 }}>
                            Frequently Asked Questions
                        </h2>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                <FileQuestion size={24} color="var(--blue-primary)" />
                                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>When will my report be ready?</h3>
                            </div>
                            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                                Turnaround Time (TAT) depends on the specific tests requested. Routine blood tests like CBC or Sugar usually take 6-12 hours, whereas specialized cultures may take 48-72 hours.
                            </p>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                <FileQuestion size={24} color="var(--blue-primary)" />
                                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>How to download the report?</h3>
                            </div>
                            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                                Once the timeline shows "Report Generation" as completed, the "Download Report" button above will turn blue. You can click it to securely download your Smart PDF Report.
                            </p>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                <FileQuestion size={24} color="var(--blue-primary)" />
                                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>I lost my Access Code, what do I do?</h3>
                            </div>
                            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                                Your Access Code is printed on your physical billing receipt and sent via SMS. If you have lost it, please contact the laboratory branch directly with your registered mobile number.
                            </p>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                <FileQuestion size={24} color="var(--blue-primary)" />
                                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}>Are online reports valid?</h3>
                            </div>
                            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                                Yes! Reports generated via OnePath Lab carry a digital signature and a unique QR code for verification. They are 100% valid for doctor consultations and hospital admissions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Styles for Responsiveness and Animations */}
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .spinner {
                    width: 18px; height: 18px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @media (max-width: 768px) {
                    .track-form {
                        flex-direction: column;
                        align-items: stretch !important;
                    }
                    .track-form button {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </main>
    )
}