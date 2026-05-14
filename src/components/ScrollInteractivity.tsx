import { useEffect, useState } from 'react'

const REVEAL_SELECTOR = [
  '.section',
  '.wp-section',
  '.wp-feature-row',
  '.resource-card',
  '.resources-featured-cta',
  '.feature-item',
  '.stat-item',
  '.wp-podcast-card',
  '.wp-webinar-item',
  '.job-card',
  '.blog-card',
  '.contact-card',
].join(', ')

const STAGGER_CONTAINER_SELECTOR = [
  '.feature-grid',
  '.resource-grid',
  '.stats-row',
  '.wp-masonry',
  '.wp-webinar-list',
  '.globe-grow-grid',
  '.jobs-list',
  '.blogs-grid',
].join(', ')

const SOFT_REVEAL_SELECTOR = '.section, .wp-section, .wp-feature-row, .resources-featured-cta'

export default function ScrollInteractivity() {
  const [progress, setProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const nextProgress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0

      setProgress(Math.max(0, Math.min(nextProgress, 100)))
      setShowBackToTop(scrollTop > 420)
    }

    let rafId = 0
    const onScroll = () => {
      if (rafId) return

      rafId = window.requestAnimationFrame(() => {
        updateScrollState()
        rafId = 0
      })
    }

    updateScrollState()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateScrollState)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    const staggerContainers = Array.from(document.querySelectorAll<HTMLElement>(STAGGER_CONTAINER_SELECTOR))

    if (nodes.length === 0) return

    staggerContainers.forEach((container) => {
      const items = Array.from(container.querySelectorAll<HTMLElement>(':scope > *'))

      items.forEach((item, index) => {
        item.style.setProperty('--reveal-delay', `${Math.min(index * 65, 390)}ms`)
      })
    })

    const markVisible = (el: HTMLElement) => {
      el.classList.add('scroll-reveal', 'is-visible')
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach(markVisible)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.classList.add('is-visible')
            observer.unobserve(target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    nodes.forEach((el) => {
      el.classList.add('scroll-reveal')

      if (el.matches(SOFT_REVEAL_SELECTOR)) {
        el.classList.add('scroll-reveal--soft')
      } else {
        el.classList.add('scroll-reveal--rise')
      }

      const inViewport = el.getBoundingClientRect().top <= window.innerHeight * 0.86

      if (inViewport) {
        el.classList.add('is-visible')
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="scroll-progress-bar" aria-hidden>
        <span className="scroll-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <button
        type="button"
        className={`scroll-top-btn ${showBackToTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  )
}
