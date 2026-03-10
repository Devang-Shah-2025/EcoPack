import { useState } from 'react'
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

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className="main-content">{pages[currentPage]}</main>
      <Footer navigate={navigate} />
    </div>
  )
}

export default App
