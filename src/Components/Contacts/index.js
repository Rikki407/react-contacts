import React from 'react';
import ContactListItem from '../Person';
import './Contacts.css';

const Contacts = () => {
    return (
        <div>
            {/* Contacts Nav */}
            <div className="contactList">
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg"
                    name="Sacha Griffin"
                    statusMessage="Super deep status message blah blah"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg"
                    name="Debby Jones"
                    statusMessage="New day, fresh start, fresh eadaf"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg"
                    name="Sacha Griffin"
                    statusMessage="Life becomes more peaceful when"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg"
                    name="Johhny McGrump"
                    statusMessage="Please do not disturb"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg"
                    name="Tommy Tom"
                    statusMessage="On vacation for two weeks"
                />
            </div>
        </div>
    );
};

export default Contacts;
