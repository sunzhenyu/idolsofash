'use client'

import { useState } from 'react'
import { AlertTriangle, ExternalLink, Maximize2, Minimize2, Play, ShieldCheck } from 'lucide-react'
import type { GameAccessMode, SourceStatus } from '@/data/games-database'

interface GamePlayerProps {
  gameName?: string
  gameImage?: string
  gameUrl?: string
  sourceUrl?: string
  accessMode?: GameAccessMode
  sourceStatus?: SourceStatus
  accessLabel?: string
  accessSummary?: string
  officialUrl?: string
  steamUrl?: string
  platforms?: string[]
}

const statusStyles: Record<SourceStatus, { label: string; className: string; icon: typeof ShieldCheck }> = {
  'verified-embed': {
    label: 'Verified embed source',
    className: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
    icon: ShieldCheck,
  },
  'verified-official': {
    label: 'Verified official source',
    className: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
    icon: ShieldCheck,
  },
  'unverified-mirror': {
    label: 'Third-party mirror source',
    className: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
    icon: AlertTriangle,
  },
  unknown: {
    label: 'Source not yet verified',
    className: 'border-slate-500/40 bg-slate-500/10 text-slate-200',
    icon: AlertTriangle,
  },
}

export function GamePlayer({
  gameName = 'Idols of Ash',
  gameImage = '/images/idols-of-ash.png',
  gameUrl,
  sourceUrl,
  accessMode = 'info-only',
  sourceStatus = 'unknown',
  accessLabel = 'Availability pending verification',
  accessSummary = 'This page currently focuses on verified source information.',
  officialUrl,
  steamUrl,
  platforms = ['Unknown'],
}: GamePlayerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const canPlay = (accessMode === 'trusted-embed' || accessMode === 'mirror-embed') && Boolean(gameUrl)
  const status = statusStyles[sourceStatus]
  const StatusIcon = status.icon

  const toggleFullscreen = () => {
    const container = document.getElementById('game-container')
    if (!document.fullscreenElement) {
      container?.requestFullscreen()
      setIsFullscreen(true)
      return
    }
    document.exitFullscreen()
    setIsFullscreen(false)
  }

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
        style={{ backgroundImage: `url(${gameImage})` }}
      />

      <div className="relative space-y-6 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${status.className}`}>
            <StatusIcon className="h-4 w-4" />
            {status.label}
          </span>
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-100">
            {accessLabel}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img src={gameImage} alt={gameName} className="h-full w-full object-cover" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">{canPlay ? 'Play online now' : 'Source-safe access'}</h2>
            <p className="max-w-2xl text-base leading-7 text-gray-300">{accessSummary}</p>

            <div className="grid gap-3 text-sm text-gray-300 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-gray-400">Access mode</p>
                <p className="mt-2 font-semibold text-white">
                  {accessMode === 'trusted-embed'
                    ? 'Trusted browser embed'
                    : accessMode === 'mirror-embed'
                      ? 'Third-party mirror embed'
                    : accessMode === 'official-download'
                      ? 'Official download'
                      : accessMode === 'official-external'
                        ? 'Official external page'
                        : 'Information page'}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-gray-400">Platforms</p>
                <p className="mt-2 font-semibold text-white">{platforms.join(', ')}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-gray-400">Embed policy</p>
                <p className="mt-2 font-semibold text-white">
                  {canPlay
                    ? sourceStatus === 'unverified-mirror'
                      ? 'Playable with mirror-risk warning'
                      : 'Source verified and enabled'
                    : 'Pending verification'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {sourceUrl && (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 font-semibold text-emerald-100 transition-colors hover:bg-emerald-500/20"
                >
                  Open embed source
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {officialUrl && (
                <a
                  href={officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-500"
                >
                  Open official page
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {steamUrl && (
                <a
                  href={steamUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Steam listing
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {canPlay && (
          <div id="game-container" className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black aspect-video">
            {!hasStarted && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/75">
                <button
                  onClick={() => setHasStarted(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-500"
                >
                  <Play className="h-5 w-5" />
                  Play {gameName}
                </button>
              </div>
            )}

            {hasStarted && (
              <>
                {isLoading && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
                    <div className="text-center">
                      <div className="mx-auto h-16 w-16 animate-spin rounded-full border-b-4 border-red-500" />
                      <p className="mt-4 text-white">Loading game...</p>
                    </div>
                  </div>
                )}

                <iframe
                  src={gameUrl}
                  title={gameName}
                  className="h-full w-full"
                  allow="fullscreen; autoplay; gamepad; gyroscope; accelerometer"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                />

                <button
                  onClick={toggleFullscreen}
                  className="absolute right-4 top-4 z-30 rounded-lg bg-black/60 p-3 text-white transition-colors hover:bg-black/80"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
