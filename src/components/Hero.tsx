import { useState } from 'react'
import IconArrow from './IconArrow'

const placeholderAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
    <rect width="160" height="160" rx="40" fill="#EEF2FF"/>
    <circle cx="80" cy="58" r="26" fill="#94A3B8"/>
    <path d="M40 132c0-24.301 17.909-40 40-40s40 15.699 40 40" fill="#94A3B8"/>
  </svg>
`)}`

const profiles = [
  {
    name: 'Amara O.',
    role: 'Data Scientist',
    location: 'Nairobi, Kenya',
    experience: '5+ years experience',
    qualifications: ['Python', 'SQL', 'Machine Learning'],
    image: placeholderAvatar,
    style: { top: '6%', right: '8%' },
  },
  {
    name: 'David K.',
    role: 'Software Engineer',
    location: 'Lagos, Nigeria',
    experience: '7+ years experience',
    qualifications: ['React', 'TypeScript', 'Node.js'],
    image: placeholderAvatar,
    style: { top: '36%', right: '14%' },
  },
  {
    name: 'James T.',
    role: 'Product Designer',
    location: 'London, UK',
    experience: '6+ years experience',
    qualifications: ['Figma', 'Design Systems', 'UX Research'],
    image: placeholderAvatar,
    style: { top: '64%', right: '4%' },
  },
]

export default function Hero() {
  const [selectedProfile, setSelectedProfile] = useState<(typeof profiles)[0] | null>(null)

  const handleCardClick = (profile: (typeof profiles)[0]) => {
    setSelectedProfile(profile)
  }

  const handleLoginRedirect = () => {
    window.location.href = '#signin-talent'
    setSelectedProfile(null)
  }

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-anchor" id="signin-talent" aria-hidden="true" />
      <div className="hero-anchor" id="signin-business" aria-hidden="true" />
      <div className="hero-anchor" id="signup-talent" aria-hidden="true" />
      <div className="hero-anchor" id="signup-business" aria-hidden="true" />
      <div className="hero-map-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">CONNECT. COLLABORATE. GROW.</p>
          <h1 id="hero-heading">Where Talent Meets Opportunity</h1>
          <p className="hero-lead">
            Join the digital ecosystem connecting top talent with leading businesses worldwide—discover
            opportunities, collaborate with confidence, and grow your career or team.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg btn-with-icon" href="#signup-talent">
              I&apos;m a Talent – Get Discovered
              <IconArrow />
            </a>
            <a className="btn btn-outline-light btn-lg btn-with-icon" href="#signup-business">
              I&apos;m a Business – Find Talent
              <IconArrow />
            </a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              {profiles.map((profile) => (
                <img key={profile.role} src={profile.image} alt="" width={44} height={44} />
              ))}
            </div>
            <p>
              <span className="proof-strong">10,000+</span> Professionals <span className="proof-dot">•</span>{' '}
              <span className="proof-strong">1,500+</span> Businesses <span className="proof-dot">•</span>{' '}
              <span className="proof-strong">50+</span> Countries
            </p>
          </div>
        </div>

        <div className="hero-cards" aria-hidden="true">
          {profiles.map((p) => (
            <button
              key={p.name}
              className="talent-card talent-card--clickable"
              style={p.style}
              onClick={() => handleCardClick(p)}
              aria-label={`View ${p.role} profile`}
              type="button"
            >
              <div className="talent-card-inner talent-card-inner--hidden">
                <img
                  src={p.image}
                  alt="Talent avatar"
                  width={72}
                  height={72}
                  className="talent-avatar"
                />
                <div className="talent-meta">
                  <p className="talent-role">{p.role}</p>
                  <p className="talent-loc">{p.experience}</p>
                  <p className="talent-qualifications">{p.qualifications.join(' • ')}</p>
                  <p className="talent-status">
                    <span className="status-dot" /> Available
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProfile && (
        <div className="profile-modal-overlay" onClick={() => setSelectedProfile(null)}>
          <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="profile-modal-close"
              onClick={() => setSelectedProfile(null)}
              aria-label="Close profile"
              type="button"
            >
              ✕
            </button>
            <div className="profile-modal-content">
              <img
                src={selectedProfile.image}
                alt="Talent avatar"
                width={80}
                height={80}
                className="profile-modal-avatar"
              />
              <h2 className="profile-modal-name">{selectedProfile.role}</h2>
              <p className="profile-modal-role">{selectedProfile.experience}</p>
              <p className="profile-modal-qualifications">
                {selectedProfile.qualifications.join(' • ')}
              </p>
              <p className="profile-modal-status">
                <span className="status-dot" /> Available
              </p>
              <p className="profile-modal-info">Sign in to view full profile and connect with this talent.</p>
              <button
                className="btn btn-primary btn-lg"
                onClick={handleLoginRedirect}
                type="button"
              >
                Sign In to View Full Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
