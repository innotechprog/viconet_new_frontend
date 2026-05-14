const stats = [
  { line1: '10,000+', line2: 'Professionals', accent: '#111827' },
  { line1: '1,500+',  line2: 'Businesses',    accent: '#6b7280' },
  { line1: '50+',     line2: 'Countries',      accent: '#6b7280' },
  { line1: '98%',     line2: 'Satisfaction Rate', accent: '#6b7280' },
]

function PartnerMicrosoft() {
  return (
    <svg className="partner-svg" viewBox="0 0 120 26" aria-hidden>
      <path fill="currentColor" d="M0 0h11.5v11.5H0V0zm12.8 0H24v11.5H12.8V0zM0 12.8h11.5V24H0V12.8zm12.8 0H24V24H12.8V12.8z" />
      <text x="32" y="18" fill="currentColor" fontSize="15" fontWeight="600" fontFamily="system-ui,sans-serif">
        Microsoft
      </text>
    </svg>
  )
}

function PartnerDeloitte() {
  return (
    <svg className="partner-svg" viewBox="0 0 140 26" aria-hidden>
      <text x="0" y="18" fill="currentColor" fontSize="15" fontWeight="700" fontFamily="Georgia,serif" letterSpacing="0.02em">
        DELOITTE
      </text>
    </svg>
  )
}

function PartnerAws() {
  return (
    <svg className="partner-svg partner-aws" viewBox="0 0 72 26" aria-hidden>
      <text x="0" y="12" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
        amazon
      </text>
      <text x="0" y="24" fill="currentColor" fontSize="15" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="-0.02em">
        aws
      </text>
    </svg>
  )
}

function PartnerIbm() {
  return (
    <svg className="partner-svg" viewBox="0 0 56 26" aria-hidden>
      <text x="0" y="19" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="0.35em">
        IBM
      </text>
    </svg>
  )
}

const partners = [
  { id: 'ms', el: <PartnerMicrosoft /> },
  { id: 'de', el: <PartnerDeloitte /> },
  { id: 'aws', el: <PartnerAws /> },
  { id: 'ibm', el: <PartnerIbm /> },
]

const partnersLoop = [...partners, ...partners, ...partners, ...partners]

export default function TrustStats() {
  return (
    <section className="section section-trust" id="jobs" aria-labelledby="trust-heading">
      <div className="container">
        <h2 id="trust-heading" className="visually-hidden">
          Trust and partners
        </h2>
        <ul className="stats-row">
          {stats.map((s) => (
            <li key={s.line2} className="stat-item">
              <span className="stat-line1">{s.line1}</span>
              <span className="stat-line2" style={{ color: s.accent }}>{s.line2}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="partners-carousel">
        <p className="partners-label">Trusted by teams at</p>
        <div className="partners-carousel-track-wrap" aria-hidden="true">
          <ul className="partners-carousel-track">
            {partnersLoop.map((p, i) => (
              <li key={`${p.id}-${i}`} className="partner-logo partner-logo--svg">
                {p.el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
