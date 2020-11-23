import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { ChatboxContext } from '../../ChatboxContext';
import SenderMessage from '../SenderMessage';
import './MessageBody.css';

const MessageBody = () => {
    const { profile } = useContext(ChatboxContext);
    const [details, setDetails] = profile;
    return (
        <div className="messageBody">
            {details.messages.map((obj) => {                
                const id = nanoid();
                return (
                    <SenderMessage
                        message={obj.message}
                        timeDelivered={obj.timeDelivered}
                        key={id}
                    />
                );
            })}
        </div>
    );
};

export default MessageBody;
