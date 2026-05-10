import { useState } from 'react'
import Header from './Header'

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
  const isLogin = mode === 'login'

  return (
    <div className="talent-auth-page">
      <Header />

      <main className="talent-auth-container" aria-labelledby="talent-auth-heading">
        <div className="container talent-auth-inner">
          <div className="talent-auth-content">
            {/* Hero Section */}
            <div className="talent-auth-hero">
              <h1 id="talent-auth-heading">{isLogin ? 'Welcome Back' : 'Build Your Profile'}</h1>
              <p className="talent-auth-subtitle">
                {isLogin
                  ? 'Access thousands of opportunities tailored to your skills'
                  : 'Join thousands of professionals growing their careers on vico.net®'}
              </p>
            </div>

            {/* Form Section */}
            <div className="talent-auth-form-container">
              {isLogin ? (
                <form
                  className="talent-auth-form"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                >
                  <div className="talent-form-group">
                    <label htmlFor="talent-login-email">Email Address</label>
                    <input
                      id="talent-login-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="talent-form-group">
                    <label htmlFor="talent-login-password">Password</label>
                    <input
                      id="talent-login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <a href="#" className="talent-auth-forgot" onClick={(e) => e.preventDefault()}>
                    Forgot password?
                  </a>

                  <button className="btn btn-primary btn-lg" type="submit">
                    Sign In
                  </button>

                  <div className="talent-auth-divider">
                    <span>Or continue with</span>
                  </div>

                  <button type="button" className="talent-auth-google-btn">
                    <GoogleIcon />
                    <span>Google</span>
                  </button>

                  <p className="talent-auth-switch">
                    Don&apos;t have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setEmail('')
                        setPassword('')
                        onModeChange('signup')
                      }}
                      className="talent-auth-switch-link"
                    >
                      Create a profile
                    </button>
                  </p>
                </form>
              ) : (
                <form
                  className="talent-auth-form"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                >
                  <button type="button" className="talent-auth-google-btn">
                    <GoogleIcon />
                    <span>Sign up with Google</span>
                  </button>

                  <div className="talent-auth-divider">
                    <span>Or sign up with email</span>
                  </div>

                  <div className="talent-form-row">
                    <div className="talent-form-group">
                      <label htmlFor="talent-full-name">First Name</label>
                      <input id="talent-full-name" type="text" placeholder="John" />
                    </div>
                    <div className="talent-form-group">
                      <label htmlFor="talent-surname">Last Name</label>
                      <input id="talent-surname" type="text" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="talent-form-group">
                    <label htmlFor="talent-email">Email Address</label>
                    <input id="talent-email" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="talent-form-group">
                    <label htmlFor="talent-mobile">Phone Number</label>
                    <input id="talent-mobile" type="tel" placeholder="+27 (0)XX XXX XXXX" />
                  </div>

                  <div className="talent-form-row">
                    <div className="talent-form-group">
                      <label htmlFor="talent-password">Password</label>
                      <input id="talent-password" type="password" placeholder="Create a password" />
                    </div>
                    <div className="talent-form-group">
                      <label htmlFor="talent-confirm-password">Confirm Password</label>
                      <input
                        id="talent-confirm-password"
                        type="password"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>

                  <div className="talent-auth-terms">
                    <label>
                      <input type="checkbox" required />
                      <span>
                        I accept the <a href="#">POPIA consent notice</a>
                      </span>
                    </label>
                    <label>
                      <input type="checkbox" required />
                      <span>
                        I accept the <a href="#">Terms and Conditions</a>
                      </span>
                    </label>
                  </div>

                  <button className="btn btn-primary btn-lg" type="submit">
                    Create Profile
                  </button>

                  <p className="talent-auth-switch">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setEmail('')
                        setPassword('')
                        onModeChange('login')
                      }}
                      className="talent-auth-switch-link"
                    >
                      Sign in
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Image Panel - Right Side */}
          <div className="talent-auth-image">
            <img
              src="/images/hero-talent-lagos.png"
              alt="Professional growth"
              className="talent-auth-image-img"
            />
            <div className="talent-auth-image-overlay" />
            <div className="talent-auth-image-copy">
              <p>Join a global community of professionals expanding their horizons.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
