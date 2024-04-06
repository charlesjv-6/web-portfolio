import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useNavigate  } from 'react-router-dom';

export default function Header({ headerTitle, searchValue }){
    // set the website title
    document.title = headerTitle;
    const [value, setValue] = useState(searchValue);

    const navigate  = useNavigate();

    // handle form submission and redirect
    const handleSubmit = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements["primary-search"].value;
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    };

    // return the header component
    return (
        <header className='page-header'>
            <h2>{headerTitle ? headerTitle.toUpperCase() : ''}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="primary-search" id="search_0" placeholder='Search...' value={value ?? null} onChange={(e)=> setValue(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </header>
    );
}

// define props type
Header.propTypes = {
    headerTitle: PropTypes.string,
    searchValue: PropTypes.string,
};

// define props default values
Header.defaultProps = {
    headerTitle: 'Web Portfolio'
};


