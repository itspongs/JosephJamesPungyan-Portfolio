import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './BlogEntryPage.css'

import Entry1 from './blogs/entry1'
import Entry2 from './blogs/entry2'

const allBlogs = [Entry1, Entry2]

function BlogEntryPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const blog = allBlogs.find((b) => b.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!blog) {
        return (
            <div className="blog-entry-page">
                <button className="blog-entry-back" onClick={() => navigate(-1)}>← Go Back</button>
                <p className="blog-entry-not-found">Blog entry not found.</p>
            </div>
        )
    }

    return (
        <div className="blog-entry-page">
            <button className="blog-entry-back" onClick={() => navigate(-1)}>← Back</button>

            <div className="blog-entry-body">
                <p className="blog-entry-label anim-1">{blog.entry}</p>
                <h1 className="blog-entry-title anim-2">{blog.title}</h1>
                <p className="blog-entry-excerpt anim-3">{blog.excerpt}</p>

                <div className="blog-entry-meta anim-4">
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                </div>

                <div className="blog-entry-tags anim-4">
                    {blog.tags.map((tag, i) => (
                        <span key={i} className="blog-entry-tag">{tag}</span>
                    ))}
                </div>

                <hr className="blog-entry-divider anim-5" />

                <div className="blog-entry-text anim-6">
                    {Array.isArray(blog.content)
                        ? blog.content.map((item, i) =>
                            item.type === 'heading'
                                ? <h2 key={i} className="blog-entry-section-title">{item.text}</h2>
                                : item.type === 'subheading'
                                ? <h3 key={i} className="blog-entry-sub-title">{item.text}</h3>
                                : item.type === 'subheading-date'
                                ? <p key={i} className="blog-entry-sub-date">{item.text}</p>
                                : item.type === 'image-group'
                                ? <div key={i} className="blog-entry-image-group">
                                    {item.images.map((img, j) => (
                                        <div key={j} className="blog-entry-image-item">
                                            <img src={img.src} alt={img.caption} className="blog-entry-img" />
                                            <p className="blog-entry-caption">{img.caption}</p>
                                        </div>
                                    ))}
                                  </div>
                                : <p key={i} className="blog-entry-paragraph">{item.text || item}</p>
                        )
                        : <p className="blog-entry-paragraph">{blog.content}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogEntryPage
