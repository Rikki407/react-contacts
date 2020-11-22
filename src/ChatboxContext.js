import React, { useState, createContext } from 'react';

export const ChatboxContext = createContext();

export const DetailProvider = (props) => {
    const [details, setDetails] = useState({
        imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
        name: 'Sacha Griffin',
    });

    const [contactList, setContactList] = useState([
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Super deep status message blah blah',
            lastMessage: '2 mins',
        },
        {
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg',
            name: 'Debby Jones',
            statusMessage: 'New day, fresh start, fresh eadaf',
            lastMessage: '5 mins',
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Life becomes more peaceful when',
            lastMessage: '12 mins',
        },
        {
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg',
            name: 'Johhny McGrump',
            statusMessage: 'Please do not disturb',
            lastMessage: '34 mins',
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg',
            name: 'Tommy Tom',
            statusMessage: 'On vacation for two weeks',
            lastMessage: '55 mins',
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Super deep status message blah blah',
            lastMessage: '2 mins',
        },
        {
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg',
            name: 'Debby Jones',
            statusMessage: 'New day, fresh start, fresh eadaf',
            lastMessage: '5 mins',
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Life becomes more peaceful when',
            lastMessage: '12 mins',
        },
        {
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg',
            name: 'Johhny McGrump',
            statusMessage: 'Please do not disturb',
            lastMessage: '34 mins',
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg',
            name: 'Tommy Tom',
            statusMessage: 'On vacation for two weeks',
            lastMessage: '55 mins',
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Super deep status message blah blah',
            lastMessage: '2 mins',
        },
    ]);

    return (
        <ChatboxContext.Provider
            value={{
                header: [details, setDetails],
                contacts: [contactList, setContactList],
            }}
        >
            {props.children}
        </ChatboxContext.Provider>
    );
};
