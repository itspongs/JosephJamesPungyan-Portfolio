import { useEffect, useRef, useState } from 'react'
import './SkillsPage.css'

import java from '../assets/logos/java.png'
import c from '../assets/logos/c++.png'
import html from '../assets/logos/html.png'
import css from '../assets/logos/css.png'
import javascript from '../assets/logos/javascript.png'
import node from '../assets/logos/node.png'
import react from '../assets/logos/react.png'
import git from '../assets/logos/git.png'
import sql from '../assets/logos/sql.png'

function SkillsPage(){
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
            <div className="skills-page">
                <div ref={ref} className={`skills-content ${inView ? 'visible' : ''}`}>
                    <div className="skills-header-wrapper">
                        <div className="skills-title-group">
                            <p className="skills-sub-header">SKILLS</p>
                            <h1 className="skills-title">Capabilities</h1>
                        </div>
                        <p className="skills-header-description">
                            Technologies and tools I've <br />
                            worked with so far.
                        </p>
                    </div>
                    <hr />
                    <div className="skills-container">

                        {/* Animation wrapper + hover inner box */}
                        <div className="sk-anim sk-anim-1">
                            <div className="languages-wrapper sk-hover">
                                <p className="label-text">LANGUAGES</p>
                                <div className="logo-item">
                                    <img src={java} alt="java" className="languages-logo" />
                                    <p className="logo-label">JAVA</p>
                                </div>
                                <div className="logo-item">
                                    <img src={c} alt="c++" className="languages-logo" />
                                    <p className="logo-label">C / C++</p>
                                </div>
                            </div>
                        </div>

                        <div className="sk-anim sk-anim-2">
                            <div className="web-wrapper sk-hover">
                                <p className="label-text">WEB</p>
                                <div className="logo-item">
                                    <img src={html} alt="html" className="web-logo" />
                                    <p className="logo-label">HTML</p>
                                </div>
                                <div className="logo-item">
                                    <img src={css} alt="css" className="web-logo" />
                                    <p className="logo-label">CSS</p>
                                </div>
                                <div className="logo-item">
                                    <img src={javascript} alt="javascript" className="web-logo" />
                                    <p className="logo-label">JAVASCRIPT</p>
                                </div>
                                <div className="logo-item">
                                    <img src={node} alt="node" className="web-logo" />
                                    <p className="logo-label">NODE</p>
                                </div>
                                <div className="logo-item">
                                    <img src={react} alt="react" className="web-logo" />
                                    <p className="logo-label">REACT</p>
                                </div>
                            </div>
                        </div>

                        <div className="sk-anim sk-anim-3">
                            <div className="tools-wrapper sk-hover">
                                <p className="label-text">TOOLS</p>
                                <div className="logo-item">
                                    <img src={git} alt="git" className="tools-logo" />
                                    <p className="logo-label">GIT</p>
                                </div>
                                <div className="logo-item">
                                    <img src={sql} alt="sql" className="tools-logo" />
                                    <p className="logo-label">SQL</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsPage
