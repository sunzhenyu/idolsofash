import type { Metadata } from 'next'
import './globals.css'
import { getSiteUrl } from '@/lib/site'

const siteUrl = getSiteUrl()

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
