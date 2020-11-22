import React, { useContext, useState } from 'react';
import { ChatboxContext } from '../../ChatboxContext';
import './MessageForm.css';
const MessageForm = () => {
    const [newMessage, setNewMessage] = useState('');
    const { profile, contacts } = useContext(ChatboxContext);
    const [details, setDetails] = profile;
    const [contactList, setContactList] = contacts;

    const updateNewMessage = (e) => {
        setNewMessage(e.target.value);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        setDetails((oldDetails) => {
            const oldMessages = oldDetails.messages;
            const updatedMessages = [
                ...oldMessages,
                { message: newMessage, timeDelivered: '2:30 PM' },
            ];
            return { ...oldDetails, messages: updatedMessages };
        });
        setContactList((oldContactList) => {
            const newContactList = [...oldContactList];
            const oldMessages = newContactList[details.id].messages;
            const updatedMessages = [
                ...oldMessages,
                { message: newMessage, timeDelivered: '2:30 PM' },
            ];
            newContactList[details.id].messages = updatedMessages;
            console.log(newContactList[details.id].messages);
            return newContactList;
        });
        setNewMessage('');
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
