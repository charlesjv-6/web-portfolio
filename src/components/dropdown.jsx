import React from "react";
import PropTypes from "prop-types";

export default function Dropdown({ name, values, index }){
    // return the Dropdown component
    return (
        <select className="dropdown" key={index} name={name} id={`${name}_${index}`}>
            {values.length > 0 &&
                values.map((value, i) => (
                    <option value={value} key={i}>{value}</option>
                ))
            }
        </select>
    );
}

// define props type
Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired
};

// define default prop values
Dropdown.defaultProps = {
    name: "Dropdown",
    values: ["Option 1", "Option 2", "Option 3"],
    index: 0
};