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

const MAKE_STEPS = [
  {
    icon: '🌾',
    title: 'Sourcing Natural Fibers',
    detail: 'We source bagasse, kraft pulp, recycled board, and bamboo from certified Indian partners to reduce transport emissions.',
    chips: ['FSC / PEFC Inputs', 'Local Procurement', 'Traceability Tags']
  },
  {
    icon: '🧪',
    title: 'Material Testing',
    detail: 'Each batch is tested for food-safety, strength, moisture resistance, and compostability before production starts.',
    chips: ['Food-safe Checks', 'Burst Tests', 'Compost Validation']
  },
  {
    icon: '🏭',
    title: 'Precision Manufacturing',
    detail: 'Sheets are formed, die-cut, folded, and sealed with low-waste processes to maintain quality at scale.',
    chips: ['Low-waste Tooling', 'Energy Efficient Lines', 'Quality Gates']
  },
  {
    icon: '🎨',
    title: 'Eco Branding',
    detail: 'Custom logos are printed using soy-based inks and water-based coatings for vibrant branding without harmful plastics.',
    chips: ['Soy Inks', 'Water-based Coatings', 'Custom Runs']
  },
  {
    icon: '📦',
    title: 'Smart Packing & Dispatch',
    detail: 'Final products are bundled in recyclable secondary packs and dispatched through optimized routes across India.',
    chips: ['Bulk Ready', 'Route Optimization', 'Recyclable Secondary Packs']
  },
]

const TIMELINE_STAGES = [
  {
    window: 'Day 01',
    title: 'Supplier Intake & Batch Mapping',
    detail: 'Incoming pulp, bagasse, and board are logged against supplier lots for full traceability from source to shipment.',
    note: 'Checkpoint: Moisture + source certificate verified'
  },
  {
    window: 'Day 02',
    title: 'Pulp Conditioning',
    detail: 'Fibers are conditioned for controlled thickness and strength so packs can handle transit pressure and food contact use-cases.',
    note: 'Checkpoint: GSM stability and tensile consistency'
  },
  {
    window: 'Day 03',
    title: 'Mold Forming & Sheet Pressing',
    detail: 'Material is pressed into sheets and molded forms with low-waste tooling to maintain durability and reduce offcuts.',
    note: 'Checkpoint: Burst strength and edge integrity'
  },
  {
    window: 'Day 04',
    title: 'Die-Cut & Structural Conversion',
    detail: 'Sheets are converted into mailers, boxes, cups, and trays through precision die-cutting and fold-line engineering.',
    note: 'Checkpoint: Fold memory and closure fit'
  },
  {
    window: 'Day 05',
    title: 'Food-Safe & Compostability Validation',
    detail: 'Sample units are tested for safe contact, odor neutrality, heat tolerance, and compostability performance.',
    note: 'Checkpoint: Compliance panel sign-off'
  },
  {
    window: 'Day 06',
    title: 'Brand Printing & Finishing',
    detail: 'Soy-ink graphics are applied with controlled color matching to keep branding sharp while maintaining eco standards.',
    note: 'Checkpoint: Color delta and print rub-resistance'
  },
  {
    window: 'Day 07',
    title: 'Final QC, Bundling & Pallet Plan',
    detail: 'Each lot passes a final AQL check and is bundled into recyclable transit packs optimized for stack safety.',
    note: 'Checkpoint: AQL pass and lot-level documentation'
  },
  {
    window: 'Dispatch',
    title: 'Regional Fulfillment Across India',
    detail: 'Orders are dispatched through route-optimized lanes to minimize delivery time and transport emissions.',
    note: 'Checkpoint: Route efficiency + carbon log entry'
  },
]

const QUALITY_PILLARS = [
  {
    icon: '🔬',
    title: 'Material Consistency',
    text: 'We monitor GSM variation, compression tolerance, and moisture so each production lot behaves predictably in use.'
  },
  {
    icon: '🥗',
    title: 'Food Safety Focus',
    text: 'Food-contact products are evaluated for safe usage, odor neutrality, and thermal stability before batch release.'
  },
  {
    icon: '🎯',
    title: 'Structural Accuracy',
    text: 'Die-lines, fold points, and lock structures are measured so assembly remains easy for both teams and end users.'
  },
  {
    icon: '📉',
    title: 'Waste Reduction',
    text: 'Tooling layouts and secondary packaging are optimized to reduce material waste and prevent over-packing.'
  },
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

      <section className="section section-cream howmade-overview">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Inside EcoPack</span>
            <h2>How Our Products Are Made</h2>
            <p>
              A transparent, animated journey from natural raw materials to premium,
              eco-friendly packaging used by growing Indian businesses.
            </p>
          </div>
          <div className="howmade-overview-grid">
            <div className="howmade-overview-card reveal-left">
              <h3>Why This Process Matters</h3>
              <p>
                Traditional plastic packaging creates long-term waste. EcoPack's process is designed
                to reduce plastic dependence while preserving durability, aesthetics, and affordability.
              </p>
              <div className="howmade-mini-metrics">
                <div>
                  <strong>90%</strong>
                  <span>lower virgin plastic use</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>eco-conscious materials</span>
                </div>
                <div>
                  <strong>8-stage</strong>
                  <span>quality-controlled workflow</span>
                </div>
              </div>
            </div>

            <div className="howmade-overview-visual reveal-right" aria-hidden="true">
              <div className="factory-core">
                <span>EcoPack Flow</span>
              </div>
              <div className="factory-orbit orbit-1">Raw</div>
              <div className="factory-orbit orbit-2">Test</div>
              <div className="factory-orbit orbit-3">Build</div>
              <div className="factory-orbit orbit-4">Brand</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section howmade-process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Production Workflow</span>
            <h2>From Fiber to Finished Pack</h2>
            <p>Follow each stage of the EcoPack lifecycle through an animated process timeline.</p>
          </div>

          <div className="howmade-process-grid">
            {MAKE_STEPS.map((step, idx) => (
              <article key={step.title} className={`howmade-step-card reveal delay-${(idx % 5) + 1}`}>
                <div className="howmade-step-badge">Step {idx + 1}</div>
                <div className="howmade-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <div className="howmade-chip-row">
                  {step.chips.map(chip => <span key={chip} className="howmade-chip">{chip}</span>)}
                </div>
                <div className="howmade-progress-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Detailed Timeline</span>
            <h2>Inside Our 8-Stage Production Timeline</h2>
            <p>
              This end-to-end timeline shows exactly how EcoPack products are made,
              validated, and dispatched with measurable quality controls.
            </p>
          </div>

          <div className="howmade-timeline-wrap">
            <div className="timeline howmade-timeline">
              {TIMELINE_STAGES.map((stage, idx) => (
                <div key={stage.title} className={`timeline-item reveal delay-${(idx % 6) + 1}`}>
                  <div className="timeline-content howmade-timeline-content">
                    <span className="howmade-time-pill">{stage.window}</span>
                    <h4>{stage.title}</h4>
                    <p>{stage.detail}</p>
                    <div className="howmade-stage-note">{stage.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Quality Architecture</span>
            <h2>Built-In Checks At Every Stage</h2>
            <p>
              Our quality framework ensures your packaging performs reliably in shipping,
              storage, and real customer handling conditions.
            </p>
          </div>

          <div className="howmade-quality-grid">
            {QUALITY_PILLARS.map((pillar, idx) => (
              <article key={pillar.title} className={`howmade-quality-card reveal delay-${(idx % 4) + 1}`}>
                <span className="howmade-quality-icon">{pillar.icon}</span>
                <h4>{pillar.title}</h4>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container">
          <div className="section-header light reveal">
            <span className="section-label light">Need for Change</span>
            <h2>Why Businesses Are Switching to EcoPack</h2>
            <p>
              Sustainable packaging is no longer optional. Customers now expect brands to show
              measurable environmental responsibility in every shipment.
            </p>
          </div>

          <div className="howmade-need-grid">
            <div className="howmade-need-card reveal-left">
              <h4>Customer Trust</h4>
              <p>Eco-friendly packs increase brand trust and repeat purchases, especially in D2C and food delivery segments.</p>
            </div>
            <div className="howmade-need-card reveal-scale">
              <h4>Regulatory Readiness</h4>
              <p>Compostable and recyclable materials keep your business aligned with rapidly evolving packaging regulations.</p>
            </div>
            <div className="howmade-need-card reveal-right">
              <h4>Future-Proof Growth</h4>
              <p>As sustainability becomes the default, brands using smart eco packs gain long-term pricing and positioning advantages.</p>
            </div>
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
