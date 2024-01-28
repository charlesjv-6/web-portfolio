import React from 'react';
import PropTypes from 'prop-types'

export default function Header({ headerTitle }){
    // set the website title
    document.title = headerTitle;

    // return the header component
    return(
        <header className='page-header'>
            <h2>{headerTitle ? headerTitle.toUpperCase() : ''}</h2>
        </header>
    )
}

Header.propTypes = {
    headerTitle: PropTypes.string
};

Header.defaultProps = {
    headerTitle: 'Web Portfolio'
};