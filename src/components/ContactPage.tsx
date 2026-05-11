import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="contact-page">
      <Header />

      <section className="contact-hero">
        <div className="contact-hero-bg" aria-hidden />
        <div className="container contact-hero-content">
          <p className="eyebrow">CONTACT</p>
          <h1>Let&apos;s Talk</h1>
          <p className="contact-hero-lead">
            Have a question about hiring, partnerships, or your profile? Reach out and our team will respond.
          </p>
          <div className="contact-hero-ctas">
            <a className="btn btn-primary btn-lg" href="#about-us">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info-card">
            <h2>Get In Touch</h2>
            <p>We usually respond within one business day.</p>

            <ul className="contact-list">
              <li>
                <strong>Email</strong>
                <a href="mailto:hello@vico.net">hello@vico.net</a>
              </li>
              <li>
                <strong>Phone</strong>
                <a href="tel:+27110000000">+27 11 000 0000</a>
              </li>
              <li>
                <strong>Location</strong>
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>

            <div className="contact-quick-links">
              <a className="btn btn-nav-talent" href="#jobs">
                Browse Jobs
              </a>
              <a className="btn btn-primary" href="#signin-business">
                Hire Talent
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <h3>Message Sent</h3>
                <p>Thanks for reaching out. Our team will get back to you soon.</p>
                <button type="button" className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
                noValidate
              >
                <div className="contact-form-row">
                  <div>
                    <label htmlFor="contact-name">Full Name</label>
                    <input id="contact-name" type="text" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-topic">Topic</label>
                  <select id="contact-topic" defaultValue="general">
                    <option value="general">General inquiry</option>
                    <option value="talent">Talent support</option>
                    <option value="business">Business support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" rows={5} placeholder="How can we help?" required />
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
