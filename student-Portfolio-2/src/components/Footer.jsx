// Footer.jsx — Footer section component
// Props:
//   name  {string} — student's full name
//   email {string} — student's email address

import React from 'react'

function Footer({ name, email }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="footer-inner">
        {/* Student name as footer brand */}
        <h2 className="footer-name">{name}</h2>

        {/* Contact & social links */}
        <div className="footer-links">
          {/* Email link — uses email prop */}
          <a
            href={`mailto:${email}`}
            className="footer-link"
            id="footer-link-email"
            aria-label={`Send email to ${email}`}
          >
            ✉️ {email}
          </a>

          {/* GitHub link */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            id="footer-link-github"
            aria-label="Visit GitHub profile"
          >
            🐙 GitHub
          </a>

          {/* LinkedIn link */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            id="footer-link-linkedin"
            aria-label="Visit LinkedIn profile"
          >
            💼 LinkedIn
          </a>
        </div>

        <div className="footer-divider"></div>

        {/* Copyright notice — uses name prop and current year */}
        <p className="footer-copy">
          &copy; {currentYear} {name}. All rights reserved. Built with ⚛️ React + Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer