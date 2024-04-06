import React from "react";
import Card from "../components/card";
import { sampleData } from "../scripts/static-data";

export default function Related({ id, tags }) {
    function getRelatedItems() {
        return sampleData.filter(product => {
            return tags.some(tag => product.tags.includes(tag) && product.id !== id);
        });
    }
    
    const filteredData = getRelatedItems();

    return (
        <div className="related">
            <h2>RELATED PRODUCTS</h2>
            <div className="related-list">
                {
                    filteredData.length > 0 && filteredData.map((item, index) => {
                        return <Card id={item.id} key={index} title={item.title} description={item.shortDescription} image={item.imageArray[0]} price={item.price} discountedPrice={item.discountedPrice}/>
                    })
                }
            </div>
        </div>
    );
}