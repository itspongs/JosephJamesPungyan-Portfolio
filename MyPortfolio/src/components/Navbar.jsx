import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleNav = (path) => {
        navigate(path)
        setTimeout(() => {
            const content = document.getElementById('page-content')
            if (content) {
                content.scrollIntoView({ behavior: 'smooth' })
            }
        }, 50)
    }

    return (
        <nav className="navbar">
            <div className="nav-pill">
                <div className="nav-brand" onClick={scrollToTop}>
                    <span className="nav-logo">PONGS</span>
                    <span className="nav-year">2026</span>
                </div>
                <div className="nav-divider"></div>
                <ul className="nav-links">
                    <li><NavLink to="/about" onClick={() => handleNav('/about')} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                    <li><NavLink to="/timeline" onClick={() => handleNav('/timeline')} className={({ isActive }) => isActive ? 'active' : ''}>Timeline</NavLink></li>
                    <li><NavLink to="/skills" onClick={() => handleNav('/skills')} className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
                    <li><NavLink to="/projects" onClick={() => handleNav('/projects')} className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                    <li><NavLink to="/blogs" onClick={() => handleNav('/blogs')} className={({ isActive }) => isActive ? 'active' : ''}>Blogs</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
