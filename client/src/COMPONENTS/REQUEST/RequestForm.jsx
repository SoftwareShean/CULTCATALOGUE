import React from 'react';
import './RequestForm.css';

function RequestForm() {
    return (
        <div className="requestForm">
            <h4>Have a favorite artist you'd like to add to the database?</h4>
            <form name="artist request" method="POST" data-netlify="true" action="/about">
                <input required name="name" type="text" placeholder="Artists First and Last Name" autoFocus />
                <input required name="piece 1" type="text" placeholder="What's the name of your favorite piece by them?"/>
                <input required name="piece 2" type="text" placeholder="How about the name of another favorite piece?"/>
                <input required name="gallery" type="text" placeholder="Do you know what gallery represents them?" />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default RequestForm;
