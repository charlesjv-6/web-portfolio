import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Range({ name, index, max }) {
    const [value, setValue] = useState(max / 2); // Initial value for the range input

    // Handle change in the range input
    const handleRangeChange = (event) => {
        setValue(event.target.value);
    };

    // Return the Range component
    return (
        <div className="range">
            <label htmlFor={`${name}_${index}`}>{name} Range:</label>
            <div>
                <span>0</span>
                <input
                    type="range"
                    id={`${name}_${index}`}
                    value={value}
                    max={max}
                    onChange={handleRangeChange}
                />
                <span>{value}</span>
            </div>
        </div>
    );
}

// Define prop types
Range.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

// Define default prop values
Range.defaultProps = {
    name: "Range",
    index: 0,
};
