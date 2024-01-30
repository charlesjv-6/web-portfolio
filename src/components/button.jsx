import React from "react";

export default function Button({ onClick, type, label }) {
    const handleClick = ()=> {
        onClick();
    }
    const button = ()=> {
        return (
            <button className='regular-btn' onClick={handleClick}>
                { label.toUpperCase() }
            </button>
        )
    }
    const deleteButton = ()=> {
        return (
            <button className='delete-btn' onClick={handleClick}>
                { label.toUpperCase() }
            </button>
        )
    }
    return type === '1' ? button() : deleteButton();
}