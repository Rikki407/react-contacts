import React, { useContext, useState } from 'react';
import { ChatboxContext } from '../../ChatboxContext';
import './MessageForm.css';
const MessageForm = () => {
    const [newMessage, setNewMessage] = useState('');
    const { profile, contacts } = useContext(ChatboxContext);
    const [details, setDetails] = profile;
    const [contactList, setContactList] = contacts;

    const array_move = (arr, old_index, new_index) => {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
    };

    const formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };

    const updateNewMessage = (e) => {
        setNewMessage(e.target.value);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append(
            'Authorization',
            'Basic cmlzaGFibGFtYmEuaXQxQGJ2cC5lZHUuaW46TGFtYnUhMDk4'
        );
        const raw = JSON.stringify({
            messages: [
                {
                    body: newMessage,
                    to: '91' + details.phno,
                    from: '918178003966',
                },
            ],
        });
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch('https://rest.clicksend.com/v3/sms/send', requestOptions)
            .then((response) => console.log(response.json()))
            .then(() => {
                setDetails((oldDetails) => {
                    const oldMessages = oldDetails.messages;
                    const updatedMessages = [
                        ...oldMessages,
                        {
                            message: newMessage,
                            timeDelivered: formatAMPM(new Date()),
                        },
                    ];
                    return { ...oldDetails, messages: updatedMessages };
                });
                setContactList((oldContactList) => {
                    const newContactList = [...oldContactList];

                    for (var i = 0; i < newContactList.length; i++) {
                        if (newContactList[i].id === details.id) {
                            const oldMessages = newContactList[i].messages;
                            const updatedMessages = [
                                ...oldMessages,
                                {
                                    message: newMessage,
                                    timeDelivered: formatAMPM(new Date()),
                                },
                            ];
                            newContactList[i].messages = updatedMessages;
                            const recentContactList = array_move(
                                newContactList,
                                i,
                                0
                            );
                            return recentContactList;
                        }
                    }
                });
                setNewMessage('');
            })
            .catch((error) => console.log('error', error));
    };

    return (
        <div className="messageForm__container">
            <form className="messageForm" onSubmit={sendMessage}>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Type a message here..."
                    value={newMessage}
                    onChange={updateNewMessage}
                ></textarea>
                <button className="messageForm__sendBtn" type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30.2 30.1"
                    >
                        <path
                            className="st0"
                            d="M2.1 14.6C8.9 12 28.5 4 28.5 4l-3.9 22.6c-0.2 1.1-1.5 1.5-2.3 0.8l-6.1-5.1 -4.3 4 0.7-6.7 13-12.3 -16 10 1 5.7 -3.3-5.3 -5-1.6C1.5 15.8 1.4 14.8 2.1 14.6z"
                        />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default MessageForm;
