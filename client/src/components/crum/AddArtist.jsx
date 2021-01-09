import React, {useState} from 'react';
import { createArtist } from '../../services/apiCalls';
import './AddArtist.scss';

function AddArtist() {
    const [formInputs, setFormInputs] = useState({
        artistName: '',
        portraitImg1: '',
        bioDescription: '',
        bioSource: '',
        galleryName: '',
        galleryWebsite: '',
        pieceTitle: '',
        pieceDescription: '',
        pieceDimension: '',
        pieceDate: '',
        pieceImage: '',
        pieceImageSource: ''
    });

    const addArtist = async (e) => {
        e.preventDefault();

        const {
            artistName,
            portraitImg1,
            bioDescription,
            bioSource,
            galleryName,
            galleryWebsite,
            pieceTitle,
            pieceDescription,
            pieceDimension,
            pieceDate,
            pieceImage,
            pieceImageSource
     } = formInputs;

        const newArtistData = {
            name: artistName,
            portraitImg: portraitImg1,
            artistBio: {
                description: bioDescription,
                source: bioSource
            },
            galleryName: [{
                name: galleryName, 
                website: galleryWebsite
            }], 
            portfolio: [{
                title: pieceTitle, 
                description: pieceDescription, 
                dimension: pieceDimension, 
                date: pieceDate, 
                images: [pieceImage], 
                source: pieceImageSource
            }
            ]
        };
        console.log(newArtistData)
        const create = await createArtist(newArtistData);
    }

    const handleChange = e => {
        const {value, name} = e.target;
        setFormInputs({...formInputs, [name]: value});
        console.log(formInputs)
    };

    return (
        <div>
            <div className="addHeader">
            <h1>ADD AN ARTIST</h1><button onClick={addArtist}>ADD</button>
            </div>
            <div className="editForm">
                <div className="inputs">
                    <label>Name:</label>
                    <input 
                        placeholder="Artist name"
                        name="artistName"
                        value={formInputs.artistName}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Portrait:</label>
                    <input 
                        placeholder="Link to a picutre of the artist"
                        name="portraitImg1"
                        value={formInputs.portraitImg1}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Bio:</label>
                    <input 
                        placeholder="A short bio about the artist"
                        name="bioDescription"
                        value={formInputs.bioDescription}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Bio source:</label>
                    <input 
                        placeholder="Link to source for biography"
                        name="bioSource"
                        value={formInputs.bioSource}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Gallery Name:</label>
                    <input 
                        placeholder="Name of the gallery that represents them"
                        name="galleryName"
                        value={formInputs.galleryName}
                        onChange={handleChange}

                    />
                </div>
                <div className="inputs">
                    <label>Gallery website:</label>
                    <input 
                        placeholder="Link to gallery website"
                        name="galleryWebsite"
                        value={formInputs.galleryWebsite}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label>Portfolio:</label>
                    <input 
                        placeholder="Title of selected work"
                        name="pieceTitle"
                        value={formInputs.pieceTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="description of selected work"
                        name="pieceDescription"
                        value={formInputs.pieceDescription}
                        onChange={handleChange}

                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="dimensions of selected work"
                        name="pieceDimension"
                        value={formInputs.pieceDimension}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="date selected work was created"
                        name="pieceDate"
                        value={formInputs.pieceDate}
                        onChange={handleChange}

                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="image of selected work"
                        name="pieceImage"
                        value={formInputs.pieceImage}
                        onChange={handleChange}

                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="Where is this image from?"
                        name="pieceImageSource"
                        value={formInputs.pieceImageSource}
                        onChange={handleChange}

                    />
                </div>
            </div>
        </div>
    );
}

export default AddArtist;