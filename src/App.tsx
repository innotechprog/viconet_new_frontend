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
import BlogsPage from './components/BlogsPage'
import ContactPage from './components/ContactPage'
import BottomAuthCta from './components/BottomAuthCta'
import ScrollInteractivity from './components/ScrollInteractivity'
import { getDefaultOgImage, getSiteUrl, SITE_DESCRIPTION, SITE_PAGE_TITLE } from './config/site'

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
  '#blogs',
  '#contact',
  '#signin-talent',
  '#signin-business',
  '#signup-talent',
  '#signup-business',
])

const defaultSeo = {
  title: SITE_PAGE_TITLE,
  description: SITE_DESCRIPTION,
}

const pageSeoByHash: Record<string, { title: string; description: string; noindex?: boolean }> = {
  '#about-us': {
    title: 'About vico.net | Talent & Business Growth Platform',
    description:
      'Learn how vico.net connects professionals and businesses for collaboration, trusted hiring, and long-term growth.',
  },
  '#webinars': {
    title: 'Webinars & Podcasts | vico.net Knowledge Hub',
    description:
      'Watch webinars and listen to podcasts from industry experts on remote work, hiring, branding, and business growth.',
  },
  '#how-it-works': {
    title: 'How It Works | vico.net',
    description:
      'Discover how to build your profile, connect with verified opportunities, and collaborate with leading businesses on vico.net.',
  },
  '#jobs': {
    title: 'Jobs & Opportunities | vico.net',
    description:
      'Find verified roles and opportunities that match your skills, goals, and preferred work style.',
  },
  '#blogs': {
    title: 'Blog Insights | vico.net',
    description:
      'Explore practical insights about talent, hiring, collaboration, and future-of-work trends on vico.net.',
  },
  '#contact': {
    title: 'Contact Us | vico.net',
    description:
      'Get in touch with the vico.net team for support, partnerships, and platform inquiries.',
  },
  '#signin-talent': {
    title: 'Talent Sign In | vico.net',
    description: 'Sign in to your vico.net talent account and manage your profile and opportunities.',
    noindex: true,
  },
  '#signup-talent': {
    title: 'Talent Sign Up | vico.net',
    description: 'Create your vico.net talent account and start showcasing your skills to top businesses.',
    noindex: true,
  },
  '#signin-business': {
    title: 'Business Sign In | vico.net',
    description: 'Sign in to your vico.net business account to connect with verified professionals.',
    noindex: true,
  },
  '#signup-business': {
    title: 'Business Sign Up | vico.net',
    description: 'Create your vico.net business account and discover talent that helps your team grow.',
    noindex: true,
  },
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

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
  const showBlogs = currentHash === '#blogs'
  const showContact = currentHash === '#contact'
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

  useEffect(() => {
    const siteUrl = getSiteUrl()
    const ogImage = getDefaultOgImage()
    const hash = currentHash || ''

    const pageSeo = hash.startsWith('#job-')
      ? {
          title: 'Job Details | vico.net',
          description: 'Review job details and apply to verified opportunities on vico.net.',
        }
      : pageSeoByHash[hash] || defaultSeo

    const pageUrl = hash ? `${siteUrl}/${hash}` : `${siteUrl}/`
    const robots = pageSeo.noindex
      ? 'noindex, nofollow, noarchive'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

    document.title = pageSeo.title
    upsertCanonical(pageUrl)

    upsertMeta('name', 'description', pageSeo.description)
    upsertMeta('name', 'robots', robots)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:url', pageUrl)
    upsertMeta('name', 'twitter:title', pageSeo.title)
    upsertMeta('name', 'twitter:description', pageSeo.description)
    upsertMeta('name', 'twitter:image', ogImage)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', pageUrl)
    upsertMeta('property', 'og:title', pageSeo.title)
    upsertMeta('property', 'og:description', pageSeo.description)
    upsertMeta('property', 'og:image', ogImage)
  }, [currentHash])

  if (showWebinars) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <WebinarsPage />
        <ScrollInteractivity />
      </div>
    )
  }

  if (showHowItWorks) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <HowItWorks />
        <ScrollInteractivity />
      </div>
    )
  }

  if (jobDetailId) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <JobDetailPage jobId={jobDetailId} />
        <ScrollInteractivity />
      </div>
    )
  }

  if (showJobs) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <JobsPage />
        <ScrollInteractivity />
      </div>
    )
  }

  if (showBlogs) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <BlogsPage />
        <ScrollInteractivity />
      </div>
    )
  }

  if (showContact) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <ContactPage />
        <ScrollInteractivity />
      </div>
    )
  }

  if (showAbout) {
    return (
      <div className="page-route-shell" key={currentHash || 'home'}>
        <AboutPage />
        <ScrollInteractivity />
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
        <ScrollInteractivity />
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
        <ScrollInteractivity />
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
      <BottomAuthCta />
      <ScrollInteractivity />
    </div>
  )
}
