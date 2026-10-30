import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ShieldCheck, Lock, Eye, Server, AlertCircle, Mail, CheckCircle, Scale, UserCheck, FileText, Phone, MapPin, Clock } from 'lucide-react'

const sections = [
    {
        icon: <Eye size={20} />, color: '#2563eb', bg: '#eff6ff',
        title: '1. Information We Collect',
        content: [
            { head: 'Account & Lab Registration Information', body: 'When your diagnostic laboratory signs up, we collect the lab administrator\'s name, email address, mobile phone number, lab business name, clinical establishment address, and billing details required to establish and maintain your cloud LIS tenant.' },
            { head: 'Patient Health & Clinical Data (Lab-Entered)', body: 'Demographics and diagnostic information entered by your laboratory staff — including patient names, age, gender, contact phone numbers, test requests, sample collection timestamps, and pathology test results. This data is the exclusive property of your laboratory and patient. OnePath Lab acts strictly as a Data Processor under Indian law.' },
            { head: 'Government & Health Identifiers', body: 'Where opted by the patient and lab, ABHA numbers, ABHA PHR addresses, and transactional verification tokens under the Ayushman Bharat Digital Mission (ABDM). We adhere to National Health Authority (NHA) security guidelines for all health identifier sync.' },
            { head: 'Usage, Telemetry & Security Audit Logs', body: 'System activity logs (page navigations, feature usage, user login events, and diagnostic print/dispatch events) to maintain data integrity, security auditing, and fraud prevention. Technical logs are retained for forensic analysis in compliance with national cyber regulations.' },
        ],
    },
    {
        icon: <Scale size={20} />, color: '#0891b2', bg: '#ecfeff',
        title: '2. Statutory Compliance with DPDP Act (2026–2027)',
        content: [
            { head: 'Statutory Roles: Data Processor vs. Data Fiduciary', body: 'Under India\'s Digital Personal Data Protection (DPDP) Act, your diagnostic laboratory operates as the "Data Fiduciary" which determines the purpose and lawful basis for collecting patient clinical data. OnePath Lab operates strictly as a "Data Processor", processing data strictly on your laboratory\'s documented instructions and service contract.' },
            { head: 'Purpose Limitation & Data Minimization', body: 'Personal and clinical health data is processed solely for generating diagnostic reports, transmitting results to patients, managing lab finances, and facilitating care. We collect only what is strictly necessary for diagnostic and clinical operations.' },
            { head: 'Protection of Children\'s & Minor Data (Section 9)', body: 'Diagnostic records of patients under 18 years of age are processed only with verifiable parental or legal guardian consent obtained by the testing laboratory. OnePath Lab never undertakes behavioral tracking, profiling, or targeted advertising directed at minors.' },
            { head: 'Ayushman Bharat (ABDM) Consent Architecture', body: 'For laboratories participating in ABDM Milestone 1 (M1), digital health records are linked and shared with patient health lockers strictly via explicit, token-based consent granted through government-approved channels (such as Aarogya Setu or ABHA apps).' },
        ],
    },
    {
        icon: <Server size={20} />, color: '#7c3aed', bg: '#f5f3ff',
        title: '3. How We Use Your Data',
        content: [
            { head: 'Diagnostic Service Delivery', body: 'To generate automated, pathologist-verified diagnostic reports, synchronize bi-directional analyzer machine data, deliver WhatsApp/SMS reports to patients on your behalf, and provide the complete LIS functionality.' },
            { head: 'AI Clinical Decision Support', body: 'We may use de-identified, non-traceable aggregate statistical data to enhance our AI clinical decision-support algorithms. This requires explicit opt-in consent and adheres to rigorous clinical de-identification protocols.' },
            { head: 'Billing, Invoicing & Settlements', body: 'Managing subscription billing, generating GST-compliant tax invoices, and processing payments via PayU India and secure RBI-licensed banking gateways. Card and bank credentials are never stored on our application servers.' },
            { head: 'Laboratory Support & Onboarding', body: 'To diagnose technical issues, configure analyzer bridges, and deliver prompt onboarding and machine interfacing support to your lab staff.' },
        ],
    },
    {
        icon: <Lock size={20} />, color: '#059669', bg: '#ecfdf5',
        title: '4. Data Security, Encryption & Sovereignty',
        content: [
            { head: 'Encryption in Transit & at Rest', body: 'All data exchanged between your browser and our cloud servers is protected with TLS 1.3 encryption. Patient records and medical databases are stored using AES-256 encryption at rest to prevent unauthorized access.' },
            { head: 'Sovereign Indian Cloud Infrastructure', body: 'Hosted entirely on ISO 27001, SOC 2 Type II certified cloud infrastructure located in the AWS Asia Pacific (Mumbai) region. All personal health data strictly resides within the territory of India with zero unauthorized cross-border transfers.' },
            { head: 'Granular Role-Based Access Control (RBAC)', body: 'Enforces strict permission tiers ensuring phlebotomists, receptionists, technicians, and consulting pathologists only access the patient and financial records necessary for their specific job functions.' },
            { head: 'Automated Backups & Disaster Recovery', body: 'Automated snapshots every 4 hours with encrypted 30-day multi-zone replication to ensure business continuity and zero clinical data loss.' },
        ],
    },
    {
        icon: <AlertCircle size={20} />, color: '#d97706', bg: '#fffbeb',
        title: '5. Data Sharing & Third-Party Processors',
        content: [
            { head: 'WhatsApp & Telecommunication Providers', body: 'Official Meta WhatsApp Cloud API gateways receive only the verified recipient phone number and encrypted diagnostic report link to fulfill delivery. Telecom partners are contractually bound under Data Processing Agreements (DPAs).' },
            { head: 'Zero Commercial Data Selling or Renting', body: 'We do not sell, rent, monetize, or trade patient health records, laboratory financials, or contact details to pharmaceutical companies, insurance aggregators, or advertising networks. Ever.' },
            { head: 'Statutory Law Enforcement Disclosures', body: 'We may disclose data only if legally required under valid orders from Indian judicial courts or competent public health authorities, with prompt notification provided to the concerned laboratory unless prohibited by law.' },
        ],
    },
    {
        icon: <UserCheck size={20} />, color: '#0891b2', bg: '#ecfeff',
        title: '6. Data Principal Rights & Medical Record Retention',
        content: [
            { head: 'Statutory Medical Retention vs. Right to Erasure', body: 'Under the Clinical Establishments Act and National Medical Commission (NMC) regulations, diagnostic investigation records and patient clinical reports must be maintained for mandatory medical retention periods (typically minimum 3 years). However, non-clinical data, promotional preferences, and inactive lab account details can be permanently erased upon written request under the DPDP Act.' },
            { head: 'Right to Access & Data Portability', body: 'Authorized lab administrators can export full clinical histories, patient master lists, test catalogs, and financial ledgers in CSV and PDF formats anytime from Settings > Data Export.' },
            { head: 'Right to Rectification & Correction', body: 'Inaccurate patient demographics or test parameters can be rectified directly through authorized lab workflows, with every revision tracked in our immutable audit history.' },
            { head: 'Right to Withdraw Consent & Nominate', body: 'Patients have the statutory right to withdraw consent for non-essential communications (such as marketing announcements or AI assistance opt-in) and nominate an individual to exercise their rights in case of death or incapacity.' },
        ],
    },
]

export default function PrivacyPolicy() {
    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* ── Hero ── */}
            <section style={{ padding: '160px 20px 80px', background: 'linear-gradient(160deg,#ffffff 0%,#eff6ff 60%,#e0eaff 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(219,234,254,0.6) 0%,transparent 70%)', top: -80, right: -80, pointerEvents: 'none' }} />
                <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 72, height: 72, background: '#eff6ff', border: '1px solid #dbeafe', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#2563eb' }}>
                        <ShieldCheck size={32} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px,5vw,58px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Privacy Policy
                    </h1>
                    <p style={{ fontSize: 16, color: '#64748b', fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1.7, marginBottom: 20 }}>
                        Last updated: June 2026 · Effective immediately for all new and existing accounts.
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: 10, padding: '8px 18px', fontSize: 13.5, fontWeight: 600, color: '#15803d', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                        <CheckCircle size={15} /> NABL Compliant · DPDP Act (2026–2027) Aligned · ISO 27001 Certified Infrastructure
                    </div>
                </div>
            </section>

            {/* ── Intro card ── */}
            <section style={{ padding: '48px 20px 0' }}>
                <div style={{ maxWidth: 860, margin: '0 auto', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 20, padding: '32px 36px' }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1d4ed8', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 10 }}>Our Commitment to You</h2>
                    <p style={{ fontSize: 15, color: '#1e40af', lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>
                        At OnePath Lab, we handle two categories of data: <strong>your lab's operational data</strong> (staff, tests, billing) and <strong>your patients' health data</strong>. We treat both with the same level of care — because a breach of medical data doesn't just break trust, it can cause real harm to real people. This document explains exactly what we collect, why, and how we protect it. Plain language. No legalese.
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section style={{ padding: '56px 20px 96px' }}>
                <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
                    {sections.map((s, i) => (
                        <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.07)' }}>
                            {/* Section header */}
                            <div style={{ padding: '24px 32px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 11, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.icon}</div>
                                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>{s.title}</h2>
                            </div>
                            {/* Sub-points */}
                            <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {s.content.map((c, j) => (
                                    <div key={j} style={{ paddingLeft: 16, borderLeft: `3px solid ${s.bg}`, transition: 'border-color 0.2s' }}>
                                        <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 5 }}>{c.head}</div>
                                        <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>{c.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* ── DPDP Act Statutory Grievance Redressal Officer & Data Protection Desk ── */}
                    <div style={{ background: '#ffffff', borderRadius: 20, padding: '36px 36px', border: '1.5px solid #bfdbfe', boxShadow: '0 10px 30px -10px rgba(37,99,235,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                            <div style={{ width: 44, height: 44, background: '#eff6ff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}>
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>
                                    Statutory Grievance Redressal Officer (DPDP Act, 2023)
                                </h3>
                                <p style={{ fontSize: 13, color: '#2563eb', fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif", margin: 0 }}>
                                    Dedicated Data Protection & Redressal Desk for India
                                </p>
                            </div>
                        </div>

                        <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.8, fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 24 }}>
                            In accordance with Sections 11, 13 &amp; 14 of the Digital Personal Data Protection (DPDP) Act and the notified DPDP Rules, if you or your patients have any grievances, inquiries regarding data processing, requests to exercise statutory rights (access, correction, erasure, or withdrawal), or wish to report a security concern, you may contact our designated Grievance &amp; Data Protection Officer directly.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 16, background: '#f8fafc', padding: '20px 24px', borderRadius: 16, border: '1px solid #e2e8f0', marginBottom: 20 }}>
                            <div>
                                <div style={{ fontSize: 11.5, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Officer Name</div>
                                <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Mr. Moh Abuzar</div>
                                <div style={{ fontSize: 13, color: '#475569', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Grievance &amp; Data Protection Officer</div>
                            </div>
                            <div>
                                <div style={{ fontSize: 11.5, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Direct Contact</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <a href="mailto:support@onepathlab.com" style={{ fontSize: 14, fontWeight: 600, color: '#2563eb', textDecoration: 'none', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                                        support@onepathlab.com
                                    </a>
                                    <span style={{ fontSize: 13.5, color: '#334155', fontWeight: 600, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                                        +91 90457 57272
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: 11.5, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Office Address</div>
                                <div style={{ fontSize: 13.5, color: '#334155', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                                    Street No 04, Tibba Road, Mayapuri Chowk, Ludhiana, Punjab 141007, India
                                </div>
                            </div>
                        </div>

                        {/* Statutory SLAs & Escalation Notice */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '14px 18px', background: '#eff6ff', borderRadius: 12, border: '1px solid #dbeafe', fontSize: 13, color: '#1e40af', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
                                <Clock size={16} />
                                <span>Statutory Redressal SLA:</span>
                            </div>
                            <p style={{ margin: 0, lineHeight: 1.6 }}>
                                • Acknowledgment ticket issued within <strong>72 hours</strong> of formal written receipt.<br />
                                • Investigation and final statutory resolution delivered within <strong>15 business days</strong>.<br />
                                • <em>Appellate Recourse:</em> If unsatisfied with our Grievance Redressal outcome, Data Principals may escalate their concern directly to the <strong>Data Protection Board of India (DPBI)</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
        @media (max-width: 600px) {
          .contact-block { flex-direction: column !important; }
        }
      `}</style>
        </main>
    )
}