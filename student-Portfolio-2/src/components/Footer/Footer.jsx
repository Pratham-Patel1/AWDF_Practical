// Footer Component
// Displays copyright info, social links, and navigation links

import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

// ── Footer Component ───────────────────────────────────────────────────────
function Footer() {
  const currentYear = new Date().getFullYear()

  // Quick navigation links array — rendered with map()
  const quickLinks = [
    { to: '/',         label: 'Home'     },
    { to: '/projects', label: 'Projects' },
    { to: '/contact',  label: 'Contact'  },
  ]

  // Social links array
  const socialLinks = [
    { href: 'https://github.com',    label: 'GitHub',   icon: '🐙' },
    { href: 'https://linkedin.com',  label: 'LinkedIn', icon: '💼' },
    { href: 'https://twitter.com',   label: 'Twitter',  icon: '🐦' },
  ]

  return (
    <footer className="footer" id="main-footer">
      <div className="footer__container container">

        {/* ── Brand Section ──────────────────────────────────────────── */}
        <div className="footer__brand">
          <span className="footer__brand-logo">⚛️ Pratham<span className="footer__accent">.dev</span></span>
          <p className="footer__tagline">
            Building the web, one component at a time.
          </p>
          {/* Social icons */}
          <div className="footer__social">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Quick Links ────────────────────────────────────────────── */}
        <div className="footer__nav">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact Info ───────────────────────────────────────────── */}
        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <p className="footer__info">prathampatel06@gmail.com</p>
          <p className="footer__info">CHARUSAT University</p>
          <p className="footer__info">Gujarat, India</p>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            © {currentYear} Pratham Patel. Built with React + Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
