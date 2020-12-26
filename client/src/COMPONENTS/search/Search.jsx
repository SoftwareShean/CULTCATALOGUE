import React, {useState} from 'react'
import { getArtists } from '../../services/apiCalls';
import './Search.css'
import SearchIcon from './SearchIcon';

function Search() {
    const [{search, searchResults}] = useState('');
    const [formData, setFormData] = useState({})

    //make an endpoint to send all queries from searchResults in case requests arent made for empty results
    const searchDatabase = async (e) => {
        e.preventDefault();
        setFormData({ ...formData, search: e.target.value })
        try {
            const query = { ...formData }
            const search = query.search
            const artists = await getArtists()
            const filter = artists.filter(artist => artist.name = search)
            const searchResults = {...filter}
                console.log('this is search results', searchResults)
        } catch (error) {
            console.log('there was an error:', error.message)
        }
    }
    
    return (
        <div className="search">
            <div className="searchField">
                <div className="searchIcon">
                <SearchIcon />
                </div>
                <input
                    name="search"
                    placeholder='Find an artist in the database'
                    autoComplete="off"
                    autoFocus
                    value={formData[search]}
                    onChange={searchDatabase}
                    />
                </div>
            <div className="results">
            {
                searchResults ? 
                    <h1>{searchResults[0]}</h1> :
                    <></>
            }
            </div>
        </div>
    );
};

export default Search;