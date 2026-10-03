'use client'

import { useState } from 'react'

interface FAQItem {
    q: string
    a: string
}

const faqs: FAQItem[] = [
    {
        q: 'How long does onboarding take?',
        a: "Most labs go live within 24–48 hours. Here's exactly what happens: Day 1 — our onboarding specialist calls you, understands your lab's workflow, and sets up your account with your complete test master list, report templates, and your branding (logo, letterhead, color scheme). Day 2 — your staff gets a live training session (1–2 hours) covering patient registration, report generation, billing, and WhatsApp delivery. We also configure machine interfacing on the same call. For larger multi-branch labs with 3+ centers, onboarding typically takes 3–5 business days to cover all locations properly.",
    },
    {
        q: 'Can I migrate data from my old software?',
        a: "Yes — and it's completely free. We support data migration from all major LIS platforms including Meditech, Lifelab, Creliohealth, SoftClinic, MocDoc, Pathofinder, and even custom Excel or Access-based systems. Our team extracts your existing patient history, test masters, reference ranges, doctor list, and billing records, then imports them into OnePath in the background without disrupting your daily operations. We've successfully migrated 800+ labs to date with zero data loss. Just share your data export file and we handle the rest — no technical knowledge needed from your side.",
    },
    {
        q: 'Do you offer machine interfacing support?',
        a: 'We support 80+ analyzer brands with both unidirectional and bidirectional interfacing. This includes Sysmex (XN, XP series), Mindray (BC, BS series), Siemens (Atellica, Dimension), Roche (Cobas series), Abbott (Architect, Alinity), Beckman Coulter, DiaSys, Erba, Transasia, and many more. Unidirectional means results automatically flow from machine → software. Bidirectional additionally sends test orders from software → machine, eliminating all manual result entry. Our interfacing team handles the complete HL7/ASTM protocol setup at no extra charge. Average time to configure one analyzer: 2–4 hours.',
    },
    {
        q: 'What happens after my trial ends?',
        a: "Your account moves to read-only mode — you can view all existing reports and data, but cannot register new patients until you subscribe. Your data is safely stored and never deleted during this period. You have a full 30-day grace period to choose a plan and reactivate with zero disruption. During this period you can export all your data (CSV + PDF) from Settings > Data Export anytime. We send reminder emails at Day 3, Day 7, and Day 25 so you're never caught off-guard. No credit card is charged automatically — we never do surprise billing.",
    },
    {
        q: 'Is there a setup or installation fee?',
        a: "Absolutely zero. No setup fees, no installation charges, no onboarding fees, no hidden costs of any kind. What you see on the pricing page is exactly what you pay — just the monthly or annual subscription. This includes: full account setup, test master configuration, report template design with your branding, machine interfacing setup, WhatsApp and SMS integration, staff training for up to 5 users, and ongoing customer support. We believe in 100% transparent pricing — because surprise charges are how outdated software companies make money, and we're building something better.",
    },
    {
        q: 'Is my patient data safe? Where is it stored?',
        a: "Your patient data is stored on AWS Mumbai (ap-south-1) servers — meaning your data never leaves Indian soil. All data in transit is encrypted with TLS 1.3, and all data at rest is encrypted using AES-256 (the same standard used by major Indian banks). We run automated backups every 4 hours with 30-day retention. Access is strictly role-based — your receptionist only sees registration data, not billing or finance reports. We are aligned with India's Digital Personal Data Protection (DPDP) Act 2023 and operate on ISO 27001-certified infrastructure. We never sell, rent, or share your patient data with any third party.",
    },
    {
        q: 'Can I use OnePath on mobile and tablets?',
        a: 'Yes. OnePath Lab is a fully responsive Progressive Web App (PWA) that works on any modern browser — desktop, laptop, Android, or iPhone — with no installation required. We also have a dedicated Android and iOS app for lab staff supporting barcode scanning, sample tracking, and report sharing. Doctors get their own portal where they can review and approve reports directly from their phone. Patients receive a secure WhatsApp link to view and download their report — no app install needed. Everything is designed to work smoothly even on slower 4G connections common in smaller towns.',
    },
    {
        q: 'Do you support multi-branch or chain labs?',
        a: 'Yes — our multi-branch plan is built specifically for diagnostic chains. You get one central admin dashboard with combined analytics across all centers. Each branch has its own login, sample queue, report numbering series, and billing. You can transfer samples between centers, share a common test master, and generate consolidated MIS reports for the entire chain in one click. Branch-level access control ensures a receptionist at Branch A cannot access Branch B data. We currently support chains with up to 50+ branches on a single account. Speak to our sales team for enterprise pricing on large chains.',
    },
]

export default function ContactFaq() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <section style={{ padding: '80px 20px 96px', background: '#f8fafc' }}>
            <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563eb', background: '#eff6ff', border: '1px solid #dbeafe', padding: '5px 14px', borderRadius: 100, marginBottom: 16, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>FAQs</span>
                    <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '-0.02em' }}>Common Questions</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ background: '#ffffff', borderRadius: 16, border: '1px solid', borderColor: openFaq === i ? '#bfdbfe' : '#e2e8f0', overflow: 'hidden', transition: 'border-color 0.2s' }}>
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                aria-expanded={openFaq === i}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', gap: 16 }}>
                                <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", textAlign: 'left' }}>{faq.q}</span>
                                <span style={{ fontSize: 20, color: '#2563eb', fontWeight: 300, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s', lineHeight: 1 }}>+</span>
                            </button>
                            <div style={{ maxHeight: openFaq === i ? 1000 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
                                <p style={{ padding: '0 24px 20px', fontSize: 14.5, color: '#64748b', lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
