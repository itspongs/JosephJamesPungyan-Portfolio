import './ErrorPage.css'

function ErrorPage() {
    return (
        <div className="error-page">
            <div className="error-content">
                <p className="error-label">PAGE NOT FOUND</p>
                <h1 className="error-code">404</h1>
                <hr className="error-line" />
                <p className="error-message">
                    Looks like this page doesn't exist or <br />
                    has been moved somewhere else.
                </p>
            </div>
        </div>
    )
}

export default ErrorPage