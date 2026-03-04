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
    text: 'I was building a six figure business while studying Entrepreneurship and Public Relations at the University of Southern California. I also judged at the World Cheese Awards in the UK that year. Fight on!'
  },
  {
    year: 'Now',
    location: 'Paris, France',
    text: 'I moved to Paris to develop a more global taste for marketing and honestly some might say I am the real Emily in Paris. I am now taking everything I learned building Sophisticated Spreads and helping other brands build the kind of social presence that actually moves the needle.'
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
        minHeight: isMobile ? 'auto' : 'auto',
        background: '#FFFFFF'
      }}>
        <div style={{
padding: isMobile ? '80px 28px 40px' : '100px 60px 60px',display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '32px', height: '1px', background: '#06402B' }}></div>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B' }}>Our Founder</p>
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: isMobile ? '2.4rem' : 'clamp(2.2rem, 3vw, 3.5rem)',            fontWeight: 400, lineHeight: 1.1,
            marginBottom: '32px', color: '#1C1C1C',
            letterSpacing: '-0.02em'
          }}>
            Meet Emmy.<br />
            <em style={{ fontStyle: 'italic', color: '#06402B' }}>Nice to meet you.</em>
          </h1>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#7A7A72', fontWeight: 300, marginBottom: '16px', maxWidth: '460px' }}>
            I grew up in Palos Verdes, California with a love for all things storytelling since day one. As a people person, I love meeting people and hearing their story.
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#7A7A72', fontWeight: 300, marginBottom: '16px', maxWidth: '460px' }}>
            When I was 18 years old and the pandemic hit, I decided to pivot and launch a cheeseboard company called Sophisticated Spreads. I turned basic cheeseboards and family holiday parties into stories I told on social media. I created a cheese empire with six figures in sales and half a million followers across platforms all because I understood how pivotal storytelling on social media truly is.
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: '#7A7A72', fontWeight: 300, marginBottom: '32px', maxWidth: '460px' }}>
            After studying Entrepreneurship and Public Relations at USC, I moved to Paris to develop a more global taste for marketing. Now I want to help businesses create a social media legacy that feels authentically them, while also translating stories into sales.
          </p>

          {/* Follow Along */}
          <div style={{ borderTop: '1px solid rgba(6,64,43,0.1)', paddingTop: '28px' }}>
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B', opacity: 0.65, marginBottom: '16px' }}>Follow Along</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Instagram — @emmyrener', href: 'https://www.instagram.com/emmyrener' },
                { label: 'TikTok — @sophisticatedspreads', href: 'https://www.tiktok.com/@sophisticatedspreads' },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.82rem', color: '#06402B', textDecoration: 'none',
                  fontWeight: 300, letterSpacing: '0.03em', opacity: 0.8,
                  transition: 'opacity 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
                >{link.label}</a>
              ))}
            </div>
            <p style={{ fontSize: '0.72rem', color: '#7A7A72', marginTop: '20px', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
              Based in Paris, France and Los Angeles, California
            </p>
          </div>
        </div>

        {/* Hero image */}
        <div style={{
  position: 'sticky',
  top: '68px',
  height: 'calc(100vh - 68px)',
  overflow: 'hidden',
}}>
          <img
            src="/images/featuredpic4.png"
            alt="Emmy Rener"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 100%',
              display: 'block', position: 'absolute', inset: 0
            }}
          />
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



     

      {/* ── CELEBRITY CLIENTS ── */}
      <div style={{ background: '#F7F3EE', padding: isMobile ? '72px 28px' : '100px 70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '1px', background: '#06402B' }}></div>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B' }}>Kind Words</p>
        </div>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: isMobile ? '2rem' : 'clamp(2rem, 3vw, 3rem)',
          fontWeight: 400, marginBottom: '60px', lineHeight: 1.2, letterSpacing: '-0.02em'
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

      

      {/* ── PHOTO GALLERY ──
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
          {[
            { label: 'Emmy in Paris', image: '/images/emmyatief.png' },
            { label: 'Emmy at work', image: '/images/emmygreenhornranch.png' },
            { label: 'Emmy with camera', image: '/images/emmywithcamera.png' },
          ].map((item) => (
            <div key={item.label} style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
              <img
                src={item.image}
                alt={item.label}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* ── CONNECT CTA ── */}
      <div style={{ background: '#FFFFFF', padding: isMobile ? '72px 28px' : '100px 70px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#06402B', opacity: 0.65, marginBottom: '24px' }}>Let's Work Together</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: isMobile ? '2rem' : 'clamp(2rem, 3vw, 3rem)',
          fontWeight: 400, lineHeight: 1.2, color: '#1C1C1C',
          marginBottom: '24px', letterSpacing: '-0.02em'
        }}>
          Ready to build something<br />
          <em style={{ fontStyle: 'italic', color: '#06402B' }}>worth talking about?</em>
        </h2>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: '#7A7A72', fontWeight: 300, maxWidth: '480px', margin: '0 auto 40px' }}>
          I love hearing from brands who are ready to take their social presence seriously. Tell me a little about yourself and what you are looking to build and I will be in touch.
        </p>
        <p style={{ fontSize: '0.78rem', color: '#7A7A72', fontStyle: 'italic', fontFamily: 'Playfair Display, serif', marginBottom: '40px' }}>
          Based in Paris, France and Los Angeles, California
        </p>
        <a href="/connect" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '17px 48px',
          background: '#06402B', color: '#FFFFFF',
          textDecoration: 'none', fontSize: '0.72rem',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          fontWeight: 400, border: '1px solid #06402B',
          borderRadius: '10px', transition: 'all 220ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#06402B' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#06402B'; e.currentTarget.style.color = '#FFFFFF' }}
        >Get In Touch →</a>
      </div>

    </div>
  )
}