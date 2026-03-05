'use client'
import { useState, useEffect, useRef } from 'react'

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
  // { category: 'Food', items: [
  //   { name: 'Sophisticated Spreads', image: '/images/sophisticatedspreads1.png', horizontal: false },
  //   { name: 'Social Media Takeover for the International Cheese Awards', image: '/images/emmyatief.png', horizontal: false },
  // ]},
  { category: 'Campaigns', items: [
    { name: 'Aldi x Fiscalini Holiday Influencer Campaign', image: '/images/cheddarhorizontal.png', horizontal: true },
    { name: "Chevoo x Effie's Biscuits Influencer Campaign", image: '/images/chevooxeffies.png', horizontal: true },
    { name: 'Aldi x Fiscalini Influencer Campaign', image: '/images/aldixfiscalini2.png', horizontal: true },
  ]},
  // { category: 'Lifestyle', items: [
  //   { name: 'Caudalie', image: '/images/caudalie.png', horizontal: false },
  //   { name: 'Camp Fleurish', image: '/images/campfleurish2.png', horizontal: false },
  // ]},
]


// ── STACK SECTION COMPONENT ──
function StackSection({ isMobile, items }) {
  const total = items.length
  const [topIndex, setTopIndex] = useState(0)
  const [exiting, setExiting] = useState(false)
  const timerRef = useRef(null)

  // Tilt offsets per position in stack (top = 0, back = 2)
  const tilts = [0, -3, 3]
  const scales = [1, 0.97, 0.94]
  const yOffsets = [0, 10, 20]

  const advance = () => {
    if (exiting) return
    setExiting(true)
    setTimeout(() => {
      setTopIndex(prev => (prev + 1) % total)
      setExiting(false)
    }, 680)
  }

  useEffect(() => {
    timerRef.current = setTimeout(function tick() {
      advance()
      timerRef.current = setTimeout(tick, 3200)
    }, 3200)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  // Build visible stack: top card first, then 2 behind
  const stackOrder = [0, 1, 2].map(offset => items[(topIndex + offset) % total])

  return (
    <div style={{ padding: isMobile ? '72px 28px' : '100px 80px 120px', background: '#FFFFFF' }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'flex-end',
        marginBottom: '60px', flexWrap: 'wrap', gap: '32px',
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

      {/* Stack */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: isMobile ? '16/9' : '21/9' }}>
        {[...stackOrder].reverse().map((item, reversedI) => {
          const i = 2 - reversedI // 0 = top card
          const isTop = i === 0
          return (
            <div
              key={item.name}
              className={isTop && exiting ? 'stack-card-exiting' : isTop ? 'stack-card-promoting' : ''}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: isMobile ? '10px' : '16px',
                overflow: 'hidden',
                boxShadow: isTop
                  ? '0 24px 64px rgba(6,64,43,0.18)'
                  : `0 ${8 + i * 6}px ${24 + i * 12}px rgba(6,64,43,0.08)`,
                transform: `rotate(${tilts[i]}deg) scale(${scales[i]}) translateY(${yOffsets[i]}px)`,
                transformOrigin: 'center bottom',
                zIndex: 3 - i,
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block', background: '#F7F3EE' }}
              />
              {/* Caption — only on top card */}
              {isTop && (
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: isMobile ? '28px 20px 18px' : '48px 36px 28px',
                  background: 'linear-gradient(to top, rgba(6,20,14,0.75) 0%, transparent 100%)',
                }}>
                  <p style={{
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    color: '#F7F3EE', letterSpacing: '0.08em',
                    fontWeight: 300, textTransform: 'uppercase', lineHeight: 1.5,
                  }}>{item.name}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '32px' }}>
        {items.map((_, i) => (
          <div key={i} style={{
            width: i === topIndex ? '24px' : '6px',
            height: '6px',
            borderRadius: '3px',
            background: i === topIndex ? '#06402B' : 'rgba(6,64,43,0.2)',
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>
    </div>
  )
}

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

        {/* Mobile header image */}
        {isMobile && (
          <div style={{ width: '100%', height: '280px', overflow: 'hidden', borderRadius: '8px', marginTop: '32px' }}>
            <img
              src="/images/emmywithcamera.png"
              alt="Emmy with camera"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 30%',
                display: 'block'
              }}
            />
          </div>
        )}
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
          <div style={{ width: '100%', overflow: 'hidden', position: 'relative', minHeight: '600px' }}>
            <img
              src="/images/emmywithcamera.png"
              alt="Emmy with camera"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 30%',
                display: 'block', position: 'absolute', inset: 0
              }}
            />
          </div>
        )}
      </div>

      {/* ── PREVIOUS PROJECTS STACK ── */}
      <style>{`
        @keyframes slideAwayLeft {
          0%   { transform: translateX(0) rotate(0deg) scale(1); opacity: 1; z-index: 10; }
          100% { transform: translateX(-110%) rotate(-8deg) scale(0.92); opacity: 0; z-index: 10; }
        }
        @keyframes promoteUp {
          0%   { transform: translateY(12px) scale(0.97); }
          100% { transform: translateY(0px) scale(1); }
        }
        .stack-card-exiting {
          animation: slideAwayLeft 0.7s cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }
        .stack-card-promoting {
          animation: promoteUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <StackSection isMobile={isMobile} items={projects[0].items} />

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