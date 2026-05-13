import './BlogModal.css'

function BlogModal({ blog, onClose }) {
    if (!blog) return null

    return (
        <div className="blog-modal-overlay" onClick={onClose}>
            <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="blog-modal-close" onClick={onClose}>✕</button>
                <div className="blog-modal-body">
                    <p className="blog-modal-entry">{blog.entry}</p>
                    <h2 className="blog-modal-title">{blog.title}</h2>
                    <p className="blog-modal-excerpt">{blog.excerpt}</p>
                    <div className="blog-modal-meta">
                        <span>{blog.date}</span>
                        <span>·</span>
                        <span>{blog.readTime}</span>
                    </div>
                    <div className="blog-modal-tags">
                        {blog.tags.map((tag, i) => (
                            <span key={i} className="blog-modal-tag">{tag}</span>
                        ))}
                    </div>
                    <hr className="blog-modal-divider" />
                    <div className="blog-modal-text">
                        {Array.isArray(blog.content)
                            ? blog.content.map((item, i) =>
                                item.type === 'heading'
                                    ? <h3 key={i} className="blog-modal-section-title">{item.text}</h3>
                                    : item.type === 'image-group'
                                    ? <div key={i} className="blog-modal-image-group">
                                        {item.images.map((img, j) => (
                                            <div key={j} className="blog-modal-image-item">
                                                <img src={img.src} alt={img.caption} className="blog-modal-img" />
                                                <p className="blog-modal-caption">{img.caption}</p>
                                            </div>
                                        ))}
                                      </div>
                                    : <p key={i} className="blog-modal-paragraph">{item.text || item}</p>
                            )
                            : <p className="blog-modal-paragraph">{blog.content}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogModal
