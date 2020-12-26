import React, {useState} from 'react';
import { createArtist } from '../../services/apiCalls';
import './AddArtist.css';

function AddArtist() {
    const [{ name, portraitImg }] = useState([""]);
    const [artistBio] = useState([{ description: '', source: '' }])
    const [gallery] = useState([{ name: '', website: '' }])
    const [portfolio] = useState([{title: '', description: '', dimension: '', date: '', images: [''], source: ''}])
    const [formData, setFormData] = useState({});

    const addArtist = async (e, formData) => {
        e.preventDefault();
        const create = await createArtist({...formData});
    }

    return (
        <div>
            <div className="addHeader">
            <h1>ADD AN ARTIST</h1><button>ADD</button>
            </div>
            <div className="editForm">
                <div className="inputs">
                    <label>Name:</label>
                    <input 
                        placeholder="Artist name"
                        name="name"
                        value={formData[name]}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label>Portrait:</label>
                    <input 
                        placeholder="Link to a picutre of the artist"
                        name="portraitImg"
                        value={formData[portraitImg]}
                        onChange={(e) => setFormData({ ...formData, portaitImg: e.target.value })}
                    />
                </div>
                <div className="inputs">
                    <label>Bio:</label>
                    <input 
                        placeholder="A short bio about the artist"
                        name="description"
                        value={formData[artistBio]}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label>Bio source:</label>
                    <input 
                        placeholder="Link to source for biography"
                        name="source"
                        value={formData[artistBio]}
                        onChange={(e) => setFormData({ ...formData, source: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label>Gallery Name:</label>
                    <input 
                        placeholder="Name of the gallery that represents them"
                        name="galleryName"
                        value={formData[gallery]}
                        onChange={(e)=> setFormData({...formData, gallery: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label>Gallery website:</label>
                    <input 
                        placeholder="Link to gallery website"
                        name="galleryWebsite"
                        value={formData[gallery]}
                        onChange={(e)=> setFormData({...formData, website: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label>Portfolio:</label>
                    <input 
                        placeholder="Title of selected work"
                        name="title"
                        value={formData[portfolio]}
                        onChange={(e)=> setFormData({...formData, title: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="description of selected work"
                        name="description"
                        value={formData[portfolio]}
                        onChange={(e)=> setFormData({...formData, description: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="dimensions of selected work"
                        name="dimension"
                        value={formData[portfolio]}
                        onChange={(e)=> setFormData({...formData, dimension: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="date selected work was created"
                        name="date"
                        value={formData[portfolio]}
                        onChange={(e)=> setFormData({...formData, date: e.target.value})}
                    />
                </div>
                <div className="inputs">
                    <label></label>
                    <input 
                        placeholder="image of selected work"
                        name="image"
                        value={formData[portfolio]}
                        onChange={(e)=> setFormData({...formData, image: e.target.value},
                        console.log({...formData}))}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddArtist;