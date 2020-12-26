import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import './Crum.css';

function Crum() {
  const [value, toggle] = useToggle(false)
    if (value) return (
        <div className="crum">
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
        <div className="crum">
            <div className="crumHeader">
            <h1>NOT EDITING</h1>
                <button onClick={toggle}>UPDATE</button>
                <button onClick={toggle}>ADD</button>
            </div>
        </div>
    );
};

export default Crum;
