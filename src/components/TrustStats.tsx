const stats = [
  { line1: '10,000+', line2: 'Professionals' },
  { line1: '1,500+', line2: 'Businesses' },
  { line1: '50+', line2: 'Countries' },
  { line1: '98%', line2: 'Satisfaction Rate' },
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
              <span className="stat-line2">{s.line2}</span>
            </li>
          ))}
        </ul>
        <p className="partners-label">Trusted by teams at</p>
        <ul className="partners-row">
          {partners.map((p) => (
            <li key={p.id} className="partner-logo partner-logo--svg">
              {p.el}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
