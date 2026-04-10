import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Idols of Ash Fan Hub',
  description: 'Unofficial source guide and editorial hub for Idols of Ash.',
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
