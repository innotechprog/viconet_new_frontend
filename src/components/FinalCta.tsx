import IconArrow from './IconArrow'

export default function FinalCta() {
  return (
    <section className="section section-final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="final-cta-box">
          <p className="eyebrow eyebrow--cta">READY TO GET STARTED?</p>
          <h2 id="final-cta-heading">Your Next Opportunity is Closer Than You Think</h2>
          <p>
            Join thousands of professionals and businesses building the future of work on vico.net®.
          </p>
          <div className="final-cta-btns">
            <a className="btn btn-primary btn-lg btn-with-icon" href="#signup-talent">
              Sign Up as Talent
              <IconArrow />
            </a>
            <a className="btn btn-outline-light btn-lg btn-with-icon" href="#signup-business">
              Sign Up as Business
              <IconArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
