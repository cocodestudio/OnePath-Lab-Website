export interface FAQItem {
    question: string;
    answer: string;
}

export const faqsData: FAQItem[] = [
    {
        question: "How does Bi-directional Machine Interfacing work in OnePath Lab?",
        answer: "OnePath provides a lightweight bridge agent (onepath-bridge) that connects directly with over 200+ hematology, biochemistry, and immunoassay analyzers (Sysmex, Mindray, Erba, Roche, Abbott, Beckman Coulter) using standard ASTM and HL7 protocols. Test results flow directly from the machine into patient reports, eliminating manual typing and transcription errors."
    },
    {
        question: "Is OnePath Lab certified for Ayushman Bharat Digital Mission (ABDM / ABHA)?",
        answer: "Yes! OnePath Lab is fully integrated with ABDM M1 (Milestone 1) and Health Facility Registry (HFR). You can verify patient ABHA numbers via Aadhaar OTP, link diagnostic records to the National Health Locker, and automatically claim the Govt. of India Digital Health Incentive Scheme (DHIS) cash incentives per digital transaction."
    },
    {
        question: "How does the Dual AI Clinical Copilot assist pathologists?",
        answer: "Our dual-engine AI system (Gemini + Groq with automatic failover) analyzes parameter values against age and gender reference intervals. It automatically drafts pathological impressions, flags critical life-threatening values with panic alerts, and performs delta checks by comparing today's values against the patient's previous historical reports."
    },
    {
        question: "Can patient reports be sent directly on WhatsApp with digital signatures?",
        answer: "Yes. Once the pathologist authorizes a report using their secure digital signature, an automated high-resolution PDF is generated with an encrypted verification QR code. This report is dispatched instantly via official WhatsApp API and SMS to both the patient and referring doctor within 3 seconds."
    },
    {
        question: "Can I manage multiple collection centers and B2B franchise labs?",
        answer: "Absolutely. OnePath Lab includes a dedicated B2B Partner Portal with a prepaid wallet system. You can assign different rate lists for different franchise partners. The system automatically calculates their commission margins and uses a 'deduct-and-print' model, ensuring you never run into unpaid partner receivables."
    },
    {
        question: "How does the 7-Day Free Trial work? Are there setup fees?",
        answer: "You get full, unrestricted access to the complete OnePath Lab LIS suite for 7 days. No credit card is required, and there are zero setup fees. You can register patients, test machine interfacing, customize letterheads, and dispatch WhatsApp reports immediately upon signing up."
    }
]
