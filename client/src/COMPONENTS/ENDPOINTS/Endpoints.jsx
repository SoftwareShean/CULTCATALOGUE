import React from 'react';
import './Endpoints.css'
import SampleJson from '../../ASSETS/SAMPLEJSON.png'

function Endpoints() {
    return (
        <div className="sample">
            <h1>ENDPOINTS & JSON</h1>
            <h4>/artist</h4>
            <blockquote>
                WILL RETURN DATA FOR ALL ARTISTS IN THE API
            </blockquote>
            <h4>/artist/id</h4>
            <blockquote>
                WILL RETURN DATA FOR A SPECIFIED ARTIST ONLY
            </blockquote>
            <h4>/random</h4>
            <blockquote>
                WILL RETURN A RANDOM ARTIST FROM THE API EACH TIME IT IS CALLED
            </blockquote>
            <h4>SAMPLE JSON</h4>
                <img src={SampleJson} alt="sample json"/>
            </div>
    )
}

export default Endpoints;
