import { useEffect } from 'react'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
            .forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const VALUES = [
  { icon: '🌍', title: 'Sustainability First', text: 'Every decision we make — from sourcing to shipping — is guided by reducing environmental impact.' },
  { icon: '💡', title: 'Constant Innovation', text: 'We continuously research new materials and processes to improve quality while lowering costs.' },
  { icon: '💰', title: 'Radical Affordability', text: 'We believe affordability is not an obstacle to sustainability — it\'s the entire point.' },
  { icon: '🤝', title: 'Business Accountability', text: 'We hold ourselves to the highest standards of transparency, certification, and ethical sourcing.' },
  { icon: '❤️', title: 'Customer Success', text: 'Our customers\' growth is our growth. We\'re not just a supplier — we\'re a partner in your journey.' },
]

const TEAM = [
  { avatar: '👩‍💻', name: 'Shahdah', role: 'Website Development', desc: 'Built this entire interactive website with React and animation systems.', color: '#e8f5e9' },
  { avatar: '🎨', name: 'Layla', role: 'Visual Design & Branding', desc: 'Created the EcoPack visual identity, color palette, and all design assets.', color: '#fce4ec' },
  { avatar: '📊', name: 'Nour', role: 'Business Research & Model', desc: 'Researched market data, built the business model, and financial projections.', color: '#e3f2fd' },
  { avatar: '✍️', name: 'Hana', role: 'Content & Copywriting', desc: 'Crafted the brand story, product descriptions, and all written content.', color: '#fff8e1' },
]

const TIMELINE = [
  { year: 'Q1', label: 'Ideation', icon: '💡', text: 'Identified the market gap in affordable eco packaging for SMBs. Conducted user surveys with 50+ small business owners.' },
  { year: 'Q2', label: 'Research', icon: '🔬', text: 'Analyzed global trends, supplier landscape, and competitive pricing. Built initial product specifications and canvas.' },
  { year: 'Q3', label: 'Design', icon: '🎨', text: 'Developed brand identity, product design system, and full business model. Created packaging prototypes.' },
  { year: 'Q4', label: 'Launch Ready', icon: '🚀', text: 'Assembled full business plan, website, and go-to-market strategy. Ready for initial B2B sales outreach.' },
]

export default function AboutUs() {
  useReveal()

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero page-hero-tall">
        <div className="container">
          <span className="section-label light">Our Story</span>
          <h1>About EcoPack</h1>
          <p>We're a student-led startup on a mission to prove that small businesses don't have to choose between their budget and the planet.</p>
        </div>
      </div>

      {/* Founding Story */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:56, alignItems:'center' }}>
            <div className="reveal-left">
              <span className="section-label" style={{ marginBottom:12, display:'block' }}>The Origin</span>
              <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:800, color:'var(--green-dark)', lineHeight:1.2, marginBottom:20 }}>
                Born from a Simple Question:<br />
                <em style={{ color:'var(--green-medium)', fontStyle:'normal' }}>"Why is eco packaging a luxury?"</em>
              </h2>
              <p style={{ fontSize:'1rem', color:'var(--text-secondary)', lineHeight:1.8, marginBottom:16 }}>
                EcoPack began when our team noticed that sustainable packaging was consistently listed as a top priority for small business owners — yet adoption remained under 12%. The reason? Prohibitive costs and sky-high minimum order quantities.
              </p>
              <p style={{ fontSize:'1rem', color:'var(--text-secondary)', lineHeight:1.8, marginBottom:16 }}>
                We asked: what if we could build a supply chain specifically designed for micro and small businesses? What if we sourced smarter, scaled through community, and passed savings directly to the businesses who need them most?
              </p>
              <p style={{ fontSize:'1rem', color:'var(--text-secondary)', lineHeight:1.8 }}>
                EcoPack is the answer. A packaging company that exists to democratize sustainability — one small business at a time.
              </p>
            </div>
            <div className="reveal-right">
              <div style={{ background:'var(--green-mint)', borderRadius:24, padding:'40px 36px', textAlign:'center' }}>
                <div style={{ fontSize:'5rem', marginBottom:16 }}>🌿</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
                  {[
                    { val:'2024', label:'Founded' }, { val:'4', label:'Team Members' },
                    { val:'18+', label:'Products Planned' }, { val:'3', label:'Target Markets' },
                  ].map((s, i) => (
                    <div key={i} style={{ background:'white', borderRadius:12, padding:'16px 12px', textAlign:'center' }}>
                      <div style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1.8rem', fontWeight:800, color:'var(--green-dark)' }}>{s.val}</div>
                      <div style={{ fontSize:'0.85rem', color:'var(--text-secondary)', fontWeight:500 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Direction</span>
            <h2>Vision & Mission</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:28 }}>
            <div className="vm-card vision reveal-left">
              <div className="vm-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>A world where every business, regardless of size, makes sustainable choices as the default — not the exception.</p>
              <div className="vm-quote">"Packaging the Future, Sustainably"</div>
            </div>
            <div className="vm-card mission reveal-right">
              <div className="vm-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To be the most accessible, affordable, and reliable source of eco-friendly packaging for small and medium businesses globally — reducing plastic waste one shipment at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>Five principles that guide every decision we make at EcoPack.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:20 }}>
            {VALUES.map((v, i) => (
              <div key={i} className={`value-card reveal delay-${i + 1}`}>
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-mint">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">The People Behind EcoPack</span>
            <h2>Meet the Team</h2>
            <p>Four passionate individuals working together to build a sustainable future for small businesses.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
            {TEAM.map((member, i) => (
              <div key={i} className={`team-card reveal delay-${i + 1}`}>
                <div className="team-avatar" style={{ background: member.color }}>{member.avatar}</div>
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Journey</span>
            <h2>How EcoPack Came to Life</h2>
            <p>From a classroom idea to a complete, market-ready business plan.</p>
          </div>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal delay-${i + 1}`}>
                <div className="timeline-dot">{item.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-label">{item.label}</h4>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
