import React from 'react';
import ContactListItem from '../ContactListItem';
import './Contacts.css';

const Contacts = () => {
    return (
        <div>
            {/* Contacts Nav */}
            <div className="contactList">
                <ContactListItem />
                <ContactListItem />
                <ContactListItem />
                <ContactListItem />
                <ContactListItem />
                <ContactListItem />
            </div>
        </div>
    );
};

export default Contacts;
