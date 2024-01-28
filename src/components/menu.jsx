import React, { useState } from "react";
import PropTypes from "prop-types";

import Bullet from '../assets/icons/Bullet.svg';
import Expand from "../assets/icons/Expand.svg";
import Collapse from "../assets/icons/Collapse.svg";

export default function Menu({ parent, parentIcon, parentLink, child }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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

Menu.defaultProps = {
    parent: 'Menu Item',
    parentIcon: Bullet,
    child: []
};