import React, { useState, createContext } from 'react';

export const ChatboxContext = createContext();

export const DetailProvider = (props) => {
    const [details, setDetails] = useState({
        id: 0,
        imgSrc:
            'https://avatars0.githubusercontent.com/u/26832011?s=460&u=3cf40170e111a16b316dc765a05610f38a53a236&v=4',
        name: 'Rishab Lamba',
        phno: '8178003966',
        lastMessage: '2 mins',
        address: 'Sector 7, Dwarka, Delhi',
        messages: [
            {
                message:
                    'Suspendisse imperdiet nunc ac pellentes Integer mollis nisi nec nisl fauciubs. Curabitur bibendum ullamcorper lorem, in bibendum dui euismod gravida.',
                timeDelivered: '10:29 AM',
            },
            {
                message:
                    'Cras ut ante consequat, luctus massavel, sodales orci.',
                timeDelivered: '10:30 AM',
            },
            {
                message:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aliquid facere quam? Omnis aut rerum sit necessitatibus harum, quaerat aliquid deleniti quis blanditiis impedit voluptatum ullam minima officiis vel vitae.',
                timeDelivered: '10:31 AM',
            },
        ],
    });

    const [contactList, setContactList] = useState([
        {
            id: 0,
            imgSrc:
                'https://avatars0.githubusercontent.com/u/26832011?s=460&u=3cf40170e111a16b316dc765a05610f38a53a236&v=4',
            name: 'Rishab Lamba',
            phno: '8178003966',
            lastMessage: '2 mins',
            address: 'Sector 7, Dwarka, Delhi',
            messages: [
                {
                    message:
                        'Suspendisse imperdiet nunc ac pellentes Integer mollis nisi nec nisl fauciubs. Curabitur bibendum ullamcorper lorem, in bibendum dui euismod gravida.',
                    timeDelivered: '10:29 AM',
                },
                {
                    message:
                        'Cras ut ante consequat, luctus massavel, sodales orci.',
                    timeDelivered: '10:30 AM',
                },
                {
                    message:
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem aliquid facere quam? Omnis aut rerum sit necessitatibus harum, quaerat aliquid deleniti quis blanditiis impedit voluptatum ullam minima officiis vel vitae.',
                    timeDelivered: '10:31 AM',
                },
            ],
        },
        {
            id: 1,
            imgSrc:
                'https://media-exp1.licdn.com/dms/image/C4E0BAQFBHfG_J5aAVQ/company-logo_200_200/0?e=2159024400&v=beta&t=uZJ8v19qXse4B7EN1hpp1p1A2fEjdXj27CErGVEMm2E',
            name: 'Kisan Testing',
            phno: '9810153260',
            lastMessage: '',
            address: 'Sector 20, Gurugram, Haryana',
            messages: [],
        },
        {
            id: 2,
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg',
            name: 'Deby Jones',
            phno: '8178003967',
            lastMessage: '',
            address: 'Sector 52, Noida',
            messages: [],
        },
        {
            id: 3,
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg',
            name: 'Johhny McGrump',
            phno: '8178003968',
            lastMessage: '',
            address: 'Paschim Vihar East, New Delhi',
            messages: [],
        },
        {
            id: 4,
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg',
            name: 'Tommy Tom',
            phno: '8178003969',
            lastMessage: '',
            address: 'Sector 7, Dwarka, Delhi',
            messages: [],
        },
        {
            id: 5,
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
            name: 'Sacha Griffin',
            phno: '8178003976',
            lastMessage: '',
            address: 'Sector 20, Gurugram, Haryana',
            messages: [],
        },
        {
            id: 6,
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg',
            name: 'Debby Jones',
            phno: '8178003986',
            lastMessage: '',
            address: 'Sector 52, Noida',
            messages: [],
        },
        {
            id: 7,
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_3.jpg',
            name: 'Sacha Griffin',
            phno: '8178003996',
            lastMessage: '',
            address: 'Paschim Vihar East, New Delhi',
            messages: [],
        },
        {
            id: 8,
            imgSrc:
                'http://vzkiss.com/demo/chatbox/images/avatar/avatar_4.jpeg',
            name: 'Johhny McGrump',
            phno: '8178004966',
            lastMessage: '',
            address: 'Sector 7, Dwarka, Delhi',
            messages: [],
        },
        {
            id: 9,
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_5.jpg',
            name: 'Tommy Tom',
            phno: '8178005966',
            lastMessage: '',
            address: 'Sector 20, Gurugram, Haryana',
            messages: [],
        },
        {
            id: 10,
            imgSrc: 'http://vzkiss.com/demo/chatbox/images/avatar/avatar_1.jpg',
            name: 'Sacha Griffin',
            phno: '8178006966',
            lastMessage: '',
            address: 'Sector 52, Noida',
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
