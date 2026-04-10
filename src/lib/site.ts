const DEFAULT_SITE_URL = 'https://idolsash.com'

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
  const normalized = (fromEnv || DEFAULT_SITE_URL).replace(/\/+$/, '')
  return normalized
}

export function toAbsoluteUrl(path: string) {
  const base = getSiteUrl()
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${cleanPath}`
}
