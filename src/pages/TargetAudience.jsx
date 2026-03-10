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

const SEGMENTS = [
  {
    icon: '🛍️', title: 'E-Commerce SMBs',
    tagline: 'Instagram & online store sellers needing affordable branded packaging.',
    stats: [{ label: 'Market size', val: '26M+' }, { label: 'In MENA alone', val: '4.2M' }, { label: 'Want eco options', val: '68%' }],
    needs: ['Low MOQ to test designs', 'Custom branding without bulk minimums', 'Fast, reliable delivery to meet order surges'],
    color: '#e8f5e9',
    border: '#52b788',
  },
  {
    icon: '🍰', title: 'Home Bakers & Food Sellers',
    tagline: 'Home-based food entrepreneurs selling cakes, tiffins, and packaged meals.',
    stats: [{ label: 'Home food businesses', val: '8.5M+' }, { label: 'Growing at', val: '22%/yr' }, { label: 'Need food-safe eco', val: '79%' }],
    needs: ['Food-safe, FDA-compliant eco packaging', 'Affordable bakery boxes & carry bags', 'No minimum order to reduce waste'],
    color: '#fff8e1',
    border: '#f59e0b',
  },
  {
    icon: '🌱', title: 'Eco-Conscious Startups',
    tagline: 'Mission-driven brands where sustainability is a core brand value.',
    stats: [{ label: 'Eco startups globally', val: '2.1M' }, { label: 'Premium per eco pkg', val: '+35%' }, { label: 'Brand alignment', val: '100%' }],
    needs: ['Certified compostable materials', 'Full custom branding & design', 'Transparent sourcing documentation'],
    color: '#e3f2fd',
    border: '#3b82f6',
  },
]

const PAINS = [
  { icon: '💸', title: 'Price Barrier', text: '"Eco packaging is too expensive for small businesses." EcoPack makes it as affordable as plastic alternatives through smart sourcing and efficient operations.' },
  { icon: '🔢', title: 'High Minimums', text: '"Suppliers want us to order 500+ units minimum." Our low MOQ of 50 units means even micro-businesses can access eco packaging without bulk commitment.' },
  { icon: '⏱️', title: 'Slow Delivery', text: '"We need packaging fast — can\'t wait 3+ weeks." EcoPack offers standard 5-7 day and express 2-3 day delivery options for time-sensitive businesses.' },
  { icon: '🎨', title: 'No Customization', text: '"Nobody lets us add our logo without huge orders." Our custom branding starts from just 100 units — make your packaging uniquely yours without bulk spending.' },
]

const PERSONAS = [
  {
    avatar: '👩‍🍳', name: 'Ayesha', role: '27 · Home Baker · Instagram Shop',
    tags: ['Cakes & Cupcakes', 'Weekend Orders', '50–100/month'],
    quote: '"My customers care about eco-friendly packaging. I just need something affordable with my logo."',
    details: [
      'Orders 50–80 bakery boxes/month',
      'Sells via Instagram & WhatsApp',
      'Tried local supplier — minimum 500 units',
      'Budget: PKR 8,000–12,000/month on packaging',
      '★ EcoPack solution: Kraft bakery boxes, MOQ 50, custom logo',
    ],
    accentColor: '#fce4ec',
    borderColor: '#e91e63',
  },
  {
    avatar: '👗', name: 'Zara', role: '24 · Clothing Seller · TikTok + Daraz',
    tags: ['Apparel', 'Student-run', '80–150 orders/month'],
    quote: '"I ship 100+ packages a week. I want eco mailer bags with my brand on them but everything is too expensive."',
    details: [
      'Ships ~120 orders/week via courier',
      'Current packaging: generic plastic bags',
      'Customer complaints about plastic excess',
      'Budget: increasing as business grows',
      '★ EcoPack solution: Branded compostable mailer bags',
    ],
    accentColor: '#e8f5e9',
    borderColor: '#4caf50',
  },
  {
    avatar: '🌿', name: 'Omar', role: '31 · Organic Products Brand · Website + Retail',
    tags: ['Organic & Natural', 'Sustainability-first', 'Scale-up phase'],
    quote: '"Our entire brand is about sustainability. Our packaging needs to tell that story."',
    details: [
      'Sells herbal teas, skincare, supplements',
      'Brand values: 100% natural & ethical',
      'Current packaging: expensive imported eco stock',
      'Wants local, certified, brandable supplier',
      '★ EcoPack solution: Full custom branding, certified materials',
    ],
    accentColor: '#e3f2fd',
    borderColor: '#2196f3',
  },
]

export default function TargetAudience() {
  useReveal()

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label light">Who We Serve</span>
          <h1>Our Target Audience</h1>
          <p>EcoPack was built from the ground up for small and medium businesses who believe sustainability and affordability can coexist.</p>
        </div>
      </div>

      {/* Audience Segments */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Market Segments</span>
            <h2>Three Core Customer Groups</h2>
            <p>We've identified three high-potential segments that are underserved by the current eco packaging market.</p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            {SEGMENTS.map((seg, i) => (
              <div
                key={i}
                className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}
                style={{
                  display:'grid', gridTemplateColumns:'1fr 2fr', gap:0,
                  borderRadius:20, overflow:'hidden',
                  boxShadow:'var(--shadow-md)', border:`2px solid ${seg.border}`,
                }}
              >
                <div style={{ background: seg.color, padding:'36px 32px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', gap:12 }}>
                  <div style={{ fontSize:'4rem' }}>{seg.icon}</div>
                  <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1.25rem', fontWeight:700, color:'var(--green-dark)' }}>{seg.title}</h3>
                  <p style={{ fontSize:'0.95rem', color:'var(--text-secondary)', fontStyle:'italic', lineHeight:1.5 }}>{seg.tagline}</p>
                  <div className="ta-stat-row">
                    {seg.stats.map((s, j) => (
                      <div key={j} className="ta-stat-item">
                        <strong>{s.val}</strong><span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background:'var(--white)', padding:'36px 32px' }}>
                  <h4 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1rem', fontWeight:700, color:'var(--green-dark)', marginBottom:16, textTransform:'uppercase', letterSpacing:'0.05em' }}>What they need from EcoPack</h4>
                  <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                    {seg.needs.map((need, j) => (
                      <div key={j} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                        <div style={{ width:22, height:22, borderRadius:'50%', background:`${seg.border}22`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                          <span style={{ color: seg.border, fontSize:'0.75rem', fontWeight:700 }}>✓</span>
                        </div>
                        <p style={{ fontSize:'0.975rem', color:'var(--text-primary)', lineHeight:1.6 }}>{need}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Customer Insights</span>
            <h2>The Pain Points We Solve</h2>
            <p>These are the real frustrations our customers face — and exactly how EcoPack resolves each one.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:24 }}>
            {PAINS.map((pain, i) => (
              <div key={i} className={`pain-card reveal delay-${i + 1}`}>
                <div className="pain-icon">{pain.icon}</div>
                <div>
                  <h3 className="pain-title">{pain.title}</h3>
                  <p className="pain-text">{pain.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Personas */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Buyer Personas</span>
            <h2>Meet Our Ideal Customers</h2>
            <p>Three detailed personas representing the real people EcoPack was built to serve.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
            {PERSONAS.map((p, i) => (
              <div
                key={i}
                className={`reveal delay-${i + 1}`}
                style={{
                  borderRadius:20, overflow:'hidden',
                  boxShadow:'var(--shadow-md)',
                  border:`2px solid ${p.borderColor}`,
                }}
              >
                <div style={{ background: p.accentColor, padding:'28px 24px 20px', textAlign:'center' }}>
                  <div style={{ fontSize:'4rem', marginBottom:10 }}>{p.avatar}</div>
                  <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1.2rem', fontWeight:700, color:'var(--green-dark)' }}>{p.name}</h3>
                  <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', marginBottom:12 }}>{p.role}</p>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap', justifyContent:'center' }}>
                    {p.tags.map((tag, j) => (
                      <span key={j} style={{ background:'white', color:'var(--green-dark)', borderRadius:20, padding:'2px 12px', fontSize:'0.78rem', fontWeight:600 }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ background:'white', padding:'20px 24px' }}>
                  <blockquote style={{ fontStyle:'italic', color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.6, borderLeft:`3px solid ${p.borderColor}`, paddingLeft:12, margin:'0 0 16px' }}>
                    {p.quote}
                  </blockquote>
                  <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:8 }}>
                    {p.details.map((d, j) => (
                      <li key={j} style={{ fontSize:'0.875rem', color: d.startsWith('★') ? p.borderColor : 'var(--text-primary)', fontWeight: d.startsWith('★') ? 700 : 400, lineHeight:1.5 }}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-green" style={{ padding:'72px 0' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <div className="reveal">
            <span className="section-label light">Your Business, Our Priority</span>
            <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'clamp(1.8rem,4vw,2.5rem)', fontWeight:700, color:'#fff', margin:'14px 0 12px' }}>
              Ready to Make the Switch?
            </h2>
            <p style={{ color:'rgba(255,255,255,0.8)', maxWidth:520, margin:'0 auto 36px', fontSize:'1.05rem', lineHeight:1.7 }}>
              Whether you're a home baker, a growing e-commerce brand, or a mission-driven startup — EcoPack has the right packaging for you.
            </p>
            <button className="btn btn-white">Get Your Free Sample Pack</button>
          </div>
        </div>
      </section>
    </>
  )
}
