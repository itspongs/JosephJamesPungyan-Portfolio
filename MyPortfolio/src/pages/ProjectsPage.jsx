import './ProjectsPage.css'
import conquestPreview from '../assets/images/conquest-preview.png'
import migoPreview from '../assets/images/migo-preview.jpg'

function ProjectsPage(){
    return (
        <>
            <div className="project-page">
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
                    <div className="project-wrapper">
                        <img src={conquestPreview} alt="Conquest Preview" className="project-image" />
                        <div className="project-info">
                            <div className="project-title-row">
                                <h1 className="project-title-name">Conquest</h1>
                                <p className="project-date">APRIL 20, 2026</p>
                            </div>
                            <p className="project-type">APPLICATION</p>
                            <hr className="project-divider" />
                            <p className="project-description">
                                Our Final Java Group Project from the Intermediate Programming Course in our First Year
                            </p>
                            <button className="view-project-button">VIEW PROJECT</button>
                        </div>
                    </div>

                    <div className="project-wrapper">
                        <img src={migoPreview} alt="Conquest Preview" className="project-image" />
                        <div className="project-info">
                            <div className="project-title-row">
                                <h1 className="project-title-name">MIGO</h1>
                                <p className="project-date">COMING SOON</p>
                            </div>
                            <p className="project-type">PLANNING PHASE</p>
                            <hr className="project-divider" />
                            <p className="project-description">
                                A hyperlocal platform for Davao City that connects residents with locals for errands, urgent help, and skilled services in one dedicated marketplace.
                            </p>
                            <button className="view-project-button">VIEW PROJECT</button>
                        </div>
                    </div>

                    

                </div>
            </div>
        </>
    )
}

export default ProjectsPage
