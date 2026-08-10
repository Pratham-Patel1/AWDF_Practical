// App.jsx — Root Component
// Configures React Router routes and manages global dark mode state

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// ── Component Imports ──────────────────────────────────────────────────────
import Navbar   from './components/Navbar/Navbar.jsx'
import Footer   from './components/Footer/Footer.jsx'

// ── Page Imports ───────────────────────────────────────────────────────────
import Home     from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact  from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// ── App Component ──────────────────────────────────────────────────────────
function App() {
  // Dark Mode useState — second useState feature requirement
  const [darkMode, setDarkMode] = useState(true)

  // Toggle dark/light mode and apply class to document root
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
    document.documentElement.classList.toggle('light-mode', darkMode)
  }

  return (
    <div className={`app-root${!darkMode ? ' light-mode' : ''}`}>

      {/* Sticky Navbar — visible on all pages */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* ── React Router Configuration ─────────────────────────────────── */}
      {/* Routes maps URL paths to page components */}
      <main className="main-content">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
          {/* Wildcard route — catches all undefined paths */}
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  )
}

export default App