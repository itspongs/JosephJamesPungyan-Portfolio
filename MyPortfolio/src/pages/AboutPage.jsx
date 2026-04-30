import './AboutPage.css'

function AboutPage() {

    return (
        <>
        <div className="about-page">
            <div className="about-header-wrapper">
                <div className="about-title-group">
                    <p className="about-me-sub-header">ABOUT ME</p>
                    <h1 className="about-me-title">
                        Who am I?
                    </h1>
                </div>
                <p className="about-me-description">
                    Get to know the person <br />
                    behind the code 
                </p>
            </div>
            <hr className="about-main-line"></hr>

            <div className="top-sections-wrapper">
                <div className="get-to-know-me-container">
                    <h3 className="about-header">Get to Know Me</h3>
                    <hr className="about-top-line" />
                    <p className="about-top-description">
                        A Second-Year student passionate about programming
                        and driven to become a software engineer. My journey
                        began in high school with learning HTML, and I am now
                        expanding my technical knowledge and skills in college,
                        currently pursuing my Computer Science degree at
                        Ateneo de Davao University
                    </p>
                </div>
                <div className="how-i-learn-container">
                    <h3 className="about-header">How I Learn</h3>
                    <hr className="about-top-line" />
                    <p className="about-top-description">
                        I grow through hands-on practice and active participation
                        in developer communities. I believe that building something
                        meaningful takes consistent progress, and my experiences
                        continue to fuel my motivation to dream big.
                    </p>
                </div>
            </div>
            
            <div className="bottom-sections-wrapper">
                <div className="current-focus-container">
                    <h3 className="about-header">
                        Current Focus
                    </h3>
                    <hr className="about-bottom-line" />
                    <p className="about-bottom-description">
                        Currently working on my web development skills for future 
                        opportunities. Using my HTML and CSS knowledge and skills,
                        I am slowly building a full-stack foundation by learning
                        React and Node.js. I have yet to explore other libraries that
                        would help me pursue web development.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '16px' }}>
                        <p className="current-focus-tags">WEB DEVELOPMENT</p>
                        <p className="current-focus-tags">FULL-STACK</p>
                        <p className="current-focus-tags">HTML/CSS</p>
                    </div>
                </div>
                <div className="future-goals-container">
                    <h3 className="about-header">
                        Future Goals
                    </h3>
                    <hr className="about-bottom-line" />
                    <p className="about-bottom-description">
                        Learn core languages like Python and explore programming-related
                        side hustles to support my studies and daily needs — while
                        working toward becoming a professional software engineer.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '16px' }}>
                        <p className="future-goals-tags">PYTHON</p>
                        <p className="future-goals-tags">FREELANCE</p>
                        <p className="future-goals-tags">SOFTWARE ENGINEER</p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default AboutPage
