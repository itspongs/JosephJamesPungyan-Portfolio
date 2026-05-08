import './BlogsPage.css'

function BlogsPage(){
    return (
        <>
            <div className="blog-page">
                <div className="blog-header-wrapper">
                    <div className="blog-title-group">
                        <p className="blog-sub-header">
                            BLOGS
                        </p>
                        <h1 className="blog-title">
                            My Blogs
                        </h1>
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

                            <p className="blog-entry">BLOG ENTRY #1</p>                            
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
                                <p className="blog-date">APRIL 27, 2026</p>
                                <p className="blog-read">7 MINUTES READ</p>
                            </div>
                            <button className="read-more-button">READ MORE</button>                        
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlogsPage
