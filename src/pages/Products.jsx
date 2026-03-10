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

const CATEGORIES = {
  ecommerce: {
    label: '🛒 E-Commerce',
    products: [
      // biodegradable mailer bag (Pexels free)
      { icon: '📮', img: 'https://images.pexels.com/photos/19383384/pexels-photo-19383384.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Compostable Mailer Bags', material: 'Plant-based PBAT + PLA', best: 'Fashion, accessories, gifts', benefit: '100% compostable in 90 days', bg: '#e8f5e9' },
      // open cardboard shipping box on wooden desk (Pexels free)
      { icon: '📦', img: 'https://images.pexels.com/photos/4498152/pexels-photo-4498152.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Recyclable Shipping Boxes', material: 'FSC-certified kraft board', best: 'Electronics, home goods, books', benefit: 'Fully recyclable & reusable', bg: '#fff8e1' },
      // brown paper bag filled with white tissue paper (Pexels free)
      { icon: '🎀', img: 'https://images.pexels.com/photos/9218541/pexels-photo-9218541.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Kraft Tissue Paper', material: 'Recycled kraft paper', best: 'Jewelry, apparel, cosmetics', benefit: 'Biodegradable, elegant finish', bg: '#fce4ec' },
      // person sealing cardboard box with tape dispenser (Pexels free)
      { icon: '📎', img: 'https://images.pexels.com/photos/6169019/pexels-photo-6169019.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Paper Tape', material: 'Water-activated kraft paper', best: 'Box sealing, gifting', benefit: 'Zero plastic, 100% paper', bg: '#e3f2fd' },
      // close-up of sticker on white paper bag (Pexels free)
      { icon: '🔖', img: 'https://images.pexels.com/photos/7363076/pexels-photo-7363076.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Eco Label Stickers', material: 'Recycled paper + soy ink', best: 'Branding, product labels', benefit: 'Compostable, vibrant printing', bg: '#f3e5f5' },
      // transparent bubble wrap texture close-up (Pexels free)
      { icon: '🛡️', img: 'https://images.pexels.com/photos/6159701/pexels-photo-6159701.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Recycled Bubble Wrap', material: 'Recycled materials', best: 'Fragile items protection', benefit: 'Reduces virgin plastic use by 90%', bg: '#e8f5e9' },
    ],
  },
  food: {
    label: '🍱 Food & Beverage',
    products: [
      // eco-friendly paper food containers with fruit labels stacked (Pexels free)
      { icon: '🥡', img: 'https://images.pexels.com/photos/32424228/pexels-photo-32424228.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Biodegradable Takeaway Containers', material: 'Sugarcane bagasse', best: 'Cloud kitchens, tiffin services, cafes', benefit: 'Microwave-safe, breaks down in 60 days', bg: '#fff8e1' },
      // four brown disposable cups on white surface (Pexels free)
      { icon: '☕', img: 'https://images.pexels.com/photos/8015710/pexels-photo-8015710.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Eco Paper Cups', material: 'PLA-lined recycled paper', best: 'Cafes, home bakers, events', benefit: 'Compostable lining, no plastic lid needed', bg: '#e8f5e9' },
      // reusable bamboo cutlery set on linen cloth (Pexels free)
      { icon: '🍴', img: 'https://images.pexels.com/photos/7879769/pexels-photo-7879769.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Wooden Cutlery Sets', material: 'Certified birchwood', best: 'Home bakers, food delivery, catering', benefit: 'Biodegradable, premium feel', bg: '#f3e5f5' },
      // simple jute tote bag with rope handles on white background (Pexels free)
      { icon: '🛍️', img: 'https://images.pexels.com/photos/12025443/pexels-photo-12025443.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Eco Carry Bags', material: 'Jute / recycled cotton', best: 'Grocery, bakery, retail pickup', benefit: 'Reusable, 100% natural fibers', bg: '#e3f2fd' },
      // simple brown kraft box against blank background (Pexels free)
      { icon: '🧁', img: 'https://images.pexels.com/photos/8015700/pexels-photo-8015700.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Kraft Bakery Boxes', material: 'Food-grade kraft board', best: 'Cakes, pastries, desserts', benefit: 'Grease-resistant, biodegradable', bg: '#fce4ec' },
      // crinkled brown craft paper texture for wrapping (Pexels free)
      { icon: '🍶', img: 'https://images.pexels.com/photos/13031765/pexels-photo-13031765.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Biodegradable Food Wrapping Paper', material: 'Wax-free parchment', best: 'Sandwiches, wraps, street food', benefit: 'Food-safe, fully compostable', bg: '#fff8e1' },
    ],
  },
  branding: {
    label: '🎨 Custom Branding',
    products: [
      // stack of eco-friendly branded cardboard packaging (Pexels free)
      { icon: '✏️', img: 'https://images.pexels.com/photos/14557897/pexels-photo-14557897.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Custom Logo Printing', material: 'Soy-based inks on eco stock', best: 'Any product, any size', benefit: 'Vibrant full-color, eco-ink', bg: '#e8f5e9' },
      // thank-you card hanging from a gift box (Pexels free)
      { icon: '💌', img: 'https://images.pexels.com/photos/7309447/pexels-photo-7309447.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Branded Thank-You Cards', material: 'Recycled cotton paper', best: 'E-commerce, subscription boxes', benefit: 'Seed paper option — plants a flower!', bg: '#fce4ec' },
      // person putting a branded sticker on paper bag (Pexels free)
      { icon: '🏷️', img: 'https://images.pexels.com/photos/7309465/pexels-photo-7309465.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Branded Eco Stickers', material: 'Compostable paper + soy ink', best: 'Product packaging, gifting', benefit: 'Custom shapes, branded design', bg: '#e3f2fd' },
      // open gift box with catalogue / packaging inserts (Pexels free)
      { icon: '🎁', img: 'https://images.pexels.com/photos/4841374/pexels-photo-4841374.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Custom Gift Boxes', material: 'Kraft board + eco ribbon', best: 'Gift brands, luxury eco products', benefit: 'Premium unboxing experience', bg: '#f3e5f5' },
      // person opening box revealing white bottle in eco unboxing (Pexels free)
      { icon: '🧴', img: 'https://images.pexels.com/photos/6958425/pexels-photo-6958425.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Eco Bottle Labels', material: 'Compostable adhesive paper', best: 'Beverages, skincare, food jars', benefit: 'Water-resistant, biodegradable', bg: '#fff8e1' },
      // pouch inside a small gift box, clean lighting (Pexels free)
      { icon: '📋', img: 'https://images.pexels.com/photos/8015884/pexels-photo-8015884.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', name: 'Branded Packaging Inserts', material: 'Recycled card stock', best: 'E-commerce, subscription boxes', benefit: 'Adds brand story to every order', bg: '#e8f5e9' },
    ],
  },
}

export default function Products() {
  useReveal()
  const [tab, setTab] = useState('ecommerce')

  // Re-trigger reveal observer whenever tab changes so new cards aren't invisible
  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.08 }
      )
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
        .forEach(el => { if (!el.classList.contains('visible')) obs.observe(el) })
      // Also immediately mark product cards visible since they're already in viewport
      document.querySelectorAll('.products-grid .reveal')
        .forEach(el => el.classList.add('visible'))
      return () => obs.disconnect()
    }, 60)
    return () => clearTimeout(timer)
  }, [tab])

  const switchTab = (t) => {
    setTab(t)
  }

  const TAB_LABELS = { ecommerce: '🛒 E-Commerce', food: '🍱 Food & Beverage', branding: '🎨 Custom Branding' }

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="section-label light">Product Range</span>
          <h1>Our Eco-Friendly Product Range</h1>
          <p>Explore our complete range of biodegradable, compostable, and recyclable packaging solutions — designed for every type of small business.</p>
        </div>
      </div>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className="product-category-tabs">
            {Object.keys(TAB_LABELS).map(key => (
              <button
                key={key}
                className={`category-tab${tab === key ? ' active' : ''}`}
                onClick={() => switchTab(key)}
              >
                {TAB_LABELS[key]}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {CATEGORIES[tab].products.map((p, i) => (
              <div key={`${tab}-${i}`} className={`product-card reveal delay-${(i % 3) + 1}`}>
                <div className="product-card-img" style={{ background: p.bg }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="product-card-photo"
                    onError={e => { e.currentTarget.style.display = 'none' }}
                  />
                  <span className="product-card-emoji">{p.icon}</span>
                </div>
                <div className="product-card-body">
                  <h3>{p.name}</h3>
                  <div className="product-meta">
                    <div className="product-meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                      <strong>Material:</strong> {p.material}
                    </div>
                    <div className="product-meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      </svg>
                      <strong>Best for:</strong> {p.best}
                    </div>
                  </div>
                  <div className="eco-badge">🌿 {p.benefit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why eco packaging section */}
      <section className="section section-mint">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Certified & Trusted</span>
            <h2>Quality You Can Trust</h2>
            <p>Every EcoPack product is tested, certified, and sourced responsibly.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { icon: '✅', title: 'Certified Compostable', text: 'EN 13432 & ASTM D6400 certified for genuine compostability.' },
              { icon: '🌿', title: 'FSC-Certified Wood',    text: 'All wood and paper products sourced from responsible forests.' },
              { icon: '🔬', title: 'Food-Grade Safe',        text: 'All food packaging tested and certified food-safe globally.' },
              { icon: '💧', title: 'Non-Toxic Inks',         text: 'Soy and water-based inks — zero harmful chemicals.' },
            ].map((item, i) => (
              <div key={i} className={`promise-item reveal delay-${i + 1}`}>
                <div className="promise-icon" style={{ background: 'var(--white)' }}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization CTA */}
      <section className="section-green" style={{ padding: '72px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="section-label light">Custom Orders Welcome</span>
            <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'clamp(1.8rem,4vw,2.5rem)', fontWeight:700, color:'#fff', margin:'14px 0 12px' }}>
              Need Something Specific?
            </h2>
            <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'1.05rem', maxWidth:540, margin:'0 auto 36px', lineHeight:1.7 }}>
              We accept custom orders for shapes, sizes, materials, and full branding. 
              Contact our team and we'll design the perfect packaging solution for your business.
            </p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <button className="btn btn-white">Request Custom Quote</button>
              <button className="btn btn-outline-white">Download Product Catalog</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
