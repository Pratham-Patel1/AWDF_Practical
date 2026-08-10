// Projects.jsx — Projects section component (Supplementary problem)
// Contains three hardcoded project cards, each with:
//   - Title
//   - Description
//   - Technology badge
//   - View button

import React from 'react'

// Hardcoded project data
const PROJECTS = [
  {
    id:          1,
    title:       'Student Portfolio',
    description: 'A fully responsive personal portfolio website built with React and Vite. Features smooth scrolling navigation, dynamic skills grid, and a clean dark-themed UI to showcase projects and skills professionally.',
    tech:        'React + Vite',
    techIcon:    '⚛️',
    link:        '#',
  },
  {
    id:          2,
    title:       'Spam Detection',
    description: 'A machine learning project that classifies emails and SMS messages as spam or ham. Built using Python with Scikit-learn, employing NLP techniques such as TF-IDF vectorisation and Naive Bayes classification.',
    tech:        'Python · ML',
    techIcon:    '🐍',
    link:        '#',
  },
  {
    id:          3,
    title:       'Car Price Prediction',
    description: 'A predictive analytics model that estimates the market price of used cars based on features like brand, year, mileage, and fuel type, trained on real-world datasets using a Random Forest Regressor.',
    tech:        'Python · Random Forest',
    techIcon:    '🌲',
    link:        '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Section heading */}
        <h2 className="section-title">My Projects</h2>
        <div className="section-divider"></div>

        {/* Project cards grid */}
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              {/* Project title */}
              <h3 className="project-title">{project.title}</h3>

              {/* Short description */}
              <p className="project-description">{project.description}</p>

              {/* Technology badge */}
              <span className="tech-badge">
                {project.techIcon} {project.tech}
              </span>

              {/* View project button */}
              <button
                className="project-btn"
                id={`btn-view-project-${project.id}`}
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                aria-label={`View ${project.title} project`}
              >
                View Project →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
