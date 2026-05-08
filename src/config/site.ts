/** Canonical site URL — set `VITE_SITE_URL` in `.env` for production (no trailing slash). */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined
  const base = (raw?.trim() || 'https://vico.net').replace(/\/$/, '')
  return base
}

export const SITE_NAME = 'vico.net'

export const SITE_TAGLINE = 'Where Talent Meets Opportunity'

/**
 * Document & social title — keep under ~60 characters for SERP display (primary keywords first, brand last).
 */
export const SITE_PAGE_TITLE = 'Find Jobs & Hire Skilled Talent Globally | vico.net'

export const SITE_DESCRIPTION =
  'vico.net is a digital talent ecosystem connecting skilled professionals with businesses worldwide. Create your profile, discover verified opportunities, learn from blogs and webinars, and grow your career or team.'

/** Default Open Graph / Twitter image (1200×630 recommended). */
export function getDefaultOgImage(): string {
  return `${getSiteUrl()}/images/blog-future-work.png`
}
