import { useState } from 'react'
import './Navbar.css'

const NAV_ITEMS = ['about', 'timeline', 'skills', 'projects', 'blogs']

function Navbar({ className, onNavClick }) {
  const [active, setActive] = useState(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActive(null)
  }

  const handleNav = (key) => {
    setActive(key)
    onNavClick(key)
  }

  return (
    <nav className={`navbar ${className || ''}`}>
      <div className="nav-pill">
        <div className="nav-brand" onClick={scrollToTop}>
          <span className="nav-logo">PONGS</span>
          <span className="nav-year">2026</span>
        </div>
        <div className="nav-divider" />
        <ul className="nav-links">
          {NAV_ITEMS.map((key) => (
            <li key={key}>
              <button
                onClick={() => handleNav(key)}
                className={active === key ? 'active' : ''}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar