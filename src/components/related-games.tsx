'use client'

interface RelatedGame {
  id: string
  name: string
  image: string
  url: string
}

interface RelatedGamesProps {
  games: RelatedGame[]
}

export function RelatedGames({ games }: RelatedGamesProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-6 text-red-500">Related Games</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {games.map((game) => (
          <a
            key={game.id}
            href={game.url}
            className="group relative aspect-square rounded-lg overflow-hidden bg-gray-900 hover:ring-2 hover:ring-red-500 transition-all"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-white text-sm font-semibold text-center">
                  {game.name}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
