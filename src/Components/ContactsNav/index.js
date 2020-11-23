import React from 'react';
import './ContactsNav.css';

const ContactsNav = () => {
    return (
        <nav className="contactsNav">
            <ul>
                <li>
                    <a href="#">Contacts</a>
                </li>
                <li className="active">
                    <a href="#">Recent</a>
                </li>
                <li>
                    <a href="#">
                        All
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <path
                                d="M24.3 11.3L16 19.6l-8.3-8.3c-0.4-0.4-1-0.4-1.4 0 -0.4 0.4-0.4 1 0 1.4l9 9 0 0 0 0c0.4 0.4 1 0.4 1.4 0l9-9c0.4-0.4 0.4-1 0-1.4C25.3 10.9 24.7 10.9 24.3 11.3z"
                                fill="#121313"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default ContactsNav;
