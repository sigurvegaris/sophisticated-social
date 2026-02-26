'use client'
import { useState } from 'react'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(247,243,238,0.96)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(6,64,43,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 56px'
      }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
          <div style={{ lineHeight: 1, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.25rem', color: '#06402B' }}>sophisticated</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.25rem', color: '#06402B', marginTop: '-2px' }}>social</div>
            <div style={{ fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#06402B', marginTop: '2px', opacity: 0.65 }}>by Emmy Rener</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul style={{
          display: 'flex', gap: '40px', listStyle: 'none',
          '@media (max-width: 768px)': { display: 'none' }
        } as any}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Our Services', href: '/services' },
            { label: 'Our Founder', href: '/founder' },
            { label: "Let's Connect", href: '/connect' },
          ].map((link) => (
            <li key={link.label}>
              <a href={link.href} style={{
                fontSize: '0.72rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#1C1C1C',
                textDecoration: 'none', fontWeight: 400, opacity: 0.55,
                transition: 'opacity 0.2s, color 0.2s'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.color = '#06402B'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '0.55'
                  e.currentTarget.style.color = '#1C1C1C'
                }}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none', border: 'none',
            cursor: 'pointer', padding: '4px',
            flexDirection: 'column', gap: '5px'
          }}
          className="hamburger"
        >
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#06402B', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}></span>
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#06402B', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ display: 'block', width: '22px', height: '1.5px', background: '#06402B', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 199,
        background: 'rgba(247,243,238,0.98)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(6,64,43,0.12)',
        padding: menuOpen ? '32px 28px' : '0 28px',
        maxHeight: menuOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease, padding 0.4s ease'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Our Services', href: '/services' },
            { label: 'Our Founder', href: '/founder' },
            { label: "Let's Connect", href: '/connect' },
          ].map((link) => (
            <a key={link.label} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1.2rem', fontFamily: 'Playfair Display, serif',
                fontWeight: 400, color: '#1C1C1C',
                textDecoration: 'none', transition: 'color 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#06402B'}
              onMouseLeave={e => e.currentTarget.style.color = '#1C1C1C'}
            >{link.label}</a>
          ))}
          <a href="mailto:emmy@sophisticatedspreads.net" style={{
            fontSize: '0.75rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#06402B',
            textDecoration: 'none', marginTop: '8px'
          }}>emmy@sophisticatedspreads.net</a>
        </div>
      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#06402B' }}>
      <div style={{
        padding: '80px 80px 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '60px',
        borderBottom: '1px solid rgba(247,243,238,0.08)'
      }}>
        <div>
          <div style={{ lineHeight: 1, marginBottom: '24px' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1.4rem', color: 'rgba(247,243,238,0.9)' }}>sophisticated</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.4rem', color: 'rgba(247,243,238,0.9)', marginTop: '-2px' }}>social</div>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.45)', marginTop: '6px' }}>by Emmy Rener</div>
          </div>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.9, color: 'rgba(247,243,238,0.45)', fontWeight: 300, maxWidth: '260px' }}>
            Intentional social strategy and content for founder-led brands ready to scale across the globe.
          </p>
        </div>

        <div>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.35)', marginBottom: '24px' }}>Pages</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Our Services', href: '/services' },
              { label: 'Our Founder', href: '/founder' },
              { label: "Let's Connect", href: '/connect' },
            ].map((link) => (
              <a key={link.label} href={link.href} style={{
                fontSize: '0.88rem', color: 'rgba(247,243,238,0.55)',
                textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#F7F3EE'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,243,238,0.55)'}
              >{link.label}</a>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.35)', marginBottom: '24px' }}>Services</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {['Content Creation', 'Social Media Management', 'Website Development', 'Influencer Marketing', 'Full Social Makeover'].map((s) => (
              <a key={s} href="/services" style={{
                fontSize: '0.88rem', color: 'rgba(247,243,238,0.55)',
                textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#F7F3EE'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,243,238,0.55)'}
              >{s}</a>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.35)', marginBottom: '24px' }}>Get In Touch</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'emmy@sophisticatedspreads.net', href: 'mailto:emmy@sophisticatedspreads.net' },
              { label: 'Instagram — @emmyrener', href: 'https://www.instagram.com/emmyrener' },
              { label: 'TikTok — @emmyrener', href: 'https://www.tiktok.com/@emmyrener' },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '0.88rem', color: 'rgba(247,243,238,0.55)',
                textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#F7F3EE'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,243,238,0.55)'}
              >{link.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        padding: '28px 80px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px'
      }}>
        <p style={{ fontSize: '0.72rem', color: 'rgba(247,243,238,0.25)', letterSpacing: '0.08em' }}>© 2026 Sophisticated Social by Emmy Rener. All rights reserved.</p>
        <p style={{ fontSize: '0.72rem', color: 'rgba(247,243,238,0.25)', letterSpacing: '0.08em', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>Based in Paris. Working globally.</p>
      </div>
    </footer>
  )
}