import { useEffect } from 'react'

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

export default function HowMade() {
  useReveal()

  return (
    <>
      <div className="page-hero page-hero-factory">
        <div className="container">
          <span className="section-label light">Inside EcoPack</span>
          <h1>How Our Products Are Made</h1>
          <p>
            A transparent, animated journey from natural raw materials to premium,
            eco-friendly packaging used by growing Indian businesses.
          </p>
        </div>
      </div>

      <section className="section section-cream howmade-overview">
        <div className="container">
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
                  <strong>5-step</strong>
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
            {STEPS.map((step, idx) => (
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
    </>
  )
}
