import { useState } from 'react'
import logo from '../assets/logo.jpg'

const links = [
  { href: '#film', label: 'Film' },
  { href: '#about', label: 'About' },
  { href: '#resources', label: 'Resources' },
  { href: '#members', label: 'Members' },
  { href: '#gallery', label: 'Gallery' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  function scrollToTop(e) {
    e.preventDefault()
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="top">
      <div className="inner">
        <button className="brand" onClick={scrollToTop} aria-label="Scroll to top">
          <img src={logo} alt="Investing Club logo" />
          <div className="brand-text">
            <div className="main">Investing Club</div>
            <div className="sub">Learn &middot; Invest &middot; Grow</div>
          </div>
        </button>

        <div className={`links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <div className="nav-divider" />
          <div className="nav-date mono">EST. 2025</div>
        </div>

        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
