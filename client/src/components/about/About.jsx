import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
        <div className="about">
            <h1>ABOUT</h1>
            <p>The CULTCATALOGUE API was developed from a passion project started in 2014.</p>
            <p>Inspired by <a href="https://www.greenlightbookstore.com/book/9780300181104" target="_blank" rel="noopener noreferrer">This Will Have Been: Art, Love & Politics in the 1980's</a>, the CULTCATALOGUE API serves as a collection of impactful artists from around the globe. Each entry into the database includes a photo of the artist, a short biography, the gallery that represents them, and a selected work from their career.</p>
            <p><br /><Link to="/contact">Have a request?</Link></p>
        </div>
    )
}

export default About;