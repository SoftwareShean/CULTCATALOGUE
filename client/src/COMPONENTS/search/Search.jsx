import React, {useState} from 'react'
import { getArtists } from '../../services/apiCalls';
import './Search.css'
import SearchIcon from './SearchIcon';

function Search() {
    const [{search, searchResults}] = useState('');
    const [formData, setFormData] = useState({})

    const searchDatabase = async (e) => {
        e.preventDefault();
        const artists = await getArtists()
        console.log('api call functions before filter', artists)
        const filter = () => {
            const artistsResults = artists.filter(artist => {
                return artist.name.toLowerCase().includes(formData[search])
            })
            console.log(artistsResults)
            // setFormData({[searchResults]: artistsResults})
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
                    onChange={(e) => setFormData({...formData, search: e.target.value}), searchDatabase}
                />
                </div>
            <div className="results">
            {
                searchResults ? 
                    <h1>{searchResults[0].name}</h1> :
                    <></>
            }
            </div>
        </div>
    );
};

export default Search;