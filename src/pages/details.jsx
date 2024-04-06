import React from "react";
import { useLocation } from 'react-router-dom';

import DetailContainer from "../layouts/detail-container";
import { sampleData } from "../scripts/static-data";
import Header from "../components/header";
import Related from "../layouts/related";

export default function Details(){
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id');

    const sampleProduct = sampleData.find( data => data.id === id);

    return(
        <section>
            <Header headerTitle="Product Detail"/>
            <DetailContainer product={ sampleProduct }/>
            <Related id={sampleProduct.id} tags={sampleProduct.tags}/>
        </section>
    );
}
