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
import IntroPage from './pages/IntroPage'

function App() {
  const [introDone, setIntroDone] = useState(false)
  const [proceeded, setProceeded] = useState(false)
  const [analyser, setAnalyser] = useState(null)
  const [showContact, setShowContact] = useState(false)

  const audioRef = useRef(null)
  const audioCtxCreated = useRef(false)
  const contactRef = useRef(null)

  const sectionRefs = useRef({
    about:    null,
    timeline: null,
    skills:   null,
    projects: null,
    blogs:    null,
  })

  const scrollToSection = (key) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: 'smooth' })
  }

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
    audioRef.current.volume = 0.05
    audioRef.current.play().catch(() => {})
  }

  const handleProceed = () => {
    setTimeout(() => setProceeded(true), 50)
  }

  const handleContactClick = () => {
    if (showContact) {
      setShowContact(false)
    } else {
      setShowContact(true)
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
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

          {proceeded && (
            <Navbar
              className="navbar-enter"
              onNavClick={scrollToSection}
            />
          )}

          <div className="fixed-top">
            <div id="top">
              <StartingPage onProceed={handleProceed} />
            </div>
          </div>

          {proceeded && (
            <div id="page-content" className="page-content">
              <BannerSection />

              <section ref={(el) => (sectionRefs.current.about = el)}>
                <AboutPage />
              </section>

              <section ref={(el) => (sectionRefs.current.timeline = el)}>
                <TimelinePage />
              </section>

              <section ref={(el) => (sectionRefs.current.skills = el)}>
                <SkillsPage />
              </section>

              <section ref={(el) => (sectionRefs.current.projects = el)}>
                <ProjectsPage />
              </section>

              <section ref={(el) => (sectionRefs.current.blogs = el)}>
                <BlogsPage />
              </section>

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