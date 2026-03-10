import { useEffect, useRef } from 'react'

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

function StatBar({ label, bad, badWidth, goodWidth }) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        ref.current?.querySelectorAll('.stat-bar-fill').forEach(el => el.classList.add('active'))
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div className="stat-bar-item" ref={ref}>
      <div className="stat-bar-label"><span>{label}</span><span style={{ color: bad ? '#e74c3c' : 'var(--green-primary)', fontSize: '0.8rem' }}>{bad ? '⚠ High Impact' : '✓ Low Impact'}</span></div>
      <div className="stat-bar-track">
        <div className={`stat-bar-fill ${bad ? 'bad' : 'good'}`} style={{ '--target-width': bad ? badWidth : goodWidth }} />
      </div>
    </div>
  )
}

export default function TheProblem() {
  useReveal()

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label light" style={{ marginBottom: 16 }}>Critical Issue</span>
          <h1>Why Packaging Needs to Change</h1>
          <p>Plastic packaging is wreaking havoc on our planet — and small businesses are stuck in the middle. Here's why the problem demands an urgent solution.</p>
        </div>
      </div>

      {/* Problem Cards */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Four Core Problems</span>
            <h2>The Packaging Crisis Explained</h2>
            <p>The packaging problem is multi-dimensional — it affects the environment, businesses, customers, and the market itself.</p>
          </div>

          <div className="problem-cards-grid">
            {[
              {
                cls: 'card-env', icon: '🌊', tag: 'Environmental',
                title: 'A. The Environmental Crisis',
                text: 'Over 380 million tonnes of plastic are produced globally every year. Most packaging ends up in landfills, oceans, and waterways. Plastic is non-biodegradable — it persists for 400+ years, breaking into microplastics that enter our food chain, water supply, and air. Single-use plastic packaging is one of the biggest contributors to this crisis.',
                anim: 'reveal-left',
              },
              {
                cls: 'card-biz', icon: '💼', tag: 'Business',
                title: 'B. The Small Business Dilemma',
                text: "Small businesses are caught in a trap: eco-friendly packaging appears expensive, sustainable suppliers are hard to find, minimum order quantities are too high, and customization options are limited. This forces many responsible businesses to continue using plastic — not by choice, but by necessity. There's a severe lack of affordable, accessible sustainable options.",
                anim: 'reveal-right',
              },
              {
                cls: 'card-cust', icon: '👥', tag: 'Customer',
                title: 'C. Shifting Customer Expectations',
                text: "Today's consumers are more environmentally aware than ever. 73% of global consumers say they would definitely or probably change their consumption habits to reduce environmental impact. Businesses using plastic packaging risk losing customer trust and loyalty. Brand perception is directly tied to environmental responsibility — and packaging is the first physical touchpoint.",
                anim: 'reveal-left',
              },
              {
                cls: 'card-mkt', icon: '📉', tag: 'Market Gap',
                title: 'D. The Accessibility Gap',
                text: "The sustainable packaging market is largely dominated by solutions built for large corporations — high MOQs, expensive certifications, complex logistics. Small businesses — home bakers, Instagram sellers, local food brands — are completely underserved. There's a clear and urgent market gap for affordable, low-MOQ, customizable eco-packaging tailored to growing businesses.",
                anim: 'reveal-right',
              },
            ].map((c, i) => (
              <div key={i} className={`problem-card ${c.cls} ${c.anim} delay-${(i % 2) + 1}`}>
                <span className="card-tag">{c.tag}</span>
                <span className="problem-card-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">The Data</span>
            <h2>Plastic vs. Eco-Friendly: By the Numbers</h2>
            <p>The comparison tells a clear story — plastic packaging is costly to the planet, while eco-friendly alternatives offer a sustainable path forward.</p>
          </div>

          <div className="comparison-wrapper reveal">
            <h3>🆚 Plastic Packaging vs. EcoPack Packaging</h3>
            <div className="comparison-grid">
              <div className="comparison-side bad">
                <h4>❌ Plastic Packaging</h4>
                {[
                  'Persists for 400+ years in the environment',
                  'Non-biodegradable, ends up in oceans',
                  'Contributes to microplastic pollution in food & water',
                  'Harmful to marine and terrestrial wildlife',
                  'Negative impact on brand perception',
                  'Rising regulatory restrictions and bans worldwide',
                ].map((item, i) => (
                  <div key={i} className="comparison-item"><div className="dot" />{item}</div>
                ))}
              </div>
              <div className="comparison-vs">VS</div>
              <div className="comparison-side good">
                <h4>✅ EcoPack Packaging</h4>
                {[
                  'Biodegrades in 90–180 days naturally',
                  'Compostable — returns nutrients to soil',
                  'Zero microplastic pollution',
                  'Certified eco-friendly materials',
                  'Enhances brand image and customer loyalty',
                  'Compliant with global sustainability regulations',
                ].map((item, i) => (
                  <div key={i} className="comparison-item"><div className="dot" />{item}</div>
                ))}
              </div>
            </div>

            {/* Animated stat bars */}
            <div className="stat-bars">
              <StatBar label="Plastic Pollution Contribution" bad badWidth="88%" />
              <StatBar label="Decomposition Time (lower is better)" bad badWidth="95%" />
              <StatBar label="Customer Trust & Brand Approval" bad={false} goodWidth="82%" />
              <StatBar label="Environmental Safety Rating" bad={false} goodWidth="90%" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
            {[
              { num: '8M',    label: 'Tonnes of plastic enter oceans each year', icon: '🌊' },
              { num: '400+',  label: 'Years for plastic to decompose',            icon: '⏳' },
              { num: '73%',   label: 'Consumers prefer sustainable brands',       icon: '♻️' },
              { num: '$600B', label: 'Global eco-packaging market by 2028',       icon: '📈' },
            ].map((s, i) => (
              <div key={i} className={`counter-card reveal delay-${i + 1}`}>
                <span className="counter-icon">{s.icon}</span>
                <div className="counter-num" style={{ fontSize: '2.4rem' }}>{s.num}</div>
                <div className="counter-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="section-label">The Good News</span>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 700, color: 'var(--green-dark)', margin: '14px 0 12px' }}>
              EcoPack Is the Solution
            </h2>
            <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem', maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.7 }}>
              We've built a business model specifically designed to solve these exact problems — affordable pricing, low MOQs, and full customization for small businesses.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
