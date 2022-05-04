import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="error-ctn">
            <p className="error-code">Error 404</p>
            <p className="error-msg">This page doesn't exist</p>
            <Link to="/" className="error-link">
                Get back to Home
            </Link>
        </div>
    );
}

export default Error;
