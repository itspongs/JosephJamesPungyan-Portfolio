import { useState, useEffect } from 'react'
import './BannerSection.css'

const texts = [
    "Aspiring Software Engineer",
    "Web Developer in Progress",
    "Computer Science Student",
    "Building the Future",
    "One Line at a Time",
    "Ako si Pongs"
]

function BannerSection() {
    const [currentText, setCurrentText] = useState(0)
    const [animating, setAnimating] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(false)
            setTimeout(() => {
                setCurrentText(prev => (prev + 1) % texts.length)
                setAnimating(true)
            }, 300)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
        <div className="banner-section-wrapper">
            <p className="banner-name">JOSEPH JAMES PUNGYAN - A.K.A PONGS</p>
            <p className={`text ${animating ? 'text-visible' : 'text-hidden'}`}>
                {texts[currentText]}
            </p>
            <hr className="banner-line" />
            <div className="banner-info">
                <p className="course">COMPUTER SCIENCE</p>
                <p className="university">ATENEO DE DAVAO UNIVERSITY</p>
                <p className="portfolio">SOFTWARE ENGINEER</p>    
            </div>
        </div>
        </>
    )
}

export default BannerSection