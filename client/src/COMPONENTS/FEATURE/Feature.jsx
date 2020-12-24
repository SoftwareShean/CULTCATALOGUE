import React from 'react';
import './Feature.css'

function Feature({ loading, data, error }) {
    if (loading) return <h1>loading...</h1>;
    if (error)
    return (<pre>{JSON.stringify(error, null, 2)}</pre>)
    const artistName = JSON.stringify(data[0].name).toUpperCase().replace("[", "").replace("\"", "").replace("\"", "").replace("]", "")
    return (
        <div className="feature">
                {loading ? 
                <h1>Loading...</h1> :
                <div className="artistFeature">
                    <h1>ARTIST SPOTLIGHT</h1>
                    <img src={data[0].portraitImg[0]} alt="Artist Portrait"/>
                    <h2>{artistName}</h2>
                    <p>{data[0].artistBio[0].description}</p>
                </div>
                || error}
            <h1></h1>
        </div>
    );
};

export default Feature;
