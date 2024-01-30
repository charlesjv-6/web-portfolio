import React from "react";
import PropTypes from "prop-types";

export default function DateRange({ name, index }){
    // return the Dropdown component
    return (
        <div className="date-range">
            <p>{name}</p>
            <div>
                <label htmlFor={`${name}_start_${index}`}>From:</label>
                <input type="date" id={`${name}_start_${index}`} />
                <label htmlFor={`${name}_end_${index}`}>To:</label>
                <input type="date" id={`${name}_end_${index}`} />
            </div>
        </div>
    );
}

// define props type
DateRange.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

// define default prop values
DateRange.defaultProps = {
    name: "Dropdown",
    index: 0
};