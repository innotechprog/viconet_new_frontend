import { useEffect, useState } from 'react'

const SHOW_AFTER_Y = 120
const SCROLL_DELTA_THRESHOLD = 8

export default function BottomAuthCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastY

      if (Math.abs(delta) < SCROLL_DELTA_THRESHOLD) {
        return
      }

      if (currentY <= SHOW_AFTER_Y) {
        setIsVisible(false)
        lastY = currentY
        return
      }

      setIsVisible(delta < 0)
      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className={`bottom-auth-cta ${isVisible ? 'is-visible' : ''}`} aria-hidden={!isVisible}>
      <div className="bottom-auth-cta-inner" role="navigation" aria-label="Quick account actions">
        <a className="btn bottom-auth-btn bottom-auth-btn-talent" href="#signin-talent">
          Talent
        </a>
        <a className="btn bottom-auth-btn bottom-auth-btn-business" href="#signin-business">
          Business
        </a>
      </div>
    </div>
  )
}
