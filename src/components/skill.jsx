import React from "react";
import PropTypes from "prop-types";
import { yearsSince } from "../scripts/util";

import Code from "../assets/icons/Code.svg"

export default function Skill({ skillName, skillImage, dateAquired }){

    //return the skill component
    return (
        <div className="skill">
           <img src={skillImage} alt="icon" />
           <p className="skill-name">{skillName}</p>
           { dateAquired && <p className="skill-date">{yearsSince(dateAquired)}</p> }
        </div>
    );
}

// define the props type
Skill.propTypes = {
    skillName: PropTypes.string.isRequired,
    skillImage: PropTypes.element,
    dateAquired: PropTypes.string
};

// define the default prop values
Skill.defaultProps = {
    skillName: 'Skill Name',
    skillImage: Code
};
