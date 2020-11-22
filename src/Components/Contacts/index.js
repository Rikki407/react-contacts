import React, { useContext, useState } from 'react';

import ContactsNav from '../ContactsNav';
import Person from '../Person';
import './Contacts.css';
import { ChatboxContext } from '../../ChatboxContext';

const Contacts = () => {
    const { contacts } = useContext(ChatboxContext);
    const [contactList, setContactList] = contacts;
    return (
        <div>
            <ContactsNav />
            <div className="contactList">
                {contactList.map((person) => {
                    return <Person {...person} key={person.id} />;
                })}
            </div>
        </div>
    );
};

export default Contacts;
