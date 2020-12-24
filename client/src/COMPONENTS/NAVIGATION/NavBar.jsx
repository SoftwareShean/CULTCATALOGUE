import React from 'react'; 
import {Link} from 'react-router-dom'
import './NavBar.css';


function NavBar() {
    return (
        <nav>
            <Link to="/"><h1>CULTCATALOGUE</h1></Link>
            <Link to="/about"><h2>ABOUT</h2></Link>
            <Link to="/example"><h2>SAMPLE JSON</h2></Link>
            <Link to="/add-form"><h2>ADD AN ARTIST</h2></Link>
            <Link to="/contact"><h2>CONTACT</h2></Link>
        </nav>
    )
};

export default NavBar; 
