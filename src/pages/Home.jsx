import { useEffect, useRef, useState } from 'react'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
            .forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function AnimCounter({ target, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const step = target / (duration / 16)
        let current = 0
        const timer = setInterval(() => {
          current = Math.min(current + step, target)
          setVal(Math.floor(current))
          if (current >= target) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref} className="counter-num">{val.toLocaleString()}<span className="unit">{suffix}</span></span>
}

export default function Home({ navigate }) {
  useReveal()

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-leaves">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="hero-leaf">🌿</span>
          ))}
          <div className="hero-ring" />
          <div className="hero-ring" />
        </div>
        <div className="container">
          <div className="hero-two-col">
            <div className="hero-content">
              <div className="hero-badge"><span className="hero-badge-dot" />🌱 Sustainable Packaging Startup</div>
              <h1>
                <span className="accent">EcoPack</span> –{' '}
                Packaging the Future,{' '}
                <span className="accent">Sustainably</span>
              </h1>
              <p className="hero-tagline">"Smart Packaging for a Greener Tomorrow"</p>
              <p>
                EcoPack helps small businesses switch from harmful plastic packaging
                to eco-friendly alternatives that are affordable, customizable, and
                environmentally responsible.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => navigate('solutions')}>
                  <span>🌿</span> Explore Solutions
                </button>
                <button className="btn btn-outline-white" onClick={() => navigate('products')}>
                  <span>📦</span> Shop Sustainable
                </button>
                <button className="btn btn-outline-white" onClick={() => navigate('contact')}>
                  Partner With Us
                </button>
              </div>
              <div className="hero-stats">
                {[
                  { num: '10000', suf: '+', label: 'Plastic packages replaced' },
                  { num: '200',   suf: '+', label: 'Small businesses served' },
                  { num: '100',   suf: '%', label: 'Eco-conscious materials' },
                ].map((s, i) => (
                  <div className="hero-stat" key={i}>
                    <AnimCounter target={parseInt(s.num)} suffix={s.suf} />
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-wrap">
                <div className="hero-box">
                  <div className="hero-box-icon">♻️</div>
                  <h3>EcoPack</h3>
                  <p>Biodegradable · Compostable · Recyclable</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>
                    {['🌱 Bio', '♻️ Recycle', '🍃 Compost'].map((tag, i) => (
                      <span key={i} style={{ background: 'rgba(255,255,255,0.15)', color: '#95d5b2', fontSize: '0.72rem', padding: '4px 10px', borderRadius: 999, fontWeight: 600 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hero-orbit hero-orbit-1">🌿</div>
                <div className="hero-orbit hero-orbit-2">📦</div>
                <div className="hero-orbit hero-orbit-3">🌍</div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      <div className="glow-divider" />}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Basics</span>
            <h2>Everything You Need to Know</h2>
            <p>EcoPack answers the four most important questions a visitor has when they land on our page.</p>
          </div>
          <div className="wwww-grid">
            {[
              { q: 'Who?',  icon: '🏢', title: 'A Sustainable Startup',   text: 'EcoPack is a sustainable packaging startup built for small businesses who want to grow responsibly without harming the environment.' },
              { q: 'What?', icon: '📦', title: 'Eco-Friendly Packaging',   text: 'We provide biodegradable, compostable, and recyclable packaging — from mailers and boxes to food containers and branded wraps.' },
              { q: 'Why?',  icon: '🌍', title: 'Reduce Plastic Waste',      text: 'Plastic pollution is a global crisis. EcoPack makes it easy for small businesses to reduce their environmental footprint affordably.' },
              { q: 'Where?',icon: '📍', title: 'Online B2B Platform',       text: 'We serve local food businesses, e-commerce brands, and eco-conscious startups through our online B2B platform and direct sales.' },
            ].map((item, i) => (
              <div key={i} className={`wwww-card reveal delay-${i + 1}`}>
                <div className="wwww-icon">{item.icon}</div>
                <div className="wwww-label">{item.q}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT COUNTERS ── */}
      <section className="section section-green">
        <div className="container">
          <div className="section-header light reveal">
            <span className="section-label light">Our Impact</span>
            <h2>Numbers That Matter</h2>
            <p>Every order with EcoPack is a step toward a cleaner, greener future.</p>
          </div>
          <div className="counter-grid">
            {[
              { icon: '♻️', target: 10000, suffix: '+', label: 'Plastic Packages Replaced' },
              { icon: '🏪', target: 200,   suffix: '+', label: 'Small Businesses Supported' },
              { icon: '🌱', target: 100,   suffix: '%', label: 'Eco-Conscious Materials Used' },
            ].map((c, i) => (
              <div key={i} className={`counter-card reveal delay-${i + 1}`}>
                <span className="counter-icon">{c.icon}</span>
                <AnimCounter target={c.target} suffix={c.suffix} />
                <div className="counter-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK PRODUCT PREVIEW ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2>Packaging for Every Need</h2>
            <p>From food containers to branded e-commerce mailers — EcoPack has you covered.</p>
          </div>
          <div className="preview-grid">
            {[
              { icon: '🛍️', title: 'Compostable Mailers',    text: 'Ship fashion, accessories & gifts in plant-based mailers that break down naturally.' },
              { icon: '🍱', title: 'Food Containers',         text: 'Biodegradable takeaway containers for cafes, home bakers, and cloud kitchens.' },
              { icon: '📮', title: 'Recyclable Boxes',        text: 'Sturdy, customizable kraft boxes perfect for e-commerce and gifting.' },
              { icon: '🎨', title: 'Custom Branding',         text: 'Add your logo, colors, and message to make your packaging truly yours.' },
              { icon: '🌿', title: 'Paper & Kraft Wraps',     text: 'Elegant kraft paper wraps and tissue to make unboxing a special experience.' },
              { icon: '🍴', title: 'Plant-Based Cutlery',     text: 'Wooden and plant-starch cutlery to replace single-use plastic utensils.' },
            ].map((p, i) => (
              <div key={i} className={`preview-card reveal delay-${(i % 3) + 1}`} onClick={() => navigate('products')}>
                <span className="preview-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn btn-primary" onClick={() => navigate('products')}>
              View All Products →
            </button>
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* ── IMPACT STATEMENT ── */}}
      <div className="impact-bar">
        <div className="container">
          <p className="reveal">
            Every order with EcoPack{' '}
            <span>reduces single-use plastic waste</span> and supports{' '}
            <span>responsible business practices</span> for a greener tomorrow.
          </p>
        </div>
      </div>

      <div className="glow-divider" />

      {/* ── SUSTAINABILITY PROMISE ── */}
      <section className="section section-mint">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Promise</span>
            <h2>The EcoPack Commitment</h2>
            <p>We don't just sell packaging. We partner with businesses to build a more sustainable future.</p>
          </div>
          <div className="promise-grid">
            {[
              { icon: '🌿', title: '100% Eco Materials',  text: 'All products made from certified sustainable sources.' },
              { icon: '💰', title: 'Affordable Pricing',  text: 'Competitive bulk rates accessible to small businesses.' },
              { icon: '🎨', title: 'Custom Branding',      text: 'Your brand, your colors, your story on every package.' },
              { icon: '🚚', title: 'Reliable Supply',      text: 'Consistent bulk supply delivered on time, every time.' },
            ].map((p, i) => (
              <div key={i} className={`promise-item reveal delay-${i + 1}`}>
                <div className="promise-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Trusted By Businesses</span>
            <h2>What Our Customers Say</h2>
          </div>
          <div className="testimonial-grid">
            {[
              { text: 'EcoPack completely changed how we package our baked goods. Our customers love the eco-friendly boxes and our brand image has never looked better!', name: 'Ayesha Malik', role: 'Home Baker · Lahore', avatar: 'AM', color: '#2d6a4f' },
              { text: 'I was paying more for plastic packaging anyway. Switching to EcoPack compostable mailers saved me money AND my customers are happier. Highly recommend.', name: 'Raza Ahmed',  role: 'Instagram Clothing Seller · Karachi', avatar: 'RA', color: '#40916c' },
              { text: 'As an organic skincare brand, our packaging had to match our values. EcoPack delivered beautiful, branded eco-packaging at a price we could afford as a startup.', name: 'Sara Khan',    role: 'Organic Skincare Brand · Islamabad', avatar: 'SK', color: '#52b788' },
            ].map((t, i) => (
              <div key={i} className={`testimonial-card reveal delay-${i + 1}`}>
                <div className="stars">★★★★★</div>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: t.color }}>{t.avatar}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-green" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="section-label light">Ready to Switch?</span>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: '#fff', margin: '16px 0 12px', lineHeight: 1.3 }}>
              Start Packaging Responsibly Today
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: 550, margin: '0 auto 36px', lineHeight: 1.7 }}>
              Join 200+ small businesses who have already made the switch to eco-friendly packaging with EcoPack.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-white" onClick={() => navigate('contact')}>Get a Free Quote</button>
              <button className="btn btn-outline-white" onClick={() => navigate('products')}>Browse Products</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
