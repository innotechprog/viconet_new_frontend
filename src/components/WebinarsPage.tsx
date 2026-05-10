import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const podcasts = [
  {
    id: 'F-GINBMWN9g',
    title: 'The Future of Remote Work',
    guest: 'Industry Leader',
    duration: '45 min',
    size: 'large',
  },
  {
    id: '0OzlghvYM1I',
    title: 'Building a Personal Brand Online',
    guest: 'Career Coach',
    duration: '38 min',
    size: 'small',
  },
  {
    id: 'WSwyXjPqDbo',
    title: 'Skills-First Hiring Revolution',
    guest: 'HR Innovator',
    duration: '52 min',
    size: 'small',
  },
  {
    id: '8Z3lOidpCwM',
    title: 'Scaling Teams Across Borders',
    guest: 'Business Founder',
    duration: '41 min',
    size: 'large',
  },
  {
    id: 'qd1pXqQjjVw',
    title: 'The Collaboration Advantage',
    guest: 'vico.net Panel',
    duration: '32 min',
    size: 'small',
  },
  {
    id: 'rBCRZKYgLL8',
    title: 'Navigating Career Transitions',
    guest: 'Executive Mentor',
    duration: '29 min',
    size: 'small',
  },
]

const upcomingWebinars = [
  {
    date: 'Jun 14, 2026',
    time: '14:00 UTC',
    title: 'AI & the Future of Talent Acquisition',
    host: 'Dr. Lebo Ndlovu',
    spots: 48,
  },
  {
    date: 'Jun 28, 2026',
    time: '11:00 UTC',
    title: 'Building Inclusive Remote Teams',
    host: 'Amina Yusuf',
    spots: 62,
  },
  {
    date: 'Jul 10, 2026',
    time: '15:00 UTC',
    title: 'Personal Branding for Professionals',
    host: 'David Okeke',
    spots: 35,
  },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="white" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.55)" />
      <polygon points="10,8 18,12 10,16" fill="white" />
    </svg>
  )
}

function PodcastCard({ podcast }: { podcast: (typeof podcasts)[0] }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://img.youtube.com/vi/${podcast.id}/hqdefault.jpg`

  return (
    <article className={`wp-podcast-card wp-podcast-card--${podcast.size}`}>
      {playing ? (
        <iframe
          className="wp-podcast-embed"
          src={`https://www.youtube.com/embed/${podcast.id}?autoplay=1`}
          title={podcast.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="wp-podcast-thumb"
          onClick={() => setPlaying(true)}
          aria-label={`Play podcast: ${podcast.title}`}
        >
          <img src={thumb} alt={podcast.title} loading="lazy" />
          <div className="wp-podcast-thumb-overlay">
            <PlayIcon />
          </div>
          <span className="wp-podcast-badge">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden>
              <path d="M12 2a3 3 0 013 3v6a3 3 0 01-6 0V5a3 3 0 013-3zm0 14a7 7 0 007-7h2a9 9 0 01-8 8.94V20h3v2H8v-2h3v-2.06A9 9 0 013 9h2a7 7 0 007 7z" />
            </svg>
            Podcast
          </span>
        </button>
      )}
      <div className="wp-podcast-info">
        <h3>{podcast.title}</h3>
        <p className="wp-podcast-meta">
          <span>{podcast.guest}</span>
          <span className="wp-dot">·</span>
          <span>{podcast.duration}</span>
        </p>
      </div>
    </article>
  )
}

export default function WebinarsPage() {
  const [featureModalOpen, setFeatureModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="wp-page">
      <Header />

      {/* Hero banner */}
      <section className="wp-hero">
        <div className="wp-hero-bg" aria-hidden />
        <div className="container wp-hero-content">
          <p className="eyebrow">KNOWLEDGE HUB</p>
          <h1>Webinars &amp; Podcasts</h1>
          <p className="wp-hero-lead">
            Expert conversations, live sessions, and on-demand episodes to help you grow your career and business.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg wp-feature-btn"
            onClick={() => setFeatureModalOpen(true)}
          >
            Want to be Featured?
          </button>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="wp-section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow eyebrow--on-light">LIVE SESSIONS</p>
            <h2>Upcoming Webinars</h2>
          </header>
          <ul className="wp-webinar-list">
            {upcomingWebinars.map((w) => (
              <li key={w.title} className="wp-webinar-item">
                <div className="wp-webinar-date-block">
                  <span className="wp-webinar-date">{w.date}</span>
                  <span className="wp-webinar-time">{w.time}</span>
                </div>
                <div className="wp-webinar-copy">
                  <h3>{w.title}</h3>
                  <p>Hosted by <strong>{w.host}</strong></p>
                </div>
                <div className="wp-webinar-actions">
                  <span className="wp-spots">{w.spots} spots left</span>
                  <button type="button" className="btn btn-primary">Register</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Podcast masonry */}
      <section className="wp-section wp-section--gray">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow eyebrow--on-light">ON DEMAND</p>
            <h2>Podcast Episodes</h2>
          </header>
          <div className="wp-masonry">
            {podcasts.map((p) => (
              <PodcastCard key={p.id + p.title} podcast={p} />
            ))}
          </div>
          <div className="wp-feature-row">
            <p>Have an expertise to share with our community?</p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => setFeatureModalOpen(true)}
            >
              Want to be Featured?
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Feature modal */}
      {featureModalOpen && (
        <div className="wp-modal-overlay" onClick={() => { setFeatureModalOpen(false); setSubmitted(false) }}>
          <div className="wp-modal" role="dialog" aria-modal="true" aria-labelledby="feature-modal-title" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="wp-modal-close"
              onClick={() => { setFeatureModalOpen(false); setSubmitted(false) }}
              aria-label="Close"
            >✕</button>

            {submitted ? (
              <div className="wp-modal-success">
                <svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="var(--magenta)" strokeWidth="2" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-5" />
                </svg>
                <h2 id="feature-modal-title">Request Sent!</h2>
                <p>We'll review your submission and reach out within 3–5 business days.</p>
                <button type="button" className="btn btn-primary" onClick={() => { setFeatureModalOpen(false); setSubmitted(false) }}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow eyebrow--on-light">FEATURE REQUEST</p>
                <h2 id="feature-modal-title">Want to be Featured?</h2>
                <p className="wp-modal-desc">Tell us about yourself and the topic you'd like to discuss. We'd love to have you on.</p>
                <form className="wp-feature-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} noValidate>
                  <div className="wp-form-row">
                    <div>
                      <label htmlFor="feat-name">Full Name</label>
                      <input id="feat-name" type="text" required placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="feat-email">Email</label>
                      <input id="feat-email" type="email" required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="feat-topic">Topic / Expertise</label>
                    <input id="feat-topic" type="text" required placeholder="e.g. Remote team leadership" />
                  </div>
                  <div>
                    <label htmlFor="feat-bio">Short Bio</label>
                    <textarea id="feat-bio" rows={3} placeholder="Tell us who you are and why you'd be a great guest…" />
                  </div>
                  <div>
                    <label htmlFor="feat-type">Format Preference</label>
                    <select id="feat-type">
                      <option value="podcast">Podcast</option>
                      <option value="webinar">Webinar</option>
                      <option value="both">Either / Both</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">Submit Request</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
