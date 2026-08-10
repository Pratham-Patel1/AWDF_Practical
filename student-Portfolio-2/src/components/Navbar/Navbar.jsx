// Navbar Component
// Responsive navigation bar with active link highlighting and dark mode toggle
// Uses React Router's NavLink for automatic active class management

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

// ── Navbar Component ───────────────────────────────────────────────────────
// Props:
//   darkMode       — current dark/light mode boolean
//   toggleDarkMode — function to toggle the mode
function Navbar({ darkMode, toggleDarkMode }) {
  // State to control mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false)

  // State to detect scroll and add scrolled class
  const [scrolled, setScrolled] = useState(false)

  // Add scroll listener on mount
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const closeMenu = () => setMenuOpen(false)

  // Navigation links array — avoids repeating JSX
  const navLinks = [
    { to: '/',         label: 'Home',     end: true  },
    { to: '/projects', label: 'Projects', end: false },
    { to: '/contact',  label: 'Contact',  end: false },
  ]

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container">

        {/* ── Brand Logo ─────────────────────────────────────────────── */}
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-icon">⚛️</span>
          <span className="navbar__brand-text">
            Pratham<span className="navbar__brand-accent">.dev</span>
          </span>
        </NavLink>

        {/* ── Desktop Navigation Links ───────────────────────────────── */}
        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {/* Render nav links using map() — no manual repetition */}
          {navLinks.map(link => (
            <li key={link.to} className="navbar__item">
              {/* NavLink automatically applies 'active' class to the current route */}
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Controls: Dark Mode Toggle + Hamburger ─────────────────── */}
        <div className="navbar__controls">
          {/* Dark Mode Toggle Button */}
          <button
            className="navbar__theme-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle dark/light mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger Button — mobile only */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span className="navbar__bar" />
            <span className="navbar__bar" />
            <span className="navbar__bar" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
