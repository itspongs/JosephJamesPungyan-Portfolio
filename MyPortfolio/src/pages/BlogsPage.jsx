import { useEffect, useRef, useState } from 'react'
import './BlogsPage.css'
import ReadLogo from '../assets/logos/read.png'
import DateLogo from '../assets/logos/date.png'
import TimeLogo from '../assets/logos/time.png'

function BlogsPage(){
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
            <div className="blog-page">
                <div ref={ref} className={`blog-content ${inView ? 'visible' : ''}`}>
                    <div className="blog-header-wrapper">
                        <div className="blog-title-group">
                            <p className="blog-sub-header">BLOGS</p>
                            <h1 className="blog-title">My Blogs</h1>
                        </div>
                        <p className="blog-header-description">
                            Thoughts, stories, and ideas <br />
                            from my journey.
                        </p>
                    </div>
                    <hr />

                    <div className="blogs-grid">
                        <div className="blog-card">
                            <div className="blog-card-info">
                                <div className="blog-entry-row">
                                    <img src={ReadLogo} className="blog-entry-logo" alt="" />
                                    <p className="blog-entry">BLOG ENTRY #1</p>
                                </div>
                                <h3 className="blog-title-name">
                                    ConQuest, Our Final Java Project
                                </h3>
                                <hr className="blog-divider" />
                                <p className="blog-excerpt">
                                    How we built and finalized our Final Java Project
                                    as our exit ticket for our Intermediate Programming
                                    major course in our First Year, Second Semester,
                                    and what I have learned throughout this journey.
                                </p>
                                <div className="blog-tags-row">
                                    <p className="blog-tag">JAVA</p>
                                    <p className="blog-tag">PROJECT</p>
                                    <p className="blog-tag">QUIZ</p>
                                    <p className="blog-tag">COLLEGE</p>
                                </div>
                                <div className="blog-footer-row">
                                    <div className="blog-footer-item">
                                        <img src={DateLogo} className="blog-footer-logo" alt="" />
                                        <p className="blog-date">APRIL 27, 2026</p>
                                    </div>
                                    <div className="blog-footer-item">
                                        <img src={TimeLogo} className="blog-footer-logo" alt="" />
                                        <p className="blog-read">7 MINUTES READ</p>
                                    </div>
                                </div>
                                <button className="read-more-button">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogsPage
