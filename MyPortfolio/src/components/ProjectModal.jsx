import './ProjectModal.css'
import githubLogo from '../assets/logos/github.png'

function ProjectModal({ project, onClose }) {
    if (!project) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>
                {project.image && (
                    <img src={project.image} alt={project.title} className="modal-image" />
                )}
                <div className="modal-body">
                    <div className="modal-header-row">
                        <h2 className="modal-title">{project.title}</h2>
                        <p className="modal-type">{project.type}</p>
                    </div>
                    <p className="modal-date">{project.date}</p>
                    <hr className="modal-divider" />
                    {Array.isArray(project.fullDescription)
                        ? project.fullDescription.map((para, i) => (
                            <p key={i} className="modal-description">{para}</p>
                        ))
                        : <p className="modal-description">{project.fullDescription || project.description}</p>
                    }
                    {project.tags && (
                        <div className="modal-tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="modal-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="modal-link">
                            <img src={githubLogo} alt="" className="modal-github-logo" />
                            VIEW ON GITHUB
                        </a>
                    )}
                    {project.landingLink && (
                        <a href={project.landingLink} target="_blank" rel="noreferrer" className="modal-link modal-landing-link">
                            VISIT EXPERIMENTAL LANDING
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
