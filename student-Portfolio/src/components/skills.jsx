import React from 'react'

function Skills({ skillList }) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section heading */}
        <h2 className="section-title">My Skills</h2>
        <div className="section-divider"></div>

        {/* Dynamic skill cards — rendered from skillList prop */}
        <div className="skills-grid" role="list">
          {skillList.map((skill) => (
            <div
              key={skill.id}
              className="skill-card"
              role="listitem"
              aria-label={skill.name}
            >
              <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills