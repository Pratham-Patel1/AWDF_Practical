

import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

// ── 404 Not Found Component ────────────────────────────────────────────────
function NotFound() {
  return (
    <div className="notfound" id="not-found-page">

      {/* Decorative background blobs */}
      <div className="notfound__blob notfound__blob--1" aria-hidden="true" />
      <div className="notfound__blob notfound__blob--2" aria-hidden="true" />

      <div className="notfound__content">

        {/* Large 404 Display */}
        <div className="notfound__code" aria-label="404">
          <span className="notfound__digit notfound__digit--4">4</span>
          <span className="notfound__digit notfound__digit--0">0</span>
          <span className="notfound__digit notfound__digit--4b">4</span>
        </div>

        {/* Glitch line */}
        <div className="notfound__glitch-bar" aria-hidden="true" />

        {/* Message */}
        <h1 className="notfound__title">Page Not Found</h1>
        <p className="notfound__desc">
          Oops! The page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track.
        </p>

        {/* Return Home Button — uses React Router Link */}
        <Link to="/" className="btn btn-primary notfound__home-btn" id="return-home-btn">
          🏠 Return Home
        </Link>

        {/* Quick Links */}
        <div className="notfound__links">
          <span className="notfound__links-label">Or visit:</span>
          <Link to="/projects" className="notfound__quick-link">Projects</Link>
          <span className="notfound__sep">·</span>
          <Link to="/contact"  className="notfound__quick-link">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
