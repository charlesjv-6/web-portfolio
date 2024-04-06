import React from "react";
import PropTypes from "prop-types";

import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
import Range from "./range";
import Radio from "./radio";
import DateRange from "./date-range";

export default function Filter({ filters, onSubmit}) {
    const handleOnSubmit = (event)=> {
        event.preventDefault();
        const keyword = event.target.elements["filter-keyword"].value;
        onSubmit(keyword);
    }

    // return the Filter element
    return (
        <section className="filter">
            <span>FILTER</span>
            <form action={handleOnSubmit}>
                <input type="text" placeholder="Enter Keyword" name="filter-keyword"/>
                <button type="submit" onSubmit={handleOnSubmit} >Filter</button>
                <div className="separator-vertical" />
                <div className="other-filters">
                    {filters.length > 0 &&
                        filters.map((filter, index) => {
                            const { filterName, filterType, filterValues, filterMaxrange } = filter;
                            switch (filterType) {
                                case "dropdown":
                                    return <Dropdown index={index} name={filterName} value={filterValues} />
                                case "checkbox":
                                    return <Checkbox index={index} name={filterName} value={filterValues} />
                                case "range":
                                    return <Range index={index} name={filterName} max={filterMaxrange}/>
                                case "radio":
                                    return <Radio index={index} name={filterName} value={filterValues} />
                                case "date range":
                                    return <DateRange name={filterName} index={index} />
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