// Contact.jsx — Contact Page
// Modern contact form with:
//   - Controlled components via useState
//   - Character counter (max 300)
//   - Form validation (required fields)
//   - Displays submitted data below the form
//   - No page refresh on submit

import React, { useState } from 'react'
import './Contact.css'

// ── Initial Form State ─────────────────────────────────────────────────────
const initialFormState = {
  name:    '',
  email:   '',
  message: '',
}

// ── Maximum message character limit ───────────────────────────────────────
const MAX_CHARS = 300

// ── Contact Form State ─────────────────────────────────────────────────────
function Contact() {
  // Contact Form State — controlled components
  const [formData, setFormData] = useState(initialFormState)

  // Validation errors state
  const [errors, setErrors] = useState({})

  // Submitted data — displayed below the form after a successful submit
  const [submittedData, setSubmittedData] = useState(null)

  // Success message visibility
  const [showSuccess, setShowSuccess] = useState(false)

  // ── Change Handler ───────────────────────────────────────────────────────
  // Updates the specific field in formData state
  const handleChange = (e) => {
    const { name, value } = e.target

    // Enforce character limit for message field
    if (name === 'message' && value.length > MAX_CHARS) return

    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // ── Form Validation ──────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim())         newErrors.name    = 'Name is required.'
    if (!formData.email.trim())        newErrors.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
                                       newErrors.email   = 'Enter a valid email address.'
    if (!formData.message.trim())      newErrors.message = 'Message is required.'

    return newErrors
  }

  // ── Submit Handler ───────────────────────────────────────────────────────
  // Prevents page refresh, validates, then stores submitted data in state
  const handleSubmit = (e) => {
    e.preventDefault() // Do NOT refresh the page

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Store submitted data to display below form
    setSubmittedData({ ...formData })
    setShowSuccess(true)
    setErrors({})

    // Reset form to initial state
    setFormData(initialFormState)
  }

  // ── Reset Handler ────────────────────────────────────────────────────────
  const handleReset = () => {
    setFormData(initialFormState)
    setErrors({})
    setSubmittedData(null)
    setShowSuccess(false)
  }

  // Character count for the message field
  const charCount = formData.message.length

  return (
    <div className="contact-page" id="contact-page">

      {/* ── Page Header ──────────────────────────────────────────────── */}
      <section className="contact-page__header">
        <div className="container contact-page__header-inner">
          <p className="contact-page__eyebrow">📬 Get In Touch</p>
          <h1 className="contact-page__title">
            <span className="gradient-text">Contact Me</span>
          </h1>
          <p className="contact-page__subtitle">
            Have a project in mind? Let's talk! Fill out the form and I'll get back to you.
          </p>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <section className="contact-page__body section">
        <div className="container contact-page__layout">

          {/* ── Contact Form ─────────────────────────────────────────── */}
          <div className="contact-form-wrapper">
            <h2 className="contact-form__heading">Send a Message</h2>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              id="contact-form"
            >

              {/* Name Field — controlled component */}
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name <span className="form-required">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Pratham Patel"
                  className={`form-input${errors.name ? ' form-input--error' : ''}`}
                  autoComplete="name"
                />
                {/* Validation error message */}
                {errors.name && (
                  <span className="form-error" role="alert">{errors.name}</span>
                )}
              </div>

              {/* Email Field — controlled component */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address <span className="form-required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. you@example.com"
                  className={`form-input${errors.email ? ' form-input--error' : ''}`}
                  autoComplete="email"
                />
                {errors.email && (
                  <span className="form-error" role="alert">{errors.email}</span>
                )}
              </div>

              {/* Message Textarea — controlled component with character counter */}
              <div className="form-group">
                <div className="form-label-row">
                  <label className="form-label" htmlFor="message">
                    Message <span className="form-required">*</span>
                  </label>
                  {/* Character Counter — e.g. 145 / 300 */}
                  <span
                    className={`form-char-count${charCount >= MAX_CHARS ? ' form-char-count--max' : charCount > MAX_CHARS * 0.8 ? ' form-char-count--warn' : ''}`}
                    aria-live="polite"
                  >
                    {charCount} / {MAX_CHARS}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi! 👋"
                  rows={5}
                  className={`form-input form-textarea${errors.message ? ' form-input--error' : ''}`}
                  maxLength={MAX_CHARS}
                />
                {errors.message && (
                  <span className="form-error" role="alert">{errors.message}</span>
                )}
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  id="submit-contact-btn"
                >
                  🚀 Send Message
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={handleReset}
                  id="reset-contact-btn"
                >
                  🔄 Reset
                </button>
              </div>
            </form>

            {/* ── Live Input Display ─────────────────────────────────── */}
            {/* Displays user input live in real time as they type */}
            <div className="contact-live-preview" id="live-preview-section" role="region" aria-label="Live input preview">
              <h3 className="contact-live-preview__title">👀 Live Input Preview</h3>
              <div className="contact-live-preview__grid">
                <div className="contact-live-preview__item">
                  <span className="contact-live-preview__label">👤 Name</span>
                  <span className="contact-live-preview__value">
                    {formData.name || <span className="placeholder-text">Not entered yet</span>}
                  </span>
                </div>
                <div className="contact-live-preview__item">
                  <span className="contact-live-preview__label">📧 Email</span>
                  <span className="contact-live-preview__value">
                    {formData.email || <span className="placeholder-text">Not entered yet</span>}
                  </span>
                </div>
                <div className="contact-live-preview__item contact-live-preview__item--full">
                  <span className="contact-live-preview__label">💬 Message</span>
                  <span className="contact-live-preview__value contact-live-preview__value--message">
                    {formData.message || <span className="placeholder-text">Not entered yet</span>}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Submitted Data Display ─────────────────────────────── */}
            {/* Appears after successful form submission — no page refresh */}
            {showSuccess && submittedData && (
              <div className="contact-submitted" id="submitted-data-section" role="region" aria-label="Submitted message">
                <div className="contact-submitted__header">
                  <span className="contact-submitted__icon">✅</span>
                  <h3 className="contact-submitted__title">Message Sent Successfully!</h3>
                </div>
                <p className="contact-submitted__note">Here's what you submitted:</p>
                <div className="contact-submitted__grid">
                  <div className="contact-submitted__item">
                    <span className="contact-submitted__label">👤 Name</span>
                    <span className="contact-submitted__value">{submittedData.name}</span>
                  </div>
                  <div className="contact-submitted__item">
                    <span className="contact-submitted__label">📧 Email</span>
                    <span className="contact-submitted__value">{submittedData.email}</span>
                  </div>
                  <div className="contact-submitted__item contact-submitted__item--full">
                    <span className="contact-submitted__label">💬 Message</span>
                    <span className="contact-submitted__value contact-submitted__value--message">
                      {submittedData.message}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── Contact Info Sidebar ──────────────────────────────────── */}
          <aside className="contact-info">
            <h3 className="contact-info__heading">Let's Connect</h3>

            <div className="contact-info__card">
              <span className="contact-info__icon">📧</span>
              <div>
                <p className="contact-info__label">Email</p>
                <a href="mailto:prathampatel06@gmail.com" className="contact-info__value">
                  prathampatel06@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info__card">
              <span className="contact-info__icon">📍</span>
              <div>
                <p className="contact-info__label">Location</p>
                <p className="contact-info__value">Gujarat, India</p>
              </div>
            </div>

            <div className="contact-info__card">
              <span className="contact-info__icon">🎓</span>
              <div>
                <p className="contact-info__label">University</p>
                <p className="contact-info__value">CHARUSAT University</p>
              </div>
            </div>

            <div className="contact-info__card">
              <span className="contact-info__icon">⏰</span>
              <div>
                <p className="contact-info__label">Response Time</p>
                <p className="contact-info__value">Within 24 hours</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Contact
