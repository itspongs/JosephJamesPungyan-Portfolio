import './Footer.css'

function Footer({ onContactClick, showContact }) {
    return (
        <footer className="footer">
            <p className="footer-copyright">© 2026 JOSEPH JAMES PUNGYAN</p>
            <button className="footer-contact-btn" onClick={onContactClick}>
                {showContact ? 'HIDE CONTACT' : 'CONTACT'}
            </button>
        </footer>
    )
}

export default Footer
