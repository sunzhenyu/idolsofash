import { GamePlayer } from '@/components/game-player'
import { RelatedGames } from '@/components/related-games'
import { GameSidebar } from '@/components/game-sidebar'
import { Header } from '@/components/header'
import { relatedGames } from '@/data/games'
import { getGameById } from '@/data/games-database'
import type { Metadata } from 'next'

const idolsOfAsh = getGameById('idols-of-ash')

export const metadata: Metadata = {
  title: 'Idols of Ash - Play Online and Source Guide',
  description:
    'Play Idols of Ash online from a trusted source, with official links, source notes, and gameplay guidance.',
  keywords: ['idols of ash', 'leafy games', 'play online', 'horror climbing game', 'source guide'],
  openGraph: {
    title: 'Idols of Ash - Play Online',
    description:
      'Trusted embed playback plus official links and a curated overview for Leafy Games\' horror climbing game.',
    type: 'website',
  },
}

export default function HomePage() {
  if (!idolsOfAsh) {
    return null
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="flex gap-8">
            <div className="flex-1">
              <header className="mb-8">
                <p className="mb-3 text-sm uppercase tracking-[0.28em] text-red-300">Unofficial fan guide</p>
                <h1 className="mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  Idols of Ash
                </h1>
                <p className="max-w-3xl text-xl text-gray-400">
                  Play online directly on this page from a trusted source, with official links and source transparency built in.
                </p>
              </header>

              <div className="mb-12">
                <GamePlayer
                  gameName={idolsOfAsh.name}
                  gameImage={idolsOfAsh.image}
                  gameUrl={idolsOfAsh.gameUrl}
                  sourceUrl={idolsOfAsh.sourceUrl}
                  accessMode={idolsOfAsh.accessMode}
                  sourceStatus={idolsOfAsh.sourceStatus}
                  accessLabel={idolsOfAsh.accessLabel}
                  accessSummary={idolsOfAsh.accessSummary}
                  officialUrl={idolsOfAsh.officialUrl}
                  steamUrl={idolsOfAsh.steamUrl}
                  platforms={idolsOfAsh.platforms}
                />
              </div>

              <div className="mb-12 grid gap-8 md:grid-cols-2">
                <section className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                  <h2 className="mb-4 text-2xl font-bold text-red-500">Core play experience</h2>
                  <p className="mb-4 text-gray-300">
                    The core feature is online play, so the game area stays embedded. The difference is we now lock playback to a specific trusted source and clearly expose where that source comes from.
                  </p>
                  <p className="text-gray-300">
                    This keeps the main gameplay flow intact while reducing risk from opaque wrapper sites.
                  </p>
                </section>

                <section className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                  <h2 className="mb-4 text-2xl font-bold text-red-500">Verified source snapshot</h2>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Developer</span>
                      <span className="font-semibold">{idolsOfAsh.developer}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Public platforms</span>
                      <span className="font-semibold">{idolsOfAsh.platforms.join(', ')}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Genre</span>
                      <span className="font-semibold">{idolsOfAsh.genre.join(', ')}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">itch.io rating</span>
                      <span className="font-semibold">⭐ {idolsOfAsh.rating}/5</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Rating count</span>
                      <span className="font-semibold">{idolsOfAsh.votes.toLocaleString()}</span>
                    </div>
                  </div>
                </section>
              </div>

              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">Game overview</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Idols of Ash stands out by combining speed-climbing tension with horror pressure. Movement is not a side system here; the grappling hook, momentum control, and route planning are the core of the experience.
                  </p>
                  <p>
                    The atmosphere works because the game keeps asking you to make uncomfortable choices: rush and risk a miss, or slow down and let the creature close distance. That push-pull is the center of the game&apos;s identity and the most important thing to preserve in our content.
                  </p>
                </div>
              </section>

              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">What to expect</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">Movement-first horror</h3>
                    <p className="text-gray-300">
                      Swing lines, route commitment, and recovery under pressure matter more than combat or inventory systems.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">Short, intense sessions</h3>
                    <p className="text-gray-300">
                      The official itch.io listing describes the average session as about half an hour, which fits the game&apos;s high-pressure pacing well.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">Audio-led threat reading</h3>
                    <p className="text-gray-300">
                      Sound cues and panic management are part of navigation, not just atmosphere dressing.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">High replay conversation value</h3>
                    <p className="text-gray-300">
                      Updates, challenge modes, and player discussion are moving quickly, so curated guide content is more valuable than scraping an iframe.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">Source notes</h2>
                <ul className="space-y-3 text-gray-300">
                  {idolsOfAsh.sourceNotes.map((note) => (
                    <li key={note} className="flex items-start">
                      <span className="mr-2 text-red-500">▸</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mb-12">
                <RelatedGames games={relatedGames} />
              </div>

              <footer className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                <p className="mb-2">
                  Idols of Ash is developed by Leafy Games. This site is an unofficial fan hub and does not claim ownership of the game or its trademarks.
                </p>
                <p>
                  We keep online playback enabled only for traceable, approved sources and show source links directly on-page.
                </p>
              </footer>
            </div>

            <aside className="hidden w-80 xl:block">
              <GameSidebar games={relatedGames} />
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
