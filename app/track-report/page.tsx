'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReportSheet } from '../components/ReportSheet'
import { getCleanLetterheadUrl } from '../lib/api-client'
import { useReactToPrint } from 'react-to-print'
import {
  Search, FileText, CheckCircle2, Clock, AlertCircle, Download,
  ShieldCheck, Lock, Activity, CreditCard, X, AlertTriangle,
  Check, RefreshCw, Building2, ArrowRight, Sparkles, ZoomIn, ZoomOut, Eye
} from 'lucide-react'

interface ToastState {
  id: number
  title: string
  message: string
  variant: 'error' | 'warning' | 'info' | 'success'
}

export default function TrackReportPage() {
  const printRef = useRef<HTMLDivElement>(null)
  const [reportIdInput, setReportIdInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [report, setReport] = useState<any | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [toasts, setToasts] = useState<ToastState[]>([])
  const [isInitiatingPayment, setIsInitiatingPayment] = useState(false)
  const [reportScale, setReportScale] = useState(1)

  // Auto-compute responsive scale to fit screen
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const computeFitScale = () => {
      const screenW = window.innerWidth;
      if (screenW < 840) {
        const padding = screenW < 480 ? 24 : 48;
        const availableW = Math.max(280, screenW - padding);
        const computed = Math.min(1, Math.max(0.35, availableW / 794));
        setReportScale(Number(computed.toFixed(2)));
      } else {
        setReportScale(1);
      }
    };

    computeFitScale();
    window.addEventListener('resize', computeFitScale);
    return () => window.removeEventListener('resize', computeFitScale);
  }, [report]);

  // Floating Side Toast alert
  const showToast = (title: string, message: string, variant: 'error' | 'warning' | 'info' | 'success' = 'warning') => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, title, message, variant }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
  }

  // Fetch report details by ID
  const fetchReportById = async (cleanId: string) => {
    setIsLoading(true)
    setFetchError(null)

    try {
      const apiOrigin = process.env.NEXT_PUBLIC_API_URL
        ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
        : "http://localhost:8000"

      const res = await fetch(`${apiOrigin}/api/lis/public/reports/${encodeURIComponent(cleanId)}`, {
        headers: { "Accept": "application/json" }
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.error || errData.message || `No record found for Report ID "${cleanId}". Please check the ID on your receipt.`)
      }

      const data = await res.json()
      setReport(data)
      return data
    } catch (err: any) {
      setReport(null)
      setFetchError(err.message || "Unable to fetch report. Please check the ID and try again.")
      showToast("Report Not Found", err.message || "Invalid Report ID. Please verify.", "error")
      return null
    } finally {
      setIsLoading(false)
    }
  }

  // Auto-detect URL parameters (payment=success or payment=failed)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const reportIdFromUrl = params.get('id')
    const paymentStatus = params.get('payment')
    const errorMsg = params.get('msg')

    if (reportIdFromUrl) {
      const clean = reportIdFromUrl.trim()
      setReportIdInput(clean)
      fetchReportById(clean)
    }

    if (paymentStatus === 'success') {
      showToast(
        "Payment Successful!",
        "Your bill has been cleared via PayU. Report PDF download is now unlocked.",
        "success"
      )
    } else if (paymentStatus === 'failed') {
      showToast(
        "Payment Incomplete",
        errorMsg ? decodeURIComponent(errorMsg) : "Payment was cancelled or could not be verified. Please try again.",
        "error"
      )
    }
  }, [])

  // Handle Track Form submit
  const handleTrack = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const cleanId = reportIdInput.trim()
    if (!cleanId) {
      showToast("Input Required", "Please enter your Report ID (e.g. OPL100001).", "warning")
      return
    }

    const data = await fetchReportById(cleanId)
    if (data) {
      showToast("Report Loaded", `Report #${data.customId || data.custom_id || cleanId} retrieved successfully.`, "success")
    }
  }

  // Dynamic Step calculation (1: Sample Registered, 2: Final, 3: Approved)
  const currentStep = useMemo(() => {
    if (!report) return 1
    const status = (report.status || "").toUpperCase()
    if (status === "APPROVED" || status === "COMPLETED") {
      return 3 // Step 3: Approved
    }
    if (status === "FINAL") {
      return 2 // Step 2: Final
    }
    return 1 // Step 1: Sample Registered (PENDING / Draft)
  }, [report?.status])

  // Billing & Payment Details
  const billingInfo = useMemo(() => {
    if (!report) return null
    const bill = report.bill || {}
    const total = Number(bill.total || 0)
    const paid = Number(bill.paid_amount || bill.paidAmount || 0)
    const due = Math.max(0, total - paid)
    const rawStatus = (bill.status || bill.payment_status || bill.paymentStatus || "").toUpperCase()
    const isPaid = rawStatus === 'PAID' || due <= 0

    return {
      total,
      paid,
      due,
      status: isPaid ? 'PAID' : (paid > 0 ? 'PARTIAL' : 'UNPAID'),
      isPaid,
      billId: bill.custom_id || bill.customId || "INV-RECEIPT"
    }
  }, [report])

  // Convenience fee (2% extra) calculation
  const dueAmount = billingInfo ? billingInfo.due : 0;
  const convenienceFee = Number((dueAmount * 0.02).toFixed(2));
  const totalPayable = Number((dueAmount + convenienceFee).toFixed(2));

  const patient = report?.patient || {};
  const lab = report?.lab || {};

  const [letterheadBase64, setLetterheadBase64] = useState<string | null>(null);

  // Pre-convert letterhead image into base64 Data URL so browser print renders it 100% reliably
  useEffect(() => {
    const rawBg = lab?.print_bg_image || lab?.printBgImage;
    const cleanUrl = getCleanLetterheadUrl(rawBg);
    if (!cleanUrl) {
      setLetterheadBase64(null);
      return;
    }

    if (cleanUrl.startsWith("data:")) {
      setLetterheadBase64(cleanUrl);
      return;
    }

    let isMounted = true;
    const convert = async () => {
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth || 794;
            canvas.height = img.naturalHeight || 1123;
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.drawImage(img, 0, 0);
              const dataUrl = canvas.toDataURL("image/png");
              if (isMounted) setLetterheadBase64(dataUrl);
            }
          } catch {
            if (isMounted) setLetterheadBase64(cleanUrl);
          }
        };
        img.onerror = () => {
          if (isMounted) setLetterheadBase64(cleanUrl);
        };
        img.src = cleanUrl;
      } catch {
        if (isMounted) setLetterheadBase64(cleanUrl);
      }
    };

    convert();
    return () => { isMounted = false; };
  }, [lab]);

  const sheetData = useMemo(() => {
    if (!report) return null;
    const bg = letterheadBase64 || getCleanLetterheadUrl(lab.print_bg_image || lab.printBgImage);
    return {
      id: report.id,
      customId: report.custom_id || report.customId,
      status: report.status,
      reportDate: report.report_date || report.reportDate,
      createdAt: report.created_at || report.createdAt,
      patient: {
        id: patient.id,
        name: patient.name,
        customId: patient.custom_id || patient.customId,
        age: patient.age,
        gender: patient.gender,
        phone: patient.phone,
        refDoctor: patient.ref_doctor || patient.refDoctor,
        address: patient.address,
        collectedAt: patient.collected_at || patient.collectedAt,
      },
      results: (report.results || []).map((r: any) => ({
        id: r.id,
        resultValue: r.result_value ?? r.resultValue,
        isAbnormal: Boolean(r.is_abnormal ?? r.isAbnormal),
        remarks: r.remarks,
        test: {
          id: r.test?.id,
          name: r.test?.name,
          category: r.test?.category,
          price: r.test?.price || 0,
          unit: r.test?.unit || "",
          interpretation: r.test?.interpretation,
          comment: r.test?.comment,
          notes: r.test?.notes,
          method: r.test?.method,
          fieldType: r.test?.field_type || r.test?.fieldType,
          rangeType: r.test?.range_type || r.test?.rangeType,
          textRefRange: r.test?.text_ref_range || r.test?.textRefRange,
          genderRefType: r.test?.gender_ref_type || r.test?.genderRefType,
          refRangeMin: r.test?.ref_range_min ?? r.test?.refRangeMin ?? 0,
          refRangeMax: r.test?.ref_range_max ?? r.test?.refRangeMax ?? 0,
          refRangeMinMale: r.test?.ref_range_min_male ?? r.test?.refRangeMinMale,
          refRangeMaxMale: r.test?.ref_range_max_male ?? r.test?.refRangeMaxMale,
          refRangeMinFemale: r.test?.ref_range_min_female ?? r.test?.refRangeMinFemale,
          refRangeMaxFemale: r.test?.ref_range_max_female ?? r.test?.refRangeMaxFemale,
          refRangeMinChild: r.test?.ref_range_min_child ?? r.test?.refRangeMinChild,
          refRangeMaxChild: r.test?.ref_range_max_child ?? r.test?.refRangeMaxChild,
          refRangeMinNewborn: r.test?.ref_range_min_newborn ?? r.test?.refRangeMinNewborn,
          refRangeMaxNewborn: r.test?.ref_range_max_newborn ?? r.test?.refRangeMaxNewborn,
          ageRanges: r.test?.age_ranges || r.test?.ageRanges,
          valueType: r.test?.value_type || r.test?.valueType,
          customOptions: r.test?.custom_options || r.test?.customOptions,
          sortOrder: r.test?.sort_order ?? r.test?.sortOrder,
          isHidden: r.test?.is_hidden ?? r.test?.isHidden,
          parent: r.test?.parent ? {
            id: r.test.parent.id,
            name: r.test.parent.name,
            method: r.test.parent.method,
            interpretation: r.test.parent.interpretation,
            comment: r.test.parent.comment,
            notes: r.test.parent.notes,
            sortOrder: r.test.parent.sort_order ?? r.test.parent.sortOrder,
            isHidden: r.test.parent.is_hidden ?? r.test.parent.isHidden,
            parent: r.test.parent.parent ? {
              id: r.test.parent.parent.id,
              name: r.test.parent.parent.name,
              method: r.test.parent.parent.method,
              interpretation: r.test.parent.parent.interpretation,
              comment: r.test.parent.parent.comment,
              notes: r.test.parent.parent.notes,
              sortOrder: r.test.parent.parent.sort_order ?? r.test.parent.parent.sortOrder,
              isHidden: r.test.parent.parent.is_hidden ?? r.test.parent.parent.isHidden,
            } : undefined
          } : undefined
        }
      })),
      printedInterpretations: report.printed_interpretations || report.printedInterpretations,
      testNotes: report.test_notes || report.testNotes,
      lab: {
        name: lab.name || "OnePath Diagnostic Laboratory",
        email: lab.email || "info@onepathlab.com",
        address: lab.address || "Main Laboratory Diagnostic Center",
        phone: lab.phone || "+91 98765 43210",
        logoUrl: lab.logo_url || lab.logoUrl || "/onepath-logo.png",
        printBgImage: bg,
        printHeaderHeight: lab.print_header_height ?? lab.printHeaderHeight ?? 185,
        printFooterHeight: lab.print_footer_height ?? lab.printFooterHeight ?? 95,
        printMarginLeft: lab.print_margin_left ?? lab.printMarginLeft ?? 32,
        printMarginRight: lab.print_margin_right ?? lab.printMarginRight ?? 32,
        printWithLetterhead: lab.print_with_letterhead ?? lab.printWithLetterhead ?? (bg ? true : false),
        report_settings: lab.report_settings || lab.reportSettings,
        reportSettings: lab.report_settings || lab.reportSettings,
      },
      report_settings: lab.report_settings || lab.reportSettings,
      reportSettings: lab.report_settings || lab.reportSettings,
    };
  }, [report, patient, lab, letterheadBase64]);

  const labSettings = useMemo(() => {
    const bg = letterheadBase64 || getCleanLetterheadUrl(lab.print_bg_image || lab.printBgImage);
    return {
      bgImage: bg,
      headerHeight: lab.print_header_height ?? lab.printHeaderHeight ?? 185,
      footerHeight: lab.print_footer_height ?? lab.printFooterHeight ?? 95,
      marginLeft: lab.print_margin_left ?? lab.printMarginLeft ?? 32,
      marginRight: lab.print_margin_right ?? lab.printMarginRight ?? 32,
      printWithLetterhead: lab.print_with_letterhead ?? lab.printWithLetterhead ?? (bg ? true : false),
    };
  }, [lab, letterheadBase64]);

  // URL resolver for backend stored images (letterheads, digital signatures)
  const resolveSigUrl = (url: string | null | undefined) => {
    if (!url) return null;
    if (url.startsWith("data:") || url.startsWith("blob:") || url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    const apiOrigin = process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
      : "http://localhost:8000";
    const clean = url.startsWith("/") ? url : `/${url}`;
    return `${apiOrigin}${clean}`;
  };

  // Dynamic reference range formatting based on patient age & gender
  const calculateRefRange = (item: any, patient: any): string => {
    const t = item.test || {};
    if (t.rangeType === "TEXT" || t.range_type === "TEXT") {
      return (t.textRefRange || t.text_ref_range || "—").trim();
    }
    const isFemale = (patient?.gender || "").toLowerCase().startsWith("f");
    const min = isFemale
      ? (t.refRangeMinFemale ?? t.ref_range_min_female ?? t.refRangeMin ?? t.ref_range_min)
      : (t.refRangeMin ?? t.ref_range_min);
    const max = isFemale
      ? (t.refRangeMaxFemale ?? t.ref_range_max_female ?? t.refRangeMax ?? t.ref_range_max)
      : (t.refRangeMax ?? t.ref_range_max);
    if (min !== undefined && max !== undefined && min !== null && max !== null) {
      return `${min} – ${max}`;
    }
    if (min !== undefined && min !== null) return `> ${min}`;
    if (max !== undefined && max !== null) return `< ${max}`;
    return "—";
  };

  // Native Vector PDF Download & Print Engine (Matches LIS FullscreenPrintReportModal 100%)
  const patientName = (patient?.name || "Patient").replace(/[^a-zA-Z0-9_-]/g, "_");
  const reportCode = report?.customId || report?.custom_id || "REPORT";

  const handleNativePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Report_${patientName}_${reportCode}`,
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 0mm !important;
      }
      @media print {
        html, body {
          background: #ffffff !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        * {
          visibility: visible !important;
          opacity: 1 !important;
        }
        .report-preview-page-card {
          width: 794px !important;
          height: 1123px !important;
          min-height: 1123px !important;
          max-height: 1123px !important;
          margin: 0 auto !important;
          background: #ffffff !important;
          box-shadow: none !important;
          border: none !important;
          transform: none !important;
          page-break-after: always !important;
          break-after: page !important;
        }
        .report-preview-page-card:last-child {
          page-break-after: avoid !important;
          break-after: avoid !important;
        }
        .report-print-page {
          width: 794px !important;
          height: 1123px !important;
          transform: none !important;
          position: relative !important;
          overflow: hidden !important;
          background-color: #ffffff !important;
        }
        .letterhead-bg-img, img[alt="Letterhead Background"], img[alt="Letterhead Stationery"] {
          display: block !important;
          visibility: visible !important;
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: fill !important;
          z-index: 0 !important;
        }
      }
    `,
  });

  const handleDownloadPdf = () => {
    if (!report || !billingInfo) return;

    if (!billingInfo.isPaid) {
      showToast(
        "Payment Required",
        `Please settle the pending balance of ₹${billingInfo.due.toFixed(2)} (+ ₹${convenienceFee.toFixed(2)} convenience fee) to download this official report.`,
        "error"
      );
      return;
    }

    if (!printRef.current || !sheetData) {
      showToast("Preparing Report", "Report is compiling, please try again in a moment.", "info");
      return;
    }

    showToast("Vector PDF Ready", "Select 'Save as PDF' in the destination dropdown to save crisp vector PDF.", "info");
    handleNativePrint();
  };

  // Pay Now via PayU Gateway
  const handlePayNow = async () => {
    if (!report || !billingInfo || billingInfo.due <= 0) return
    setIsInitiatingPayment(true)
    showToast("Connecting PayU", "Preparing secure checkout session...", "info")

    try {
      const apiOrigin = process.env.NEXT_PUBLIC_API_URL
        ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/lis\/?$/, "").replace(/\/api\/?$/, "")
        : "http://localhost:8000"

      const res = await fetch(`${apiOrigin}/api/lis/public/payments/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          report_id: report.customId || report.custom_id || reportIdInput
        })
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || data.message || "Failed to initiate payment gateway session.")
      }

      if (data.status === "ALREADY_PAID") {
        showToast("Already Paid", "This report is already fully paid.", "success")
        if (report.customId || report.custom_id) {
          fetchReportById(report.customId || report.custom_id)
        }
        return
      }

      if (data.action_url && data.params) {
        showToast("Redirecting", "Transferring to PayU Secure Payment Gateway...", "success")

        // Create and auto-submit hidden form to PayU hosted checkout
        const form = document.createElement("form")
        form.method = "POST"
        form.action = data.action_url

        Object.entries(data.params).forEach(([key, val]) => {
          const input = document.createElement("input")
          input.type = "hidden"
          input.name = key
          input.value = String(val ?? "")
          form.appendChild(input)
        })

        document.body.appendChild(form)
        form.submit()
      } else {
        throw new Error("Invalid checkout parameters received from payment gateway.")
      }
    } catch (err: any) {
      console.error("Payment initiation error:", err)
      showToast("Gateway Notice", err.message || "Unable to launch PayU checkout. Please try again or pay at counter.", "error")
    } finally {
      setIsInitiatingPayment(false)
    }
  }

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      <Navbar />

      {/* Floating Side Toast Alerts */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 380, width: 'calc(100vw - 48px)', pointerEvents: 'none' }}>
        {toasts.map((t) => (
          <div
            key={t.id}
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '14px 16px',
              borderRadius: '16px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
              backdropFilter: 'blur(12px)',
              background: t.variant === 'error' ? '#881337' : t.variant === 'warning' ? '#78350f' : t.variant === 'success' ? '#064e3b' : '#0f172a',
              color: '#ffffff',
              border: `1px solid ${t.variant === 'error' ? '#f43f5e' : t.variant === 'warning' ? '#f59e0b' : t.variant === 'success' ? '#10b981' : '#334155'}`,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ flexShrink: 0, marginTop: 2 }}>
              {t.variant === 'error' && <AlertCircle size={18} color="#fda4af" />}
              {t.variant === 'warning' && <AlertTriangle size={18} color="#fde68a" />}
              {t.variant === 'success' && <CheckCircle2 size={18} color="#a7f3d0" />}
              {t.variant === 'info' && <Clock size={18} color="#93c5fd" />}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.title}</p>
              <p style={{ fontSize: 12, marginTop: 3, lineHeight: 1.5, opacity: 0.9 }}>{t.message}</p>
            </div>
            <button
              type="button"
              onClick={() => setToasts((prev) => prev.filter((item) => item.id !== t.id))}
              style={{ background: 'transparent', border: 'none', color: '#ffffff', opacity: 0.6, cursor: 'pointer', padding: 2 }}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="track-hero-section" style={{
        padding: '160px 20px 60px',
        background: 'linear-gradient(160deg, #ffffff 0%, #eff6ff 60%, #e0eaff 100%)',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div style={{ position: 'absolute', top: 30, right: -100, width: 450, height: 450, background: 'rgba(37, 99, 235, 0.08)', borderRadius: '50%', filter: 'blur(90px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -50, left: -100, width: 400, height: 400, background: 'rgba(124, 58, 237, 0.06)', borderRadius: '50%', filter: 'blur(90px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 840, margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #bfdbfe', borderRadius: 100, padding: '6px 18px', fontSize: 12, fontWeight: 700, color: 'var(--blue-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 20, boxShadow: '0 2px 8px rgba(37,99,235,0.1)' }}>
            <Activity size={14} />
            <span>Real-Time Report Verification</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 6vw, 54px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.15, wordBreak: 'break-word' }}>
            Track / Download <span style={{ color: 'var(--blue-primary)' }}>Report</span>
          </h1>
          <p style={{ fontSize: 'clamp(14px, 3.5vw, 17px)', color: '#475569', lineHeight: 1.7, maxWidth: 620, margin: '0 auto 36px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Enter your unique <strong>Report ID</strong> to track sample progress, check payments clearance, and download your authorized laboratory report.
          </p>

          {/* Single Text Field Search Card */}
          <div className="track-search-card" style={{
            maxWidth: 650,
            margin: '0 auto',
            background: '#ffffff',
            padding: '8px',
            borderRadius: '20px',
            border: '1px solid #cbd5e1',
            boxShadow: '0 16px 36px -10px rgba(0,0,0,0.1)',
            boxSizing: 'border-box'
          }}>
            <form onSubmit={handleTrack} className="track-search-form" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="track-input-wrapper" style={{ position: 'relative', flex: 1, minWidth: 240, width: '100%' }}>
                <FileText size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }} />
                <input
                  type="text"
                  value={reportIdInput}
                  onChange={(e) => setReportIdInput(e.target.value)}
                  placeholder="Enter Report ID (e.g. OPL100001)"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px 14px 46px',
                    borderRadius: '14px',
                    border: '1px solid transparent',
                    background: '#f8fafc',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#0f172a',
                    outline: 'none',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: 'all 0.2s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = '#ffffff'
                    e.currentTarget.style.borderColor = 'var(--blue-primary)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = '#f8fafc'
                    e.currentTarget.style.borderColor = 'transparent'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="track-search-button"
                style={{
                  padding: '14px 28px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
                  transition: 'all 0.2s',
                  flexShrink: 0
                }}
              >
                {isLoading ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Checking…</span>
                  </>
                ) : (
                  <>
                    <Search size={16} />
                    <span>Track / Download Report</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Sample Universal ID: <strong style={{ color: 'var(--blue-primary)' }}>OPL100001</strong> · Secure NABL & ISO 15189 Certified
          </p>
        </div>
      </section>

      {/* Main Full-Width Edge-to-Edge Container */}
      <section style={{ width: '100%', maxWidth: 1440, margin: '0 auto', padding: '40px 20px 80px', flex: 1 }}>
        {fetchError && !report && (
          <div style={{ maxWidth: 650, margin: '0 auto', padding: 24, borderRadius: 20, background: '#fef2f2', border: '1px solid #fecaca', textAlign: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <AlertCircle size={32} color="#dc2626" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#991b1b', marginBottom: 4 }}>Report Record Not Found</h3>
            <p style={{ fontSize: 13, color: '#b91c1c', lineHeight: 1.5 }}>{fetchError}</p>
          </div>
        )}

        {report && billingInfo && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            
            {/* 1. Full-Width Executive Header Card */}
            <div className="executive-header-card" style={{
              width: '100%',
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              padding: '24px 32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 240, flex: 1 }}>
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  fontWeight: 800,
                  boxShadow: '0 4px 14px rgba(37,99,235,0.2)',
                  flexShrink: 0
                }}>
                  {report.patient?.name ? report.patient.name.charAt(0).toUpperCase() : 'P'}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', wordBreak: 'break-word' }}>
                      {report.patient?.name || "Patient"}
                    </h2>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#f1f5f9', color: '#475569', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                      {report.patient?.gender || "—"}, {report.patient?.age || "—"} Yrs
                    </span>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: 100,
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      background: report.status === 'FINAL' || report.status === 'APPROVED' ? '#ecfdf5' : '#fffbeb',
                      color: report.status === 'FINAL' || report.status === 'APPROVED' ? '#047857' : '#b45309',
                      border: `1px solid ${report.status === 'FINAL' || report.status === 'APPROVED' ? '#a7f3d0' : '#fde68a'}`
                    }}>
                      {report.status === 'FINAL' ? '✓ FINAL' : report.status === 'APPROVED' ? '✓ APPROVED' : (report.status || 'PENDING')}
                    </span>
                  </div>

                  <p style={{ fontSize: 13, color: '#64748b', marginTop: 4, display: 'flex', gap: 8, flexWrap: 'wrap', lineHeight: 1.4 }}>
                    <span>PID: <strong style={{ color: '#0f172a' }}>{report.patient?.customId || report.patient?.custom_id || "PID"}</strong></span>
                    <span>·</span>
                    <span>Report ID: <strong style={{ color: 'var(--blue-primary)' }}>{report.customId || report.custom_id || reportIdInput}</strong></span>
                    <span>·</span>
                    <span>Referred by: <strong>Dr. {report.patient?.refDoctor || report.patient?.ref_doctor || "Self"}</strong></span>
                  </p>
                </div>
              </div>

              {/* Action Button: Download Official Report PDF */}
              <div className="executive-actions" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  style={{
                    padding: '12px 26px',
                    borderRadius: '14px',
                    fontSize: 14,
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    background: billingInfo.isPaid
                      ? 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                      : '#cbd5e1',
                    color: billingInfo.isPaid ? '#ffffff' : '#475569',
                    boxShadow: billingInfo.isPaid ? '0 4px 14px rgba(5,150,105,0.25)' : 'none',
                    transition: 'all 0.2s',
                    boxSizing: 'border-box'
                  }}
                  title={billingInfo.isPaid ? "Download Official Report PDF with Letterhead" : "Report locked: Clear pending balance to download"}
                >
                  {billingInfo.isPaid ? <Download size={16} /> : <Lock size={16} color="#b45309" />}
                  <span>{billingInfo.isPaid ? "Download Report PDF" : "Download PDF (Locked)"}</span>
                </button>
              </div>
            </div>

            {/* 2. Track Progress Bar with Dot Indicators (Step 1 -> Step 2 -> Step 3) */}
            <div className="stepper-card" style={{
              width: '100%',
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              padding: '32px 36px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: 16, marginBottom: 28, flexWrap: 'wrap', gap: 10 }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(16px, 3.5vw, 18px)', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Activity size={20} color="var(--blue-primary)" />
                    <span>Report Tracking Progress</span>
                  </h3>
                  <p style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>
                    Live status timeline of diagnostic testing, lab finalization, and approval.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: currentStep === 3 ? '#16a34a' : '#2563eb', display: 'inline-block' }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: currentStep === 3 ? '#15803d' : '#1d4ed8' }}>
                    {currentStep === 3 ? "Fully Approved & Cleared" : currentStep === 2 ? "Finalized by Lab" : "Sample Registered"}
                  </span>
                </div>
              </div>

              {/* Connected Stepper with Dots */}
              <div style={{ position: 'relative', margin: '14px 4px 6px' }}>
                {/* Background Line */}
                <div className="stepper-line-bg" style={{
                  position: 'absolute',
                  top: 24,
                  left: '16.66%',
                  right: '16.66%',
                  height: 4,
                  background: '#e2e8f0',
                  borderRadius: 4,
                  zIndex: 1
                }} />

                {/* Dynamic Active Progress Line */}
                <div className="stepper-line-active" style={{
                  position: 'absolute',
                  top: 24,
                  left: '16.66%',
                  width: currentStep === 3 ? '66.66%' : currentStep === 2 ? '33.33%' : '0%',
                  height: 4,
                  background: currentStep === 3 ? 'linear-gradient(90deg, #2563eb, #16a34a)' : '#2563eb',
                  borderRadius: 4,
                  transition: 'width 0.5s ease',
                  zIndex: 2
                }} />

                {/* Steps 1, 2, 3 Grid */}
                <div className="stepper-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', position: 'relative', zIndex: 3, gap: 8 }}>
                  
                  {/* Step 1: Sample Registered */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div className="step-circle" style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: currentStep >= 1 ? '#2563eb' : '#f1f5f9',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: currentStep >= 1 ? '0 0 0 6px rgba(37,99,235,0.15)' : 'none',
                      transition: 'all 0.3s ease'
                    }}>
                      <Check size={22} strokeWidth={3} />
                    </div>
                    <span className="step-badge" style={{ fontSize: 11, fontWeight: 800, color: 'var(--blue-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 12 }}>
                      Step 1
                    </span>
                    <h4 className="step-title" style={{ fontSize: 15, fontWeight: 800, color: '#0f172a', marginTop: 2 }}>Sample Registered</h4>
                    <p className="step-desc" style={{ fontSize: 12, color: '#64748b', marginTop: 4, maxWidth: 200, lineHeight: 1.4 }}>
                      Patient intake & sample barcode registered
                    </p>
                    <span className="step-status" style={{ fontSize: 11, fontWeight: 700, marginTop: 8, padding: '3px 8px', borderRadius: 6, background: '#eff6ff', color: '#1d4ed8' }}>
                      Completed
                    </span>
                  </div>

                  {/* Step 2: Final */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div className="step-circle" style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: currentStep >= 2 ? '#2563eb' : '#ffffff',
                      border: currentStep >= 2 ? 'none' : '3px solid #cbd5e1',
                      color: currentStep >= 2 ? '#ffffff' : '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: currentStep >= 2 ? '0 0 0 6px rgba(37,99,235,0.15)' : 'none',
                      transition: 'all 0.3s ease'
                    }}>
                      {currentStep >= 2 ? <Check size={22} strokeWidth={3} /> : <span style={{ fontSize: 15, fontWeight: 800 }}>2</span>}
                    </div>
                    <span className="step-badge" style={{ fontSize: 11, fontWeight: 800, color: currentStep >= 2 ? 'var(--blue-primary)' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 12 }}>
                      Step 2
                    </span>
                    <h4 className="step-title" style={{ fontSize: 15, fontWeight: 800, color: currentStep >= 2 ? '#0f172a' : '#64748b', marginTop: 2 }}>Final</h4>
                    <p className="step-desc" style={{ fontSize: 12, color: '#64748b', marginTop: 4, maxWidth: 200, lineHeight: 1.4 }}>
                      {currentStep >= 2 ? "Results entered & finalized" : "Lab examination in progress"}
                    </p>
                    <span className="step-status" style={{
                      fontSize: 11,
                      fontWeight: 700,
                      marginTop: 8,
                      padding: '3px 8px',
                      borderRadius: 6,
                      background: currentStep >= 2 ? '#eff6ff' : '#f8fafc',
                      color: currentStep >= 2 ? '#1d4ed8' : '#94a3b8',
                      border: currentStep >= 2 ? 'none' : '1px solid #e2e8f0'
                    }}>
                      {currentStep >= 2 ? "Completed" : "In Progress"}
                    </span>
                  </div>

                  {/* Step 3: Approve */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div className="step-circle" style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: currentStep >= 3 ? '#16a34a' : '#ffffff',
                      border: currentStep >= 3 ? 'none' : '3px solid #cbd5e1',
                      color: currentStep >= 3 ? '#ffffff' : '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: currentStep >= 3 ? '0 0 0 6px rgba(22,163,74,0.18)' : 'none',
                      transition: 'all 0.3s ease'
                    }}>
                      {currentStep >= 3 ? <Check size={22} strokeWidth={3} /> : <span style={{ fontSize: 15, fontWeight: 800 }}>3</span>}
                    </div>
                    <span className="step-badge" style={{ fontSize: 11, fontWeight: 800, color: currentStep >= 3 ? '#15803d' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 12 }}>
                      Step 3
                    </span>
                    <h4 className="step-title" style={{ fontSize: 15, fontWeight: 800, color: currentStep >= 3 ? '#0f172a' : '#64748b', marginTop: 2 }}>Approve</h4>
                    <p className="step-desc" style={{ fontSize: 12, color: '#64748b', marginTop: 4, maxWidth: 200, lineHeight: 1.4 }}>
                      {currentStep >= 3 ? "Signed off & ready to download" : "Pending sign-off"}
                    </p>
                    <span className="step-status" style={{
                      fontSize: 11,
                      fontWeight: 700,
                      marginTop: 8,
                      padding: '3px 8px',
                      borderRadius: 6,
                      background: currentStep >= 3 ? '#f0fdf4' : '#f8fafc',
                      color: currentStep >= 3 ? '#15803d' : '#94a3b8',
                      border: currentStep >= 3 ? 'none' : '1px solid #e2e8f0'
                    }}>
                      {currentStep >= 3 ? "Approved ✓" : "Pending"}
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* 3. Payments Card with Authorizing Lab Name */}
            <div className="payments-card" style={{
              width: '100%',
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              padding: '28px 32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: 16, flexWrap: 'wrap', gap: 10 }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(16px, 3.5vw, 18px)', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CreditCard size={20} color="var(--blue-primary)" />
                    <span>Payments</span>
                  </h3>
                  <p style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>
                    Billing details and processing laboratory verification.
                  </p>
                </div>

                <div>
                  {billingInfo.isPaid ? (
                    <span style={{ fontSize: 12, fontWeight: 800, padding: '4px 12px', borderRadius: 100, background: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Check size={14} strokeWidth={3} /> PAID & UNLOCKED
                    </span>
                  ) : (
                    <span style={{ fontSize: 12, fontWeight: 800, padding: '4px 12px', borderRadius: 100, background: '#fffbeb', color: '#b45309', border: '1px solid #fde68a', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Lock size={14} /> PAYMENT DUE (₹{billingInfo.due.toFixed(2)})
                    </span>
                  )}
                </div>
              </div>

              {/* Payments & Lab Info Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16 }}>
                <div style={{ padding: '16px 20px', borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Total Diagnostic Bill</p>
                  <p style={{ fontSize: 24, fontWeight: 900, color: '#0f172a', marginTop: 4 }}>₹{billingInfo.total.toFixed(2)}</p>
                </div>

                <div style={{ padding: '16px 20px', borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontSize: 11, color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Amount Paid</p>
                  <p style={{ fontSize: 24, fontWeight: 900, color: '#15803d', marginTop: 4 }}>₹{billingInfo.paid.toFixed(2)}</p>
                </div>

                <div style={{ padding: '16px 20px', borderRadius: 16, background: billingInfo.due > 0 ? '#fffbeb' : '#f0fdf4', border: `1px solid ${billingInfo.due > 0 ? '#fde68a' : '#bbf7d0'}` }}>
                  <p style={{ fontSize: 11, color: billingInfo.due > 0 ? '#92400e' : '#166534', fontWeight: 700, textTransform: 'uppercase' }}>Balance Due</p>
                  <p style={{ fontSize: 24, fontWeight: 900, color: billingInfo.due > 0 ? '#b45309' : '#15803d', marginTop: 4 }}>₹{billingInfo.due.toFixed(2)}</p>
                </div>

                <div style={{ padding: '16px 20px', borderRadius: 16, background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                  <p style={{ fontSize: 11, color: '#1d4ed8', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Building2 size={13} />
                    <span>Approved & Processed By Lab</span>
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 800, color: '#1e3a8a', marginTop: 4, wordBreak: 'break-word' }}>
                    {report.lab?.name || "OnePath Diagnostic Pathology Laboratory"}
                  </p>
                  <p style={{ fontSize: 11, color: '#475569', marginTop: 2, wordBreak: 'break-word' }}>
                    {report.lab?.address || "Central Laboratory Processing Center"}
                  </p>
                </div>
              </div>

              <div style={{ padding: '14px 18px', borderRadius: 12, background: billingInfo.isPaid ? '#f0fdf4' : '#fffbeb', border: `1px solid ${billingInfo.isPaid ? '#bbf7d0' : '#fde68a'}`, fontSize: 13, color: billingInfo.isPaid ? '#166534' : '#92400e', lineHeight: 1.5 }}>
                {billingInfo.isPaid
                  ? `✓ Full payment cleared. Official report approved by ${report.lab?.name || "the laboratory"} is unlocked and ready for download.`
                  : `⚠️ Please settle the remaining balance of ₹${billingInfo.due.toFixed(2)} with ${report.lab?.name || "your laboratory"} to unlock the report PDF download.`}
              </div>

              {/* Online Settlement Info Box & Single Action Button */}
              {!billingInfo.isPaid ? (
                <div className="settlement-box" style={{
                  padding: '20px 24px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)',
                  border: '1px solid #bfdbfe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 16,
                  boxSizing: 'border-box'
                }}>
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <h4 style={{ fontSize: 15, fontWeight: 800, color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Sparkles size={17} color="#2563eb" />
                      <span>Instant Online Report Clearance via PayU</span>
                    </h4>
                    <p style={{ fontSize: 13, color: '#475569', marginTop: 4, lineHeight: 1.5 }}>
                      Bill Due: <strong>₹{billingInfo.due.toFixed(2)}</strong> + 2% Gateway Convenience Fee (<strong>₹{convenienceFee.toFixed(2)}</strong>) = Total: <strong style={{ color: '#1d4ed8' }}>₹{totalPayable.toFixed(2)}</strong>
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
                      {['UPI (GPay / PhonePe / Paytm)', 'Debit & Credit Cards', 'NetBanking', 'Instant Clearance'].map((tag) => (
                        <span key={tag} style={{ fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 6, background: '#ffffff', color: '#1e40af', border: '1px solid #dbeafe' }}>
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Single Payment Button */}
                  <button
                    type="button"
                    onClick={handlePayNow}
                    disabled={isInitiatingPayment}
                    className="settlement-btn"
                    style={{
                      padding: '14px 28px',
                      borderRadius: '14px',
                      fontSize: 15,
                      fontWeight: 800,
                      border: 'none',
                      cursor: isInitiatingPayment ? 'not-allowed' : 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      color: '#ffffff',
                      boxShadow: '0 4px 16px rgba(37,99,235,0.35)',
                      transition: 'all 0.2s',
                      opacity: isInitiatingPayment ? 0.75 : 1,
                      boxSizing: 'border-box'
                    }}
                    title="Pay pending balance securely via PayU"
                  >
                    {isInitiatingPayment ? (
                      <>
                        <RefreshCw size={18} className="animate-spin" />
                        <span>Connecting PayU…</span>
                      </>
                    ) : (
                      <>
                        <CreditCard size={18} />
                        <span>Payment Now: ₹{totalPayable.toFixed(2)}</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="settlement-box" style={{
                  padding: '20px 24px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
                  border: '1px solid #bbf7d0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 16,
                  boxSizing: 'border-box'
                }}>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 800, color: '#14532d', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <ShieldCheck size={18} color="#16a34a" />
                      <span>Diagnostic Report Approved & Unlocked</span>
                    </h4>
                    <p style={{ fontSize: 13, color: '#334155', marginTop: 4 }}>
                      Your diagnostic report is compiled with official letterhead stationery and ready for download.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    className="settlement-btn"
                    style={{
                      padding: '14px 28px',
                      borderRadius: '14px',
                      fontSize: 15,
                      fontWeight: 800,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                      color: '#ffffff',
                      boxShadow: '0 4px 16px rgba(5,150,105,0.3)',
                      transition: 'all 0.2s',
                      boxSizing: 'border-box'
                    }}
                    title="Download Official Report PDF with Letterhead"
                  >
                    <Download size={18} />
                    <span>Download Report PDF</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        )}
      </section>

      {/* Off-screen high-fidelity ReportSheet for native vector PDF printing / download */}
      <div className="print-report-container">
        {sheetData && (
          <ReportSheet
            ref={printRef}
            report={sheetData as any}
            settings={labSettings}
            scale={1}
          />
        )}
      </div>

      {/* RESPONSIVE UI & GLOBAL A4 PRINT STYLES */}
      <style>{`
        .track-search-card {
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .track-hero-section {
            padding: 120px 16px 44px !important;
          }
        }

        @media (max-width: 640px) {
          .track-hero-section {
            padding: 105px 12px 36px !important;
          }
          .track-search-card {
            padding: 12px !important;
            border-radius: 16px !important;
          }
          .track-search-form {
            flex-direction: column !important;
            gap: 10px !important;
            width: 100% !important;
          }
          .track-input-wrapper {
            width: 100% !important;
            min-width: 0 !important;
          }
          .track-search-button {
            width: 100% !important;
            padding: 13px 16px !important;
            font-size: 14.5px !important;
            border-radius: 12px !important;
          }

          .executive-header-card {
            padding: 18px 14px !important;
            border-radius: 18px !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 14px !important;
          }
          .executive-actions {
            width: 100% !important;
          }
          .executive-actions button {
            width: 100% !important;
            justify-content: center !important;
          }

          .stepper-card {
            padding: 18px 12px !important;
            border-radius: 18px !important;
          }
          .stepper-line-bg, .stepper-line-active {
            top: 19px !important;
          }
          .step-circle {
            width: 38px !important;
            height: 38px !important;
            box-shadow: none !important;
          }
          .step-circle svg {
            width: 17px !important;
            height: 17px !important;
          }
          .step-badge {
            font-size: 10px !important;
            margin-top: 8px !important;
          }
          .step-title {
            font-size: 12px !important;
            margin-top: 2px !important;
            word-break: break-word !important;
            line-height: 1.25 !important;
          }
          .step-desc {
            display: none !important;
          }
          .step-status {
            font-size: 10px !important;
            padding: 2px 6px !important;
            margin-top: 6px !important;
          }

          .payments-card {
            padding: 18px 14px !important;
            border-radius: 18px !important;
          }
          .settlement-box {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 14px !important;
            padding: 16px 14px !important;
          }
          .settlement-btn {
            width: 100% !important;
            justify-content: center !important;
            padding: 13px 18px !important;
          }
        }

        @media (max-width: 360px) {
          .step-title {
            font-size: 11px !important;
          }
          .step-circle {
            width: 34px !important;
            height: 34px !important;
          }
          .stepper-line-bg, .stepper-line-active {
            top: 17px !important;
          }
        }

        @media screen {
          .print-report-container {
            position: fixed !important;
            top: 0 !important;
            left: -10000px !important;
            width: 794px !important;
            height: auto !important;
            opacity: 0 !important;
            pointer-events: none !important;
            z-index: -9999 !important;
          }
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 0mm !important;
          }
          html, body {
            background: #ffffff !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          * {
            visibility: visible !important;
            opacity: 1 !important;
          }
          .print-report-container,
          .print-report-container *,
          .report-preview-page-card,
          .report-preview-page-card *,
          .report-print-page,
          .report-print-page * {
            visibility: visible !important;
            opacity: 1 !important;
          }
          .print-report-container {
            display: block !important;
            position: static !important;
            width: 794px !important;
            height: auto !important;
            overflow: visible !important;
            margin: 0 auto !important;
            padding: 0 !important;
          }
          .report-preview-page-card {
            width: 794px !important;
            height: 1123px !important;
            min-height: 1123px !important;
            max-height: 1123px !important;
            margin: 0 auto !important;
            background: #ffffff !important;
            box-shadow: none !important;
            border: none !important;
            transform: none !important;
            page-break-after: always !important;
            break-after: page !important;
          }
          .report-preview-page-card:last-child {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .report-print-page {
            width: 794px !important;
            height: 1123px !important;
            transform: none !important;
            position: relative !important;
            overflow: hidden !important;
            background-color: #ffffff !important;
          }
          .letterhead-bg-img, img[alt="Letterhead Background"], img[alt="Letterhead Stationery"] {
            display: block !important;
            visibility: visible !important;
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: fill !important;
            z-index: 0 !important;
          }
        }
      `}</style>

      <Footer />
    </main>
  )
}