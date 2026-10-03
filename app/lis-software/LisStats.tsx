'use client'

import { useState, useEffect, useRef } from 'react'

function useCounter(end: number, duration: number = 2000, start: boolean = false) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!start) return
        let startTime: number
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [end, duration, start])
    return count
}

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true) },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])
    return { ref, inView }
}

export default function LisStats() {
    const statsRef = useInView()
    const c1 = useCounter(200, 1600, statsRef.inView)
    const c2 = useCounter(10, 1800, statsRef.inView)
    const c3 = useCounter(99, 1600, statsRef.inView)
    const c4 = useCounter(200, 1400, statsRef.inView)

    const stats = [
        { value: c1, suffix: '+', label: 'Labs Onboarded', sub: 'Across India & abroad', color: '#2563eb' },
        { value: c2, suffix: '0K+', label: 'Reports / Month', sub: 'Processed seamlessly', color: '#7c3aed' },
        { value: c3, suffix: '.9%', label: 'Uptime SLA', sub: 'Enterprise reliability', color: '#059669' },
        { value: c4, suffix: '+', label: 'Analyzer Models', sub: 'Machine interfacing', color: '#d97706' },
    ]

    return (
        <section style={{ padding: '0 20px', marginTop: '-36px', position: 'relative', zIndex: 10 }}>
            <div ref={statsRef.ref} style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                {stats.map((s, i) => (
                    <div key={i} style={{ padding: '32px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid #f1f5f9' : 'none' }}>
                        <div style={{ fontSize: 40, fontWeight: 800, color: s.color, fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>
                            {s.value}{s.suffix}
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 3 }}>{s.label}</div>
                        <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.sub}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
