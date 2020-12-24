import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="requestForm">
            <h4>Have a favorite artist you'd like to add to the database?</h4>
            <form name="contact" method="POST" data-netlify="true" action="/about" >
                <input type="email" name="email" placeholder="What's your email?" autoFocus required />
                <textarea type="text" name="message" placeholder="Type your message here..." className="message" required/>
                <button type="submit">SEND</button>
            </form>
        </div>
    );
};

export default Contact;
