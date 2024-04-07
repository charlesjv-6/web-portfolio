import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sampleData } from '../scripts/static-data';
import Filter from '../components/filter';
import Header from '../components/header';
import CardContainer from '../layouts/card-container';

export default function SearchResult(){
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');
    const filterKeyword = new URLSearchParams(search).get('filter-keyword');
    const [filter, setFilter] = useState('');

    const highestPrice = sampleData.reduce((maxPrice, product) => {
        return Math.max(maxPrice, product.price);
    }, 0);

    const [priceRange, setPriceRange] = useState(highestPrice / 2)

    useEffect(()=> {
        setFilter(query ?? filterKeyword);
    }, [query, filterKeyword]);

    const handleRangeChange = (value)=> {
        setPriceRange(value);
    }
    
    const results = filter && sampleData.filter(data => {
        // Convert price and discountedPrice to strings before comparison
        const priceStr = data.price.toString();
        const discountedPriceStr = data.discountedPrice.toString();
        
        // Check if any property includes the query
        return (
            (data.title.toLowerCase().includes(filter.toLowerCase()) ||
            data.description.toLowerCase().includes(filter.toLowerCase()) ||
            data.tags.find(tag => tag.toLowerCase().includes(filter.toLowerCase())) ||
            data.shortDescription.toLowerCase().includes(filter.toLowerCase()) ||
            priceStr === filter ||
            discountedPriceStr === filter) &&
            (data.price <= priceRange || (data.discountedPrice > 0 && data.discountedPrice <= priceRange))
        );  
    });

    const sampleFilters = [
        {
            filterName: "Price",
            filterType: "range",
            filterValues: null,
            filterMaxrange: highestPrice
        }
    ];
    
    return (
        <section className='search-result'>
            <Header headerTitle={'Search Result'} searchValue={query}/>
            <Filter filters={sampleFilters} onSubmit={(keyword) => setFilter(keyword)} onChange={(value)=> handleRangeChange(value)}/>
            { !results.length > 0 && 
                <div className='empty-result'>
                    <span className='search-query'>'{query}'</span>
                    <span className='result-found-count'>0 result found</span>
                </div>
            }
            { results && results.length > 0 &&
                <CardContainer cardDataArray={results} />
            }
        </section>
    );
}