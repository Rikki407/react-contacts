import React, { useState, createContext } from 'react';

export const ChatboxContext = createContext();

export const DetailProvider = (props) => {
    const [details, setDetails] = useState({
        imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
        name: 'Sacha Griffin',
        messages: [
            {
                message:
                    'Suspendisse imperdiet nunc ac pellentes Integer mollis nisi nec nisl fauciubs. Curabitur bibendum ullamcorper lorem, in bibendum dui euismod gravida.',
                timeDelivered: '10:29 PM',
            },
            {
                message:
                    'Cras ut ante consequat, luctus massavel, sodales orci.',
                timeDelivered: '10:30 PM',
            },
        ],
    });

    const [contactList, setContactList] = useState([
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Super deep status message blah blah',
            lastMessage: '2 mins',
            messages: [
                {
                    message:
                        'Suspendisse imperdiet nunc ac pellentes Integer mollis nisi nec nisl fauciubs. Curabitur bibendum ullamcorper lorem, in bibendum dui euismod gravida.',
                    timeDelivered: '10:29 PM',
                },
                {
                    message:
                        'Cras ut ante consequat, luctus massavel, sodales orci.',
                    timeDelivered: '10:30 PM',
                },
            ],
        },
        {
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg',
            name: 'Debby Jones',
            statusMessage: 'New day, fresh start, fresh eadaf',
            lastMessage: '5 mins',
            messages: [
                {
                    message: 'Testing Message',
                    timeDelivered: '10:29 PM',
                },
                {
                    message:
                        'Aliquam maximus lacinia nisl nec as. Donec rhoncus efficitur augue, vitae',
                    timeDelivered: '10:30 PM',
                },
            ],
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Life becomes more peaceful when',
            lastMessage: '12 mins',
            messages: [],
        },
        {
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg',
            name: 'Johhny McGrump',
            statusMessage: 'Please do not disturb',
            lastMessage: '34 mins',
            messages: [],
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg',
            name: 'Tommy Tom',
            statusMessage: 'On vacation for two weeks',
            lastMessage: '55 mins',
            messages: [],
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Super deep status message blah blah',
            lastMessage: '2 mins',
            messages: [],
        },
        {
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg',
            name: 'Debby Jones',
            statusMessage: 'New day, fresh start, fresh eadaf',
            lastMessage: '5 mins',
            messages: [],
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Life becomes more peaceful when',
            lastMessage: '12 mins',
            messages: [],
        },
        {
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg',
            name: 'Johhny McGrump',
            statusMessage: 'Please do not disturb',
            lastMessage: '34 mins',
            messages: [],
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg',
            name: 'Tommy Tom',
            statusMessage: 'On vacation for two weeks',
            lastMessage: '55 mins',
            messages: [],
        },
        {
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
            name: 'Sacha Griffin',
            statusMessage: 'Super deep status message blah blah',
            lastMessage: '2 mins',
            messages: [],
        },
    ]);

    return (
        <ChatboxContext.Provider
            value={{
                profile: [details, setDetails],
                contacts: [contactList, setContactList],
            }}
        >
            {props.children}
        </ChatboxContext.Provider>
    );
};
