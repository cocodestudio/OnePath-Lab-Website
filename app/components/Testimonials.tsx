'use client'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    { name: 'Dr. Abdul Qadir', lab: 'New Life Nursing Home', stars: 5, text: 'Very easy to use. My staff learned it in just one day. The print quality of the reports is excellent and patients are very satisfied with instant WhatsApp delivery.' },
    { name: 'Dr. Mozzam Rasheed', lab: 'Darul Shifa Clinic', stars: 5, text: 'The WhatsApp report feature is a lifesaver. Patients get their results directly on their phones without waiting. Very happy with the software.' },
    { name: 'Dr. A Raheem', lab: 'Child Health Care', stars: 5, text: 'We were facing issues with our old software crashing, but OnePath fixed everything. The interface is clean, works fast, and never hangs during rush hours.' },
    { name: 'Dr. Samshad Malik', lab: 'Child Health Care', stars: 5, text: 'Great software for our daily operations. Billing and report generation is very fast now. Highly recommended for small and medium diagnostic setups.' },
    { name: 'Dr. M Hamid', lab: 'Zarrah Clinic', stars: 5, text: 'Checking reports on mobile is the best feature for me. I can review and authorize reports even when I am traveling. Support team is also very helpful.' },
    { name: 'Dr. Saleem Ahmad', lab: 'Shifa Clinic', stars: 5, text: 'Customer support is very responsive. Whenever we have a doubt, they reply immediately. Software is working perfectly for our lab.' },
    { name: 'Dr. Shadan', lab: 'Healthcare Diagnostics', stars: 5, text: 'Total value for money. It has all the premium features like barcode generation and smart reports but doesn’t cost too much. Working smoothly since day one.' },
    { name: 'Dr. Abdullah', lab: 'Bhura Zarrah Health Care', stars: 5, text: 'It saves us a lot of manual entry time and avoids typing mistakes. The daily accounts report is also very helpful to track clinic revenue.' }
]

function StarRating({ count }: { count: number }) {
    return (
        <div style={{ display: 'flex', gap: 3 }}>
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
            ))}
        </div>
    )
}

export default function Testimonials() {
    const row1 = testimonials.slice(0, 4)
    const row2 = testimonials.slice(4, 8)

    return (
        <section className="testimonials-section" style={{ padding: '96px 0', background: '#f8fafc', overflow: 'hidden', width: '100%', boxSizing: 'border-box' }}>
            <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: '#2563eb',
                            padding: '6px 16px',
                            borderRadius: 999,
                            fontSize: 12.5,
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                            Doctor Reviews
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 5.5vw, 42px)',
                        fontWeight: 800,
                        marginBottom: 14,
                        color: '#0f172a',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        letterSpacing: '-0.03em',
                        wordBreak: 'break-word',
                        lineHeight: 1.2,
                    }}>
                        Why Diagnostic Labs Love <span style={{
                            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>OnePath</span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 480,
                        margin: '0 auto',
                        fontSize: 'clamp(14.5px, 2.5vw, 17px)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                        Over 200+ labs trust us to run their daily registrations, reporting, and accounting. Here is what they say.
                    </p>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="marquee-wrapper">
                {/* Row 1 */}
                <div className="marquee-row marquee-left">
                    <div className="marquee-track">
                        {[...row1, ...row1].map((t, i) => (
                            <TestimonialCard key={`row1-${i}`} t={t} />
                        ))}
                    </div>
                </div>

                {/* Row 2 */}
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
                    gap: 24px;
                    width: 100vw;
                    max-width: 100%;
                    padding: 10px 0;
                    box-sizing: border-box;
                    overflow: hidden;
                }

                .marquee-row {
                    display: flex;
                    overflow: hidden;
                    width: 100%;
                    mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
                }

                .marquee-track {
                    display: flex;
                    gap: clamp(14px, 3vw, 24px);
                    width: max-content;
                }

                .marquee-left .marquee-track { animation: scroll-left 36s linear infinite; }
                .marquee-right .marquee-track { animation: scroll-right 36s linear infinite; }
                .marquee-row:hover .marquee-track { animation-play-state: paused; }

                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-50% - 12px)); }
                }

                @keyframes scroll-right {
                    from { transform: translateX(calc(-50% - 12px)); }
                    to { transform: translateX(0); }
                }

                .testimonial-card {
                    width: clamp(270px, 84vw, 380px);
                    padding: clamp(20px, 4vw, 28px);
                    background: '#ffffff';
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    flex-shrink: 0;
                    box-sizing: border-box;
                }

                .testimonial-card:hover {
                    transform: translateY(-3px);
                    border-color: #cbd5e1;
                    box-shadow: 0 12px 30px -10px rgba(15,23,42,0.08);
                }
                
                @media (max-width: 768px) {
                    .testimonials-section { padding: 56px 0 !important; }
                    .marquee-row { mask-image: none; -webkit-mask-image: none; }
                }
            `}</style>
        </section>
    )
}

function TestimonialCard({ t }: { t: any }) {
    return (
        <div className="testimonial-card" style={{ background: '#ffffff' }}>
            <div style={{ position: 'absolute', top: 20, right: 20, color: '#f1f5f9', zIndex: 0 }}>
                <Quote size={40} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <StarRating count={t.stars} />
            </div>

            <p style={{
                color: '#475569',
                fontSize: 'clamp(13.5px, 2vw, 14.5px)',
                lineHeight: 1.65,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                flex: 1,
                position: 'relative',
                zIndex: 1,
                margin: 0,
            }}>
                "{t.text}"
            </p>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                paddingTop: 16,
                borderTop: '1px solid #f1f5f9',
                position: 'relative',
                zIndex: 1,
            }}>
                <div style={{
                    width: 40, height: 40,
                    borderRadius: '50%',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 800,
                    color: '#2563eb',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    flexShrink: 0,
                }}>
                    {t.name.split(' ')[1]?.charAt(0) || t.name.charAt(0)}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {t.name}
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b', fontFamily: "'Plus Jakarta Sans', sans-serif", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {t.lab}
                    </div>
                </div>
            </div>
        </div>
    )
}