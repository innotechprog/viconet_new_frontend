
import { useState } from 'react'

const navLinks = [
  { label: 'About Us', href: '#about-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Webinars & Podcasts', href: '#webinars' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="logo" aria-label="vico.net home">
          <img src="/viconet-logo.png" alt="vico.net" className="logo-img" />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav-links ${open ? 'is-open' : ''}`}
          aria-label="Primary"
          id="nav-menu"
        >
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`header-cta ${open ? 'is-open' : ''}`}>
          <a className="btn btn-nav-talent" href="#signin-talent">
            Talent
          </a>
          <a className="btn btn-primary btn-nav-business" href="#signin-business">
            Business
          </a>
        </div>
      </div>
    </header>
  )
}
