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
        { name: 'Tête de Moine', image: '/images/emmyatief.png' },
        { name: 'Fiscalini', image: '/images/cheddarhorizontal.png' },
      ]},
    { category: 'Lifestyle', items: [
      { name: 'Caudalie', image: '/images/caudalie.png' },
      { name: 'Camp Fleurish', image: '/images/campfleurish2.png' },
    ]},
    { category: 'Hotels & Travel', items: [
        { name: 'Greenhorn Ranch', image: '/images/emmygreenhornranch.png' },
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
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '32px' : '80px',
        alignItems: 'end'
      }}>
        <div>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '28px', opacity: 0.7 }}>What We Offer</p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: isMobile ? '2.6rem' : 'clamp(2.8rem, 4vw, 4.5rem)',
            fontWeight: 400, lineHeight: 1.1, color: '#1C1C1C',
            letterSpacing: '-0.02em'
          }}>
            This is where we are<br />
            <em style={{ fontStyle: 'italic', color: '#06402B' }}>different from the rest.</em>
          </h1>
        </div>
        <div style={{ alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: '0px' }}>
  {[
    // { num: '01', title: 'Story First', desc: 'Every strategy starts with finding what makes your brand worth following.' },
    // { num: '02', title: 'Built Around You', desc: 'No templates. No generic packages. Every client gets a custom approach.' },
    // { num: '03', title: 'Results That Last', desc: 'We build communities that engage, trust, and buy — not just follower counts.' },
  ].map((item, i) => (
    <div key={i} style={{
      display: 'flex', alignItems: 'flex-start', gap: '14px',
      padding: '4px 0',
      borderBottom: i < 2 ? '1px solid rgba(6,64,43,0.08)' : 'none',
    }}>
      <span style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '0.7rem', color: '#06402B',
        opacity: 0.4, letterSpacing: '0.1em',
        minWidth: '24px', paddingTop: '2px'
      }}>{item.num}</span>
      <div>
        <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1C1C1C', marginBottom: '1px', letterSpacing: '0.02em' }}>{item.title}</p>
        <p style={{ fontSize: '0.85rem', color: '#7A7A72', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</p>
      </div>
    </div>
  ))}
</div>
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
    display: 'block',
    borderRadius: '16px'
  }}
/>
          </div>
        )}
      </div>

      {/* ── WHY WORK WITH US ── */}
      <div style={{
        background: '#06402B',
        padding: isMobile ? '72px 28px' : '120px 80px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '48px' : '100px',
        alignItems: 'center'
      }}>
        <div>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.5)', marginBottom: '32px' }}>Why Work With Us</p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 3.5vw, 3.5rem)',
            fontWeight: 400, color: '#F7F3EE', lineHeight: 1.25, marginBottom: '32px',
            letterSpacing: '-0.02em'
          }}>
            We are not selling you<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(247,243,238,0.6)' }}>a theory.</em>
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 2, color: 'rgba(247,243,238,0.6)', fontWeight: 300 }}>
            Every service we offer is something we have done ourselves. We grew Sophisticated Spreads to half a million followers and six figures in sales using exactly the strategies we now bring to our clients. Sofia Vergara posted about our work. Jessica Alba discovered us on Instagram. We went viral on TikTok with 342,000 followers. This is not theory. This is what actually works.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            { label: 'Real Experience', desc: 'We built and scaled our own brand before consulting for others.' },
            { label: 'Global Perspective', desc: 'Based in Paris, working with brands across the world.' },
            { label: 'Genuine Community', desc: 'We build audiences that actually engage, buy, and stay.' },
            { label: 'Personal Attention', desc: 'We work with a small number of clients so every brand gets our full focus.' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '32px 36px',
              background: 'rgba(255,255,255,0.05)',
              borderLeft: '2px solid rgba(247,243,238,0.1)',
              transition: 'border-color 0.3s, background 0.3s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderLeftColor = '#F7F3EE'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'rgba(247,243,238,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            >
              <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#F7F3EE', marginBottom: '8px', letterSpacing: '0.03em' }}>{item.label}</p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(247,243,238,0.5)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PREVIOUS PROJECTS ── */}
      <div style={{ padding: isMobile ? '72px 28px' : '120px 80px', background: '#F7F3EE' }}>
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
  <div key={cat.category} style={{ marginBottom: '64px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
      <span style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', opacity: 0.6 }}>{cat.category}</span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(6,64,43,0.1)' }}></div>
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? '12px' : '16px'
    }}>
      {cat.items.map((item, i) => (
        <div key={i} style={{
          aspectRatio: '4/5', position: 'relative',
          overflow: 'hidden', borderRadius: '8px',
          transition: 'transform 0.4s ease'
        }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block'
            }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '20px',
            background: 'linear-gradient(to top, rgba(6,64,43,0.7), transparent)'
          }}>
            <p style={{ color: 'white', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 400 }}>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div style={{ padding: isMobile ? '60px 28px' : '90px 80px', background: '#FFFFFF', textAlign: 'center' }}>
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