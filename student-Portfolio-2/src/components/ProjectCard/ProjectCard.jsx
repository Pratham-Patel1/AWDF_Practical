// ProjectCard Component
// Reusable card component for displaying a project
// Receives project data as props

import React from 'react'
import './ProjectCard.css'

// ── ProjectCard Component ──────────────────────────────────────────────────
// Props:
//   project — { id, title, description, image, tech[], github, live }
function ProjectCard({ project }) {
  const { title, description, image, tech, github, live } = project

  return (
    <article className="project-card" id={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}>

      {/* ── Project Image / Thumbnail ─────────────────────────────── */}
      <div className="project-card__image-wrapper">
        <img
          src={image}
          alt={`${title} preview`}
          className="project-card__image"
          loading="lazy"
        />
        {/* Overlay appears on hover */}
        <div className="project-card__overlay">
          <span className="project-card__overlay-text">View Project</span>
        </div>
      </div>

      {/* ── Card Body ─────────────────────────────────────────────── */}
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        {/* Technologies Used — rendered with map() */}
        <div className="project-card__tech">
          {tech.map((t, idx) => (
            <span key={idx} className="project-card__tech-tag">{t}</span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-card__actions">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-card__btn"
            aria-label={`GitHub repository for ${title}`}
          >
            🐙 GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary project-card__btn"
            aria-label={`Live demo for ${title}`}
          >
            🚀 Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
