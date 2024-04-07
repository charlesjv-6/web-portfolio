import React from "react";
import PropTypes from "prop-types";

import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
import Range from "./range";
import Radio from "./radio";
import DateRange from "./date-range";

export default function Filter({ filters, onSubmit, onChange }) {
    const handleOnSubmit = (event)=> {
        event.preventDefault();
        const keyword = event.target.elements["filter-keyword"].value;
        onSubmit(keyword);
    };

    const handleRangeChange = (value) => {
        onChange(value);
    };

    // return the Filter element
    return (
        <section className="filter">
            <span>FILTER</span>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Enter Keyword" name="filter-keyword"/>
                <button type="submit" onSubmit={handleOnSubmit} >Filter</button>
                <div className="separator-vertical" />
                <div className="other-filters">
                    {filters.length > 0 &&
                        filters.map((filter, index) => {
                            const { filterName, filterType, filterValues, filterMaxrange } = filter;
                            switch (filterType) {
                                case "dropdown":
                                    return <Dropdown key={`filter-${index}`} index={index} name={filterName} value={filterValues} />
                                case "checkbox":
                                    return <Checkbox key={`filter-${index}`} index={index} name={filterName} value={filterValues} />
                                case "range":
                                    return <Range key={`filter-${index}`} index={index} name={filterName} max={filterMaxrange} onChange={(value)=> handleRangeChange(value)}/>
                                case "radio":
                                    return <Radio key={`filter-${index}`} index={index} name={filterName} value={filterValues} />
                                case "date range":
                                    return <DateRange key={`filter-${index}`} name={filterName} index={index} />
                                default:
                                    return null;
                            }
                        })
                    }
                </div>
            </form>
        </section>
    );
}


// define the props type
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape({
        filterName: PropTypes.string.isRequired,
        filterType: PropTypes.string.isRequired,
        filterValues: PropTypes.arrayOf(PropTypes.string)
    }))
};

// define the props default values
Filter.defaultProps = {
    filters: []
};