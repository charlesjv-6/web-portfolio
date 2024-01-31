import React from "react";
import { useLocation } from 'react-router-dom';

import Header from "../components/header";
import CardContainer from "../layouts/card-container";
import { cardDataArray, cardDataArray2 } from "../scripts/static-data";

export default function Offers() {
    const { search } = useLocation();
    const type = new URLSearchParams(search).get('type');
    const headerTitle = ()=> type === "students" ? "Student Helper" : type === "business" ? "Business Solutions" : "Custom Websites/Softwares";

    const cardContainerTitle1 = ()=> type === "students" ? "School Projects" : type === "business" ? "[PHP] Web Systems" : "Custom Websites";
    const cardContainerTitle2 = ()=> type === "students" ? "School Activities" : type === "business" ? "[Node/React] Web Systems/Sites" : "Custom Softwares";

    return (
        <section className="offers">
            <Header headerTitle={headerTitle()} />
            <CardContainer containerTitle={cardContainerTitle1()} cardDataArray={cardDataArray}/>
            <CardContainer containerTitle={cardContainerTitle2()} cardDataArray={cardDataArray2}/>
        </section>
    );
}
