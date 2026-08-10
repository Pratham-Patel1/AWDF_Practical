// Projects.jsx — Projects Page
// Renders a grid of project cards using map() and the reusable ProjectCard component
// Project data is stored in a centralized array — no manual JSX repetition

import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx'
import './Projects.css'

// ── Project Data Array ─────────────────────────────────────────────────────
// Each project object is passed as a prop to the reusable ProjectCard component
const projectsData = [
  {
    id: 1,
    title: 'Smart Emergency Response System',
    description:
      'A real-time emergency management platform that dispatches alerts to nearby responders using geolocation. Features live tracking, SMS notifications, and an admin dashboard for incident management.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Fast2SMS'],
    github: 'https://github.com',
    live:   'https://example.com',
  },
  {
    id: 2,
    title: 'Student Portfolio Website',
    description:
      'A fully responsive, multi-page portfolio built with React and Vite. Features React Router DOM navigation, dark mode toggle, controlled forms with validation, and a dynamic projects grid.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    tech: ['React 18', 'Vite', 'React Router', 'CSS3'],
    github: 'https://github.com',
    live:   'https://example.com',
  },
  {
    id: 3,
    title: 'E-Commerce Dashboard',
    description:
      'An interactive analytics dashboard for an e-commerce platform. Includes real-time sales charts, inventory management, user authentication, and order tracking with a clean admin interface.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tech: ['React', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
    github: 'https://github.com',
    live:   'https://example.com',
  },
  {
    id: 4,
    title: 'Task Management App',
    description:
      'A Kanban-style productivity application with drag-and-drop task cards, project boards, priority labels, and due date reminders. Built with a RESTful API backend and real-time sync.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80',
    tech: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Tailwind'],
    github: 'https://github.com',
    live:   'https://example.com',
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description:
      'A beautiful weather application that fetches live data from OpenWeatherMap API. Features 7-day forecasts, animated weather icons, geolocation detection, and search by city name.',
    image: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80',
    tech: ['React', 'OpenWeatherMap API', 'CSS Animations', 'Axios'],
    github: 'https://github.com',
    live:   'https://example.com',
  },
  {
    id: 6,
    title: 'Blog CMS Platform',
    description:
      'A full-stack blog platform with a rich Markdown editor, category tags, comment system, and user roles. Admins can manage posts, media, and analytics from a dedicated dashboard.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel', 'MDX'],
    github: 'https://github.com',
    live:   'https://example.com',
  },
]

// ── Projects Page Component ────────────────────────────────────────────────
function Projects() {
  return (
    <div className="projects-page" id="projects-page">

      {/* ── Page Header ──────────────────────────────────────────────── */}
      <section className="projects-page__header">
        <div className="container projects-page__header-inner">
          <p className="projects-page__eyebrow">🛠️ My Work</p>
          <h1 className="projects-page__title">
            <span className="gradient-text">Featured Projects</span>
          </h1>
          <p className="projects-page__subtitle">
            A collection of projects I've built, ranging from full-stack web applications
            to mobile apps and developer tools.
          </p>
        </div>
      </section>

      {/* ── Projects Grid ─────────────────────────────────────────────── */}
      <section className="projects-page__grid-section section">
        <div className="container">
          {/* Render ProjectCard for each project using map() — no manual repetition */}
          <div className="projects-page__grid">
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
