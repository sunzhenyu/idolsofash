'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-red-700 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-wordmark.svg"
              alt="Idols of Ash"
              className="h-11 w-auto md:h-12"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/horror-games"
              className="px-6 py-2 bg-white text-red-700 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Horror Games
            </Link>
            <Link
              href="/hot-games"
              className="px-6 py-2 bg-white text-red-700 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Hot Games
            </Link>
            <Link
              href="/new-games"
              className="px-6 py-2 bg-white text-red-700 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              New Games
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
