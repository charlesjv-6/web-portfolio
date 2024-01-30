import React from "react";
import Button from "../components/button";

export default function DetailContainer({detailArray}){
    const formattedPrice = detailArray.price.toLocaleString();
    return(
        <div className="detailcontainer">
            <section className="detail-section">
                <div>
                    <img src={detailArray.image} alt={detailArray.title}/>
                </div>
            </section>
            <section  className="detail-section1">
                <div className="detail-title">
                    <h1>{detailArray.title}</h1>
                    <h1>Php {formattedPrice}</h1>
                </div>
                <div   className="detail-description">
                    <p>{detailArray.description} </p>
                </div>
                <Button type= '1' label='Add to Cart'/>
            </section>
        </div>
    )
}