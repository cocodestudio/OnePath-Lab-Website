'use client'
import { Server, AlertCircle, UserCheck, FileSignature, Send } from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: <Server size={20} />,
        title: 'Direct Machine Integration',
        desc: 'Test data is automatically fetched from cell counters and biochemistry analyzers, eliminating manual entry completely.',
    },
    {
        number: '02',
        icon: <AlertCircle size={20} />,
        title: 'Auto-Flagging & Calculation',
        desc: 'System automatically calculates derived parameters and highlights abnormal values in red based on age/gender reference ranges.',
    },
    {
        number: '03',
        icon: <UserCheck size={20} />,
        title: 'Technician Verification',
        desc: 'Lab technicians cross-verify fetched results, input any manual parameters, and prepare the draft report.',
    },
    {
        number: '04',
        icon: <FileSignature size={20} />,
        title: 'Digital Approval',
        desc: 'Pathologists review the draft, add specific clinical notes if needed, and authorize the report with a secure digital signature.',
    },
    {
        number: '05',
        icon: <Send size={20} />,
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
                background: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <div style={{
                position: 'absolute',
                width: 'min(600px, 100vw)', height: 'min(600px, 100vw)',
                background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 920, margin: '0 auto', boxSizing: 'border-box' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 60px)', padding: '0 10px' }}>
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
                            Operational Lifecycle
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
                        End-to-End Automated <span style={{
                            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>Workflow</span>
                    </h2>
                    <p style={{
                        color: '#64748b',
                        maxWidth: 520,
                        margin: '0 auto',
                        fontSize: 'clamp(14.5px, 2.5vw, 17px)',
                        lineHeight: 1.65,
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                        From analyzer reading to patient WhatsApp delivery — fully automated, human-verified, and dispatched in minutes.
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
                                gap: 'clamp(14px, 3.5vw, 22px)',
                                alignItems: 'flex-start',
                                position: 'relative',
                                width: '100%',
                                boxSizing: 'border-box'
                            }}
                        >
                            {/* Left: Icon & Line */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                                <div className="step-icon-box" style={{
                                    width: 'clamp(44px, 9vw, 54px)',
                                    height: 'clamp(44px, 9vw, 54px)',
                                    borderRadius: 14,
                                    background: '#ffffff',
                                    border: '1.5px solid #e2e8f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#2563eb',
                                    flexDirection: 'column',
                                    gap: 2,
                                    boxShadow: '0 4px 12px rgba(15,23,42,0.04)',
                                    transition: 'all 0.25s ease',
                                    zIndex: 2,
                                    position: 'relative'
                                }}>
                                    <span style={{ color: '#94a3b8', fontSize: 'clamp(9px, 2vw, 10px)', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        {step.number}
                                    </span>
                                    {step.icon}
                                </div>

                                {/* Vertical Connecting Line */}
                                {i < steps.length - 1 && (
                                    <div className="connecting-line" style={{
                                        width: 2,
                                        height: 'clamp(32px, 8vw, 48px)',
                                        background: 'linear-gradient(to bottom, #cbd5e1, rgba(203,213,225,0.25))',
                                        margin: '6px 0',
                                        borderRadius: 2,
                                    }} />
                                )}
                            </div>

                            {/* Right: Text Content */}
                            <div className="step-content" style={{
                                padding: 'clamp(2px, 1vw, 8px) 0 32px 0',
                                flex: 1,
                                minWidth: 0,
                                transition: 'transform 0.25s ease',
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(16px, 4vw, 19px)',
                                    fontWeight: 700,
                                    marginBottom: 6,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    color: '#0f172a',
                                    wordBreak: 'break-word',
                                    letterSpacing: '-0.02em',
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    color: '#64748b',
                                    fontSize: 'clamp(13.5px, 2.5vw, 15px)',
                                    lineHeight: 1.65,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    margin: 0,
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
                    box-shadow: 0 8px 24px -4px rgba(37, 99, 235, 0.2) !important;
                    transform: translateY(-2px);
                }
                .workflow-step:hover .step-content {
                    transform: translateX(3px);
                }

                @media (max-width: 768px) {
                    .workflow-section { padding: 56px 16px !important; }
                    .workflow-step:hover .step-content { transform: none; } 
                }
            `}} />
        </section>
    )
}