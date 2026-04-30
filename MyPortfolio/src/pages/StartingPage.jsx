import { useRef, useState } from 'react'

import pongs1 from '../assets/images/pongs1.jpg'
import pongs2 from '../assets/images/pongs2.jpg'
import pongs3 from '../assets/images/pongs3.jpg'
import pongs4 from '../assets/images/pongs4.jpg'
import pongs5 from '../assets/images/pongs5.jpg'
import './StartingPage.css'

function StartingPage() {

    const images = [pongs1, pongs2, pongs3, pongs4, pongs5]
    const [currentImage, setCurrentImage] = useState(0)
    const [nextImage, setNextImage] = useState(1)
    const [crossfading, setCrossfading] = useState(false)
    const intervalRef = useRef(null)
    const indexRef = useRef(0)

    const handleMouseEnter = () => {
        intervalRef.current = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % images.length
            setNextImage(indexRef.current)
            setCrossfading(true)
            setTimeout(() => {
                setCurrentImage(indexRef.current)
                setCrossfading(false)
            }, 700)
        }, 2500)
    }

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current)
    }

    return (
        <>
            <title>Joseph James Pungyan</title>
            <video autoPlay loop muted className="video-background">
                <source src="/background.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay"></div>
            <div className="content-wrapper">

                <div className="content-container">
                    <div className="profile-texts">
                        <div>
                            <p className="portfolio-text">
                                PORTFOLIO 2026 - STUDENT DEVELOPER
                            </p>
                        </div>
                        <div>
                            <p className="joseph-james-text">
                                JOSEPH JAMES
                            </p>
                            <p className="pungyan-text">
                                Pungyan
                            </p>
                        </div>
                        <div>
                            <hr className="bio-line" />
                            <p className="bio-text">
                                Just a guy who aspires to be successful and <br />
                                overcome every obstacle. Shaping the best <br />
                                version of myself.
                            </p>
                        </div>

                        <div className="button-wrapper desktop-only">
                            <button className="proceed-button">
                                ▶ Click Here to Proceed
                            </button>
                        </div>
                    </div>

                    <div className="pongs-picture-section">
                        <div
                            className="picture-wrapper"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={images[currentImage]}
                                className="pongs-picture base-image"
                                alt="Joseph James"
                            />

                            <img
                                src={images[nextImage]}
                                className={`pongs-picture overlay-image ${crossfading ? 'visible' : ''}`}
                                alt="Joseph James"
                            />
                        </div>

                        <div className="button-wrapper mobile-only">
                            <button className="proceed-button">
                                ▶ Click Here to Proceed
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StartingPage
