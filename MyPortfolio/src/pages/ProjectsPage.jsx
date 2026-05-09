import { useEffect, useRef, useState } from 'react'
import './ProjectsPage.css'
import ProjectModal from '../components/ProjectModal'
import Conquest from './projects/Conquest'
import Migo from './projects/Migo'

const projects = [Conquest, Migo]

function ProjectsPage(){
    const ref = useRef(null)
    const [inView, setInView] = useState(false)

    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.unobserve(element)
                }
            },
            { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <div className="project-page">
                <div ref={ref} className={`project-content ${inView ? 'visible' : ''}`}>
                    <div className="project-header-wrapper">
                        <div className="project-title-group">
                            <p className="project-sub-header">CREATIONS</p>
                            <h1 className="project-title">My Projects</h1>
                        </div>
                        <p className="project-header-description">
                            A collection of things I've built <br />
                            along the way.
                        </p>
                    </div>
                    <hr />
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-info">
                                    <div className="project-title-row">
                                        <h1 className="project-title-name">{project.title}</h1>
                                        <p className="project-date">{project.date}</p>
                                    </div>
                                    <p className="project-type">{project.type}</p>
                                    <hr className="project-divider" />
                                    <p className="project-description">{project.description}</p>
                                    <button
                                        className="view-project-button"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        VIEW PROJECT
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    )
}

export default ProjectsPage
