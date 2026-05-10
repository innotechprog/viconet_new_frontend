import { useEffect, useState } from 'react'

type BusinessAuthMode = 'login' | 'signup'

export default function BusinessAuthPage({
  mode,
  onModeChange,
}: {
  mode: BusinessAuthMode
  onModeChange: (next: BusinessAuthMode) => void
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isHeaderElevated, setIsHeaderElevated] = useState(false)
  const isLogin = mode === 'login'

  useEffect(() => {
    const onScroll = () => {
      setIsHeaderElevated(window.scrollY > 4)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <main className="auth-redesign business-auth-redesign">
      {/* Left Image Panel */}
      <div className="auth-redesign-image">
        <img
          src="/images/graduate-business-handshake.jpg"
          alt="Team collaboration"
          className="auth-redesign-image-img"
        />
        <div className="auth-redesign-image-overlay" />
        <div className="auth-redesign-image-content">
          <div className="auth-redesign-badge">Business Portal • vico.net®</div>
          <h2>Scale Your Team</h2>
          <p>Access top-vetted professionals worldwide.</p>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="auth-redesign-form-section">
        <div className={`auth-redesign-form-header${isHeaderElevated ? ' is-scrolled' : ''}`}>
          <button
            type="button"
            className="auth-redesign-back-btn"
            onClick={() => (window.location.hash = '')}
            aria-label="Back to homepage"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img src="/viconet-logo.png" alt="vico.net" className="auth-redesign-logo" />
        </div>

        <div className="auth-redesign-form-wrapper">
          {isLogin ? (
            <>
              <div className="auth-redesign-header">
                <h1>Welcome Back</h1>
              </div>

              <form className="auth-redesign-form" onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="auth-form-field">
                  <label htmlFor="business-login-email">Business Email</label>
                  <input
                    id="business-login-email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="auth-form-field">
                  <div className="auth-form-field-header">
                    <label htmlFor="business-login-password">Password</label>
                    <a href="#" className="auth-forgot-link" onClick={(e) => e.preventDefault()}>
                      Forgot?
                    </a>
                  </div>
                  <input
                    id="business-login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button className="auth-redesign-submit-btn" type="submit">
                  Sign In
                </button>

                <p className="auth-redesign-switch">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('')
                      setPassword('')
                      onModeChange('signup')
                    }}
                    className="auth-redesign-switch-btn"
                  >
                    Create one
                  </button>
                </p>
              </form>
            </>
          ) : (
            <>
              <div className="auth-redesign-header">
                <h1>Set Up Your Account</h1>
                <p>Get started hiring the best talent</p>
              </div>

              <form className="auth-redesign-form" onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="auth-form-row">
                  <div className="auth-form-field">
                    <label htmlFor="company-name">Company Name</label>
                    <input id="company-name" type="text" placeholder="Your Company" />
                  </div>
                  <div className="auth-form-field">
                    <label htmlFor="company-reg">Registration Number</label>
                    <input id="company-reg" type="text" placeholder="0123456789" />
                  </div>
                </div>

                <div className="auth-form-field">
                  <label htmlFor="company-address">Company Address</label>
                  <input id="company-address" type="text" placeholder="Enter your business address" />
                </div>

                <div className="auth-form-field">
                  <label htmlFor="company-website">Website (Optional)</label>
                  <input id="company-website" type="url" placeholder="https://yourcompany.com" />
                </div>

                <div className="auth-form-row">
                  <div className="auth-form-field">
                    <label htmlFor="contact-full-name">First Name</label>
                    <input id="contact-full-name" type="text" placeholder="John" />
                  </div>
                  <div className="auth-form-field">
                    <label htmlFor="contact-surname">Last Name</label>
                    <input id="contact-surname" type="text" placeholder="Doe" />
                  </div>
                </div>

                <div className="auth-form-field">
                  <label htmlFor="contact-title">Job Title</label>
                  <input id="contact-title" type="text" placeholder="e.g., HR Manager" />
                </div>

                <div className="auth-form-row">
                  <div className="auth-form-field">
                    <label htmlFor="company-phone">Company Phone</label>
                    <input id="company-phone" type="tel" placeholder="+27 (0)XX XXX XXXX" />
                  </div>
                  <div className="auth-form-field">
                    <label htmlFor="contact-phone">Your Phone</label>
                    <input id="contact-phone" type="tel" placeholder="+27 (0)XX XXX XXXX" />
                  </div>
                </div>

                <div className="auth-form-row">
                  <div className="auth-form-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input id="contact-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="auth-form-field">
                    <label htmlFor="confirm-email">Confirm Email</label>
                    <input id="confirm-email" type="email" placeholder="Confirm email address" />
                  </div>
                </div>

                <div className="auth-form-row">
                  <div className="auth-form-field">
                    <label htmlFor="signup-password">Password</label>
                    <input id="signup-password" type="password" placeholder="••••••••" />
                  </div>
                  <div className="auth-form-field">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input id="confirm-password" type="password" placeholder="••••••••" />
                  </div>
                </div>

                <div className="auth-redesign-terms">
                  <label>
                    <input type="checkbox" required />
                    <span>
                      I accept the <a href="#">Membership Terms</a>
                    </span>
                  </label>
                  <label>
                    <input type="checkbox" required />
                    <span>
                      I accept the <a href="#">Subscription Terms</a>
                    </span>
                  </label>
                  <label>
                    <input type="checkbox" required />
                    <span>
                      I accept the <a href="#">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                <button className="auth-redesign-submit-btn" type="submit">
                  Create Account
                </button>

                <p className="auth-redesign-switch">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('')
                      setPassword('')
                      onModeChange('login')
                    }}
                    className="auth-redesign-switch-btn"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
