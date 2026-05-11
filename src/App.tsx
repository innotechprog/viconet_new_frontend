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
import JobsPage from './components/JobsPage'
import JobDetailPage from './components/JobDetailPage'

const heroHashes = new Set([
  '#signin-talent',
  '#signin-business',
  '#signup-talent',
  '#signup-business',
])

const pageHashes = new Set([
  '',
  '#about-us',
  '#webinars',
  '#how-it-works',
  '#jobs',
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
  const showJobs = currentHash === '#jobs'
  const jobDetailId = currentHash.startsWith('#job-') ? currentHash.replace('#job-', '') : null

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash)

    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  useEffect(() => {
    const hash = currentHash || ''
    const isJobDetail = hash.startsWith('#job-')

    if (pageHashes.has(hash) || isJobDetail) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [currentHash])

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
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <WebinarsPage />
      </div>
    )
  }

  if (showHowItWorks) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <HowItWorks />
      </div>
    )
  }

  if (jobDetailId) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <JobDetailPage jobId={jobDetailId} />
      </div>
    )
  }

  if (showJobs) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <JobsPage />
      </div>
    )
  }

  if (showAbout) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <AboutPage />
      </div>
    )
  }

  if (talentMode) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <TalentAuthPage
          mode={talentMode}
          onModeChange={(next) => {
            window.location.hash = next === 'login' ? '#signin-talent' : '#signup-talent'
          }}
        />
      </div>
    )
  }

  if (businessMode) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <BusinessAuthPage
          mode={businessMode}
          onModeChange={(next) => {
            window.location.hash = next === 'login' ? '#signin-business' : '#signup-business'
          }}
        />
      </div>
    )
  }

  return (
    <div className="page-route-shell" key={currentHash || 'home'}>
      <JsonLd />
      <SkipLink />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <GlobeConnections />
        <HowItWorks embedded />
        <WhyChoose />
        <TrustStats />
        <Resources />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
