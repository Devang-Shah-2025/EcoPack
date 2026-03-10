import { useEffect, useState } from 'react'

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

const FAQS = [
  { q: 'What is the minimum order quantity?', a: 'Our minimum order quantity starts at just 50 units for standard products and 100 units for custom-branded packaging. We designed this specifically so small and home-based businesses can access eco-friendly packaging without committing to large, expensive bulk orders.' },
  { q: 'How long does delivery take?', a: 'Standard delivery takes 5–7 business days. For urgent orders, we offer an express 2–3 business day option for an additional fee. Custom branded orders may take 7–10 days due to the printing and production process.' },
  { q: 'Are your products really biodegradable/compostable?', a: 'Yes — all our eco claims are backed by third-party certifications (EN 13432 for European compostability standards and ASTM D6400 for US/international standards). We never make unverified "eco-friendly" claims without documentation.' },
  { q: 'Can I get a sample before placing a bulk order?', a: 'Absolutely! We offer a free sample pack that includes one unit of each product category. You only pay for shipping. This way you can feel the quality, test the sizing, and make an informed decision before committing to a full order.' },
  { q: 'Do you offer custom branding?', a: 'Yes! We offer full custom branding including logo printing, custom colors, and branded inserts from 100 units. Our design team can help you create artwork if you need it, or we work from your existing brand files.' },
  { q: 'How can I place an order?', a: 'You can get in touch via the contact form, WhatsApp (9999999999), or email us at orders@ecopack.co. We\'ll confirm product selection, quantity, and delivery timeline before processing your order.' },
]

const INITIAL_FORM = { name: '', business: '', email: '', requirement: '', message: '' }

export default function ContactUs() {
  useReveal()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.requirement) e.requirement = 'Please select a packaging requirement'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitted(true)
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: undefined }))
  }

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label light">Get in Touch</span>
          <h1>Contact EcoPack</h1>
          <p>Ready to make the switch to sustainable packaging? We'd love to hear from you — whether it's a question, an order, or just a chat about eco-packaging.</p>
        </div>
      </div>

      {/* Contact Main */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:48 }}>
            {/* Form */}
            <div className="reveal-left contact-ring-wrap">
              <i style={{ '--clr':'#3ab07a' }} />
              <i style={{ '--clr':'#4ecca3' }} />
              <i style={{ '--clr':'#2d8a5e' }} />
              <div className="contact-ring-content">
              <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1.6rem', fontWeight:800, color:'var(--green-dark)', marginBottom:8 }}>Send Us a Message</h2>
              <p style={{ color:'var(--text-secondary)', marginBottom:28, fontSize:'0.975rem' }}>Fill in the form and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="contact-success">
                  <div style={{ fontSize:'4rem', marginBottom:16 }}>🎉</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! We've received your message and will reply to <strong>{form.email}</strong> within 24 hours.</p>
                  <button className="btn btn-primary" style={{ marginTop:20 }} onClick={() => { setForm(INITIAL_FORM); setSubmitted(false) }}>Send Another Message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input id="name" name="name" type="text" placeholder="e.g. Ayesha Khan" value={form.name} onChange={handleChange} className={errors.name ? 'invalid' : ''} />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="business">Business Name</label>
                      <input id="business" name="business" type="text" placeholder="e.g. Sweet Treats Bakery" value={form.business} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={errors.email ? 'invalid' : ''} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="requirement">Packaging Requirement *</label>
                    <select id="requirement" name="requirement" value={form.requirement} onChange={handleChange} className={errors.requirement ? 'invalid' : ''}>
                      <option value="">Select an option…</option>
                      <option value="ecommerce">E-Commerce Packaging (mailers, boxes, tape)</option>
                      <option value="food">Food & Beverage Packaging (containers, cups, cutlery)</option>
                      <option value="branding">Custom Branding (logo print, inserts, stickers)</option>
                      <option value="sample">Request a Free Sample Pack</option>
                      <option value="bulk">Bulk / Wholesale Order</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                    {errors.requirement && <span className="form-error">{errors.requirement}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us about your business and packaging needs…" value={form.message} onChange={handleChange} className={errors.message ? 'invalid' : ''} />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width:'100%', padding:'16px', fontSize:'1rem' }}>
                    Send Message 🌿
                  </button>
                </form>
              )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="reveal-right">
              <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'1.6rem', fontWeight:800, color:'var(--green-dark)', marginBottom:8 }}>Reach Us Directly</h2>
              <p style={{ color:'var(--text-secondary)', marginBottom:28, fontSize:'0.975rem' }}>Prefer to get in touch another way? We're here for you.</p>

              <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:28 }}>
                {[
                  { icon:'📧', label:'Email', val:'hello@ecopack.co', sub:'We reply within 24 hours' },
                  { icon:'📱', label:'WhatsApp', val:'9999999999', sub:'Mon–Sat, 9am–7pm' },
                  { icon:'📍', label:'Location', val:'Ahmedabad, India', sub:'Available for local pickups' },
                  { icon:'🕐', label:'Business Hours', val:'Mon–Sat: 9am – 7pm', sub:'Sunday: Closed' },
                ].map((item, i) => (
                  <div key={i} className="contact-info-card">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <span className="contact-info-label">{item.label}</span>
                      <strong className="contact-info-val">{item.val}</strong>
                      <span className="contact-info-sub">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <h4 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'0.9rem', fontWeight:700, color:'var(--green-dark)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:12 }}>Follow Us</h4>
                <div style={{ display:'flex', gap:10 }}>
                  {[['🐦', 'Twitter'], ['📘', 'Facebook'], ['📸', 'Instagram'], ['💼', 'LinkedIn']].map(([icon, label]) => (
                    <button key={label} className="social-btn" title={label} aria-label={label}>{icon}</button>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder">
                <div className="map-pin">📍</div>
                <p>Ahmedabad, India</p>
                <span>EcoPack HQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to the questions we hear most often.</p>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item reveal delay-${(i % 3) + 1}`}>
                <button
                  className={`faq-question${openFaq === i ? ' open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer${openFaq === i ? ' open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
