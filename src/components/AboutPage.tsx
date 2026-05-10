import Header from './Header'
import Footer from './Footer'

const values = [
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
  {
    title: 'Global Reach',
    text: 'Spanning 50+ countries, we connect diverse talent with businesses everywhere.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
        <path d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
]

const stats = [
  { value: '10,000+', label: 'Professionals' },
  { value: '1,500+', label: 'Businesses' },
  { value: '50+', label: 'Countries' },
  { value: '98%', label: 'Satisfaction Rate' },
]

const timeline = [
  { year: '2020', event: 'vico.net® founded with a vision to bridge global talent gaps.' },
  { year: '2021', event: 'Launched the first talent marketplace with 500 founding members.' },
  { year: '2022', event: 'Expanded to 20 countries; introduced verified opportunity listings.' },
  { year: '2023', event: 'Launched knowledge hub: blogs, webinars, and podcasts.' },
  { year: '2024', event: 'Surpassed 10,000 professionals and 1,500 business partners.' },
  { year: '2025', event: 'Rolled out AI-assisted talent matching and profile insights.' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden />
        <div className="container about-hero-content">
          <p className="eyebrow">ABOUT US</p>
          <h1>Who We Are</h1>
          <p className="about-hero-lead">
            vico.net® is a digital ecosystem built to connect skilled professionals with businesses worldwide—
            enabling meaningful work, trusted collaboration, and long-term growth for everyone.
          </p>
          <div className="about-hero-ctas">
            <a className="btn btn-primary btn-lg" href="#signin-talent">Get Discovered</a>
            <a className="btn btn-outline-light btn-lg" href="#signin-business">Find Skilled Talent</a>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="about-mission">
        <div className="container about-mission-grid">
          <div className="about-mission-img-wrap">
            <img
              src="/images/graduate-business-handshake.jpg"
              alt="Professionals collaborating"
              className="about-mission-img"
              loading="lazy"
            />
          </div>
          <div className="about-mission-copy">
            <p className="eyebrow eyebrow--on-light">OUR MISSION</p>
            <h2>Connecting Talent with Opportunity, Globally</h2>
            <p>
              Vico.net® helps businesses and talented professionals connect, collaborate, and access meaningful
              opportunities for long-term growth. We are committed to unlocking a wide range of high-value
              opportunities for our members by building a trusted collaboration network.
            </p>
            <p>
              Through our platform, we offer services such as job postings, career opportunities, blogs,
              and seminars, while also connecting our community with mentors and advisors for practical
              guidance in a rapidly evolving digital landscape.
            </p>
            <blockquote className="about-quote">
              "More than a job board. A growth network built for ambitious people and forward-thinking businesses."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="about-stats-section">
        <div className="container">
          <ul className="about-stats-row">
            {stats.map((s) => (
              <li key={s.label} className="about-stat-item">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values-section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow eyebrow--on-light">WHAT WE STAND FOR</p>
            <h2>Our Core Values</h2>
          </header>
          <ul className="about-values-grid">
            {values.map((v) => (
              <li key={v.title} className="about-value-card">
                <div className="about-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Journey / Timeline ── */}
      <section className="about-timeline-section">
        <div className="container">
          <header className="section-head section-head--on-dark">
            <p className="eyebrow">OUR JOURNEY</p>
            <h2>Milestones That Define Us</h2>
          </header>
          <ol className="about-timeline">
            {timeline.map((item) => (
              <li key={item.year} className="about-timeline-item">
                <span className="about-timeline-year">{item.year}</span>
                <div className="about-timeline-dot" aria-hidden />
                <p className="about-timeline-event">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-section">
        <div className="container">
          <div className="final-cta-box">
            <p className="eyebrow eyebrow--cta">JOIN THE NETWORK</p>
            <h2>Your Next Opportunity is Closer Than You Think</h2>
            <p>Whether you're a professional ready to grow or a business ready to hire smarter, vico.net® is your launchpad.</p>
            <div className="final-cta-btns">
              <a className="btn btn-primary btn-lg" href="#signup-talent">Get Discovered</a>
              <a className="btn btn-outline-light btn-lg" href="#signup-business">Find Skilled Talent</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
