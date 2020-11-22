import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid';

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
                    const id = nanoid();
                    return <Person {...person} key={id} />;
                })}
            </div>
        </div>
    );
};

export default Contacts;
