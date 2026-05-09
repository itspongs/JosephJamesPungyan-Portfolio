import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import StartingPage from './pages/StartingPage'
import BannerSection from './pages/BannerSection'
import AboutPage from './pages/AboutPage'
import TimelinePage from './pages/TimelinePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogsPage from './pages/BlogsPage'
import ContactSection from './pages/ContactSection'

function App() {
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
        <ContactSection />
      </div>
    </div>
  )
}

export default App
