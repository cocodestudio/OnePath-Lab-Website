'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId?: string
}

const DEFAULT_GA_ID = 'G-1E0TQQN395'

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const measurementId = gaId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || DEFAULT_GA_ID

  // Don't render analytics scripts if no valid measurement ID is provided
  if (!measurementId || measurementId.trim() === '' || measurementId === 'G-XXXXXXXXXX') {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

/**
 * Helper utility to send custom events to Google Analytics
 * Example usage:
 * sendGAEvent('conversion', { event_category: 'Lead', event_label: 'Free Trial Signup' })
 */
export const sendGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', eventName, params)
  }
}
