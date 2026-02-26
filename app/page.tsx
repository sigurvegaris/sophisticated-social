'use client'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const [sectionsVisible, setSectionsVisible] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observers = sectionsRef.current.map((ref, i) => {
      if (!ref) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setSectionsVisible(prev => [...prev, i])
        },
        { threshold: 0.15 }
      )
      obs.observe(ref)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  const fadeStyle = (i: number) => ({
    opacity: sectionsVisible.includes(i) ? 1 : 0,
    transform: sectionsVisible.includes(i) ? 'translateY(0)' : 'translateY(28px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  })

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '55% 45%',
        minHeight: 'calc(100vh - 68px)',
        background: '#FFFFFF',
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: isMobile ? '64px 28px' : '80px 80px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '48px' }}>
            <div style={{ width: '40px', height: '1px', background: '#06402B', opacity: 0.5 }}></div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', fontWeight: 400, opacity: 0.7 }}>For Founder-Led Brands</p>
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: isMobile ? '3rem' : 'clamp(3.2rem, 4.8vw, 5.5rem)',
            fontWeight: 400, lineHeight: 1.1,
            marginBottom: '36px', color: '#1C1C1C', letterSpacing: '-0.02em'
          }}>
            Where story,<br />
            <em style={{ fontStyle: 'italic', color: '#06402B' }}>strategy,</em><br />
            and sales meet.
          </h1>

          <p style={{
            fontSize: '1.05rem', lineHeight: 1.95, color: '#7A7A72',
            fontWeight: 300, maxWidth: '420px', marginBottom: '56px'
          }}>
            500K followers. Six figures in sales. Sofia Vergara and Jessica Alba as clients. I built it myself from scratch and now I build it for you.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '36px', flexWrap: 'wrap' }}>
            <a href="/services" style={{
              display: 'inline-block', padding: '16px 40px',
              background: '#06402B', color: '#FFFFFF',
              textDecoration: 'none', fontSize: '0.75rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 400, border: '1px solid #06402B',
              borderRadius: '10px', transition: 'all 0.3s ease'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#06402B' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#06402B'; e.currentTarget.style.color = '#FFFFFF' }}
            >Work With Me</a>
            <a href="/founder" style={{
              fontSize: '0.75rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#06402B',
              textDecoration: 'none', fontWeight: 300, opacity: 0.7, transition: 'opacity 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
            >My Story →</a>
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', margin: '24px 24px 24px 0' }}>
            <img
              src="/images/featuredpic4.png"
              alt="Emmy Rener"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 35%',
                position: 'absolute', inset: 0, display: 'block',
                transform: 'scale(1.1)', transformOrigin: 'center top'
              }}
            />
          </div>
        )}
      </section>

      {/* ── INTRO ── */}
      <div
        ref={el => { sectionsRef.current[0] = el }}
        style={{
          padding: isMobile ? '72px 28px' : '130px 80px',
          background: '#FFFFFF',
          ...fadeStyle(0)
        }}
      >
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '40px', opacity: 0.7 }}>How I Did It</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: isMobile ? '2.4rem' : 'clamp(2.8rem, 4vw, 4.5rem)',
          fontWeight: 400, lineHeight: 1.15, color: '#1C1C1C',
          marginBottom: '48px', maxWidth: '700px'
        }}>
          I didn't follow trends.<br />
          <em style={{ fontStyle: 'italic', color: '#06402B' }}>I set them.</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '32px' : '80px',
          alignItems: 'flex-start'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 2, color: '#7A7A72', fontWeight: 300 }}>
              I built Sophisticated Spreads from family holiday parties into a business with six figures in annual sales and half a million followers. Nobody handed me a playbook. I figured it out by showing up, telling my story honestly, and creating content that people actually wanted to share.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 2, color: '#7A7A72', fontWeight: 300 }}>
              Sofia Vergara posted about my work unprompted. Jessica Alba discovered me on Instagram. None of it happened by accident — it happened because I understood how to make content that people actually want to share. That is exactly what I bring to my clients.
            </p>
            <a href="/founder" style={{
              fontSize: '0.75rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#06402B',
              textDecoration: 'none', fontWeight: 400,
              borderBottom: '1px solid rgba(6,64,43,0.3)',
              paddingBottom: '3px', width: 'fit-content',
              marginTop: '12px', transition: 'border-color 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#06402B'}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'rgba(6,64,43,0.3)'}
            >Read My Full Story →</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '-60px' }}>
            {[
              { num: '200K', label: 'Instagram Followers' },
              { num: '342K', label: 'TikTok Followers' },
              { num: '500K+', label: 'Combined Following' },
              { num: '5+', label: 'Years of Experience' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '28px 36px',
                background: i % 2 === 0 ? '#F7F3EE' : '#FFFFFF',
                borderLeft: '2px solid rgba(6,64,43,0.08)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: '24px',
                transition: 'border-color 0.3s'
              }}
                onMouseEnter={e => (e.currentTarget.style.borderLeftColor = '#06402B')}
                onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'rgba(6,64,43,0.08)')}
              >
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem', fontWeight: 400,
                  color: '#06402B', lineHeight: 1
                }}>{s.num}</span>
                <span style={{
                  fontSize: '0.72rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#7A7A72',
                  fontWeight: 300, textAlign: 'right'
                }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── METHODOLOGY ── */}
      <div
        ref={el => { sectionsRef.current[1] = el }}
        style={{
          padding: isMobile ? '72px 28px' : '130px 80px',
          background: '#F7F3EE',
          ...fadeStyle(1)
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '20px', opacity: 0.7 }}>The Method</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 3.5vw, 3.5rem)',
              fontWeight: 400, lineHeight: 1.2, color: '#1C1C1C'
            }}>
              Three things I believe<br />
              <em style={{ fontStyle: 'italic', color: '#06402B' }}>about great social media.</em>
            </h2>
          </div>
          <a href="/services" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#06402B', textDecoration: 'none', fontWeight: 400, borderBottom: '1px solid rgba(6,64,43,0.3)', paddingBottom: '4px' }}>View All Services →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '16px' : '2px' }}>
          {[
            { num: '01', title: 'Storytelling', desc: 'Every brand has a story worth telling. I find it, shape it, and share it in a way that builds a community that actually buys. This is the foundation of everything I do.' },
            { num: '02', title: 'Person-Led Branding', desc: 'People connect with people. The most powerful brands in 2026 are built around real humans. I help you become the face your audience wants to follow and trust.' },
            { num: '03', title: 'High Quality Content', desc: 'Content that reflects your standard. Crafted to stop the scroll, start a conversation, and turn browsers into loyal customers who come back again and again.' },
          ].map((p, i) => (
            <div key={i}
              style={{ background: '#FFFFFF', padding: isMobile ? '40px 32px' : '60px 52px', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 400, color: '#06402B', opacity: 0.06, position: 'absolute', top: '24px', right: '32px', lineHeight: 1 }}>{p.num}</span>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.7rem', color: '#06402B', opacity: 0.5, display: 'block', marginBottom: '28px', letterSpacing: '0.15em' }}>{p.num}</span>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 400, marginBottom: '20px', lineHeight: 1.2, color: '#1C1C1C' }}>{p.title}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 2, color: '#7A7A72', fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIAL ── */}
      <div
        ref={el => { sectionsRef.current[2] = el }}
        style={{
          padding: isMobile ? '72px 28px' : '130px 80px',
          background: '#FFFFFF',
          ...fadeStyle(2)
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', marginBottom: '48px', opacity: 0.7 }}>Kind Words</p>
          <blockquote style={{
            fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
            fontSize: isMobile ? '1.4rem' : 'clamp(1.5rem, 2.5vw, 2.2rem)',
            fontWeight: 400, color: '#1C1C1C', lineHeight: 1.7, marginBottom: '48px'
          }}>
            "Emmy, you would have been successful on your own because of your product and how hardworking you are. You are amazing."
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(6,64,43,0.2)' }}></div>
            <p style={{ fontSize: '0.85rem', fontWeight: 400, color: '#06402B', letterSpacing: '0.05em' }}>Sofia Vergara</p>
            <div style={{ width: '32px', height: '1px', background: 'rgba(6,64,43,0.2)' }}></div>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#7A7A72', marginTop: '8px', letterSpacing: '0.05em' }}>Actress</p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        ref={el => { sectionsRef.current[3] = el }}
        style={{
          background: '#1C1C1C',
          padding: isMobile ? '72px 28px' : '130px 80px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '48px' : '80px',
          alignItems: 'center',
          ...fadeStyle(3)
        }}
      >
        <div>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.5)', marginBottom: '32px' }}>Work With Me</p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 3.5vw, 3.5rem)',
            fontWeight: 400, color: '#F7F3EE', lineHeight: 1.25, marginBottom: '28px'
          }}>
            Ready to build something<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(247,243,238,0.6)' }}>people actually talk about?</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(247,243,238,0.5)', fontWeight: 300, lineHeight: 1.9, maxWidth: '400px' }}>
            I work with a small number of clients at a time so every brand gets the attention it deserves. If you are ready to take your social presence seriously, I would love to hear from you.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
          <a href="/connect" style={{
            display: 'inline-block', padding: '18px 52px',
            background: '#F7F3EE', color: '#1C1C1C',
            textDecoration: 'none', fontSize: '0.75rem',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            fontWeight: 400, border: '1px solid #F7F3EE',
            borderRadius: '10px', transition: 'all 0.3s'
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F7F3EE' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#F7F3EE'; e.currentTarget.style.color = '#1C1C1C' }}
          >Get In Touch</a>
          <a href="/services" style={{
            fontSize: '0.75rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'rgba(247,243,238,0.5)',
            textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s'
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F7F3EE')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,243,238,0.5)')}
          >View Services →</a>
        </div>
      </div>

    </div>
  )
}