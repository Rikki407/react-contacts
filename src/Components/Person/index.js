import React from 'react';
import './Person.css';

const Person = ({ name, imgSrc, statusMessage }) => {
    return (
        <div className="person">
            <span className="person__avatar">
                <img src={imgSrc} alt="Rishab Lamba" />
            </span>
            <span className="person__info">
                <span className="person__name">{name}</span>
                <span className="person__statusMsg">{statusMessage}</span>
            </span>
        </div>
    );
};

export default Person;
