'use client'

interface RelatedGame {
  id: string
  name: string
  image: string
  url: string
}

interface GameSidebarProps {
  games: RelatedGame[]
}

export function GameSidebar({ games }: GameSidebarProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm sticky top-24">
      <h3 className="text-lg font-bold mb-4 text-white">Related Games</h3>
      <div className="grid grid-cols-2 gap-3">
        {games.slice(0, 12).map((game) => (
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-white text-xs font-semibold text-center line-clamp-2">
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
