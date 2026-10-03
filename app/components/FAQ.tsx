'use client'

import React, { useState, useMemo } from 'react'
import { ChevronDown, Search, ArrowRight, X } from 'lucide-react'
import Link from 'next/link'
import { faqsData } from '../../data/faqs'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredFaqs = useMemo(() => {
        const q = searchQuery.trim().toLowerCase()
        if (!q) return faqsData
        return faqsData.filter(item =>
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        )
    }, [searchQuery])

    const toggle = (i: number) => {
        setOpenIndex(prev => (prev === i ? null : i))
    }

    return (
        <section id="faq" style={{ padding: '96px 0', background: '#ffffff', boxSizing: 'border-box', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>
                <div style={{ textAlign: 'center', marginBottom: 40, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
                        <div className="section-badge">
                            <span className="badge-tag">[ KNOWLEDGE BASE ]</span>
                            <span className="badge-dot" />
                            <span className="badge-desc">Frequently Asked Questions</span>
                        </div>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 5.2vw, 42px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: 14,
                        letterSpacing: '-0.03em',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        lineHeight: 1.2,
                    }}>
                        Everything You Need to Know About{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            OnePath Cloud LIS
                        </span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 580,
                        margin: '0 auto 28px',
                        fontSize: 'clamp(14.5px, 2.5vw, 17px)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                        Have questions about hardware interfacing, ABDM sync, or pricing? Find clear answers below.
                    </p>

                    {/* Instant Search Bar */}
                    <div style={{
                        maxWidth: 480,
                        margin: '0 auto',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: 50,
                        padding: '8px 18px',
                        transition: 'all 0.2s',
                    }} className="faq-search-wrapper">
                        <Search size={18} color="#94a3b8" style={{ flexShrink: 0, marginRight: 10 }} />
                        <input
                            type="text"
                            placeholder="Filter questions (e.g. machine, NABL, price, WhatsApp)..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                border: 'none',
                                background: 'transparent',
                                outline: 'none',
                                fontSize: 14,
                                color: '#0f172a',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 2,
                                    display: 'flex',
                                    color: '#94a3b8',
                                }}
                                aria-label="Clear search"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {filteredFaqs.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {filteredFaqs.map((faq, i) => {
                            const isOpen = searchQuery ? true : openIndex === i
                            return (
                                <div
                                    key={i}
                                    style={{
                                        border: isOpen ? '1px solid #93c5fd' : '1px solid #e2e8f0',
                                        borderRadius: 16,
                                        background: isOpen ? '#f8faff' : '#ffffff',
                                        boxShadow: isOpen ? '0 8px 24px -8px rgba(37,99,235,0.1)' : '0 1px 3px rgba(0,0,0,0.02)',
                                        transition: 'all 0.25s ease',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <button
                                        onClick={() => toggle(i)}
                                        aria-expanded={isOpen}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: 16,
                                            padding: '20px 24px',
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <span style={{
                                            fontSize: 'clamp(15px, 2.5vw, 17px)',
                                            fontWeight: 700,
                                            color: isOpen ? '#1d4ed8' : '#0f172a',
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            letterSpacing: '-0.01em',
                                        }}>
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={20}
                                            color={isOpen ? '#2563eb' : '#64748b'}
                                            style={{
                                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.25s ease',
                                                flexShrink: 0,
                                            }}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div style={{
                                            padding: '0 24px 22px',
                                            color: '#475569',
                                            fontSize: 'clamp(14px, 2vw, 15.5px)',
                                            lineHeight: 1.7,
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        }}>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '48px 24px',
                        background: '#f8fafc',
                        borderRadius: 16,
                        border: '1px solid #e2e8f0',
                    }}>
                        <div style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 6 }}>
                            No questions matching &ldquo;{searchQuery}&rdquo;
                        </div>
                        <p style={{ fontSize: 14, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif", margin: '0 auto 16px', maxWidth: 440 }}>
                            Feel free to speak directly with our clinical integration engineers on WhatsApp for instant assistance.
                        </p>
                        <a
                            href={`https://wa.me/919045757272?text=Hi%2C%20I%20have%20a%20question%20about%20OnePath%20Lab%3A%20${encodeURIComponent(searchQuery)}`}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                background: '#22c55e',
                                color: '#ffffff',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: 14,
                                padding: '10px 20px',
                                borderRadius: 8,
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                        >
                            Ask on WhatsApp &rarr;
                        </a>
                    </div>
                )}

                <div style={{
                    marginTop: 44,
                    textAlign: 'center',
                    padding: '24px',
                    borderRadius: 16,
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                }}>
                    <span style={{ fontSize: 15, color: '#475569', fontFamily: "'Plus Jakarta Sans', sans-serif", marginRight: 12 }}>
                        Still have questions? Speak directly with our laboratory integration team.
                    </span>
                    <Link href="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        color: '#2563eb',
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                        Contact Support <ArrowRight size={15} />
                    </Link>
                </div>
            </div>

            <style>{`
                .faq-search-wrapper:focus-within {
                    border-color: #2563eb !important;
                    box-shadow: 0 4px 16px rgba(37,99,235,0.12) !important;
                    background: #ffffff !important;
                }
            `}</style>
        </section>
    )
}
