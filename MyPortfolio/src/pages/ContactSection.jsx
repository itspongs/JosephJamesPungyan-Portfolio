import { useState } from 'react'
import './ContactSection.css'
import githubLogo from '../assets/logos/github.png'
import instagramLogo from '../assets/logos/instagram.png'
import facebookLogo from '../assets/logos/facebook.png'
import linkedInLogo from '../assets/logos/linked-in.png'

function ContactSection(){
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('jpungyan@addu.edu.ph')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return(
        <>
            <div className="contact-section">
                <h2 className="contact-title">Let's Connect</h2>
                <p className="contact-description">
                    Have something to say? Feel free to reach out.
                </p>

                <hr className="contact-divider" />

                <p className="contact-sub-header">GET IN TOUCH</p>
                <button onClick={handleCopy} className="contact-email">
                    jpungyan@addu.edu.ph
                </button>
                <div className="copied-container">
                    {copied && <p className="copied-text">Copied to clipboard!</p>}
                </div>

                <hr className="contact-divider" />

                <div className="contact-socials">
                    <a href="https://github.com/itspongs/" target="_blank" className="social-link">
                        <img src={githubLogo} alt="GitHub" className="social-logo" />
                        GitHub
                    </a>
                    <a href="https://www.instagram.com/itspongss/" target="_blank" className="social-link">
                        <img src={instagramLogo} alt="Instagram" className="social-logo" />
                        Instagram
                    </a>
                    <a href="https://www.facebook.com/josephjames.pungyan.5" target="_blank" className="social-link">
                        <img src={facebookLogo} alt="Facebook" className="social-logo" />
                        Facebook
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-james-pungyan-a14156406/" target="_blank" className="social-link">
                        <img src={linkedInLogo} alt="LinkedIn" className="social-logo" />
                        LinkedIn
                    </a>
                </div>

                <p className="contact-footer">© 2026 Joseph James Pungyan</p>
            </div>
        </>
    )
}

export default ContactSection
