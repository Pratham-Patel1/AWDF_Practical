// Navbar.jsx — Sticky navigation bar component
// Highlights the active section as the user scrolls,
// and provides a hamburger menu for mobile screens.

import React, { useState, useEffect } from 'react'

// Navigation links configuration
const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

function Navbar() {
  // Track which nav item is currently active based on scroll position
  const [activeSection, setActiveSection] = useState('home')
  // Toggle mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      let current = 'home'

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when a link is clicked (mobile UX)
  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      {/* Brand / Logo */}
      <span className="navbar-logo">Student Portfolio</span>

      {/* Desktop & mobile nav links */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`} role="list">
        {NAV_LINKS.map(({ label, href }) => {
          const sectionId = href.replace('#', '')
          const isActive  = activeSection === sectionId
          return (
            <li key={label}>
              <a
                href={href}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Hamburger button — visible on mobile only */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar
