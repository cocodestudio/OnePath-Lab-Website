'use client'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
    ArrowRight, CheckCircle, Shield, Zap, Globe, Users,
    BarChart3, Smartphone, Lock, Server, Clock, FileText,
    Microscope, GitBranch, CreditCard, MessageSquare, Star,
    ChevronDown, Play, TrendingUp, Database, Cpu, Award,
    Building2, Stethoscope, FlaskConical, AlertCircle, Check, X
} from 'lucide-react'

/* ── Animated counter hook ── */
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!start) return
        let startTime: number
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [end, duration, start])
    return count
}

/* ── Intersection Observer hook ── */
function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true) },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])
    return { ref, inView }
}

/* ── Data ── */
const coreFeatures = [
    { icon: <Cpu size={22} />, color: '#7c3aed', bg: '#f5f3ff', title: 'Smart Rules Engine', desc: 'Automated calculations for derived parameters, delta checks against patient history, and automatic red-flagging of critical values based on age and gender.' },
    { icon: <Microscope size={22} />, color: '#2563eb', bg: '#eff6ff', title: 'Machine Interfacing', desc: 'Bi-directional integration with 200+ analyzer models (Sysmex, Roche, Abbott, Mindray, Beckman). Results flow straight to the report — zero manual entry.' },
    { icon: <Users size={22} />, color: '#4f46e5', bg: '#eef2ff', title: 'Front-Desk Reception Portal', desc: 'Fast patient intake terminal with barcode tube printing, instant cash/UPI billing, queue management, and strict doctor-only report editing locks.' },
    { icon: <FlaskConical size={22} />, color: '#dc2626', bg: '#fef2f2', title: 'Reagents & Stock Management', desc: 'Admin control for lab consumables, real-time stock valuation, 2-8°C cold chain storage logs, batch tracking, low-stock warnings, and automated expiry alerts.' },
    { icon: <MessageSquare size={22} />, color: '#059669', bg: '#ecfdf5', title: 'WhatsApp Automation', desc: 'Reports delivered to patients and referring doctors via WhatsApp, SMS, and email within seconds of digital signature approval.' },
    { icon: <GitBranch size={22} />, color: '#d97706', bg: '#fffbeb', title: 'Multi-Branch Management', desc: 'Manage unlimited lab branches from a single dashboard. Each center has independent queues, billing, and reporting — with centralized MIS analytics.' },
    { icon: <CreditCard size={22} />, color: '#0891b2', bg: '#ecfeff', title: 'Integrated Billing & Finance', desc: 'GST-compliant invoicing, corporate B2B billing, credit management, doctor commissions, and daily financial reconciliation reports.' },
    { icon: <BarChart3 size={22} />, color: '#2563eb', bg: '#eff6ff', title: 'Real-Time Analytics', desc: 'Live dashboards for TAT tracking, test volume trends, revenue analytics, referral performance, and dynamic inventory consumption.' },
    { icon: <Smartphone size={22} />, color: '#7c3aed', bg: '#f5f3ff', title: 'Mobile-Ready Portals', desc: 'Dedicated web portals for phlebotomists (home collection), referring doctors, and patients. Full lab workflow accessible securely on any device.' },
]

const securityFeatures = [
    { icon: <Lock size={20} />, title: 'AES-256 Encryption', desc: 'All patient data encrypted at rest using AES-256. In transit, TLS 1.3 — same standard used by major banks.' },
    { icon: <Server size={20} />, title: 'AWS', desc: 'Enterprise cloud hosting powered by AWS infrastructure. Automated backups every 4 hours with 30-day retention.' },
    { icon: <Shield size={20} />, title: 'DPDP Act 2023 Compliant', desc: 'Fully aligned with India\'s Digital Personal Data Protection Act. Explicit consent flows, data minimization, and subject rights honored.' },
    { icon: <Database size={20} />, title: 'Multi-Tenant Isolation', desc: 'Every lab\'s data lives in a completely isolated namespace. Lab A can never access Lab B\'s data — enforced at the database level, not just UI.' },
    { icon: <Users size={20} />, title: 'Role-Based Access Control', desc: 'Granular permissions for Admin, Pathologist, Technician, Receptionist, Accountant, and Doctor roles. Each role sees only what it needs.' },
    { icon: <AlertCircle size={20} />, title: '24×7 Threat Monitoring', desc: 'Real-time intrusion detection, automated anomaly alerts, and a dedicated security response team. 99.9% uptime SLA guaranteed.' },
]

const multiTenancyPoints = [
    { title: 'Complete Data Isolation', desc: 'Each lab\'s records, reports, staff, and configuration are stored in completely separate database schemas. No shared tables between labs. Even if 10,000 labs run on the same server, Lab A\'s data is cryptographically inaccessible to Lab B.' },
    { title: 'Independent Customization', desc: 'Every lab can configure its own test masters, reference ranges, report templates, letterhead, logo, fee schedule, and branch structure — without affecting any other lab on the platform.' },
    { title: 'Separate Audit Trails', desc: 'Every action by every user in every lab is logged in an isolated, tamper-proof audit trail. Perfect for NABL audits. You can see who accessed what, when, and from which device.' },
    { title: 'Independent Backup & Recovery', desc: 'Backups are per-lab, not shared. If a restore is needed, only your lab\'s backup is restored — instantly, without impacting any other customer on the platform.' },
    { title: 'Scaling Without Interference', desc: 'A sudden spike in patients at one lab (say, a disease outbreak) does not affect the performance of other labs. Each tenant gets dedicated compute resources during peak load.' },
]

const comparisonData = [
    { feature: 'Cloud-Based Access Anywhere', onepath: true, offline: false, saas: true },
    { feature: 'Bi-directional Machine Interfacing', onepath: true, offline: false, saas: false },
    { feature: 'Front-Desk Receptionist Portal & Queue', onepath: true, offline: false, saas: false },
    { feature: 'Reagents & Stock Expiry Tracking', onepath: true, offline: false, saas: false },
    { feature: 'Auto-Calculations & Delta Checks', onepath: true, offline: false, saas: false },
    { feature: 'WhatsApp Report Delivery', onepath: true, offline: false, saas: true },
    { feature: 'Multi-Branch Management', onepath: true, offline: false, saas: false },
    { feature: 'NABL QC Module (ISO 15189)', onepath: true, offline: false, saas: false },
    { feature: 'Patient & Doctor Portals', onepath: true, offline: false, saas: false },
    { feature: 'B2B Corporate Billing', onepath: true, offline: false, saas: false },
    { feature: 'Real-Time MIS Analytics', onepath: true, offline: false, saas: true },
    { feature: 'ABHA / ABDM Integration', onepath: true, offline: false, saas: false },
    { feature: 'Free Data Migration', onepath: true, offline: 'NA', saas: false },
    { feature: 'Enterprise Cloud Infrastructure (AWS)', onepath: true, offline: false, saas: false },
    { feature: 'Per-Lab Data Isolation', onepath: true, offline: true, saas: false },
    { feature: 'Automatic Software Updates', onepath: true, offline: false, saas: true },
    { feature: 'Starting Price', onepath: '₹3,999 / 6 months', offline: '₹25,000 one-time', saas: '₹5,999 / year' },
]

const testimonials = [
    { name: 'Dr. Rakesh Gupta', lab: 'Gupta Diagnostics, Delhi', stars: 5, text: 'Switched from a 12-year-old offline software to OnePath in 2 days. The bi-directional interfacing alone saves my team 3 hours every single day. The NABL audit last month was the smoothest in our lab\'s history.' },
    { name: 'Ms. Sunita Sharma', lab: 'Wellness Path Labs, Jaipur', stars: 5, text: 'We run 7 branches across Rajasthan. Managing them all from one screen felt impossible before OnePath. Now I can see which branch is slow, which technician is behind TAT, and our revenue — all in real time.' },
    { name: 'Mr. Anil Mehta', lab: 'Apex Diagnostics, Mumbai', stars: 5, text: 'Our patient complaints about waiting for reports dropped to nearly zero after WhatsApp delivery went live. Patients actually text us to say thank you. Never happened before.' },
]

const integrations = [
    { name: 'PayU', desc: 'Automate B2B wallet & counter payments', color: '#00bfa5' },
    { name: 'WhatsApp API', desc: 'Official report & bill delivery', color: '#25d366' },
    { name: 'ABHA / ABDM', desc: 'Health ID & Ayushman Bharat sync', color: '#0891b2' },
    { name: 'Sysmex', desc: 'Cell counter auto-interfacing', color: '#dc2626' },
    { name: 'Roche Cobas', desc: 'Biochemistry bi-directional sync', color: '#d97706' },
    { name: 'Mindray', desc: 'Hematology analyzer integration', color: '#2563eb' },
    { name: 'Abbott', desc: 'Immunoassay middleware sync', color: '#7c3aed' },
    { name: 'EkaCare', desc: 'Doctor prescription & PHR sync', color: '#059669' },
]

/* ── Cell helper ── */
function CompCell({ val }: { val: boolean | string }) {
    if (val === 'NA') return <span style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>N/A</span>
    if (typeof val === 'string') return <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{val}</span>
    return val
        ? <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#dcfce7', border: '1px solid #bbf7d0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Check size={13} color="#16a34a" /></span>
        : <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#fee2e2', border: '1px solid #fecaca', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><X size={13} color="#dc2626" /></span>
}

export default function LISSoftware() {
    const [activeTab, setActiveTab] = useState(0)
    const statsRef = useInView()
    // Realistic Stats Match
    const c1 = useCounter(200, 200, statsRef.inView)
    const c2 = useCounter(10, 1800, statsRef.inView)
    const c3 = useCounter(99, 1600, statsRef.inView)
    const c4 = useCounter(200, 1400, statsRef.inView)

    return (
        <>
            <Navbar />
            <main style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>

            {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
            <section style={{
                position: 'relative',
                padding: '160px 20px 100px',
                background: 'linear-gradient(160deg, #ffffff 0%, #eff6ff 55%, #e0eaff 100%)',
                overflow: 'hidden',
                textAlign: 'center',
            }}>
                {/* Blobs */}
                <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(219,234,254,0.65) 0%, transparent 70%)', top: -200, right: -200, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(224,234,255,0.5) 0%, transparent 70%)', bottom: -100, left: -100, pointerEvents: 'none' }} />

                <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    {/* Top badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderLeft: '3px solid #2563eb',
                        borderRadius: 6,
                        padding: '7px 16px',
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#0f172a',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        marginBottom: 28,
                        boxShadow: '0 1px 3px rgba(15,23,42,0.04)'
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: 2, background: '#22c55e', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
                        <span>[ ENTERPRISE LIS ]</span>
                        <span style={{ color: '#475569' }}>India&apos;s Most Reliable Lab Information System</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(40px, 6.5vw, 76px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 24, letterSpacing: '-0.03em', lineHeight: 1.08 }}>
                        The Complete
                        <span style={{ display: 'block', background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Cloud LIS Software
                        </span>
                        for Modern Labs
                    </h1>

                    <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#475569', lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans',sans-serif", maxWidth: 640, margin: '0 auto 44px' }}>
                        Automate every step — from patient registration to WhatsApp report delivery. NABL-compliant, machine-integrated, and built for Indian diagnostic labs of every size.
                    </p>

                    {/* CTA buttons */}
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
                        {/* PRIMARY BUTTON — opens LIS software */}
                        <a
                            href="https://lis.onepathlab.com"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: 10,
                                background: '#2563eb', color: '#ffffff',
                                textDecoration: 'none', fontWeight: 700, fontSize: 16,
                                padding: '16px 36px', borderRadius: 8,
                                fontFamily: "'Plus Jakarta Sans',sans-serif",
                                boxShadow: '0 8px 28px rgba(37,99,235,0.4)',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,99,235,0.5)' }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.4)' }}
                        >
                            <Server size={18} />
                            Open LIS Software
                            <ArrowRight size={16} />
                        </a>

                        <a href="/trial" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffffff', color: '#0f172a', textDecoration: 'none', fontWeight: 600, fontSize: 16, padding: '15px 32px', borderRadius: 8, fontFamily: "'Plus Jakarta Sans',sans-serif", border: '1.5px solid #cbd5e1', boxShadow: '0 1px 3px rgba(15,23,42,0.04)', transition: 'all 0.2s ease' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.transform = 'translateY(0)' }}
                        >
                            Start 7-Day Free Trial
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {['NABL ISO 15189 Compliant', 'DPDP Act 2023 Aligned', 'AWS', 'ABHA Integrated'].map(b => (
                            <div key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 6, padding: '6px 14px', fontSize: 12, fontWeight: 700, color: '#475569', fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
                                <CheckCircle size={13} color="#16a34a" /> {b}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
            <section style={{ padding: '0 20px', marginTop: '-36px', position: 'relative', zIndex: 10 }}>
                <div ref={statsRef.ref} style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                    {[
                        { value: c1, suffix: '+', label: 'Labs Onboarded', sub: 'Across India & abroad', color: '#2563eb' },
                        { value: c2, suffix: '0K+', label: 'Reports / Month', sub: 'Processed seamlessly', color: '#7c3aed' },
                        { value: c3, suffix: '.9%', label: 'Uptime SLA', sub: 'Enterprise reliability', color: '#059669' },
                        { value: c4, suffix: '+', label: 'Analyzer Models', sub: 'Machine interfacing', color: '#d97706' },
                    ].map((s, i) => (
                        <div key={i} style={{ padding: '32px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
                            <div style={{ fontSize: 40, fontWeight: 800, color: s.color, fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>
                                {s.value}{s.suffix}
                            </div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 3 }}>{s.label}</div>
                            <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.sub}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════
          CORE FEATURES
      ══════════════════════════════════════════ */}
            <section style={{ padding: '96px 20px', background: '#ffffff' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#1d4ed8', background: '#f8fafc', border: '1px solid #cbd5e1', borderLeft: '3px solid #2563eb', padding: '7px 16px', borderRadius: 6, marginBottom: 16, fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
                            <span>[ CORE FEATURES ]</span>
                            <span style={{ color: '#475569' }}>Everything Your Lab Needs</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '-0.02em', marginBottom: 14 }}>
                            Everything Your Lab Needs — In One Platform
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: 520, margin: '0 auto', fontSize: 17, lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                            Built specifically for Indian diagnostic labs — from single-center pathology labs to large multi-branch diagnostic chains.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 18 }}>
                        {coreFeatures.map((f, i) => (
                            <div key={i}
                                style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 18, padding: '28px', transition: 'all 0.25s ease', cursor: 'default' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = f.color + '40'; el.style.boxShadow = '0 12px 40px -8px rgba(0,0,0,0.1)'; el.style.transform = 'translateY(-3px)' }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e2e8f0'; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
                            >
                                <div style={{ width: 48, height: 48, borderRadius: 13, background: f.bg, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>{f.icon}</div>
                                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 10 }}>{f.title}</h3>
                                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          MULTI-TENANCY & DATA SAFETY
      ══════════════════════════════════════════ */}
            <section style={{ padding: '96px 20px', background: '#f8fafc' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="split-grid">

                        {/* Left — Multi-tenancy */}
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#6d28d9', background: '#f8fafc', border: '1px solid #cbd5e1', borderLeft: '3px solid #7c3aed', padding: '7px 16px', borderRadius: 6, marginBottom: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
                                <span>[ MULTI-TENANCY ]</span>
                                <span style={{ color: '#475569' }}>Zero Cross-Lab Data Leakage</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                                Every Lab Gets Its Own
                                <span style={{ color: '#7c3aed' }}> Isolated Universe</span>
                            </h2>
                            <p style={{ fontSize: 15.5, color: '#64748b', lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 28 }}>
                                200+ labs run on the same OnePath infrastructure — yet no lab can ever see, touch, or affect another lab's data. This is enforced at the database level, not just the UI.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {multiTenancyPoints.map((p, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                                        <div style={{ width: 28, height: 28, borderRadius: 8, background: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                                            <Check size={14} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 3 }}>{p.title}</div>
                                            <div style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{p.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Visual */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div style={{ background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0', padding: '28px', boxShadow: '0 8px 32px -8px rgba(0,0,0,0.08)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                                    <Database size={20} color="#7c3aed" />
                                    <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Database Architecture</span>
                                </div>
                                {['Lab A: Sharma Diagnostics', 'Lab B: Apex Path Labs', 'Lab C: HealthFirst Center', 'Lab D: Metro Diagnostics'].map((lab, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: i === 0 ? '#eff6ff' : '#f8fafc', borderRadius: 10, marginBottom: 8, border: `1px solid ${i === 0 ? '#dbeafe' : '#f1f5f9'}` }}>
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: ['#2563eb', '#7c3aed', '#059669', '#d97706'][i], flexShrink: 0 }} />
                                        <span style={{ fontSize: 13.5, fontWeight: 600, color: '#334155', fontFamily: "'Plus Jakarta Sans',sans-serif", flex: 1 }}>{lab}</span>
                                        <span style={{ fontSize: 11, background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: 4, fontWeight: 700, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Isolated</span>
                                    </div>
                                ))}
                                <div style={{ marginTop: 16, padding: '12px 14px', background: '#fef2f2', borderRadius: 10, border: '1px solid #fecaca', display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <Shield size={14} color="#dc2626" />
                                    <span style={{ fontSize: 12.5, color: '#991b1b', fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Cross-lab data access: Blocked at DB level</span>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                {[
                                    { label: 'Uptime', value: '99.9%', icon: <TrendingUp size={16} />, color: '#059669', bg: '#ecfdf5' },
                                    { label: 'Backup Freq.', value: 'Every 4h', icon: <Clock size={16} />, color: '#2563eb', bg: '#eff6ff' },
                                    { label: 'Encryption', value: 'AES-256', icon: <Lock size={16} />, color: '#7c3aed', bg: '#f5f3ff' },
                                    { label: 'Data Region', value: 'India Only', icon: <Globe size={16} />, color: '#d97706', bg: '#fffbeb' },
                                ].map((stat, i) => (
                                    <div key={i} style={{ background: '#ffffff', borderRadius: 14, padding: '18px', border: '1px solid #e2e8f0', display: 'flex', gap: 10, alignItems: 'center' }}>
                                        <div style={{ width: 36, height: 36, borderRadius: 10, background: stat.bg, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{stat.icon}</div>
                                        <div>
                                            <div style={{ fontSize: 15, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{stat.value}</div>
                                            <div style={{ fontSize: 11.5, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          DATA SAFETY
      ══════════════════════════════════════════ */}
            <section style={{ padding: '96px 20px', background: '#ffffff' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#166534', background: '#f8fafc', border: '1px solid #cbd5e1', borderLeft: '3px solid #16a34a', padding: '7px 16px', borderRadius: 6, marginBottom: 16, fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
                            <span>[ ENTERPRISE SECURITY ]</span>
                            <span style={{ color: '#475569' }}>Data Safety &amp; Compliance</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '-0.02em', marginBottom: 14 }}>
                            Your Patient Data is Sacred to Us
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: 520, margin: '0 auto', fontSize: 17, lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                            We treat every patient record with the same security measures used by Indian banks and government health systems.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: 18 }}>
                        {securityFeatures.map((f, i) => (
                            <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 18, padding: '28px', display: 'flex', gap: 18, alignItems: 'flex-start', transition: 'all 0.2s ease' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#ffffff'; el.style.boxShadow = '0 8px 32px -8px rgba(0,0,0,0.1)'; el.style.borderColor = '#bfdbfe' }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#f8fafc'; el.style.boxShadow = 'none'; el.style.borderColor = '#e2e8f0' }}
                            >
                                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{f.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 7 }}>{f.title}</h3>
                                    <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Compliance strip */}
                    <div style={{ marginTop: 40, background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)', borderRadius: 20, padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
                        <div>
                            <div style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 6 }}>Compliance &amp; Certifications</div>
                            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>OnePath Lab meets or exceeds all Indian healthcare data regulations</div>
                        </div>
                        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                            {['NABL ISO 15189', 'DPDP Act 2023', 'ISO 27001', 'HIPAA Aligned', 'ABDM / ABHA'].map(cert => (
                                <div key={cert} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 6, padding: '6px 16px', fontSize: 13, fontWeight: 600, color: '#ffffff', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{cert}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════ */}
            <section style={{ padding: '96px 20px', background: '#f8fafc' }}>
                <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#1d4ed8', background: '#f8fafc', border: '1px solid #cbd5e1', borderLeft: '3px solid #2563eb', padding: '7px 16px', borderRadius: 6, marginBottom: 16, fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
                            <span>[ BENCHMARK COMPARISON ]</span>
                            <span style={{ color: '#475569' }}>Why Labs Choose OnePath</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '-0.02em', marginBottom: 14 }}>
                            Why Labs Choose OnePath Over Alternatives
                        </h2>
                    </div>

                    <div style={{ background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 8px 40px -12px rgba(0,0,0,0.1)' }}>
                        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', width: '100%' }}>
                            <div style={{ minWidth: 620 }}>
                                {/* Header */}
                                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '16px 24px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                    <div style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Feature</div>
                                    <div style={{ textAlign: 'center', fontSize: 14, fontWeight: 800, color: '#2563eb', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>✦ OnePath</div>
                                    <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#64748b', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Offline LIS</div>
                                    <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#64748b', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Other SaaS</div>
                                </div>

                                {comparisonData.map((row, i) => (
                                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '13px 24px', borderBottom: i < comparisonData.length - 1 ? '1px solid #f8fafc' : 'none', background: i % 2 === 0 ? '#ffffff' : '#fafbff', alignItems: 'center' }}>
                                        <div style={{ fontSize: 13.5, color: '#334155', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500 }}>{row.feature}</div>
                                        <div style={{ textAlign: 'center' }}><CompCell val={row.onepath} /></div>
                                        <div style={{ textAlign: 'center' }}><CompCell val={row.offline} /></div>
                                        <div style={{ textAlign: 'center' }}><CompCell val={row.saas} /></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          WORKFLOW
      ══════════════════════════════════════════ */}
            <section style={{ padding: '96px 20px', background: '#ffffff' }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#1d4ed8', background: '#f8fafc', border: '1px solid #cbd5e1', borderLeft: '3px solid #2563eb', padding: '7px 16px', borderRadius: 6, marginBottom: 16, fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}>
                            <span>[ 4-MINUTE PIPELINE ]</span>
                            <span style={{ color: '#475569' }}>Automated Laboratory Workflow</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '-0.02em', marginBottom: 14 }}>
                            From Registration to Delivery in 4 Minutes
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto', fontSize: 16, lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                            A fully automated pipeline that eliminates manual steps at every stage.
                        </p>
                    </div>

                    <div style={{ position: 'relative', paddingLeft: 48 }}>
                        <div style={{ position: 'absolute', left: 19, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #2563eb, #93c5fd)', borderRadius: 2 }} />
                        {[
                            { step: '01', icon: <Users size={18} />, title: 'Patient Registration', time: '< 60 seconds', desc: 'Receptionist registers patient with barcode generation. Referring doctor and corporate account auto-linked. SMS confirmation sent to patient instantly.', color: '#2563eb' },
                            { step: '02', icon: <FlaskConical size={18} />, title: 'Sample Collection & Accession', time: '< 2 minutes', desc: 'Barcode scanned at collection. Sample type, tube color, storage condition auto-suggested. Phlebotomist app tracks home collection in real-time.', color: '#7c3aed' },
                            { step: '03', icon: <Microscope size={18} />, title: 'Machine Analysis (Auto)', time: 'Automated', desc: 'Results flow directly from analyzer to software via HL7/ASTM interfacing. No manual typing. Rules engine flags critical values and abnormal patterns instantly.', color: '#059669' },
                            { step: '04', icon: <AlertCircle size={18} />, title: 'Clinical Validation', time: '< 30 seconds', desc: 'Technician reviews fetched results. System highlights criticals in red. Derived parameters are auto-calculated without manual math.', color: '#d97706' },
                            { step: '05', icon: <FileText size={18} />, title: 'Pathologist Digital Approval', time: '< 2 minutes', desc: 'Doctor reviews draft report on mobile or desktop. Digital signature applied. Report locked — no edits possible post-approval.', color: '#0891b2' },
                            { step: '06', icon: <MessageSquare size={18} />, title: 'Instant Report Delivery', time: '< 10 seconds', desc: 'Branded PDF automatically sent via WhatsApp + SMS + Email. Patient portal updated. Referring doctor\'s portal updated. Corporate client API notified.', color: '#dc2626' },
                        ].map((w, i) => (
                            <div key={i} style={{ position: 'relative', marginBottom: i < 5 ? 0 : 0, display: 'flex', gap: 24, paddingBottom: i < 5 ? 0 : 0 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, marginLeft: -48 }}>
                                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: w.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #ffffff', boxShadow: `0 0 0 3px ${w.color}30`, zIndex: 1, flexShrink: 0 }}>
                                        {w.icon}
                                    </div>
                                    {i < 5 && <div style={{ width: 2, height: 40, background: `linear-gradient(to bottom, ${w.color}60, transparent)` }} />}
                                </div>
                                <div style={{ background: '#ffffff', borderRadius: 16, padding: '22px 26px', border: '1px solid #e2e8f0', flex: 1, marginLeft: 8, marginBottom: 16, boxShadow: '0 2px 12px -4px rgba(0,0,0,0.06)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                                        <span style={{ fontSize: 11, fontWeight: 800, color: w.color, background: w.color + '15', padding: '2px 10px', borderRadius: 4, fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '0.06em' }}>STEP {w.step}</span>
                                        <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{w.title}</span>
                                        <span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 700, color: '#15803d', background: '#dcfce7', padding: '3px 10px', borderRadius: 4, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{w.time}</span>
                                    </div>
                                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>{w.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          INTEGRATIONS
      ══════════════════════════════════════════ */}
            <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '-0.02em', marginBottom: 12 }}>Works With Tools You Already Use</h2>
                        <p style={{ color: '#64748b', fontSize: 15.5, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Plug-and-play integrations — no technical setup needed on your end.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 16 }}>
                        {integrations.map((int, i) => (
                            <div key={i} style={{ background: '#ffffff', borderRadius: 16, padding: '22px 20px', border: '1px solid #e2e8f0', display: 'flex', gap: 14, alignItems: 'center', transition: 'all 0.2s ease' }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 24px -6px rgba(0,0,0,0.1)' }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
                            >
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: int.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <div style={{ width: 16, height: 16, borderRadius: 4, background: int.color }} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{int.name}</div>
                                    <div style={{ fontSize: 12.5, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{int.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
            <section style={{ padding: '96px 20px', background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 60%, #3b82f6 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', top: -200, right: -100 }} />
                <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', bottom: -100, left: -50 }} />

                <div style={{ maxWidth: 740, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderLeft: '3px solid #4ade80', borderRadius: 6, padding: '7px 18px', fontSize: 13, fontWeight: 700, color: '#ffffff', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 28, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        <span style={{ width: 6, height: 6, borderRadius: 2, background: '#4ade80', display: 'inline-block' }} />
                        <span>No credit card · 7-day free trial · Cancel anytime</span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#ffffff', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Ready to Modernize
                        <br />Your Lab?
                    </h2>
                    <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 44, maxWidth: 520, margin: '0 auto 44px' }}>
                        Join 200+ labs already running on OnePath. Get set up in 24 hours with full migration support — completely free.
                    </p>

                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://lis.onepathlab.com" target="_blank" rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#ffffff', color: '#1d4ed8', textDecoration: 'none', fontWeight: 800, fontSize: 16, padding: '16px 36px', borderRadius: 8, fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: '0 8px 32px rgba(0,0,0,0.2)', transition: 'all 0.2s ease' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)' }}
                        >
                            <Server size={18} />
                            Open LIS Software
                            <ArrowRight size={16} />
                        </a>
                        <a href="/trial"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: 16, padding: '15px 32px', borderRadius: 8, fontFamily: "'Plus Jakarta Sans',sans-serif", border: '1.5px solid rgba(255,255,255,0.3)', transition: 'all 0.2s ease' }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                        >
                            Start 7-Day Free Trial
                        </a>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
        @media (max-width: 768px) {
          .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
        </main>
        </>
    )
}