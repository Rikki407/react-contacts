import React from 'react';
import './ContactListItem.css';

const ContactListItem = ({ name, imgSrc, statusMessage, unreadMessages }) => {
    return (
        <div className="person">
            <span className="person__avatar">
                <img
                    src="http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg"
                    alt="Rishab Lamba"
                />
            </span>
            <span className="person__info">
                <span className="person__name">Sacha Griffin</span>
                <span className="person__statusMsg">
                    Super deep status message blah blah
                </span>
                <span className="person__unreadMessages">11</span>
            </span>
        </div>
    );
};

export default ContactListItem;
