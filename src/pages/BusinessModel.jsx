import { useEffect, useRef, useState } from 'react'

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

function AnimBar({ label, pct, color }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { setActive(true); obs.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="bm-bar-row">
      <span className="bm-bar-label">{label}</span>
      <div className="bm-bar-track">
        <div className="bm-bar-fill" style={{ width: active ? `${pct}%` : '0%', background: color }} />
      </div>
      <span className="bm-bar-pct">{pct}%</span>
    </div>
  )
}

const CANVAS = [
  {
    key: 'partners', title: 'Key Partners', icon: '🤝',
    items: ['Eco Material Suppliers', 'Local Print Partners', 'Logistics & Couriers', 'NGO Collaborators', 'B2B Business Network'],
    colorClass: 'canvas-blue',
  },
  {
    key: 'activities', title: 'Key Activities', icon: '⚙️',
    items: ['Sourcing eco materials', 'Product design & R&D', 'Custom branding orders', 'B2B sales & outreach', 'Quality assurance'],
    colorClass: 'canvas-green',
  },
  {
    key: 'vp', title: 'Value Proposition', icon: '💡',
    items: ['Affordable eco alternatives', 'Low minimum order quantity', 'Custom branding on demand', 'Eco-certified products', 'Fast, reliable delivery', 'End-to-end B2B support'],
    colorClass: 'canvas-primary', isVP: true,
  },
  {
    key: 'customers', title: 'Customer Segments', icon: '👥',
    items: ['Small e-commerce brands', 'Home bakers & food sellers', 'Eco-conscious startups', 'Gift & craft businesses', 'Corporate bulk buyers'],
    colorClass: 'canvas-teal',
  },
  {
    key: 'revenue', title: 'Revenue Streams', icon: '💰',
    items: ['Bulk product sales', 'Custom branding charges', 'Subscription packages', 'Priority delivery fees', 'Consultation services'],
    colorClass: 'canvas-gold',
  },
  {
    key: 'resources', title: 'Key Resources', icon: '📦',
    items: ['Supplier relationships', 'Design & tech team', 'Brand identity', 'Logistics network', 'Customer data & CRM'],
    colorClass: 'canvas-purple',
  },
  {
    key: 'channels', title: 'Channels', icon: '📡',
    items: ['Company website', 'WhatsApp & direct sales', 'Social media marketing', 'B2B referral network', 'Trade and eco events'],
    colorClass: 'canvas-orange',
  },
  {
    key: 'relations', title: 'Customer Relationships', icon: '❤️',
    items: ['Dedicated account manager', 'After-sales support', 'Loyalty discounts', 'B2B newsletter', 'Feedback-driven updates'],
    colorClass: 'canvas-pink',
  },
  {
    key: 'costs', title: 'Cost Structure', icon: '📊',
    items: ['Raw material procurement', 'Custom print & production', 'Logistics & warehousing', 'Marketing & branding', 'Platform & tech costs'],
    colorClass: 'canvas-slate',
  },
]

const SWOT = [
  {
    q: 'S', label: 'Strengths', cls: 'swot-s',
    items: ['Only affordable eco packaging for SMBs', 'Low MOQ — accessible for micro-businesses', 'Custom branding capability', 'Certified, verified eco credentials'],
  },
  {
    q: 'W', label: 'Weaknesses', cls: 'swot-w',
    items: ['Early-stage brand awareness', 'Limited initial product range', 'Dependent on supplier timelines', 'Higher unit cost vs. plastic (early stages)'],
  },
  {
    q: 'O', label: 'Opportunities', cls: 'swot-o',
    items: ['$653B global eco packaging market', 'Growing consumer eco-consciousness', 'Govt. plastic bans creating demand', 'Social commerce boom for SMBs'],
  },
  {
    q: 'T', label: 'Threats', cls: 'swot-t',
    items: ['Large players entering market', 'Supply chain volatility', 'Greenwashing eroding trust', 'Price sensitivity in target market'],
  },
]

export default function BusinessModel() {
  useReveal()

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label light">Strategy & Finance</span>
          <h1>Our Business Model</h1>
          <p>How EcoPack creates, delivers, and captures value — while keeping sustainability at the core of every decision.</p>
        </div>
      </div>

      {/* Revenue Streams */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Revenue Model</span>
            <h2>How We Generate Revenue</h2>
            <p>EcoPack uses a diversified revenue model blending product sales with premium services.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28, marginBottom:48 }}>
            {[
              { icon:'📦', title:'Bulk Product Sales', pct:55, color:'#2d6a4f', text:'Primary revenue — B2B bulk orders for standard eco packaging lines at competitive wholesale rates.' },
              { icon:'🎨', title:'Custom Branding Services', pct:30, color:'#52b788', text:'Premium-priced custom logo printing, branded inserts, and bespoke packaging design packages.' },
              { icon:'🔁', title:'Subscription Packages', pct:15, color:'#95d5b2', text:'Monthly auto-order plans for regular businesses — discounted rate, guaranteed stock, priority service.' },
            ].map((r, i) => (
              <div key={i} className={`bm-revenue-card reveal delay-${i + 1}`}>
                <div className="bm-revenue-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <div className="bm-rev-bar-track">
                  <div className="bm-rev-bar-fill" style={{ '--target': `${r.pct}%`, background: r.color }} />
                </div>
                <span className="bm-rev-pct">{r.pct}% of Revenue</span>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ background:'var(--green-mint)', borderRadius:16, padding:'36px 40px' }}>
            <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1.15rem', fontWeight:600, color:'var(--green-dark)', marginBottom:20 }}>Revenue Breakdown</h3>
            <AnimBar label="Bulk Product Sales" pct={55} color="#2d6a4f" />
            <AnimBar label="Custom Branding Services" pct={30} color="#52b788" />
            <AnimBar label="Subscription Packages" pct={15} color="#95d5b2" />
          </div>
        </div>
      </section>

      {/* Business Model Canvas */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Strategic Framework</span>
            <h2>Business Model Canvas</h2>
            <p>A visual blueprint of how EcoPack operates, creates value, and sustains growth.</p>
          </div>
          <div className="bm-canvas-grid reveal">
            {CANVAS.map(cell => (
              <div key={cell.key} className={`canvas-cell ${cell.colorClass}${cell.isVP ? ' canvas-vp' : ''}`}>
                <div className="canvas-cell-header">
                  <span className="canvas-icon">{cell.icon}</span>
                  <h4>{cell.title}</h4>
                </div>
                <ul>
                  {cell.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWOT Analysis */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Critical Analysis</span>
            <h2>SWOT Analysis</h2>
            <p>An honest, data-informed look at EcoPack's strategic position in the market.</p>
          </div>
          <div className="swot-grid">
            {SWOT.map((s, i) => (
              <div key={s.q} className={`swot-cell ${s.cls} reveal delay-${i + 1}`}>
                <div className="swot-header">
                  <div className="swot-letter">{s.q}</div>
                  <h3>{s.label}</h3>
                </div>
                <ul>
                  {s.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Future */}
      <section className="section section-mint">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Looking Ahead</span>
            <h2>Challenges & Our Road Ahead</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
            <div className="reveal-left">
              <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1.2rem', fontWeight:700, color:'var(--green-dark)', marginBottom:16 }}>
                🚧 Key Challenges
              </h3>
              {[
                ['Price sensitivity', 'Our target customers are micro-businesses with tight budgets. We overcome this via volume discounts and low MOQ.'],
                ['Supplier reliability', 'Eco supply chains can be fragile. We maintain 3 alternate suppliers per product line to ensure continuity.'],
                ['Market education', 'Many SMBs don\'t know affordable eco options exist. We address this with content marketing and comparison tools.'],
                ['Greenwashing scrutiny', 'Customers are skeptical of "eco" claims. We combat this with third-party certifications prominently displayed.'],
              ].map(([title, text], i) => (
                <div key={i} style={{ display:'flex', gap:14, marginBottom:16 }}>
                  <div style={{ width:28, height:28, borderRadius:'50%', background:'var(--green-pale)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2, fontSize:'0.8rem', fontWeight:700, color:'var(--green-dark)' }}>{i+1}</div>
                  <div><strong style={{ color:'var(--green-dark)', display:'block', marginBottom:4 }}>{title}</strong><span style={{ fontSize:'0.9rem', color:'var(--text-secondary)' }}>{text}</span></div>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1.2rem', fontWeight:700, color:'var(--green-dark)', marginBottom:16 }}>
                🚀 Future Expansion
              </h3>
              {[
                { icon:'🌏', title:'Geographic Growth', text:'Expand from local market to UAE, Saudi Arabia, and South/Southeast Asia within 2 years.' },
                { icon:'📱', title:'Digital Platform', text:'Launch a self-serve B2B ordering platform with instant quotes, design tools, and tracking.' },
                { icon:'🔬', title:'R&D Investment', text:'Develop proprietary material blends that achieve compostability at lower cost points.' },
                { icon:'♻️', title:'Take-Back Program', text:'A closed-loop system where we collect used packaging and recycle or compost it directly.' },
              ].map((item, i) => (
                <div key={i} style={{ display:'flex', gap:14, marginBottom:16 }}>
                  <div style={{ fontSize:'1.8rem', flexShrink:0, marginTop:2 }}>{item.icon}</div>
                  <div><strong style={{ color:'var(--green-dark)', display:'block', marginBottom:4 }}>{item.title}</strong><span style={{ fontSize:'0.9rem', color:'var(--text-secondary)' }}>{item.text}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
