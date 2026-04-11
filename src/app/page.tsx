import { GamePlayer } from '@/components/game-player'
import { RelatedGames } from '@/components/related-games'
import { GameSidebar } from '@/components/game-sidebar'
import { Header } from '@/components/header'
import { relatedGames } from '@/data/games'
import { getGameById } from '@/data/games-database'
import { toAbsoluteUrl } from '@/lib/site'
import type { Metadata } from 'next'

const idolsOfAsh = getGameById('idols-of-ash')

export const metadata: Metadata = {
  title: 'Idols of Ash - Play Online Free | Horror Climbing Game Guide',
  description:
    'Play Idols of Ash online free in your browser. Complete guide: how to play, grappling hook tips, game modes, FAQ, and survival strategies for this horror climbing game by Leafy Games.',
  keywords: [
    'idols of ash',
    'idols of ash online',
    'play idols of ash',
    'idols of ash game',
    'idols of ash free',
    'idols of ash guide',
    'idols of ash tips',
    'horror climbing game',
    'leafy games',
    'grappling hook horror',
  ],
  openGraph: {
    title: 'Idols of Ash - Play Online Free | Horror Climbing Game',
    description:
      'Play Idols of Ash online free. Full guide with tips, game modes, FAQ, and survival strategies for this horror climbing game.',
    type: 'website',
    url: toAbsoluteUrl('/'),
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Idols of Ash - Play Online Free',
    description:
      'Play Idols of Ash online free. Full guide with tips, game modes, FAQ, and survival strategies.',
  },
}

const faqItems = [
  {
    question: 'What is Idols of Ash?',
    answer:
      'Idols of Ash is a first-person horror climbing game developed by Leafy Games. You use a grappling hook to climb through dark environments while being hunted by giant centipedes. The game combines momentum-based movement with survival horror tension.',
  },
  {
    question: 'Is Idols of Ash free to play?',
    answer:
      'Yes, Idols of Ash is free to play in your browser. You can play it directly on this page or on the official itch.io listing at leafygames.itch.io/idols-of-ash.',
  },
  {
    question: 'How do you use the grappling hook in Idols of Ash?',
    answer:
      'Aim at a surface and click to fire the grappling hook. Once attached, you swing and release at the right moment to gain momentum. Chaining swings efficiently is the core skill — mistimed releases waste precious seconds when the centipede is close.',
  },
  {
    question: 'What are the game modes in Idols of Ash?',
    answer:
      'Idols of Ash features Normal mode for standard play, Nightmare mode with increased difficulty and faster enemies, and First Kiln mode which serves as an introductory challenge. Each mode tests your grappling and route-planning skills at different pressure levels.',
  },
  {
    question: 'How do you collect embers in Idols of Ash?',
    answer:
      'Embers are scattered throughout each level. Collect them by swinging close enough to pick them up during your climb. Prioritize embers that are on your natural route rather than detours — the centipede does not wait.',
  },
  {
    question: 'What platforms is Idols of Ash available on?',
    answer:
      'Idols of Ash is available on Web Browser (free), Windows, and Linux. The browser version is fully playable without any download.',
  },
  {
    question: 'Who made Idols of Ash?',
    answer:
      'Idols of Ash was developed by Leafy Games and released in 2026. It is available on itch.io and is also searchable on Steam.',
  },
  {
    question: 'How long is Idols of Ash?',
    answer:
      'A typical run of Idols of Ash takes around 20–40 minutes. The game is designed for short, intense sessions with high replay value from challenge modes and speedrun potential.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function HomePage() {
  if (!idolsOfAsh) {
    return null
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="flex gap-8">
            <div className="flex-1">

              {/* Hero */}
              <header className="mb-8">
                <p className="mb-3 text-sm uppercase tracking-[0.28em] text-red-300">Free browser game · Horror · Climbing</p>
                <h1 className="mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  Idols of Ash
                </h1>
                <p className="max-w-3xl text-xl text-gray-300">
                  Play <strong className="text-white">Idols of Ash</strong> online free — a first-person horror climbing game by Leafy Games. Use your grappling hook to escape giant centipedes across dark vertical environments.
                </p>
              </header>

              {/* Game Player */}
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

              {/* Quick Info */}
              <div className="mb-12 grid gap-8 md:grid-cols-2">
                <section className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                  <h2 className="mb-4 text-2xl font-bold text-red-500">About Idols of Ash</h2>
                  <p className="mb-4 text-gray-300">
                    <strong className="text-white">Idols of Ash</strong> is a first-person horror climbing game where movement is the core mechanic. You wield a grappling hook to swing through vertical ruins while a giant centipede hunts you from below.
                  </p>
                  <p className="text-gray-300">
                    Unlike most horror games, the threat in Idols of Ash is not about hiding — it is about moving faster and smarter. Every swing decision matters.
                  </p>
                </section>

                <section className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                  <h2 className="mb-4 text-2xl font-bold text-red-500">Game info</h2>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Developer</span>
                      <span className="font-semibold">Leafy Games</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Genre</span>
                      <span className="font-semibold">Horror, Climbing, Adventure</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Platforms</span>
                      <span className="font-semibold">Browser, Windows, Linux</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Price</span>
                      <span className="font-semibold text-green-400">Free</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">itch.io rating</span>
                      <span className="font-semibold">⭐ {idolsOfAsh.rating}/5 ({idolsOfAsh.votes.toLocaleString()} votes)</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* How to Play */}
              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-6 text-2xl font-bold text-red-500">How to Play Idols of Ash</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">🎯 Grappling hook basics</h3>
                    <p className="text-gray-300">
                      Aim at any climbable surface and click to fire. The hook attaches and you swing. Release at the peak of your arc to maximize distance. Chaining swings without stopping is the key to staying ahead of the centipede.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">📍 Route planning</h3>
                    <p className="text-gray-300">
                      Before each swing, scan the environment for the next anchor point. Idols of Ash rewards players who think two swings ahead. Dead ends cost you the run — always have an exit route in mind.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">🔥 Ember collection</h3>
                    <p className="text-gray-300">
                      Embers are scattered through each level. Collect them by swinging close. Focus on embers that sit naturally on your route — detours are dangerous when the centipede is closing in.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">🔊 Audio cues</h3>
                    <p className="text-gray-300">
                      The centipede&apos;s sound tells you how close it is. Use headphones if possible. When the audio intensity spikes, prioritize speed over ember collection. Sound is your threat radar in Idols of Ash.
                    </p>
                  </div>
                </div>
              </section>

              {/* Controls */}
              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-6 text-2xl font-bold text-red-500">Idols of Ash Controls</h2>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    { key: 'Left Click', action: 'Fire grappling hook' },
                    { key: 'WASD / Arrow Keys', action: 'Move character' },
                    { key: 'Space', action: 'Jump / release hook' },
                    { key: 'Mouse', action: 'Aim direction' },
                    { key: 'Shift', action: 'Sprint' },
                    { key: 'F', action: 'Toggle fullscreen' },
                  ].map(({ key, action }) => (
                    <div key={key} className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-3">
                      <kbd className="rounded bg-gray-700 px-2 py-1 text-sm font-mono text-white whitespace-nowrap">{key}</kbd>
                      <span className="text-gray-300 text-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Game Modes */}
              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-6 text-2xl font-bold text-red-500">Idols of Ash Game Modes</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-green-500/30 bg-green-900/10 p-5">
                    <div className="mb-2 text-2xl">🌿</div>
                    <h3 className="mb-2 text-lg font-bold text-green-400">Normal</h3>
                    <p className="text-gray-300 text-sm">
                      Standard difficulty. The centipede moves at a measured pace, giving you time to learn routes and practice swing timing. Recommended for first-time players of Idols of Ash.
                    </p>
                  </div>
                  <div className="rounded-lg border border-red-500/30 bg-red-900/10 p-5">
                    <div className="mb-2 text-2xl">💀</div>
                    <h3 className="mb-2 text-lg font-bold text-red-400">Nightmare</h3>
                    <p className="text-gray-300 text-sm">
                      The centipede is faster and more aggressive. Ember collection becomes a real risk-reward decision. Only attempt Nightmare after you can clear Normal consistently.
                    </p>
                  </div>
                  <div className="rounded-lg border border-orange-500/30 bg-orange-900/10 p-5">
                    <div className="mb-2 text-2xl">🔥</div>
                    <h3 className="mb-2 text-lg font-bold text-orange-400">First Kiln</h3>
                    <p className="text-gray-300 text-sm">
                      An introductory challenge mode that teaches the core mechanics of Idols of Ash. Great for understanding grappling hook physics before tackling the main levels.
                    </p>
                  </div>
                </div>
              </section>

              {/* Pro Tips */}
              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-6 text-2xl font-bold text-red-500">Idols of Ash Pro Tips</h2>
                <ol className="space-y-4">
                  {[
                    {
                      tip: 'Never stop moving',
                      detail: 'The centipede in Idols of Ash catches up fast when you pause. Even a half-second hesitation can cost you a run. Keep swinging even if the next anchor is not perfect.',
                    },
                    {
                      tip: 'Aim high, not forward',
                      detail: 'Anchoring high above you gives more swing arc and more speed. Horizontal anchors slow you down. In Idols of Ash, height is speed.',
                    },
                    {
                      tip: 'Learn the level layout first',
                      detail: 'On your first few runs, focus on memorizing the route rather than collecting embers. Once you know the path, ember collection becomes natural.',
                    },
                    {
                      tip: 'Release early on long swings',
                      detail: 'Releasing the hook before the bottom of your arc launches you forward. This is the fastest movement technique in Idols of Ash and the key to speedrunning.',
                    },
                    {
                      tip: 'Use the centipede sound as a timer',
                      detail: 'When the audio gets loud, you have roughly 3–5 seconds before contact. Use that as your cue to stop collecting and focus purely on escape.',
                    },
                  ].map(({ tip, detail }, i) => (
                    <li key={tip} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 font-bold text-sm">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{tip}</p>
                        <p className="mt-1 text-gray-300 text-sm">{detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Game Overview */}
              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">Idols of Ash — Full Game Overview</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">Idols of Ash</strong> is a first-person horror climbing game developed by Leafy Games. Released in 2026, it quickly gained attention for its unusual combination of momentum-based grappling movement and survival horror pressure.
                  </p>
                  <p>
                    The premise is simple: you are trapped in a vertical ruin and must climb out using a grappling hook while a giant centipede hunts you from below. But the execution is what makes Idols of Ash stand out. Movement is not a side system — it is the entire game. Every swing, every release timing, every route decision is a life-or-death choice.
                  </p>
                  <p>
                    The atmosphere in Idols of Ash works because the game constantly forces uncomfortable tradeoffs. Do you detour for the ember cluster and risk the centipede closing in? Do you take the faster but riskier high route? These decisions happen in real time, under pressure, with no pause button.
                  </p>
                  <p>
                    Idols of Ash is free to play in your browser and also available for download on Windows and Linux. The official listing is on itch.io, where it has earned a 4.9/5 rating from over 300 players.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-6 text-2xl font-bold text-red-500">Idols of Ash — FAQ</h2>
                <div className="space-y-4">
                  {faqItems.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-lg border border-white/10 bg-black/20"
                    >
                      <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-white list-none">
                        <span>{item.question}</span>
                        <span className="ml-4 shrink-0 text-red-400 transition-transform group-open:rotate-180">▾</span>
                      </summary>
                      <p className="border-t border-white/10 px-4 pb-4 pt-3 text-gray-300 text-sm">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Source Notes */}
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

              {/* Related Games */}
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
