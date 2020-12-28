import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { getArtist, updateArtist } from '../../services/apiCalls';
import { withRouter } from 'react-router-dom';
import './Crum.css';

function Crum() {
    const [value, toggle] = useToggle(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let { id } = this.props.match.params;
        const updated = await updateArtist(id);
    }

    const retrieveArtist = async (e) => {
        e.preventDefault();
        let { id } = this.props.match.params;
        const response = await getArtist(id);
        console.log(response)
        return response
    }

    if (value) return (
        <div className="crum" onLoad={retrieveArtist}>
            <div className="crumHeader">
                <h1>EDIT ARTIST</h1>
                <button onClick={toggle}>SEND UPDATE</button>
            </div>
            <div className="editForm">
                <div className="inputs">
                    <label>Name:</label>
                    <input 
                        name="name"
                    />
                </div>
                <div className="inputs">
                    <label>Portrait:</label>
                    <input 
                        name="name"
                    />
                </div>
                <div className="inputs">
                    <label>Bio:</label>
                    <input 
                        name="name"
                    />
                </div>
                <div className="inputs">
                    <label>Gallery Name:</label>
                    <input 
                        name="name"
                    />
                </div>
                <div className="inputs">
                    <label>Portfolio:</label>
                    <input 
                        name="imageLink"
                    />
                    <br />
                </div>
            </div>
        </div>
        );
    return (
        <div className="crum" onLoad={retrieveArtist}>
            <div className="crumHeader">
            <h1>NOT EDITING</h1>
                <button onClick={toggle}>UPDATE</button>
            </div>
        </div>
    );
};

export default withRouter(Crum);
