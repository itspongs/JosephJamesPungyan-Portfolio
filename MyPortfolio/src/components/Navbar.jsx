import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_ITEMS = ['about', 'timeline', 'skills', 'projects', 'blogs']

function Navbar({ className, onNavClick, sectionRefs }) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!sectionRefs?.current) return

    const observers = []

    // Track which sections are currently visible and how much
    const visibilityMap = {}

    const pickMostVisible = () => {
      let maxRatio = 0
      let mostVisible = null
      for (const [key, ratio] of Object.entries(visibilityMap)) {
        if (ratio > maxRatio) {
          maxRatio = ratio
          mostVisible = key
        }
      }
      // Only highlight if something is actually on screen
      setActive(maxRatio > 0 ? mostVisible : null)
    }

    NAV_ITEMS.forEach((key) => {
      const el = sectionRefs.current[key]
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibilityMap[key] = entry.intersectionRatio
          })
          pickMostVisible()
        },
        {
          threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
          rootMargin: '0px 0px -10% 0px',
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sectionRefs])

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