import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){

    return(
        <>
            <h4>Volkswagen Microsite</h4>
            <nav>
                
                <Link to="/">Home</Link> |
                <Link to="/history">History</Link> |
                <Link to="/gallery">Gallery</Link> |
                <Link to="/resources">Resources</Link>

            </nav>
        </>
    )
}

export default Navbar