import { Routes, Route, Navigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StartingPage from './pages/StartingPage'
import BannerSection from './pages/BannerSection'
import AboutPage from './pages/AboutPage'
import TimelinePage from './pages/TimelinePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogsPage from './pages/BlogsPage'
import ContactSection from './pages/ContactSection'

function App() {
  const [showContact, setShowContact] = useState(false)
  const contactRef = useRef(null)

  const handleContactClick = () => {
    if (showContact) {
      setShowContact(false)
    } else {
      setShowContact(true)
      setTimeout(() => {
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="fixed-top">
        <div id="top"><StartingPage /></div>
        <BannerSection />
      </div>
      <div id="page-content" className="page-content">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
        <div
          ref={contactRef}
          className={`contact-wrapper ${showContact ? 'contact-visible' : 'contact-hidden'}`}
        >
          <ContactSection />
        </div>
      </div>
      <Footer onContactClick={handleContactClick} showContact={showContact} />
    </div>
  )
}

export default App
