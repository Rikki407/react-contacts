import React from 'react';
import './SenderMessage.css';

const SenderMessage = ({ message, timeDelivered }) => {
    return (
        <div className="senderMessage">
            <div className="senderMessage__user">
                <div className="senderMessage__messageContainer">
                    <div className="senderMessage__message">
                        <p>{message}</p>
                    </div>
                    <span className="senderMessage__delivered">
                        {timeDelivered}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SenderMessage;
