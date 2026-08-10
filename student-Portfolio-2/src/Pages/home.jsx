// Home.jsx — Home Page
// Reuses components from Practical 1 (Header, About, Skills) to avoid duplicate JSX
// Implements useState for the Show/Hide Skills feature (second useState requirement)

import React, { useState } from 'react'
import Header from '../components/header.jsx'
import About from '../components/about.jsx'
import Skills from '../components/skills.jsx'
import './Home.css'

// ── Student Data Object ──────────────────────────────────────────────────────
const student = {
  name:       'Pratham Patel',
  role:       'Full Stack Developer & React Enthusiast',
  college:    'CHARUSAT University',
  email:      'prathampatel06@gmail.com',
  themeColor: '#3B82F6',
}

// ── Skills Data Array ────────────────────────────────────────────────────────
const skillList = [
  { id: 1,  name: 'HTML5',       icon: '🌐' },
  { id: 2,  name: 'CSS3',        icon: '🎨' },
  { id: 3,  name: 'JavaScript', icon: '⚡' },
  { id: 4,  name: 'React',      icon: '⚛️' },
  { id: 5,  name: 'Node.js',    icon: '🟢' },
  { id: 6,  name: 'Express.js',  icon: '🚀' },
  { id: 7,  name: 'MongoDB',    icon: '🍃' },
  { id: 8,  name: 'Python',     icon: '🐍' },
]

function Home() {
  // Second useState Feature — Show / Hide Skills Section Toggle
  const [showSkills, setShowSkills] = useState(true)

  return (
    <div className="home" id="home-page">
      {/* 1. Header Component (Practical 1) */}
      <Header
        name={student.name}
        role={student.role}
        themeColor={student.themeColor}
      />

      {/* 2. About Component (Practical 1) */}
      <About college={student.college} />

      {/* 3. Skills Section (with Show/Hide Toggle) */}
      <div className="skills-toggle-section">
        <div className="container skills-toggle-container">
          <button
            className={`home__toggle-btn${showSkills ? ' home__toggle-btn--active' : ''}`}
            onClick={() => setShowSkills(prev => !prev)}
            id="toggle-skills-btn"
            aria-expanded={showSkills}
          >
            {showSkills ? '🙈 Hide Skills Section' : '👁️ Show Skills Section'}
          </button>
        </div>

        {showSkills ? (
          /* Reusable Skills Component (Practical 1) */
          <Skills skillList={skillList} />
        ) : (
          <div className="container">
            <p className="home__hidden-msg">
              Skills section is hidden. Click the button above to reveal it!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
