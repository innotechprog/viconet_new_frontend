import { useState } from 'react'
import Header from './Header'

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
  const isLogin = mode === 'login'

  return (
    <div className="business-auth-page">
      <Header />

      <main className="business-auth-container" aria-labelledby="business-auth-heading">
        <div className="container business-auth-inner">
          <div className="business-auth-content">
            {/* Hero Section */}
            <div className="business-auth-hero">
              <h1 id="business-auth-heading">{isLogin ? 'Welcome Back' : 'Grow Your Team'}</h1>
              <p className="business-auth-subtitle">
                {isLogin
                  ? 'Access a global pool of verified talent for your business'
                  : 'Connect with top professionals and scale your team on vico.net®'}
              </p>
            </div>

            {/* Form Section */}
            <div className="business-auth-form-container">
              {isLogin ? (
                <form
                  className="business-auth-form"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                >
                  <div className="business-form-group">
                    <label htmlFor="business-login-email">Business Email</label>
                    <input
                      id="business-login-email"
                      type="email"
                      placeholder="company@business.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="business-form-group">
                    <label htmlFor="business-login-password">Password</label>
                    <input
                      id="business-login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <a href="#" className="business-auth-forgot" onClick={(e) => e.preventDefault()}>
                    Forgot password?
                  </a>

                  <button className="btn btn-primary btn-lg" type="submit">
                    Sign In
                  </button>

                  <p className="business-auth-switch">
                    Don&apos;t have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setEmail('')
                        setPassword('')
                        onModeChange('signup')
                      }}
                      className="business-auth-switch-link"
                    >
                      Create one
                    </button>
                  </p>
                </form>
              ) : (
                <form
                  className="business-auth-form"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                >
                  <div className="business-form-row">
                    <div className="business-form-group">
                      <label htmlFor="company-name">Company Name</label>
                      <input id="company-name" type="text" placeholder="Your Company" />
                    </div>
                    <div className="business-form-group">
                      <label htmlFor="company-reg">Registration Number</label>
                      <input id="company-reg" type="text" placeholder="0123456789" />
                    </div>
                  </div>

                  <div className="business-form-group">
                    <label htmlFor="company-address">Company Address</label>
                    <input id="company-address" type="text" placeholder="Enter your business address" />
                  </div>

                  <div className="business-form-group">
                    <label htmlFor="company-website">Website (Optional)</label>
                    <input id="company-website" type="url" placeholder="https://yourcompany.com" />
                  </div>

                  <div className="business-form-row">
                    <div className="business-form-group">
                      <label htmlFor="contact-full-name">First Name</label>
                      <input id="contact-full-name" type="text" placeholder="John" />
                    </div>
                    <div className="business-form-group">
                      <label htmlFor="contact-surname">Last Name</label>
                      <input id="contact-surname" type="text" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="business-form-group">
                    <label htmlFor="contact-title">Job Title</label>
                    <input id="contact-title" type="text" placeholder="e.g., HR Manager" />
                  </div>

                  <div className="business-form-row">
                    <div className="business-form-group">
                      <label htmlFor="company-phone">Company Phone</label>
                      <input id="company-phone" type="tel" placeholder="+27 (0)XX XXX XXXX" />
                    </div>
                    <div className="business-form-group">
                      <label htmlFor="contact-phone">Your Phone</label>
                      <input id="contact-phone" type="tel" placeholder="+27 (0)XX XXX XXXX" />
                    </div>
                  </div>

                  <div className="business-form-row">
                    <div className="business-form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input id="contact-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="business-form-group">
                      <label htmlFor="confirm-email">Confirm Email</label>
                      <input id="confirm-email" type="email" placeholder="Confirm email address" />
                    </div>
                  </div>

                  <div className="business-form-row">
                    <div className="business-form-group">
                      <label htmlFor="signup-password">Password</label>
                      <input id="signup-password" type="password" placeholder="Create a password" />
                    </div>
                    <div className="business-form-group">
                      <label htmlFor="confirm-password">Confirm Password</label>
                      <input id="confirm-password" type="password" placeholder="Confirm password" />
                    </div>
                  </div>

                  <div className="business-auth-terms">
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

                  <button className="btn btn-primary btn-lg" type="submit">
                    Create Account
                  </button>

                  <p className="business-auth-switch">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setEmail('')
                        setPassword('')
                        onModeChange('login')
                      }}
                      className="business-auth-switch-link"
                    >
                      Sign in
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Image Panel - Right Side */}
          <div className="business-auth-image">
            <img
              src="/images/graduate-business-handshake.jpg"
              alt="Business collaboration"
              className="business-auth-image-img"
            />
            <div className="business-auth-image-overlay" />
            <div className="business-auth-image-copy">
              <p>Scale your team with access to top-vetted professionals worldwide.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
