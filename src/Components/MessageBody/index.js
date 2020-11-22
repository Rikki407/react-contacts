import React from 'react';
import SenderMessage from '../SenderMessage';
import './MessageBody.css';

const MessageBody = () => {
    return (
        <div className="messageBody">
            <SenderMessage
                message="Suspendisse imperdiet nunc ac pellentes Integer
                            mollis nisi nec nisl fauciubs. Curabitur bibendum
                            ullamcorper lorem, in bibendum dui euismod gravida."
                timeDelivered="10:29 PM"
            />
            <SenderMessage
                message="Cras ut ante consequat, luctus massa
                                            vel, sodales orci."
                timeDelivered="10:27 PM"
            />
            <SenderMessage message="XOXO" timeDelivered="10:28 PM" />
            <SenderMessage
                message="Aliquam maximus lacinia nisl nec as. Donec rhoncus efficitur augue, vitae"
                timeDelivered="10:29 PM"
            />
        </div>
    );
};

export default MessageBody;
