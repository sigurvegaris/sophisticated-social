'use client'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const [sectionsVisible, setSectionsVisible] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [methodVisible, setMethodVisible] = useState(false)
  const [ctaHover, setCtaHover] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const refs = sectionsRef.current
    const observers = refs.map((ref, i) => {
      if (!ref) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSectionsVisible(prev => [...prev, i])
            if (i === 1) setMethodVisible(true)
          }
        },
        { threshold: 0.12 }
      )
      obs.observe(ref)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  const fade = (i: number): React.CSSProperties => ({
    opacity: sectionsVisible.includes(i) ? 1 : 0,
    transform: sectionsVisible.includes(i) ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)'
  })

  const parallaxShift = isMobile ? 0 : Math.min(scrollY * 0.06, 24)
  const imageScale = isMobile ? 1 : Math.max(1.0, 1.02 - scrollY * 0.0001)
  const scrollPct = typeof window !== 'undefined'
    ? Math.min(100, (scrollY / Math.max(1, (typeof document !== 'undefined' ? document.documentElement.scrollHeight - window.innerHeight : 1))) * 100)
    : 0

  return (
    <div style={{ background: '#FFFFFF' }}>

      <style>{`
        .grain-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022;
          pointer-events: none;
          z-index: 1;
        }
        .scroll-line {
          position: fixed;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 100px;
          background: rgba(6,64,43,0.12);
          z-index: 99;
        }
        .scroll-line-fill {
          position: absolute;
          top: 0; left: 0;
          width: 1px;
          background: #06402B;
          transition: height 0.08s linear;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 38px;
          background: #06402B;
          color: #FFFFFF;
          text-decoration: none;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 400;
          border: 1px solid #06402B;
          border-radius: 10px;
          transition: all 220ms cubic-bezier(0.22, 1, 0.36, 1);
          outline: none;
        }
        .btn-primary:hover {
          background: #053318;
          transform: scale(1.03);
          box-shadow: inset 0 1px 4px rgba(0,0,0,0.15);
        }
        .btn-primary:hover .arr { transform: translateX(6px); }
        .arr { display: inline-block; transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1); }
        .link-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #06402B;
          text-decoration: none;
          font-weight: 300;
          opacity: 0.65;
          transition: opacity 0.3s;
        }
        .link-ghost:hover { opacity: 1; }
        .link-underline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #06402B;
          text-decoration: none;
          font-weight: 400;
          position: relative;
          padding-bottom: 3px;
        }
        .link-underline::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #06402B;
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .link-underline:hover::after { width: 100%; }
        .link-underline:hover .arr { transform: translateX(4px); }
        .mcard {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease;
        }
        .mcard:hover { transform: translateY(-4px); background: #EDE8DF !important; }
        .mcard:hover h3 { transform: translateY(-4px); }
        .mcard:hover p { color: #5A5A52 !important; }
        .mcard h3 { transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1); }
        @media (max-width: 768px) {
          .scroll-line { display: none; }
        }
      `}</style>

      {/* Scroll progress line */}
      <div className="scroll-line">
        <div className="scroll-line-fill" style={{ height: `${scrollPct}%` }} />
      </div>

      {/* ── HERO ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '52% 48%',
        minHeight: 'calc(100vh - 68px)',
        background: '#FFFFFF',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: isMobile ? '64px 28px' : '80px 72px 80px 90px',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '52px',
            opacity: heroVisible ? 1 : 0,
            transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s'
          }}>
            <div style={{ width: '36px', height: '1px', background: '#06402B', opacity: 0.45 }} />
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#06402B', fontWeight: 400, opacity: 0.65 }}>For Founder-Led Brands</p>
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 400,
            marginBottom: '44px', color: '#1C1C1C',
            letterSpacing: '-0.025em',
            lineHeight: 1.08
          }}>
            <span style={{
              display: 'block',
              fontSize: isMobile ? '2.9rem' : 'clamp(2.9rem, 4.3vw, 4.9rem)',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
              marginBottom: '2px'
            }}>Where story,</span>
            <em style={{
              display: 'block',
              fontStyle: 'italic',
              color: '#043D22',
              fontSize: isMobile ? '3rem' : 'clamp(2.9rem, 4.3vw, 4.9rem)',
              letterSpacing: '-0.035em',
              lineHeight: 0.95,
              marginBottom: '2px',
              paddingLeft: '2px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateX(0)' : 'translateX(-12px)',
              transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.28s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s'
            }}>strategy,</em>
            <span style={{
              display: 'block',
              fontSize: isMobile ? '2.9rem' : 'clamp(2.9rem, 4.3vw, 4.9rem)',
              opacity: heroVisible ? 0.9 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s'
            }}>and sales meet.</span>
          </h1>

          <div style={{
            maxWidth: '420px', marginBottom: '52px',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.55s'
          }}>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.85, color: '#7A7A72', fontWeight: 300, marginBottom: '12px' }}>
              Building a social media presence today means more than posting consistently<br />
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.85, color: '#7A7A72', fontWeight: 300, marginBottom: '12px' }}>
              It means telling a story people want to follow.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.85, color: '#7A7A72', fontWeight: 300, marginBottom: '12px' }}>
              I built my own brand from scratch with a community of over 500,000 and a six figure  business rooted in content that feels human<br />
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.85, color: '#7A7A72', fontWeight: 300, marginBottom: '20px' }}>
              Now I help others do the same.
            </p>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#4A4A42', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
              Because attention isn't captured. It's earned.
            </p>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s'
          }}>
            <a href="/services" className="btn-primary">
              Work With Me <span className="arr">→</span>
            </a>
            <a href="/founder" className="link-ghost">My Story →</a>
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '0', margin: '0' }}>
            <img
              src="/images/campfleurish1.png"
              alt="Emmy Rener"
              style={{
                width: '100%', height: '120%',
                objectFit: 'cover', objectPosition: 'center top',
                position: 'absolute', inset: 0, display: 'block',
                top: '-20%',
                transform: `translateY(${parallaxShift}px) scale(${imageScale})`,
                transformOrigin: 'center top',
                transition: 'transform 0.05s linear',
                willChange: 'transform'
              }}
            />
          </div>
        )}
      </section>

      {/* ── BRANDS ── */}
      <div style={{ background: '#FFFFFF' }}>
        <div style={{
          padding: isMobile ? '40px 28px' : '52px 80px',
          borderTop: '1px solid rgba(6,64,43,0.08)',
        }}>
          <p style={{
            fontSize: '0.68rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#06402B',
            opacity: 0.5, textAlign: 'center', marginBottom: '40px'
          }}>Brands We've Worked With</p>

          {/* Logo row */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', alignItems: 'center',
            gap: isMobile ? '24px 32px' : '16px 48px',
            marginBottom: '40px'
          }}>
            {[
{ name: 'Microsoft', logo: '/logos/microsoft.png' },
{ name: 'Hard Rock Hotels', logo: '/logos/hardrock.png' },
{ name: 'QuickBooks', logo: '/logos/quickbooks.png' },
{ name: 'Viator', logo: '/logos/viator.png' },
{ name: "Jersey Mike's", logo: '/logos/jerseymikes.png' },
{ name: 'Caudalie', logo: '/logos/caudalie.png' },
{ name: 'CapCut', logo: '/logos/capcut.png' },
            ].map((brand) => (
              <div key={brand.name} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                filter: 'grayscale(100%)', opacity: 0.5,
                transition: 'opacity 0.3s, filter 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'grayscale(0%)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.filter = 'grayscale(100%)' }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ height: isMobile ? '28px' : '36px', width: 'auto', objectFit: 'contain', maxWidth: '120px' }}
                />
              </div>
            ))}
          </div>

          {/* Text brand list */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', alignItems: 'center',
            gap: isMobile ? '12px 24px' : '8px 32px',
            borderTop: '1px solid rgba(6,64,43,0.08)',
            paddingTop: '32px'
          }}>
            {['Reynolds Wrap', 'Wine.com', 'Universal Yums',
              'Volpi Foods', 'St Dalfour', "Bachan's", "Murray's Cheese",
              'Love Beets', 'Kopiko', 'Wilde Chips', 'Magic Mind'].map((brand) => (
              <span key={brand} style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '0.85rem', color: '#1C1C1C',
                letterSpacing: '0.04em', opacity: 0.45,
                transition: 'opacity 0.3s', cursor: 'default'
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.45'}
              >{brand}</span>
            ))}
          </div>
        </div>

{/* ── WORK PANELS ── */}
<div style={{
  borderTop: '1px solid rgba(6,64,43,0.08)',
  overflow: 'hidden'
}}>
  <div style={{
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
    gap: '0px',
  }}>
    {[
      { image: '/images/dalfourpic.png', label: 'St Dalfour' },
      { image: '/images/caudalie.png', label: 'Caudalie Paris' },
      { image: '/images/japanesedip.png', label: "Bachan's" },
    ].map((item, i) => (
      <div key={i} style={{
        position: 'relative',
        overflow: 'hidden',
        borderRight: i < 2 ? '1px solid rgba(6,64,43,0.08)' : 'none',
        cursor: 'default'
      }}>
        <div style={{ overflow: 'hidden' }}
          onMouseEnter={e => (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.04)'}
          onMouseLeave={e => (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)'}
        >
          <img
            src={item.image}
            alt={item.label}
            style={{
              width: '100%',
              height: isMobile ? '280px' : '520px',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          />
        </div>
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid rgba(6,64,43,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <p style={{
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#1C1C1C',
            fontWeight: 400,
            opacity: 0.6
          }}>{item.label}</p>
          <span style={{ fontSize: '0.68rem', color: '#06402B', opacity: 0.4 }}>↗</span>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* ── THE METHOD ── */}
      <div
        ref={el => { sectionsRef.current[1] = el }}
        style={{ padding: isMobile ? '72px 28px' : '130px 88px', background: '#FFFFFF', ...fade(1) }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px', flexWrap: 'wrap', gap: '28px' }}>
          <div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#06402B', marginBottom: '18px', opacity: 0.65 }}>The Method</p>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: isMobile ? '2rem' : 'clamp(2.1rem, 3.3vw, 3.3rem)',
              fontWeight: 400, lineHeight: 1.12, color: '#1C1C1C',
              letterSpacing: '-0.022em'
            }}>
              Three things I believe<br />
              <em style={{ fontStyle: 'italic', color: '#06402B' }}>about great social media.</em>
            </h2>
          </div>
          <a href="/services" className="link-underline">
            View All Services <span className="arr">→</span>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '14px' : '2px' }}>
          {[
            { num: '01', title: 'Storytelling', desc: 'Every brand has a story worth telling. I find it, shape it, and share it in a way that builds a community that actually buys. This is the foundation of everything I do.' },
            { num: '02', title: 'Person-Led Branding', desc: 'People connect with people. The most powerful brands in 2026 are built around real humans. I help you become the face your audience wants to follow and trust.' },
            { num: '03', title: 'High Quality Content', desc: 'Content that reflects your standard. Crafted to stop the scroll, start a conversation, and turn browsers into loyal customers who come back again and again.' },
          ].map((p, i) => (
            <div key={i} className="mcard"
              style={{
                background: '#F7F3EE',
                padding: isMobile ? '40px 32px' : '60px 52px',
                opacity: methodVisible ? 1 : 0,
                transform: methodVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms, background 0.3s ease`
              }}
            >
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '5rem', fontWeight: 700,
                color: '#06402B', opacity: 0.04,
                position: 'absolute', top: '16px', right: '28px',
                lineHeight: 1, userSelect: 'none'
              }}>{p.num}</span>
              <span style={{ fontSize: '0.65rem', color: '#06402B', opacity: 0.4, display: 'block', marginBottom: '24px', letterSpacing: '0.15em', fontFamily: 'Playfair Display, serif' }}>{p.num}</span>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.65rem', fontWeight: 500,
                marginBottom: '16px', lineHeight: 1.12,
                color: '#1C1C1C', letterSpacing: '-0.012em'
              }}>{p.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.95, color: '#7A7A72', fontWeight: 300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

{/* ── VIDEO ── */}
<div style={{
  background: '#F7F3EE',
  padding: isMobile ? '64px 28px' : '90px 80px',
  display: 'flex', flexDirection: 'column', alignItems: 'center'
}}>
  <p style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#06402B', opacity: 0.7, marginBottom: '48px' }}>See It In Action</p>
  <div style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
  <iframe
  src="https://www.instagram.com/reel/DL2aeqVog2B/embed"
  style={{ width: '100%', height: '700px', border: 'none', borderRadius: '12px', display: 'block' }}
/>
  </div>
</div>

      {/* ── CTA ── */}
      <div
        ref={el => { sectionsRef.current[3] = el }}
        style={{
          background: '#FFFFFF',
          position: 'relative',
          padding: isMobile ? '60px 28px' : '90px 88px',
          textAlign: 'center',
          ...fade(3)
        }}
      >
        <p style={{
          fontSize: '0.68rem', letterSpacing: '0.32em', textTransform: 'uppercase',
          color: '#06402B', opacity: 0.65, marginBottom: '28px'
        }}>Work With Me</p>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: isMobile ? '2.2rem' : 'clamp(2.4rem, 3.8vw, 4rem)',
          fontWeight: 400, color: '#1C1C1C', lineHeight: 1.14, marginBottom: '24px',
          letterSpacing: '-0.022em',
          maxWidth: '700px', margin: '0 auto 24px'
        }}>
          Ready to build something<br />
          <em style={{ fontStyle: 'italic', color: '#06402B' }}>people actually talk about?</em>
        </h2>

        <p style={{
          fontSize: '0.98rem', color: '#7A7A72', fontWeight: 300,
          lineHeight: 1.85, maxWidth: '420px', margin: '0 auto 48px'
        }}>
          I take on a small number of clients each season so I can give every brand the focus it deserves. Reach out and let's see if we are a good fit.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <a href="/connect"
            onPointerEnter={() => setCtaHover(true)}
            onPointerLeave={() => setCtaHover(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '18px 54px',
              background: ctaHover ? 'transparent' : '#06402B',
              color: ctaHover ? '#06402B' : '#FFFFFF',
              textDecoration: 'none', fontSize: '0.72rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 400, border: '1px solid #06402B', borderRadius: '12px',
              transform: ctaHover ? 'scale(1.03)' : 'scale(1)',
              transition: 'all 220ms cubic-bezier(0.22, 1, 0.36, 1)',
              outline: 'none',
              boxShadow: ctaHover ? '0 14px 40px rgba(0,0,0,0.08)' : 'none'
            }}>
            Get In Touch
            <span style={{
              display: 'inline-block',
              transform: ctaHover ? 'translateX(6px)' : 'translateX(0)',
              transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)'
            }}>→</span>
          </a>
          <a href="/services" style={{
            fontSize: '0.72rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'rgba(6,64,43,0.5)',
            textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s'
          }}
            onPointerEnter={e => (e.currentTarget.style.color = '#06402B')}
            onPointerLeave={e => (e.currentTarget.style.color = 'rgba(6,64,43,0.5)')}
          >View Services →</a>
        </div>
      </div>

    </div>
  )
}