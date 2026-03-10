import { useEffect, useRef, useState } from 'react'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
            .forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const STEPS = [
  { icon: '🔍', title: 'Select Your Need',      desc: 'Business identifies packaging requirement — food, e-commerce, or branding.' },
  { icon: '💡', title: 'EcoPack Recommends',    desc: 'Our team suggests the best eco-friendly option matching your need and budget.' },
  { icon: '📦', title: 'Place Bulk Order',       desc: 'Order in affordable bulk quantities with flexible minimum order sizes.' },
  { icon: '🎨', title: 'Custom Branding',        desc: 'Add your logo, colors, and brand story to every package (optional).' },
  { icon: '🚚', title: 'Delivery to Your Door',  desc: 'Sustainable packaging arrives ready to use for your business operations.' },
]

export default function OurSolutions({ navigate }) {
  useReveal()
  const [activeStep, setActiveStep] = useState(-1)
  const lineRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        lineRef.current?.querySelector('.steps-line-fill')?.classList.add('active')
        STEPS.forEach((_, i) => {
          setTimeout(() => setActiveStep(i), i * 400 + 300)
        })
      }
    }, { threshold: 0.3 })
    if (lineRef.current) obs.observe(lineRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label light">Our Approach</span>
          <h1>How EcoPack Solves the Problem</h1>
          <p>We've designed a simple, affordable, and fully customizable system that makes sustainable packaging accessible for every small business.</p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="solutions-intro">
            <div className="solutions-intro-text reveal-left">
              <span className="section-label">What We Do</span>
              <h2>Eco-Friendly Packaging, Made Simple</h2>
              <p>EcoPack removes every barrier that stops small businesses from switching to sustainable packaging. We offer low minimum order quantities, competitive bulk pricing, and full customization — all in one place.</p>
              <p>Our product range is designed to cover every packaging scenario a small business might face, from food takeaway to e-commerce shipping to branded gifting.</p>
              <div style={{ marginTop: 24 }}>
                <button className="btn btn-primary" onClick={() => navigate('products')}>Browse Products</button>
              </div>
            </div>
            <div className="solutions-boxes reveal-right">
              {[
                { icon: '🌱', text: 'Biodegradable Food Containers' },
                { icon: '📮', text: 'Compostable Courier Bags' },
                { icon: '📦', text: 'Recyclable Kraft Boxes' },
                { icon: '🎁', text: 'Paper Wraps & Tissue' },
                { icon: '🍴', text: 'Plant-Based Cutlery' },
                { icon: '🎨', text: 'Custom Branded Packaging' },
              ].map((item, i) => (
                <div key={i} className="solution-mini-box">
                  <span className="icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section section-alt">
        <div className="container">
          <p className="process-title reveal">🔄 How It Works — Step by Step</p>
          <div className="steps-container" ref={lineRef}>
            <div className="steps-line">
              <div className="steps-line-fill" />
            </div>
            <div className="steps-row">
              {STEPS.map((step, i) => (
                <div key={i} className={`step-item ${activeStep >= i ? 'active' : ''}`}>
                  <div className="step-circle">{step.icon}</div>
                  <h4>Step {i + 1}: {step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USP Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2>Our Unique Selling Points</h2>
            <p>EcoPack isn't just an eco-packaging supplier — it's a partner in your business's sustainable journey.</p>
          </div>
          <div className="usp-grid">
            {[
              { icon: '💰', title: 'Affordable for Small Businesses',   text: "We price our products with small business budgets in mind. Sustainable doesn't have to mean expensive." },
              { icon: '📦', title: 'Low Minimum Order Quantity',         text: 'Order as few as 50 units. No need to buy 5,000 units to access eco-friendly packaging.' },
              { icon: '🎨', title: 'Full Custom Branding',               text: 'Your logo, brand colors, and messaging printed on every single package. Stand out beautifully.' },
              { icon: '🌿', title: '100% Certified Eco Materials',       text: 'All materials are certified biodegradable, compostable, or recyclable — no greenwashing.' },
              { icon: '⚡', title: 'Fast Turnaround & Delivery',         text: 'Quick processing and reliable delivery so your business never runs out of packaging.' },
              { icon: '🤝', title: 'Dedicated B2B Support',              text: 'A real team that helps you choose the right packaging and supports you every step of the way.' },
            ].map((u, i) => (
              <div key={i} className={`usp-card reveal delay-${(i % 3) + 1}`}>
                <div className="usp-icon">{u.icon}</div>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Different Block */}
      <section className="section section-alt">
        <div className="container">
          <div className="different-block">
            <div className="reveal-left">
              <h3>Why We're Different From Traditional Suppliers</h3>
              <p>
                Unlike traditional packaging suppliers who focus on large enterprises with massive orders, 
                EcoPack is built specifically for the needs of small and growing businesses. 
                We understand your constraints and have designed everything — from pricing to MOQs to branding — with you in mind.
              </p>
              <button className="btn btn-white" onClick={() => navigate('contact')}>Partner With EcoPack</button>
            </div>
            <ul className="different-list reveal-right">
              {[
                'No exorbitant minimum order quantities — start small, grow big.',
                'Eco-certified materials, not just "eco-friendly" claims.',
                'Custom branding available from small batch sizes.',
                'Transparent pricing with no hidden costs.',
                'Dedicated support team that understands small business needs.',
                'Multiple product categories in one platform — no need to use multiple suppliers.',
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Impact promise */}
      <div className="impact-bar">
        <div className="container">
          <p className="reveal">
            "EcoPack is more than a packaging supplier —{' '}
            <span>it is a step toward a cleaner future</span>{' '}
            where businesses grow responsibly and sustainably."
          </p>
        </div>
      </div>
    </>
  )
}
