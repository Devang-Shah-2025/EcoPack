import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'home',           label: 'Home' },
  { id: 'problem',        label: 'The Problem' },
  { id: 'solutions',      label: 'Our Solutions' },
  { id: 'products',       label: 'Products' },
  { id: 'how-made',       label: 'How We Make' },
  { id: 'business-model', label: 'Business Model' },
  { id: 'audience',       label: 'Target Audience' },
  { id: 'about',          label: 'About Us' },
  { id: 'contact',        label: 'Contact Us' },
]

const SEARCH_INDEX = [
  { page: 'home',           icon: '🏠', label: 'Home – Who we are, Hero section' },
  { page: 'problem',        icon: '⚠️', label: 'The Problem – Plastic waste, Market gap' },
  { page: 'solutions',      icon: '💡', label: 'Our Solutions – Process, USP' },
  { page: 'products',       icon: '📦', label: 'Products – Eco mailers, food containers' },
  { page: 'how-made',       icon: '🏭', label: 'How We Make – Materials, process, impact' },
  { page: 'business-model', icon: '📊', label: 'Business Model – Revenue, SWOT' },
  { page: 'audience',       icon: '🎯', label: 'Target Audience – Personas, segments' },
  { page: 'about',          icon: '🌿', label: 'About Us – Vision, Mission, Team' },
  { page: 'contact',        icon: '📬', label: 'Contact Us – Form, details' },
]

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery]           = useState('')
  const [showDrop, setShowDrop]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filtered = query.trim()
    ? SEARCH_INDEX.filter(i =>
        i.label.toLowerCase().includes(query.toLowerCase()) ||
        i.page.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_INDEX

  const pickResult = (page) => {
    navigate(page)
    setQuery('')
    setShowDrop(false)
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          {/* Logo */}
          <div className="nav-logo" onClick={() => navigate('home')}>
            <div className="nav-logo-icon">🌿</div>
            <span className="nav-logo-text">Eco<span>Pack</span></span>
          </div>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <button
                  className={`nav-link${currentPage === item.id ? ' active' : ''}`}
                  onClick={() => navigate(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: search + CTA */}
          <div className="nav-right">
            <div className="nav-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search pages..."
                value={query}
                onChange={e => { setQuery(e.target.value); setShowDrop(true) }}
                onFocus={() => setShowDrop(true)}
                onBlur={() => setTimeout(() => setShowDrop(false), 200)}
              />
              {showDrop && (
                <div className="search-dropdown">
                  {filtered.length ? filtered.map(item => (
                    <div key={item.page} className="search-result-item" onMouseDown={() => pickResult(item.page)}>
                      <span className="search-result-icon">{item.icon}</span>
                      {item.label}
                    </div>
                  )) : (
                    <div className="search-result-item">No results found</div>
                  )}
                </div>
              )}
            </div>
            <button className="btn btn-white nav-cta" onClick={() => navigate('contact')}>
              Get Started
            </button>
            <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`mobile-nav-link${currentPage === item.id ? ' active' : ''}`}
              onClick={() => { navigate(item.id); setMobileOpen(false) }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
