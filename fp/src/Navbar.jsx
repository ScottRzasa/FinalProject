import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid collapse navbar-collapse">
            <a className="navbar-brand " href="#">Volkswagen Microsite</a>
                <nav className="mb-2 mb-lg-0">
                    <Link to="/">Home</Link> |
                    <Link to="/history">History</Link> |
                    <Link to="/gallery">Gallery</Link> |
                    <Link to="/resources">Resources</Link>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar