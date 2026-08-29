import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Scale, CreditCard, UserCheck, ShieldAlert, AlertTriangle, RefreshCw, Mail, CheckCircle, FileText } from 'lucide-react'

const sections = [
    {
        icon: <FileText size={20} />, color: '#2563eb', bg: '#eff6ff',
        title: '1. Acceptance of Terms',
        content: [
            { head: 'Agreement to Terms', body: 'By creating an account, accessing the OnePath Lab dashboard, or using any feature of our platform, you ("the Customer", "Lab Owner", "User") agree to be bound by these Terms and Conditions. If you are accepting on behalf of a company or institution, you confirm you have the authority to do so.' },
            { head: 'Age and Authorization', body: 'You must be at least 18 years old and legally authorized to operate a diagnostic laboratory under applicable Indian law (Clinical Establishments Act, 2010) to use our services.' },
            { head: 'Modifications', body: 'We reserve the right to update these Terms. We will notify you via email at least 14 days before material changes take effect. Continued use of the platform after the effective date constitutes acceptance of the revised Terms.' },
        ],
    },
    {
        icon: <UserCheck size={20} />, color: '#7c3aed', bg: '#f5f3ff',
        title: '2. Account Registration & Responsibilities',
        content: [
            { head: 'Accurate Information', body: 'You must provide accurate, current, and complete information during registration. Labs are required to submit a valid NABL certificate or Clinical Establishment registration number. Providing false information may result in immediate account termination.' },
            { head: 'Account Security', body: 'You are responsible for maintaining the confidentiality of your login credentials. You must immediately notify us at support@onepathlab.com of any unauthorized access to your account. We are not liable for losses resulting from compromised credentials due to your negligence.' },
            { head: 'User Roles & Access', body: 'As an admin, you are responsible for managing the access levels of your lab staff. You must promptly revoke access for staff who leave your organization. OnePath Lab is not liable for data access by ex-employees whose credentials were not revoked in a timely manner.' },
            { head: 'One Account per Lab Center', body: 'Each physical lab location requires a separate account or must be added as a branch under your multi-center plan. Running multiple labs from a single account without a multi-branch subscription violates these Terms.' },
        ],
    },
    {
        icon: <CreditCard size={20} />, color: '#059669', bg: '#ecfdf5',
        title: '3. Subscription, Billing & Payments',
        content: [
            { head: 'Subscription Plans', body: 'OnePath Lab is offered on monthly and annual subscription plans. Plan details, features, and pricing are published on our Pricing page and may be updated with 30 days\' notice.' },
            { head: 'Payment Terms', body: 'Subscriptions are billed in advance. Payments are processed via Razorpay. In case of a failed payment, we will retry for 3 days. After 7 days of non-payment, your account will be moved to read-only mode. After 30 days, the account will be suspended.' },
            { head: 'Refund Policy', body: 'Annual plans are refundable within 7 days of the start or renewal date — minus any transaction fees. Monthly plans are not refundable once the billing cycle has begun. Free trial users are not eligible for refunds. Onboarding and migration services are non-refundable.' },
            { head: 'Price Changes', body: 'We will notify you of price increases at least 30 days in advance via email. If you do not agree to the new pricing, you may cancel before the next billing cycle. Cancellation instructions are available in your account Settings.' },
            { head: 'Taxes', body: 'All prices are exclusive of applicable GST (18%). GST will be added to invoices as required under Indian tax law. B2B customers may submit their GSTIN for proper invoice generation.' },
        ],
    },
    {
        icon: <ShieldAlert size={20} />, color: '#0891b2', bg: '#ecfeff',
        title: '4. Data Ownership, Privacy & NABL Compliance',
        content: [
            { head: 'Your Data, Your Ownership', body: 'All patient data, test masters, report templates, and configurations you create within OnePath Lab are exclusively your intellectual property. We claim no ownership over this data. See our Privacy Policy for full details on how we handle and protect it.' },
            { head: 'HIPAA & NABL Alignment', body: 'Our platform is designed to support labs seeking NABL accreditation. Our QC module, TAT tracking, and audit trail features align with ISO 15189:2022 standards. However, NABL accreditation is the lab\'s responsibility — OnePath Lab is a tool, not an accreditation body.' },
            { head: 'Data Processing Agreement', body: 'By accepting these Terms, you also accept our Data Processing Agreement (DPA), which governs how we process personal health data on your behalf as a data processor under India\'s Digital Personal Data Protection Act, 2023.' },
            { head: 'Data Backup', body: 'We perform automated backups every 4 hours. In the event of data loss due to our system failure, we will restore the most recent backup at no charge. However, we are not liable for data entered incorrectly by your staff.' },
        ],
    },
    {
        icon: <AlertTriangle size={20} />, color: '#d97706', bg: '#fffbeb',
        title: '5. Acceptable Use & Prohibited Activities',
        content: [
            { head: 'Permitted Use', body: 'The platform is licensed for use by registered diagnostic laboratories for managing patient registrations, test processing, report generation, billing, and quality control. Any use outside this scope requires prior written approval.' },
            { head: 'Prohibited Activities', body: 'You may not: (a) share your login credentials with labs outside your organization, (b) use the platform to process tests for unlicensed entities, (c) attempt to reverse-engineer, scrape, or extract data from the platform, (d) use the platform to send unsolicited messages to patients beyond test result notifications.' },
            { head: 'AI Report Responsibility', body: 'AI-generated interpretations are decision-support tools only. All reports must be reviewed and approved by a qualified pathologist before being shared with patients. You are solely responsible for the medical accuracy of any report issued from your lab.' },
            { head: 'Compliance with Laws', body: 'You must ensure your use of the platform complies with all applicable laws including the Clinical Establishments Act, NABL guidelines, and India\'s DPDP Act. We reserve the right to suspend accounts suspected of illegal activity.' },
        ],
    },
    {
        icon: <RefreshCw size={20} />, color: '#dc2626', bg: '#fef2f2',
        title: '6. Service Availability, Liability & Termination',
        content: [
            { head: 'Uptime SLA', body: 'We target 99.9% monthly uptime. Scheduled maintenance windows (typically Sundays, 2–5 AM IST) are excluded from SLA calculations. In the event we fail to meet the SLA, you are eligible for a pro-rata credit on your next invoice.' },
            { head: 'Limitation of Liability', body: 'OnePath Lab\'s total liability for any claim shall not exceed the amount you paid in the 3 months preceding the claim. We are not liable for indirect, consequential, or punitive damages, including lost profits or clinical liability arising from the use of our software.' },
            { head: 'Termination by You', body: 'You may cancel your subscription at any time from Settings > Billing. Your account remains active until the end of the paid period. Data is retained for 30 days post-cancellation, after which it is permanently deleted.' },
            { head: 'Termination by Us', body: 'We may suspend or terminate accounts that violate these Terms, engage in fraud, or fail to maintain payment for more than 30 days — with 7 days\' written notice except in cases of serious violations (e.g., fraud, illegal activity) which may result in immediate termination.' },
        ],
    },
]

export default function TermsAndConditions() {
    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* ── Hero ── */}
            <section style={{ padding: '160px 20px 80px', background: 'linear-gradient(160deg,#ffffff 0%,#eff6ff 60%,#e0eaff 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(219,234,254,0.5) 0%,transparent 70%)', top: -80, right: -80, pointerEvents: 'none' }} />
                <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: 72, height: 72, background: '#eff6ff', border: '1px solid #dbeafe', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#2563eb' }}>
                        <Scale size={32} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px,5vw,58px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Terms & Conditions
                    </h1>
                    <p style={{ fontSize: 15.5, color: '#64748b', fontFamily: "'DM Sans',sans-serif", lineHeight: 1.7, marginBottom: 20 }}>
                        Last updated: June 2026 · Applies to all OnePath Lab accounts and subscriptions.
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {['NABL Compliant', 'DPDP Act Aligned', 'ISO 27001 Infrastructure'].map(tag => (
                            <div key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 100, padding: '6px 14px', fontSize: 12.5, fontWeight: 600, color: '#475569', fontFamily: "'DM Sans',sans-serif", boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                                <CheckCircle size={13} color="#22c55e" /> {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quick Nav ── */}
            <section style={{ padding: '40px 20px 0' }}>
                <div style={{ maxWidth: 860, margin: '0 auto', background: '#f8fafc', borderRadius: 16, padding: '24px 28px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', fontFamily: "'DM Sans',sans-serif", textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>Jump to Section</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        {sections.map((s, i) => (
                            <a key={i} href={`#section-${i}`} style={{ fontSize: 13, fontWeight: 600, color: '#2563eb', background: '#eff6ff', border: '1px solid #dbeafe', borderRadius: 100, padding: '5px 14px', textDecoration: 'none', fontFamily: "'DM Sans',sans-serif", transition: 'all 0.15s' }}>
                                {s.title.split('. ')[1]}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Content ── */}
            <section style={{ padding: '48px 20px 96px' }}>
                <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
                    {sections.map((s, i) => (
                        <div key={i} id={`section-${i}`} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.07)', scrollMarginTop: 100 }}>
                            <div style={{ padding: '24px 32px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 11, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.icon}</div>
                                <h2 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", margin: 0 }}>{s.title}</h2>
                            </div>
                            <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {s.content.map((c, j) => (
                                    <div key={j} style={{ paddingLeft: 16, borderLeft: `3px solid ${s.bg}` }}>
                                        <div style={{ fontSize: 14.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 5 }}>{c.head}</div>
                                        <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.8, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{c.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Contact footer */}
                    <div style={{ background: '#f8fafc', borderRadius: 20, padding: '32px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'flex-start', gap: 20 }} className="terms-footer">
                        <div style={{ width: 48, height: 48, background: '#eff6ff', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}>
                            <Mail size={22} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 8 }}>Have a Legal Query?</h3>
                            <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif", marginBottom: 12 }}>
                                For questions about these Terms, data processing agreements, or enterprise compliance requirements, contact our legal team. We respond within 1 business day.
                            </p>
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                <a href="mailto:legal@onepath.in" style={{ fontSize: 14.5, fontWeight: 600, color: '#2563eb', textDecoration: 'none', fontFamily: "'DM Sans',sans-serif" }}>support@onepathlab.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
        @media (max-width: 600px) {
          .terms-footer { flex-direction: column !important; }
        }
      `}</style>
        </main>
    )
}
