import React from 'react';
import ContactsNav from '../ContactsNav';
import ContactListItem from '../Person';
import './Contacts.css';

const Contacts = () => {
    return (
        <div>
            <ContactsNav />
            <div className="contactList">
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg"
                    name="Sacha Griffin"
                    statusMessage="Super deep status message blah blah"
                    lastMessage="2 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg"
                    name="Debby Jones"
                    statusMessage="New day, fresh start, fresh eadaf"
                    lastMessage="5 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg"
                    name="Sacha Griffin"
                    statusMessage="Life becomes more peaceful when"
                    lastMessage="12 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg"
                    name="Johhny McGrump"
                    statusMessage="Please do not disturb"
                    lastMessage="34 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg"
                    name="Tommy Tom"
                    statusMessage="On vacation for two weeks"
                    lastMessage="55 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg"
                    name="Sacha Griffin"
                    statusMessage="Super deep status message blah blah"
                    lastMessage="2 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg"
                    name="Debby Jones"
                    statusMessage="New day, fresh start, fresh eadaf"
                    lastMessage="5 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg"
                    name="Sacha Griffin"
                    statusMessage="Life becomes more peaceful when"
                    lastMessage="12 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg"
                    name="Johhny McGrump"
                    statusMessage="Please do not disturb"
                    lastMessage="34 mins"
                />
                <ContactListItem
                    imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg"
                    name="Tommy Tom"
                    statusMessage="On vacation for two weeks"
                    lastMessage="55 mins"
                />
            </div>
        </div>
    );
};

export default Contacts;
