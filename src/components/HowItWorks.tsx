import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import FinalCta from './FinalCta'

const talentFlowSteps = [
  { title: 'Personal Info', desc: 'Name, role, email, phone added.' },
  { title: 'Verify', desc: 'Email OTP and identity check.' },
  { title: 'Upload CV', desc: 'Attach resume in PDF or DOCX.' },
  { title: 'Show Profile', desc: 'Publish and appear in search.' },
]

const businessFlowProfiles = [
  { id: 1, name: 'Amina Yusuf', role: 'Data Analyst', skills: 'Python • SQL' },
  { id: 2, name: 'David Okeke', role: 'Frontend Engineer', skills: 'React • TypeScript' },
  { id: 3, name: 'Lebo Ndlovu', role: 'Cloud Architect', skills: 'AWS • Terraform' },
]

const talentProcessSteps = [
  {
    title: 'Register with your personal email',
    text: 'Create your talent account using your personal email address.',
  },
  {
    title: 'Verify your email',
    text: 'Confirm your email to activate your account and continue onboarding.',
  },
  {
    title: 'Create profile or upload your CV',
    text: 'Build your profile manually or upload your CV to generate your profile faster.',
  },
  {
    title: 'View and edit your profile',
    text: 'Review your profile details and update them anytime to keep your profile current.',
  },
  {
    title: 'Get discovered',
    text: 'Your profile appears in relevant searches so businesses can find and shortlist you.',
  },
]

const businessProcessSteps = [
  {
    title: 'Register with your business email',
    text: 'Create your business account using your official company email address.',
  },
  {
    title: 'Verify your email',
    text: 'Confirm your email to activate your account and unlock hiring features.',
  },
  {
    title: 'Search for talent',
    text: 'Browse and filter skilled professionals based on role, expertise, and availability.',
  },
  {
    title: 'Shortlist and invite',
    text: 'Save top matches to your shortlist and invite selected candidates to connect.',
  },
]

const howHighlights = [
  {
    title: 'Showcase Your Talent',
    text: 'Create a rich profile with videos, documents and real work that highlights your skills.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="9" cy="9" r="3" />
        <circle cx="16" cy="10" r="2.5" />
        <path d="M3.5 18a5.5 5.5 0 0 1 11 0" />
        <path d="M13.5 18a4.5 4.5 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    title: 'Discover Opportunities',
    text: 'Find jobs, projects, and collaborations that match your skills and goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M15 15l5 5" />
      </svg>
    ),
  },
  {
    title: 'Connect & Collaborate',
    text: 'Build meaningful relationships and collaborate with talented professionals and businesses.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M8.5 13.5l3-3m0 0l3-3m-3 3l3 3m-3-3l-3 3" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
      </svg>
    ),
  },
  {
    title: 'Grow Your Business',
    text: 'Access a diverse pool of talent and resources to take your business to the next level.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M4 19h16" />
        <path d="M6 16l4-4 3 3 5-6" />
        <path d="M16 9h2v2" />
      </svg>
    ),
  },
  {
    title: 'Learn & Stay Ahead',
    text: 'Join webinars, read expert blogs and upskill for the future of work.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4H20v14H7.5A2.5 2.5 0 0 0 5 20.5V6.5z" />
        <path d="M8.5 9.5h8m-8 3h6" />
      </svg>
    ),
  },
]

function TalentPhoneSimulation({ showPillar = true }: { showPillar?: boolean }) {
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current === talentFlowSteps.length ? 1 : current + 1))
    }, 1800)

    return () => window.clearInterval(timer)
  }, [])

  const progress = (activeStep / talentFlowSteps.length) * 100

  return (
    <div className="how-column">
      {showPillar && (
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
      )}

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
              {talentFlowSteps.map((step, index) => {
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

function BusinessLaptopSimulation({ showPillar = true }: { showPillar?: boolean }) {
  const [activeRow, setActiveRow] = useState(1)
  const [shortlistedId, setShortlistedId] = useState(1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveRow((current) => {
        const next = current === businessFlowProfiles.length ? 1 : current + 1
        setShortlistedId(next)
        return next
      })
    }, 2200)

    return () => window.clearInterval(timer)
  }, [])

  const shortlistedCount = shortlistedId ? 1 : 0

  return (
    <div className="how-column">
      {showPillar && (
        <h3 className="how-pillar how-pillar--business">
          <span className="pillar-icon-wrap pillar-icon-wrap--business">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            </svg>
          </span>
          For Businesses
        </h3>
      )}

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
                {businessFlowProfiles.map((profile) => {
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

type HowItWorksProps = {
  embedded?: boolean
}

export default function HowItWorks({ embedded = false }: HowItWorksProps) {
  if (embedded) {
    return (
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
    )
  }

  return (
    <div className="how-page">
      <Header />

      <section className="wp-hero" aria-labelledby="how-page-hero-heading">
        <div className="wp-hero-bg" aria-hidden />
        <div className="container wp-hero-content">
          <p className="eyebrow">HOW IT WORKS</p>
          <h1 id="how-page-hero-heading">Your Journey From Profile To Opportunity</h1>
          <p className="wp-hero-lead">
            From creating a standout profile to getting shortlisted by top businesses, vico.net gives you a clear and
            guided path to growth.
          </p>
          <a className="btn btn-primary btn-lg" href="#how-steps">
            Explore the Steps
          </a>
        </div>
      </section>

      <section className="section section-how section-how-processes" id="how-steps" aria-labelledby="how-heading">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow eyebrow--on-light">HOW IT WORKS</p>
            <h2 id="how-heading">Opportunities Made Simple</h2>
          </header>

          <div className="how-process-stack">
            <article className="how-process-block" aria-label="Talent process">
              <div className="how-process-grid">
                <div className="how-process-visual">
                  <TalentPhoneSimulation showPillar={false} />
                </div>
                <div className="how-process-copy">
                  <p className="eyebrow eyebrow--on-light">FOR TALENT</p>
                  <ol className="how-process-steps">
                    {talentProcessSteps.map((step) => (
                      <li key={step.title}>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </li>
                    ))}
                  </ol>
                  <a className="btn btn-primary" href="#signup-talent">
                    Create Talent Account
                  </a>
                </div>
              </div>
            </article>

            <article className="how-process-block" aria-label="Business process">
              <div className="how-process-grid">
                <div className="how-process-copy">
                  <p className="eyebrow eyebrow--on-light">FOR BUSINESSES</p>
                  <ol className="how-process-steps">
                    {businessProcessSteps.map((step) => (
                      <li key={step.title}>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </li>
                    ))}
                  </ol>
                  <a className="btn btn-primary how-business-btn" href="#signup-business">
                    Open Business Account
                  </a>
                </div>
                <div className="how-process-visual">
                  <BusinessLaptopSimulation showPillar={false} />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-how-highlights" aria-label="Platform highlights">
        <div className="container globe-grow-wrap">
          <ul className="globe-grow-grid">
            {howHighlights.map((item) => (
              <li key={item.title} className="globe-grow-item">
                <div className="globe-grow-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />

      <Footer />
    </div>
  )
}
