const features = [
  {
    title: 'Talent Profiles That Shine',
    text: 'Rich profiles highlight skills, portfolios, and availability—not just a résumé upload.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 11a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
      </svg>
    ),
  },
  {
    title: 'Verified Opportunities',
    text: 'Roles and companies are reviewed so professionals can apply with confidence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l7 4v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V7l7-4z" />
      </svg>
    ),
  },
  {
    title: 'Knowledge & Growth',
    text: 'Articles, webinars, and podcasts help you stay ahead in a changing world of work.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Community & Support',
    text: 'Connect with peers and get guidance when you need it—from onboarding to hire.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Built for the Future',
    text: 'A platform designed to scale with remote, hybrid, and global collaboration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
]

export default function WhyChoose() {
  return (
    <section className="section section-why" id="services" aria-labelledby="why-heading">
      <div className="container">
        <header className="section-head section-head--on-dark">
          <p className="eyebrow">WHY CHOOSE VICO.NET™</p>
          <h2 id="why-heading">More Than a Job Board. A Growth Network.</h2>
        </header>
        <ul className="feature-grid">
          {features.map((f) => (
            <li key={f.title} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
