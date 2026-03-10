export default function Footer({ navigate }) {
  const pages = [
    { id: 'home',           label: 'Home' },
    { id: 'problem',        label: 'The Problem' },
    { id: 'solutions',      label: 'Our Solutions' },
    { id: 'products',       label: 'Products' },
    { id: 'business-model', label: 'Business Model' },
    { id: 'audience',       label: 'Target Audience' },
    { id: 'about',          label: 'About Us' },
    { id: 'contact',        label: 'Contact Us' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <div className="nav-logo-icon" style={{ width: 32, height: 32, fontSize: 16, borderRadius: 8 }}>🌿</div>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                Eco<span style={{ color: 'var(--green-pale)' }}>Pack</span>
              </span>
            </div>
            <p>
              Making sustainable packaging practical, affordable,
              and accessible for every small business.
            </p>
            <div className="footer-social">
              {['🐦','📘','📸','💼','▶️'].map((icon, i) => (
                <span key={i} className="social-icon" title={['Twitter','Facebook','Instagram','LinkedIn','YouTube'][i]}>
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {pages.slice(0, 4).map(p => (
                <li key={p.id}><button onClick={() => navigate(p.id)}>{p.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              {pages.slice(4).map(p => (
                <li key={p.id}><button onClick={() => navigate(p.id)}>{p.label}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <p>📧 hello@ecopack.green</p>
            <p>📞 +92 300 1234567</p>
            <p>📍 Lahore, Pakistan</p>
            <p>⏰ Mon–Sat, 9am–6pm</p>
            <div style={{ marginTop: 16 }}>
              <button className="btn btn-outline-white" style={{ padding: '9px 20px', fontSize: '0.82rem', borderRadius: 999 }} onClick={() => navigate('contact')}>
                Contact Us →
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 EcoPack. All rights reserved. Designed for a greener future.</span>
          <div className="footer-badge">🌿 100% Eco-Conscious</div>
        </div>
      </div>
    </footer>
  )
}
