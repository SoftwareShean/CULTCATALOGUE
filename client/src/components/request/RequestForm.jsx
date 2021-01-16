import React, { useState } from 'react';
import {sendRequest} from '../../services/apiCalls'
import './RequestForm.scss';

function RequestForm({message}) {
    const [{ name, piece1, piece2, gallery }] = useState('')
    const [formData, setFormData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendRequest({...formData})
    }
    
    return (
        <div className="requestForm">
            <h2>{ message }</h2>
            <form name="artist request" onSubmit={handleSubmit} action="/about">
                <input
                    value={formData[name]}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    name="name"
                    type="text"
                    placeholder="Artists First and Last Name"
                />
                <input
                    value={formData[piece1]}
                    onChange={(e) => setFormData({...formData, piece1: e.target.value})} 
                    required 
                    name="piece1" 
                    type="text" 
                    placeholder="What's the name of your favorite piece by them?"
                />
                <input
                    value={formData[piece2]}
                    onChange={(e) => setFormData({...formData, piece2: e.target.value})} 
                    required 
                    name="piece2" 
                    type="text" 
                    placeholder="How about the name of another favorite piece?"
                />
                <input
                    value={formData[gallery]}
                    onChange={(e) => setFormData({...formData, gallery: e.target.value})} 
                    required 
                    name="gallery" 
                    type="text" 
                    placeholder="Do you know what gallery represents them?" 
                />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default RequestForm;
