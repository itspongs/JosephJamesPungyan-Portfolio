import { Routes, Route, Navigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import Waveform from './components/Waveform'

import StartingPage from './pages/StartingPage'
import BannerSection from './pages/BannerSection'
import AboutPage from './pages/AboutPage'
import TimelinePage from './pages/TimelinePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogsPage from './pages/BlogsPage'
import ContactSection from './pages/ContactSection'
import ErrorPage from './pages/ErrorPage'
import IntroPage from './pages/IntroPage'

function App() {
  const [introDone, setIntroDone] = useState(false)
  const [proceeded, setProceeded] = useState(false)
  const [analyser, setAnalyser] = useState(null)
  const [showContact, setShowContact] = useState(false)

  const audioRef = useRef(null)
  const audioCtxCreated = useRef(false)
  const contactRef = useRef(null)
  const pageContentRef = useRef(null)

  const startMusic = () => {
    if (!audioRef.current) return
    if (!audioCtxCreated.current) {
      const ctx = new AudioContext()
      const analyserNode = ctx.createAnalyser()
      analyserNode.fftSize = 256
      const source = ctx.createMediaElementSource(audioRef.current)
      source.connect(analyserNode)
      analyserNode.connect(ctx.destination)
      setAnalyser(analyserNode)
      audioCtxCreated.current = true
    }
    audioRef.current.play().catch(() => {})
  }

  const handleProceed = () => {
    setTimeout(() => {
      setProceeded(true)
    }, 50)
  }

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
      <audio ref={audioRef} src="/music.mp3" loop />
      

      {!introDone && (
        <IntroPage
          onDone={() => setIntroDone(true)}
          onStart={startMusic}
        />
      )}

      {introDone && (
        <>
          <Waveform analyser={analyser} />
          {proceeded && <Navbar className="navbar-enter" />}
          <div className="fixed-top">
            <div id="top"><StartingPage onProceed={handleProceed} /></div>
          </div>
          {proceeded && (
            <div
              id="page-content"
              className="page-content"
              ref={pageContentRef}
            >
              <BannerSection />
              <Routes>
                <Route path="/" element={<Navigate to="/about" replace />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/timeline" element={<TimelinePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
              <div
                ref={contactRef}
                className={`contact-wrapper ${showContact ? 'contact-visible' : 'contact-hidden'}`}
              >
                <ContactSection />
              </div>
            </div>
          )}
          {proceeded && (
            <Footer onContactClick={handleContactClick} showContact={showContact} />
          )}
          {proceeded && <MusicPlayer audioRef={audioRef} />}
        </>
      )}
    </div>
  )
}

export default App