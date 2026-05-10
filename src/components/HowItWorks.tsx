import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

function TalentPhoneSimulation() {
  const steps = [
    { title: 'Personal Info', desc: 'Name, role, email, phone added.' },
    { title: 'Verify', desc: 'Email OTP and identity check.' },
    { title: 'Upload CV', desc: 'Attach resume in PDF or DOCX.' },
    { title: 'Show Profile', desc: 'Publish and appear in search.' },
  ]

  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current === steps.length ? 1 : current + 1))
    }, 1800)

    return () => window.clearInterval(timer)
  }, [steps.length])

  const progress = (activeStep / steps.length) * 100

  return (
    <div className="how-column">
      <h3 className="how-pillar how-pillar--talent">
        <span className="pillar-icon-wrap pillar-icon-wrap--talent">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="7" y="2" width="10" height="20" rx="2.5" />
            <path d="M10 6h4" />
            <circle cx="12" cy="18" r="1" />
          </svg>
        </span>
        For Talent
      </h3>

      <div className="sim-device-stage sim-device-stage--talent">
        <article className="phone-shell" aria-label="Talent mobile profile creation simulation">
          <div className="phone-side-buttons" aria-hidden>
            <span className="phone-button phone-button--volume-up" />
            <span className="phone-button phone-button--volume-down" />
            <span className="phone-button phone-button--power" />
          </div>

          <div className="phone-top" aria-hidden>
            <span className="phone-time">9:41</span>
            <div className="phone-island">
              <span className="island-camera" />
              <span className="island-speaker" />
            </div>
            <span className="phone-signal">5G</span>
          </div>

          <div className="phone-screen">
            <p className="phone-title">Create Talent Profile</p>

            <div className="sim-progress" aria-hidden>
              <div className="sim-progress-bar" style={{ width: `${progress}%` }} />
            </div>

            <div className="sim-stepper" aria-label="Profile creation steps">
              {steps.map((step, index) => {
                const stepNumber = index + 1
                const attended = stepNumber <= activeStep
                const isActive = stepNumber === activeStep

                return (
                  <article
                    key={step.title}
                    className={`sim-step ${attended ? 'sim-step--done' : ''} ${isActive ? 'sim-step--active' : ''}`}
                  >
                    <span className="sim-step-num">{stepNumber}</span>
                    <div className="sim-step-copy">
                      <p className="sim-step-title">{step.title}</p>
                      <p className="sim-step-desc">{step.desc}</p>
                    </div>
                    <span className="sim-step-state" aria-hidden>
                      {attended ? 'Done' : 'Pending'}
                    </span>
                  </article>
                )
              })}
            </div>

            <a className="sim-create-btn" href="#signup-talent">
              Register Now
            </a>

            <div className="phone-home-bar" aria-hidden />
          </div>
        </article>
      </div>
    </div>
  )
}

function BusinessLaptopSimulation() {
  const profiles = [
    { id: 1, name: 'Amina Yusuf', role: 'Data Analyst', skills: 'Python • SQL' },
    { id: 2, name: 'David Okeke', role: 'Frontend Engineer', skills: 'React • TypeScript' },
    { id: 3, name: 'Lebo Ndlovu', role: 'Cloud Architect', skills: 'AWS • Terraform' },
  ]

  const [activeRow, setActiveRow] = useState(1)
  const [shortlistedId, setShortlistedId] = useState(1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveRow((current) => {
        const next = current === profiles.length ? 1 : current + 1
        setShortlistedId(next)
        return next
      })
    }, 2200)

    return () => window.clearInterval(timer)
  }, [profiles.length])

  const shortlistedCount = shortlistedId ? 1 : 0

  return (
    <div className="how-column">
      <h3 className="how-pillar how-pillar--business">
        <span className="pillar-icon-wrap pillar-icon-wrap--business">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
          </svg>
        </span>
        For Businesses
      </h3>

      <div className="sim-device-stage sim-device-stage--business">
        <article className="laptop-shell" aria-label="Business laptop shortlist simulation">
          <div className="laptop-display">
            <div className="laptop-camera" aria-hidden />
            <div className="laptop-screen">
              <div className="laptop-search-hero" aria-label="Business search toolbar simulation">
                <div className="laptop-search-top">
                  <span className="laptop-brand">
                    <img src="/viconet-logo.svg" alt="vico.net" className="laptop-brand-logo" />
                  </span>
                  <nav className="laptop-mini-nav" aria-label="Business quick navigation">
                    <span>Talent Search</span>
                    <span>Projects</span>
                    <span>Toolkits</span>
                    <span>Pricing</span>
                  </nav>
                  <span className="laptop-posting-pill">Job Posting</span>
                </div>

                <div className="laptop-search-row">
                  <span className="laptop-search-placeholder">Job title, skills, location...</span>
                  <button className="laptop-search-btn" type="button">
                    Search
                  </button>
                </div>
              </div>

              <div className="laptop-toolbar">
                <span>Talent Pipeline</span>
                <span>{shortlistedCount} shortlisted</span>
              </div>

              <div className="laptop-profile-list">
                {profiles.map((profile) => {
                  const isActive = profile.id === activeRow
                  const isShortlisted = shortlistedId === profile.id

                  return (
                    <article key={profile.id} className={`laptop-profile ${isActive ? 'laptop-profile--active' : ''}`}>
                      <span className="laptop-avatar" aria-hidden />
                      <div className="laptop-profile-copy">
                        <p className="laptop-name">{profile.name}</p>
                        <p className="laptop-role">{profile.role}</p>
                        <p className="laptop-skills">{profile.skills}</p>
                      </div>
                      <button
                        className={`laptop-shortlist-btn ${isShortlisted ? 'is-selected' : ''}`}
                        type="button"
                        onClick={() => setShortlistedId(profile.id)}
                      >
                        {isShortlisted ? 'Shortlisted' : 'Shortlist'}
                      </button>
                    </article>
                  )
                })}
              </div>

              <a className="laptop-action-link" href="#signup-business">
                Open Business Dashboard
              </a>
            </div>
          </div>

          <div className="laptop-base" aria-hidden>
            <div className="laptop-trackpad" />
          </div>
        </article>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <div className="how-page">
      <Header />
      <section className="section section-how" id="about" aria-labelledby="how-heading">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow eyebrow--on-light">HOW IT WORKS</p>
            <h2 id="how-heading">Opportunities Made Simple</h2>
          </header>

          <div className="how-grid">
            <TalentPhoneSimulation />
            <BusinessLaptopSimulation />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
