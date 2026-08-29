'use client'
import { Server, AlertCircle, UserCheck, FileSignature, Send } from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: <Server size={22} />,
        title: 'Direct Machine Integration',
        desc: 'Test data is automatically fetched from cell counters and biochemistry analyzers, eliminating manual entry completely.',
    },
    {
        number: '02',
        icon: <AlertCircle size={22} />,
        title: 'Auto-Flagging & Calculation',
        desc: 'System automatically calculates derived parameters and highlights abnormal values in red based on age/gender reference ranges.',
    },
    {
        number: '03',
        icon: <UserCheck size={22} />,
        title: 'Technician Review',
        desc: 'Lab technicians cross-verify fetched results, input any manual parameters, and prepare the draft report.',
    },
    {
        number: '04',
        icon: <FileSignature size={22} />,
        title: 'Digital Approval',
        desc: 'Pathologists review the draft, add specific clinical notes if needed, and authorize the report with a secure digital signature.',
    },
    {
        number: '05',
        icon: <Send size={22} />,
        title: 'Automated Dispatch',
        desc: 'Final PDF reports with QR codes are instantly delivered to the patient’s and doctor’s WhatsApp, SMS, and email.',
    },
]

export default function Workflow() {
    return (
        <section
            id="workflow"
            className="workflow-section"
            style={{
                padding: '96px 20px',
                background: 'linear-gradient(180deg, #ffffff 0%, #f4f7fe 50%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <div style={{
                position: 'absolute',
                width: 'min(600px, 100vw)', height: 'min(600px, 100vw)',
                background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', boxSizing: 'border-box' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)', padding: '0 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            color: 'var(--blue-primary, #3b82f6)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                        }}>
                            Reporting Workflow
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(28px, 6vw, 42px)',
                        fontWeight: 800,
                        marginBottom: 16,
                        color: '#0f172a',
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: '-0.02em',
                        wordBreak: 'break-word',
                    }}>
                        End-to-End Automated <span style={{ color: 'var(--blue-primary, #3b82f6)' }}>Workflow</span>
                    </h2>
                    <p style={{
                        color: '#64748b',
                        maxWidth: 500,
                        margin: '0 auto',
                        fontSize: 'clamp(14px, 4vw, 17px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        From machine integration to patient delivery — fully automated, human-verified, and dispatched in minutes.
                    </p>
                </div>

                {/* Steps Mapping */}
                <div style={{ maxWidth: 760, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            className="workflow-step"
                            style={{
                                display: 'flex',
                                gap: 'clamp(16px, 4vw, 24px)', // Fluid gap for mobile
                                alignItems: 'flex-start',
                                position: 'relative',
                                width: '100%',
                                boxSizing: 'border-box'
                            }}
                        >
                            {/* Left Side: Number, Icon & Connecting Line */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                                <div className="step-icon-box" style={{
                                    width: 'clamp(46px, 10vw, 56px)',
                                    height: 'clamp(46px, 10vw, 56px)',
                                    borderRadius: 16,
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--blue-primary, #3b82f6)',
                                    flexDirection: 'column',
                                    gap: 2,
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                    zIndex: 2,
                                    position: 'relative'
                                }}>
                                    <span style={{ color: '#94a3b8', fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>
                                        {step.number}
                                    </span>
                                    {step.icon}
                                </div>

                                {/* Vertical Connecting Line */}
                                {i < steps.length - 1 && (
                                    <div className="connecting-line" style={{
                                        width: 2,
                                        height: 'clamp(30px, 8vw, 50px)', // Scales naturally
                                        background: 'linear-gradient(to bottom, #cbd5e1, rgba(203,213,225,0.2))',
                                        margin: '8px 0',
                                        borderRadius: 2,
                                    }} />
                                )}
                            </div>

                            {/* Right Side: Text Content */}
                            <div className="step-content" style={{
                                padding: 'clamp(4px, 1vw, 10px) 0 32px 0',
                                flex: 1,
                                minWidth: 0, // Solves flexbox text overflow issues
                                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(16px, 4.5vw, 19px)',
                                    fontWeight: 700,
                                    marginBottom: 8,
                                    fontFamily: "'Syne', sans-serif",
                                    color: '#0f172a',
                                    wordBreak: 'break-word',
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    color: '#64748b',
                                    fontSize: 'clamp(13.5px, 3.5vw, 15.5px)',
                                    lineHeight: 1.6,
                                    fontFamily: "'DM Sans', sans-serif",
                                }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .workflow-step:hover .step-icon-box {
                    border-color: #93c5fd !important;
                    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15) !important;
                    transform: translateY(-2px);
                }
                .workflow-step:hover .step-content {
                    transform: translateX(4px);
                }

                @media (max-width: 768px) {
                    .workflow-section { padding: 60px 15px !important; }
                    /* Disable text shifting on touch devices to prevent layout jumps */
                    .workflow-step:hover .step-content { transform: none; } 
                }
            `}} />
        </section>
    )
}