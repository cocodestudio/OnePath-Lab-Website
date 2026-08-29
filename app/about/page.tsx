'use client'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Target, Lightbulb, ShieldCheck, Users, Award, TrendingUp, Globe, Heart, CheckCircle, ArrowRight, Microscope, Server, Clock, Star } from 'lucide-react'

const stats = [
  { value: '200+', label: 'Labs Onboarded', sub: 'Across India & abroad' },
  { value: '100K+', label: 'Reports Generated', sub: 'Every month automatically' },
  { value: '99.9%', label: 'Uptime SLA', sub: 'Enterprise-grade reliability' },
  { value: '4.8★', label: 'Avg. Rating', sub: 'From verified lab owners' },
]

const team = [
  { name: 'Moh Abuzar', role: 'CEO & Co-founder', bg: '#dbeafe', color: '#1d4ed8', initials: 'AM', desc: '6+ years in Software IT. Passionate about bringing scalable cloud infrastructure to regional diagnostics.' },
  { name: 'Dr. Mohd Zaid', role: 'Lab Technician', bg: '#fce7f3', color: '#be185d', initials: 'PS', desc: 'Msc Pathology. Ensures our software workflows meet strict medical and compliance standards.' },
  { name: 'Adeel Ahmad', role: 'Lead Architect', bg: '#dcfce7', color: '#15803d', initials: 'RV', desc: '6+ years building secure, high-volume cloud systems. Expert in HL7 protocols and LIS middleware.' },
  { name: 'Dr. Muzammil', role: 'Head - Startup Inspiration', bg: '#fef3c7', color: '#b45309', initials: 'SK', desc: 'Successfully trained and onboarded 200+ lab technicians. Deep expertise in daily lab operations.' },
]

const milestones = [
  { year: '2026', title: 'Founded in Ludhiana', desc: 'Started with a simple goal — replace outdated desktop software with a fast, cloud-based reporting system.' },
  { year: '2026', title: 'First 100 Labs', desc: 'Crossed 100 paid labs within 2 months. Successfully deployed our first bi-directional machine interfacing module.' },
  { year: '2026', title: 'Smart Reporting Engine', desc: 'Introduced automated abnormal value flagging, auto-calculations, and WhatsApp delivery integrations.' },
]

const values = [
  { icon: <Target size={24} />, title: 'Precision First', color: '#2563eb', bg: '#eff6ff', desc: 'In diagnostics, a single error can change a life. Our platform is engineered with zero-tolerance for data inaccuracies — from machine input to final report delivery.' },
  { icon: <ShieldCheck size={24} />, title: 'Uncompromised Security', color: '#0891b2', bg: '#ecfeff', desc: 'HIPAA-compliant, SSL-encrypted, and ISO 27001 certified infrastructure. Your patient data never leaves secure servers without explicit authorization.' },
  { icon: <Lightbulb size={24} />, title: 'Practical Innovation', color: '#7c3aed', bg: '#f5f3ff', desc: 'We do not build features for hype. We build tools that save time. From barcode workflows to bulk B2B billing, every update solves a real operational pain point.' },
  { icon: <Users size={24} />, title: 'Customer Obsession', color: '#059669', bg: '#ecfdf5', desc: 'Software is only as good as the support behind it. We provide dedicated onboarding and highly responsive technical support to keep your lab running 24/7.' },
  { icon: <Heart size={24} />, title: 'Humanizing Healthcare', color: '#dc2626', bg: '#fef2f2', desc: 'Behind every test report is a patient waiting anxiously. We design our workflows to ensure reports reach patients as fast and as clearly as possible.' },
  { icon: <Globe size={24} />, title: 'Accessible to All', color: '#d97706', bg: '#fffbeb', desc: 'Our pricing is structured so a single-doctor lab in a Tier-3 town gets the same enterprise-grade software power as a large hospital chain. Healthcare equity matters.' },
]

export default function AboutUs() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{
        padding: '160px 20px 100px',
        background: 'linear-gradient(160deg, #ffffff 0%, #eff6ff 60%, #e0eaff 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(219,234,254,0.6) 0%,transparent 70%)', top: -100, right: -100, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(224,234,255,0.5) 0%,transparent 70%)', bottom: -50, left: -80, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#ffffff', border: '1px solid #e2e8f0',
            borderRadius: 100, padding: '6px 18px',
            fontSize: 13, fontWeight: 600, color: '#2563eb',
            fontFamily: "'DM Sans',sans-serif",
            marginBottom: 28,
            boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse-dot 2s infinite' }} />
            Our Mission & Story
          </div>

          <h1 style={{
            fontSize: 'clamp(40px,6vw,64px)',
            fontWeight: 800, color: '#0f172a',
            fontFamily: "'Syne',sans-serif",
            marginBottom: 24, letterSpacing: '-0.03em', lineHeight: 1.1,
          }}>
            We're Building the Future of
            <br />
            <span style={{ color: '#2563eb' }}>Diagnostics in India</span>
          </h1>
          <p style={{
            fontSize: 'clamp(16px,2vw,19px)', color: '#475569',
            lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif",
            maxWidth: 640, margin: '0 auto',
          }}>
            OnePath Lab is a cloud-based Laboratory Information System built by doctors, engineers, and lab experts who believe diagnostic centers deserve reliable, enterprise-grade software — at an accessible price.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ padding: '0 20px', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 0,
            background: '#ffffff',
            borderRadius: 20,
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 60px -15px rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '32px 28px',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid #f1f5f9' : 'none',
                background: i % 2 === 0 ? '#ffffff' : '#fafbff',
              }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#2563eb', fontFamily: "'Syne',sans-serif", letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans',sans-serif", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: "'DM Sans',sans-serif" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section style={{ padding: '96px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="about-grid">
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 12, fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#2563eb',
              background: '#eff6ff', border: '1px solid #dbeafe',
              padding: '5px 14px', borderRadius: 100, marginBottom: 20,
              fontFamily: "'DM Sans',sans-serif",
            }}>Our Story</span>

            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 20, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Born from a Lab Owner's Frustration
            </h2>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.85, marginBottom: 18, fontFamily: "'DM Sans',sans-serif" }}>
              In 2026, our founders visited multiple pathology labs across North India and saw a recurring problem: technicians were manually typing hundreds of patient reports into outdated, crash-prone desktop software, then printing and physically handing them over.
            </p>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.85, marginBottom: 18, fontFamily: "'DM Sans',sans-serif" }}>
              Patients waited 3-4 hours for reports that could have been generated and delivered via WhatsApp in 4 minutes. The root cause? Indian lab software hadn't evolved in a decade.
            </p>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.85, marginBottom: 32, fontFamily: "'DM Sans',sans-serif" }}>
              That moment sparked OnePath Lab. We assembled a team of software engineers and NABL-trained pathologists to rebuild lab management from scratch — making it cloud-native, automated, and incredibly easy to use.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Built with real lab owners, for real labs', 'Seamless bidirectional machine interfacing', 'Dedicated human support team — not just a chatbot'].map(pt => (
                <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: '#334155', fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }}>
                  <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                  {pt}
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: <Microscope size={20} />, title: 'Built for the Indian Ecosystem', desc: 'Solving real challenges — from NABL audit compliances to handling complex B2B referral commissions.', color: '#2563eb', bg: '#eff6ff' },
              { icon: <Server size={20} />, title: 'Cloud-First Architecture', desc: 'No local server installations or data loss fears. Access your lab data securely from your phone, anywhere in the world.', color: '#7c3aed', bg: '#f5f3ff' },
              { icon: <Clock size={20} />, title: '4-Minute Turnaround Time', desc: 'From analyzer output to patient WhatsApp delivery in under 4 minutes — drastically improving patient satisfaction.', color: '#059669', bg: '#ecfdf5' },
            ].map((c, i) => (
              <div key={i} style={{
                background: '#ffffff', border: '1px solid #e2e8f0',
                borderRadius: 16, padding: '24px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
                boxShadow: '0 4px 20px -8px rgba(0,0,0,0.08)',
                transition: 'all 0.2s ease',
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 6 }}>{c.title}</div>
                  <div style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.65, fontFamily: "'DM Sans',sans-serif" }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563eb', background: '#eff6ff', border: '1px solid #dbeafe', padding: '5px 14px', borderRadius: 100, marginBottom: 16, fontFamily: "'DM Sans',sans-serif" }}>Journey</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", letterSpacing: '-0.02em' }}>
              From Idea to India's Trusted LIS
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: 40 }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 16, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, #2563eb, #93c5fd)', borderRadius: 2 }} />

            {milestones.map((m, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: 40 }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -32, top: 6,
                  width: 14, height: 14, borderRadius: '50%',
                  background: '#2563eb',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 0 3px #bfdbfe',
                }} />
                <div style={{ background: '#ffffff', borderRadius: 16, padding: '24px 28px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px -6px rgba(0,0,0,0.07)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: '#2563eb', background: '#eff6ff', padding: '3px 12px', borderRadius: 100, fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.05em' }}>{m.year}</span>
                    <span style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif" }}>{m.title}</span>
                  </div>
                  <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ padding: '96px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563eb', background: '#eff6ff', border: '1px solid #dbeafe', padding: '5px 14px', borderRadius: 100, marginBottom: 16, fontFamily: "'DM Sans',sans-serif" }}>Core Values</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", letterSpacing: '-0.02em' }}>What We Stand For</h2>
            <p style={{ color: '#64748b', maxWidth: 480, margin: '12px auto 0', fontSize: 16, lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif" }}>Six principles that guide every product decision, every support call, and every line of code we write.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} style={{ padding: '32px', background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0', transition: 'all 0.25s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px -10px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = v.color + '40'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                <div style={{ width: 52, height: 52, background: v.bg, color: v.color, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ padding: '96px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563eb', background: '#eff6ff', border: '1px solid #dbeafe', padding: '5px 14px', borderRadius: 100, marginBottom: 16, fontFamily: "'DM Sans',sans-serif" }}>Leadership</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", letterSpacing: '-0.02em' }}>The Team Behind OnePath</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {team.map((t, i) => (
              <div key={i} style={{ background: '#ffffff', borderRadius: 20, padding: '32px 24px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.07)', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px -8px rgba(0,0,0,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px -8px rgba(0,0,0,0.07)' }}
              >
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: t.bg, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24, fontWeight: 800, fontFamily: "'Syne',sans-serif" }}>{t.initials}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 4 }}>{t.name}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#2563eb', fontFamily: "'DM Sans',sans-serif", marginBottom: 14 }}>{t.role}</div>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg,#1e40af 0%,#2563eb 100%)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#ffffff', fontFamily: "'Syne',sans-serif", marginBottom: 16, letterSpacing: '-0.02em' }}>
            Ready to Transform Your Lab?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif", marginBottom: 36 }}>
            Join 200+ labs already running on OnePath. Get started with a free 5-day trial — no credit card required.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/trial" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', color: '#1d4ed8', textDecoration: 'none', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 50, fontFamily: "'DM Sans',sans-serif", boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'all 0.2s' }}>
              Start Free Trial <ArrowRight size={16} />
            </a>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.15)', color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: 15, padding: '14px 32px', borderRadius: 50, fontFamily: "'DM Sans',sans-serif", border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.2s' }}>
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  )
}