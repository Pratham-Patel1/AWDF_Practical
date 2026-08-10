// main.jsx — Application Entry Point
// Bootstraps React 18, wraps the app in BrowserRouter for React Router DOM

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './styles/global.css'

// ── React Router Configuration ─────────────────────────────────────────────
// BrowserRouter enables HTML5 history API for clean URL routing
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
