import React, {useState, useEffect} from 'react'
import { getArtists } from '../../services/apiCalls';
import RequestForm from '../request/RequestForm';
import './Search.scss'
import SearchIcon from './SearchIcon';
import SearchResults from './SearchResults';

function Search() {
    const [artists, setArtists] = useState([]);
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    const [noReturn, setNoReturn] = useState(false)

    const handleSearch = e => {
        const {value} = e.target;
        setSearch(value);
        const filtered = artists.filter(artist => artist.name.includes(value));
        console.log('filtered', filtered);
        if (filtered.length > 0) {
            setResults(filtered)
        } else {
            setNoReturn(true)
        }
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
                    results.length > 0 &&
                        results.map((artist, key) =>
                        <SearchResults
                            id={artist._id}
                            image={artist.portraitImg}
                            name={artist.name}
                            gallery={artist.galleryName[0].name}
                            bio={artist.artistBio[0].description}
                            key={key}
                        />
                        )    
                }
                {
                    noReturn ?
                    <div className="databaseRequest"> 
                            <RequestForm message={`If you can't find the artist you like, request they be entered to the database below`}/>  
                        </div> : <></>
    
                }
            </div>
        </div>
    );
};

export default Search;