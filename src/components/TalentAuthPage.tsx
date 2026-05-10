import { useEffect, useState } from 'react'

type TalentAuthMode = 'login' | 'signup'

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden>
    <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.09-6.09C34.46 3.08 29.5 1 24 1 14.82 1 6.98 6.48 3.5 14.26l7.09 5.51C12.3 13.6 17.67 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.14-3.13-.4-4.62H24v8.74h12.68c-.55 2.9-2.2 5.36-4.68 7.02l7.2 5.6C43.7 37.4 46.5 31.4 46.5 24.5z" />
    <path fill="#FBBC05" d="M10.59 28.23A14.56 14.56 0 0 1 9.5 24c0-1.47.25-2.9.7-4.23L3.11 14.26A23.5 23.5 0 0 0 .5 24c0 3.77.9 7.34 2.5 10.5l7.59-6.27z" />
    <path fill="#34A853" d="M24 47c5.5 0 10.12-1.82 13.5-4.96l-7.2-5.6c-1.83 1.23-4.18 1.96-6.3 1.96-6.33 0-11.7-4.1-13.41-9.77l-7.09 5.51C6.98 41.52 14.82 47 24 47z" />
  </svg>
)

export default function TalentAuthPage({
  mode,
  onModeChange,
}: {
  mode: TalentAuthMode
  onModeChange: (next: TalentAuthMode) => void
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
    <main className="auth-redesign talent-auth-redesign">
      {/* Left Image Panel */}
      <div className="auth-redesign-image">
        <img
          src="/images/hero-talent-lagos.png"
          alt="Professionals growing"
          className="auth-redesign-image-img"
        />
        <div className="auth-redesign-image-overlay" />
        <div className="auth-redesign-image-content">
          <div className="auth-redesign-badge">Talent Portal • vico.net®</div>
          <h2>Grow Your Career</h2>
          <p>Join thousands of professionals accessing global opportunities.</p>
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
          <div className="auth-redesign-header">
            <h1>{isLogin ? 'Welcome Back' : 'Build Your Profile'}</h1>
            {isLogin && <p>Access thousands of opportunities tailored to your skills</p>}
          </div>

          {isLogin ? (
            <form className="auth-redesign-form" onSubmit={(e) => e.preventDefault()} noValidate>
              <button type="button" className="auth-redesign-google-btn">
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>

              <div className="auth-redesign-divider">Or sign in with email</div>

              <div className="auth-form-field">
                <label htmlFor="talent-login-email">Email Address</label>
                <input
                  id="talent-login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="auth-form-field">
                <div className="auth-form-field-header">
                  <label htmlFor="talent-login-password">Password</label>
                  <a href="#" className="auth-forgot-link" onClick={(e) => e.preventDefault()}>
                    Forgot?
                  </a>
                </div>
                <input
                  id="talent-login-password"
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
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setEmail('')
                    setPassword('')
                    onModeChange('signup')
                  }}
                  className="auth-redesign-switch-btn"
                >
                  Create a profile
                </button>
              </p>
            </form>
          ) : (
            <form className="auth-redesign-form" onSubmit={(e) => e.preventDefault()} noValidate>
              <button type="button" className="auth-redesign-google-btn">
                <GoogleIcon />
                <span>Sign up with Google</span>
              </button>

              <div className="auth-redesign-divider">Or sign up with email</div>

              <div className="auth-form-row">
                <div className="auth-form-field">
                  <label htmlFor="talent-first-name">First Name</label>
                  <input id="talent-first-name" type="text" placeholder="John" />
                </div>
                <div className="auth-form-field">
                  <label htmlFor="talent-last-name">Last Name</label>
                  <input id="talent-last-name" type="text" placeholder="Doe" />
                </div>
              </div>

              <div className="auth-form-field">
                <label htmlFor="talent-signup-email">Email Address</label>
                <input id="talent-signup-email" type="email" placeholder="you@example.com" />
              </div>

              <div className="auth-form-field">
                <label htmlFor="talent-phone">Phone Number</label>
                <input id="talent-phone" type="tel" placeholder="+27 (0)XX XXX XXXX" />
              </div>

              <div className="auth-form-row">
                <div className="auth-form-field">
                  <label htmlFor="talent-signup-password">Password</label>
                  <input id="talent-signup-password" type="password" placeholder="••••••••" />
                </div>
                <div className="auth-form-field">
                  <label htmlFor="talent-confirm-password">Confirm Password</label>
                  <input id="talent-confirm-password" type="password" placeholder="••••••••" />
                </div>
              </div>

              <div className="auth-redesign-terms">
                <label>
                  <input type="checkbox" required />
                  <span>
                    I accept the <a href="#">POPIA consent</a>
                  </span>
                </label>
                <label>
                  <input type="checkbox" required />
                  <span>
                    I accept the <a href="#">Terms & Conditions</a>
                  </span>
                </label>
              </div>

              <button className="auth-redesign-submit-btn" type="submit">
                Create Profile
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
          )}
        </div>
      </div>
    </main>
  )
}
