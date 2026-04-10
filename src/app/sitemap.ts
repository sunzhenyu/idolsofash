import type { MetadataRoute } from 'next'
import { getAllGames } from '@/data/games-database'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/horror-games`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/hot-games`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/new-games`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  const gameRoutes: MetadataRoute.Sitemap = getAllGames().map((game) => ({
    url: `${siteUrl}/games/${game.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...gameRoutes]
}
