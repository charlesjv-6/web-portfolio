import React from "react";
import PropTypes from "prop-types";

import { trunctateString } from "../scripts/util";

export default function Radio({ name, values, index }){
    // return the Radio component
    return (
        <fieldset className="radio">
            <legend>{name ? name.toUpperCase() : ''}</legend>
            <div>
                {values.length > 0 &&
                    values.map((value, i) => (
                        <span key={i}>
                            <input type="radio" value={value} id={`${value}_${i}`} name={`${name}_${index}`} />
                            <label htmlFor={`${value}_${i}`}>{trunctateString(7, value)}</label>
                        </span>
                    ))
                }
            </div>
        </fieldset>
    );
}

// define props type
Radio.propTypes = {
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number.isRequired
};

// define default prop values
Radio.defaultProps = {
    name: "Radio",
    values: ["Option 1", "Option 2", "Option 3"],
    index: 0
};