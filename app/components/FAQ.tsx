'use client'
import React, { useState } from 'react'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { faqsData } from '../../data/faqs'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (i: number) => {
        setOpenIndex(prev => (prev === i ? null : i))
    }

    return (
        <section id="faq" style={{ padding: '96px 0', background: '#ffffff', boxSizing: 'border-box', overflow: 'hidden' }}>
            <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 clamp(16px, 3.5vw, 40px)', boxSizing: 'border-box' }}>
                <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            background: '#f8fafc',
                            border: '1px solid #cbd5e1',
                            borderLeft: '3px solid #2563eb',
                            color: '#0f172a',
                            padding: '7px 16px',
                            borderRadius: 6,
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            <span>[ KNOWLEDGE BASE ]</span>
                            <span style={{ color: '#475569' }}>Frequently Asked Questions</span>
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
                        margin: '0 auto',
                        fontSize: 'clamp(14.5px, 2.5vw, 17px)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                        Have questions about hardware interfacing, ABDM sync, or pricing? Find clear answers below.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {faqsData.map((faq, i) => {
                        const isOpen = openIndex === i
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
        </section>
    )
}
