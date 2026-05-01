import { useEffect, useRef, useState } from 'react'
import './TimelinePage.css'

function TimelinePage(){
    const ref = useRef(null)
    const [inView, setInView] = useState(false)

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
            <div className="timeline-page">
                <div ref={ref} className={`timeline-content ${inView ? 'visible' : ''}`}>
                <div className="timeline-header-wrapper">
                    <div className="timeline-title-group">
                        <p className="timeline-sub-header">TIMELINE</p>
                        <h1 className="timeline-title">My Experiences</h1>
                    </div>
                    <p className="header-description">
                        A timeline of the work, growth, and <br />
                        experiences that brought me here.
                    </p>
                </div>
                <hr />
                <div className="timeline-content-section">
                    <div className="box-anim tl-anim-1">
                        <div className="first-container tl-hover">
                            <div className="timeline-year-row">
                                <h1 className="timeline-year">2021</h1>
                                <h3 className="timeline-subtitle">Introduction to Programming World</h3>
                            </div>
                            <hr className="timeline-line"/>
                            <p className="timeline-description">
                                Began with HTML basics, creating simple web pages during my third year of junior high school.
                            </p>
                            <p className="timeline-tags">HTML</p>
                        </div>
                    </div>
                    <div className="box-anim tl-anim-2">
                        <div className="second-container tl-hover">
                            <div className="timeline-year-row">
                                <h1 className="timeline-year">2023</h1>
                                <h3 className="timeline-subtitle">Basic UI and Database Development</h3>
                            </div>
                            <hr className="timeline-line"/>
                            <p className="timeline-description">
                                Learned and utilized my programming skills with Visual Basic (.NET) and SQL for creating basic UIs and managing databases.
                            </p>
                            <p className="timeline-tags">VISUAL BASIC (.NET)</p>
                            <p className="timeline-tags">SQL</p>
                            <p className="timeline-tags">UI</p>
                            <p className="timeline-tags">DATABASES</p>
                        </div>
                    </div>
                    <div className="box-anim tl-anim-3">
                        <div className="third-container tl-hover">
                            <div className="timeline-year-row">
                                <h1 className="timeline-year">2025</h1>
                                <h3 className="timeline-subtitle">Fundamentals of Programming</h3>
                            </div>
                            <hr className="timeline-line"/>
                            <p className="timeline-description">
                                Understanding fundamental programming concepts with C and improving my programming skills in HTML, together with CSS.
                            </p>
                            <p className="timeline-tags">C</p>
                            <p className="timeline-tags">HTML</p>
                            <p className="timeline-tags">CSS</p>
                        </div>
                    </div>
                    <div className="box-anim tl-anim-4">
                        <div className="present-container tl-hover">
                            <div className="timeline-year-row">
                                <h1 className="timeline-year">Present</h1>
                                <h3 className="timeline-subtitle">Java and Web Development</h3>
                            </div>
                            <hr className="timeline-line"/>
                            <p className="timeline-description">
                                Developed applications using Java while gaining exposure to React and Node.js, building foundational knowledge in both frontend and backend development.
                            </p>
                            <p className="timeline-tags">JAVA</p>
                            <p className="timeline-tags">REACT</p>
                            <p className="timeline-tags">NODE.JS</p>
                            <p className="timeline-tags">WEB DEVELOPMENT</p>
                            <p className="timeline-tags">FRONTEND</p>
                            <p className="timeline-tags">BACKEND</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TimelinePage