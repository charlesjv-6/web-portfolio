import React, { useState } from "react";
import Plus from '../assets/icons/plus.svg';
import Minus from '../assets/icons/minus.svg';

export default function QnA({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="question-and-answer" onClick={()=> setIsOpen(!isOpen)}>
            <div className="question">
                {question.toUpperCase()}
                <img src={!isOpen ? Plus : Minus} alt={`${isOpen ? 'collapse' : 'expand'}-icon`}/>
            </div>
            <div className={`answer ${!isOpen ? 'hidden' : ''}`}>
                {answer}
            </div>
        </div>
    );
}