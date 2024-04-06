import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Bullet from '../assets/icons/Bullet.svg';
import Expand from "../assets/icons/Expand.svg";
import Collapse from "../assets/icons/Collapse.svg";

export default function Menu({ parent, parentIcon, parentLink, child }) {
    // Initialize isOpen state with the value retrieved from localStorage or default to false
    const [isOpen, setIsOpen] = useState(localStorage.getItem(`${parent}-open-state`) === 'true' || false);

    // Function to toggle menu and update localStorage
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Update localStorage whenever isOpen state changes
    useEffect(() => {
        localStorage.setItem(`${parent}-open-state`, isOpen);
    }, [isOpen]);

    // Return the Menu component
    return (
        <div className="menu-list">
            <span onClick={toggleMenu}>
                <img src={parentIcon} alt="icon" />
                { parentLink ?
                    <a href={parentLink} >{parent.toUpperCase()}</a> :
                    parent.toUpperCase() 
                }
                { child.length > 0 && 
                    <img src={isOpen ? Collapse : Expand} alt="icon" />
                }
            </span>
            <ul className={isOpen ? 'open' : 'close'}>
                {child && child.map((item, index) => (
                    <li key={index}>
                        <a href={`/web-portfolio${item.link}`}>└─ {item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// define the props type
Menu.propTypes = {
    parent: PropTypes.string.isRequired,
    parentIcon: PropTypes.element,
    parentLink: PropTypes.string,
    child: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    )
};

// define the default prop values
Menu.defaultProps = {
    parent: 'Menu Item',
    parentIcon: Bullet,
    child: []
};