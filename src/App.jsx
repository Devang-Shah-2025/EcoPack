import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TheProblem from './pages/TheProblem'
import OurSolutions from './pages/OurSolutions'
import Products from './pages/Products'
import BusinessModel from './pages/BusinessModel'
import TargetAudience from './pages/TargetAudience'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import './App.css'

function PyramidLoader() {
  return (
    <div className="page-transition-overlay">
      <div className="pt-inner">
        <div className="pyramid-loader">
          <div className="pyramid-wrapper">
            <span className="pyr-side pyr-side1" />
            <span className="pyr-side pyr-side2" />
            <span className="pyr-side pyr-side3" />
            <span className="pyr-side pyr-side4" />
            <span className="pyr-shadow" />
          </div>
        </div>
        <p className="pt-label">EcoPack</p>
      </div>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [transitioning, setTransitioning] = useState(false)
  const [nextPage, setNextPage] = useState(null)
  const [initialLoad, setInitialLoad] = useState(true)

  // Show pyramid loader for 1s on first page load
  useEffect(() => {
    const t = setTimeout(() => setInitialLoad(false), 1000)
    return () => clearTimeout(t)
  }, [])

  const navigate = (page) => {
    if (page === currentPage) return
    setNextPage(page)
    setTransitioning(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!transitioning || !nextPage) return
    const t = setTimeout(() => {
      setCurrentPage(nextPage)
      setNextPage(null)
      setTransitioning(false)
    }, 750)
    return () => clearTimeout(t)
  }, [transitioning, nextPage])

  const pages = {
    'home':           <Home navigate={navigate} />,
    'problem':        <TheProblem />,
    'solutions':      <OurSolutions navigate={navigate} />,
    'products':       <Products />,
    'business-model': <BusinessModel />,
    'audience':       <TargetAudience />,
    'about':          <AboutUs />,
    'contact':        <ContactUs />,
  }

  return (
    <div className="app">
      {(transitioning || initialLoad) && <PyramidLoader />}
      {/* Ambient background orbs — always visible */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,204,163,0.06) 0%, transparent 70%)', animation: 'floatOrb 25s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,92,58,0.07) 0%, transparent 70%)', animation: 'floatOrb 30s ease-in-out infinite', animationDelay: '-10s' }} />
        <div style={{ position: 'absolute', top: '40%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)', animation: 'floatOrb 20s ease-in-out infinite', animationDelay: '-5s' }} />
      </div>
      {/* Ticker strip */}
      <div className="ticker-strip" style={{ position: 'fixed', top: 74, left: 0, right: 0, zIndex: 999 }}>
        <div className="ticker-inner">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot" />
              Eco-Friendly Packaging
              <span className="ticker-dot" />
              Biodegradable Materials
              <span className="ticker-dot" />
              Compostable Solutions
              <span className="ticker-dot" />
              Zero Plastic Waste
              <span className="ticker-dot" />
              Sustainable Future
            </span>
          ))}
        </div>
      </div>
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="main-content" style={{ paddingTop: 74 + 34 }}>{pages[currentPage]}</main>
      <Footer navigate={navigate} />
    </div>
  )
}

export default App
