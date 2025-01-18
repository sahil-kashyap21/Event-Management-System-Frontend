import React from 'react';
import './Contact.css'; // Importing the CSS file

const Contact = () => {
    return (
        <div className="contact-container"> {/* Applying the CSS class */}
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <p>Email: contact@eventplanner.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
    );
};

export default Contact;
