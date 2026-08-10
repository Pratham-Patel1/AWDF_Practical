// About.jsx — About Me section component
// Props:
//   college {string} — College/university name displayed dynamically

import React from 'react'

// Highlights shown on the right panel of the about card
const HIGHLIGHTS = [
  { icon: '🎓', text: 'Computer Science Student' },
  { icon: '⚛️', text: 'React & Modern JavaScript' },
  { icon: '🖥️', text: 'Node.js & Express Backend' },
  { icon: '🤖', text: 'Machine Learning Enthusiast' },
]

function About({ college }) {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section heading */}
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>

        {/* About card — two-column grid (text left, highlights right) */}
        <div className="about-card">
          {/* ─ Left column: description text ─ */}
          <div className="about-text">
            <p>
              Hi there! I&apos;m a dedicated Computer Science student with a strong
              passion for full-stack web development. I thrive on building elegant
              solutions that solve real-world problems and create meaningful user
              experiences.
            </p>
            <p>
              I specialise in <strong>React</strong> and <strong>JavaScript</strong> on
              the frontend, paired with <strong>Node.js</strong> on the server side. I
              am also deeply interested in <strong>Machine Learning</strong> and how AI
              can be integrated into modern applications to drive smarter products.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or sharpening my algorithmic
              problem-solving skills.
            </p>

            {/* Dynamic college badge — uses college prop */}
            <div className="about-college-badge">
              🏫 {college}
            </div>
          </div>

          {/* ─ Right column: highlight list ─ */}
          <div className="about-highlights">
            {HIGHLIGHTS.map(({ icon, text }) => (
              <div key={text} className="highlight-item">
                <span className="highlight-icon" aria-hidden="true">{icon}</span>
                <span className="highlight-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About