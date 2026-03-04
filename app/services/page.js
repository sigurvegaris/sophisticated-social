'use client'
import { useState, useEffect } from 'react'

const services = [
  {
    num: '01',
    title: 'Content Creation',
    body: 'We bring products and brands to life by finding the story. With social media riding on ever changing trends, we keep the pulse on what people actually want to see and tailor your brand accordingly. Good content does not happen by accident.'
  },
  {
    num: '02',
    title: 'Social Media Management',
    body: 'Building a community is everything. We manage posting, responses and interactions across all five major social media platforms so you can focus on running your business while your audience grows.'
  },
  {
    num: '03',
    title: 'Website Development',
    body: 'Your website should feel like you. Whether it is a restaurant, a small business or a personal brand, you tell us your story and we bring it to life through a digital experience that actually converts visitors into customers.'
  },
  {
    num: '04',
    title: 'Influencer Marketing',
    body: 'We built Sophisticated Spreads through influencer marketing before we even knew what to call it. Sofia Vergara. Jessica Alba. Jesse Tyler Ferguson. We know how to get the right people talking about your brand. From choosing creators who genuinely speak to your audience to building complete campaigns, this is our bread and butter.'
  },
  {
    num: '05',
    title: 'The Full Social Makeover',
    body: 'Being relevant in the social media landscape in 2026 is the biggest challenge businesses are facing. You tell us where you want to be and we help build the presence to get you there. From logos to content plans, this is the all inclusive service that will help you dominate your space.'
  },
]

const projects = [
  { category: 'Food', items: [
    { name: 'St Dalfour', image: '/images/dalfourpic.png' },
    { name: 'Sophisticated Spreads', image: '/images/sophisticatedspreads1.png' },
    { name: "Bachan's", image: '/images/japanesedip.png' },
    { name: 'Social Media Takeover for the International Cheese Awards', image: '/images/emmyatief.png' },
  ]},
  { category: 'Lifestyle', items: [
    { name: 'Caudalie', image: '/images/caudalie.png' },
    { name: 'Camp Fleurish', image: '/images/campfleurish2.png' },
  ]},

]

export default function Services() {
  const [open, setOpen] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── PAGE HEADER ── */}
      <div style={{
        padding: isMobile ? '80px 28px 52px' : '120px 80px 80px',
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(6,64,43,0.08)',
      }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '28px', opacity: 0.7 }}>What We Offer</p>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: isMobile ? '2.6rem' : 'clamp(2.8rem, 4vw, 4.5rem)',
          fontWeight: 400, lineHeight: 1.1, color: '#1C1C1C',
          letterSpacing: '-0.02em', maxWidth: '700px'
        }}>
          This is where we are<br />
          <em style={{ fontStyle: 'italic', color: '#06402B' }}>different from the rest.</em>
        </h1>
      </div>

      {/* ── ACCORDION + IMAGE ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        background: '#FFFFFF',
        minHeight: '600px'
      }}>
        <div style={{ padding: isMobile ? '48px 28px' : '80px', borderRight: isMobile ? 'none' : '1px solid rgba(6,64,43,0.08)' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              borderBottom: '1px solid rgba(6,64,43,0.08)',
              ...(i === 0 && { borderTop: '1px solid rgba(6,64,43,0.08)' })
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  padding: '28px 0', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', cursor: 'pointer',
                  textAlign: 'left', gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.7rem', color: '#06402B', opacity: 0.4, letterSpacing: '0.1em' }}>{s.num}</span>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    fontWeight: 400,
                    color: open === i ? '#06402B' : '#1C1C1C',
                    transition: 'color 0.3s'
                  }}>{s.title}</h3>
                </div>
                <span style={{
                  fontSize: '1.6rem', color: '#06402B',
                  fontWeight: 300, lineHeight: 1, flexShrink: 0,
                  transition: 'transform 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
                <p style={{
                  fontSize: '0.95rem', lineHeight: 2,
                  color: '#7A7A72', fontWeight: 300,
                  paddingBottom: '28px',
                  paddingRight: isMobile ? '0' : '40px',
                  paddingLeft: '46px'
                }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div style={{ position: 'relative', background: '#EDE8E0', minHeight: '600px', marginTop: '-400px', borderRadius: '16px', overflow: 'hidden' }}>
            <img
              src="/images/emmywithcamera.png"
              alt="Emmy Rener"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                display: 'block', borderRadius: '16px'
              }}
            />
          </div>
        )}
      </div>

{/* ── PREVIOUS PROJECTS ── */}
<div style={{ padding: isMobile ? '72px 28px' : '120px 80px', background: '#FFFFFF' }}>
  <div style={{
    display: 'flex', justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'flex-end',
    marginBottom: '80px', flexWrap: 'wrap', gap: '32px',
    flexDirection: isMobile ? 'column' : 'row'
  }}>
    <div>
      <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '20px', opacity: 0.7 }}>Selected Work</p>
      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 3.5vw, 3.5rem)',
        fontWeight: 400, lineHeight: 1.2, color: '#1C1C1C',
        letterSpacing: '-0.02em'
      }}>
        Previous<br />
        <em style={{ fontStyle: 'italic', color: '#06402B' }}>Projects.</em>
      </h2>
    </div>
    <p style={{ fontSize: '1rem', color: '#7A7A72', fontWeight: 300, maxWidth: '380px', lineHeight: 1.9 }}>
      A selection of brands and campaigns we have had the pleasure of working with.
    </p>
  </div>

  {projects.map((cat) => (
    <div key={cat.category} style={{ marginBottom: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', opacity: 0.6 }}>{cat.category}</span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(6,64,43,0.1)' }}></div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : `repeat(${Math.min(cat.items.length, 4)}, 1fr)`,
        gap: '0px',
      }}>
        {cat.items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column',
            borderRight: !isMobile && i < cat.items.length - 1 ? '1px solid rgba(6,64,43,0.08)' : 'none',
            padding: isMobile ? '0 8px 24px' : '0 32px 0',
            transition: 'background 0.3s',
            cursor: 'default'
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(6,64,43,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: '4px',
              marginBottom: '16px',
              background: '#F7F3EE'
            }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <p style={{
              fontSize: '0.82rem', color: '#1C1C1C',
              letterSpacing: '0.02em', fontWeight: 400,
              lineHeight: 1.4, marginBottom: '6px'
            }}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

      {/* ── BOTTOM CTA ── */}
      <div style={{ padding: isMobile ? '24px 28px 60px' : '0px 80px 90px', background: '#FFFFFF', textAlign: 'center' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '32px', opacity: 0.7 }}>Ready to Start</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 3.5vw, 3.5rem)',
          fontWeight: 400, lineHeight: 1.2, color: '#1C1C1C', marginBottom: '28px',
          letterSpacing: '-0.02em'
        }}>
          Let's build something<br />
          <em style={{ fontStyle: 'italic', color: '#06402B' }}>worth talking about.</em>
        </h2>
        <p style={{ fontSize: '1rem', color: '#7A7A72', fontWeight: 300, maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.9 }}>
          We take on a small number of clients each season so we can give every brand the focus it deserves. Reach out and let's see if we are a good fit.
        </p>
        <a href="/connect" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '18px 52px',
          background: '#06402B', color: '#F7F3EE',
          textDecoration: 'none', fontSize: '0.72rem',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          fontWeight: 400, border: '1px solid #06402B',
          borderRadius: '10px', transition: 'all 220ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#06402B' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#06402B'; e.currentTarget.style.color = '#F7F3EE' }}
        >Get In Touch →</a>
      </div>

    </div>
  )
}