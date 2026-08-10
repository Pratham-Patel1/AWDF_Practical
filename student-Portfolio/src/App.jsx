

import React from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Header from './components/header.jsx'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

// ─── Student Data Object (passed as props) ───────────────────────────────────
const student = {
  name: 'Pratham Patel',
  role: 'Full Stack Developer',
  college: 'CHARUSAT University',
  email: 'prathampatel06@gmail.com',
  themeColor: '#3B82F6',
}

// ─── Skills Array (passed to Skills component) ───────────────────────────────
const skillList = [
  { id: 1, name: 'HTML', icon: '🌐' },
  { id: 2, name: 'CSS', icon: '🎨' },
  { id: 3, name: 'JavaScript', icon: '⚡' },
  { id: 4, name: 'React', icon: '⚛️' },
  { id: 5, name: 'Node.js', icon: '🟢' },
  { id: 6, name: 'Express', icon: '🚀' },
  { id: 7, name: 'MongoDB', icon: '🍃' },
  { id: 8, name: 'Python', icon: '🐍' },
]

// ─── App Component ───────────────────────────────────────────────────────────
function App() {
  return (
    <div className="app-wrapper">
      {/* Sticky navigation bar */}
      <Navbar />

      {/* Hero section — receives name, role, themeColor as props */}
      <Header
        name={student.name}
        role={student.role}
        themeColor={student.themeColor}
      />

      {/* About section — receives college as prop */}
      <About college={student.college} />

      {/* Skills section — receives skillList array as prop */}
      <Skills skillList={skillList} />

      {/* Projects section — hardcoded project cards */}
      <Projects />

      {/* Footer — receives name and email as props */}
      <Footer name={student.name} email={student.email} />
    </div>
  )
}

export default App