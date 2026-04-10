import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { getSiteUrl } from '@/lib/site'

const siteUrl = getSiteUrl()
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-Y3HPFXFFL1'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Idols of Ash Fan Hub',
    template: '%s | Idols of Ash Fan Hub',
  },
  description: 'Play browser games online with source transparency, game guides, and FAQs.',
  applicationName: 'Idols of Ash Fan Hub',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Idols of Ash Fan Hub',
    title: 'Idols of Ash Fan Hub',
    description: 'Play browser games online with source transparency, game guides, and FAQs.',
    url: siteUrl,
    images: [
      {
        url: '/logo-wordmark.svg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Idols of Ash Fan Hub',
    description: 'Play browser games online with source transparency, game guides, and FAQs.',
    images: ['/logo-wordmark.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
