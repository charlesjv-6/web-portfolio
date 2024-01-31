import React from 'react';
import { useLocation } from 'react-router-dom';

import Filter from '../components/filter';
import Header from '../components/header';

export default function SearchResult(){
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');
    const foundResults = 0;

    const sampleFilters = [
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
            { !foundResults > 0 &&
                <div className='empty-result'>
                    <span className='search-query'>'{query}'</span>
                    <span className='result-found-count'>{foundResults} item(s) found</span>
                </div>
            }
            { foundResults > 0 &&
                <Filter filters={sampleFilters}/>
            }
        </section>
    );
}