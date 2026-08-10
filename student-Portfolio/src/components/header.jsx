import React from 'react'

function Header({ name, role, themeColor }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* Greeting */}
        <p className="hero-greeting">Hello 👋</p>

        {/* Student name — themeColor prop applied as inline style */}
        <h1
          className="hero-name"
          style={{ color: themeColor }}
        >
          I&apos;m {name}
        </h1>

        {/* Role / title */}
        <h2 className="hero-role">{role}</h2>

        {/* Professional description */}
        <p className="hero-description">
          A passionate Computer Science student who loves building modern web
          applications, exploring machine learning models, and crafting
          pixel-perfect user experiences. I turn ideas into clean, efficient code.
        </p>

        {/* Call-to-action buttons */}
        <div className="hero-actions">
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary"
            id="btn-download-resume"
          >
            📄 Download Resume
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            id="btn-contact-me"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            ✉️ Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header