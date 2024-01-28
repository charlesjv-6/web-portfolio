import React from "react";
import Header from "../components/header";
import SideBar from "../layouts/side-bar";
import CardContainer from "../layouts/card-container";

export default function Index() {
    const cardDataArray = [
        {
            title: 'Title',
            description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
            price: 15000,
            discountedPrice: 9000
        },
        {
            title: 'Title',
            description: 'Description',
            image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
            price: 15000,
            discountedPrice: 9000
        }
    ];
    const cardDataArray2 = [
        {
            title: 'Title',
            description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
        },
        {
            title: 'Title',
            description: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit lorem Ipsum dolor sit amet, consectetur adipiscing elit',
            image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
        }
    ];
    return (
        <section className="index max-size">
            <Header headerTitle="Home"/>
            <CardContainer containerTitle="Card Container 1" cardDataArray={cardDataArray}/>
            <CardContainer containerTitle="Card Container 2" cardDataArray={cardDataArray2}/>
        </section>
    );
}