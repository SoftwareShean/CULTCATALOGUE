import React, {useState, useEffect} from 'react'
import { getArtists } from '../../services/apiCalls';
import './Search.css'
import SearchIcon from './SearchIcon';

function Search() {
    const [artists, setArtists] = useState([]);
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = e => {
        const {value} = e.target;
        setSearch(value);
        const filtered = artists.filter(artist => artist.name.includes(value));
        console.log('filtered', filtered);
        setResults(filtered)
        console.log(results)
    };

    const fetchArtists = async () => {
        const artists = await getArtists();
        console.log('artists', artists);
        setArtists(artists);
    };

    useEffect(() => {
        fetchArtists();
    }, []);
    
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
                    value={search}
                    onChange={handleSearch}
                    />
                </div>
            <div className="results">
            {
                results.length > 0 && results.map(artist => <h1>{artist.name}</h1>)
            }
            </div>
        </div>
    );
};

export default Search;