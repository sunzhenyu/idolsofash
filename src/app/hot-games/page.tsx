import { Header } from '@/components/header'
import { getAllGames } from '@/data/games-database'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hot Games - Play Popular Free Online Games',
  description: 'Play the hottest and most popular free online games.',
}

export default function HotGamesPage() {
  const allGames = getAllGames()
  const hotGames = [...allGames].sort((a, b) => b.rating - a.rating)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Hot Games
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {hotGames.map((game) => (
              <a
                key={game.id}
                href={`/games/${game.id}`}
                className="group relative aspect-square rounded-lg overflow-hidden bg-gray-900 hover:ring-2 hover:ring-red-500 transition-all"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  🔥 {game.rating}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-semibold text-center">
                      {game.name}
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-yellow-400 text-xs">⭐</span>
                      <span className="text-gray-300 text-xs">{game.rating}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
