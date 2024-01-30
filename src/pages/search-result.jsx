import React from 'react';
import { useLocation } from 'react-router-dom';

import Filter from '../components/filter';
import Header from '../components/header';

export default function SearchResult(){
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');

    const sampleFilters = [
        {
            filterName: "Date",
            filterType: "date range",
        },
        {
            filterName: "Brand",
            filterType: "radio",
            filterValues: ["Nike", "Adidas", "Puma"]
        },
        {
            filterName: "Price",
            filterType: "range",
            filterValues: null 
        },
        {
            filterName: "Brand",
            filterType: "checkbox",
            filterValues: ["Nike", "Adidas", "Puma"]
        }
    ];
    
    return (
        <section className='search-result'>
            <Header />
            <Filter filters={sampleFilters}/>
        </section>
    );
}