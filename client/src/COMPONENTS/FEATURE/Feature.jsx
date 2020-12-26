import React from 'react';
import './Feature.css'
import LOADING from '../../assets/loading.gif'


function Feature({ loading, data, error }) {
    if (loading) return <img src={LOADING} />;
    if (error)
    return (<pre>{JSON.stringify(error, null, 2)}</pre>)
    const artistName = JSON.stringify(data.name).toUpperCase().replace("[", "").replace("\"", "").replace("\"", "").replace("]", "")
    return (
        <div className="feature">
                <div className="artistFeature">
                    <h1>ARTIST SPOTLIGHT</h1>
                    <img src={data.portraitImg[0]} alt="Artist Portrait" />
                    <h2>{artistName}</h2>
                    <p>{data.artistBio[0].description}</p>
                </div>
            <h1></h1>
        </div>
    );
};

export default Feature;
