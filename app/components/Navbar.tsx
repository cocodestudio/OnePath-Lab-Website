'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Home, FlaskConical, FileSearch, Microscope, Info, Phone, CreditCard, BookOpen } from 'lucide-react'

// Strong TypeScript Interfaces for scalability
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
            { label: 'Lab Report Track', href: '/track-report', icon: <FileSearch size={15} />, desc: 'Track your report status' },
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
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    if (!mounted) return null;

    return (
        <>
            {/* ── Floating pill wrapper ── */}
            <div className="nav-wrapper" style={{
                position: 'fixed', top: 0, left: 0, right: 0,
                zIndex: 1000,
                display: 'flex', justifyContent: 'center',
                pointerEvents: 'none',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
            }}>
                <nav className="nav-bar" style={{
                    pointerEvents: 'all',
                    width: '100%', maxWidth: 1100,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderRadius: 100,
                    background: scrolled
                        ? 'rgba(255, 255, 255, 0.96)'
                        : 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(32px)',
                    WebkitBackdropFilter: 'blur(32px)',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: scrolled
                        ? '0 8px 32px -8px rgba(15,23,42,0.12), 0 0 0 1px rgba(226,232,240,0.6), inset 0 1px 0 rgba(255,255,255,1)'
                        : '0 4px 20px -6px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,1)',
                    transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                }}>

                    {/* ── Brand / Logo ── */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
                        <Image src="/logo.png" alt="Logo" width={30} height={30} style={{ objectFit: 'contain' }} priority />

                        <span style={{ display: 'flex', alignItems: 'baseline', gap: 0, userSelect: 'none' }}>
                            <span style={{
                                fontFamily: '"Syne", sans-serif',
                                fontSize: 21,
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                letterSpacing: '-0.04em',
                                lineHeight: 1,
                            }}>OnePath</span>
                            <span style={{
                                fontFamily: '"Syne", sans-serif',
                                fontSize: 21, fontWeight: 800,
                                color: '#0f172a',
                                letterSpacing: '-0.04em',
                                marginLeft: 2,
                            }}>Lab</span>
                        </span>
                    </Link>

                    {/* ── Center nav (Desktop) ── */}
                    <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {navLinks.map((link, i) => (
                            <div key={i} className="nav-item" style={{ position: 'relative', padding: '20px 0' }}>
                                <Link
                                    href={link.href}
                                    className="nav-link-text"
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 4,
                                        color: '#374151', textDecoration: 'none',
                                        fontSize: 14.5, fontWeight: 600,
                                        fontFamily: "'DM Sans', sans-serif",
                                        padding: '7px 14px',
                                        borderRadius: 10,
                                        transition: 'all 0.18s ease',
                                    }}
                                >
                                    {link.label}
                                    {link.dropdown && (
                                        <ChevronDown size={13} className="dd-icon" strokeWidth={2.5}
                                            style={{ transition: 'transform 0.3s ease', opacity: 0.5 }} />
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
                    <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Link href="http://lis.onepathlab.com/login" className="cta-login-btn">
                            Log in
                        </Link>
                        <Link href="/trial" className="cta-trial-btn">
                            Try for free
                        </Link>
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        className="nav-hamburger"
                        aria-label="Toggle menu"
                        style={{
                            display: 'none', alignItems: 'center', justifyContent: 'center',
                            width: 42, height: 42,
                            background: 'rgba(241, 245, 249, 0.8)', border: '1px solid rgba(226, 232, 240, 0.8)',
                            color: '#0f172a', cursor: 'pointer',
                            borderRadius: 12,
                            transition: 'all 0.2s ease',
                            padding: 0,
                        }}
                    >
                        <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
                            <span /><span /><span />
                        </span>
                    </button>
                </nav>
            </div>

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
                        <Image src="/logo.png" alt="Logo" width={28} height={28} style={{ objectFit: 'contain' }} />
                        <span style={{ fontFamily: '"Syne",sans-serif', fontSize: 19, fontWeight: 800, letterSpacing: '-0.03em' }}>
                            <span style={{ background: 'linear-gradient(135deg, #2563eb, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OnePath</span>
                            <span style={{ color: '#0f172a', marginLeft: 2 }}>Lab</span>
                        </span>
                    </Link>
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        style={{
                            background: '#f1f5f9', border: '1px solid #e2e8f0',
                            borderRadius: 10, width: 36, height: 36,
                            cursor: 'pointer', color: '#475569',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'background 0.2s',
                        }}
                    >
                        <X size={18} />
                    </button>
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
                                color: '#059669', background: '#f0fdf4', fontSize: 13.5, fontWeight: 600,
                                marginBottom: 6,
                            }}
                        >
                            <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                💬
                            </span>
                            Chat on WhatsApp (+91 9045757272)
                        </a>
                        <a
                            href="tel:+919897198999"
                            className="drawer-contact-row"
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 10,
                                padding: '10px 12px', borderRadius: 10, textDecoration: 'none',
                                color: '#2563eb', background: '#eff6ff', fontSize: 13.5, fontWeight: 600,
                            }}
                        >
                            <Phone size={14} color="#2563eb" />
                            Call Sales: +91 9897198999
                        </a>
                    </div>
                </div>

                {/* Drawer footer CTAs */}
                <div style={{
                    padding: '16px 16px 28px',
                    borderTop: '1px solid #f1f5f9',
                    background: '#ffffff',
                    display: 'flex', flexDirection: 'column', gap: 10,
                }}>
                    <Link href="http://lis.onepathlab.com/login" onClick={() => setMenuOpen(false)} className="drawer-login-btn">
                        Log in to Portal
                    </Link>
                    <Link href="/trial" onClick={() => setMenuOpen(false)} className="drawer-trial-btn">
                        Start 5-Day Free Trial →
                    </Link>
                </div>
            </div>

            {/* ── All CSS Styles wrapping via dangerouslySetInnerHTML ── */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .nav-wrapper {
                  padding: 16px 20px 0;
                }
                .nav-bar {
                  height: 64px;
                  padding: 0 10px 0 24px;
                }

                .nav-link-text:hover {
                  background: #f0f4ff !important;
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
                  transform: translateX(-50%) translateY(8px) scale(0.96);
                  opacity: 0; visibility: hidden;
                  transition: all 0.28s cubic-bezier(0.4,0,0.2,1);
                  pointer-events: none;
                  z-index: 200;
                  padding-top: 4px;
                }
                .dropdown-inner {
                  background: rgba(255,255,255,0.98);
                  backdrop-filter: blur(24px);
                  -webkit-backdrop-filter: blur(24px);
                  border: 1px solid #e8f0fe;
                  border-radius: 18px;
                  padding: 8px;
                  min-width: 240px;
                  box-shadow: 0 20px 48px -8px rgba(0,0,0,0.12), 0 4px 8px -2px rgba(0,0,0,0.04);
                }
                .nav-item:hover .nav-dropdown {
                  opacity: 1; visibility: visible;
                  transform: translateX(-50%) translateY(0) scale(1);
                  pointer-events: auto;
                }
                .dropdown-link {
                  display: flex; align-items: center; gap: 12px;
                  padding: 10px 12px;
                  border-radius: 12px;
                  text-decoration: none;
                  transition: all 0.18s ease;
                }
                .dropdown-link:hover {
                  background: #eff6ff;
                  transform: translateX(3px);
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
                  font-size: 13.5px; font-weight: 600;
                  color: #1e293b; font-family: 'DM Sans', sans-serif;
                  transition: color 0.18s;
                }
                .dd-desc {
                  font-size: 11.5px; color: #94a3b8;
                  font-family: 'DM Sans', sans-serif; font-weight: 400;
                }
         
                .hamburger-icon {
                  width: 20px; height: 14px;
                  display: flex; flex-direction: column;
                  justify-content: space-between;
                  position: relative;
                }
                .hamburger-icon span {
                  display: block; height: 2px;
                  background: #1e293b; border-radius: 2px;
                  transform-origin: center;
                  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
                }
                .hamburger-icon.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
                .hamburger-icon.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
                .hamburger-icon.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
         
                .mobile-backdrop {
                  position: fixed; inset: 0; z-index: 1010;
                  background: rgba(15, 23, 42, 0.4);
                  backdrop-filter: blur(6px);
                  -webkit-backdrop-filter: blur(6px);
                  opacity: 0; visibility: hidden;
                  transition: all 0.3s ease;
                }
                .mobile-backdrop.visible { opacity: 1; visibility: visible; }
         
                .mobile-drawer {
                  position: fixed; top: 0; right: 0; bottom: 0;
                  width: min(340px, 88vw); z-index: 1020;
                  background: #ffffff;
                  box-shadow: -8px 0 40px rgba(15, 23, 42, 0.15);
                  display: flex; flex-direction: column;
                  transform: translateX(100%);
                  transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
                  border-radius: 20px 0 0 20px;
                  overflow: hidden;
                }
                .mobile-drawer.open { transform: translateX(0); }

                /* Static Clean Desktop CSS Classes */
                .cta-login-btn {
                    padding: 9px 22px; font-size: 14px; font-weight: 600; color: #374151;
                    border: 1.5px solid #e2e8f0; border-radius: 100px; text-decoration: none;
                    font-family: 'DM Sans', sans-serif; transition: all 0.2s ease; background: transparent;
                }
                .cta-login-btn:hover { background: #f8fafc; border-color: #94a3b8; color: #0f172a; }

                .cta-trial-btn {
                    display: inline-flex; align-items: center; gap: 6px; padding: 10px 24px;
                    font-size: 14px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #2563eb, #6366f1);
                    border-radius: 100px; text-decoration: none; font-family: 'DM Sans', sans-serif;
                    box-shadow: 0 4px 16px rgba(37,99,235,0.35); transition: all 0.2s ease; white-space: nowrap;
                }
                .cta-trial-btn:hover { background: linear-gradient(135deg, #1d4ed8, #4f46e5); transform: translateY(-1px); box-shadow: 0 6px 24px rgba(37,99,235,0.45); }

                /* Static Mobile Custom Accordion Classes */
                .mobile-menu-btn {
                    width: 100%; display: flex; align-items: center; justify-content: space-between;
                    padding: 12px 14px; background: transparent; border: none;
                    border-radius: 12px; cursor: pointer; transition: background 0.15s; color: #0f172a;
                    font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
                    text-decoration: none;
                    box-sizing: border-box;
                }
                .mobile-menu-btn:hover, .mobile-menu-btn:active { background: #f1f5f9; }

                .mobile-sub-link {
                    display: flex; align-items: center; gap: 12px; padding: 10px 12px;
                    border-radius: 10px; text-decoration: none; transition: background 0.15s;
                }
                .mobile-sub-link:hover, .mobile-sub-link:active { background: #eff6ff; }

                .drawer-login-btn {
                    display: block; text-align: center; padding: 13px; font-size: 15px; font-weight: 600;
                    color: #0f172a; border: 1.5px solid #e2e8f0; border-radius: 14px; text-decoration: none;
                    font-family: 'DM Sans', sans-serif; transition: all 0.2s; background: #ffffff;
                }
                .drawer-login-btn:hover, .drawer-login-btn:active { background: #f8fafc; }

                .drawer-trial-btn {
                    display: block; text-align: center; padding: 14px; font-size: 15px; font-weight: 700;
                    color: #fff; background: linear-gradient(135deg, #2563eb, #6366f1); border-radius: 14px; text-decoration: none;
                    font-family: 'DM Sans', sans-serif; box-shadow: 0 4px 16px rgba(37,99,235,0.35);
                }
         
                @media (max-width: 900px) {
                  .nav-wrapper { padding: 10px 12px 0 !important; }
                  .nav-bar     { height: 56px !important; padding: 0 8px 0 16px !important; }
                  .nav-links   { display: none !important; }
                  .nav-cta     { display: none !important; }
                  .nav-hamburger { display: flex !important; }
                }
                @media (min-width: 901px) {
                  .mobile-drawer   { display: none !important; }
                  .mobile-backdrop { display: none !important; }
                }
            `}} />
        </>
    )
}

/* ── Mobile accordion nav item ── */
function MobileNavItem({ link, onClose }: { link: NavLink; onClose: () => void }) {
    const [open, setOpen] = useState(false)

    if (!link.dropdown) {
        return (
            <div style={{ marginBottom: 3 }}>
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
        <div style={{ marginBottom: 3 }}>
            <button
                onClick={() => setOpen(v => !v)}
                className="mobile-menu-btn"
                type="button"
            >
                <span>{link.label}</span>
                <ChevronDown size={16} strokeWidth={2.5} style={{
                    color: '#94a3b8',
                    transform: open ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                }} />
            </button>

            {/* Sub items accordion */}
            <div style={{
                overflow: 'hidden',
                maxHeight: open ? '500px' : '0',
                transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
            }}>
                <div style={{ paddingLeft: 6, paddingBottom: 6 }}>
                    {link.subItems?.map((sub: SubItem, i: number) => (
                        <Link
                            key={i}
                            href={sub.href}
                            onClick={onClose}
                            className="mobile-sub-link"
                        >
                            <span style={{
                                width: 32, height: 32, borderRadius: 8,
                                background: '#f1f5f9',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#2563eb', flexShrink: 0,
                            }}>
                                {sub.icon}
                            </span>
                            <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <span style={{ fontSize: 13.5, fontWeight: 600, color: '#1e293b', fontFamily: "'DM Sans', sans-serif" }}>
                                    {sub.label}
                                </span>
                                {sub.desc && (
                                    <span style={{ fontSize: 11.5, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>
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