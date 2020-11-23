import React, { useContext } from 'react';
import { ChatboxContext } from '../../ChatboxContext';
import './Person.css';

const Person = ({ name, imgSrc, phno, lastMessage, messages, id, address }) => {
    const { profile } = useContext(ChatboxContext);
    const [details, setDetails] = profile;
    const changeChatBox = () => {
        setDetails({
            name: name,
            imgSrc: imgSrc,
            messages: messages,
            id: id,
            phno: phno,
            address: address,
        });
    };

    return (
        <div
            className={'person ' + (details.id == id ? 'active' : '')}
            onClick={changeChatBox}
        >
            <span className="person__avatar">
                <img src={imgSrc} alt="Rishab Lamba" />
            </span>
            <span className="person__info">
                <span className="person__name">{name}</span>
                <span className="person__statusMsg">{phno}</span>
                <span className="person__lastMessage">{lastMessage}</span>
            </span>
        </div>
    );
};

export default Person;
