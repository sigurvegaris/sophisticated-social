'use client'
import { useState, useEffect } from 'react'

export default function Connect() {
  const [formData, setFormData] = useState({ name: '', email: '', brand: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', padding: '14px 0',
    background: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(6,64,43,0.2)',
    fontSize: '1rem', color: '#1C1C1C',
    outline: 'none', fontFamily: 'DM Sans, sans-serif',
    transition: 'border-color 0.3s'
  }

  const labelStyle = {
    display: 'block', fontSize: '0.7rem',
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: '#06402B', opacity: 0.7, marginBottom: '10px'
  }

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── HEADER ── */}
      <div style={{
        padding: isMobile ? '80px 28px 52px' : '120px 80px 80px',
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(6,64,43,0.08)',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '28px' : '80px',
        alignItems: 'end'
      }}>
        <div>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '28px', opacity: 0.7 }}>Get In Touch</p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: isMobile ? '2.6rem' : 'clamp(2.8rem, 4vw, 4.5rem)',
            fontWeight: 400, lineHeight: 1.1, color: '#1C1C1C'
          }}>
            Let's build something<br />
            <em style={{ fontStyle: 'italic', color: '#06402B' }}>together.</em>
          </h1>
        </div>
        <p style={{ fontSize: '1.05rem', lineHeight: 2, color: '#7A7A72', fontWeight: 300, alignSelf: 'end' }}>
          I love hearing from founder-led brands who are ready to take their social presence seriously. Tell me a little about yourself and what you are looking to build and I will be in touch.
        </p>
      </div>

      {/* ── FORM + INFO ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        minHeight: '70vh'
      }}>

        {/* Form */}
        <div style={{
          padding: isMobile ? '52px 28px' : '80px',
          borderRight: isMobile ? 'none' : '1px solid rgba(6,64,43,0.08)'
        }}>
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', minHeight: '400px' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '24px', opacity: 0.7 }}>Message Sent</p>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: 400, color: '#1C1C1C', lineHeight: 1.3, marginBottom: '20px'
              }}>
                Thank you for reaching out.<br />
                <em style={{ fontStyle: 'italic', color: '#06402B' }}>I will be in touch soon.</em>
              </h2>
              <p style={{ fontSize: '1rem', color: '#7A7A72', fontWeight: 300, lineHeight: 1.9 }}>
                In the meantime feel free to follow along on Instagram and TikTok at @emmyrener.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '24px' }}>
                <div>
                <label style={labelStyle}>Your Name</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderBottomColor = '#06402B'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(6,64,43,0.2)'}
                  />
                </div>
                <div>
                <label style={labelStyle}>Email Address</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderBottomColor = '#06402B'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(6,64,43,0.2)'}
                  />
                </div>
              </div>

              <div>
              <label style={labelStyle}>Your Brand or Business</label>
                <input
                  type="text"
                  value={formData.brand}
                  onChange={e => setFormData({ ...formData, brand: e.target.value })}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderBottomColor = '#06402B'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(6,64,43,0.2)'}
                />
              </div>

              <div>
              <label style={labelStyle}>Tell Me About Your Project</label>
                <textarea
                  required rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.borderBottomColor = '#06402B'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(6,64,43,0.2)'}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '18px 52px',
                  background: '#06402B', color: '#F7F3EE',
                  border: '1px solid #06402B',
                  fontSize: '0.75rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', fontWeight: 400,
                  cursor: 'pointer', width: 'fit-content',
                  fontFamily: 'DM Sans, sans-serif', transition: 'all 0.3s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#06402B' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#06402B'; e.currentTarget.style.color = '#F7F3EE' }}
              >Send Message</button>
            </form>
          )}
        </div>

        {/* Info Panel */}
        <div style={{
          padding: isMobile ? '52px 28px' : '80px',
          background: '#F7F3EE',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', gap: '48px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', opacity: 0.7 }}>Contact Details</p>

            {[
              { label: 'Email', value: 'emmy@sophisticatedsocial.net', href: 'mailto:emmy@sophisticatedsocial.net' },
              { label: 'Based In', value: 'Paris, France', href: null },
              { label: 'Working With', value: 'Brands Across the Globe', href: null },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A7A72', marginBottom: '10px' }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 400, color: '#06402B', textDecoration: 'none' }}>{item.value}</a>
                ) : (
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 400, color: '#1C1C1C' }}>{item.value}</p>
                )}
              </div>
            ))}

            <div>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7A7A72', marginBottom: '16px' }}>Follow Along</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Instagram — @emmyrener', href: 'https://www.instagram.com/emmyrener' },
                  { label: 'TikTok — @emmyrener', href: 'https://www.tiktok.com/@emmyrener' },
                  { label: 'Sophisticated Spreads ↗', href: 'https://sophisticatedspreads.net' },
                ].map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1rem', fontWeight: 400,
                    color: '#06402B', textDecoration: 'none', transition: 'opacity 0.3s'
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >{link.label}</a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(6,64,43,0.1)', paddingTop: '40px' }}>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: '#7A7A72', fontWeight: 300, fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
              "I work with a small number of clients at a time so every brand gets the attention it truly deserves."
            </p>
            <p style={{ fontSize: '0.7rem', color: '#06402B', letterSpacing: '0.1em', marginTop: '12px', opacity: 0.6 }}>Emmy Rener</p>
          </div>
        </div>
      </div>

    </div>
  )
}