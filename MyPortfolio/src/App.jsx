import './App.css'
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
      <StartingPage />
      <BannerSection />
      <AboutPage />
      <TimelinePage />
      <SkillsPage />
      <ProjectsPage />
      <BlogsPage />
      <ContactSection />
    </div>
  )
}

export default App
