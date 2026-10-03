'use client'

import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppWidget() {
    const [dismissed, setDismissed] = useState(false)

    return (
        <aside
            aria-label="Direct WhatsApp Support"
            style={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                zIndex: 9990,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 8,
                pointerEvents: 'none',
            }}
        >
            {/* Context Tooltip Pill (dismissible) */}
            {!dismissed && (
                <div
                    style={{
                        pointerEvents: 'auto',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: 12,
                        padding: '8px 12px 8px 14px',
                        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        animation: 'fadeInUp 0.35s ease-out',
                        maxWidth: 240,
                    }}
                    className="whatsapp-tooltip"
                >
                    <span style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#22c55e',
                        display: 'inline-block',
                        boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.25)',
                    }} />
                    <span style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: '#1e293b',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        lineHeight: 1.35,
                    }}>
                        Chat with our LIS specialist
                    </span>
                    <button
                        onClick={() => setDismissed(true)}
                        aria-label="Close tooltip"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#94a3b8',
                            padding: 2,
                            display: 'flex',
                        }}
                    >
                        <X size={14} />
                    </button>
                </div>
            )}

            {/* Main WhatsApp Action Button */}
            <a
                href="https://wa.me/919045757272?text=Hi%2C%20I%20am%20interested%20in%20OnePath%20Lab%20LIS%20software.%20Can%20you%20share%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with OnePath Lab"
                className="whatsapp-btn"
                style={{
                    pointerEvents: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    color: '#ffffff',
                    padding: '13px 20px',
                    borderRadius: 50,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 14.5,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                <MessageCircle size={22} style={{ flexShrink: 0 }} />
                <span className="whatsapp-btn-text">WhatsApp Us</span>
            </a>

            <style>{`
                .whatsapp-btn:hover {
                    transform: translateY(-3px) scale(1.03);
                    box-shadow: 0 12px 32px rgba(34, 197, 94, 0.55) !important;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 640px) {
                    .whatsapp-btn-text { display: none; }
                    .whatsapp-btn { padding: 14px !important; border-radius: 50% !important; }
                    .whatsapp-tooltip { display: none !important; }
                }
            `}</style>
        </aside>
    )
}
