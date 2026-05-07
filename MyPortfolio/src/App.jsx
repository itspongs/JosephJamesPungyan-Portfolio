import './App.css'
import StartingPage from './pages/StartingPage'
import BannerSection from './pages/BannerSection'
import AboutPage from './pages/AboutPage'
import TimelinePage from './pages/TimelinePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <div className="App">
      <StartingPage />
      <BannerSection />
      <AboutPage />
      <TimelinePage />
      <SkillsPage />
      <ProjectsPage />
    </div>
  )
}

export default App
