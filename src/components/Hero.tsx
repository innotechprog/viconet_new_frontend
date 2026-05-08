import IconArrow from './IconArrow'

const profiles = [
  {
    name: 'Amara O.',
    role: 'Data Scientist',
    location: 'Nairobi, Kenya',
    image: '/images/hero-talent-nairobi.png',
    style: { top: '6%', right: '8%' },
  },
  {
    name: 'David K.',
    role: 'Software Engineer',
    location: 'Lagos, Nigeria',
    image: '/images/hero-talent-lagos.png',
    style: { top: '36%', right: '14%' },
  },
  {
    name: 'James T.',
    role: 'Product Designer',
    location: 'London, UK',
    image: '/images/hero-talent-london.png',
    style: { top: '64%', right: '4%' },
  },
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
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
              <img src="/images/hero-talent-nairobi.png" alt="" width={44} height={44} />
              <img src="/images/hero-talent-lagos.png" alt="" width={44} height={44} />
              <img src="/images/hero-talent-london.png" alt="" width={44} height={44} />
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
            <article key={p.name} className="talent-card" style={p.style}>
              <div className="talent-card-inner">
                <img src={p.image} alt="" width={52} height={52} className="talent-avatar" />
                <div className="talent-meta">
                  <p className="talent-name">{p.name}</p>
                  <p className="talent-role">{p.role}</p>
                  <p className="talent-loc">{p.location}</p>
                  <p className="talent-status">
                    <span className="status-dot" /> Available
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
