import type { ReactNode } from 'react'

const talentSteps = [
  {
    n: 1,
    title: 'Create Your Profile',
    text: 'Showcase your skills, experience, and goals in a profile designed to stand out.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    n: 2,
    title: 'Get Discovered',
    text: 'Businesses browse verified talent and reach out when there is a strong match.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    n: 3,
    title: 'Collaborate & Grow',
    text: 'Work on meaningful projects and build relationships that advance your career.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
]

const businessSteps = [
  {
    n: 1,
    title: 'Find the Right Talent',
    text: 'Search profiles, skills, and availability to shortlist candidates quickly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    n: 2,
    title: 'Review & Connect',
    text: 'Compare profiles, message securely, and align on scope before you commit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
      </svg>
    ),
  },
  {
    n: 3,
    title: 'Hire & Collaborate',
    text: 'Onboard talent and collaborate in one ecosystem built for long-term partnerships.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

function StepCard({ step, accent }: { step: (typeof talentSteps)[0]; accent: 'talent' | 'business' }) {
  return (
    <article className={`step-card step-card--${accent}`}>
      <div className="step-card-top">
        <span className={`step-num step-num--${accent}`}>{step.n}</span>
        <span className={`step-icon step-icon--${accent}`}>{step.icon}</span>
      </div>
      <div className="step-card-body">
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </article>
  )
}

function FlowArrow({ accent }: { accent: 'talent' | 'business' }) {
  return (
    <div className={`step-flow-arrow step-flow-arrow--${accent}`} aria-hidden>
      <svg viewBox="0 0 24 48" width="24" height="36" fill="none">
        <path
          d="M12 4v28M8 28l4 8 4-8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function StepColumn({
  title,
  accent,
  steps,
  pillarIcon,
}: {
  title: string
  accent: 'talent' | 'business'
  steps: typeof talentSteps
  pillarIcon: ReactNode
}) {
  return (
    <div className="how-column">
      <h3 className={`how-pillar how-pillar--${accent}`}>
        <span className={`pillar-icon-wrap pillar-icon-wrap--${accent}`}>{pillarIcon}</span>
        {title}
      </h3>
      <div className="step-flow">
        {steps.map((s, i) => (
          <div key={s.n} className="step-flow-slot">
            <StepCard step={s} accent={accent} />
            {i < steps.length - 1 ? <FlowArrow accent={accent} /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="section section-how" id="about" aria-labelledby="how-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow eyebrow--on-light">HOW IT WORKS</p>
          <h2 id="how-heading">Opportunities Made Simple</h2>
        </header>

        <div className="how-grid">
          <StepColumn
            title="For Talent"
            accent="talent"
            steps={talentSteps}
            pillarIcon={
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
          />
          <StepColumn
            title="For Businesses"
            accent="business"
            steps={businessSteps}
            pillarIcon={
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  )
}
