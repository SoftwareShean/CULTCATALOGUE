import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="requestForm">
            <h4>Have a favorite artist you'd like to add to the database?</h4>
            <form name="contact" method="POST" netlify>
                <input type="email" placeholder="First and Last Name" autoFocus required />
                <textarea type="text" placeholder="Type your message here..." className="message" required/>
                <button>SUBMIT</button>
            </form>
        </div>
    );
};

export default Contact;
