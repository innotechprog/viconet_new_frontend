import { useEffect, useState } from 'react'
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
import BusinessAuthPage from './components/BusinessAuthPage'
import TalentAuthPage from './components/TalentAuthPage'
import AboutPage from './components/AboutPage'
import WebinarsPage from './components/WebinarsPage'

const heroHashes = new Set([
  '#signin-talent',
  '#signin-business',
  '#signup-talent',
  '#signup-business',
])

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)
  const businessMode =
    currentHash === '#signin-business' ? 'login' : currentHash === '#signup-business' ? 'signup' : null
  const talentMode =
    currentHash === '#signin-talent' ? 'login' : currentHash === '#signup-talent' ? 'signup' : null
  const showAbout = currentHash === '#about-us'
  const showWebinars = currentHash === '#webinars'
  const showHowItWorks = currentHash === '#how-it-works'

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash)

    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

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

  if (showWebinars) {
    return <WebinarsPage />
  }

  if (showHowItWorks) {
    return <HowItWorks />
  }

  if (showAbout) {
    return <AboutPage />
  }

  if (talentMode) {
    return (
      <TalentAuthPage
        mode={talentMode}
        onModeChange={(next) => {
          window.location.hash = next === 'login' ? '#signin-talent' : '#signup-talent'
        }}
      />
    )
  }

  if (businessMode) {
    return (
      <BusinessAuthPage
        mode={businessMode}
        onModeChange={(next) => {
          window.location.hash = next === 'login' ? '#signin-business' : '#signup-business'
        }}
      />
    )
  }

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
