'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronDown, Home, FileSearch, Microscope, Info, Phone, CreditCard } from 'lucide-react'

interface SubItem {
    label: string;
    href: string;
    icon: React.ReactNode;
    desc: string;
}

interface NavLink {
    label: string;
    href: string;
    dropdown: boolean;
    subItems?: SubItem[];
}

const navLinks: NavLink[] = [
    {
        label: 'Product',
        href: '#',
        dropdown: true,
        subItems: [
            { label: 'Home Collection Book', href: '/home-collection', icon: <Home size={15} />, desc: 'Book at-home sample pickup' },
            { label: 'Test Pricing List', href: '/test-pricing', icon: <CreditCard size={15} />, desc: 'View all test rates' },
            { label: 'Track / Download Report', href: '/track-report', icon: <FileSearch size={15} />, desc: 'Track & download your test report' },
            { label: 'LIS Software', href: '/lis-software', icon: <Microscope size={15} />, desc: 'Full lab management suite' },
        ],
    },
    { label: 'Blogs', href: '/blogs', dropdown: false },
    {
        label: 'More',
        href: '#',
        dropdown: true,
        subItems: [
            { label: 'About Us', href: '/about', icon: <Info size={15} />, desc: 'Our story & mission' },
            { label: 'Contact Support', href: '/contact', icon: <Phone size={15} />, desc: 'Get help anytime' },
        ],
    },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
        const onScroll = () => setScrolled(window.scrollY > 12)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    if (!mounted) return null

    return (
        <>
            {/* ── Floating pill wrapper ── */}
            <header className="nav-wrapper" style={{
                position: 'fixed', top: 0, left: 0, right: 0,
                zIndex: 1000,
                display: 'flex', justifyContent: 'center',
                pointerEvents: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
                <nav className="nav-bar" style={{
                    pointerEvents: 'all',
                    width: '100%', maxWidth: 1120,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderRadius: 999,
                    background: scrolled
                        ? 'rgba(255, 255, 255, 0.95)'
                        : 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: scrolled
                        ? '0 10px 30px -10px rgba(15,23,42,0.12), 0 1px 3px rgba(0,0,0,0.05)'
                        : '0 4px 20px -6px rgba(15,23,42,0.06)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>

                    {/* ── Brand / Logo ── */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', flexShrink: 0 }}>
                        <Image src="/logo.png" alt="OnePath Lab Logo" width={32} height={32} style={{ width: 'auto', height: 'auto', objectFit: 'contain' }} priority />

                        <span style={{ display: 'flex', alignItems: 'baseline', userSelect: 'none' }}>
                            <span style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: 'clamp(18px, 4vw, 21px)',
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                letterSpacing: '-0.03em',
                                lineHeight: 1,
                            }}>OnePath</span>
                            <span style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: 'clamp(18px, 4vw, 21px)',
                                fontWeight: 800,
                                color: '#0f172a',
                                letterSpacing: '-0.03em',
                                marginLeft: 3,
                            }}>Lab</span>
                        </span>
                    </Link>

                    {/* ── Center nav (Desktop) ── */}
                    <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        {navLinks.map((link, i) => (
                            <div key={i} className="nav-item" style={{ position: 'relative', padding: '18px 0' }}>
                                <Link
                                    href={link.href}
                                    className="nav-link-text"
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 5,
                                        color: '#334155', textDecoration: 'none',
                                        fontSize: 14, fontWeight: 600,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        padding: '8px 14px',
                                        borderRadius: 8,
                                        transition: 'all 0.18s ease',
                                    }}
                                >
                                    {link.label}
                                    {link.dropdown && (
                                        <ChevronDown size={13} className="dd-icon" strokeWidth={2.5}
                                            style={{ transition: 'transform 0.25s ease', opacity: 0.6 }} />
                                    )}
                                </Link>

                                {link.dropdown && (
                                    <div className="nav-dropdown">
                                        <div className="dropdown-inner">
                                            {link.subItems?.map((sub, j) => (
                                                <Link key={j} href={sub.href} className="dropdown-link">
                                                    <span className="dd-icon-wrap">{sub.icon}</span>
                                                    <span className="dd-text">
                                                        <span className="dd-label">{sub.label}</span>
                                                        {sub.desc && <span className="dd-desc">{sub.desc}</span>}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* ── Right CTAs (Desktop) ── */}
                    <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <a href="https://lis.onepathlab.com/login" className="cta-login-btn">
                            Log In
                        </a>
                        <Link href="/trial" className="cta-trial-btn">
                            Start Free Trial
                        </Link>
                    </div>

                    {/* ── Mobile Right Actions (Track Report + Hamburger) ── */}
                    <div className="mobile-actions-wrap" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Link
                            href="/track-report"
                            className="mobile-track-nav-btn"
                            style={{
                                display: 'none',
                                alignItems: 'center',
                                gap: 5,
                                padding: '6px 12px',
                                borderRadius: 999,
                                fontSize: 12,
                                fontWeight: 700,
                                color: '#2563eb',
                                background: '#eff6ff',
                                border: '1px solid #bfdbfe',
                                textDecoration: 'none',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s',
                            }}
                        >
                            <FileSearch size={13} color="#2563eb" />
                            <span>Track Report</span>
                        </Link>

                        <button
                            onClick={() => setMenuOpen(v => !v)}
                            className="nav-hamburger"
                            aria-label="Toggle menu"
                            style={{
                                display: 'none', alignItems: 'center', justifyContent: 'center',
                                width: 38, height: 38,
                                background: '#f8fafc', border: '1px solid #e2e8f0',
                                color: '#0f172a', cursor: 'pointer',
                                borderRadius: 10,
                                transition: 'all 0.2s ease',
                                padding: 0,
                            }}
                        >
                            <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
                                <span /><span /><span />
                            </span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* ── Mobile overlay backdrop ── */}
            <div
                className={`mobile-backdrop ${menuOpen ? 'visible' : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* ── Mobile slide-in drawer ── */}
            <div
                ref={menuRef}
                className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
            >
                {/* Drawer header */}
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '18px 20px',
                    borderBottom: '1px solid #f1f5f9',
                    background: '#ffffff',
                }}>
                    <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                        <Image src="/logo.png" alt="Logo" width={28} height={28} style={{ width: 'auto', height: 'auto', objectFit: 'contain' }} />
                        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em' }}>
                            <span style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OnePath</span>
                            <span style={{ color: '#0f172a', marginLeft: 3 }}>Lab</span>
                        </span>
                    </Link>
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        style={{
                            background: '#f1f5f9', border: '1px solid #e2e8f0',
                            borderRadius: 8, width: 34, height: 34,
                            cursor: 'pointer', color: '#475569',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'background 0.2s',
                        }}
                    >
                        <X size={17} />
                    </button>
                </div>

                {/* Drawer Quick Action: Track Report */}
                <div style={{ padding: '14px 14px 4px', background: '#ffffff' }}>
                    <Link
                        href="/track-report"
                        onClick={() => setMenuOpen(false)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 14px',
                            borderRadius: 14,
                            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                            border: '1px solid #bfdbfe',
                            textDecoration: 'none',
                            boxShadow: '0 2px 10px rgba(37,99,235,0.08)',
                            transition: 'all 0.2s',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{
                                width: 34, height: 34, borderRadius: 10,
                                background: '#2563eb', color: '#ffffff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 2px 6px rgba(37,99,235,0.3)',
                            }}>
                                <FileSearch size={17} />
                            </div>
                            <div>
                                <div style={{ fontSize: 13.5, fontWeight: 800, color: '#1e3a8a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    Track / Download Report
                                </div>
                                <div style={{ fontSize: 11, color: '#2563eb', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                                    Live status & vector PDF download
                                </div>
                            </div>
                        </div>
                        <span style={{ fontSize: 16, color: '#2563eb', fontWeight: 800 }}>→</span>
                    </Link>
                </div>

                {/* Drawer nav items */}
                <div style={{ padding: '12px 14px', overflowY: 'auto', flex: 1 }}>
                    {navLinks.map((link, i) => (
                        <MobileNavItem key={i} link={link} onClose={() => setMenuOpen(false)} />
                    ))}

                    {/* Quick direct contact links inside drawer */}
                    <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #f1f5f9' }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, paddingLeft: 8 }}>
                            Need Help?
                        </div>
                        <a
                            href="https://api.whatsapp.com/send?phone=9045757272&text=Hello, I need assistance with OnePath Lab."
                            target="_blank"
                            rel="noreferrer"
                            className="drawer-contact-row"
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                padding: '10px 12px', borderRadius: 10, textDecoration: 'none',
                                color: '#059669', background: '#f0fdf4', fontSize: 13, fontWeight: 600,
                                marginBottom: 6,
                            }}
                        >
                            <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                💬
                            </span>
                            Chat on WhatsApp (+91 9045757272)
                        </a>
                        <a
                            href="tel:+919045757272"
                            className="drawer-contact-row"
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                padding: '10px 12px', borderRadius: 10, textDecoration: 'none',
                                color: '#2563eb', background: '#eff6ff', fontSize: 13, fontWeight: 600,
                            }}
                        >
                            <Phone size={14} color="#2563eb" />
                            Call Sales: +91 9045757272
                        </a>
                    </div>
                </div>

                {/* Drawer footer CTAs */}
                <div style={{
                    padding: '16px 16px 24px',
                    borderTop: '1px solid #f1f5f9',
                    background: '#ffffff',
                    display: 'flex', flexDirection: 'column', gap: 10,
                }}>
                    <a href="https://lis.onepathlab.com/login" onClick={() => setMenuOpen(false)} className="drawer-login-btn">
                        Log In to Portal
                    </a>
                    <Link href="/trial" onClick={() => setMenuOpen(false)} className="drawer-trial-btn">
                        Start 7-Day Free Trial →
                    </Link>
                </div>
            </div>

            {/* ── CSS Styles ── */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .nav-wrapper {
                  padding: 16px 20px 0;
                }
                .nav-bar {
                  height: 62px;
                  padding: 0 10px 0 20px;
                }

                .nav-link-text:hover {
                  background: #f1f5f9 !important;
                  color: #2563eb !important;
                }
                .nav-item:hover .nav-link-text {
                  color: #2563eb !important;
                }
                .nav-item:hover .dd-icon {
                  transform: rotate(180deg);
                  opacity: 1 !important;
                  color: #2563eb;
                }
         
                .nav-dropdown {
                  position: absolute;
                  top: 100%; left: 50%;
                  transform: translateX(-50%) translateY(8px) scale(0.97);
                  opacity: 0; visibility: hidden;
                  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
                  pointer-events: none;
                  z-index: 200;
                  padding-top: 4px;
                }
                .dropdown-inner {
                  background: rgba(255,255,255,0.98);
                  backdrop-filter: blur(20px);
                  -webkit-backdrop-filter: blur(20px);
                  border: 1px solid #e2e8f0;
                  border-radius: 16px;
                  padding: 8px;
                  min-width: 250px;
                  box-shadow: 0 16px 36px -6px rgba(15,23,42,0.12), 0 4px 8px -2px rgba(0,0,0,0.04);
                }
                .nav-item:hover .nav-dropdown {
                  opacity: 1; visibility: visible;
                  transform: translateX(-50%) translateY(0) scale(1);
                  pointer-events: auto;
                }
                .dropdown-link {
                  display: flex; align-items: center; gap: 12px;
                  padding: 10px 12px;
                  border-radius: 10px;
                  text-decoration: none;
                  transition: all 0.18s ease;
                }
                .dropdown-link:hover {
                  background: #eff6ff;
                  transform: translateX(2px);
                }
                .dropdown-link:hover .dd-label { color: #2563eb; }
                .dd-icon-wrap {
                  width: 32px; height: 32px; border-radius: 8px;
                  background: #f1f5f9;
                  display: flex; align-items: center; justify-content: center;
                  color: #2563eb; flex-shrink: 0;
                  transition: background 0.18s;
                }
                .dropdown-link:hover .dd-icon-wrap { background: #dbeafe; }
                .dd-text { display: flex; flex-direction: column; gap: 1px; }
                .dd-label {
                  font-size: 13.5px; font-weight: 700;
                  color: #1e293b; font-family: 'Plus Jakarta Sans', sans-serif;
                  transition: color 0.18s;
                }
                .dd-desc {
                  font-size: 11.5px; color: #64748b;
                  font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400;
                }
         
                .hamburger-icon {
                  width: 18px; height: 13px;
                  display: flex; flex-direction: column;
                  justify-content: space-between;
                  position: relative;
                }
                .hamburger-icon span {
                  display: block; height: 2px;
                  background: #1e293b; border-radius: 2px;
                  transform-origin: center;
                  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .hamburger-icon.open span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
                .hamburger-icon.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
                .hamburger-icon.open span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }
         
                .mobile-backdrop {
                  position: fixed; inset: 0; z-index: 1010;
                  background: rgba(15, 23, 42, 0.45);
                  backdrop-filter: blur(4px);
                  -webkit-backdrop-filter: blur(4px);
                  opacity: 0; visibility: hidden;
                  transition: all 0.25s ease;
                }
                .mobile-backdrop.visible { opacity: 1; visibility: visible; }
         
                .mobile-drawer {
                  position: fixed; top: 0; right: 0; bottom: 0;
                  width: min(320px, 86vw); z-index: 1020;
                  background: #ffffff;
                  box-shadow: -8px 0 32px rgba(15, 23, 42, 0.15);
                  display: flex; flex-direction: column;
                  transform: translateX(100%);
                  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
                  border-radius: 20px 0 0 20px;
                  overflow: hidden;
                }
                .mobile-drawer.open { transform: translateX(0); }

                .cta-login-btn {
                    padding: 8px 18px; font-size: 13.5px; font-weight: 600; color: #334155;
                    border: 1px solid #cbd5e1; border-radius: 999px; text-decoration: none;
                    font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s ease; background: transparent;
                }
                .cta-login-btn:hover { background: #f8fafc; border-color: #94a3b8; color: #0f172a; }

                .cta-trial-btn {
                    display: inline-flex; align-items: center; gap: 6px; padding: 9px 20px;
                    font-size: 13.5px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #2563eb, #4f46e5);
                    border-radius: 999px; text-decoration: none; font-family: 'Plus Jakarta Sans', sans-serif;
                    box-shadow: 0 4px 14px rgba(37,99,235,0.35); transition: all 0.2s ease; white-space: nowrap;
                }
                .cta-trial-btn:hover { background: linear-gradient(135deg, #1d4ed8, #4338ca); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,99,235,0.45); }

                .mobile-menu-btn {
                    width: 100%; display: flex; align-items: center; justify-content: space-between;
                    padding: 11px 12px; background: transparent; border: none;
                    border-radius: 10px; cursor: pointer; transition: background 0.15s; color: #0f172a;
                    font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14.5px; font-weight: 700;
                    text-decoration: none;
                    box-sizing: border-box;
                }
                .mobile-menu-btn:hover, .mobile-menu-btn:active { background: #f1f5f9; }

                .mobile-sub-link {
                    display: flex; align-items: center; gap: 10px; padding: 9px 10px;
                    border-radius: 8px; text-decoration: none; transition: background 0.15s;
                }
                .mobile-sub-link:hover, .mobile-sub-link:active { background: #eff6ff; }

                .drawer-login-btn {
                    display: block; text-align: center; padding: 11px; font-size: 14px; font-weight: 600;
                    color: #0f172a; border: 1px solid #e2e8f0; border-radius: 12px; text-decoration: none;
                    font-family: 'Plus Jakarta Sans', sans-serif; transition: all 0.2s; background: #ffffff;
                }
                .drawer-login-btn:hover, .drawer-login-btn:active { background: #f8fafc; }

                .drawer-trial-btn {
                    display: block; text-align: center; padding: 12px; font-size: 14px; font-weight: 700;
                    color: #fff; background: linear-gradient(135deg, #2563eb, #4f46e5); border-radius: 12px; text-decoration: none;
                    font-family: 'Plus Jakarta Sans', sans-serif; box-shadow: 0 4px 14px rgba(37,99,235,0.35);
                }
         
                @media (max-width: 900px) {
                  .nav-wrapper { padding: 10px 12px 0 !important; }
                  .nav-bar     { height: 54px !important; padding: 0 8px 0 14px !important; }
                  .nav-links   { display: none !important; }
                  .nav-cta     { display: none !important; }
                  .nav-hamburger { display: flex !important; }
                  .mobile-track-nav-btn { display: inline-flex !important; }
                }
                @media (max-width: 480px) {
                  .nav-wrapper { padding: 8px 10px 0 !important; }
                  .mobile-track-nav-btn {
                    padding: 5px 10px !important;
                    font-size: 11.5px !important;
                  }
                }
                @media (max-width: 360px) {
                  .nav-wrapper { padding: 8px 6px 0 !important; }
                  .nav-bar     { padding: 0 6px 0 8px !important; }
                  .mobile-track-nav-btn {
                    padding: 4px 8px !important;
                    font-size: 11px !important;
                  }
                }
                @media (min-width: 901px) {
                  .mobile-drawer   { display: none !important; }
                  .mobile-backdrop { display: none !important; }
                }
            `}} />
        </>
    )
}

function MobileNavItem({ link, onClose }: { link: NavLink; onClose: () => void }) {
    const [open, setOpen] = useState(false)

    if (!link.dropdown) {
        return (
            <div style={{ marginBottom: 2 }}>
                <Link
                    href={link.href}
                    onClick={onClose}
                    className="mobile-menu-btn"
                >
                    <span>{link.label}</span>
                </Link>
            </div>
        )
    }

    return (
        <div style={{ marginBottom: 2 }}>
            <button
                onClick={() => setOpen(v => !v)}
                className="mobile-menu-btn"
                type="button"
            >
                <span>{link.label}</span>
                <ChevronDown size={15} strokeWidth={2.5} style={{
                    color: '#94a3b8',
                    transform: open ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.25s ease',
                }} />
            </button>

            {/* Sub items accordion */}
            <div style={{
                overflow: 'hidden',
                maxHeight: open ? '400px' : '0',
                transition: 'max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
                <div style={{ paddingLeft: 4, paddingBottom: 4 }}>
                    {link.subItems?.map((sub: SubItem, i: number) => (
                        <Link
                            key={i}
                            href={sub.href}
                            onClick={onClose}
                            className="mobile-sub-link"
                        >
                            <span style={{
                                width: 28, height: 28, borderRadius: 6,
                                background: '#f1f5f9',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#2563eb', flexShrink: 0,
                            }}>
                                {sub.icon}
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <span style={{ fontSize: 13, fontWeight: 600, color: '#1e293b', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    {sub.label}
                                </span>
                                {sub.desc && (
                                    <span style={{ fontSize: 11, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        {sub.desc}
                                    </span>
                                )}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}