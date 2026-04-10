import { GamePlayer } from '@/components/game-player'
import { RelatedGames } from '@/components/related-games'
import { GameSidebar } from '@/components/game-sidebar'
import { Header } from '@/components/header'
import { relatedGames } from '@/data/games'
import { getGameById, getAllGames } from '@/data/games-database'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface GamePageProps {
  params: Promise<{ slug: string }>
}

function getHowToPlaySteps(name: string) {
  return [
    `Press "Play ${name}" to start instantly in your browser.`,
    'Use keyboard and mouse controls shown inside the game screen.',
    'Focus on movement timing and safe positioning before speed runs.',
    'Retry quickly after each fail and adjust your route choice.',
  ]
}

function getProTips(name: string, genre: string[]) {
  const genreHint = genre.length > 0 ? genre[0] : 'action'
  return [
    `Treat the first run as a learning run, not a perfect run in ${name}.`,
    `In ${genreHint.toLowerCase()} moments, prioritize survival over risky shortcuts.`,
    'Keep sessions short and consistent; performance usually improves fast with repetition.',
  ]
}

function getFaq(name: string, hasPlayableEmbed: boolean, sourceLabel: string) {
  return [
    {
      question: `Can I play ${name} online for free?`,
      answer: hasPlayableEmbed
        ? `This page supports direct browser play for ${name}.`
        : `This page currently focuses on source-verified access information for ${name}.`,
    },
    {
      question: `Do I need to install anything to start ${name}?`,
      answer: hasPlayableEmbed
        ? 'No installation is required for browser play on this page.'
        : 'Install requirements depend on the official platform linked in the source section.',
    },
    {
      question: `Where does this page get ${name} from?`,
      answer: `Current source mode: ${sourceLabel}. You can verify links in the source notes and source link sections.`,
    },
    {
      question: `Is this an official publisher website?`,
      answer:
        'No. This is an unofficial fan portal that focuses on playable access, source transparency, and gameplay guidance.',
    },
  ]
}

export async function generateStaticParams() {
  const games = getAllGames()
  return games.map((game) => ({
    slug: game.id,
  }))
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params
  const game = getGameById(slug)

  if (!game) {
    return {
      title: 'Game Not Found',
    }
  }

  return {
    title: `Play ${game.name} Online Free - No Download`,
    description: `${game.accessSummary} Learn controls, tips, and FAQ for ${game.name}.`,
    keywords: [game.name, ...game.genre, 'play online free', 'no download', 'game guide', 'FAQ'],
    openGraph: {
      title: `Play ${game.name} Online Free`,
      description: `${game.accessSummary} English gameplay guide and FAQs included.`,
      type: 'website',
    },
  }
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params
  const game = getGameById(slug)

  if (!game) {
    notFound()
  }

  const hasPlayableEmbed = Boolean(game.gameUrl) && (game.accessMode === 'trusted-embed' || game.accessMode === 'mirror-embed')
  const sourceLabel =
    game.accessMode === 'trusted-embed'
      ? 'Verified embed source'
      : game.accessMode === 'mirror-embed'
        ? 'Third-party mirror source'
        : game.accessMode === 'official-external'
          ? 'Official external source'
          : game.accessMode === 'official-download'
            ? 'Official download source'
            : 'Information mode'

  const howToPlaySteps = getHowToPlaySteps(game.name)
  const proTips = getProTips(game.name, game.genre)
  const faqItems = getFaq(game.name, hasPlayableEmbed, sourceLabel)
  const faqSchema = {
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

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="flex gap-8">
            <div className="flex-1">
              <header className="mb-8">
                <h1 className="mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {game.name}
                </h1>
                <p className="text-xl text-gray-400">By {game.developer}</p>
              </header>

              <div className="mb-12">
                <GamePlayer
                  gameName={game.name}
                  gameImage={game.image}
                  gameUrl={game.gameUrl}
                  sourceUrl={game.sourceUrl}
                  accessMode={game.accessMode}
                  sourceStatus={game.sourceStatus}
                  accessLabel={game.accessLabel}
                  accessSummary={game.accessSummary}
                  officialUrl={game.officialUrl}
                  steamUrl={game.steamUrl}
                  platforms={game.platforms}
                />
              </div>

              <div className="mb-12 grid gap-8 md:grid-cols-2">
                <section className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                  <h2 className="mb-4 text-2xl font-bold text-red-500">About the Game</h2>
                  <p className="text-gray-300">{game.description}</p>
                </section>

                <section className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                  <h2 className="mb-4 text-2xl font-bold text-red-500">Access Snapshot</h2>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Developer</span>
                      <span className="font-semibold">{game.developer}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Genre</span>
                      <span className="font-semibold">{game.genre.join(', ')}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Platforms</span>
                      <span className="font-semibold">{game.platforms.join(', ')}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Rating</span>
                      <span className="font-semibold">⭐ {game.rating}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">Votes</span>
                      <span className="font-semibold">{game.votes.toLocaleString()}</span>
                    </div>
                  </div>
                </section>
              </div>

              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">Source and rights notes</h2>
                <ul className="space-y-3 text-gray-300">
                  {game.sourceNotes.map((note) => (
                    <li key={note} className="flex items-start">
                      <span className="mr-2 text-red-500">▸</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {game.sourceDescription && game.sourceDescriptionSource && (
                <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                  <h2 className="mb-4 text-2xl font-bold text-red-500">Description from Source</h2>
                  <p className="mb-4 text-gray-300">{game.sourceDescription}</p>
                  <p className="text-sm text-gray-400">
                    Source type: {game.sourceDescriptionType === 'official' ? 'Official channel' : 'Third-party mirror'}
                  </p>
                  <a
                    href={game.sourceDescriptionSource}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-red-300 hover:text-red-200"
                  >
                    View source page
                  </a>
                </section>
              )}

              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">How to Play</h2>
                <ul className="space-y-3 text-gray-300">
                  {howToPlaySteps.map((step) => (
                    <li key={step} className="flex items-start">
                      <span className="mr-2 text-red-500">▸</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">Pro Tips</h2>
                <ul className="space-y-3 text-gray-300">
                  {proTips.map((tip) => (
                    <li key={tip} className="flex items-start">
                      <span className="mr-2 text-red-500">▸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">FAQ</h2>
                <div className="space-y-5">
                  {faqItems.map((faq) => (
                    <div key={faq.question} className="rounded-lg border border-white/10 bg-black/20 p-4">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <p className="mt-2 text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12 rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold text-red-500">Playback policy</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">▸</span>
                    <span>For games with a trusted source, the page keeps direct online playback enabled.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">▸</span>
                    <span>Some third-party mirror embeds are enabled for playability, but they are clearly labeled with risk and source links.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">▸</span>
                    <span>Every playable page should expose where the embed source comes from, alongside official links.</span>
                  </li>
                </ul>
              </section>

              <div className="mb-12">
                <RelatedGames games={relatedGames} />
              </div>

              <footer className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                <p className="mb-2">
                  {game.name} is referenced here for editorial and discovery purposes. This is an unofficial fan portal.
                </p>
                <p>All trademarks and game rights belong to their respective owners.</p>
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
