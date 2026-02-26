'use client'
import { useEffect, useRef, useState } from 'react'

const press = [
  { name: 'LA Mag', desc: 'How Emmy Rener Built Sophisticated Spreads' },
  { name: 'Authority Magazine', desc: 'Five Things I Learned as a Twenty-Something Founder' },
  { name: 'Voyage LA', desc: 'Exploring Life & Business with Emmy Rener' },
  { name: 'Spoon University', desc: 'Meet the 19-Year-Old Behind Sofia Vergara\'s Viral Picnic' },
  { name: 'LX.com', desc: 'Young Entrepreneur Finds Her Sweet Spot' },
]

const timeline = [
  {
    year: 'Growing Up',
    location: 'Palos Verdes, CA',
    text: 'I grew up in a household where the dinner table was everything. My dad would show me Pinterest photos and say try to make a cheese board that looks like this. Food was always an art form for me, not just something you eat. I also worked at a flower shop throughout high school which is where my eye for design really developed.'
  },
  {
    year: '2020',
    location: 'Miami to Los Angeles',
    text: 'A friend invited me to make a spread for her father\'s birthday party in Miami. I was a high school senior and told her I didn\'t have a business. I said yes anyway. The private chef at that event pulled me aside and said you are sitting on something. You should run with this. I went home and started Sophisticated Spreads.'
  },
  {
    year: '2021',
    location: 'Los Angeles',
    text: 'Sofia Vergara posted about one of my boards completely unprompted. I sat there refreshing my page and every minute there were another hundred followers. I had 22,000 followers and in two days I got 5,000 more. Jessica Alba posted too. Then Jesse Tyler Ferguson. Then Allison Janney. I still pinch myself.'
  },
  {
    year: '2022',
    location: 'USC, Los Angeles',
    text: 'I was building a six figure business while studying Business and Public Relations at the University of Southern California. I also judged at the World Cheese Awards in the UK that year. Fight on!'
  },
  {
    year: 'Now',
    location: 'Paris, France',
    text: 'I moved to Paris to develop a more global taste for marketing and honestly some might say I am the real Emily in Paris. I am now taking everything I learned building Sophisticated Spreads and helping other founder led brands build the kind of social presence that actually moves the needle.'
  },
]

export default function Founder() {
  const [visible, setVisible] = useState([])
  const timelineRefs = useRef([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, i) => {
      if (!ref) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(prev => [...prev, i]) },
        { threshold: 0.2 }
      )
      obs.observe(ref)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* ── HERO ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        minHeight: isMobile ? 'auto' : '90vh',
        background: '#FFFFFF'
      }}>
        <div style={{
          padding: isMobile ? '80px 28px 52px' : '90px 70px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '32px', height: '1px', background: '#06402B' }}></div>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B' }}>Our Founder</p>
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: isMobile ? '2.8rem' : 'clamp(2.8rem, 4vw, 4.5rem)',
            fontWeight: 400, lineHeight: 1.1,
            marginBottom: '32px', color: '#1C1C1C'
          }}>
            Hi, I am Emmy.<br />
            <em style={{ fontStyle: 'italic', color: '#06402B' }}>Nice to meet you.</em>
          </h1>
          <p style={{ fontSize: '0.92rem', lineHeight: 2, color: '#7A7A72', fontWeight: 300, marginBottom: '20px', maxWidth: '460px' }}>
            I grew up in Palos Verdes, California with a love for storytelling since day one. I built a cheeseboard business called Sophisticated Spreads from family holiday parties into a cheese empire with six figures in sales and half a million followers across platforms.
          </p>
          <p style={{ fontSize: '0.92rem', lineHeight: 2, color: '#7A7A72', fontWeight: 300, maxWidth: '460px' }}>
            After studying Business and Public Relations at USC, I moved to Paris to develop a more global taste for marketing. Now I want to help you build what I built.
          </p>
        </div>

        <div style={{
          position: 'relative',
          background: '#EDE8E0',
          overflow: 'hidden',
          minHeight: isMobile ? '360px' : 'auto'
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(160deg, #CFC8BC 0%, #BAB3A7 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '16px'
          }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', border: '1px solid rgba(6,64,43,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06402B" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
            </div>
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#06402B', opacity: 0.4 }}>Emmy's photo here</span>
          </div>
        </div>
      </div>

      {/* ── PULL QUOTE ── */}
      <div style={{ background: '#06402B', padding: isMobile ? '64px 28px' : '80px 70px', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: isMobile ? '1.3rem' : 'clamp(1.4rem, 2.5vw, 2.2rem)',
          fontWeight: 400, color: 'rgba(247,243,238,0.92)',
          maxWidth: '800px', margin: '0 auto', lineHeight: 1.7
        }}>
          "I had 22,000 followers and in two days I got 5,000 more. I sat there refreshing my page and every minute there were another hundred followers. I will never forget that feeling."
        </p>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.35)', marginTop: '28px' }}>Emmy Rener, on going viral overnight</p>
      </div>

      {/* ── STATS ── */}
      <div style={{
        background: '#F7F3EE',
        padding: isMobile ? '64px 28px' : '80px 70px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? '12px' : '2px'
      }}>
        {[
          { num: '200K', label: 'Instagram Followers' },
          { num: '342K', label: 'TikTok Followers' },
          { num: '6-Fig', label: 'Annual Sales Built' },
          { num: '$25K', label: 'Single Event Record' },
        ].map((s, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: isMobile ? '32px 16px' : '40px 20px',
            background: '#FFFFFF'
          }}>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 3vw, 3rem)',
              fontWeight: 400, color: '#06402B', lineHeight: 1, marginBottom: '12px'
            }}>{s.num}</div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7A7A72', fontWeight: 300 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── TIMELINE ── */}
      <div style={{ background: '#FFFFFF', padding: isMobile ? '72px 28px' : '100px 70px' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: '#06402B' }}></div>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B' }}>The Journey</p>
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: isMobile ? '2rem' : 'clamp(2rem, 3vw, 3rem)',
            fontWeight: 400, lineHeight: 1.2
          }}>From Palos Verdes<br /><em style={{ fontStyle: 'italic', color: '#06402B' }}>to Paris.</em></h2>
        </div>

        <div style={{ position: 'relative' }}>
          {!isMobile && (
            <div style={{ position: 'absolute', left: '140px', top: 0, bottom: 0, width: '1px', background: 'rgba(6,64,43,0.1)' }}></div>
          )}
          {timeline.map((item, i) => (
            <div
              key={i}
              ref={el => timelineRefs.current[i] = el}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '140px 1fr',
                gap: isMobile ? '8px' : '60px',
                marginBottom: isMobile ? '48px' : '56px',
                opacity: visible.includes(i) ? 1 : 0,
                transform: visible.includes(i) ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`
              }}
            >
              <div style={{ paddingRight: isMobile ? '0' : '32px', textAlign: isMobile ? 'left' : 'right' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 600, color: '#06402B', marginBottom: '4px' }}>{item.year}</div>
                <div style={{ fontSize: '0.65rem', color: '#7A7A72', fontWeight: 300, letterSpacing: '0.05em' }}>{item.location}</div>
              </div>
              <div style={{ paddingLeft: isMobile ? '0' : '60px', position: 'relative' }}>
                {!isMobile && (
                  <div style={{ position: 'absolute', left: '-4px', top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: '#06402B' }}></div>
                )}
                <p style={{ fontSize: '0.88rem', lineHeight: 2, color: '#7A7A72', fontWeight: 300 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CELEBRITY CLIENTS ── */}
      <div style={{ background: '#F7F3EE', padding: isMobile ? '72px 28px' : '100px 70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '1px', background: '#06402B' }}></div>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B' }}>Kind Words</p>
        </div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: isMobile ? '2rem' : 'clamp(2rem, 3vw, 3rem)',
          fontWeight: 400, marginBottom: '60px', lineHeight: 1.2
        }}>People who have<br /><em style={{ fontStyle: 'italic', color: '#06402B' }}>trusted the work.</em></h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '2px'
        }}>
          {[
            { quote: 'Emmy, you would have been successful on your own because your product and how hardworking you are. You are amazing!', name: 'Sofia Vergara', title: 'Actress' },
            { quote: 'Sophisticated Spreads are the easiest way to elevate an occasion and make your guests feel like they need to step up their own game.', name: 'Jesse Tyler Ferguson', title: 'Actor, Modern Family' },
            { quote: 'Whenever I have a special occasion I am hosting, my first call is to Sophisticated Spreads. Highly recommend.', name: 'Allison Janney', title: 'Actress, The West Wing' },
          ].map((q, i) => (
            <div key={i} style={{
              background: '#FFFFFF', padding: isMobile ? '40px 32px' : '52px 44px',
              borderBottom: '2px solid transparent', transition: 'border-color 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#06402B'}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
            >
              <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.85, color: '#1C1C1C', marginBottom: '32px', fontWeight: 400 }}>"{q.quote}"</p>
              <p style={{ fontSize: '0.78rem', fontWeight: 500, color: '#06402B', letterSpacing: '0.05em' }}>{q.name}</p>
              <p style={{ fontSize: '0.65rem', color: '#7A7A72', marginTop: '4px', letterSpacing: '0.05em' }}>{q.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRESS ── */}
      <div style={{ background: '#FFFFFF', padding: isMobile ? '72px 28px' : '100px 70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '1px', background: '#06402B' }}></div>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B' }}>Press</p>
        </div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: isMobile ? '2rem' : 'clamp(2rem, 3vw, 3rem)',
          fontWeight: 400, marginBottom: '60px', lineHeight: 1.2
        }}>As seen in</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '12px' : '2px'
        }}>
          {press.map((p, i) => (
            <div key={i} style={{
              padding: isMobile ? '32px 28px' : '44px',
              background: '#F7F3EE',
              borderBottom: '2px solid transparent',
              transition: 'border-color 0.3s, background 0.3s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#06402B'; e.currentTarget.style.background = '#FFFFFF' }}
              onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.background = '#F7F3EE' }}
            >
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600, color: '#06402B', marginBottom: '12px' }}>{p.name}</p>
              <p style={{ fontSize: '0.78rem', lineHeight: 1.7, color: '#7A7A72', fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PHOTO GALLERY ── */}
      <div style={{ padding: isMobile ? '72px 28px' : '100px 70px', background: '#F7F3EE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '52px' }}>
          <div style={{ width: '32px', height: '1px', background: '#06402B' }}></div>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B' }}>Behind the Brand</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '12px' : '14px'
        }}>
          {['Emmy in Paris', 'Emmy at work', 'Emmy with camera'].map((label) => (
            <div key={label} style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden', background: '#EDE8E0' }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, #D4CEC4 0%, #C0B9AE 100%)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '10px'
              }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1px solid rgba(6,64,43,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06402B" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#06402B', opacity: 0.38 }}>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}