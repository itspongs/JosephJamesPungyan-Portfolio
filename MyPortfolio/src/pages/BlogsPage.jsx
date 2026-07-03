import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './BlogsPage.css'
import ReadLogo from '../assets/logos/read.png'
import DateLogo from '../assets/logos/date.png'
import TimeLogo from '../assets/logos/time.png'

import Entry1 from './blogs/entry1'
import Entry2 from './blogs/entry2'
import Entry3 from './blogs/entry3'

const blogs = [Entry1, Entry2, Entry3]

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

                        {blogs.map((blog) => (
                            <div key={blog.id} className="blog-card">
                                <div className="blog-card-info">
                                    <div className="blog-entry-row">
                                        <img src={ReadLogo} className="blog-entry-logo" alt="" />
                                        <p className="blog-entry">{blog.entry}</p>
                                    </div>
                                    <h3 className="blog-title-name">{blog.title}</h3>
                                    <hr className="blog-divider" />
                                    <p className="blog-excerpt">{blog.excerpt}</p>
                                    <div className="blog-tags-row">
                                        {blog.tags.map((tag, i) => (
                                            <p key={i} className="blog-tag">{tag}</p>
                                        ))}
                                    </div>
                                    <div className="blog-footer-row">
                                        <div className="blog-footer-item">
                                            <img src={DateLogo} className="blog-footer-logo" alt="" />
                                            <p className="blog-date">{blog.date}</p>
                                        </div>
                                        <div className="blog-footer-item">
                                            <img src={TimeLogo} className="blog-footer-logo" alt="" />
                                            <p className="blog-read">{blog.readTime}</p>
                                        </div>
                                    </div>
                                    <Link to={`/blog/${blog.id}`} className="read-more-button">
                                        READ MORE
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogsPage
