import React, {useState} from 'react';
import './SearchResults.css'

function SearchResults({ image, name, gallery, bio, id }) {
    const [toggleValue, setToggle] = useState(false);
    const [setStyle] = useState('')

    const toggle = (e) => {
        e.preventDefault();
        setToggle(!toggleValue)
    }

    const imageStyle = () => {
        setStyle(image)
    }

    const styling = {
        backgroundImage: `url(${ image })`
    };

        return (
        <div className="searchResults">
                <div className="artistImage" style={styling}>
                    {/* <img src={image} /> */}
                </div>
                <div className="artistData">
                    <h1>{name}</h1>
                    <h4>ID: {id}</h4>
                    <h4>{gallery} Gallery</h4>
                    <div className="bioReturn">
                    {toggleValue ? 
                    <p>{bio}<br /><a onClick={(e) => (setToggle(!toggleValue))}>LESS</a></p>
                    
                        :
                    <p>{bio.substring(0, 300)}...<br /><a onClick={(e) => (setToggle(!toggleValue))}>MORE</a></p>}
                    </div>
                </div>
        </div>
    );
}

export default SearchResults;
