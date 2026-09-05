'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ShieldCheck, Award, Lock } from 'lucide-react'

const footerLinks = {
    Company: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact Support', href: '/contact' },
    ],
    Product: [
        { label: 'LIS Software Suite', href: '/lis-software' },
        { label: 'Home Collection Book', href: '/home-collection' },
        { label: 'Test Pricing List', href: '/test-pricing' },
        { label: 'Track / Download Report', href: '/track-report' },
    ]
}

const LinkedinSVG = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const InstagramSVG = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
)

const XSVG = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const socialLinks = [
    { icon: <LinkedinSVG />, href: 'https://www.linkedin.com/company/onepath-lab' },
    { icon: <InstagramSVG />, href: 'https://www.instagram.com/onepath.official/' },
    { icon: <XSVG />, href: 'https://x.com/OnePathLab' },
]

export default function Footer() {
    return (
        <footer style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0', 
            width: '100%',
            overflow: 'hidden',
            boxSizing: 'border-box',
        }}>
            <div className="container" style={{ padding: '72px 24px 44px', maxWidth: '1240px', margin: '0 auto' }}>
                <div className="footer-grid">

                    {/* Brand & Certifications Column */}
                    <div className="footer-brand">
                        <Link href="/" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            textDecoration: 'none',
                            marginBottom: 18,
                            width: 'fit-content'
                        }}>
                            <Image
                                src="/logo.png"
                                alt="OnePath Lab Logo"
                                width={34}
                                height={34}
                                style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
                            />
                            <span style={{
                                fontSize: 22,
                                fontWeight: 800,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                color: '#0f172a',
                                letterSpacing: '-0.03em',
                            }}>
                                OnePath Lab
                            </span>
                        </Link>

                        <p style={{
                            fontSize: 14,
                            color: '#64748b',
                            lineHeight: 1.65,
                            marginBottom: 24,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            maxWidth: 320,
                        }}>
                            Enterprise-grade Laboratory Information System (LIS) trusted by 200+ diagnostic centers across India. Automate. Scale. Grow.
                        </p>

                        {/* Certification Badges */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <div className="cert-badge">
                                <Award size={14} color="#059669" />
                                <span>ISO 27001:2022 Certified</span>
                            </div>
                            <div className="cert-badge">
                                <ShieldCheck size={14} color="#2563eb" />
                                <span>HIPAA & DPDP Act Compliant</span>
                            </div>
                            <div className="cert-badge">
                                <Lock size={14} color="#7c3aed" />
                                <span>AWS Cloud Encrypted Vault</span>
                            </div>
                        </div>
                    </div>

                    {/* Offices Column */}
                    <div className="footer-offices">
                        <h4 className="footer-heading">Offices</h4>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                <MapPin size={17} color="#2563eb" style={{ marginTop: 2, flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 2 }}>Corporate Head Quarters</div>
                                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        Street No 04, Tibba Road,<br/>
                                        Mayapuri Chowk, Ludhiana Punjab 141007
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                <MapPin size={17} color="#2563eb" style={{ marginTop: 2, flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 2 }}>Branch Office</div>
                                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        Main Market, Ambehta Peer,<br/>
                                        Saharanpur, Uttar Pradesh 247340
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact & Social Column */}
                    <div className="footer-contact">
                        <h4 className="footer-heading">Get in Touch</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
                            {[
                                { icon: <Phone size={15} />, text: 'Sales: +91 9045757272' },
                                { icon: <Phone size={15} />, text: 'Support: +91 9058459848' },
                                { icon: <Mail size={15} />, text: 'support@onepathlab.com' },
                            ].map((c, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: 10, alignItems: 'center',
                                    fontSize: 13.5, color: '#475569',
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontWeight: 500,
                                }}>
                                    <span style={{ color: '#2563eb' }}>{c.icon}</span>
                                    {c.text}
                                </div>
                            ))}
                        </div>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: 10 }}>
                            {socialLinks.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon-btn"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company & Product Links Columns */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading} className="footer-links">
                            <h4 className="footer-heading">{heading}</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
                                {links.map(link => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                fontSize: 13.5,
                                                fontWeight: 500,
                                                color: '#64748b',
                                                textDecoration: 'none',
                                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                                transition: 'color 0.2s',
                                            }}
                                            onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
                                            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                borderTop: '1px solid #f1f5f9',
                padding: '20px 24px',
                background: '#fafafa' 
            }}>
                <div className="container" style={{
                    maxWidth: '1240px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 12,
                    padding: 0,
                }}>
                    <p style={{
                        fontSize: 13,
                        color: '#64748b',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        margin: 0,
                    }}>
                        © {new Date().getFullYear()} OnePath Lab · All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <span style={{ fontSize: 12.5, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            Engineered by
                        </span>
                        <a
                            href="https://cocodestudio.com"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                fontSize: 12.5,
                                fontWeight: 700,
                                color: '#2563eb',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                            onMouseLeave={e => (e.currentTarget.style.color = '#2563eb')}
                        >
                            CoCode Studio Company
                        </a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.4fr 1.1fr 1fr 0.7fr 0.8fr;
                    gap: 36px;
                }

                .footer-heading {
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: '#0f172a';
                    margin-bottom: 22px;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }

                .cert-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    padding: 5px 12px;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 999px;
                    font-size: 11.5px;
                    font-weight: 600;
                    color: #475569;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    width: fit-content;
                }

                .social-icon-btn {
                    width: 36px; height: 36px;
                    border-radius: 9px;
                    background: #f1f5f9;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #64748b;
                    text-decoration: none;
                    transition: all 0.2s;
                }
                .social-icon-btn:hover {
                    background: #2563eb;
                    color: #ffffff;
                    border-color: #2563eb;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        row-gap: 36px;
                    }
                }

                @media (max-width: 600px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }
                }
            `}} />
        </footer>
    )
}