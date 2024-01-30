import React from "react";
import DetailContainer from "../layouts/detail-container";
import Header from "../components/header";

export default function Details(){
    const sampleProduct= 
        {
            title: 'Product',
            description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
            price: 15000,
            discountedPrice: 9000
        }
    
    return(
        <section>
            <Header headerTitle="Product Detail"/>
            <DetailContainer  detailArray={sampleProduct}/>
        </section>
    );
}

