'use client'

import Script from 'next/script'

interface GoogleAdSenseProps {
  pId?: string
}

const DEFAULT_ADSENSE_PUB_ID = 'ca-pub-3071851906714660'

export default function GoogleAdSense({ pId }: GoogleAdSenseProps) {
  const publisherId = pId || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || DEFAULT_ADSENSE_PUB_ID

  if (!publisherId || publisherId.trim() === '') {
    return null
  }

  // Ensure ca- prefix exists for the client script
  const clientId = publisherId.startsWith('ca-') ? publisherId : `ca-${publisherId}`

  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
