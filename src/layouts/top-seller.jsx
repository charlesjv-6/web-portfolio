import React from "react";
import Card from "../components/card";
import { sampleData } from "../scripts/static-data";

export default function TopSeller() {
    function filterData(tag) {
        return sampleData.filter(product => {
            return product.tags.some(t => t === tag);
        });
    }
    
    const filteredData = filterData('Top Seller').slice(0, 4);
    const filteredData2 = filterData('Featured').slice(0, 4);

    return (
        <div className="related">
            <h1>TOP SELLERS</h1>
            <div className="related-list">
                {
                    filteredData.length > 0 && filteredData.map((item, index) => {
                        return <Card id={item.id} key={index} title={item.title} description={item.shortDescription} image={item.imageArray[0]} price={item.price} discountedPrice={item.discountedPrice}/>
                    })
                }
            </div>
            <h1>FEATURED PROJECTS</h1>
            <div className="related-list">
                {
                    filteredData2.length > 0 && filteredData2.map((item, index) => {
                        return <Card id={item.id} key={index} title={item.title} description={item.shortDescription} image={item.imageArray[0]} price={item.price} discountedPrice={item.discountedPrice}/>
                    })
                }
            </div>
        </div>
    );
}