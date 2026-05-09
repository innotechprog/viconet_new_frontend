import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import GlobeConnections from './components/GlobeConnections'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import TrustStats from './components/TrustStats'
import Resources from './components/Resources'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import JsonLd from './components/JsonLd'
import SkipLink from './components/SkipLink'

const heroHashes = new Set([
  '#signin-talent',
  '#signin-business',
  '#signup-talent',
  '#signup-business',
])

export default function App() {
  useEffect(() => {
    const syncHeroHashScroll = () => {
      if (!heroHashes.has(window.location.hash)) {
        return
      }

      const hero = document.querySelector('.hero')

      if (!(hero instanceof HTMLElement)) {
        return
      }

      const rootStyles = getComputedStyle(document.documentElement)
      const headerHeight = Number.parseFloat(rootStyles.getPropertyValue('--header-h')) || 76
      const top = hero.getBoundingClientRect().top + window.scrollY - headerHeight - 8

      window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' })
    }

    const frameId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(syncHeroHashScroll)
    })

    window.addEventListener('hashchange', syncHeroHashScroll)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('hashchange', syncHeroHashScroll)
    }
  }, [])

  return (
    <>
      <JsonLd />
      <SkipLink />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <GlobeConnections />
        <HowItWorks />
        <WhyChoose />
        <TrustStats />
        <Resources />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
