import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <Link to="/" className="text-decoration-none"><a className="navbar-brand">
              <div className="logo-container">
                <img className="logo" src="Volkswagen images/3dlogo4.png" alt="Volkswagen Logo" />
              </div>
              Volkswagen Microsite
            </a>
            </Link>
            <div className="container-fluid collapse navbar-collapse">
            <a className="navbar-brand"></a>
                <nav className="mb-2 mb-lg-0">
                    <Link to="/" className="text-decoration-none link-secondary">Home</Link> |
                    <Link to="/about" className="text-decoration-none link-secondary">About</Link> |
                    <Link to="/history" className="text-decoration-none link-secondary">History</Link> |
                    <Link to="/gallery" className="text-decoration-none link-secondary">Gallery</Link> |
                    <Link to="/resources" className="text-decoration-none link-secondary">Resources</Link>
                </nav>
            </div>
        </nav>
        
    )
}

export default Navbar