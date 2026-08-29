'use client'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    { name: 'Dr. Abdul Qadir', lab: 'New Life Nursing Home', stars: 5, text: 'Very easy to use. My staff learned it in just one day. The print quality of the reports is excellent and patients are very satisfied.' },
    { name: 'Dr. Mozzam Rasheed', lab: 'Darul shifa clinic', stars: 5, text: 'The WhatsApp report feature is a lifesaver. Patients get their results directly on their phones without waiting. Very happy with the software.' },
    { name: 'Dr. A Raheem', lab: 'Child Health Care', stars: 5, text: 'We were facing issues with our old software, but OnePath fixed everything. The interface is clean, works fast, and never hangs during rush hours.' },
    { name: 'Dr. Samshad Malik', lab: 'Child Health Care', stars: 5, text: 'Great software for our daily operations. Billing and report generation is very fast now. Highly recommended for small and medium setups.' },
    { name: 'Dr. M Hamid', lab: 'Zarrah Clinic', stars: 5, text: 'Checking reports on mobile is the best feature for me. I can approve reports even when I am traveling. Support team is also good.' },
    { name: 'Dr. Saleem Ahmad', lab: 'Shifa Clinic', stars: 5, text: 'Customer support is very responsive. Whenever we have a doubt, they reply immediately. Software is working perfectly for our lab.' },
    { name: 'Dr. Shadan', lab: 'Healthcare', stars: 5, text: 'Total value for money. It has all the premium features like barcode and smart reports but doesn’t cost too much. Working smoothly since day one.' },
    { name: 'Dr. Abdullah', lab: 'Bhura Zarrah Health Care', stars: 5, text: 'It saves us a lot of manual entry time and avoids typing mistakes. The daily accounts report is also very helpful to track clinic revenue.' }
]

function StarRating({ count }: { count: number }) {
    return (
        <div style={{ display: 'flex', gap: 4 }}>
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
            ))}
        </div>
    )
}

export default function Testimonials() {
    // Split into two rows for the marquee effect (4 top, 4 bottom)
    const row1 = testimonials.slice(0, 4);
    const row2 = testimonials.slice(4, 8);

    return (
        <section className="testimonials-section" style={{ padding: '96px 0', background: '#f8fafc', overflow: 'hidden', width: '100%', boxSizing: 'border-box' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 64, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: 'var(--blue-primary, #3b82f6)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: "'DM Sans', sans-serif",
                        }}>
                            Testimonials
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 6vw, 42px)',
                        fontWeight: 800,
                        marginBottom: 16,
                        color: '#0f172a',
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: '-0.02em',
                        wordBreak: 'break-word'
                    }}>
                        Why Labs Love <span style={{ color: 'var(--blue-primary, #3b82f6)' }}>OnePath</span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 460,
                        margin: '0 auto',
                        fontSize: 'clamp(15px, 4vw, 17px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        Over 200+ labs trust us to run their daily operations. Here's what they say.
                    </p>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="marquee-wrapper">
                {/* Row 1 - Moves Left */}
                <div className="marquee-row marquee-left">
                    <div className="marquee-track">
                        {[...row1, ...row1].map((t, i) => (
                            <TestimonialCard key={`row1-${i}`} t={t} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Moves Right */}
                <div className="marquee-row marquee-right">
                    <div className="marquee-track">
                        {[...row2, ...row2].map((t, i) => (
                            <TestimonialCard key={`row2-${i}`} t={t} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .marquee-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    width: 100vw;
                    max-width: 100%; /* Strictly prevents overflow */
                    margin-left: calc(-50vw + 50%);
                    padding: 20px 0;
                    box-sizing: border-box;
                    overflow: hidden;
                }

                .marquee-row {
                    display: flex;
                    overflow: hidden;
                    width: 100%;
                    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                }

                .marquee-track {
                    display: flex;
                    gap: clamp(16px, 3vw, 32px);
                    width: max-content;
                }

                .marquee-left .marquee-track { animation: scroll-left 40s linear infinite; }
                .marquee-right .marquee-track { animation: scroll-right 40s linear infinite; }
                .marquee-row:hover .marquee-track { animation-play-state: paused; }

                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-50% - 16px)); }
                }

                @keyframes scroll-right {
                    from { transform: translateX(calc(-50% - 16px)); }
                    to { transform: translateX(0); }
                }

                .testimonial-card {
                    width: clamp(280px, 85vw, 400px); /* Fully fluid width for mobile */
                    padding: clamp(20px, 4vw, 32px);
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    flex-shrink: 0;
                    box-sizing: border-box;
                }

                .testimonial-card:hover {
                    transform: translateY(-4px);
                    border-color: #cbd5e1;
                    box-shadow: 0 12px 30px -10px rgba(0,0,0,0.08);
                }
                
                @media (max-width: 768px) {
                    .testimonials-section { padding: 60px 0 !important; }
                    .marquee-wrapper { margin-left: 0; width: 100%; padding: 10px 0; }
                    .marquee-row { mask-image: none; -webkit-mask-image: none; } /* Removes fading on small mobile to give more text space */
                }
            `}</style>
        </section>
    )
}

function TestimonialCard({ t }: { t: any }) {
    return (
        <div className="testimonial-card">
            <div style={{ position: 'absolute', top: 24, right: 24, color: '#f1f5f9', zIndex: 0 }}>
                <Quote size={48} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <StarRating count={t.stars} />
            </div>

            <p style={{
                color: '#475569',
                fontSize: 'clamp(14px, 3.5vw, 15px)',
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
                flex: 1,
                position: 'relative',
                zIndex: 1,
            }}>
                "{t.text}"
            </p>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                paddingTop: 20,
                borderTop: '1px solid #f1f5f9',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{
                    width: 44, height: 44,
                    borderRadius: '50%',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--blue-primary, #3b82f6)',
                    fontFamily: "'Syne', sans-serif",
                    flexShrink: 0,
                }}>
                    {t.name.split(' ')[1]?.charAt(0) || t.name.charAt(0)}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif", marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {t.name}
                    </div>
                    <div style={{ fontSize: 13, color: '#64748b', fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {t.lab}
                    </div>
                </div>
            </div>
        </div>
    )
}