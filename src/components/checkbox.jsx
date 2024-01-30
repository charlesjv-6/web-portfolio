import React from "react";
import PropTypes from "prop-types";

import { trunctateString } from "../scripts/util";

export default function Checkbox({ name, values, index }){
    // return the Dropdown component
    return (
        <fieldset key={index} className="checkbox">
            <legend>{name ? name.toUpperCase() : ''}</legend>
            <div>
                {values.length > 0 &&
                    values.map((value, i) => (
                        <span key={i}>
                            <input type="checkbox" value={value} id={`${value}_${i}`} />
                            <label htmlFor={`${value}_${i}`}>{trunctateString(7, value)}</label>
                        </span>
                    ))
                }
            </div>
        </fieldset>
    );
}

// define props type
Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired
};

// define default prop values
Checkbox.defaultProps = {
    name: "Checkbox",
    values: ["Option 1", "Option 2", "Option 3"],
    index: 0
};