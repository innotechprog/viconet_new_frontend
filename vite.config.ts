import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_PAGE_TITLE } from './src/config/site'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://vico.net').replace(/\/$/, '')

  return {
    plugins: [
      react(),
      {
        name: 'html-seo-meta',
        transformIndexHtml(html) {
          return html.replaceAll('%SITE_URL%', siteUrl).replaceAll('%PAGE_TITLE%', SITE_PAGE_TITLE)
        },
      },
    ],
  }
})
